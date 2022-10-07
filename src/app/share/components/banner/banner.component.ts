import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    items: 1,
    stagePadding: 200,
    dots: false,
    smartSpeed: 450,
    responsive: {
        0: {
          stagePadding: 0,
          items: 1,
          margin: 15,
        },
        480: {
          stagePadding: 0,
          items: 1,
          margin: 15,
        },
        768: {
          stagePadding: 0,
          items: 1,
          margin: 15,
        },
        1024: {
          stagePadding: 0,
          items: 1,
          margin: 15,
        },
        1366: {
          stagePadding: 200,
          items: 1,
          margin: 15,
        },
        1600: {
          stagePadding: 300,
          items: 1,
          margin: 15,
        },
      },
  };

  slides = [
    {
      id: '1',
      title: 'Banner 1',
      url: '/assets/images/banner/banner-2.jpeg',
    },
    {
      id: '2',
      title: 'Banner 2',
      url: '/assets/images/banner/banner-1.jpg',
    },
    {
      id: '3',
      title: 'Banner 3',
      url: '/assets/images/banner/banner-3.jpeg',
    },
  ];
}
