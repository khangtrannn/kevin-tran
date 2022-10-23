import { Component, Inject, OnInit } from '@angular/core';
import { IS_MOBILE } from 'src/app/models/constants';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(@Inject(IS_MOBILE) public isMobile: boolean) {}

  ngOnInit() {}
}
