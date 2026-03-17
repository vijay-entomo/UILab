import { Component } from '@angular/core';
import { CopyContentDirective } from "../../../../directive/copy-content.directive";
import { UiButtons } from '../../buttons/ui-buttons/ui-buttons';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CopyContentDirective, UiButtons],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.scss',
})
export class UiCard {}
