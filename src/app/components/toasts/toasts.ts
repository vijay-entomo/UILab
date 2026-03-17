import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardGallery } from '../../lab-gallery/card-gallery/card-gallery';
import { COMPONENT_DATA } from '../../lab-gallery/component-data';
import { CodeCopy } from '../../code-copy/code-copy';
import { DeveloperFeedback } from '../../developer-feedback/developer-feedback';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [CommonModule, CardGallery, CodeCopy, DeveloperFeedback],
  templateUrl: './toasts.html',
  styleUrl: './toasts.scss',
})
export class Toasts {
  private route = inject(ActivatedRoute);
  toastService = inject(ToastService);

  selectedComponent =
    COMPONENT_DATA.find((c) => c.componentName === this.route.snapshot.data['componentName']) ??
    null;

  dynamicComponent = this.selectedComponent?.componentClass ?? null;

  dynamicVariable: string = `import { Component, inject } from '@angular/core';
import { ToastService } from 'src/service/toast.service';

@Component({ ... })
export class MyComponent {
  toastService = inject(ToastService);

  showToast() {
    this.toastService.show({
      type: 'success', // 'success' | 'warning' | 'error' | 'info'
      variant: 'minimal', // 'default' | 'solid' | 'minimal'
      placement: 'top-right', // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
      title: 'Action Saved!',
      message: 'Your data has been successfully updated.',
      duration: 5000,
      stoppable: true, // Pause timer on hover
      showProgress: true // Show shrinking progress bar
    });
  }
}`;
}
