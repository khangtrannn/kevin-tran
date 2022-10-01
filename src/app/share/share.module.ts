import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BadgeComponent } from './components/badge/badge.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoryComponent } from './components/category/category.component';
import { CartListComponent } from './components/header/components/cart-list/cart-list.component';
import { NotifyComponent } from './components/header/components/notify/notify.component';
import { QrCodeComponent } from './components/header/components/qr-code/qr-code.component';
import { SearchComponent } from './components/header/components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RatingComponent } from './components/rating/rating.component';

const declarations = [
  BannerComponent,
  CategoryComponent,
  ProductCardComponent,
  BadgeComponent,
  RatingComponent,
  ProductListComponent,
  NotifyComponent,
  QrCodeComponent,
  SearchComponent,
  CartListComponent,
  HeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
  ],
  declarations: [...declarations],
  exports: [...declarations],
})
export class ShareModule {}
