import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { NotificationModalComponent } from 'src/app/share/components/notification-modal/notification-modal.component';
import { OrderService } from './../../../share/services/order.service';

@Component({
  selector: 'app-product-detail-desktop',
  templateUrl: './product-detail-desktop.component.html',
  styleUrls: ['./product-detail-desktop.component.scss'],
})
export class ProductDetailDesktopComponent {
  @Input() product!: Product;
  @Input() productAttributes!: any;

  productOrderForm = new FormGroup({
    color: new FormControl(null, Validators.required),
    size: new FormControl(null, Validators.required),
    quantity: new FormControl(1),
  });

  constructor(private orderService: OrderService, private dialog: MatDialog) {}

  onOrderSubmit(): void {
    if (this.productOrderForm.valid) {
      this.orderService.addOrder({
        productId: this.product.id,
        color: this.productOrderForm.value.color!,
        size: this.productOrderForm.value.size!,
        quantity: this.productOrderForm.value.quantity!,
      });

      this.dialog.open(NotificationModalComponent, {
        panelClass: 'notification-modal',
        data: 'Sản phẩm đã được thêm vào giỏ hàng của bạn.',
      });
    }
  }
}
