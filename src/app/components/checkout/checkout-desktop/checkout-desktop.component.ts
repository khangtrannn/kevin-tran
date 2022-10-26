import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { ProductService } from './../../../share/services/product.service';

@Component({
  selector: 'app-checkout-desktop',
  templateUrl: './checkout-desktop.component.html',
  styleUrls: ['./checkout-desktop.component.scss'],
})
export class CheckoutDesktopComponent {
  @Input() orders!: Order[];
  productDetail = (id: string) => this.productService.getProductById(id);

  constructor(private productService: ProductService, private router: Router) {}

  navigateToProduct(slug: string): void {
    this.router.navigate(['/product', slug]);
  }
}
