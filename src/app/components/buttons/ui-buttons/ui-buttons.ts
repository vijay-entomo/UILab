import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-buttons',
  imports: [CommonModule],
  templateUrl: './ui-buttons.html',
  styleUrl: './ui-buttons.scss',
})
export class UiButtons {
  @Input() text: string = '';
  @Input() type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link' = 'primary';
  @Input() appearance: 'solid' | 'outline' | 'ghost' = 'solid';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() block: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  getClasses(): string {
    const base = 'btn';

    // Construct the type modifier based on appearance
    const typePrefix = this.appearance === 'outline' ? 'btn-outline-' : 'btn-';
    const typeModifier =
      this.appearance === 'ghost'
        ? `btn-link text-${this.type} text-decoration-none`
        : `${typePrefix}${this.type}`;

    // Handle sizes (Bootstrap uses btn-sm and btn-lg, md is default)
    const sizeModifier = this.size === 'md' ? '' : `btn-${this.size}`;

    // Handle full-width block buttons
    const blockModifier = this.block ? 'w-100 d-block' : '';

    // Cleanly concatenate them together just like the badge component
    return `${base} ${typeModifier} ${sizeModifier} ${blockModifier}`.trim().replace(/\s+/g, ' ');
  }
}
