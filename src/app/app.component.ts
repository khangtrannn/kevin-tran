import { Component, Inject } from '@angular/core';
import { IS_MOBILE } from './models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kt-shopee';

  constructor(@Inject(IS_MOBILE) public isMobile: boolean) {}
}
