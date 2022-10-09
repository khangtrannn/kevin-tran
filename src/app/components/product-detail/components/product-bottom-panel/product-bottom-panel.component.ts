import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { ProductOrderComponent } from '../product-order/product-order.component';

@Component({
  selector: 'app-product-bottom-panel',
  templateUrl: './product-bottom-panel.component.html',
  styleUrls: ['./product-bottom-panel.component.scss']
})
export class ProductBottomPanelComponent {
  @Input() product!: Product;

  constructor(private dialog: MatDialog) { }

  openProductOrderDialog(): void {
    this.dialog.open(ProductOrderComponent, {
      data: this.product,
      panelClass: 'product-order-dialog',
    });
  }
}
