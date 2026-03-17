import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { UiCard } from './ui-card/ui-card';
import { CodeCopy } from '../../code-copy/code-copy';
import { DeveloperFeedback } from '../../developer-feedback/developer-feedback';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardGallery, UiCard, CodeCopy, DeveloperFeedback],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  private route = inject(ActivatedRoute);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;

  dynamicVariable: string = `<div class="card">
  <div class="card-header d-flex align-items-center justify-content-between">
    <!-- Left Start -->
    <div>
      <div class="h5">Header</div>
    </div>
    <!-- Left End -->
    <!-- Right Start -->
    <div></div>
    <!-- Right End -->
  </div>
  <div class="card-body">Body</div>
  <div class="card-footer d-flex align-items-center justify-content-between">
    <!-- Left Start -->
    <div></div>
    <!-- Left End -->
    <!-- Right Start -->
    <div>
      <ui-buttons [text]="'Click me'"></ui-buttons>
    </div>
    <!-- Right End -->
  </div>
</div>`;
}
