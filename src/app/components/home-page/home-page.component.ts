import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { IS_MOBILE } from 'src/app/models/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  readonly HOST_CLASS = 'home-page';

  constructor(
    @Inject(IS_MOBILE) public isMobile: boolean,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, this.HOST_CLASS);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.HOST_CLASS);
  }
}
