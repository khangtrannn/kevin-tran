import { Component } from '@angular/core';
import { ProductService } from './../../services/product.service';

let isLimit = true;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  readonly PRODUCT_LIMIT = 24;
  productData$ = this.productService.getAllProducts();

  constructor(private productService: ProductService) {}

  onMoreProductClick(): void {
    isLimit = false;
  }

  getIsLimit(): boolean {
    return isLimit;
  }
}
