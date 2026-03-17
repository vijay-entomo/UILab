import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-my-custom-cursor',
  standalone: true,
  templateUrl: './my-custom-cursor.html',
  styleUrl: './my-custom-cursor.scss', // Make sure this matches your CSS/SCSS extension
})
export class MyCustomCursor implements OnInit {
  x = 0;
  y = 0;
  isHover = false; // Standard hover state (links, buttons)
  isSpecial = false; // NEW: Custom hover state for your specific div
  isDesktop = true;

  private router = inject(Router);

  ngOnInit() {
    // disable on touch devices
    this.isDesktop = !('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // if (this.isDesktop) {
    //   document.body.style.cursor = 'none';
    // }

    // Reset ALL cursor states when the page changes (Fixes the back button bug)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isHover = false;
        this.isSpecial = false;
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  moveCursor(e: MouseEvent) {
    if (!this.isDesktop) return;

    this.x = e.clientX;
    this.y = e.clientY;
  }

  @HostListener('document:mouseover', ['$event'])
  hoverTarget(e: MouseEvent) {
    const el = e.target as HTMLElement;

    // 1. Check if we are hovering over your specific custom div FIRST
    if (el.closest('.special-cursor')) {
      this.isSpecial = true;
    }
    // 2. Otherwise, check if it's a normal clickable element
    else if (el.closest('a, button, [role="button"], .clickable')) {
      this.isHover = true;
    }
  }

  @HostListener('document:mouseout', ['$event'])
  leaveTarget(e: MouseEvent) {
    const el = e.target as HTMLElement;

    // Reset the correct state when the mouse leaves the element
    if (el.closest('.special-cursor')) {
      this.isSpecial = false;
    } else if (el.closest('a, button, [role="button"], .clickable')) {
      this.isHover = false;
    }
  }
}
