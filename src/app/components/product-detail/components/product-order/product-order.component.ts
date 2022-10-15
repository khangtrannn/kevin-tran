import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { NotificationModalComponent } from 'src/app/share/components/notification-modal/notification-modal.component';
import { OrderService } from './../../../../share/services/order.service';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent {
  constructor(
    private dialogRef: DialogRef,
    private dialog: MatDialog,
    private orderService: OrderService,
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

      this.orderService.addOrder({
        productId: this.data.id,
        color: this.productOrderForm.value.color!,
        size: this.productOrderForm.value.size!,
        quantity: this.productOrderForm.value.quantity!,
      });

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
