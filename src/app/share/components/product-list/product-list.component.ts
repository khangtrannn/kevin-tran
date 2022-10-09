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
      id: '/hiepg85IXPZvLCj',
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
      id: 'equxC+UHd+iv5olS',
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
      id: 'FE2+QMSNLPr7O+Wd',
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
      id: 'jFf3rW0yywWULVRL',
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
      id: '9t4f1THzwRVSWxJC',
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
      id: 'JG7pLolJnfCxE7q/',
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
      id: 'pHLiVLBi3XndppjB',
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
      id: 'ZBQqJyQfnOC/GoGf',
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
      id: 'e1qT+dEZNlTqzwDH',
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
      id: 'xoOAFBCDRvaujW0d',
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
      id: 'GgAp30uTOjIim1qG',
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
      id: 'n+942hksXaie9tcl',
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
      id: 'PqBSHAXKjaTrYw7z',
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
      id: 'NlobRQt/D4VRe9ZE',
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
      id: 'sSnH/VdWeH+ShqrX',
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
      id: 'o5deQk0KvoviD2Rh',
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
      id: 'dc3GFFzHkaZH8TrP',
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
      id: 'Sy47zCM0hLLHlNdj',
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
      id: 'f5ZcnyWv8D58r01H',
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
      id: 'MvSVRbjpd/S0XOZZ',
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
      id: 'TSZ/L5tIw7BTmquZ',
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
      id: 'U/T2+lsD/zDLGe4l',
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
      id: 'uD6Jy1KHwBId7kn4',
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
      id: 'foAS5CtHsVS3Dxhd',
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
      id: 'FL23DKN6HNdzd9en',
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
      id: 'ommc7t33VBLItmpg',
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
      id: 'U3uhHHuO0UNZix1r',
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
      id: 'TU5bgBKf/s/3cUWD',
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
      id: '3+QsvVDjc0TByK7R',
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
      id: 'HiZVDpv2XKxpZdqE',
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
      id: 'izHYuo6bjZwOTlCZ',
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
      id: 'yy4bSSMR6nrulIrV',
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
      id: '0GZfgwQESBgznRsI',
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
      id: 'LyEheg0VLVssnNJJ',
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
      id: '7nY2Uw8Ir6EPSpUa',
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
      id: '991Bu7hUPUfL0F36',
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
      id: 'lI4QQck1UgqYB395',
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
      id: '5cXMfJ8pKdt47tQk',
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
      id: '6cBjvIksdFjUjOFP',
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
      id: 'E6FqrcmX5MPg5rev',
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
      id: 'P9ExRQR1nkSBjh3J',
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
      id: 'hH/E3G7WXS+DHvHa',
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
      id: 'y86j+IRhJslKMRSx',
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
      id: '2LzyHb+h2UDf9U6X',
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
      id: 'e772nxag7NMptbaz',
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
      id: 'yJ0nfZpLozNRXfpM',
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
      id: '6XIPPYJjlVf1UYDU',
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
      id: 'OrVaHKZCH/PDhjTf',
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
      id: 'x1S1RmboALCGBzy1',
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
      id: 'L/TA7YfI+XYKscj9',
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
      id: 'N29+HcjI8n5wOpA+',
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
      id: '0hf1wA/91w69v86X',
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
      id: 'i1eWm2iD0ikYwIRI',
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
      id: 'xb+n+H5oUJZ4SAp4',
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
      id: 'pJ678q7NfRCtZENa',
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
      id: 'hxjmuJXRVJ2Daqiu',
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
      id: 'Z0sBslE8vGmMV6eR',
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
      id: 'taIvRLba5vybybEr',
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
      id: '0O0Ry6Bot2Mf9Vt9',
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
      id: 'lrlMkAFmsDt+jUgX',
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
      id: 'FF0ZGMdbtFsvRoyP',
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
      id: 'dXJxPmI1djZL9R0t',
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
      id: 'CKfgT/5pqXv1pkT1',
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
      id: 'Ar5WrW93YiudjtsH',
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
      id: '9oTRMAuMjLR+2SeD',
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
      id: 'ffzqJoHbudginHo5',
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
      id: 'xvv69LOl7vIN+FO4',
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
      promotionBadge: { fullBadge: '43% giảm' },
      id: 'MrnRofaph1eL2Arz',
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
      promotionBadge: { fullBadge: '31% giảm' },
      id: 'lDJfK5CSyTeM4hmp',
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
      promotionBadge: { fullBadge: '23% giảm' },
      id: 'BlgIvwHs83s5E3Om',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'yRES+GodIe1GgZUK',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'EBN5LnDRGT+iVd8w',
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
      promotionBadge: { fullBadge: '26% giảm' },
      id: 'D53sVeSYW0/sYHPt',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'kNP3B8UDzU+Q5HSG',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'SlUa1nP8cHU6HKNo',
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
      promotionBadge: { fullBadge: '20% giảm' },
      id: '3hD5u2CHViR31CJF',
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
      promotionBadge: { fullBadge: '20% giảm' },
      id: 'cwE44emIuFZu4U5O',
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
      promotionBadge: { fullBadge: '22% giảm' },
      id: 'kxg+Les9h6bnByPN',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'X/MpHIiOvY6YFFjJ',
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
      promotionBadge: { fullBadge: '48% giảm' },
      id: 'QNrEFFvx+gULftsx',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'IijRBH6Brb6aEkhC',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'mFlXgW0718bC1TjA',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'cUfO7d9TbPTbL/tz',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'W4olzvQwGIYnvxom',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'MBkJvRvHA26UTWre',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: 'DpzhKDUIBaqj7nr5',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'cmUWPzdz02SdKUjt',
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
      promotionBadge: { fullBadge: '24% giảm' },
      id: 'WD/RPRLHAr7O+ANd',
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
      promotionBadge: { fullBadge: '37% giảm' },
      id: 'Sy/EsAi5Zcpk84L8',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '3MvbqmGtzBO6RpJ6',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'zCen54KUFQlY7M/i',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'I4/onCgLYnnnt6H8',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'QcQ90SVmx8wxGH+g',
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
      promotionBadge: { fullBadge: '18% giảm' },
      id: 'Cm86Z8jFu3xZPX0l',
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
      promotionBadge: { fullBadge: '38% giảm' },
      id: 'XLUjYwx5ZrO4EI80',
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
      promotionBadge: { fullBadge: '50% giảm' },
      id: 'PYaS0Z+JbzafMr+0',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'Dni1/31iNyKYNaOh',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '7Lkxk+rZ0jkgZY6Z',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'oUOxJFbiSrnMAaBh',
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
      promotionBadge: { fullBadge: '36% giảm' },
      id: '/G49VC6X/milh9ge',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: 'YZoNmPwRd3Sivb26',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'fYl2SAhYY1BBH2aX',
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
      promotionBadge: { fullBadge: '33% giảm' },
      id: 'fWBKzNAY4Z0eJjgY',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'kruKVAnqS4JuM/vZ',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: 'wryZy3N6jPsSOht1',
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
      promotionBadge: { fullBadge: '12% giảm' },
      id: 'dBXPJk/KQmUPgYBa',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'Z3KLLcTJjeiVOsFn',
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
      promotionBadge: { fullBadge: '8% giảm' },
      id: 'k/nV3V/vMyRzcc7J',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '1ovlf3E4CVVwqJQ7',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'ILCWVEAEfvyEAmCF',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'CuxmJ6UiO9sY2B2h',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'eJlCbZ7HeshMOaV+',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'SJe8oOVedQd6Ymdv',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'yqcCrUSRYFK8uhRE',
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
      promotionBadge: { fullBadge: '43% giảm' },
      id: '5m+grm8p7p1Gn6pa',
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
      promotionBadge: { fullBadge: '31% giảm' },
      id: 'wGQH8No7DbpEFbXd',
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
      promotionBadge: { fullBadge: '23% giảm' },
      id: 'ttzdRBx08x+686Nb',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'wWFx97tbfgPwzfzA',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'eN3dwflyaDco2uKT',
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
      promotionBadge: { fullBadge: '26% giảm' },
      id: 'e4KYU36M63F8pzlA',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'x8Gjsafiyk8hK73v',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '7h6BGgLlPavjnYFp',
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
      promotionBadge: { fullBadge: '20% giảm' },
      id: 'PPJeFGdCQ3sb4mNa',
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
      promotionBadge: { fullBadge: '20% giảm' },
      id: 'k/3Dy4ado8UAOyMC',
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
      promotionBadge: { fullBadge: '22% giảm' },
      id: 'v2wLqwYTTiwWsNku',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'a3wwlrvQ785v4Lbq',
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
      promotionBadge: { fullBadge: '48% giảm' },
      id: 'UrqbD5nIWAwpxxEy',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'jmimH5bFsyU6kZjZ',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'jKPA04iko0SMwrMR',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'I8q0MIiFN6Z661eb',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'fogGA/euZ525epmv',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'mEc0AuTQo4cvPYKu',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: 'gQAl3rAgyKfWmo74',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'WTk+0UNceU3cyK5x',
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
      promotionBadge: { fullBadge: '24% giảm' },
      id: 'DJvVP0L1h4r/Y9SE',
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
      promotionBadge: { fullBadge: '37% giảm' },
      id: 'sjonqcXsZvawwbt1',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'lub2YJfvryAw4Dpx',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'DiwRcXpdpjF1He4Q',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'hJ6rtJfaaGHp2D3S',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'CUNIyPC/5mYkXxyL',
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
      promotionBadge: { fullBadge: '18% giảm' },
      id: 'HbZppOVpZ/ZYM0WO',
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
      promotionBadge: { fullBadge: '38% giảm' },
      id: 'BkejkMtufRB93gdN',
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
      promotionBadge: { fullBadge: '50% giảm' },
      id: 'RV6/1diA217DISaP',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'KcmOoz4uQ/uMjPb+',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '7XRaQvQ0D7G0km32',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'wdKABqZejCbyBsYp',
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
      promotionBadge: { fullBadge: '36% giảm' },
      id: 'CcZ1Jnvh/x8r65vg',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: '21TksBqMG/BmZY3g',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'gBV/1v20msmbBOZM',
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
      promotionBadge: { fullBadge: '33% giảm' },
      id: 'ONB8mfWHIqN+aqCq',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'lHlEBrOB53GkbB6P',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: 'W7fPK/de8DwjQ5+g',
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
      promotionBadge: { fullBadge: '12% giảm' },
      id: 'rMTC6NEt8rVatgFj',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'KFA+gi8tPXajK5mZ',
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
      promotionBadge: { fullBadge: '8% giảm' },
      id: '6GHMlzE33w/C9E0X',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'NimH6HmwS5X392Ic',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '/8uuyhFmlOh1KNRw',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'rBiUSx/HU3jgnhvw',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'fyGfnSvk2ZZqF0Dh',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '6hZ81vU5RuYl+ITu',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'OttMMCesHkRo7/0+',
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
      promotionBadge: { fullBadge: '43% giảm' },
      id: 'q+2jZMBqUnFY/5Qk',
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
      promotionBadge: { fullBadge: '31% giảm' },
      id: 'g3nsOqk9lBV69mmj',
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
      promotionBadge: { fullBadge: '23% giảm' },
      id: 'fCLFFGVWOLBnlqok',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '2sojmVlEPYJyb6A1',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '8WT2WEHN7epvVsdx',
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
      promotionBadge: { fullBadge: '26% giảm' },
      id: '8UF7kBRY/fR7PHz8',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'DGSPpmjvI5w3C28j',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '2ZbAsZU56Oz3SHgi',
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
      promotionBadge: { fullBadge: '20% giảm' },
      id: '009ZHCe0zApWCO09',
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
      promotionBadge: { fullBadge: '20% giảm' },
      id: 'nH6noJKXF1fkPOx+',
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
      promotionBadge: { fullBadge: '22% giảm' },
      id: 'JAtQZ5L2W4EEiVDS',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'SL+dHbi7Tf9wN7E3',
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
      promotionBadge: { fullBadge: '48% giảm' },
      id: 'BZKfx3Izm7NcKHgZ',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: '80f4NoCZEWslIdIL',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'ipjFD4Y9mQwLaylh',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'xmDcxDq0lVaBUjyn',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'JY7w9lHLCMa71gJN',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'V+chIQbPW8BWMWvq',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: 'Dv+m4r2i6H4+bY+H',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'JBGsQWiFO37Ku1wb',
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
      promotionBadge: { fullBadge: '24% giảm' },
      id: 'oKW2Qk9Lk8X1G0xj',
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
      promotionBadge: { fullBadge: '37% giảm' },
      id: 'uKRx20+4Xf37mZ6y',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'mO3/AOmu1FBiDhs/',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'aOnxTE66tz90kAvt',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'gboaq8oIBwcwuVM9',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'HRPx5GvLDHYx7zPT',
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
      promotionBadge: { fullBadge: '18% giảm' },
      id: 'hsJERATo9jbD8kKU',
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
      promotionBadge: { fullBadge: '38% giảm' },
      id: '6lJ5cxnxJCwKjbHQ',
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
      promotionBadge: { fullBadge: '50% giảm' },
      id: 'i5MC+kXm7n8pnGAw',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'Py58bqrZ6C8qhDfA',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'wIKKwQIjVXuHsh5S',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'JgMF53TKLeWUBfp5',
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
      promotionBadge: { fullBadge: '36% giảm' },
      id: 'JfBylfa8LFu/k4CG',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: 'prGPd/dQhwQqr5uU',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'cQZ8VV04Mz0FCQ2l',
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
      promotionBadge: { fullBadge: '33% giảm' },
      id: 'PX/VfgN/YkWNHHIT',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'xygaBEc/m/SGy3GV',
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
      promotionBadge: { fullBadge: '10% giảm' },
      id: 'GTucjIzSqO+NganQ',
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
      promotionBadge: { fullBadge: '12% giảm' },
      id: 'xh8sSCdKxk7EURE/',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'kEItwIdpDhoHRA2G',
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
      promotionBadge: { fullBadge: '8% giảm' },
      id: '2T9XtGos5wAc0cVw',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'GhLGSTpBauWcf/oa',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'gmXcX0kiJVc7p2fC',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'qX9HaDDL02awFYXC',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'Tw5lVPPB4yfj2bqW',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'Tm4hkm+7JdvUVybS',
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
      promotionBadge: { fullBadge: '5% giảm' },
      id: 'F4JPscFWGQNxG28U',
    },
  ];
}
