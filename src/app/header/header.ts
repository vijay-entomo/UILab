import { Component, inject } from '@angular/core';
import { Theme, ThemeService } from '../../service/theme.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbDropdownModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  themeService = inject(ThemeService);
  private clickSound = new Audio('assets/sounds/click.mp3');
  changeTheme(theme: Theme) {
    this.themeService.setTheme(theme);
    this.clickSound.play().catch((error) => console.warn('Sound play prevented:', error));
  }

  onToggleChange(event: any) {
    const isDark = event.target.checked;
    this.changeTheme(isDark ? 'dark' : 'light');
  }

  // Handle color change from the picker
  updatePrimaryColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.themeService.setPrimaryColor(color);
  }

  // Getter to bind the current saved color to the picker
  get currentPrimaryColor(): string {
    return this.themeService.getSavedPrimaryColor();
  }
}
