import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';

@Component({
  selector: 'app-placeholders',
  imports: [CommonModule, CardGallery],
  templateUrl: './placeholders.html',
  styleUrl: './placeholders.scss',
})
export class Placeholders {
  private route = inject(ActivatedRoute);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;
}
