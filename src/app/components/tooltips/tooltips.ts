import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { UiTooltips } from './ui-tooltips/ui-tooltips';
import { CodeCopy } from '../../code-copy/code-copy';
import { DeveloperFeedback } from '../../developer-feedback/developer-feedback';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [
    CommonModule,
    CardGallery,
    UiTooltips,
    CodeCopy,
    DeveloperFeedback,
    NgbTooltipModule
  ],
  templateUrl: './tooltips.html',
  styleUrl: './tooltips.scss',
})
export class Tooltips {
  private route = inject(ActivatedRoute);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;

  dynamicVariable: string = `<button type="button" class="btn btn-outline-secondary" placement="top" ngbTooltip="Tooltip on top">
  Tooltip on top
</button>`;
}
