import { EventProduct } from './event-product';
import { PhysicalProduct } from './physical-product';
import { ProductType } from './product-type.enum';

type Product = PhysicalProduct | EventProduct;
export const PRODUCTS: Product[] = [
  {
    title: 'Event 1',
    type: ProductType.EVENT,
  },
  {
    title: 'Physical 1',
    type: ProductType.PHYSICAL,
  },
];
