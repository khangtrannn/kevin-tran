import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  data: Product[] = [
    {
      title:
        'Kệ nhựa mini để bàn , giá để đồ 2 tầng Béo Shop màu trắng có thể tháo rời tiện lợi',
      image: 'https://cf.shopee.vn/file/986d37450760499be75b26aee231ec08_tn',
      discount: 14,
      isFavorite: false,
      price: 42900,
      soldOutNumbers: '3,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: '10% Giảm', outlineBadge: undefined },
    },
    {
      title:
        'Thảm lông trải sàn chống trượt trang trí nội thất xinh xắn 40*60cm',
      image: 'https://cf.shopee.vn/file/943997c6bcab149c008024ffc8dd3a84_tn',
      discount: 43,
      isFavorite: true,
      price: 42300,
      soldOutNumbers: '2,5k',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: '5% Giảm', outlineBadge: undefined },
    },
    {
      title:
        'áo khoác bomber thời trang thu đông nam nữ - áo bomber gió, nỉ gấu hàng 1 lớp form rộng, unisex, freesize giá rẻ nhất❤❤',
      image: 'https://cf.shopee.vn/file/b87cc396a55e5dc2c9db9a21fd5a3cf3_tn',
      discount: 0,
      isFavorite: true,
      price: 63000,
      soldOutNumbers: '8k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Giày Thể thao Nike_Custom trắng Thập Tự kèm phụ kiện xịn, Giày Sneaker nike_trắng 𝐀𝐢𝐫 𝐅𝐨𝐫𝐜𝐞 𝟏 full size',
      image: 'https://cf.shopee.vn/file/62143d5747b7eec29da732901b7ded0d_tn',
      discount: 0,
      isFavorite: false,
      price: 6800,
      soldOutNumbers: '6,2k',
      promotionOverlay: undefined,
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Giày vớ kiểu đế mềm phối màu đáng yêu thoải mái dành cho bé tập đi',
      image: 'https://cf.shopee.vn/file/70cdb1e4fe083886bb7cdf2675a99699_tn',
      discount: 4,
      isFavorite: true,
      price: 49000,
      soldOutNumbers: '4,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Bộ ga gối vỏ chăn 5 món poly cotton mẫu mới',
      image: 'https://cf.shopee.vn/file/097148c88f6087f05c223f32ef5305be_tn',
      discount: 13,
      isFavorite: true,
      price: 60000,
      soldOutNumbers: '3,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/cdeb7ed58aa5f3e2f6aa1a95c189bc55',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Áo Khoác Cardigan Kẻ Thoi Form Rộng Đen/ Hồng Chất Nỉ New',
      image: 'https://cf.shopee.vn/file/b24ede3c9f685811bdb4cf02cc84da76_tn',
      discount: 40,
      isFavorite: true,
      price: 59000,
      soldOutNumbers: '31',
      promotionOverlay:
        'https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c',
      promotionBadge: { fullBadge: '10% Giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo Cadigan Cổ V, In Chữ Nét Căng, Unisex Form Thụng( Kèm Ảnh Thật)',
      image: 'https://cf.shopee.vn/file/18c2d9653669cea7dbe9fc5d5bb7c0a9_tn',
      discount: 50,
      isFavorite: false,
      price: 75000,
      soldOutNumbers: '268',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Móc Khoá Phi Hành Gia đeo balo HOT TREND Dễ Thương giá rẻ',
      image: 'https://cf.shopee.vn/file/ad8bdd8a2a4de8d1935646e9c45bf4b9_tn',
      discount: 48,
      isFavorite: false,
      price: 22750,
      soldOutNumbers: '962',
      promotionOverlay:
        'https://cf.shopee.vn/file/cdeb7ed58aa5f3e2f6aa1a95c189bc55',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Đồng Hồ Thông Minh IWO 14 Series 7 T900 Pro MAX Đa Màu Sắc Và Phụ Kiện',
      image: 'https://cf.shopee.vn/file/12f643d69acbf689325154b4b944bfd3_tn',
      discount: 39,
      isFavorite: false,
      price: 161312,
      soldOutNumbers: '368',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'TEM XE THEO TÊN ( inbox nội dung tem cho shop)',
      image: 'https://cf.shopee.vn/file/c59aa745f2ba3b3ee47a64521a8f60d2_tn',
      discount: 14,
      isFavorite: false,
      price: 30000,
      soldOutNumbers: '1,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Gối Cao Su Non Chống Đau Cột Sống dành cho người lớn giúp ngủ ngon, mềm mịn, dành cho người ngáy',
      image: 'https://cf.shopee.vn/file/6a60be158d520825e476f6d5b8775cc6_tn',
      discount: 41,
      isFavorite: true,
      price: 64500,
      soldOutNumbers: '2,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Thảm Lau Chân KRS01 chùi chân chống trượt  nhà bếp welcome cao cấp giá rẻ khách sạn đế cao su hút nước',
      image: 'https://cf.shopee.vn/file/761d67b0c1656c95aa00c6489691bc8d_tn',
      discount: 47,
      isFavorite: true,
      price: 21000,
      soldOutNumbers: '7,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo phông unisex nam nữ PHG tay lỡ, áo thun mùa hè form rộng mát mịn phong cách - Huyhaufashion96',
      image: 'https://cf.shopee.vn/file/5afa4d7c9e9b825f888954ee1c034c08_tn',
      discount: 50,
      isFavorite: false,
      price: 1200,
      soldOutNumbers: '1,2k',
      promotionOverlay: undefined,
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'ÁO KHOÁC BOMBER NAM NỮ MÀU SẮC TRẺ TRUNG NĂNG ĐỘNG SÀNH ĐIỆU THỜI TRANG CHU G',
      image: 'https://cf.shopee.vn/file/1409721e929bda26f62468a52f4526af_tn',
      discount: 0,
      isFavorite: true,
      price: 20000,
      soldOutNumbers: '1,8k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Tai Nghe Mèo Bluetooth P47M MZ47 Tai Mèo Dễ Thương Có Mic, Âm Bass Mạnh Mẽ Nghe Nhạc Cực Hay FullBox',
      image: 'https://cf.shopee.vn/file/ecbe9d42374c7e50c5e6839e119cdd5e_tn',
      discount: 50,
      isFavorite: false,
      price: 25000,
      soldOutNumbers: '4,3k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'ÁO BRA DÁN NÂNG NGỰC SILICON CÀI TRƯỚC KHÔNG GỌNG HÌNH BÀN TAY P29 BC_CHIC LINGERIE',
      image: 'https://cf.shopee.vn/file/420cfa04e5a15ef20da491b9c7167da6_tn',
      discount: 49,
      isFavorite: true,
      price: 20400,
      soldOutNumbers: '1,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: '[Mã ELSD22 giảm 5% đơn 3TR] Apple iPhone 12 64GB',
      image: 'https://cf.shopee.vn/file/77404ff511ce0585cca1f78f89b91c91_tn',
      discount: 43,
      isFavorite: false,
      price: 16300,
      soldOutNumbers: '670',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '10% Giảm', outlineBadge: undefined },
    },
    {
      title: 'Son Môi Dưỡng Ẩm Chống Thấm Nước Màu Nhung Lì 2022',
      image: 'https://cf.shopee.vn/file/6d8726a5cb7a1421106022fee15118f1_tn',
      discount: 43,
      isFavorite: false,
      price: 4000,
      soldOutNumbers: '3,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Túi Đeo Chéo Nữ vải canvas Túi Đeo Vai đi học đi chơi phong cách Hàn Quốc - xuongmaytnt',
      image: 'https://cf.shopee.vn/file/765c90e4b83e64cb360697a89d2adc8d_tn',
      discount: 43,
      isFavorite: false,
      price: 69000,
      soldOutNumbers: '21,5k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Nhẫn Mở Khắc Chữ N-Z Đính Đá Pha Lê Thời Trang Cho Nữ',
      image: 'https://cf.shopee.vn/file/7f4cfbe297b506f05047828ce3f9c2c3_tn',
      discount: 40,
      isFavorite: true,
      price: 6600,
      soldOutNumbers: '182',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        '[Mã ELHA9 giảm 15% đơn 50K] (PD 20W)(BH 12 tháng) Sạc Nhanh PD 20W Dành Cho Máy 8>14',
      image: 'https://cf.shopee.vn/file/936c28604e5438c15fe5099f39c46804_tn',
      discount: 41,
      isFavorite: false,
      price: 62000,
      soldOutNumbers: '60,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/cdeb7ed58aa5f3e2f6aa1a95c189bc55',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Bộ Đồ Chơi Cắt Rau Củ Quả Có Thể Tái Sử Dụng Cho Trẻ Em',
      image: 'https://cf.shopee.vn/file/3e01928f4a2456a2488523ed2e866596_tn',
      discount: 43,
      isFavorite: false,
      price: 29668,
      soldOutNumbers: '40',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'TEE BASIC V-1 ÁO THUN TAY NGẮN NAM NỮ TARBO ÁO THUN TAY NGẮN NAM NỮ Lisa store  ( V419)',
      image: 'https://cf.shopee.vn/file/7e443a81d8241337caff2455188cd040_tn',
      discount: 57,
      isFavorite: true,
      price: 68000,
      soldOutNumbers: '11,8k',
      promotionOverlay:
        'https://cf.shopee.vn/file/cdeb7ed58aa5f3e2f6aa1a95c189bc55',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Thùng rác nắp lật hình gấu trúc dễ thương OUYOU',
      image: 'https://cf.shopee.vn/file/e0c06422e1061d72b5979038695372a2_tn',
      discount: 25,
      isFavorite: true,
      price: 6500,
      soldOutNumbers: '4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Dép lê quai caro xinh xẻo đủ size',
      image: 'https://cf.shopee.vn/file/d8fdf1c454d06b6713694906f2402140_tn',
      discount: 0,
      isFavorite: true,
      price: 85000,
      soldOutNumbers: '1,4k',
      promotionOverlay: undefined,
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Keo dán giày thể thao siêu dính dùng nhiệt trong suốt không tổn thương da XIMO KDG06',
      image: 'https://cf.shopee.vn/file/185917d299deab0ce37feb6b3c5fce58_tn',
      discount: 62,
      isFavorite: false,
      price: 19000,
      soldOutNumbers: '39k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Bộ ga gối m6/m8 drap giường poly, ga trải giường + 2 vỏ gối nằm hàng loại 1 được chọn màu',
      image: 'https://cf.shopee.vn/file/32abc042d5a67f36965773f6d238acb1_tn',
      discount: 50,
      isFavorite: true,
      price: 15000,
      soldOutNumbers: '8,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/cdeb7ed58aa5f3e2f6aa1a95c189bc55',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Ô Trong Suốt Đi Mưa',
      image: 'https://cf.shopee.vn/file/17c17e67fd2f40be0fe3b5ae5e79d7b6_tn',
      discount: 26,
      isFavorite: true,
      price: 28005,
      soldOutNumbers: '12k',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun tay lỡ form rộng - phông nam nữ cotton oversize - T shirt Forest b - 2N Unisex',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-gtzplxxx9zhv24_tn',
      discount: 37,
      isFavorite: false,
      price: 79000,
      soldOutNumbers: '6,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: '10% Giảm', outlineBadge: undefined },
    },
    {
      title:
        '(Mẫu thử 15g) Dâu tây sấy dẻo nguyên vị không đường Nhà Lá Đẹp Da Chống Lão Hóa',
      image: 'https://cf.shopee.vn/file/efa20621e70e59727bc02530ef58396f_tn',
      discount: 97,
      isFavorite: true,
      price: 1000,
      soldOutNumbers: '13,3k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Giày Sandal Đế Bệt Dày Thời Trang Mùa Hè Dành Cho Nữ Hq048',
      image: 'https://cf.shopee.vn/file/72fcedfd601c115d315384e0f491c1a6_tn',
      discount: 50,
      isFavorite: false,
      price: 90000,
      soldOutNumbers: '14,5k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Mũ lưỡi trai ❤️ Nón kết thêu chữ phong cách Ulzzang form unisex nam nữ N01',
      image: 'https://cf.shopee.vn/file/ee210aec49ebf340754319bc48b04e3b_tn',
      discount: 36,
      isFavorite: true,
      price: 33000,
      soldOutNumbers: '85,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Giày nam mẫu mới kiể dáng thời trang trẻ trung năng đông Avi 405',
      image: 'https://cf.shopee.vn/file/af21a72af277c6a11e1a35995e07b505_tn',
      discount: 38,
      isFavorite: true,
      price: 149000,
      soldOutNumbers: '13,6k',
      promotionOverlay: undefined,
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Mô hình Lego 3D Doremon sáng tạo - Mô Hình Lắp Ráp nhân vật hoạt hình đáng yêu cho bé',
      image: 'https://cf.shopee.vn/file/db06839527dfd7b6081e5fe7cf82edf1_tn',
      discount: 40,
      isFavorite: false,
      price: 36000,
      soldOutNumbers: '171',
      promotionOverlay:
        'https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Tai Nghe Bluetooth Không Dây I7S Tws Phù Hợp Với Android IOS',
      image: 'https://cf.shopee.vn/file/8f7e972bd86bdbaec83c2e14a2b05856_tn',
      discount: 28,
      isFavorite: false,
      price: 29000,
      soldOutNumbers: '506',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Đũi Nam Cổ V Tay Ngắn Chất Liệu Đũi Mềm Mịn Mát Nhẹ đi biển  Quần đùi nam short Đũi Nam',
      image: 'https://cf.shopee.vn/file/c6bbe50d56fa7551eedbe44e65f6c5bf_tn',
      discount: 31,
      isFavorite: true,
      price: 69000,
      soldOutNumbers: '624',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Quần Ống Rộng Kaki Siêu Hot',
      image: 'https://cf.shopee.vn/file/85ea6e9775588b95d6d53542cc9b99f0_tn',
      discount: 39,
      isFavorite: true,
      price: 115000,
      soldOutNumbers: '6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Cọ Rửa Mặt Bạch Tuộc (Màu Hồng) mua lẻ với giá sỉ',
      image: 'https://cf.shopee.vn/file/5c653f6c5b87180d64ad9104651330d6_tn',
      discount: 0,
      isFavorite: true,
      price: 1900,
      soldOutNumbers: '2,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Basic tee Oversize Ulzzang cá tính - Áo Thun Unisex Nam Nữ SDVN BAD VIBES (V147)',
      image: 'https://cf.shopee.vn/file/b89ab7cca2d3506c71033d0d389b3c22_tn',
      discount: 39,
      isFavorite: true,
      price: 89000,
      soldOutNumbers: '9,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/cdeb7ed58aa5f3e2f6aa1a95c189bc55',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Vòng cổ Mặt Hình Vương Miện Năm Mới Bằng Thép Không Gỉ Cho Nữ',
      image: 'https://cf.shopee.vn/file/20e67e600280daa25b5a813b819b8a36_tn',
      discount: 48,
      isFavorite: false,
      price: 17000,
      soldOutNumbers: '1,3k',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Ốp Điện Thoại Chống Thấm Nước Bảo Vệ Toàn Diện Có Túi Khí Cho Apple 12promax 11 13 x/xr/78p Q7IQ',
      image: 'https://cf.shopee.vn/file/582f67fe5b57638c74c57d65ff3e429a_tn',
      discount: 20,
      isFavorite: false,
      price: 23701,
      soldOutNumbers: '7',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫5k', outlineBadge: undefined },
    },
    {
      title:
        'Nhẫn Cặp Khắc Chữ Cái / Chữ Số Tùy Chỉnh Kích Thước A-M Thời Trang Cho Nam Và Nữ',
      image: 'https://cf.shopee.vn/file/247effb13750dd644ad90f346c974f47_tn',
      discount: 40,
      isFavorite: true,
      price: 6600,
      soldOutNumbers: '243',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo phông nam nữ form rộng Xe hơi bluetopm , áo thun unisex tay lỡ oversize siêu nổi bật',
      image: 'https://cf.shopee.vn/file/5b7f02069c6de88f69680734a167ee98_tn',
      discount: 50,
      isFavorite: false,
      price: 1100,
      soldOutNumbers: '3,3k',
      promotionOverlay: undefined,
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Túi sưởi chườm nóng lạnh giữ nhiệt mini',
      image: 'https://cf.shopee.vn/file/fb9840a8d07ee4529cc578af681b4677_tn',
      discount: 0,
      isFavorite: false,
      price: 3000,
      soldOutNumbers: '3,5k',
      promotionOverlay:
        'https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Bộ 24 Móng Tay Giả Trang Trí Nghệ Thuật',
      image: 'https://cf.shopee.vn/file/94f16752f7380a228ae7856d03e4eac2_tn',
      discount: 35,
      isFavorite: false,
      price: 6500,
      soldOutNumbers: '5,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'COMBO Bánh Tráng Phơi Sương 500g - Muối Tôm Hành Phi - Túi bơ béo 100g SIÊU NGON - ĂN LÀ MÊ - TIGER FOOD',
      image: 'https://cf.shopee.vn/file/79a111e7e9554a463e34417670cd33a9_tn',
      discount: 34,
      isFavorite: true,
      price: 67880,
      soldOutNumbers: '44k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Ốp Điện Thoại Mềm Hình Tai Mèo / Phi Hành Gia / Thỏ Cho iPhone 14 13 12 11 Pro Max SE2020 X XR Xs Max 7 8 6 6s Plus',
      image: 'https://cf.shopee.vn/file/84811b87bdf2d6ca95d7d02c9d58bf19_tn',
      discount: 42,
      isFavorite: true,
      price: 14500,
      soldOutNumbers: '257',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun tay lỡ form rộng - phông nam nữ cotton oversize - T shirt thêu 4 logo a - 2N Unisex',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-ci901jvu9zhv5e_tn',
      discount: 37,
      isFavorite: false,
      price: 79000,
      soldOutNumbers: '11,3k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: '10% Giảm', outlineBadge: undefined },
    },
    {
      title:
        'Sơn móng tay gel thạch UV nhiều màu sắc lấp lánh Màu Đỏ / Xanh Dương / Hồng / Màu đỏ tía',
      image: 'https://cf.shopee.vn/file/34c449306809340ff24e20a28534021f_tn',
      discount: 41,
      isFavorite: false,
      price: 13000,
      soldOutNumbers: '2,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Son kem lì HERORANGE mềm mịn như nhung chống thấm nước chống khô môi lâu trôi MM',
      image: 'https://cf.shopee.vn/file/b1554d6c44c21b52766e54eed0ea28f5_tn',
      discount: 39,
      isFavorite: false,
      price: 6000,
      soldOutNumbers: '34,8k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        ' Ghim cài áo đính ngọc trai nhân tạo sang trọng thời trang tiện dụng cho nữ',
      image: 'https://cf.shopee.vn/file/e38c417e02e3660edce1b7f7cc1cc466_tn',
      discount: 50,
      isFavorite: true,
      price: 2800,
      soldOutNumbers: '14,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: 'Áo phông nam nữ xúc xắc, áo thun unisex freesize - xuantocdoshop',
      image: 'https://cf.shopee.vn/file/ebd2223687bc38677add1f9008ba38f9_tn',
      discount: 50,
      isFavorite: false,
      price: 1200,
      soldOutNumbers: '1,2k',
      promotionOverlay: undefined,
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Bộ quần áo len tăm hm / quần áo thu đong chấm bi tim xinh xắn cho bé gái',
      image: 'https://cf.shopee.vn/file/01592c83bb3df8ea16f0072f8b11b411_tn',
      discount: 32,
      isFavorite: true,
      price: 94000,
      soldOutNumbers: '186',
      promotionOverlay:
        'https://cf.shopee.vn/file/45e81cbd1bcfd8f0a2744b57fa61a67c',
      promotionBadge: { fullBadge: 'Giảm ₫2k', outlineBadge: undefined },
    },
    {
      title:
        'Kệ gỗ, Kệ gỗ Treo, Kệ gỗ treo tường Hàn Quốc hàng xịn kích thước 40cm x 15cm tặng kèm dây(không có ốc)',
      image: 'https://cf.shopee.vn/file/6199a4ac85e3580da1ef0b7afd9d91a6_tn',
      discount: 23,
      isFavorite: true,
      price: 23000,
      soldOutNumbers: '1,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Quần jogger thể thao hình thêu chữ C - Culottes ống rộng rút dây bản to, chất nỉ ngoại mềm mịn, phong cách năng động',
      image: 'https://cf.shopee.vn/file/6b9620d13725bf488bee8dc024feecf3_tn',
      discount: 50,
      isFavorite: true,
      price: 59000,
      soldOutNumbers: '257',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        '[Mã FAHISEPT9 giảm 20k đơn 0đ] Áo khoác cho bé. áo khoác gió tai thỏ dễ thương cho bé từ 6 -15kg',
      image: 'https://cf.shopee.vn/file/d3031037ab97173ae65f0e95a487791b_tn',
      discount: 25,
      isFavorite: true,
      price: 74250,
      soldOutNumbers: '906',
      promotionOverlay:
        'https://cf.shopee.vn/file/94fe1b0731631626089656dd2ce2dcf8',
      promotionBadge: { fullBadge: '10% Giảm', outlineBadge: undefined },
    },
    {
      title: 'HÀNG QUẢNG CHÂU - ĐI KHÔNG THỐI CHÂN - Dép Lê đế bự 4cm SẴN HÀNG',
      image: 'https://cf.shopee.vn/file/d04040a34b1020fcbe1693870473a4aa_tn',
      discount: 47,
      isFavorite: false,
      price: 79000,
      soldOutNumbers: '24,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/f2cb1f82803139f5ef324d71f4838f0c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title: '[SẴN] Chú Thuật Hồi Chiến Vol.7 Limited | Jujutsu Kaisen 7',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-aehaw6pvjthvf0_tn',
      discount: 0,
      isFavorite: false,
      price: 159000,
      soldOutNumbers: '57',
      promotionOverlay: undefined,
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Combo 5 Hộp 50 Khẩu trang 5D KENKO kháng khuẩn, khẩu trang KENKO 5D màu trắng dành cho người lớn',
      image: 'https://cf.shopee.vn/file/988fb9d9ea583e8f13a9d675bebbd42f_tn',
      discount: 50,
      isFavorite: false,
      price: 4600,
      soldOutNumbers: '4,8k',
      promotionOverlay:
        'https://cf.shopee.vn/file/55b5fcc238686797765af4a9d75f4a0f',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
  ];
}
