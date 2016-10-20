import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[graph]' })
export class GraphDirective {

    constructor(el:ElementRef, renderer:Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}