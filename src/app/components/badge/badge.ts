import { Component, inject } from '@angular/core';
import { UiBadge } from './ui-badge/ui-badge';
import { CommonModule } from '@angular/common';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { ActivatedRoute } from '@angular/router';
import { CodeCopy } from '../../code-copy/code-copy';

@Component({
  selector: 'app-badge',
  imports: [CommonModule, CardGallery, CodeCopy, UiBadge],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  private route = inject(ActivatedRoute);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;

  dynamicVariable: string = `<ui-badge></ui-badge>`;
}
