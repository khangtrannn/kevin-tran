import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BannerComponent } from './components/banner/banner.component';

const declarations = [BannerComponent];

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, CarouselModule, HttpClientModule],
  declarations: [...declarations],
  exports: [...declarations],
})
export class ShareModule {}
