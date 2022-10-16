import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail-desktop',
  templateUrl: './product-detail-desktop.component.html',
  styleUrls: ['./product-detail-desktop.component.scss']
})
export class ProductDetailDesktopComponent {
  @Input() product!: Product;
  @Input() productAttributes!: any;
}
