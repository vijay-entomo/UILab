import { Component, ElementRef, HostListener, OnInit, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-hero-grid',
  standalone: true,
  templateUrl: './hero-grid.html',
  styleUrls: ['./hero-grid.scss'],
})
export class HeroGridComponent implements OnInit {
  @ViewChild('heroContainer', { static: true }) container!: ElementRef;

  // Using Angular Signals to hold our array of cells
  cells = signal<number[]>([]);

  // Size of each grid square in pixels
  readonly gridSize = 50;

  ngOnInit() {
    this.calculateGrid();
  }

  // Recalculate grid if the window is resized
  @HostListener('window:resize')
  onResize() {
    this.calculateGrid();
  }

  private calculateGrid() {
    const width = this.container.nativeElement.offsetWidth || window.innerWidth;
    const height = this.container.nativeElement.offsetHeight || window.innerHeight;

    // Calculate how many columns and rows we need
    const cols = Math.ceil(width / this.gridSize);
    const rows = Math.ceil(height / this.gridSize);
    const totalCells = cols * rows;

    // Create an array of that length to iterate over in the template
    this.cells.set(Array.from({ length: totalCells }, (_, i) => i));
  }
}
