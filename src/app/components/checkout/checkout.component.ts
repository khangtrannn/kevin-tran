import { Component, Inject, OnInit } from '@angular/core';
import { IS_MOBILE } from 'src/app/models/constants';
import { OrderService } from './../../share/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  orders$ = this.orderService.getOrders();

  constructor(
    @Inject(IS_MOBILE) public isMobile: boolean,
    private orderService: OrderService
  ) {}

  ngOnInit() {}
}
