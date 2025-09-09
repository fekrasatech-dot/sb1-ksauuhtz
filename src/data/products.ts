import { Product } from '../types';

export const products: Product[] = [
  // Games
  {
    id: 1,
    name: "Cyberpunk 2077 Ultimate Edition",
    price: 59.99,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    category: "games",
    rating: 4.8,
    reviews: 2543,
    description: "Experience Night City like never before with enhanced graphics and gameplay.",
    features: ["4K Ultra HD", "Ray Tracing", "Enhanced Audio", "All DLCs Included"]
  },
  {
    id: 2,
    name: "The Elder Scrolls VI",
    price: 69.99,
    image: "https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg",
    category: "games",
    rating: 4.9,
    reviews: 1876,
    description: "The highly anticipated next chapter in the Elder Scrolls saga.",
    features: ["Open World", "Character Creation", "Mod Support", "Epic Storyline"]
  },
  {
    id: 3,
    name: "Call of Duty: Modern Warfare III",
    price: 54.99,
    image: "https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg",
    category: "games",
    rating: 4.6,
    reviews: 3421,
    description: "The most advanced Call of Duty experience with cutting-edge multiplayer.",
    features: ["Multiplayer", "Campaign Mode", "Battle Royale", "Cross-Platform"]
  },
  
  // Consoles
  {
    id: 4,
    name: "PlayStation 5 Pro",
    price: 699.99,
    image: "https://images.pexels.com/photos/14708159/pexels-photo-14708159.jpeg",
    category: "consoles",
    rating: 4.9,
    reviews: 967,
    description: "The most powerful PlayStation console ever created.",
    features: ["8K Gaming", "2TB Storage", "Enhanced GPU", "Backwards Compatible"]
  },
  {
    id: 5,
    name: "Xbox Series X",
    price: 499.99,
    image: "https://images.pexels.com/photos/4009372/pexels-photo-4009372.jpeg",
    category: "consoles",
    rating: 4.8,
    reviews: 1234,
    description: "Experience next-gen gaming with 4K resolution and lightning-fast loading.",
    features: ["4K Gaming", "Quick Resume", "Game Pass", "Smart Delivery"]
  },
  {
    id: 6,
    name: "Nintendo Switch OLED",
    price: 349.99,
    image: "https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg",
    category: "consoles",
    rating: 4.7,
    reviews: 2876,
    description: "Portable gaming with a vibrant OLED display.",
    features: ["OLED Screen", "Portable", "64GB Storage", "Enhanced Audio"]
  },

  // Accessories
  {
    id: 7,
    name: "Razer DeathAdder V3 Pro",
    price: 129.99,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
    category: "accessories",
    rating: 4.8,
    reviews: 1543,
    description: "Professional gaming mouse with ultra-precise tracking.",
    features: ["30K DPI Sensor", "Wireless", "90-hour Battery", "Ergonomic Design"]
  },
  {
    id: 8,
    name: "SteelSeries Arctis 7P+",
    price: 169.99,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    category: "accessories",
    rating: 4.7,
    reviews: 987,
    description: "Premium wireless gaming headset with crystal-clear audio.",
    features: ["Wireless", "24-hour Battery", "Noise Cancelling", "Multi-Platform"]
  },
  {
    id: 9,
    name: "Corsair K70 RGB MK.2",
    price: 189.99,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    category: "accessories",
    rating: 4.9,
    reviews: 2109,
    description: "Mechanical gaming keyboard with per-key RGB lighting.",
    features: ["Cherry MX Switches", "RGB Lighting", "Aluminum Frame", "Dedicated Media Keys"]
  },

  // Merchandise
  {
    id: 10,
    name: "Cyberpunk 2077 Samurai Jacket",
    price: 89.99,
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    category: "merchandise",
    rating: 4.6,
    reviews: 543,
    description: "Official replica jacket inspired by the iconic game.",
    features: ["Premium Materials", "Authentic Design", "Limited Edition", "All Sizes Available"]
  },
  {
    id: 11,
    name: "Master Chief Collectible Figure",
    price: 149.99,
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg",
    category: "merchandise",
    rating: 4.8,
    reviews: 876,
    description: "Highly detailed collectible figure from the Halo universe.",
    features: ["12-inch Scale", "Articulated", "Premium Paint", "Display Stand Included"]
  },
  {
    id: 12,
    name: "Gaming RGB Mouse Pad XXL",
    price: 49.99,
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    category: "merchandise",
    rating: 4.5,
    reviews: 1654,
    description: "Extra-large RGB mouse pad for immersive gaming setup.",
    features: ["RGB Lighting", "XXL Size", "Non-slip Base", "Water Resistant"]
  }
];