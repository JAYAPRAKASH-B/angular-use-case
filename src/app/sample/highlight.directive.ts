import { Directive, ElementRef, Renderer2, HostListener, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow'; // Default color if none is provided

  

  constructor(private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor('');
  }

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
