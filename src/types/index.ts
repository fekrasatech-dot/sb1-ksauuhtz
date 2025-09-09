export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'prebuilt' | 'components' | 'peripherals' | 'accessories';
  rating: number;
  reviews: number;
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}