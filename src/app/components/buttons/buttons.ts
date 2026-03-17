import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { CommonModule } from '@angular/common';
import { UiButtons } from "./ui-buttons/ui-buttons";
import { CodeCopy } from "../../code-copy/code-copy";

@Component({
  selector: 'app-buttons',
  imports: [CommonModule, CardGallery, UiButtons, CodeCopy],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  private route = inject(ActivatedRoute);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;

  dynamicVariable: string = `<ui-buttons type="primary" text="Click Me"></ui-buttons>`;
}
