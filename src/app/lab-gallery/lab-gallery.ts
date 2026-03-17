import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorTextComponent } from "../color-title/color-title";
import { CardGallery } from './card-gallery/card-gallery';
import { CommonModule } from '@angular/common';
import { COMPONENT_DATA } from './component-data';
import { TypewriterComponent } from '../typewriter.component';
import { ScrollAnimateDirective } from '../../directive/scroll-animate.directive';
import { InteractiveGridComponent } from "../interactive-grid/interactive-grid";


@Component({
  selector: 'app-lab-gallery',
  standalone: true,
  imports: [RouterModule, ColorTextComponent, CardGallery, CommonModule, TypewriterComponent, ScrollAnimateDirective, InteractiveGridComponent],
  templateUrl: './lab-gallery.html',
  styleUrl: './lab-gallery.scss',
})
export class LabGallery {
  componentsData = COMPONENT_DATA;

  typewritertext= 'Your interactive toolkit. Built from our core foundations to keep every click, swipe, and input perfectly consistent.'
}