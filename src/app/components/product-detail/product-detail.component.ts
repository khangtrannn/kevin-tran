import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { IS_MOBILE } from 'src/app/models/constants';
import { Product } from 'src/app/models/product';
import { inOutAnimation } from 'src/app/share/animations/in-out-animation';
import { ProductService } from './../../share/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  animations: [inOutAnimation],
})
export class ProductDetailComponent implements OnInit {
  private onDestroy$ = new Subject<void>();
  product = new Product();

  isImageLoading = true;

  constructor(
    @Inject(IS_MOBILE) public isMobile: boolean,
    public productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => this.productService.getProductById(params['id'])),
        takeUntil(this.onDestroy$)
      )
      .subscribe((product) => {
        if (product) {
          this.product = product;
        }
      });
  }

  productAttributes: any[] = [
    { attribute: 'Kho', value: '999' },
    { attribute: 'Thương hiệu', value: 'Kevin Tran & Collab' },
    { attribute: 'Phong cách', value: 'Retro, Đường phố, Thể thao, Hàn Quốc' },
    { attribute: 'Xuất xứ', value: 'Việt Nam' },
    { attribute: 'Chất liệu', value: 'Cotton' },
    { attribute: 'Hạn bảo hành', value: '12 tháng' },
    { attribute: 'Loại bảo hành', value: 'Bảo hành nhà sản xuất' },
    { attribute: 'Dán kiểu áo', value: 'Cổ điển' },
  ];
}
