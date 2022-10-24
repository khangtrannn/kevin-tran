import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { ProductService } from './../../../share/services/product.service';

@Component({
  selector: 'app-checkout-desktop',
  templateUrl: './checkout-desktop.component.html',
  styleUrls: ['./checkout-desktop.component.scss'],
})
export class CheckoutDesktopComponent implements OnInit {
  @Input() orders!: Order[];
  productDetail = (id: string) => this.productService.getProductById(id);

  constructor(private productService: ProductService) {}

  ngOnInit() {}
}
