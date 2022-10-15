import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent{
  constructor(private dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Product) {}

  productOrderForm = new FormGroup({
    color: new FormControl(null, Validators.required),
    size: new FormControl(null, Validators.required),
    quantity: new FormControl(1),
  });

  onSubmit(): void {
    console.log(this.productOrderForm.value)
  }

  close(): void {
    this.dialogRef.close();
  }
}
