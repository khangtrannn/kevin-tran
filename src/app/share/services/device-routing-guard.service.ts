import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceRoutingGuardService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobileDevice(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }
}
