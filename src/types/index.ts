export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'games' | 'consoles' | 'accessories' | 'merchandise';
  rating: number;
  reviews: number;
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}