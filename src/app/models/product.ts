export class Product {
  id!: string;
  title!: string;
  discount!: number;
  isFavorite!: boolean;
  price!: number;
  soldOutNumbers!: string;
  image!: string;
  promotionOverlay: string | undefined;
  promotionBadge!: {
    fullBadge?: string | undefined,
    outlineBadge?: string | undefined,
  }

  getDiscountPrice(): number {
    return this.discount ? this.price * this.discount / 100 : this.price;
  }
}
