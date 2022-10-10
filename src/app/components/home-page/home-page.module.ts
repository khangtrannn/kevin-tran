import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from './../../share/share.module';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
