import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { IS_MOBILE } from 'src/app/models/constants';
import { Product } from 'src/app/models/product';
import { inOutAnimation } from 'src/app/share/animations/in-out-animation';
import { ProductService } from './../../share/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  animations: [inOutAnimation],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  product = new Product();

  productAttributes: any[] = [
    { attribute: 'Kho', value: '999' },
    { attribute: 'Thương hiệu', value: 'Kevin Tran & Collab' },
    { attribute: 'Phong cách', value: 'Retro, Đường phố, Thể thao, Hàn Quốc' },
    { attribute: 'Xuất xứ', value: 'Việt Nam' },
    { attribute: 'Chất liệu', value: 'Cotton' },
    { attribute: 'Hạn bảo hành', value: '12 tháng' },
    { attribute: 'Loại bảo hành', value: 'Bảo hành nhà sản xuất' },
    { attribute: 'Dán kiểu áo', value: 'Cổ điển' },
  ];

  description: string = `- Chất liệu: TC
    - Form: Cơ bản
    - Thiết kế: Hình Typhography In cán lụa cao cấp
    - Bảo quản: Giặt với nước lạnh
    Cách chọn size: Teelab có bảng size mẫu. Nếu chưa biết lựa size bạn có thể inbox để được Teelab tư vấn.
    Lưu ý : Áo Teelab là form rộng mặc thoải mái rồi không cần nhích size trừ trường hợp thích oversize size hẳn
    Hướng dẫn sử dụng sản phẩm Áo Teelab
    - Giặt ở nhiệt độ bình thường, với đồ có màu tương tự.
    - Không dùng hóa chất tẩy.
    - Hạn chế sử dụng máy sấy và ủi (nếu có) thì ở nhiệt độ thích hợp.
    Chính sách Teelab
    – Miễn phí đổi hàng cho khách mua ở TEELAB trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, bị hư hỏng trong quá trình vận chuyển hàng.
    – Sản phẩm đổi trong thời gian 3 ngày kể từ ngày nhận hàng
    – Sản phẩm còn mới nguyên tem, tags và mang theo hoá đơn mua hàng, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.

    TEELAB -  Green Generation nơi bạn có thể thỏa sức thử nghiệm phong cách của mình. Được thành lập vào 2020 với rất nhiều những sự biến động của xã hội, TEELAB bắt đầu chặng đường viết lên câu chuyện của riêng mình. Khi văn hóa đường phố dần trở nên phổ biến hơn cũng là lúc nhu cầu được thỏa mãn đam mê về thời trang của những GenZ mãnh liệt hơn bao giờ hết. TEELAB, phòng thí nghiệm về thời trang và những thiết kế mang đậm tinh thần TEELAB của chúng tôi “Your body is your greatest canvas” hứa hẹn sẽ mang đến cho các bạn trẻ Việt Nam nhiều trải nghiệm thú vị và mới mẻ về thời trang đường phố. Đội ngũ Fashion Scientist của TEELAB luôn cố gắng hoàn thiện và phát triển sản phầm, để có thể mang tới cho khách hàng những sản phẩm có chất lượng tốt nhất, được nghiên cứu kỹ càng và đáp ứng những tiêu chuẩn điên rồ nhất từ phòng thí nghiệm của chúng tôi.

    #genz #teelab #aokhoac #streetwear #aonam #aonu #aokhoacdep #bomber #bomber #bomer
  `;

  constructor(
    @Inject(IS_MOBILE) public isMobile: boolean,
    @Inject(DOCUMENT) private document: Document,
    public productService: ProductService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.productService.getProductBySlug(params['slug'])
        ),
        takeUntil(this.onDestroy$)
      )
      .subscribe((product) => (this.product = product!));

    if (this.isMobile) {
      this.renderer.addClass(this.document.body, 'hide-footer');
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hide-footer');
  }
}
