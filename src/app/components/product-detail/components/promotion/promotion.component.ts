import { Component, Inject } from '@angular/core';
import { IS_MOBILE } from 'src/app/models/constants';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent {
  constructor(@Inject(IS_MOBILE) public isMobile: boolean) {}
}
