import { Component } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productData$ = this.productService.getAllProducts();
  constructor(private productService: ProductService) {}
}
