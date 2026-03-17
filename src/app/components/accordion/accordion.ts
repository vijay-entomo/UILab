import { Component, inject, Type } from '@angular/core';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { CommonModule } from '@angular/common';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { ActivatedRoute } from '@angular/router';
import { UiAccordion } from './ui-accordion/ui-accordion';
import { CodeCopy } from '../../code-copy/code-copy';
import { DeveloperFeedback } from "../../developer-feedback/developer-feedback";

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, CardGallery, UiAccordion, CodeCopy, DeveloperFeedback],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  private route = inject(ActivatedRoute);
  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;
  dynamicComponent = this.selectedComponent?.componentClass ?? null;

  dynamicVariable: string = `<ui-accordion></ui-accordion>`;
}
