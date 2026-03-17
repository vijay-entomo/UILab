import { Component, signal, input, effect, OnDestroy, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  template: `
    {{ displayedText() }}
    @if (!isTypingComplete()) {
      <span class="cursor-line">|</span>
    }
  `,
  styles: [
    `
      .cursor-line {
        display: inline-block;
        font-weight: 300;
        color: #000;
        margin-left: 2px;
      }
      .blink {
        animation: blinker 1s step-start infinite;
      }
      @keyframes blinker {
        50% {
          opacity: 0;
        }
      }
    `,
  ],
})
export class TypewriterComponent implements OnDestroy {
  // 1. Define Modern Signal Inputs
  text = input.required<string>();
  speed = input<number>(45);

  // UPDATED: Automatically transform string "false" (from URLs/HTML) to a real boolean false
  // animate = input(true, { transform: booleanAttribute });
  animate = input(false, { transform: booleanAttribute });

  // Internal State
  displayedText = signal<string>('');
  isTypingComplete = signal<boolean>(false);
  private timeoutId: any;

  constructor() {
    // 2. Use an effect to watch for changes
    effect(() => {
      // This will now re-run if 'text' OR 'animate' changes from the parent
      const currentText = this.text();
      this.resetAndType(currentText);
    });
  }

  private resetAndType(fullText: string) {
    // Clear any typing that might currently be happening
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // CHECK: Should we animate the text?
    if (this.animate()) {
      // Yes: Reset signals and start typing
      this.displayedText.set('');
      this.isTypingComplete.set(false);
      this.typeCharacter(0, fullText);
    } else {
      // No: Just load the text instantly
      this.displayedText.set(fullText);
      this.isTypingComplete.set(true);
    }
  }

  private typeCharacter(index: number, fullText: string) {
    if (index < fullText.length) {
      this.displayedText.update((val) => val + fullText.charAt(index));

      this.timeoutId = setTimeout(() => {
        this.typeCharacter(index + 1, fullText);
      }, this.speed());
    } else {
      this.isTypingComplete.set(true);
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
