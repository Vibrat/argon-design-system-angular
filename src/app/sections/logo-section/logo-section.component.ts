import { Component, Input } from "@angular/core";

export interface LogoData {
  title: string;
  img: {
    src: string;
    alt: string;
  }
}

@Component({
  selector: 'logo-section',
  templateUrl: 'logo-section.component.html',
  styleUrls: ['logo-section.component.scss']
})
export class LogoSection {
  @Input() data: Array<LogoData> = [];
}
