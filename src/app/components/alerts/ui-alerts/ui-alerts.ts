import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ui-alerts',
  imports: [NgbAlert, CommonModule],
  templateUrl: './ui-alerts.html',
  styleUrl: './ui-alerts.scss',
})
export class UiAlerts {
  @Input() customClass: string = '';
  @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'info';
  @Input() dismissible: boolean = false;
  @Input() variants: string = '';

  // Track if the alert is closed
  isClosed = false;

  @Output() alertClosed = new EventEmitter<void>();

  onClose() {
    this.isClosed = true;
    this.alertClosed.emit();
  }
}
