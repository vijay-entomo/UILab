import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { UiAlerts } from './ui-alerts/ui-alerts';
import { CodeCopy } from '../../code-copy/code-copy';
import { DeveloperFeedback } from "../../developer-feedback/developer-feedback";

@Component({
  selector: 'app-alerts',
  imports: [CommonModule, CardGallery, UiAlerts, CodeCopy, DeveloperFeedback],
  templateUrl: './alerts.html',
  styleUrl: './alerts.scss',
})
export class Alerts {
  private route = inject(ActivatedRoute);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;

  dynamicVariable: string = `<ui-alerts></ui-alerts>`;
}