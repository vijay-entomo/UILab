import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
})
export class BackToTop {
  showButton: boolean = false;
  readonly radius = 18;
  readonly circumference = 2 * Math.PI * this.radius;
  dashoffset: number = this.circumference;

  // 1. Create the audio object pointing to your asset file
  private clickSound = new Audio('assets/sounds/click.mp3');

  isBouncing: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // ... (Keep your existing scroll logic here) ...
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight || 0;
    const maxScrollableDistance = scrollHeight - clientHeight;

    let scrollPercentage = maxScrollableDistance > 0 ? scrollTop / maxScrollableDistance : 0;
    scrollPercentage = Math.max(0, Math.min(1, scrollPercentage));

    this.dashoffset = this.circumference - (scrollPercentage * this.circumference);
    this.showButton = scrollTop > 100;
  }

  scrollToTop(): void {
    // 2. Play the sound when clicked
    // We add a .catch() just in case the browser blocks it for any reason, so it doesn't throw a console error
    this.clickSound.play().catch((error) => console.warn('Sound play prevented:', error));

    this.isBouncing = true;
    setTimeout(() => {
      this.isBouncing = false;
    }, 800);

    // 3. Keep your smooth scroll logic
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
