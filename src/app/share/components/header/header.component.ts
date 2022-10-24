import { Component, Inject } from '@angular/core';
import { IS_MOBILE } from 'src/app/models/constants';
import { OrderService } from './../../services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  totalOrderNumber$ = this.orderService.getTotalNumber();

  constructor(
    @Inject(IS_MOBILE) public isMobile: boolean,
    private orderService: OrderService
  ) {}
}
