import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  @Input() product!: Product;

  productAttributes: any[] = [
    { attribute: 'Kho', value: '39' },
    { attribute: 'Thương hiệu', value: 'Keychron' },
    { attribute: 'Kiểu kết nối', value: 'Không dây' },
    { attribute: 'Bộ sản phẩm', value: 'Có' },
    { attribute: 'Loại bàn phím', value: 'Bàn phím cơ' },
    { attribute: 'Hạn bảo hành', value: '12 tháng' },
    { attribute: 'Loại bảo hành', value: 'Bảo hành nhà sản xuất' },
    { attribute: 'Game chuyên dụng', value: 'Có' },
    { attribute: 'Model bàn phím & chuột', value: 'Keychron K8 Pro' },
    { attribute: 'Bàn phím tương thích', value: 'macOS/Windows/Linux' },
    {
      attribute: 'Kích thước (dài x rộng x cao)',
      value: '359 x 127 x 42mm',
    },
    {
      attribute: 'Tên tổ chức chịu trách nhiệm sản xuất',
      value: 'Công Ty Cổ Phần SiliconZ',
    },
    {
      attribute: 'Địa chỉ tổ chức chịu trách nhiệm sản xuất',
      value: '72 Ngô Bệ, P.13, Q.Tân Bình, TP.HCM',
    },
    { attribute: 'Gửi từ', value: 'Hà Nội' },
  ];
}
