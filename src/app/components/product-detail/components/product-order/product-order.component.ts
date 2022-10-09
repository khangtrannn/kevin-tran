import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent{
  constructor(private dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Product) {}

  close(): void {
    this.dialogRef.close();
  }
}
