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
        'Áo thun POLO nam cổ bẻ BASIC CVC vải cá sấu Cotton kháng khuẩn, chống nhăn, thoáng mát - HAPPYHOW',
      image: 'https://cf.shopee.vn/file/596f3645e97fc80cf657a911f2a8072e_tn',
      discount: 0,
      isFavorite: false,
      price: 299000,
      soldOutNumbers: '45,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ BASIC-POLOMANOR vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng',
      image: 'https://cf.shopee.vn/file/bfa414729fc1ecdcdad6fa3e52523923_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '1,3k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ BASIC VEE vải thun cotton Cosi, nam tính, chỉn chu, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/3c1fc47e85f15a80247e99b0f35dda2d_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '650',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun nam cổ tròn in POLOMANOR vải cotton Cosi 100% cao cấp, nam tính, trẻ trung, thanh lịch',
      image: 'https://cf.shopee.vn/file/c3f132d6c7c316869e722560057e5e34_tn',
      discount: 0,
      isFavorite: false,
      price: 220000,
      soldOutNumbers: '95,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam form rộng UGO-WHITE vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/4748914941a136a80cc3cbdacac5f2e7_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '505',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam form rộng UGO-BLACK vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/fe0751cd3e233866afa22b39f9b3f714_tn',
      discount: 10,
      isFavorite: false,
      price: 315000,
      soldOutNumbers: '1,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam cổ v EVAN vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-yd3616xp4civdc_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '752',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun nam cổ tròn HAPPYHOW vải Cotton co giãn 4 chiều ,dày dặn, form regular fit thoải mái',
      image: 'https://cf.shopee.vn/file/69139946bb7241ad1b9c8374525b6b6d_tn',
      discount: 0,
      isFavorite: false,
      price: 150000,
      soldOutNumbers: '16,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: 'Giảm ₫10k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam cổ bẻ in DARI vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-kw1figbm4civ7a_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '427',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối MATT vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-ui8pi9kr4civ47_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '226',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam cổ bẻ in LUGI vải cá sấu cotton CVC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-6nvh9l0m4civf0_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '514',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối TINO vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/701fb5141faeb03d2be21e122173bf1a_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '175',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối INGO vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/ce57435cad011d178e721a37633d0cfd_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '601',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam cổ bẻ RENZO vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-o4wgb29j4civeb_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '465',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối GONZA vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-ars54mgq4civ55_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '435',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ BASIC-WHITE vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/7bd4ff0e4080388d817b53b33ff40b41_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '1,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối CARLO vải cá sấu cotton CVC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-o8jlhk2k4civbe_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '154',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối ELIO vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-dq3ia40i4civdb_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '496',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam cổ bẻ in AGATI vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/b5414897742d5ca9306dfbf18bb58c32_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '292',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ BASIC-BROWN vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/24aed6a3f96a1639824091cca52ec6ae_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '1,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối LUCAS vải cá sấu cotton CVC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/b8f884af3a92b0679c36ba25a8d107d1_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '1,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam form rộng UGO-NAVY vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/0c405b316cbe6630b4c6f3e8746fa0ad_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '620',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Quần lót nam boxer AMIDE cao cấp dệt sợi tự nhiên kháng khuẩn, khử mùi, thoáng khí - POLOMANOR',
      image: 'https://cf.shopee.vn/file/da9e3c3806b8740baad8b8bdfa59d2c6_tn',
      discount: 0,
      isFavorite: false,
      price: 99000,
      soldOutNumbers: '22,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối ALEX vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/caabe5b42ed90019c8313b165fcc5326_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '149',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ BASIC-BEIGE vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/e57944651447105e456567b8a6f91c52_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '99',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Quần lót BOXER nam vải thun lụa Icy tự nhiên 100% kháng khuẩn ,khử mùi, co giãn tốt - POLOMANOR',
      image: 'https://cf.shopee.vn/file/68958a3bd1cf8ed96468b9d91a485966_tn',
      discount: 40,
      isFavorite: false,
      price: 59000,
      soldOutNumbers: '27,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối HUGON vải cá sấu cotton CVC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/ed93e3c46de60a6be385ddcf7980ea7a_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '130',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Polo nam cổ bẻ TEDI vải cá sấu Cotton xuất xịn, chuẩn form,sang trọng-lịch lãm - HAPPYHOW',
      image: 'https://cf.shopee.vn/file/ccbb0f2467ba4a365ec5b1f4bce08cf1_tn',
      discount: 0,
      isFavorite: false,
      price: 299000,
      soldOutNumbers: '15,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam cổ bẻ in BENNY vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-d7q5886o4civd6_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '114',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Combo 4 quần lót BOXER nam vải thun lụa sữa Icy tự nhiên 100% kháng khuẩn ,khử mùi, co giãn tốt - POLOMANOR',
      image: 'https://cf.shopee.vn/file/c353309d3377c6e948d431fc172bdaa7_tn',
      discount: 0,
      isFavorite: false,
      price: 396000,
      soldOutNumbers: '483',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối BRUNO vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/22b74b4648a4770f1d8ab511dc7d8018_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '70',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ BASIC-GREEN vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/139e3307f1c544fbe64604d1f06840a9_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '812',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối BEVIS vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/13fb910082fe42afdadbc1481219734b_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '147',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam form rộng BRYCE vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/211cf083cd2d5302ebc5a419b7ac09cc_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối DAVIS vải cá sấu cotton CVC, nam tính, chỉn chu, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/034edb864fec76d2c180d1551400533a_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '143',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối IDA vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-eai1xb3kobivc8_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối HALAND vải cá sấu cotton CMC, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/a9ae0908b739a9227b444ea1c3643bcf_tn',
      discount: 0,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '113',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam form rộng UGO-BLUE vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/065aadb74be6e575095bd01397f28a9f_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '108',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối BOSCO vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-yhpeu0sxobiv9f_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun nam ngắn tay SAVA vải cotton Cosi 100% cao cấp, nam tính, chỉn chu, thanh lịch - POLOMANOR',
      image: 'https://cf.shopee.vn/file/7d1bdc0b117ee623e9ffba43790c5b9a_tn',
      discount: 0,
      isFavorite: false,
      price: 280000,
      soldOutNumbers: '104',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun nam ngắn tay ZONI vải cotton Cosi 100% cao cấp, nam tính, chỉn chu, thanh lịch - POLOMANOR',
      image: 'https://cf.shopee.vn/file/0c34290e8bbcd806e5d74deb8fbe1d5e_tn',
      discount: 0,
      isFavorite: false,
      price: 280000,
      soldOutNumbers: '105',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Polo nam cổ bẻ GOBO hình Pugdog vải cá sấu Cotton xuất xịn, chuẩn form - HAPPYHOW',
      image: 'https://cf.shopee.vn/file/27ec7c5f22c6607a58f8c1809643f358_tn',
      discount: 0,
      isFavorite: false,
      price: 299000,
      soldOutNumbers: '9,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam form rộng AILEN vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-eux0uuqfccivb3_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun unisex PAOLO vải cotton Cosi, form oversize, trẻ trung, năng động - POLOMANOR',
      image: 'https://cf.shopee.vn/file/b7d3dcace328dc7b6ca727c9a8e6ef47_tn',
      discount: 0,
      isFavorite: false,
      price: 280000,
      soldOutNumbers: '124',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun unisex NERI vải cotton Cosi 100%, form oversize, trẻ trung, năng động - POLOMANOR',
      image: 'https://cf.shopee.vn/file/3cc17f1a21b41cf91e7ef99f7a9f0987_tn',
      discount: 0,
      isFavorite: false,
      price: 280000,
      soldOutNumbers: '114',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun unisex SIMPLEBEAR vải cotton dệt kim sợi đôi, form oversize, trẻ trung, năng động - HAPPYHOW',
      image: 'https://cf.shopee.vn/file/df293901d52c355d1b2eeadcb88e7afe_tn',
      discount: 0,
      isFavorite: false,
      price: 280000,
      soldOutNumbers: '240',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam form rộng LOGAN vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/611905d3a17719a262ddeb04c2feb227_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam form rộng ANDY vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR',
      image: 'https://cf.shopee.vn/file/sg-11134201-22100-a4dhlt5eccivca_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫40k', outlineBadge: undefined },
    },
  ];

  theBasic: Product[] = [
    {
      title:
        'Áo polo nam Basic màu trơn phối gân dọc tinh tế, màu lịch lãm Leevus APL37',
      image: 'https://cf.shopee.vn/file/f6b1567174da7c6486055d3589c43c85_tn',
      discount: 29,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '14,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam BASIS màu mới, vải CVC cá sấu 4 chiều dày dặn, co giãn Leevus APL37',
      image: 'https://cf.shopee.vn/file/4b31eb8eef3ed7acecd82409eca671f8_tn',
      discount: 29,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '9,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun POLO cổ bẻ trẻ trung, lịch lãm - Màu mới cực sang trọng BASIS APL22',
      image: 'https://cf.shopee.vn/file/68e8bd5bb503a3cbf257e7fe754f551d_tn',
      discount: 29,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '11k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun polo nam phối màu xanh trắng, thiết kế đơn giản Leevus Basis APL59',
      image: 'https://cf.shopee.vn/file/7acc6899d0e517bd1a5aaec6ab27d944_tn',
      discount: 36,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '8,8k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam CONUT LEEVUS họa tiết lá in chìm tinh xảo trên nền vải CVC cá sấu 4 chiều, Basis APL271',
      image: 'https://cf.shopee.vn/file/2db04d05f77939e38b6f81f9762748a8_tn',
      discount: 10,
      isFavorite: false,
      price: 279000,
      soldOutNumbers: '5,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam LEEVUS họa tiết thêu gấu sắc nét, trẻ trung chất liệu CVC cá sấu Basis APL211',
      image: 'https://cf.shopee.vn/file/f7cc05c38297f440af165dc08a9231dc_tn',
      discount: 13,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '2,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam họa tiết hình xen kẻ in chìm trên nền đen tinh xảo Basis APL98',
      image: 'https://cf.shopee.vn/file/d92a14b082b28ca0295774772a4271b7_tn',
      discount: 36,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '1,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: 'Giảm ₫25k', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam có cổ màu đơn giản sang trọng, lịch lãm, chất liệu cá sấu CVC cao cấp Basis APL22',
      image: 'https://cf.shopee.vn/file/27675383e7d8928030a1a3c59032ef32_tn',
      discount: 29,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '2,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam in chìm họa tiết hoa quả màu đen nền vải xám sắc nét, Basis APL107',
      image: 'https://cf.shopee.vn/file/a84ef30b0975b729111545394be45d75_tn',
      discount: 36,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '684',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo thun polo nam có cổ cao cấp, màu kem phối viền sang trọng, Leevus Basis APL177',
      image: 'https://cf.shopee.vn/file/cf87d6e4508f1e6c0913ca3ec7e50059_tn',
      discount: 13,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '7,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam in họa tiết cao cấp vải CVC cá sấu Leevus, Basis APL214',
      image: 'https://cf.shopee.vn/file/cce24b0eb418562c5a72cf1ff88c679f_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '539',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam trơn LEEVUS tông màu trung tính đơn giản, chất liệu cá sấu CVC BASIS APL22',
      image: 'https://cf.shopee.vn/file/b48a9a0a2a189e4d1831b76002f4296c_tn',
      discount: 29,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '2,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam CELI LEEVUS phối sọc thanh lịch, vải cotton, form regular APL222',
      image: 'https://cf.shopee.vn/file/335bceddecf9f6d97d7f92021a14440f_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '1,1k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam LEEVUS thiết kế Raglan, in logo, vải CVC cá sấu APL204',
      image: 'https://cf.shopee.vn/file/25eefd8cded679712f59335354209662_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '938',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam Raglan logo LEEVUS, thanh lịch, trẻ trung vải CVC cá sấu APL204',
      image: 'https://cf.shopee.vn/file/fa632641c8de8f3ebf92f69461ae93da_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '553',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ RAKEN LEEVUS màu trắng xanh đen, thêu logo, vải CVC cá sấu, form regular APL266',
      image: 'https://cf.shopee.vn/file/094e6947d6a647d77b5ef91a5c615a62_tn',
      discount: 33,
      isFavorite: false,
      price: 239000,
      soldOutNumbers: '315',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '11% Giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ DASA LEEVUS màu trắng, thêu logo, vải CVC cá sấu, form regular APL23',
      image: 'https://cf.shopee.vn/file/ddda68b6625e8655de46294b2a301eba_tn',
      discount: 39,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '275',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam TEDON LEEVUS phối phối vải thun gân độc đáo, vải CVC cá sấu, form regular APL263',
      image: 'https://cf.shopee.vn/file/f976a804715ebbc61a88884f40605a11_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '290',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ DASA LEEVUS màu be, thêu logo, vải CVC cá sấu, form regular APL23',
      image: 'https://cf.shopee.vn/file/195e7967cbef7d0db67615d80a5c0907_tn',
      discount: 39,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '235',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam NEXO LEEVUS phối màu xám đen, thêu logo, vải CVC cá sấu, form regular APL270',
      image: 'https://cf.shopee.vn/file/5e65863b2a4e37361345dce98037c685_tn',
      discount: 33,
      isFavorite: false,
      price: 239000,
      soldOutNumbers: '209',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '11% Giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam LEEVUS tông xanh phối sọc vải CVC cá sấu co giãn APL95',
      image: 'https://cf.shopee.vn/file/ed00924909c48e808b8c02a67f462ff4_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '788',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ DASA LEEVUS màu đen, thêu logo, vải CVC cá sấu, form regular APL23',
      image: 'https://cf.shopee.vn/file/4e04b849fd8ca32528015b6412d9c344_tn',
      discount: 39,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '193',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam LEEVUS phối sọc trẻ trung, thanh lịch, vải CVC cá sấu APL95',
      image: 'https://cf.shopee.vn/file/da30ff8c385f148d1932af96d7113b4c_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '795',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ DASA LEEVUS màu xanh đen, thêu logo, vải CVC cá sấu, form regular APL23',
      image: 'https://cf.shopee.vn/file/dc65308b02484d23a616a3955cee5cc9_tn',
      discount: 39,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '171',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam KALIN LEEVUS phối chi tiết xám cổ và tay áo, thêu logo, vải CVC cá sấu, form regular APL269',
      image: 'https://cf.shopee.vn/file/6cacbc67aaf844fbebc6035971a9dc33_tn',
      discount: 33,
      isFavorite: false,
      price: 239000,
      soldOutNumbers: '143',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '11% Giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam có cổ DASA LEEVUS BASIC, bo cổ và tay dệt gân, thêu logo, vải CVC cá sấu APL23',
      image: 'https://cf.shopee.vn/file/bcac9d9f3d2c001a46815e422578547c_tn',
      discount: 39,
      isFavorite: false,
      price: 219000,
      soldOutNumbers: '133',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: 'Giảm ₫25k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam LEEVUS tông đen xám phối sọc vải CVC cá sấu, form regular APL95',
      image: 'https://cf.shopee.vn/file/a0a21d6e959a2198660f2d79cd0efb5d_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '601',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam phối Raglan logo LEEVUS đen trắng, trẻ trung vải CVC cá sấu APL204',
      image: 'https://cf.shopee.vn/file/33b6f4da237b61eb1ae5db1cf4caf73f_tn',
      discount: 25,
      isFavorite: false,
      price: 269000,
      soldOutNumbers: '1,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam RAKAN LEEVUS Phối raglan xám đen, vải CVC cá sấu, form regular APL259',
      image: 'https://cf.shopee.vn/file/101e743e2fe302b2733b1591823898da_tn',
      discount: 33,
      isFavorite: false,
      price: 239000,
      soldOutNumbers: '158',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam REGAL LEEVUS phối màu đen xám, thêu logo, vải CVC cá sấu, form regular APL256',
      image: 'https://cf.shopee.vn/file/a7bf7e738a12eef92c1fdb86297713c2_tn',
      discount: 33,
      isFavorite: false,
      price: 239000,
      soldOutNumbers: '122',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: undefined, outlineBadge: undefined },
    },
  ];

  polido: Product[] = [
    {
      title: 'Áo Polo In Họa Tiết Kẻ Sọc CEFFYLO Chất Liệu Cotton Mềm Mại, Co Giãn 4 Chiều',
      image: 'https://cf.shopee.vn/file/e5edafb9c72aa05d9cc75ad004030c69_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '39/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Quần Khaki Nam Túi Chéo Vải Chinos Chất Liệu Dày Dặn, Co Giãn Cực Mạnh, Giữ Form Tuyệt Đối - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/36cabb5512fc5f868555c07f9d9c8467_tn',
      discount: 0,
      isFavorite: false,
      price: 450000,
      soldOutNumbers: '36/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Polo Họa Tiết Houndstooth CEFFYLO Chất Liệu Cotton Co Giãn, Form Ôm Nhẹ Tôn Dáng',
      image: 'https://cf.shopee.vn/file/3a7a3a3e245dbb2d9b548c4968db9475_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '27/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Polo Nam Cộc Tay CEFFYLO Phối Kẻ Sườn Màu Nâu, Xám Chất Cotton Lịch Lãm Sang Trọng',
      image: 'https://cf.shopee.vn/file/a1fca687a1aeb31db0e16060cc6eff68_tn',
      discount: 50,
      isFavorite: false,
      price: 175000,
      soldOutNumbers: '18/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Sơ Mi Nam CEFFYLO Màu Trắng Vải Cotton Thấm Hút, Chống Nhăn Form Slimfit',
      image: 'https://cf.shopee.vn/file/9c7f5f3cba1a098fe048ab8299e539f3_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '17/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Polo Raglan Phối Ceffylo Chất Liệu Cotton Co Giãn Nhẹ, Kiểu Dáng Slim Dễ Mặc',
      image: 'https://cf.shopee.vn/file/bb15f8a7c3a1051a2e7979a5e7fca46d_tn',
      discount: 50,
      isFavorite: false,
      price: 190000,
      soldOutNumbers: '16/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo POLO Phối Sọc Ceffylo Chất Liệu Cotton Có Độ Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/f81916b87371614838e4c34d597d2a2c_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '14/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Sơ Mi Dài Tay Nam Chất Liệu Đũi 3 Màu Ceffylo Thoáng Mát',
      image: 'https://cf.shopee.vn/file/17759d4b3c5e7c4b1a8bca4cabf3d5de_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '13/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Polo Nam Phối Nẹp CF Chất Liệu Cotton Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/e4ea42db1ed7fa7f426f21cf5eb8f160_tn',
      discount: 30,
      isFavorite: false,
      price: 273000,
      soldOutNumbers: '12/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Sơ Mi Nam CEFFYLO vải Cotton thấm hút, chống nhăn form Slimfit',
      image: 'https://cf.shopee.vn/file/a2b19389bfb3a745b93a22021dd69be1_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '11/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Phông Cộc Tay Kẻ Ngang Nhiều Màu Ceffylo, Chất Liệu Cotton Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/806f81bdb2f71ebd39c5c4a1fc4ae9e5_tn',
      discount: 35,
      isFavorite: false,
      price: 169000,
      soldOutNumbers: '11/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Quần tây nam công sở cao cấp form dáng slimfit CEFFYLO',
      image: 'https://cf.shopee.vn/file/7c5a3e233be116364e5824c2428bf48c_tn',
      discount: 0,
      isFavorite: false,
      price: 480000,
      soldOutNumbers: '10/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo POLO Nam Ngực Phối Sọc CF, Chất Liệu Cotton Thoáng Mát',
      image: 'https://cf.shopee.vn/file/849874128c9f1a43debce3aec5370a12_tn',
      discount: 30,
      isFavorite: false,
      price: 273000,
      soldOutNumbers: '10/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Polo Trơn Phối Bo CEFFYLO Vải Cotton 100% 7 Màu Trẻ Trung',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-zw8ps0dh5rhv8a_tn',
      discount: 30,
      isFavorite: false,
      price: 245000,
      soldOutNumbers: '9/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Sơ Mi Nam Dài Tay Sọc Ceffylo Nam Chất Liệu Đũi Có Độ Co Giãn Nhẹ, Mềm Mịn - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/4b2fd0428c4d29832ec13119004c4d90_tn',
      discount: 30,
      isFavorite: false,
      price: 273000,
      soldOutNumbers: '8/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Phông Cộc Tay Nam CEFFYLO Ngực In Chữ Minimalist Màu Trắng Chất Cotton Thoáng Mát',
      image: 'https://cf.shopee.vn/file/e9d6766cff5cc02ec779c8986e2727de_tn',
      discount: 30,
      isFavorite: false,
      price: 196000,
      soldOutNumbers: '8/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Sơ Mi Nam CEFFYLO Dài Tay Đũi Trơn Basic, Kiểu Dáng Đơn Giản Dễ Kết Hợp - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/407ff4b26f01e0262beba669a784707e_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '8/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Polo Cộc Tay Nam Phối Túi Màu Be, Chất Liệu Cotton Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/22554446428f690b697c40ba1a43f90d_tn',
      discount: 50,
      isFavorite: false,
      price: 190000,
      soldOutNumbers: '7/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Quần Tây Nam Cạp Trượt Kiểu Dáng Basic, Đơn Giản Dễ Phối ĐỒ',
      image: 'https://cf.shopee.vn/file/3f132d45538f43b3f1203e42f92d767e_tn',
      discount: 0,
      isFavorite: false,
      price: 580000,
      soldOutNumbers: '7/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Phông Cộc Tay Nam CEFFYLO Ngực In Chữ Minimalist Màu Đen Chất Cotton Thoáng Mát',
      image: 'https://cf.shopee.vn/file/ea23fbb5d2d0fcbad3c8faa9a3bf6789_tn',
      discount: 30,
      isFavorite: false,
      price: 196000,
      soldOutNumbers: '7/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Phông Nam Trơn Basic CEFFYLO Chất Liệu Cotton Tự Nhiên Mềm Mại Basic T-Shirt - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/d4a1b75f6c5b87cf2898a9d296e9883f_tn',
      discount: 30,
      isFavorite: false,
      price: 182000,
      soldOutNumbers: '7/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Phông Cộc Tay Nam CEFFYLO Màu Trắng Chất Cotton Phong Cách Basic',
      image: 'https://cf.shopee.vn/file/4b55a1a3653c5093cfd39cef1f868131_tn',
      discount: 30,
      isFavorite: false,
      price: 182000,
      soldOutNumbers: '6/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Polo Nam Cộc Tay Họa Tiết Phối Cổ Phối Tay CF màu Nâu, Chất Liệu Cotton Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/75503e98da0e1ab59bb0b48261b6cd9c_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '6/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Sơ MI Bamboo Kẻ Sọc Ceffylo Chất Liệu Vải Sợi Tre Màu Xám, Độ Co Giãn Nhẹ, Thoáng Mát',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-yg4bybmf5rhvc4_tn',
      discount: 0,
      isFavorite: false,
      price: 420000,
      soldOutNumbers: '6/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Sơ Mi Nam Dài Tay CEFFYLO Dạ Kẻ Caro, Chất Liệu Dạ Mỏng Dáng Slim Ôm NhẹKiểu Dáng Năng Động - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/13e0ab448f3061f641933e3a47c3010e_tn',
      discount: 30,
      isFavorite: false,
      price: 273000,
      soldOutNumbers: '6/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Polo Nam Cộc Tay CEFFYLO Màu Trắng Thêu Minimalist Ở Ngực Form Dáng Slim Thấm Hút Mồ Hôi Tốt',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-kc0summ55rhv93_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '6/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Sơmi Nam Trơn CEFFYLO Màu Xanh Navy Vải Cotton Thấm Hút, Chống Nhăn Form Slimfit',
      image: 'https://cf.shopee.vn/file/53015a6b462fc8f4255b5cd3e1fc35d5_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '5/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo Phông Cộc Tay Nam CEFFYLO Màu Đen Chất Cotton Phong Cách Basic',
      image: 'https://cf.shopee.vn/file/08eed188f4714f12cc644fd7230d7a12_tn',
      discount: 50,
      isFavorite: false,
      price: 130000,
      soldOutNumbers: '5/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Basic Quần Shorts Khaki Ceffylo 5 Màu Cơ Bản, Chất Liệu Kaki Co Giãn Nhẹ, Không Bai Xù',
      image: 'https://cf.shopee.vn/file/09565571e22f3dbe97ca75d8c751c995_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '5/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    },
    {
      title: 'Áo POLO PHỐI CỔ PHỐI LINE CEFFYLO Chất Liệu Cotton Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/eb24941142d8df68137e84f15ca18fd7_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '5/tháng',
      promotionOverlay: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined }
    }
  ];
}
