import { Component, Input, Renderer2, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'section-ad',
  templateUrl: `ad-section.component.html`
})
export class AdSectionComponent implements OnInit {

  @ViewChild('background') background: ElementRef;

  @Input() titleSmall  =  'Conversity Asia';
  @Input() titleMedium =  'Beyound Story';
  @Input() titleLarge  =  'Strengthen your brand impact via Digitalization';
  @Input() buttonText  =  'Contact Now';
  @Input() buttonUrl   =  '';
  @Input() height      =  'auto';
  @Input() cover       =  '';

  constructor(private router: Router, private css: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    if (this.cover) {
      this.css.setStyle(this.background.nativeElement, 'background-image', `url(${this.cover})`);
    }
  }

  navigate() {
    this.router.navigateByUrl(this.buttonUrl);
  }
}
