import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent{
  constructor(private dialogRef: DialogRef) { }

  close(): void {
    this.dialogRef.close();
  }
}
