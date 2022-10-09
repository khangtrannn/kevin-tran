import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  // TODO: move this function to product class
  getDiscountPrice(): number {
    return this.product.price * this.product.discount / 100;
  }

  navigateToProduct(): void {
    this.router.navigate([`/product/${this.product.id}`]);
  }
}
