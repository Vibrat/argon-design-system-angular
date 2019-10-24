import { Directive, Renderer2, ElementRef, OnInit, Input } from "@angular/core";

@Directive ({
  selector: '[conver-height]'
})
export class ConverHeight implements OnInit {

  @Input('conver-height') height = 'auto';

  constructor(private el: ElementRef, private css: Renderer2) {}

  ngOnInit() {
    this.css.setStyle(this.el.nativeElement, 'height', this.height);
  }
}
