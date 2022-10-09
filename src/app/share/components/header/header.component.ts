import { Component, Inject } from '@angular/core';
import { IS_MOBILE } from 'src/app/models/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(@Inject(IS_MOBILE) public isMobile: boolean) {}
}
