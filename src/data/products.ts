import { Product } from '../types';

export const products: Product[] = [
  // Pre-built PCs
  {
    id: 1,
    name: "K-O Elite Gaming Workstation",
    price: 2499.99,
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    category: "prebuilt",
    rating: 4.9,
    reviews: 234,
    description: "Ultimate performance workstation with RTX 4080 and Intel i9 processor for gaming and content creation.",
    features: ["Intel i9-13900K", "RTX 4080 16GB", "32GB DDR5 RAM", "1TB NVMe SSD", "Custom RGB Lighting"]
  },
  {
    id: 2,
    name: "K-O Pro Creator Build",
    price: 1899.99,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    category: "prebuilt",
    rating: 4.8,
    reviews: 187,
    description: "Perfect balance of performance and value for content creators and enthusiasts.",
    features: ["AMD Ryzen 7 7700X", "RTX 4070 12GB", "16GB DDR5 RAM", "500GB NVMe SSD", "Liquid Cooling"]
  },
  {
    id: 3,
    name: "K-O Compact Mini ITX",
    price: 1299.99,
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    category: "prebuilt",
    rating: 4.7,
    reviews: 156,
    description: "Powerful performance in a compact form factor, perfect for small spaces.",
    features: ["AMD Ryzen 5 7600X", "RTX 4060 Ti 8GB", "16GB DDR5 RAM", "500GB NVMe SSD", "Mini ITX Form Factor"]
  },

  // Components
  {
    id: 4,
    name: "Intel Core i9-13900K Processor",
    price: 589.99,
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
    category: "components",
    rating: 4.9,
    reviews: 567,
    description: "Flagship Intel processor with 24 cores and 32 threads for ultimate performance.",
    features: ["24 Cores, 32 Threads", "5.8 GHz Max Boost", "36MB Cache", "LGA 1700 Socket", "Unlocked Multiplier"]
  },
  {
    id: 5,
    name: "NVIDIA RTX 4080 Graphics Card",
    price: 1199.99,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    category: "components",
    rating: 4.8,
    reviews: 423,
    description: "High-end graphics card with 16GB GDDR6X memory for 4K gaming and ray tracing.",
    features: ["16GB GDDR6X", "Ada Lovelace Architecture", "Ray Tracing", "DLSS 3.0", "4K Gaming Ready"]
  },
  {
    id: 6,
    name: "Corsair Dominator Platinum RGB 32GB DDR5",
    price: 299.99,
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    category: "components",
    rating: 4.7,
    reviews: 298,
    description: "Premium DDR5 memory with RGB lighting and exceptional performance.",
    features: ["32GB (2x16GB)", "DDR5-5600", "RGB Lighting", "Premium Heat Spreaders", "Lifetime Warranty"]
  },
  {
    id: 7,
    name: "Samsung 980 PRO 2TB NVMe SSD",
    price: 199.99,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    category: "components",
    rating: 4.8,
    reviews: 1234,
    description: "Ultra-fast PCIe 4.0 NVMe SSD with exceptional read/write speeds.",
    features: ["2TB Capacity", "PCIe 4.0", "7,000 MB/s Read", "5,100 MB/s Write", "5-Year Warranty"]
  },
  {
    id: 8,
    name: "ASUS ROG Strix Z790-E Motherboard",
    price: 449.99,
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
    category: "components",
    rating: 4.9,
    reviews: 345,
    description: "Premium Z790 motherboard with advanced features and RGB lighting.",
    features: ["LGA 1700 Socket", "DDR5 Support", "PCIe 5.0", "WiFi 6E", "RGB Lighting", "Premium Audio"]
  },

  // Peripherals
  {
    id: 9,
    name: "ASUS ROG Swift PG32UQX 32\" 4K Monitor",
    price: 2999.99,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    category: "peripherals",
    rating: 4.9,
    reviews: 156,
    description: "Premium 32-inch 4K gaming monitor with Mini LED technology and 144Hz refresh rate.",
    features: ["32-inch 4K Display", "144Hz Refresh Rate", "Mini LED Backlight", "G-SYNC Ultimate", "HDR 1400"]
  },
  {
    id: 10,
    name: "Logitech G Pro X Superlight 2",
    price: 159.99,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
    category: "peripherals",
    rating: 4.8,
    reviews: 789,
    description: "Ultra-lightweight wireless gaming mouse with HERO 25K sensor.",
    features: ["25K DPI Sensor", "Wireless", "63g Weight", "95-hour Battery", "Pro-grade Performance"]
  },
  {
    id: 11,
    name: "Corsair K100 RGB Mechanical Keyboard",
    price: 229.99,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    category: "peripherals",
    rating: 4.7,
    reviews: 567,
    description: "Premium mechanical gaming keyboard with per-key RGB and dedicated macro keys.",
    features: ["Cherry MX Speed Switches", "Per-key RGB", "Aluminum Frame", "Dedicated Macro Keys", "USB Passthrough"]
  },

  // Accessories
  {
    id: 12,
    name: "Corsair H150i Elite Capellix AIO Cooler",
    price: 189.99,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    category: "accessories",
    rating: 4.8,
    reviews: 432,
    description: "360mm AIO liquid cooler with RGB lighting and exceptional cooling performance.",
    features: ["360mm Radiator", "RGB Lighting", "Magnetic Levitation Fans", "Zero RPM Mode", "iCUE Software"]
  },
  {
    id: 13,
    name: "Corsair RM1000x 1000W 80+ Gold PSU",
    price: 179.99,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    category: "accessories",
    rating: 4.9,
    reviews: 298,
    description: "Fully modular 1000W power supply with 80+ Gold efficiency rating.",
    features: ["1000W Capacity", "80+ Gold Certified", "Fully Modular", "Zero RPM Fan Mode", "10-Year Warranty"]
  },
  {
    id: 14,
    name: "Fractal Design Define 7 Case",
    price: 169.99,
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    category: "accessories",
    rating: 4.7,
    reviews: 234,
    description: "Premium mid-tower case with excellent airflow and noise dampening.",
    features: ["Mid-Tower Design", "Tempered Glass Panel", "Sound Dampening", "Excellent Airflow", "Cable Management"]
  },
  {
    id: 15,
    name: "Thermal Grizzly Kryonaut Thermal Paste",
    price: 12.99,
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg",
    category: "accessories",
    rating: 4.8,
    reviews: 1567,
    description: "High-performance thermal paste for optimal heat transfer.",
    features: ["Premium Formula", "Easy Application", "Long-lasting", "Non-conductive", "Professional Grade"]
  }
];