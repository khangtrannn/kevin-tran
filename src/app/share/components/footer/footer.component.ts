import { Component, Inject } from '@angular/core';
import { IS_MOBILE } from 'src/app/models/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor (@Inject(IS_MOBILE) public isMobile: boolean) {}
}
