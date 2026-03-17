import { Component, Inject, Input, Optional } from '@angular/core';
import {
  NgbAccordionButton,
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionHeader,
  NgbAccordionToggle,
  NgbAccordionBody,
  NgbAccordionCollapse,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ui-accordion',
  standalone: true,
  imports: [
    NgbAccordionButton,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionBody,
    NgbAccordionCollapse,
  ],
  templateUrl: './ui-accordion.html',
  styleUrl: './ui-accordion.scss',
})
export class UiAccordion {
  @Input() customClass: string = '';
  @Input() closeOthers: boolean = true;
  @Input() variants: string = '';
  @Input() showArrow: boolean = true;

  @Input() items: string[] = [];
  @Input() activeItem: string = '';
  ngOnInit() {
    if (!this.activeItem && this.items.length > 0) {
      this.activeItem = this.items[0];
    }
  }
}
