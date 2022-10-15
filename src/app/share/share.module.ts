import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ColorChoiceComponent } from '../components/product-detail/components/product-order/color-choice/color-choice.component';
import { ProductOrderComponent } from '../components/product-detail/components/product-order/product-order.component';
import { SizeChoiceComponent } from '../components/product-detail/components/product-order/size-choice/size-choice.component';
import { PromotionComponent } from '../components/product-detail/components/promotion/promotion.component';
import { ProductBottomPanelComponent } from './../components/product-detail/components/product-bottom-panel/product-bottom-panel.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BannerComponent } from './components/banner/banner.component';
import { DiscountBadgeComponent } from './components/discount-badge/discount-badge.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartListComponent } from './components/header/components/cart-list/cart-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RatingComponent } from './components/rating/rating.component';


const declarations = [
  BannerComponent,
  ProductCardComponent,
  BadgeComponent,
  RatingComponent,
  ProductListComponent,
  CartListComponent,
  HeaderComponent,
  FooterComponent,
  DiscountBadgeComponent,
  ProductBottomPanelComponent,
  ProductOrderComponent,
  PromotionComponent,
  ColorChoiceComponent,
  SizeChoiceComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule,
  ],
  declarations: [...declarations],
  exports: [...declarations],
})
export class ShareModule {}
