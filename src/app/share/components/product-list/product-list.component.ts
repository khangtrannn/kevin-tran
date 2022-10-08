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
      title:
        'Áo Polo In Họa Tiết Kẻ Sọc CEFFYLO Chất Liệu Cotton Mềm Mại, Co Giãn 4 Chiều',
      image: 'https://cf.shopee.vn/file/e5edafb9c72aa05d9cc75ad004030c69_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '39/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Quần Khaki Nam Túi Chéo Vải Chinos Chất Liệu Dày Dặn, Co Giãn Cực Mạnh, Giữ Form Tuyệt Đối - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/36cabb5512fc5f868555c07f9d9c8467_tn',
      discount: 0,
      isFavorite: false,
      price: 450000,
      soldOutNumbers: '36/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo Họa Tiết Houndstooth CEFFYLO Chất Liệu Cotton Co Giãn, Form Ôm Nhẹ Tôn Dáng',
      image: 'https://cf.shopee.vn/file/3a7a3a3e245dbb2d9b548c4968db9475_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '27/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo Nam Cộc Tay CEFFYLO Phối Kẻ Sườn Màu Nâu, Xám Chất Cotton Lịch Lãm Sang Trọng',
      image: 'https://cf.shopee.vn/file/a1fca687a1aeb31db0e16060cc6eff68_tn',
      discount: 50,
      isFavorite: false,
      price: 175000,
      soldOutNumbers: '18/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Sơ Mi Nam CEFFYLO Màu Trắng Vải Cotton Thấm Hút, Chống Nhăn Form Slimfit',
      image: 'https://cf.shopee.vn/file/9c7f5f3cba1a098fe048ab8299e539f3_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '17/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title: 'Áo POLO Phối Sọc Ceffylo Chất Liệu Cotton Có Độ Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/f81916b87371614838e4c34d597d2a2c_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '14/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title: 'Áo Polo Nam Phối Nẹp CF Chất Liệu Cotton Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/e4ea42db1ed7fa7f426f21cf5eb8f160_tn',
      discount: 30,
      isFavorite: false,
      price: 273000,
      soldOutNumbers: '12/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Sơ Mi Nam CEFFYLO vải Cotton thấm hút, chống nhăn form Slimfit',
      image: 'https://cf.shopee.vn/file/a2b19389bfb3a745b93a22021dd69be1_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '11/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title: 'Quần tây nam công sở cao cấp form dáng slimfit CEFFYLO',
      image: 'https://cf.shopee.vn/file/7c5a3e233be116364e5824c2428bf48c_tn',
      discount: 0,
      isFavorite: false,
      price: 480000,
      soldOutNumbers: '10/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title: 'Áo POLO Nam Ngực Phối Sọc CF, Chất Liệu Cotton Thoáng Mát',
      image: 'https://cf.shopee.vn/file/849874128c9f1a43debce3aec5370a12_tn',
      discount: 30,
      isFavorite: false,
      price: 273000,
      soldOutNumbers: '10/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title: 'Áo Polo Trơn Phối Bo CEFFYLO Vải Cotton 100% 7 Màu Trẻ Trung',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-zw8ps0dh5rhv8a_tn',
      discount: 30,
      isFavorite: false,
      price: 245000,
      soldOutNumbers: '9/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Sơ Mi Nam Dài Tay Sọc Ceffylo Nam Chất Liệu Đũi Có Độ Co Giãn Nhẹ, Mềm Mịn - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/4b2fd0428c4d29832ec13119004c4d90_tn',
      discount: 30,
      isFavorite: false,
      price: 273000,
      soldOutNumbers: '8/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Phông Cộc Tay Nam CEFFYLO Ngực In Chữ Minimalist Màu Trắng Chất Cotton Thoáng Mát',
      image: 'https://cf.shopee.vn/file/e9d6766cff5cc02ec779c8986e2727de_tn',
      discount: 30,
      isFavorite: false,
      price: 196000,
      soldOutNumbers: '8/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Sơ Mi Nam CEFFYLO Dài Tay Đũi Trơn Basic, Kiểu Dáng Đơn Giản Dễ Kết Hợp - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/407ff4b26f01e0262beba669a784707e_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '8/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo Cộc Tay Nam Phối Túi Màu Be, Chất Liệu Cotton Co Giãn Nhẹ',
      image: 'https://cf.shopee.vn/file/22554446428f690b697c40ba1a43f90d_tn',
      discount: 50,
      isFavorite: false,
      price: 190000,
      soldOutNumbers: '7/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title: 'Quần Tây Nam Cạp Trượt Kiểu Dáng Basic, Đơn Giản Dễ Phối ĐỒ',
      image: 'https://cf.shopee.vn/file/3f132d45538f43b3f1203e42f92d767e_tn',
      discount: 0,
      isFavorite: false,
      price: 580000,
      soldOutNumbers: '7/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/651abc9a9f61b4c68c2e1c7c49415083',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Phông Cộc Tay Nam CEFFYLO Ngực In Chữ Minimalist Màu Đen Chất Cotton Thoáng Mát',
      image: 'https://cf.shopee.vn/file/ea23fbb5d2d0fcbad3c8faa9a3bf6789_tn',
      discount: 30,
      isFavorite: false,
      price: 196000,
      soldOutNumbers: '7/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Phông Nam Trơn Basic CEFFYLO Chất Liệu Cotton Tự Nhiên Mềm Mại Basic T-Shirt - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/d4a1b75f6c5b87cf2898a9d296e9883f_tn',
      discount: 30,
      isFavorite: false,
      price: 182000,
      soldOutNumbers: '7/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Phông Cộc Tay Nam CEFFYLO Màu Trắng Chất Cotton Phong Cách Basic',
      image: 'https://cf.shopee.vn/file/4b55a1a3653c5093cfd39cef1f868131_tn',
      discount: 30,
      isFavorite: false,
      price: 182000,
      soldOutNumbers: '6/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Sơ MI Bamboo Kẻ Sọc Ceffylo Chất Liệu Vải Sợi Tre Màu Xám, Độ Co Giãn Nhẹ, Thoáng Mát',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-yg4bybmf5rhvc4_tn',
      discount: 0,
      isFavorite: false,
      price: 420000,
      soldOutNumbers: '6/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Sơ Mi Nam Dài Tay CEFFYLO Dạ Kẻ Caro, Chất Liệu Dạ Mỏng Dáng Slim Ôm NhẹKiểu Dáng Năng Động - POLIDO Mall',
      image: 'https://cf.shopee.vn/file/13e0ab448f3061f641933e3a47c3010e_tn',
      discount: 30,
      isFavorite: false,
      price: 273000,
      soldOutNumbers: '6/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo Nam Cộc Tay CEFFYLO Màu Trắng Thêu Minimalist Ở Ngực Form Dáng Slim Thấm Hút Mồ Hôi Tốt',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-kc0summ55rhv93_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '6/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Sơmi Nam Trơn CEFFYLO Màu Xanh Navy Vải Cotton Thấm Hút, Chống Nhăn Form Slimfit',
      image: 'https://cf.shopee.vn/file/53015a6b462fc8f4255b5cd3e1fc35d5_tn',
      discount: 0,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '5/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Áo Phông Cộc Tay Nam CEFFYLO Màu Đen Chất Cotton Phong Cách Basic',
      image: 'https://cf.shopee.vn/file/08eed188f4714f12cc644fd7230d7a12_tn',
      discount: 50,
      isFavorite: false,
      price: 130000,
      soldOutNumbers: '5/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
    {
      title:
        'Basic Quần Shorts Khaki Ceffylo 5 Màu Cơ Bản, Chất Liệu Kaki Co Giãn Nhẹ, Không Bai Xù',
      image: 'https://cf.shopee.vn/file/09565571e22f3dbe97ca75d8c751c995_tn',
      discount: 30,
      isFavorite: false,
      price: 266000,
      soldOutNumbers: '5/tháng',
      promotionOverlay:
        'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c',
      promotionBadge: { fullBadge: 'Giảm ₫20k', outlineBadge: undefined },
    },
  ];

  boutique: Product[] = [
    {
      title:
        'Áo polo nam ngắn tay trơn thương hiệu 360 Boutique trắng đen chất liệu cao cấp - POTOL307',
      image: 'https://cf.shopee.vn/file/20806c891297463bc0f1bb025782e623_tn',
      discount: 43,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '2,3k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '43% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo phông trắng đen Unisex 360 BOUTIQUE Basic Tee thun trơn nam nữ ngắn tay form rộng   -  APTOL303',
      image: 'https://cf.shopee.vn/file/d6b88ea180b2beb1352458d17ef7f3d2_tn',
      discount: 31,
      isFavorite: false,
      price: 145000,
      soldOutNumbers: '3,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '31% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu 360 BOUTIQUE thun nam có cổ 3 màu cotton cao cấp - POTOL312',
      image: 'https://cf.shopee.vn/file/13f284a7272668ab1d9c0ae735a09302_tn',
      discount: 23,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '795',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '23% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ phối màu thương hiệu 360 Boutique ngắn tay chất liệu lascote cao cấp - POMTK327',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-fp1bkepymuhv3f_tn',
      discount: 5,
      isFavorite: false,
      price: 346750,
      soldOutNumbers: '3',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POHTK314',
      image: 'https://cf.shopee.vn/file/1fd2cce7eb6618e2669270f41c1cfe55_tn',
      discount: 5,
      isFavorite: false,
      price: 356250,
      soldOutNumbers: '12',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique hai màu xanh đen cotton cao cấp - POHOL313',
      image: 'https://cf.shopee.vn/file/e5351e07d03274d741c293417e17ab33_tn',
      discount: 26,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '291',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '26% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn chất liệu cao cấp chống bai gião thương hiệu 360 Boutique - POHTK320',
      image: 'https://cf.shopee.vn/file/597fd2c7a4a9706a1ba1aa48dda4dbe8_tn',
      discount: 5,
      isFavorite: false,
      price: 303050,
      soldOutNumbers: '35',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn thương hiệu 360 BOUTIQUE chất vải cao cấp chống gião - POTTK306',
      image: 'https://cf.shopee.vn/file/547aec5f933a903b537b690f0fbb5287_tn',
      discount: 5,
      isFavorite: false,
      price: 312550,
      soldOutNumbers: '15',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thêu họa tiết gấu 360 Boutique cotton cao cấp 3 màu basic - POHOL311',
      image: 'https://cf.shopee.vn/file/ed9dd843cbfde1470d3739b437e391ca_tn',
      discount: 20,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '99',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '20% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi nhung tăm Unisex dài tay thương hiệu thời trang 360 Boutique có túi ngực - STDOL317',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-g2tqc2xnuxhv55_tn',
      discount: 20,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '160',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '20% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam cạp cao dáng slimfit thương hiệu 360 Boutique có chun điều chỉnh eo chất liệu cotton cao cấp  - QASOL320',
      image: 'https://cf.shopee.vn/file/d13d2d8e9aa65252003af80127559493_tn',
      discount: 22,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '56',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '22% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK330',
      image: 'https://cf.shopee.vn/file/f573267d1905da56e1be9951bf1d6c58_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        '[GIÁ TRẢI NGHIỆM] Quần âu nam dáng crop trẻ trung thương hiệu 360 Boutique chất liệu cotton lạnh mỏng nhẹ - QACOL003',
      image: 'https://cf.shopee.vn/file/a193741bda1adff8056ea30ec73f65ab_tn',
      discount: 48,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '2,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '48% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique chất liệu sợi ngô cao cấp 3 màu cơ bản - POHTK330',
      image: 'https://cf.shopee.vn/file/a718dd8d1778b57db60db9cfb599a8a6_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn basic 360 Boutique chất liệu cotton cao cấp chống nhăn chống co rút- Made in Viet Nam',
      image: 'https://cf.shopee.vn/file/19daf57e358221958ef8333e4e9802f7_tn',
      discount: 5,
      isFavorite: false,
      price: 304000,
      soldOutNumbers: '29',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POTTK316',
      image: 'https://cf.shopee.vn/file/2e143542734bf5045e5e9fb3af4af3e6_tn',
      discount: 5,
      isFavorite: false,
      price: 346750,
      soldOutNumbers: '216',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK329',
      image: 'https://cf.shopee.vn/file/e1a0c8db594f98d01832847fcc08776d_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title: 'Áo Polo phối màu đen trắng thương hiệu 360 Boutique - POMTK317',
      image: 'https://cf.shopee.vn/file/13d486ef112a0af0999e7ff5549dc78d_tn',
      discount: 5,
      isFavorite: false,
      price: 341050,
      soldOutNumbers: '33',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang thương hiệu 360 BOUTIQUE tay ngắn chất vải Cotton',
      image: 'https://cf.shopee.vn/file/4d8801ac7d5c8442728b2519330a2f8e_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '163',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu sợi ngô sorona cao cấp - POTTK305',
      image: 'https://cf.shopee.vn/file/025f052f5f87030f635af86e18e1bdcf_tn',
      discount: 5,
      isFavorite: false,
      price: 327750,
      soldOutNumbers: '18',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi cổ tàu nam dài tay thương hiệu 360 Boutique chất liệu đũi xước mỏng nhẹ - STDOL306',
      image: 'https://cf.shopee.vn/file/d1e4d91dec0e1aab6f841d821d70a84b_tn',
      discount: 24,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '1,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '24% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo tanktop nam 360 BOUTIQUE ba lỗ thời trang cotton thoáng mát - ABLOL304',
      image: 'https://cf.shopee.vn/file/92ba3d51f9937581908e45c260d51d19_tn',
      discount: 37,
      isFavorite: false,
      price: 125000,
      soldOutNumbers: '1,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '37% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK328',
      image: 'https://cf.shopee.vn/file/0e7def3d7f8bcecfaf7ecbe14542b0c5_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '3',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo phối màu xanh basic thương hiệu thời trang nam 360Boutique - POMTK318',
      image: 'https://cf.shopee.vn/file/83e7258b8dca2a744cde82b0b89fdd36_tn',
      discount: 5,
      isFavorite: false,
      price: 331550,
      soldOutNumbers: '9',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique ngắn tay chất liệu lascote cao cấp - POTTK325',
      image: 'https://cf.shopee.vn/file/2a3a08e794e74baecf426b649863a2b2_tn',
      discount: 5,
      isFavorite: false,
      price: 341050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo khoác jean nam đen dài tay thương hiệu thời trang 360Boutique chất liệu cao cấp  - AKBTK302',
      image: 'https://cf.shopee.vn/file/97afd16acf4a902105bba70f3dbf7f34_tn',
      discount: 5,
      isFavorite: false,
      price: 569050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần kaki nam dáng baggy cao cấp 360 Boutique Made in Vietnam 2 màu basic - QKBOL305',
      image: 'https://cf.shopee.vn/file/f17b674eafad1ad716ee0c30882a7f88_tn',
      discount: 18,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '1,5k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '18% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần short nam cạp chun thương hiệu 360 Boutique vải mềm có dây rút - QSVOL301',
      image: 'https://cf.shopee.vn/file/649c0d320e3619877406ae5d85a92fe7_tn',
      discount: 38,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '1,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '38% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex thêu hình gấu thương hiệu thời trang 360 Boutique phông nam nữ cotton 2 màu cao cấp - APHOL318',
      image: 'https://cf.shopee.vn/file/9721629e482ceaf25c63f5d92c732bec_tn',
      discount: 50,
      isFavorite: false,
      price: 144500,
      soldOutNumbers: '191',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '50% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi nhung tăm dài tay Unisex thương hiệu thời trang 360 Boutique - STDTK306',
      image: 'https://cf.shopee.vn/file/57477c47b3599d78a72392631cb15553_tn',
      discount: 5,
      isFavorite: false,
      price: 426550,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối màu chất vải cao cấp thương hiệu 360 Boutique - POMTK324',
      image: 'https://cf.shopee.vn/file/3c6dfc676d9971699a0578b47806d9c0_tn',
      discount: 5,
      isFavorite: false,
      price: 369550,
      soldOutNumbers: '13',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POHTK309',
      image: 'https://cf.shopee.vn/file/6b15d59aa739eead486b87915351b578_tn',
      discount: 5,
      isFavorite: false,
      price: 365750,
      soldOutNumbers: '16',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi cổ tàu 4 cúc thương hiệu 360 Boutique sơ mi henley chất liệu đũi xước form relax - STNOL310',
      image: 'https://cf.shopee.vn/file/027d88f7b56c90e92b45b6cb4b2ec4ea_tn',
      discount: 36,
      isFavorite: false,
      price: 245000,
      soldOutNumbers: '636',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '36% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang local brand 360 BOUTIQUE chất vải cao cấp - POKTK230',
      image: 'https://cf.shopee.vn/file/83bfe47867e387f444f2b8b7a47fe141_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '76',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần kaki nam thương hiệu 360 BOUTIQUE phong cách trẻ trung chất vải kaki cao cấp',
      image: 'https://cf.shopee.vn/file/1294a066bb89ec587bdb3613f54c9627_tn',
      discount: 5,
      isFavorite: false,
      price: 370500,
      soldOutNumbers: '366',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex 360 Boutique phông nam nữ cotton in hình 2 mặt form rộng - APHOL314',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-z9glgwx6uxhv49_tn',
      discount: 33,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '227',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '33% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi dài tay cổ bẻ thương hiệu 360 Boutique chất liệu cotton -STDTK337',
      image: 'https://cf.shopee.vn/file/f4973636b4cb8abb3a4142e4d3ce25bc_tn',
      discount: 5,
      isFavorite: false,
      price: 379050,
      soldOutNumbers: '2',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang local brand 360 BOUTIQUE chất vải cao cấp - POKTK239',
      image: 'https://cf.shopee.vn/file/2f358a25bf2b6a649136f19930ab4734_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '36',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần jean nam đen dáng slimfit thương hiệu 360 BOUTIQUE quần bò trơn - QJDOL008',
      image: 'https://cf.shopee.vn/file/8ecb6543574a5b1e97a2436cc85410d9_tn',
      discount: 12,
      isFavorite: false,
      price: 395000,
      soldOutNumbers: '582',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '12% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam dáng crop trẻ trung thương hiệu 360 Boutique - QACTK302',
      image: 'https://cf.shopee.vn/file/a46edc8134f1d7143b9a1f4a4f8c17b8_tn',
      discount: 5,
      isFavorite: false,
      price: 445550,
      soldOutNumbers: '10',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần jogger nam chất liệu kaki trẻ trung thương hiệu 360 Boutique quần vải nam cạp chun cao cấp - QGKOL321',
      image: 'https://cf.shopee.vn/file/0dcf1d990ad8483e769896724490b197_tn',
      discount: 8,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '13',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '8% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun kẻ cộc tay thương hiệu 360 BOUTIQUE trẻ trung, chuẩn form -  APKTK320',
      image: 'https://cf.shopee.vn/file/ab7bb0f22aefa4b2b64ca67ee6a5531c_tn',
      discount: 5,
      isFavorite: false,
      price: 228000,
      soldOutNumbers: '51',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex in chữ ngực chất vải cotton cao cấp thương hiệu 360 Boutique - APHTK328',
      image: 'https://cf.shopee.vn/file/e1a2a364bb7adcfc94c655de3890c9a7_tn',
      discount: 5,
      isFavorite: false,
      price: 265050,
      soldOutNumbers: '5',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam thương hiệu thời trang 360 Boutique chất vải Linne cao cấp - QATTK304',
      image: 'https://cf.shopee.vn/file/a8d2b57b4dcbbd6baefbf6d46cec45e0_tn',
      discount: 5,
      isFavorite: false,
      price: 432250,
      soldOutNumbers: '16',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi dài tay thương hiệu thời trang nam 360Boutique màu pastel Hàn Quốc chất vải cotton - STDTK322',
      image: 'https://cf.shopee.vn/file/643c23303df2086dc9ddc42b7aa051c5_tn',
      discount: 5,
      isFavorite: false,
      price: 403750,
      soldOutNumbers: '9',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun dài tay thương hiệu thời trang nam 360 Boutique chất liệu 100% cotton dễ phối đồ- Made in Vietnam',
      image: 'https://cf.shopee.vn/file/805853bb633f654b6944d9f829df12b9_tn',
      discount: 5,
      isFavorite: false,
      price: 274550,
      soldOutNumbers: '830',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POTTK303',
      image: 'https://cf.shopee.vn/file/e0b0fa3d45a5b430ee15f4c2db6cbd6d_tn',
      discount: 5,
      isFavorite: false,
      price: 470250,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam ngắn tay trơn thương hiệu 360 Boutique trắng đen chất liệu cao cấp - POTOL307',
      image: 'https://cf.shopee.vn/file/20806c891297463bc0f1bb025782e623_tn',
      discount: 43,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '2,3k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '43% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo phông trắng đen Unisex 360 BOUTIQUE Basic Tee thun trơn nam nữ ngắn tay form rộng   -  APTOL303',
      image: 'https://cf.shopee.vn/file/d6b88ea180b2beb1352458d17ef7f3d2_tn',
      discount: 31,
      isFavorite: false,
      price: 145000,
      soldOutNumbers: '3,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '31% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu 360 BOUTIQUE thun nam có cổ 3 màu cotton cao cấp - POTOL312',
      image: 'https://cf.shopee.vn/file/13f284a7272668ab1d9c0ae735a09302_tn',
      discount: 23,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '795',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '23% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ phối màu thương hiệu 360 Boutique ngắn tay chất liệu lascote cao cấp - POMTK327',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-fp1bkepymuhv3f_tn',
      discount: 5,
      isFavorite: false,
      price: 346750,
      soldOutNumbers: '3',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POHTK314',
      image: 'https://cf.shopee.vn/file/1fd2cce7eb6618e2669270f41c1cfe55_tn',
      discount: 5,
      isFavorite: false,
      price: 356250,
      soldOutNumbers: '12',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique hai màu xanh đen cotton cao cấp - POHOL313',
      image: 'https://cf.shopee.vn/file/e5351e07d03274d741c293417e17ab33_tn',
      discount: 26,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '291',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '26% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn chất liệu cao cấp chống bai gião thương hiệu 360 Boutique - POHTK320',
      image: 'https://cf.shopee.vn/file/597fd2c7a4a9706a1ba1aa48dda4dbe8_tn',
      discount: 5,
      isFavorite: false,
      price: 303050,
      soldOutNumbers: '35',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn thương hiệu 360 BOUTIQUE chất vải cao cấp chống gião - POTTK306',
      image: 'https://cf.shopee.vn/file/547aec5f933a903b537b690f0fbb5287_tn',
      discount: 5,
      isFavorite: false,
      price: 312550,
      soldOutNumbers: '15',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thêu họa tiết gấu 360 Boutique cotton cao cấp 3 màu basic - POHOL311',
      image: 'https://cf.shopee.vn/file/ed9dd843cbfde1470d3739b437e391ca_tn',
      discount: 20,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '99',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '20% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi nhung tăm Unisex dài tay thương hiệu thời trang 360 Boutique có túi ngực - STDOL317',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-g2tqc2xnuxhv55_tn',
      discount: 20,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '160',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '20% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam cạp cao dáng slimfit thương hiệu 360 Boutique có chun điều chỉnh eo chất liệu cotton cao cấp  - QASOL320',
      image: 'https://cf.shopee.vn/file/d13d2d8e9aa65252003af80127559493_tn',
      discount: 22,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '56',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '22% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK330',
      image: 'https://cf.shopee.vn/file/f573267d1905da56e1be9951bf1d6c58_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        '[GIÁ TRẢI NGHIỆM] Quần âu nam dáng crop trẻ trung thương hiệu 360 Boutique chất liệu cotton lạnh mỏng nhẹ - QACOL003',
      image: 'https://cf.shopee.vn/file/a193741bda1adff8056ea30ec73f65ab_tn',
      discount: 48,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '2,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '48% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique chất liệu sợi ngô cao cấp 3 màu cơ bản - POHTK330',
      image: 'https://cf.shopee.vn/file/a718dd8d1778b57db60db9cfb599a8a6_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn basic 360 Boutique chất liệu cotton cao cấp chống nhăn chống co rút- Made in Viet Nam',
      image: 'https://cf.shopee.vn/file/19daf57e358221958ef8333e4e9802f7_tn',
      discount: 5,
      isFavorite: false,
      price: 304000,
      soldOutNumbers: '29',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POTTK316',
      image: 'https://cf.shopee.vn/file/2e143542734bf5045e5e9fb3af4af3e6_tn',
      discount: 5,
      isFavorite: false,
      price: 346750,
      soldOutNumbers: '216',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK329',
      image: 'https://cf.shopee.vn/file/e1a0c8db594f98d01832847fcc08776d_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title: 'Áo Polo phối màu đen trắng thương hiệu 360 Boutique - POMTK317',
      image: 'https://cf.shopee.vn/file/13d486ef112a0af0999e7ff5549dc78d_tn',
      discount: 5,
      isFavorite: false,
      price: 341050,
      soldOutNumbers: '33',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang thương hiệu 360 BOUTIQUE tay ngắn chất vải Cotton',
      image: 'https://cf.shopee.vn/file/4d8801ac7d5c8442728b2519330a2f8e_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '163',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu sợi ngô sorona cao cấp - POTTK305',
      image: 'https://cf.shopee.vn/file/025f052f5f87030f635af86e18e1bdcf_tn',
      discount: 5,
      isFavorite: false,
      price: 327750,
      soldOutNumbers: '18',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi cổ tàu nam dài tay thương hiệu 360 Boutique chất liệu đũi xước mỏng nhẹ - STDOL306',
      image: 'https://cf.shopee.vn/file/d1e4d91dec0e1aab6f841d821d70a84b_tn',
      discount: 24,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '1,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '24% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo tanktop nam 360 BOUTIQUE ba lỗ thời trang cotton thoáng mát - ABLOL304',
      image: 'https://cf.shopee.vn/file/92ba3d51f9937581908e45c260d51d19_tn',
      discount: 37,
      isFavorite: false,
      price: 125000,
      soldOutNumbers: '1,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '37% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK328',
      image: 'https://cf.shopee.vn/file/0e7def3d7f8bcecfaf7ecbe14542b0c5_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '3',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo phối màu xanh basic thương hiệu thời trang nam 360Boutique - POMTK318',
      image: 'https://cf.shopee.vn/file/83e7258b8dca2a744cde82b0b89fdd36_tn',
      discount: 5,
      isFavorite: false,
      price: 331550,
      soldOutNumbers: '9',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique ngắn tay chất liệu lascote cao cấp - POTTK325',
      image: 'https://cf.shopee.vn/file/2a3a08e794e74baecf426b649863a2b2_tn',
      discount: 5,
      isFavorite: false,
      price: 341050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo khoác jean nam đen dài tay thương hiệu thời trang 360Boutique chất liệu cao cấp  - AKBTK302',
      image: 'https://cf.shopee.vn/file/97afd16acf4a902105bba70f3dbf7f34_tn',
      discount: 5,
      isFavorite: false,
      price: 569050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần kaki nam dáng baggy cao cấp 360 Boutique Made in Vietnam 2 màu basic - QKBOL305',
      image: 'https://cf.shopee.vn/file/f17b674eafad1ad716ee0c30882a7f88_tn',
      discount: 18,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '1,5k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '18% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần short nam cạp chun thương hiệu 360 Boutique vải mềm có dây rút - QSVOL301',
      image: 'https://cf.shopee.vn/file/649c0d320e3619877406ae5d85a92fe7_tn',
      discount: 38,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '1,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '38% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex thêu hình gấu thương hiệu thời trang 360 Boutique phông nam nữ cotton 2 màu cao cấp - APHOL318',
      image: 'https://cf.shopee.vn/file/9721629e482ceaf25c63f5d92c732bec_tn',
      discount: 50,
      isFavorite: false,
      price: 144500,
      soldOutNumbers: '191',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '50% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi nhung tăm dài tay Unisex thương hiệu thời trang 360 Boutique - STDTK306',
      image: 'https://cf.shopee.vn/file/57477c47b3599d78a72392631cb15553_tn',
      discount: 5,
      isFavorite: false,
      price: 426550,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối màu chất vải cao cấp thương hiệu 360 Boutique - POMTK324',
      image: 'https://cf.shopee.vn/file/3c6dfc676d9971699a0578b47806d9c0_tn',
      discount: 5,
      isFavorite: false,
      price: 369550,
      soldOutNumbers: '13',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POHTK309',
      image: 'https://cf.shopee.vn/file/6b15d59aa739eead486b87915351b578_tn',
      discount: 5,
      isFavorite: false,
      price: 365750,
      soldOutNumbers: '16',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi cổ tàu 4 cúc thương hiệu 360 Boutique sơ mi henley chất liệu đũi xước form relax - STNOL310',
      image: 'https://cf.shopee.vn/file/027d88f7b56c90e92b45b6cb4b2ec4ea_tn',
      discount: 36,
      isFavorite: false,
      price: 245000,
      soldOutNumbers: '636',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '36% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang local brand 360 BOUTIQUE chất vải cao cấp - POKTK230',
      image: 'https://cf.shopee.vn/file/83bfe47867e387f444f2b8b7a47fe141_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '76',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần kaki nam thương hiệu 360 BOUTIQUE phong cách trẻ trung chất vải kaki cao cấp',
      image: 'https://cf.shopee.vn/file/1294a066bb89ec587bdb3613f54c9627_tn',
      discount: 5,
      isFavorite: false,
      price: 370500,
      soldOutNumbers: '366',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex 360 Boutique phông nam nữ cotton in hình 2 mặt form rộng - APHOL314',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-z9glgwx6uxhv49_tn',
      discount: 33,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '227',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '33% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi dài tay cổ bẻ thương hiệu 360 Boutique chất liệu cotton -STDTK337',
      image: 'https://cf.shopee.vn/file/f4973636b4cb8abb3a4142e4d3ce25bc_tn',
      discount: 5,
      isFavorite: false,
      price: 379050,
      soldOutNumbers: '2',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang local brand 360 BOUTIQUE chất vải cao cấp - POKTK239',
      image: 'https://cf.shopee.vn/file/2f358a25bf2b6a649136f19930ab4734_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '36',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần jean nam đen dáng slimfit thương hiệu 360 BOUTIQUE quần bò trơn - QJDOL008',
      image: 'https://cf.shopee.vn/file/8ecb6543574a5b1e97a2436cc85410d9_tn',
      discount: 12,
      isFavorite: false,
      price: 395000,
      soldOutNumbers: '582',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '12% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam dáng crop trẻ trung thương hiệu 360 Boutique - QACTK302',
      image: 'https://cf.shopee.vn/file/a46edc8134f1d7143b9a1f4a4f8c17b8_tn',
      discount: 5,
      isFavorite: false,
      price: 445550,
      soldOutNumbers: '10',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần jogger nam chất liệu kaki trẻ trung thương hiệu 360 Boutique quần vải nam cạp chun cao cấp - QGKOL321',
      image: 'https://cf.shopee.vn/file/0dcf1d990ad8483e769896724490b197_tn',
      discount: 8,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '13',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '8% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun kẻ cộc tay thương hiệu 360 BOUTIQUE trẻ trung, chuẩn form -  APKTK320',
      image: 'https://cf.shopee.vn/file/ab7bb0f22aefa4b2b64ca67ee6a5531c_tn',
      discount: 5,
      isFavorite: false,
      price: 228000,
      soldOutNumbers: '51',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex in chữ ngực chất vải cotton cao cấp thương hiệu 360 Boutique - APHTK328',
      image: 'https://cf.shopee.vn/file/e1a2a364bb7adcfc94c655de3890c9a7_tn',
      discount: 5,
      isFavorite: false,
      price: 265050,
      soldOutNumbers: '5',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam thương hiệu thời trang 360 Boutique chất vải Linne cao cấp - QATTK304',
      image: 'https://cf.shopee.vn/file/a8d2b57b4dcbbd6baefbf6d46cec45e0_tn',
      discount: 5,
      isFavorite: false,
      price: 432250,
      soldOutNumbers: '16',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi dài tay thương hiệu thời trang nam 360Boutique màu pastel Hàn Quốc chất vải cotton - STDTK322',
      image: 'https://cf.shopee.vn/file/643c23303df2086dc9ddc42b7aa051c5_tn',
      discount: 5,
      isFavorite: false,
      price: 403750,
      soldOutNumbers: '9',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun dài tay thương hiệu thời trang nam 360 Boutique chất liệu 100% cotton dễ phối đồ- Made in Vietnam',
      image: 'https://cf.shopee.vn/file/805853bb633f654b6944d9f829df12b9_tn',
      discount: 5,
      isFavorite: false,
      price: 274550,
      soldOutNumbers: '830',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POTTK303',
      image: 'https://cf.shopee.vn/file/e0b0fa3d45a5b430ee15f4c2db6cbd6d_tn',
      discount: 5,
      isFavorite: false,
      price: 470250,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam ngắn tay trơn thương hiệu 360 Boutique trắng đen chất liệu cao cấp - POTOL307',
      image: 'https://cf.shopee.vn/file/20806c891297463bc0f1bb025782e623_tn',
      discount: 43,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '2,3k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '43% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo phông trắng đen Unisex 360 BOUTIQUE Basic Tee thun trơn nam nữ ngắn tay form rộng   -  APTOL303',
      image: 'https://cf.shopee.vn/file/d6b88ea180b2beb1352458d17ef7f3d2_tn',
      discount: 31,
      isFavorite: false,
      price: 145000,
      soldOutNumbers: '3,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '31% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu 360 BOUTIQUE thun nam có cổ 3 màu cotton cao cấp - POTOL312',
      image: 'https://cf.shopee.vn/file/13f284a7272668ab1d9c0ae735a09302_tn',
      discount: 23,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '795',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '23% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ phối màu thương hiệu 360 Boutique ngắn tay chất liệu lascote cao cấp - POMTK327',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-fp1bkepymuhv3f_tn',
      discount: 5,
      isFavorite: false,
      price: 346750,
      soldOutNumbers: '3',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POHTK314',
      image: 'https://cf.shopee.vn/file/1fd2cce7eb6618e2669270f41c1cfe55_tn',
      discount: 5,
      isFavorite: false,
      price: 356250,
      soldOutNumbers: '12',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique hai màu xanh đen cotton cao cấp - POHOL313',
      image: 'https://cf.shopee.vn/file/e5351e07d03274d741c293417e17ab33_tn',
      discount: 26,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '291',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '26% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn chất liệu cao cấp chống bai gião thương hiệu 360 Boutique - POHTK320',
      image: 'https://cf.shopee.vn/file/597fd2c7a4a9706a1ba1aa48dda4dbe8_tn',
      discount: 5,
      isFavorite: false,
      price: 303050,
      soldOutNumbers: '35',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn thương hiệu 360 BOUTIQUE chất vải cao cấp chống gião - POTTK306',
      image: 'https://cf.shopee.vn/file/547aec5f933a903b537b690f0fbb5287_tn',
      discount: 5,
      isFavorite: false,
      price: 312550,
      soldOutNumbers: '15',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thêu họa tiết gấu 360 Boutique cotton cao cấp 3 màu basic - POHOL311',
      image: 'https://cf.shopee.vn/file/ed9dd843cbfde1470d3739b437e391ca_tn',
      discount: 20,
      isFavorite: false,
      price: 265000,
      soldOutNumbers: '99',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '20% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi nhung tăm Unisex dài tay thương hiệu thời trang 360 Boutique có túi ngực - STDOL317',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-g2tqc2xnuxhv55_tn',
      discount: 20,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '160',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '20% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam cạp cao dáng slimfit thương hiệu 360 Boutique có chun điều chỉnh eo chất liệu cotton cao cấp  - QASOL320',
      image: 'https://cf.shopee.vn/file/d13d2d8e9aa65252003af80127559493_tn',
      discount: 22,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '56',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '22% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK330',
      image: 'https://cf.shopee.vn/file/f573267d1905da56e1be9951bf1d6c58_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        '[GIÁ TRẢI NGHIỆM] Quần âu nam dáng crop trẻ trung thương hiệu 360 Boutique chất liệu cotton lạnh mỏng nhẹ - QACOL003',
      image: 'https://cf.shopee.vn/file/a193741bda1adff8056ea30ec73f65ab_tn',
      discount: 48,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '2,4k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '48% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique chất liệu sợi ngô cao cấp 3 màu cơ bản - POHTK330',
      image: 'https://cf.shopee.vn/file/a718dd8d1778b57db60db9cfb599a8a6_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo trơn basic 360 Boutique chất liệu cotton cao cấp chống nhăn chống co rút- Made in Viet Nam',
      image: 'https://cf.shopee.vn/file/19daf57e358221958ef8333e4e9802f7_tn',
      discount: 5,
      isFavorite: false,
      price: 304000,
      soldOutNumbers: '29',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POTTK316',
      image: 'https://cf.shopee.vn/file/2e143542734bf5045e5e9fb3af4af3e6_tn',
      discount: 5,
      isFavorite: false,
      price: 346750,
      soldOutNumbers: '216',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK329',
      image: 'https://cf.shopee.vn/file/e1a0c8db594f98d01832847fcc08776d_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title: 'Áo Polo phối màu đen trắng thương hiệu 360 Boutique - POMTK317',
      image: 'https://cf.shopee.vn/file/13d486ef112a0af0999e7ff5549dc78d_tn',
      discount: 5,
      isFavorite: false,
      price: 341050,
      soldOutNumbers: '33',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang thương hiệu 360 BOUTIQUE tay ngắn chất vải Cotton',
      image: 'https://cf.shopee.vn/file/4d8801ac7d5c8442728b2519330a2f8e_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '163',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu sợi ngô sorona cao cấp - POTTK305',
      image: 'https://cf.shopee.vn/file/025f052f5f87030f635af86e18e1bdcf_tn',
      discount: 5,
      isFavorite: false,
      price: 327750,
      soldOutNumbers: '18',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi cổ tàu nam dài tay thương hiệu 360 Boutique chất liệu đũi xước mỏng nhẹ - STDOL306',
      image: 'https://cf.shopee.vn/file/d1e4d91dec0e1aab6f841d821d70a84b_tn',
      discount: 24,
      isFavorite: false,
      price: 320000,
      soldOutNumbers: '1,6k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '24% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo tanktop nam 360 BOUTIQUE ba lỗ thời trang cotton thoáng mát - ABLOL304',
      image: 'https://cf.shopee.vn/file/92ba3d51f9937581908e45c260d51d19_tn',
      discount: 37,
      isFavorite: false,
      price: 125000,
      soldOutNumbers: '1,7k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '37% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam thương hiệu thời trang nam 360 BOUTIQUE chất liệu cao cấp - POHTK328',
      image: 'https://cf.shopee.vn/file/0e7def3d7f8bcecfaf7ecbe14542b0c5_tn',
      discount: 5,
      isFavorite: false,
      price: 455050,
      soldOutNumbers: '3',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo phối màu xanh basic thương hiệu thời trang nam 360Boutique - POMTK318',
      image: 'https://cf.shopee.vn/file/83e7258b8dca2a744cde82b0b89fdd36_tn',
      discount: 5,
      isFavorite: false,
      price: 331550,
      soldOutNumbers: '9',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam cổ bẻ thương hiệu 360 Boutique ngắn tay chất liệu lascote cao cấp - POTTK325',
      image: 'https://cf.shopee.vn/file/2a3a08e794e74baecf426b649863a2b2_tn',
      discount: 5,
      isFavorite: false,
      price: 341050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo khoác jean nam đen dài tay thương hiệu thời trang 360Boutique chất liệu cao cấp  - AKBTK302',
      image: 'https://cf.shopee.vn/file/97afd16acf4a902105bba70f3dbf7f34_tn',
      discount: 5,
      isFavorite: false,
      price: 569050,
      soldOutNumbers: '',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần kaki nam dáng baggy cao cấp 360 Boutique Made in Vietnam 2 màu basic - QKBOL305',
      image: 'https://cf.shopee.vn/file/f17b674eafad1ad716ee0c30882a7f88_tn',
      discount: 18,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '1,5k',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '18% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần short nam cạp chun thương hiệu 360 Boutique vải mềm có dây rút - QSVOL301',
      image: 'https://cf.shopee.vn/file/649c0d320e3619877406ae5d85a92fe7_tn',
      discount: 38,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '1,2k',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '38% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex thêu hình gấu thương hiệu thời trang 360 Boutique phông nam nữ cotton 2 màu cao cấp - APHOL318',
      image: 'https://cf.shopee.vn/file/9721629e482ceaf25c63f5d92c732bec_tn',
      discount: 50,
      isFavorite: false,
      price: 144500,
      soldOutNumbers: '191',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '50% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi nhung tăm dài tay Unisex thương hiệu thời trang 360 Boutique - STDTK306',
      image: 'https://cf.shopee.vn/file/57477c47b3599d78a72392631cb15553_tn',
      discount: 5,
      isFavorite: false,
      price: 426550,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo Polo nam phối màu chất vải cao cấp thương hiệu 360 Boutique - POMTK324',
      image: 'https://cf.shopee.vn/file/3c6dfc676d9971699a0578b47806d9c0_tn',
      discount: 5,
      isFavorite: false,
      price: 369550,
      soldOutNumbers: '13',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POHTK309',
      image: 'https://cf.shopee.vn/file/6b15d59aa739eead486b87915351b578_tn',
      discount: 5,
      isFavorite: false,
      price: 365750,
      soldOutNumbers: '16',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi cổ tàu 4 cúc thương hiệu 360 Boutique sơ mi henley chất liệu đũi xước form relax - STNOL310',
      image: 'https://cf.shopee.vn/file/027d88f7b56c90e92b45b6cb4b2ec4ea_tn',
      discount: 36,
      isFavorite: false,
      price: 245000,
      soldOutNumbers: '636',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '36% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang local brand 360 BOUTIQUE chất vải cao cấp - POKTK230',
      image: 'https://cf.shopee.vn/file/83bfe47867e387f444f2b8b7a47fe141_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '76',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần kaki nam thương hiệu 360 BOUTIQUE phong cách trẻ trung chất vải kaki cao cấp',
      image: 'https://cf.shopee.vn/file/1294a066bb89ec587bdb3613f54c9627_tn',
      discount: 5,
      isFavorite: false,
      price: 370500,
      soldOutNumbers: '366',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex 360 Boutique phông nam nữ cotton in hình 2 mặt form rộng - APHOL314',
      image: 'https://cf.shopee.vn/file/sg-11134201-22090-z9glgwx6uxhv49_tn',
      discount: 33,
      isFavorite: false,
      price: 199000,
      soldOutNumbers: '227',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '33% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi dài tay cổ bẻ thương hiệu 360 Boutique chất liệu cotton -STDTK337',
      image: 'https://cf.shopee.vn/file/f4973636b4cb8abb3a4142e4d3ce25bc_tn',
      discount: 5,
      isFavorite: false,
      price: 379050,
      soldOutNumbers: '2',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam kẻ ngang local brand 360 BOUTIQUE chất vải cao cấp - POKTK239',
      image: 'https://cf.shopee.vn/file/2f358a25bf2b6a649136f19930ab4734_tn',
      discount: 10,
      isFavorite: false,
      price: 306000,
      soldOutNumbers: '36',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '10% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần jean nam đen dáng slimfit thương hiệu 360 BOUTIQUE quần bò trơn - QJDOL008',
      image: 'https://cf.shopee.vn/file/8ecb6543574a5b1e97a2436cc85410d9_tn',
      discount: 12,
      isFavorite: false,
      price: 395000,
      soldOutNumbers: '582',
      promotionOverlay:
        'https://cf.shopee.vn/file/04d67bfffa51ade9a896ed38df239c0d',
      promotionBadge: { fullBadge: '12% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam dáng crop trẻ trung thương hiệu 360 Boutique - QACTK302',
      image: 'https://cf.shopee.vn/file/a46edc8134f1d7143b9a1f4a4f8c17b8_tn',
      discount: 5,
      isFavorite: false,
      price: 445550,
      soldOutNumbers: '10',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần jogger nam chất liệu kaki trẻ trung thương hiệu 360 Boutique quần vải nam cạp chun cao cấp - QGKOL321',
      image: 'https://cf.shopee.vn/file/0dcf1d990ad8483e769896724490b197_tn',
      discount: 8,
      isFavorite: false,
      price: 350000,
      soldOutNumbers: '13',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '8% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun kẻ cộc tay thương hiệu 360 BOUTIQUE trẻ trung, chuẩn form -  APKTK320',
      image: 'https://cf.shopee.vn/file/ab7bb0f22aefa4b2b64ca67ee6a5531c_tn',
      discount: 5,
      isFavorite: false,
      price: 228000,
      soldOutNumbers: '51',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun Unisex in chữ ngực chất vải cotton cao cấp thương hiệu 360 Boutique - APHTK328',
      image: 'https://cf.shopee.vn/file/e1a2a364bb7adcfc94c655de3890c9a7_tn',
      discount: 5,
      isFavorite: false,
      price: 265050,
      soldOutNumbers: '5',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Quần âu nam thương hiệu thời trang 360 Boutique chất vải Linne cao cấp - QATTK304',
      image: 'https://cf.shopee.vn/file/a8d2b57b4dcbbd6baefbf6d46cec45e0_tn',
      discount: 5,
      isFavorite: false,
      price: 432250,
      soldOutNumbers: '16',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo sơ mi dài tay thương hiệu thời trang nam 360Boutique màu pastel Hàn Quốc chất vải cotton - STDTK322',
      image: 'https://cf.shopee.vn/file/643c23303df2086dc9ddc42b7aa051c5_tn',
      discount: 5,
      isFavorite: false,
      price: 403750,
      soldOutNumbers: '9',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo thun dài tay thương hiệu thời trang nam 360 Boutique chất liệu 100% cotton dễ phối đồ- Made in Vietnam',
      image: 'https://cf.shopee.vn/file/805853bb633f654b6944d9f829df12b9_tn',
      discount: 5,
      isFavorite: false,
      price: 274550,
      soldOutNumbers: '830',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
    {
      title:
        'Áo polo nam local brand 360 BOUTIQUE chất liệu cao cấp - POTTK303',
      image: 'https://cf.shopee.vn/file/e0b0fa3d45a5b430ee15f4c2db6cbd6d_tn',
      discount: 5,
      isFavorite: false,
      price: 470250,
      soldOutNumbers: '1',
      promotionOverlay:
        'https://cf.shopee.vn/file/ec29770f7d45ea2c21902a9ac953384c',
      promotionBadge: { fullBadge: '5% giảm', outlineBadge: undefined },
    },
  ];
}
