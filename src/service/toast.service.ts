import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'warning' | 'error' | 'info';
export type ToastVariant = 'default' | 'solid' | 'minimal';
export type ToastPlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ToastInput {
  type?: ToastType;
  variant?: ToastVariant;
  placement?: ToastPlacement;
  title?: string;
  message?: string;
  duration?: number;
  showIcon?: boolean;
  showClose?: boolean;
  showProgress?: boolean;
  showProgressText?: boolean;
  stoppable?: boolean;
}

export interface ToastItem {
  id: string;
  type?: ToastType;
  variant: ToastVariant;
  placement: ToastPlacement;
  title?: string;
  message?: string;

  duration: number;

  remainingBase: number;
  displayRemaining: number;
  progress: number;

  showIcon?: boolean;
  showClose?: boolean;
  showProgress?: boolean;
  showProgressText?: boolean;

  stoppable: boolean;

  startedAt: number;
  paused: boolean;
  rafId?: number | null;
  hideTimer?: any;
}

type ToastDefaults = {
  type: ToastType;
  variant: ToastVariant;
  placement: ToastPlacement;
  duration: number;
  showIcon: boolean;
  showClose: boolean;
  showProgress: boolean;
  showProgressText: boolean;
  stoppable: boolean;
};

@Injectable({ providedIn: 'root' })
export class ToastService {
  private subject = new BehaviorSubject<ToastItem[]>([]);
  toasts$ = this.subject.asObservable();

  private readonly defaultDuration = 6000;

  // ✅ In-memory defaults (No localStorage)
  private currentDefaults: ToastDefaults = {
    type: 'info',
    variant: 'default',
    placement: 'top-right',
    duration: this.defaultDuration,
    showIcon: true,
    showClose: true,
    showProgress: true,
    showProgressText: true,
    stoppable: true,
  };

  /** ✅ Read saved defaults directly from memory */
  getDefaults(): ToastDefaults {
    return this.currentDefaults;
  }

  /** ✅ Save defaults to memory (will reset on page reload) */
  setDefaults(next: Partial<ToastDefaults>) {
    this.currentDefaults = { ...this.currentDefaults, ...next };
  }

  /** Optional helper to reset to factory settings */
  resetDefaults() {
    this.currentDefaults = {
      type: 'info',
      variant: 'default',
      placement: 'top-right',
      duration: this.defaultDuration,
      showIcon: true,
      showClose: true,
      showProgress: true,
      showProgressText: true,
      stoppable: true,
    };
  }

  show(input: ToastInput) {
    const defaults = this.getDefaults();

    // ✅ merge defaults (input wins)
    const merged = {
      ...defaults,
      ...input,
      type: input.type ?? defaults.type,
      placement: input.placement ?? defaults.placement,
      variant: input.variant ?? defaults.variant,
      duration: input.duration ?? defaults.duration,
      showIcon: input.showIcon ?? defaults.showIcon,
      showClose: input.showClose ?? defaults.showClose,
      showProgress: input.showProgress ?? defaults.showProgress,
      showProgressText: input.showProgressText ?? defaults.showProgressText,
      stoppable: input.stoppable ?? defaults.stoppable,
    };

    const id = `t_${Math.random().toString(16).slice(2)}`;
    const duration = merged.duration ?? this.defaultDuration;

    const toast: ToastItem = {
      id,
      type: merged.type,
      variant: merged.variant,
      placement: merged.placement,

      title: merged.title?.trim() || undefined,
      message: merged.message?.trim() || undefined,

      duration,

      remainingBase: duration,
      displayRemaining: duration,
      progress: 1,

      showIcon: merged.showIcon,
      showClose: merged.showClose,
      showProgress: merged.showProgress,
      showProgressText: merged.showProgressText,

      stoppable: merged.stoppable,

      startedAt: Date.now(),
      paused: false,
      rafId: null,
      hideTimer: null,
    };

    this.subject.next([toast, ...this.subject.value]);
    this.startTimers(id);
    return id;
  }

  close(id: string) {
    const list = this.subject.value;
    const t = list.find((x) => x.id === id);
    if (t) this.clearTimers(t);

    this.subject.next(list.filter((x) => x.id !== id));
  }

  pause(id: string) {
    const t = this.get(id);
    if (!t || !t.stoppable || t.paused) return;

    t.paused = true;
    this.clearTimers(t);

    const elapsed = Date.now() - t.startedAt;
    const rem = Math.max(0, t.remainingBase - elapsed);

    t.remainingBase = rem;
    t.displayRemaining = rem;
    t.progress = t.duration > 0 ? rem / t.duration : 0;

    this.pushUpdate();
  }

  resume(id: string) {
    const t = this.get(id);
    if (!t || !t.stoppable || !t.paused) return;

    if (t.remainingBase <= 0) {
      this.close(id);
      return;
    }

    t.paused = false;
    t.startedAt = Date.now();
    this.startTimers(id);
  }

  private startTimers(id: string) {
    const t = this.get(id);
    if (!t) return;

    this.clearTimers(t);

    t.hideTimer = setTimeout(() => this.close(id), t.remainingBase);

    const tick = () => {
      const cur = this.get(id);
      if (!cur || cur.paused) return;

      const elapsed = Date.now() - cur.startedAt;
      const rem = Math.max(0, cur.remainingBase - elapsed);

      cur.displayRemaining = rem;
      cur.progress = cur.duration > 0 ? rem / cur.duration : 0;

      this.pushUpdate();

      if (rem <= 0) return;
      cur.rafId = requestAnimationFrame(tick);
    };

    t.rafId = requestAnimationFrame(tick);
  }

  private get(id: string) {
    return this.subject.value.find((x) => x.id === id);
  }

  private clearTimers(t: ToastItem) {
    if (t.hideTimer) {
      clearTimeout(t.hideTimer);
      t.hideTimer = null;
    }
    if (t.rafId != null) {
      cancelAnimationFrame(t.rafId);
      t.rafId = null;
    }
  }

  private pushUpdate() {
    this.subject.next([...this.subject.value]);
  }
}
