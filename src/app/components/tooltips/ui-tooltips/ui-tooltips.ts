import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ui-tooltips',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './ui-tooltips.html',
  styleUrl: './ui-tooltips.scss',
})
export class UiTooltips {}
