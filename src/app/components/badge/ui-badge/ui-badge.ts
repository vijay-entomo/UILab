import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-badge',
  imports: [CommonModule],
  templateUrl: './ui-badge.html',
  styleUrl: './ui-badge.scss',
})
export class UiBadge {
  @Input() text: string = '';
  @Input() type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark' = 'light';
  @Input() appearance: 'fill' | 'outline' = 'fill';
  @Input() shape: 'pill' | 'radius' = 'pill';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() dot: boolean = false;

  getClasses(): string {
    const base = 'badge';
    const typeModifier = `ui-badge-${this.type}`;
    const styleModifier = `ui-badge-${this.appearance}`;
    const shapeModifier = `ui-badge-${this.shape}`;
    const sizeModifier = `ui-badge-${this.size}`;

    return `${base} ${typeModifier} ${styleModifier} ${shapeModifier} ${sizeModifier}`;
  }
}
