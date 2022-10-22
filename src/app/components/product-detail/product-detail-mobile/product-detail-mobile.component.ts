import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail-mobile',
  templateUrl: './product-detail-mobile.component.html',
  styleUrls: ['./product-detail-mobile.component.scss']
})
export class ProductDetailMobileComponent {
  @Input() product!: Product;
  @Input() productAttributes!: any;
  @Input() description!: string;
  isImageLoading = true;
}
