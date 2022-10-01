import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BadgeComponent } from './components/badge/badge.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingComponent } from './components/rating/rating.component';

const declarations = [
  BannerComponent,
  CategoryComponent,
  ProductCardComponent,
  BadgeComponent,
  RatingComponent
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
