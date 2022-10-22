import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { IS_MOBILE } from 'src/app/models/constants';
import { inOutAnimation } from 'src/app/share/animations/in-out-animation';
import { ProductService } from './../../share/services/product.service';
import { ProductDetailCommon } from './product-detail-common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  animations: [inOutAnimation],
})
export class ProductDetailComponent extends ProductDetailCommon implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();
  private readonly HOST_CLASS = 'product-detail';

  constructor(
    @Inject(IS_MOBILE) public isMobile: boolean,
    @Inject(DOCUMENT) private document: Document,
    public productService: ProductService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => this.productService.getProductById(params['id'])),
        takeUntil(this.onDestroy$)
      )
      .subscribe((product) => this.product = product!);

    this.renderer.addClass(this.document.body, this.HOST_CLASS);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.HOST_CLASS);
  }
}
