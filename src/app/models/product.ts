export class Product {
  id!: string;
  title!: string;
  discount!: number;
  isFavorite!: boolean;
  price!: number;
  soldOutNumbers!: string;
  image!: string;
  slug!: string;
  promotionOverlay: string | undefined;
  promotionBadge!: {
    fullBadge?: string | undefined;
    outlineBadge?: string | undefined;
  };

  get thumbnail(): string {
    return `${this.image}_tn`;
  }

  getDiscountPrice(): number {
    return this.discount ? (this.price * this.discount) / 100 : this.price;
  }
}
