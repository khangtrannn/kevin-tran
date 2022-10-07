import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductOrderComponent } from '../product-order/product-order.component';

@Component({
  selector: 'app-product-bottom-panel',
  templateUrl: './product-bottom-panel.component.html',
  styleUrls: ['./product-bottom-panel.component.scss']
})
export class ProductBottomPanelComponent {
  constructor(private dialog: MatDialog) { }

  openProductOrderDialog(): void {
    this.dialog.open(ProductOrderComponent, {
      panelClass: 'product-order-dialog',
    });
  }
}
