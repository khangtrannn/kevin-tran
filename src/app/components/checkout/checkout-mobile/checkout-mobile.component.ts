import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { IS_MOBILE } from 'src/app/models/constants';
import { CheckoutComponent } from '../checkout.component';
import { OrderService } from './../../../share/services/order.service';
import { ProductService } from './../../../share/services/product.service';

@Component({
  selector: 'app-checkout-mobile',
  templateUrl: './checkout-mobile.component.html',
  styleUrls: ['./checkout-mobile.component.scss'],
})
export class CheckoutMobileComponent
  extends CheckoutComponent
  implements OnInit, OnDestroy
{
  constructor(
    @Inject(IS_MOBILE) isMobile: boolean,
    @Inject(DOCUMENT) private document: Document,
    productService: ProductService,
    orderService: OrderService,
    private renderer: Renderer2
  ) {
    super(isMobile, orderService, productService);
  }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hide-footer');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hide-footer');
  }
}
