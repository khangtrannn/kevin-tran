import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IS_MOBILE } from 'src/app/models/constants';
import { Product } from 'src/app/models/product';
import { OrderService } from './../../share/services/order.service';
import { ProductService } from './../../share/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  orders$ = this.orderService.getOrders();
  totalPrice$ = this.orderService.getTotalPrice();

  constructor(
    @Inject(IS_MOBILE) public isMobile: boolean,
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  getProductDetail(id: string): Observable<Product | undefined> {
    return this.productService.getProductById(id);
  }
}
