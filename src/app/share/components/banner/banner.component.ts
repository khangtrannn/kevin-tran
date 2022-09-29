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
          margin: 15
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
      url: 'https://cf.shopee.vn/file/01e6b2fcc0af68dce9edc58db89d4822_xxhdpi',
    },
    {
      id: '2',
      title: 'Banner 2',
      url: 'https://cf.shopee.vn/file/f75eafd76c55d6c2976d10f1d5861148_xxhdpi',
    },
    {
      id: '3',
      title: 'Banner 3',
      url: 'https://cf.shopee.vn/file/3285d18ef74caab1fd6c9f757b14e27b_xxhdpi',
    },
    {
      id: '4',
      title: 'Banner 4',
      url: 'https://cf.shopee.vn/file/008207b4d1486f20f6f9008f0194819b_xxhdpi',
    },
  ];
}
