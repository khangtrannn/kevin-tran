import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ShareModule } from './../../share/share.module';
import { ProductBottomPanelComponent } from './components/product-bottom-panel/product-bottom-panel.component';
import { ColorChoiceComponent } from './components/product-order/color-choice/color-choice.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { QuantityChoiceComponent } from './components/product-order/quantity-choice/quantity-choice.component';
import { SizeChoiceComponent } from './components/product-order/size-choice/size-choice.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ProductDetailDesktopComponent } from './product-detail-desktop/product-detail-desktop.component';
import { ProductDetailMobileComponent } from './product-detail-mobile/product-detail-mobile.component';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule,
    NgxSkeletonLoaderModule,
    MatRadioModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProductDetailComponent,
    ProductDetailDesktopComponent,
    ProductDetailMobileComponent,
    ProductBottomPanelComponent,
    ProductOrderComponent,
    PromotionComponent,
    ColorChoiceComponent,
    SizeChoiceComponent,
    QuantityChoiceComponent,
  ],
})
export class ProductDetailModule {}
