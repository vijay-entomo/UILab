import { Component, Input, ChangeDetectorRef, inject } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'; // Import CommonModule for [class] binding
import { SyntaxHighlightPipe } from '../syntax-highlight.pipe';

@Component({
  selector: 'app-code-copy',
  standalone: true,
  imports: [NgbTooltip, CommonModule, SyntaxHighlightPipe],
  templateUrl: './code-copy.html',
  styleUrl: './code-copy.scss',
})
export class CodeCopy {
  @Input() content: string = '';
  isClicked: boolean = false;
  private cdr = inject(ChangeDetectorRef);
  private timeoutId: any;

  copyToClipboard() {
    navigator.clipboard.writeText(this.content).then(() => {
      this.isClicked = true;
      this.cdr.detectChanges();

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      // Reset the state so the animation can play again on next click
      this.timeoutId = setTimeout(() => {
        this.isClicked = false;
        this.cdr.detectChanges();
      }, 700);
    });
  }
}
