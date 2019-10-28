import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

export interface Badge {
  image: string;
  title: string;
  description: string;
  button: {
    link: string;
    text: string;
  }
}

export interface Badges extends Array<Badge> {}

@Component({
  selector: 'badge-blog',
  templateUrl: 'badge-blog.component.html',
  styleUrls: ['badge-blog.component.scss']
})
export class BadgeBlogComponent {

  @Input() data: Badges = [
    {
      image: './assets/img/theme/img-1-1200x1000.jpg',
      title: 'Marketing',
      description: 'hello world',
      button: {
        link: 'lammap.com',
        text: 'See more'
      }
    }
  ];

  constructor(private router: Router) {}

  onBadgeClick(url: string) {
    this.router.navigateByUrl(url);
  }
}
