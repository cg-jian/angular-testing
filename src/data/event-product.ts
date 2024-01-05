import { ProductType } from './product-type.enum';

export type EventProduct = {
  type: ProductType.EVENT;
  title: string;
};
