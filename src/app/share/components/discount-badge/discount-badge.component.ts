import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discount-badge',
  templateUrl: './discount-badge.component.html',
  styleUrls: ['./discount-badge.component.scss']
})
export class DiscountBadgeComponent {
  @Input() percent!: number;
}
