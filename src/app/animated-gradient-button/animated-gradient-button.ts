import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';

type BlobModel = {
  size: number;
  color: string;
  orbitX: number;
  orbitY: number;
  speed: number;
  phase: number;
  wobble: number;
  scaleBase: number;
};

@Component({
  selector: 'app-animated-gradient-button',
  standalone: true,
  templateUrl: './animated-gradient-button.html',
  styleUrl: './animated-gradient-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedGradientButtonComponent implements AfterViewInit {
  @Input() label = 'Download';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @ViewChild('buttonEl', { static: true })
  private readonly buttonEl!: ElementRef<HTMLButtonElement>;

  @ViewChildren('blobEl')
  private readonly blobEls!: QueryList<ElementRef<HTMLDivElement>>;

  private readonly ngZone = inject(NgZone);

  protected readonly blobs: BlobModel[] = [
    {
      size: 124,
      color: '#46f3c6',
      orbitX: 0.34,
      orbitY: 0.46,
      speed: 0.58,
      phase: 0.2,
      wobble: 10,
      scaleBase: 1.02,
    },
    {
      size: 118,
      color: '#4db8ff',
      orbitX: 0.42,
      orbitY: 0.3,
      speed: 0.72,
      phase: 1.15,
      wobble: 8,
      scaleBase: 0.98,
    },
    {
      size: 132,
      color: '#8c62ff',
      orbitX: 0.4,
      orbitY: 0.4,
      speed: 0.64,
      phase: 2.0,
      wobble: 12,
      scaleBase: 1.08,
    },
    {
      size: 108,
      color: '#ff5ea8',
      orbitX: 0.3,
      orbitY: 0.28,
      speed: 0.84,
      phase: 2.9,
      wobble: 9,
      scaleBase: 0.96,
    },
    {
      size: 128,
      color: '#ffd45e',
      orbitX: 0.45,
      orbitY: 0.48,
      speed: 0.5,
      phase: 3.6,
      wobble: 11,
      scaleBase: 1.03,
    },
    {
      size: 116,
      color: '#05e5ff',
      orbitX: 0.36,
      orbitY: 0.34,
      speed: 0.77,
      phase: 4.5,
      wobble: 10,
      scaleBase: 1.0,
    },
  ];

  private rafId = 0;
  private startTime = 0;
  private hovered = false;

  private pointerX = 0;
  private pointerY = 0;
  private pointerTargetX = 0;
  private pointerTargetY = 0;

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.startTime = performance.now();
      this.animate(this.startTime);
    });
  }

  protected onPointerEnter(): void {
    this.hovered = true;
  }

  protected onPointerLeave(): void {
    this.hovered = false;
    this.pointerTargetX = 0;
    this.pointerTargetY = 0;
  }

  protected onPointerMove(event: PointerEvent): void {
    const button = this.buttonEl.nativeElement;
    const rect = button.getBoundingClientRect();

    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;

    this.pointerTargetX = normalizedX;
    this.pointerTargetY = normalizedY;
  }

  protected onClick(): void {
    console.log('clicked');
  }

  private animate = (now: number): void => {
    const elapsed = (now - this.startTime) / 1000;
    const button = this.buttonEl.nativeElement;
    const rect = button.getBoundingClientRect();
    const blobNodes = this.blobEls.toArray();

    if (!rect.width || !rect.height || blobNodes.length === 0) {
      this.rafId = requestAnimationFrame(this.animate);
      return;
    }

    const motionBoost = this.hovered ? 1.14 : 1;
    const pointerBoost = this.hovered ? 20 : 0;

    this.pointerX += (this.pointerTargetX - this.pointerX) * 0.08;
    this.pointerY += (this.pointerTargetY - this.pointerY) * 0.08;

    const radiusXBase = rect.width * 0.42;
    const radiusYBase = rect.height * 0.95;

    for (let i = 0; i < blobNodes.length; i++) {
      const blob = this.blobs[i];
      const el = blobNodes[i].nativeElement;

      const angle = elapsed * blob.speed + blob.phase;

      const orbitX = radiusXBase * blob.orbitX * motionBoost;
      const orbitY = radiusYBase * blob.orbitY * motionBoost;

      const wobbleX = Math.sin(elapsed * (blob.speed * 1.9) + blob.phase) * blob.wobble;
      const wobbleY = Math.cos(elapsed * (blob.speed * 1.6) + blob.phase * 1.1) * blob.wobble;

      const mouseX = this.pointerX * pointerBoost * (0.5 + i * 0.12);
      const mouseY = this.pointerY * pointerBoost * (0.45 + i * 0.1);

      const x = Math.cos(angle) * orbitX + Math.sin(angle * 1.37) * 10 + wobbleX + mouseX;

      const y = Math.sin(angle * 1.12) * orbitY + Math.cos(angle * 1.53) * 6 + wobbleY + mouseY;

      const scale =
        blob.scaleBase +
        Math.sin(elapsed * (blob.speed * 1.5) + blob.phase) * 0.08 +
        (this.hovered ? 0.03 : 0);

      el.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${scale})`;
    }

    this.rafId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }
}
