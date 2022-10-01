import { Component, Input } from '@angular/core';

export enum BadgeType {
  OUTLINE, FULL
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() type!: string;
  @Input() content!: string;

}
