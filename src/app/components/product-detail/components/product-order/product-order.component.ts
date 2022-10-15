import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { NotificationModalComponent } from 'src/app/share/components/notification-modal/notification-modal.component';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent {
  constructor(
    private dialogRef: DialogRef,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {}

  productOrderForm = new FormGroup({
    color: new FormControl(null, Validators.required),
    size: new FormControl(null, Validators.required),
    quantity: new FormControl(1),
  });

  onSubmit(): void {
    if (this.productOrderForm.valid) {
      this.close();

      this.dialog.open(NotificationModalComponent, {
        panelClass: 'notification-modal',
        data: 'Sản phẩm đã được thêm vào giỏ hàng của bạn.'
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
