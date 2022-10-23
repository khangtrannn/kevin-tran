import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-checkout-mobile',
  templateUrl: './checkout-mobile.component.html',
  styleUrls: ['./checkout-mobile.component.scss'],
})
export class CheckoutMobileComponent implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hide-footer');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hide-footer');
  }
}
