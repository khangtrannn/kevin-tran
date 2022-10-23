import { Component } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent {
  products = [
    {
      image: 'https://cf.shopee.vn/file/ab91dbccf43082e6a54e276fd2285668_tn',
      title: 'Áo polo nam vải cotton cá sấu sọc nhỏ thấm hút mồ hôi HIDDLE',
      price: '₫159.000 - ₫175.000',
    },
    {
      image: 'https://cf.shopee.vn/file/74eec2610ba97d23bd1b5d74ea97ee7c_tn',
      title: 'Áo Khoác Unisex Teelab logo Jacket AK008',
      price: '₫300.000',
    },
    {
      image: 'https://cf.shopee.vn/file/53925795c1313781bc186d6e46926de3_tn',
      title: 'Áo Khoác Unisex Teelab Vintage Sport Jacket / Đen AK044',
      price: '₫300.000',
    },
    {
      image: 'https://cf.shopee.vn/file/f90e60124af008e2aa161be8f30cff8b_tn',
      title: 'Áo Polo Teelab Phối Line Trắng ,Polo Local brand nam nữ',
      price: '₫125.000',
    },
  ];
}
