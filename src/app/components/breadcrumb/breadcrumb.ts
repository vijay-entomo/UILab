import { Component, inject } from '@angular/core';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { UiBreadcrumb } from './ui-breadcrumb/ui-breadcrumb';
import { CodeCopy } from "../../code-copy/code-copy";

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, CardGallery, UiBreadcrumb, CodeCopy],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  private route = inject(ActivatedRoute);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;

  dynamicVariable: string = `<ui-breadcrumb></ui-breadcrumb>`;
}
