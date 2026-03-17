import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[copyContent]',
})
export class CopyContentDirective {
  constructor(public el: ElementRef) {}
}
