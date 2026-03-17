import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-developer-feedback',
  imports: [CommonModule, FormsModule],
  templateUrl: './developer-feedback.html',
  styleUrl: './developer-feedback.scss',
})
export class DeveloperFeedback {
  private route = inject(ActivatedRoute);

  feedbackText: string = '';
  feedbackType: 'bug' | 'feature' | '' = '';
  showThanks: boolean = false;

  get placeholderText(): string {
    if (this.feedbackType === 'bug') {
      return `The issue + Steps to reproduce. 🐛\ne.g., "Button ignores the hover token. Passed @Input() variant='ghost', but the background stays solid gray on hover instead of going transparent."`;
    } else {
      return `The request + Why we need it. ✨\ne.g., "Custom icon slot. Need an <ng-content> area in the Alert component so we can pass our own SVGs from Figma instead of being locked to the default."`;
    }
  }

  submitFeedback() {
    // Automatically capture the page name from the route data or URL
    const pageName = this.route.snapshot.data['componentName'] || window.location.pathname;

    const payload = {
      page: pageName,
      type: this.feedbackType,
      message: this.feedbackText,
      timestamp: new Date().toISOString(),
    };

    console.log('Developer Feedback Submitted:', payload);

    // Reset and show success animation
    this.showThanks = true;
    this.feedbackText = '';
    this.feedbackType = '';

    setTimeout(() => (this.showThanks = false), 4000);
  }
}
