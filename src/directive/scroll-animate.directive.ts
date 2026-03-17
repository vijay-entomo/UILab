import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true, // Remove this line if you are using an older Angular version with NgModules
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    // Set up the Intersection Observer
    const options = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.1, // Triggers when 10% of the card is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class when the element enters the viewport
          this.renderer.addClass(this.el.nativeElement, 'in-view');

          // Optional: Stop observing if you only want it to animate once
          // this.observer?.unobserve(this.el.nativeElement);
        } else {
          // Optional: Remove the class when it leaves the viewport
          // to trigger the animation again on scroll up
          this.renderer.removeClass(this.el.nativeElement, 'in-view');
        }
      });
    }, options);

    // Start observing the element the directive is attached to
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
