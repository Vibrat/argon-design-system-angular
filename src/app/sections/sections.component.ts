import { Component, OnInit } from '@angular/core';
import { LogoData } from "./logo-section/logo-section.component";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  logoSection: Array<LogoData> = [
    {
      title: 'Conversity',
      img: {
        src: './assets/img/theme/team-4-800x800.jpg',
        alt: 'Conversity'
      }
    },
    {
      title: 'Conversity',
      img: {
        src: './assets/img/theme/team-4-800x800.jpg',
        alt: 'Conversity'
      }
    },
    {
      title: 'Conversity',
      img: {
        src: './assets/img/theme/team-4-800x800.jpg',
        alt: 'Conversity'
      }
    },
    {
      title: 'Conversity',
      img: {
        src: './assets/img/theme/team-4-800x800.jpg',
        alt: 'Conversity'
      }
    },
    {
      title: 'Conversity',
      img: {
        src: './assets/img/theme/team-4-800x800.jpg',
        alt: 'Conversity'
      }
    },
    {
      title: 'Conversity',
      img: {
        src: './assets/img/theme/team-4-800x800.jpg',
        alt: 'Conversity'
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
