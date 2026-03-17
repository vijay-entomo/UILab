import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TypewriterComponent } from '../../typewriter.component';
import { BackButton } from "../../back-button/back-button";

@Component({
  selector: 'card-gallery',
  imports: [CommonModule, RouterModule, TypewriterComponent, BackButton],
  templateUrl: './card-gallery.html',
  styleUrl: './card-gallery.scss',
})
export class CardGallery {
  @Input() componentDetails: any; // Object with image, name, description, routerLink
  @Input() showImage: boolean = true;
  @Input() showName: boolean = true;
  @Input() showDescription: boolean = true;
  @Input() showLink: boolean = true;
  @Input() customClass: string = ''; // Optional additional class

  private route = inject(ActivatedRoute);
  shouldAnimate = this.route.snapshot.queryParamMap.get('animate') === 'true';

  
}
