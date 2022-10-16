import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { delay, filter } from 'rxjs';
import { IS_MOBILE } from 'src/app/models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kt-shopee';

  constructor(
    @Inject(IS_MOBILE) private isMobile: boolean,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2,
  ) {
    this.router.events
      .pipe(
        filter((e: any): e is Scroll => e instanceof Scroll),
        delay(0)
      )
      .subscribe((e) => {
        if (e.position) {
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });

    this.renderer.addClass(this.document.body, this.isMobile ? 'app-mobile' : 'app-desktop');
  }
}
