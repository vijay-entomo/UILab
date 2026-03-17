import { Component, OnDestroy, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  imports: [CommonModule],
  templateUrl: './page-loader.html',
  styleUrl: './page-loader.scss',
})
export class PageLoader implements OnInit, OnDestroy {
  progress = signal(0);
  isLoaded = signal(false); // Triggers the split animation
  isHidden = signal(false); // Removes the loader entirely from the DOM

  readonly numbers = Array.from({ length: 101 }, (_, i) => i);

  colors = [
    'oklch(75% 0.183 55.934)',
    'oklch(82.8% 0.189 84.429)',
    'oklch(90.5% 0.182 98.111)',
    'oklch(84.1% 0.238 128.85)',
    'oklch(79.2% 0.209 151.711)',
    'oklch(76.5% 0.177 163.223)',
    'oklch(77.7% 0.152 181.912)',
    'oklch(78.9% 0.154 211.53)',
    'oklch(74.6% 0.16 232.661)',
    'oklch(70.7% 0.165 254.624)',
    'oklch(67.3% 0.182 276.935)',
    'oklch(70.2% 0.183 293.541)',
    'oklch(71.4% 0.203 305.504)',
    'oklch(74% 0.238 322.16)',
    'oklch(71.8% 0.202 349.761)',
    'oklch(71.2% 0.194 13.428)',
  ];

  currentColor = computed(() => {
    let p = this.progress();
    if (p > 100) p = 100;
    if (p < 0) p = 0;
    const index = Math.floor((p / 100) * (this.colors.length - 1));
    return this.colors[index];
  });

  ngOnInit() {
    // 1. Lock the body scroll as soon as the loader appears
    document.body.style.overflow = 'hidden';

    // Simulate loading progress from 0 to 100
    const interval = setInterval(() => {
      this.progress.update((val) => {
        if (val >= 100) {
          clearInterval(interval);
          this.finishLoading();
          return 100;
        }
        // Slower, smaller increments for a smoother reel effect
        return val + Math.floor(Math.random() * 5) + 1;
      });
    }, 120);
  }

  private finishLoading() {
    // Wait a brief moment at 100% before splitting the screen
    setTimeout(() => {
      this.isLoaded.set(true);

      // 2. Unlock the scroll exactly when the panels start opening
      document.body.style.overflow = '';

      // Wait for the CSS transition (0.8s) to finish before removing from DOM
      setTimeout(() => {
        this.isHidden.set(true);
      }, 800);
    }, 400);
  }

  ngOnDestroy() {
    // 3. Failsafe: Ensure scroll is restored if the component is destroyed early
    document.body.style.overflow = '';
  }
}
