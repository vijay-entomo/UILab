import { Component, ElementRef, OnInit, OnDestroy, signal, inject, Input } from '@angular/core';
import { NgClass } from '@angular/common'; // Fixes the ngClass binding error

// Defines the structure for each cell to track its ID and assigned color
interface GridCell {
  id: number;
  colorClass: string;
}

@Component({
  selector: 'app-interactive-grid',
  standalone: true,
  imports: [NgClass], // Required for standalone components using ngClass
  templateUrl: './interactive-grid.html',
  styleUrls: ['./interactive-grid.scss'],
})
export class InteractiveGridComponent implements OnInit, OnDestroy {
  // Your custom colors
  @Input() color1: string = '#aef33e'; // Lime Green
  @Input() color2: string = '#0009dc'; // Deep Blue

  private el = inject(ElementRef);

  // Signals to manage the state of the grid
  cells = signal<GridCell[]>([]);
  columns = signal<number>(0);

  readonly gridSize = 50;
  private resizeObserver!: ResizeObserver;

  ngOnInit() {
    // Inject the colors into CSS variables so the SCSS file can read them
    this.el.nativeElement.style.setProperty('--color-1', this.color1);
    this.el.nativeElement.style.setProperty('--color-2', this.color2);

    // Start listening for container size changes
    this.setupResizeObserver();
  }

  private setupResizeObserver() {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.calculateGrid(entry.contentRect.width, entry.contentRect.height);
      }
    });

    this.resizeObserver.observe(this.el.nativeElement);
  }

  private calculateGrid(width: number, height: number) {
    if (width === 0 || height === 0) return;

    // Calculate how many columns and rows are needed based on the container size
    const cols = Math.ceil(width / this.gridSize);
    const rows = Math.ceil(height / this.gridSize);
    const totalCells = cols * rows;

    // Update the columns signal to force CSS to match the exact math
    this.columns.set(cols);

    // Only regenerate the array if the total number of cells has changed
    if (this.cells().length !== totalCells) {
      const newCells = Array.from({ length: totalCells }, (_, i) => {
        // Randomly assign either color-1 or color-2 to the cell
        // const randomColorClass = Math.random() > 0.5 ? 'color-1' : 'color-2';

        // return {
        //   id: i,
        //   colorClass: randomColorClass,
        // };

        const colorClass = (Math.floor(i / cols) + (i % cols)) % 2 === 0 ? 'color-1' : 'color-2';

        return {
          id: i,
          colorClass: colorClass, // Update this to use the new variable name
        };

      });

      this.cells.set(newCells);
    }
  }

  ngOnDestroy() {
    // Clean up the observer to prevent memory leaks when navigating away
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
