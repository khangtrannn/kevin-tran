import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductOrderComponent } from '../components/product-detail/components/product-order/product-order.component';
import { ProductBottomPanelComponent } from './../components/product-detail/components/product-bottom-panel/product-bottom-panel.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BannerComponent } from './components/banner/banner.component';
import { DiscountBadgeComponent } from './components/discount-badge/discount-badge.component';
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
  DiscountBadgeComponent,
  ProductBottomPanelComponent,
  ProductOrderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  declarations: [...declarations],
  exports: [...declarations],
})
export class ShareModule {}
