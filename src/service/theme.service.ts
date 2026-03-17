import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: Theme = 'auto';
  private readonly THEME_KEY = 'app-theme-preference';
  private readonly COLOR_KEY = 'app-primary-color';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.initializeTheme();
    this.initializePrimaryColor();
  }

  // ... (keep initializeTheme, setTheme, getCurrentTheme, applyTheme as they are) ...

  private initializeTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      this.activeTheme = savedTheme;
    }
    this.applyTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.activeTheme === 'auto') {
        this.applyTheme();
      }
    });
  }

  setTheme(theme: Theme): void {
    this.activeTheme = theme;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
    this.applyTheme();
  }

  getCurrentTheme(): Theme {
    return this.activeTheme;
  }

  private applyTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    let themeToApply = this.activeTheme;
    if (themeToApply === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      themeToApply = prefersDark ? 'dark' : 'light';
    }
    this.document.documentElement.setAttribute('data-bs-theme', themeToApply);
  }

  // --- Primary Color Methods ---

  private initializePrimaryColor(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const savedColor = localStorage.getItem(this.COLOR_KEY);
    if (savedColor) {
      this.setPrimaryColor(savedColor);
    }
  }

  setPrimaryColor(color: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    localStorage.setItem(this.COLOR_KEY, color);
    const root = this.document.documentElement;

    // Set the main hex variable
    root.style.setProperty('--bs-primary', color);

    // Calculate and set the accessible contrast color (black or white)
    const contrastColor = this.getContrastYIQ(color);
    root.style.setProperty('--bs-primary-contrast', contrastColor);

    // Set the RGB variable (required for Bootstrap's utility classes and states)
    const rgb = this.hexToRgb(color);
    if (rgb) {
      root.style.setProperty('--bs-primary-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    }
  }

  getSavedPrimaryColor(): string {
    if (!isPlatformBrowser(this.platformId)) return '#0d6efd';
    return localStorage.getItem(this.COLOR_KEY) || '#0d6efd';
  }

  private hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  // Helper method to calculate WCAG compliant text color
  private getContrastYIQ(hexcolor: string): string {
    hexcolor = hexcolor.replace('#', '');

    // Handle 3-digit hex codes
    if (hexcolor.length === 3) {
      hexcolor = hexcolor
        .split('')
        .map((c) => c + c)
        .join('');
    }

    const r = parseInt(hexcolor.substring(0, 2), 16);
    const g = parseInt(hexcolor.substring(2, 4), 16);
    const b = parseInt(hexcolor.substring(4, 6), 16);

    // YIQ equation from WCAG guidelines
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;

    // If the color is light (high YIQ), return black text. Otherwise, return white.
    return yiq >= 128 ? '#000000' : '#ffffff';
  }
}
