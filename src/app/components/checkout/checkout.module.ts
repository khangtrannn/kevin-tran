import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutDesktopComponent } from './checkout-desktop/checkout-desktop.component';
import { CheckoutMobileComponent } from './checkout-mobile/checkout-mobile.component';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    CheckoutComponent,
    CheckoutMobileComponent,
    CheckoutDesktopComponent,
  ],
})
export class CheckoutModule {}
