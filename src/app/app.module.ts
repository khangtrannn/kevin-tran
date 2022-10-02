import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { IS_MOBILE } from './models/constants';
import { DeviceRoutingGuardService } from './share/services/device-routing-guard.service';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ShareModule
  ],
  providers: [
    {
      provide: IS_MOBILE,
      useFactory: (deviceRoutingGuardService: DeviceRoutingGuardService) => deviceRoutingGuardService.isMobileDevice(),
      deps: [DeviceRoutingGuardService],
      multi: false,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
