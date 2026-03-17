import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastItem, ToastPlacement } from '../../../../service/toast.service';

@Component({
  selector: 'ui-toasts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-toasts.html',
  styleUrl: './ui-toasts.scss',
})
export class UiToasts {
  toastService = inject(ToastService);
  toasts$ = this.toastService.toasts$;

  currentPlacement = 'top-right';

  ngOnInit() {
    this.toastService.toasts$.subscribe((toasts) => {
      if (toasts.length) {
        this.currentPlacement = toasts[0].placement;
      }
    });
  }

  trackByToastId = (_: number, t: any) => t.id;
}
