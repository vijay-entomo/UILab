import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { CommonModule } from '@angular/common';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';

@Component({
  selector: 'app-button-group',
  imports: [CommonModule, CardGallery],
  templateUrl: './button-group.html',
  styleUrl: './button-group.scss',
})
export class ButtonGroup {
  private route = inject(ActivatedRoute);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;
}
