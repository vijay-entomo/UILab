import { Directive } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: '[defaultTooltip]',
  standalone: true,
})
export class DefaultTooltipDirective extends NgbTooltip {
  override placement = 'top';
  override openDelay = 500;
  override closeDelay = 500;
  override container = 'body';
}
