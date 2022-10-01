import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  // TODO: move this function to product class
  getDiscountPrice(): number {
    return this.product.price * this.product.discount / 100;
  }
}
