import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attribute-table',
  templateUrl: './attribute-table.component.html',
  styleUrls: ['./attribute-table.component.scss'],
})
export class AttributeTableComponent {
  @Input() attributes!: any;
}
