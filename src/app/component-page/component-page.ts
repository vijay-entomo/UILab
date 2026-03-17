import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InteractiveGridComponent } from '../interactive-grid/interactive-grid';
import { CardGallery } from '../lab-gallery/card-gallery/card-gallery';
import { CommonModule } from '@angular/common';
import { COMPONENT_DATA } from '../lab-gallery/component-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InteractiveGridComponent, CardGallery, FormsModule],
  templateUrl: './component-page.html',
  styleUrl: './component-page.scss',
})
export class ComponentPage {
  componentsData = COMPONENT_DATA;
  searchTerm: string = '';

  // Getter to dynamically filter the components
  get filteredComponents() {
    if (!this.searchTerm) {
      return this.componentsData;
    }

    const lowerCaseSearch = this.searchTerm.toLowerCase();

    return this.componentsData.filter((c) => {
      // TypeScript fix: explicitly only use componentName
      const nameToSearch = c.componentName || '';
      return nameToSearch.toLowerCase().includes(lowerCaseSearch);
    });
  }
}
