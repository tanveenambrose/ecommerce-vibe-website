// Comprehensive product database with 40+ products per subcategory
export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  description?: string;
  features?: string[];
  brand?: string;
}

// Product templates for generating variations
const brands = {
  electronics: ['Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Microsoft', 'Razer', 'MSI', 'Alienware', 'Gigabyte', 'Huawei', 'Xiaomi'],
  fashion: ['Nike', 'Adidas', 'Zara', 'H&M', 'Gucci', 'Prada', 'Levi\'s', 'Calvin Klein', 'Tommy Hilfiger', 'Ralph Lauren'],
  home: ['IKEA', 'West Elm', 'Pottery Barn', 'Crate & Barrel', 'Ashley', 'Wayfair', 'CB2', 'Article'],
  beauty: ['L\'Oreal', 'Maybelline', 'MAC', 'Clinique', 'Estee Lauder', 'Neutrogena', 'CeraVe', 'The Ordinary'],
  hobby: ['LEGO', 'Hasbro', 'Mattel', 'Fisher-Price', 'Melissa & Doug', 'VTech', 'Little Tikes']
};

export interface BrandGroup {
  name: string;
  brands: string[];
}

export const subCategoryBrands: Record<string, BrandGroup[]> = {
  'Computers & Laptops': [
    { name: 'Premium & General', brands: ['Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Microsoft Surface', 'Samsung'] },
    { name: 'Gaming', brands: ['MSI', 'Razer', 'Acer', 'Alienware', 'Gigabyte'] },
    { name: 'Value', brands: ['Huawei', 'Xiaomi', 'Walton', 'Chuwi'] }
  ],
  'Mobile & Tablets': [
    { name: 'Flagship & Premium', brands: ['Apple', 'Samsung', 'Google', 'Sony', 'OnePlus'] },
    { name: 'Value & Budget', brands: ['Xiaomi', 'Realme', 'Oppo', 'Vivo', 'Motorola', 'Nokia'] }
  ],
  'Audio & Sound': [
    { name: 'Premium Audio', brands: ['Sony', 'Bose', 'Sennheiser', 'Bang & Olufsen', 'JBL'] },
    { name: 'Consumer', brands: ['Beats', 'Anker', 'Skullcandy', 'Logitech', 'Creative'] }
  ],
  'Wearable Tech': [
    { name: 'Smartwatches', brands: ['Apple', 'Samsung', 'Garmin', 'Fitbit', 'Amazfit'] },
    { name: 'Accessories', brands: ['Oura', 'Whoop', 'Withings', 'Fossil'] }
  ],
  'Cameras & Gear': [
    { name: 'Professional', brands: ['Canon', 'Nikon', 'Sony', 'Fujifilm', 'Leica'] },
    { name: 'Action & Drones', brands: ['GoPro', 'DJI', 'Insta360', 'Polaroid'] }
  ],
  "Men's Clothing": [
    { name: 'Luxury', brands: ['Gucci', 'Prada', 'Ralph Lauren', 'Tommy Hilfiger'] },
    { name: 'Casual & Sport', brands: ['Nike', 'Adidas', 'Zara', 'H&M', 'Levi\'s', 'Uniqlo'] }
  ],
  "Women's Clothing": [
    { name: 'Luxury', brands: ['Chanel', 'Louis Vuitton', 'Dior', 'Versace'] },
    { name: 'Trendy', brands: ['Zara', 'H&M', 'Forever 21', 'Mango', 'Shein'] }
  ],
  'Footwear': [
    { name: 'Sportswear', brands: ['Nike', 'Adidas', 'Puma', 'New Balance', 'Reebok'] },
    { name: 'Casual & Formal', brands: ['Timberland', 'Dr. Martens', 'Clarks', 'Vans', 'Converse'] }
  ],
  'Accessories': [
    { name: 'Watches', brands: ['Rolex', 'Seiko', 'Casio', 'Fossil', 'Timex'] },
    { name: 'Eyewear & Bags', brands: ['Ray-Ban', 'Oakley', 'Herschel', 'Samsonite'] }
  ],
  'Furniture': [
    { name: 'Modern', brands: ['IKEA', 'West Elm', 'CB2', 'Article'] },
    { name: 'Traditional', brands: ['Ashley', 'Pottery Barn', 'Restoration Hardware'] }
  ],
  'Decor': [
    { name: 'Home Accents', brands: ['West Elm', 'Crate & Barrel', 'Anthropologie', 'Urban Outfitters'] }
  ],
  'Kitchen': [
    { name: 'Appliances', brands: ['KitchenAid', 'Cuisinart', 'Ninja', 'Instant Pot', 'Dyson'] },
    { name: 'Cookware', brands: ['Le Creuset', 'All-Clad', 'Calphalon', 'T-fal'] }
  ],
  'Skincare': [
    { name: 'Dermatological', brands: ['CeraVe', 'Neutrogena', 'La Roche-Posay', 'The Ordinary'] },
    { name: 'Luxury', brands: ['La Mer', 'Estee Lauder', 'Lancome', 'Clinique'] }
  ],
  'Makeup': [
    { name: 'Professional', brands: ['MAC', 'Sephora', 'NARS', 'Urban Decay'] },
    { name: 'Drugstore', brands: ['Maybelline', 'L\'Oreal', 'NYX', 'Revlon'] }
  ]
};

// Real product data fetched from public APIs
export const products: Product[] = [
  {
    "id": "dummy-1",
    "name": "Essence Mascara Lash Princess",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 9.99,
    "originalPrice": 11,
    "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "rating": 2.56,
    "reviews": 148,
    "inStock": true,
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "features": [
      "beauty",
      "mascara"
    ],
    "brand": "Essence"
  },
  {
    "id": "dummy-2",
    "name": "Eyeshadow Palette with Mirror",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 19.99,
    "originalPrice": 24,
    "image": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "rating": 2.86,
    "reviews": 338,
    "inStock": true,
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "features": [
      "beauty",
      "eyeshadow"
    ],
    "brand": "Glamour Beauty"
  },
  {
    "id": "dummy-3",
    "name": "Powder Canister",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 14.99,
    "originalPrice": 17,
    "image": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    "rating": 4.64,
    "reviews": 181,
    "inStock": true,
    "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    "features": [
      "beauty",
      "face powder"
    ],
    "brand": "Velvet Touch"
  },
  {
    "id": "dummy-4",
    "name": "Red Lipstick",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 12.99,
    "originalPrice": 15,
    "image": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    "rating": 4.36,
    "reviews": 371,
    "inStock": true,
    "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    "features": [
      "beauty",
      "lipstick"
    ],
    "brand": "Chic Cosmetics"
  },
  {
    "id": "dummy-5",
    "name": "Red Nail Polish",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 8.99,
    "originalPrice": 10,
    "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    "rating": 4.32,
    "reviews": 232,
    "inStock": true,
    "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    "features": [
      "beauty",
      "nail polish"
    ],
    "brand": "Nail Couture"
  },
  {
    "id": "dummy-6",
    "name": "Calvin Klein CK One",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 49.99,
    "originalPrice": 51,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    "rating": 4.37,
    "reviews": 59,
    "inStock": true,
    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    "features": [
      "fragrances",
      "perfumes"
    ],
    "brand": "Calvin Klein"
  },
  {
    "id": "dummy-7",
    "name": "Chanel Coco Noir Eau De",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 129.99,
    "originalPrice": 156,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    "rating": 4.26,
    "reviews": 487,
    "inStock": true,
    "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    "features": [
      "fragrances",
      "perfumes"
    ],
    "brand": "Chanel"
  },
  {
    "id": "dummy-8",
    "name": "Dior J'adore",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 89.99,
    "originalPrice": 106,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    "rating": 3.8,
    "reviews": 429,
    "inStock": true,
    "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    "features": [
      "fragrances",
      "perfumes"
    ],
    "brand": "Dior"
  },
  {
    "id": "dummy-9",
    "name": "Dolce Shine Eau de",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 69.99,
    "originalPrice": 70,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    "rating": 3.96,
    "reviews": 163,
    "inStock": true,
    "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    "features": [
      "fragrances",
      "perfumes"
    ],
    "brand": "Dolce & Gabbana"
  },
  {
    "id": "dummy-10",
    "name": "Gucci Bloom Eau de",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 79.99,
    "originalPrice": 93,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    "rating": 2.74,
    "reviews": 21,
    "inStock": true,
    "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    "features": [
      "fragrances",
      "perfumes"
    ],
    "brand": "Gucci"
  },
  {
    "id": "dummy-11",
    "name": "Annibale Colombo Bed",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 1899.99,
    "originalPrice": 2078,
    "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    "rating": 4.77,
    "reviews": 110,
    "inStock": true,
    "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    "features": [
      "furniture",
      "beds"
    ],
    "brand": "Annibale Colombo"
  },
  {
    "id": "dummy-12",
    "name": "Annibale Colombo Sofa",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 2499.99,
    "originalPrice": 2921,
    "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    "rating": 3.92,
    "reviews": 99,
    "inStock": true,
    "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    "features": [
      "furniture",
      "sofas"
    ],
    "brand": "Annibale Colombo"
  },
  {
    "id": "dummy-13",
    "name": "Bedside Table African Cherry",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 299.99,
    "originalPrice": 371,
    "image": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    "rating": 2.87,
    "reviews": 383,
    "inStock": true,
    "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    "features": [
      "furniture",
      "bedside tables"
    ],
    "brand": "Furniture Co."
  },
  {
    "id": "dummy-14",
    "name": "Knoll Saarinen Executive Conference Chair",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 499.99,
    "originalPrice": 510,
    "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    "rating": 4.88,
    "reviews": 104,
    "inStock": true,
    "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    "features": [
      "furniture",
      "office chairs"
    ],
    "brand": "Knoll"
  },
  {
    "id": "dummy-15",
    "name": "Wooden Bathroom Sink With Mirror",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 799.99,
    "originalPrice": 877,
    "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    "rating": 3.59,
    "reviews": 137,
    "inStock": true,
    "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    "features": [
      "furniture",
      "bathroom"
    ],
    "brand": "Bath Trends"
  },
  {
    "id": "dummy-16",
    "name": "Apple",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 1.99,
    "originalPrice": 2,
    "image": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    "rating": 4.19,
    "reviews": 135,
    "inStock": true,
    "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    "features": [
      "fruits"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-17",
    "name": "Beef Steak",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 12.99,
    "originalPrice": 14,
    "image": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    "rating": 4.47,
    "reviews": 460,
    "inStock": true,
    "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    "features": [
      "meat"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-18",
    "name": "Cat Food",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 8.99,
    "originalPrice": 10,
    "image": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    "rating": 3.13,
    "reviews": 83,
    "inStock": true,
    "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    "features": [
      "pet supplies",
      "cat food"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-19",
    "name": "Chicken Meat",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 9.99,
    "originalPrice": 12,
    "image": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
    "rating": 3.19,
    "reviews": 281,
    "inStock": true,
    "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
    "features": [
      "meat"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-20",
    "name": "Cooking Oil",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 4.99,
    "originalPrice": 6,
    "image": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    "rating": 4.8,
    "reviews": 292,
    "inStock": true,
    "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    "features": [
      "cooking essentials"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-21",
    "name": "Cucumber",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 1.49,
    "originalPrice": 1,
    "image": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    "rating": 4.07,
    "reviews": 116,
    "inStock": true,
    "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    "features": [
      "vegetables"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-22",
    "name": "Dog Food",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 10.99,
    "originalPrice": 12,
    "image": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    "rating": 4.55,
    "reviews": 212,
    "inStock": true,
    "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    "features": [
      "pet supplies",
      "dog food"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-23",
    "name": "Eggs",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 2.99,
    "originalPrice": 3,
    "image": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    "rating": 2.53,
    "reviews": 374,
    "inStock": true,
    "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    "features": [
      "dairy"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-24",
    "name": "Fish Steak",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 14.99,
    "originalPrice": 16,
    "image": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    "rating": 3.78,
    "reviews": 456,
    "inStock": true,
    "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    "features": [
      "seafood"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-25",
    "name": "Green Bell Pepper",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 1.29,
    "originalPrice": 1,
    "image": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    "rating": 3.25,
    "reviews": 306,
    "inStock": true,
    "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    "features": [
      "vegetables"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-26",
    "name": "Green Chili Pepper",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 0.99,
    "originalPrice": 1,
    "image": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    "rating": 3.66,
    "reviews": 371,
    "inStock": true,
    "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    "features": [
      "vegetables"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-27",
    "name": "Honey Jar",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 6.99,
    "originalPrice": 8,
    "image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    "rating": 3.97,
    "reviews": 326,
    "inStock": true,
    "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    "features": [
      "condiments"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-28",
    "name": "Ice Cream",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 5.49,
    "originalPrice": 6,
    "image": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    "rating": 3.39,
    "reviews": 247,
    "inStock": true,
    "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    "features": [
      "desserts"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-29",
    "name": "Juice",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 3.99,
    "originalPrice": 5,
    "image": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    "rating": 3.94,
    "reviews": 351,
    "inStock": true,
    "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    "features": [
      "beverages"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-30",
    "name": "Kiwi",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 2.49,
    "originalPrice": 3,
    "image": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    "rating": 4.93,
    "reviews": 141,
    "inStock": true,
    "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    "features": [
      "fruits"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-31",
    "name": "Lemon",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 0.79,
    "originalPrice": 1,
    "image": "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp",
    "rating": 3.53,
    "reviews": 351,
    "inStock": true,
    "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
    "features": [
      "fruits"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-32",
    "name": "Milk",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 3.49,
    "originalPrice": 4,
    "image": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
    "rating": 2.61,
    "reviews": 160,
    "inStock": true,
    "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
    "features": [
      "dairy"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-33",
    "name": "Mulberry",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 4.99,
    "originalPrice": 6,
    "image": "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp",
    "rating": 4.95,
    "reviews": 304,
    "inStock": true,
    "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
    "features": [
      "fruits"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-34",
    "name": "Nescafe Coffee",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 7.99,
    "originalPrice": 8,
    "image": "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp",
    "rating": 4.82,
    "reviews": 405,
    "inStock": true,
    "description": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
    "features": [
      "beverages",
      "coffee"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-35",
    "name": "Potatoes",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 2.29,
    "originalPrice": 2,
    "image": "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp",
    "rating": 4.81,
    "reviews": 221,
    "inStock": true,
    "description": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
    "features": [
      "vegetables"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-36",
    "name": "Protein Powder",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 19.99,
    "originalPrice": 22,
    "image": "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp",
    "rating": 4.18,
    "reviews": 293,
    "inStock": true,
    "description": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
    "features": [
      "health supplements"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-37",
    "name": "Red Onions",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 1.99,
    "originalPrice": 2,
    "image": "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp",
    "rating": 4.2,
    "reviews": 170,
    "inStock": true,
    "description": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
    "features": [
      "vegetables"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-38",
    "name": "Rice",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 5.99,
    "originalPrice": 7,
    "image": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
    "rating": 3.18,
    "reviews": 55,
    "inStock": true,
    "description": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
    "features": [
      "grains"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-39",
    "name": "Soft Drinks",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 1.99,
    "originalPrice": 2,
    "image": "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp",
    "rating": 4.75,
    "reviews": 37,
    "inStock": true,
    "description": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
    "features": [
      "beverages"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-40",
    "name": "Strawberry",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 3.99,
    "originalPrice": 4,
    "image": "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp",
    "rating": 3.08,
    "reviews": 382,
    "inStock": true,
    "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
    "features": [
      "fruits"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-41",
    "name": "Tissue Paper Box",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 2.49,
    "originalPrice": 3,
    "image": "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
    "rating": 2.69,
    "reviews": 370,
    "inStock": true,
    "description": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
    "features": [
      "household essentials"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-42",
    "name": "Water",
    "category": "Family & Hobby",
    "subcategory": "Baby Essentials",
    "price": 0.99,
    "originalPrice": 1,
    "image": "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
    "rating": 4.96,
    "reviews": 8,
    "inStock": true,
    "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
    "features": [
      "beverages"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-43",
    "name": "Decoration Swing",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 59.99,
    "originalPrice": 67,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
    "rating": 3.16,
    "reviews": 428,
    "inStock": true,
    "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
    "features": [
      "home decor",
      "swing"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-44",
    "name": "Family Tree Photo Frame",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 29.99,
    "originalPrice": 35,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
    "rating": 4.53,
    "reviews": 499,
    "inStock": true,
    "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
    "features": [
      "home decor",
      "photo frame"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-45",
    "name": "House Showpiece Plant",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 39.99,
    "originalPrice": 43,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
    "rating": 4.67,
    "reviews": 151,
    "inStock": true,
    "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
    "features": [
      "home decor",
      "artificial plants"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-46",
    "name": "Plant Pot",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 14.99,
    "originalPrice": 16,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
    "rating": 3.01,
    "reviews": 364,
    "inStock": true,
    "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    "features": [
      "home decor",
      "plant accessories"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-47",
    "name": "Table Lamp",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 49.99,
    "originalPrice": 54,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
    "rating": 3.55,
    "reviews": 138,
    "inStock": true,
    "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
    "features": [
      "home decor",
      "lighting"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-48",
    "name": "Bamboo Spatula",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 7.99,
    "originalPrice": 8,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
    "rating": 3.27,
    "reviews": 47,
    "inStock": true,
    "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
    "features": [
      "kitchen tools",
      "utensils"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-49",
    "name": "Black Aluminium Cup",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 5.99,
    "originalPrice": 7,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
    "rating": 4.46,
    "reviews": 413,
    "inStock": true,
    "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
    "features": [
      "drinkware",
      "cups"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-50",
    "name": "Black Whisk",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 9.99,
    "originalPrice": 11,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
    "rating": 3.9,
    "reviews": 109,
    "inStock": true,
    "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
    "features": [
      "kitchen tools",
      "utensils"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-51",
    "name": "Boxed Blender",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 39.99,
    "originalPrice": 43,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
    "rating": 4.56,
    "reviews": 334,
    "inStock": true,
    "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    "features": [
      "kitchen appliances",
      "blenders"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-52",
    "name": "Carbon Steel Wok",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 29.99,
    "originalPrice": 32,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
    "rating": 4.05,
    "reviews": 356,
    "inStock": true,
    "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
    "features": [
      "cookware",
      "woks"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-53",
    "name": "Chopping Board",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 12.99,
    "originalPrice": 14,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
    "rating": 3.7,
    "reviews": 319,
    "inStock": true,
    "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
    "features": [
      "kitchen tools",
      "cutting boards"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-54",
    "name": "Citrus Squeezer Yellow",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 8.99,
    "originalPrice": 10,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
    "rating": 4.63,
    "reviews": 87,
    "inStock": true,
    "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
    "features": [
      "kitchen tools",
      "juicers"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-55",
    "name": "Egg Slicer",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 6.99,
    "originalPrice": 8,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
    "rating": 3.09,
    "reviews": 57,
    "inStock": true,
    "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    "features": [
      "kitchen tools",
      "slicers"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-56",
    "name": "Electric Stove",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 49.99,
    "originalPrice": 58,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
    "rating": 4.11,
    "reviews": 392,
    "inStock": true,
    "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
    "features": [
      "kitchen appliances",
      "cooktops"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-57",
    "name": "Fine Mesh Strainer",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 9.99,
    "originalPrice": 10,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
    "rating": 3.04,
    "reviews": 464,
    "inStock": true,
    "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
    "features": [
      "kitchen tools",
      "strainers"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-58",
    "name": "Fork",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 3.99,
    "originalPrice": 4,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
    "rating": 3.11,
    "reviews": 289,
    "inStock": true,
    "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
    "features": [
      "kitchen tools",
      "utensils"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-59",
    "name": "Glass",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 4.99,
    "originalPrice": 5,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp",
    "rating": 4.02,
    "reviews": 420,
    "inStock": true,
    "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
    "features": [
      "drinkware",
      "glasses"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-60",
    "name": "Grater Black",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 10.99,
    "originalPrice": 11,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
    "rating": 3.21,
    "reviews": 195,
    "inStock": true,
    "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
    "features": [
      "kitchen tools",
      "graters"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-61",
    "name": "Hand Blender",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 34.99,
    "originalPrice": 42,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
    "rating": 3.86,
    "reviews": 187,
    "inStock": true,
    "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
    "features": [
      "kitchen appliances",
      "blenders"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-62",
    "name": "Ice Cube Tray",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 5.99,
    "originalPrice": 6,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
    "rating": 4.71,
    "reviews": 112,
    "inStock": true,
    "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
    "features": [
      "kitchen tools",
      "ice cube trays"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-63",
    "name": "Kitchen Sieve",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 7.99,
    "originalPrice": 10,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
    "rating": 3.09,
    "reviews": 76,
    "inStock": true,
    "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
    "features": [
      "kitchen tools",
      "strainers"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-64",
    "name": "Knife",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 14.99,
    "originalPrice": 18,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
    "rating": 3.26,
    "reviews": 419,
    "inStock": true,
    "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
    "features": [
      "kitchen tools",
      "cutlery"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-65",
    "name": "Lunch Box",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 12.99,
    "originalPrice": 14,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
    "rating": 4.93,
    "reviews": 419,
    "inStock": true,
    "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    "features": [
      "kitchen tools",
      "storage"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-66",
    "name": "Microwave Oven",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 89.99,
    "originalPrice": 102,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
    "rating": 4.82,
    "reviews": 103,
    "inStock": true,
    "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
    "features": [
      "kitchen appliances",
      "microwaves"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-67",
    "name": "Mug Tree Stand",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 15.99,
    "originalPrice": 18,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
    "rating": 2.64,
    "reviews": 115,
    "inStock": true,
    "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
    "features": [
      "kitchen tools",
      "organization"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-68",
    "name": "Pan",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 24.99,
    "originalPrice": 26,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
    "rating": 2.79,
    "reviews": 466,
    "inStock": true,
    "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
    "features": [
      "cookware",
      "pans"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-69",
    "name": "Plate",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 3.99,
    "originalPrice": 4,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp",
    "rating": 3.65,
    "reviews": 436,
    "inStock": true,
    "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
    "features": [
      "dinnerware",
      "plates"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-70",
    "name": "Red Tongs",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 6.99,
    "originalPrice": 8,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp",
    "rating": 4.42,
    "reviews": 312,
    "inStock": true,
    "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
    "features": [
      "kitchen tools",
      "tongs"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-71",
    "name": "Silver Pot With Glass Cap",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 39.99,
    "originalPrice": 42,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp",
    "rating": 3.22,
    "reviews": 77,
    "inStock": true,
    "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
    "features": [
      "cookware",
      "pots"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-72",
    "name": "Slotted Turner",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 8.99,
    "originalPrice": 10,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp",
    "rating": 3.4,
    "reviews": 168,
    "inStock": true,
    "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
    "features": [
      "kitchen tools",
      "turners"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-73",
    "name": "Spice Rack",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 19.99,
    "originalPrice": 23,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp",
    "rating": 4.87,
    "reviews": 218,
    "inStock": true,
    "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
    "features": [
      "kitchen tools",
      "organization"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-74",
    "name": "Spoon",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 4.99,
    "originalPrice": 5,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp",
    "rating": 4.03,
    "reviews": 317,
    "inStock": true,
    "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
    "features": [
      "kitchen tools",
      "utensils"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-75",
    "name": "Tray",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 16.99,
    "originalPrice": 18,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp",
    "rating": 4.62,
    "reviews": 296,
    "inStock": true,
    "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
    "features": [
      "serveware",
      "trays"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-76",
    "name": "Wooden Rolling Pin",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 11.99,
    "originalPrice": 13,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp",
    "rating": 2.92,
    "reviews": 134,
    "inStock": true,
    "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
    "features": [
      "kitchen tools",
      "baking"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-77",
    "name": "Yellow Peeler",
    "category": "Home & Lifestyle",
    "subcategory": "Kitchen & Dining",
    "price": 5.99,
    "originalPrice": 7,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp",
    "rating": 4.24,
    "reviews": 398,
    "inStock": true,
    "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
    "features": [
      "kitchen tools",
      "peelers"
    ],
    "brand": "Generic"
  },
  {
    "id": "dummy-78",
    "name": "Apple MacBook Pro 14 Inch Space Grey",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 1999.99,
    "originalPrice": 2098,
    "image": "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
    "rating": 3.65,
    "reviews": 42,
    "inStock": true,
    "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    "features": [
      "laptops",
      "apple"
    ],
    "brand": "Apple"
  },
  {
    "id": "dummy-79",
    "name": "Asus Zenbook Pro Dual Screen Laptop",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 1799.99,
    "originalPrice": 2026,
    "image": "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
    "rating": 3.95,
    "reviews": 466,
    "inStock": true,
    "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    "features": [
      "laptops"
    ],
    "brand": "Asus"
  },
  {
    "id": "dummy-80",
    "name": "Huawei Matebook X Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 1399.99,
    "originalPrice": 1545,
    "image": "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp",
    "rating": 4.98,
    "reviews": 253,
    "inStock": true,
    "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    "features": [
      "laptops"
    ],
    "brand": "Huawei"
  },
  {
    "id": "dummy-81",
    "name": "Lenovo Yoga 920",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 1099.99,
    "originalPrice": 1177,
    "image": "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp",
    "rating": 2.86,
    "reviews": 61,
    "inStock": true,
    "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    "features": [
      "laptops"
    ],
    "brand": "Lenovo"
  },
  {
    "id": "dummy-82",
    "name": "New DELL XPS 13 9300 Laptop",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 1499.99,
    "originalPrice": 1702,
    "image": "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp",
    "rating": 2.67,
    "reviews": 283,
    "inStock": true,
    "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    "features": [
      "laptops"
    ],
    "brand": "Dell"
  },
  {
    "id": "dummy-83",
    "name": "Blue & Black Check Shirt",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 29.99,
    "originalPrice": 35,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
    "rating": 3.64,
    "reviews": 46,
    "inStock": true,
    "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    "features": [
      "clothing",
      "men's shirts"
    ],
    "brand": "Fashion Trends"
  },
  {
    "id": "dummy-84",
    "name": "Gigabyte Aorus Men Tshirt",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 24.99,
    "originalPrice": 25,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
    "rating": 3.18,
    "reviews": 18,
    "inStock": true,
    "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    "features": [
      "clothing",
      "men's t-shirts"
    ],
    "brand": "Gigabyte"
  },
  {
    "id": "dummy-85",
    "name": "Man Plaid Shirt",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 34.99,
    "originalPrice": 43,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
    "rating": 3.46,
    "reviews": 22,
    "inStock": true,
    "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    "features": [
      "clothing",
      "men's shirts"
    ],
    "brand": "Classic Wear"
  },
  {
    "id": "dummy-86",
    "name": "Man Short Sleeve Shirt",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 19.99,
    "originalPrice": 21,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    "rating": 2.9,
    "reviews": 402,
    "inStock": true,
    "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    "features": [
      "clothing",
      "men's shirts"
    ],
    "brand": "Casual Comfort"
  },
  {
    "id": "dummy-87",
    "name": "Men Check Shirt",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 27.99,
    "originalPrice": 32,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
    "rating": 2.72,
    "reviews": 299,
    "inStock": true,
    "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    "features": [
      "clothing",
      "men's shirts"
    ],
    "brand": "Urban Chic"
  },
  {
    "id": "dummy-88",
    "name": "Nike Air Jordan 1 Red And Black",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 149.99,
    "originalPrice": 156,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
    "rating": 4.77,
    "reviews": 409,
    "inStock": true,
    "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    "features": [
      "footwear",
      "athletic shoes"
    ],
    "brand": "Nike"
  },
  {
    "id": "dummy-89",
    "name": "Nike Baseball Cleats",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 79.99,
    "originalPrice": 98,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
    "rating": 3.88,
    "reviews": 380,
    "inStock": true,
    "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    "features": [
      "footwear",
      "sports cleats"
    ],
    "brand": "Nike"
  },
  {
    "id": "dummy-90",
    "name": "Puma Future Rider Trainers",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 89.99,
    "originalPrice": 94,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    "rating": 4.9,
    "reviews": 189,
    "inStock": true,
    "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    "features": [
      "footwear",
      "casual shoes"
    ],
    "brand": "Puma"
  },
  {
    "id": "dummy-91",
    "name": "Sports Sneakers Off White & Red",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 119.99,
    "originalPrice": 126,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
    "rating": 4.77,
    "reviews": 445,
    "inStock": true,
    "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    "features": [
      "footwear",
      "athletic shoes"
    ],
    "brand": "Off White"
  },
  {
    "id": "dummy-92",
    "name": "Sports Sneakers Off White Red",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 109.99,
    "originalPrice": 110,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
    "rating": 4.69,
    "reviews": 305,
    "inStock": true,
    "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
    "features": [
      "footwear",
      "casual shoes"
    ],
    "brand": "Off White"
  },
  {
    "id": "dummy-93",
    "name": "Brown Leather Belt Watch",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 89.99,
    "originalPrice": 96,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
    "rating": 4.19,
    "reviews": 314,
    "inStock": true,
    "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    "features": [
      "watches",
      "leather watches"
    ],
    "brand": "Fashion Timepieces"
  },
  {
    "id": "dummy-94",
    "name": "Longines Master Collection",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 1499.99,
    "originalPrice": 1812,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
    "rating": 3.87,
    "reviews": 55,
    "inStock": true,
    "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    "features": [
      "watches",
      "luxury watches"
    ],
    "brand": "Longines"
  },
  {
    "id": "dummy-95",
    "name": "Rolex Cellini Date Black Dial",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 8999.99,
    "originalPrice": 9877,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
    "rating": 4.97,
    "reviews": 338,
    "inStock": true,
    "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    "features": [
      "watches",
      "luxury watches"
    ],
    "brand": "Rolex"
  },
  {
    "id": "dummy-96",
    "name": "Rolex Cellini Moonphase",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 12999.99,
    "originalPrice": 15761,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
    "rating": 2.58,
    "reviews": 18,
    "inStock": true,
    "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    "features": [
      "watches",
      "luxury watches"
    ],
    "brand": "Rolex"
  },
  {
    "id": "dummy-97",
    "name": "Rolex Datejust",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 10999.99,
    "originalPrice": 11426,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
    "rating": 3.66,
    "reviews": 111,
    "inStock": true,
    "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    "features": [
      "watches",
      "luxury watches"
    ],
    "brand": "Rolex"
  },
  {
    "id": "dummy-98",
    "name": "Rolex Submariner Watch",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 13999.99,
    "originalPrice": 14745,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
    "rating": 2.69,
    "reviews": 56,
    "inStock": true,
    "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    "features": [
      "watches",
      "luxury watches"
    ],
    "brand": "Rolex"
  },
  {
    "id": "dummy-99",
    "name": "Amazon Echo Plus",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 99.99,
    "originalPrice": 114,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
    "rating": 4.99,
    "reviews": 56,
    "inStock": true,
    "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    "features": [
      "electronics",
      "smart speakers"
    ],
    "brand": "Amazon"
  },
  {
    "id": "dummy-100",
    "name": "Apple Airpods",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 129.99,
    "originalPrice": 154,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
    "rating": 4.15,
    "reviews": 163,
    "inStock": true,
    "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    "features": [
      "electronics",
      "wireless earphones"
    ],
    "brand": "Apple"
  },
  {
    "id": "fake-1",
    "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 109.95,
    "originalPrice": 132,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": 3.9,
    "reviews": 120,
    "inStock": true,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-2",
    "name": "Mens Casual Premium Slim Fit T-Shirts ",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 22.3,
    "originalPrice": 27,
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": 4.1,
    "reviews": 259,
    "inStock": true,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-3",
    "name": "Mens Cotton Jacket",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 55.99,
    "originalPrice": 67,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": 4.7,
    "reviews": 500,
    "inStock": true,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-4",
    "name": "Mens Casual Slim Fit",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 15.99,
    "originalPrice": 19,
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "rating": 2.1,
    "reviews": 430,
    "inStock": true,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-5",
    "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 695,
    "originalPrice": 834,
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    "rating": 4.6,
    "reviews": 400,
    "inStock": true,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-6",
    "name": "Solid Gold Petite Micropave ",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 168,
    "originalPrice": 202,
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    "rating": 3.9,
    "reviews": 70,
    "inStock": true,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-7",
    "name": "White Gold Plated Princess",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 9.99,
    "originalPrice": 12,
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    "rating": 3,
    "reviews": 400,
    "inStock": true,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-8",
    "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 10.99,
    "originalPrice": 13,
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    "rating": 1.9,
    "reviews": 100,
    "inStock": true,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-9",
    "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 64,
    "originalPrice": 77,
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    "rating": 3.3,
    "reviews": 203,
    "inStock": true,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-10",
    "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 109,
    "originalPrice": 131,
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    "rating": 2.9,
    "reviews": 470,
    "inStock": true,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-11",
    "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 109,
    "originalPrice": 131,
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    "rating": 4.8,
    "reviews": 319,
    "inStock": true,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-12",
    "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 114,
    "originalPrice": 137,
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    "rating": 4.8,
    "reviews": 400,
    "inStock": true,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-13",
    "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 599,
    "originalPrice": 719,
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    "rating": 2.9,
    "reviews": 250,
    "inStock": true,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-14",
    "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 999.99,
    "originalPrice": 1200,
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    "rating": 2.2,
    "reviews": 140,
    "inStock": true,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-15",
    "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 56.99,
    "originalPrice": 68,
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    "rating": 2.6,
    "reviews": 235,
    "inStock": true,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-16",
    "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 29.95,
    "originalPrice": 36,
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    "rating": 2.9,
    "reviews": 340,
    "inStock": true,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-17",
    "name": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 39.99,
    "originalPrice": 48,
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    "rating": 3.8,
    "reviews": 679,
    "inStock": true,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-18",
    "name": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 9.85,
    "originalPrice": 12,
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    "rating": 4.7,
    "reviews": 130,
    "inStock": true,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-19",
    "name": "Opna Women's Short Sleeve Moisture",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 7.95,
    "originalPrice": 10,
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    "rating": 4.5,
    "reviews": 146,
    "inStock": true,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "fake-20",
    "name": "DANVOUY Womens T Shirt Casual Cotton Short",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 12.99,
    "originalPrice": 16,
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    "rating": 3.6,
    "reviews": 145,
    "inStock": true,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "features": [],
    "brand": "Generic"
  },
  {
    "id": "makeup-495",
    "name": "Maybelline Face Studio Master Hi-Light Light Booster Bronzer",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.99,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert  balance of shade + shimmer illuminator for natural glow. Skin goes  soft-lit with zero glitz.  \t\tFor Best Results: Brush over all shades in palette and gently sweep over  cheekbones, brow bones, and temples, or anywhere light naturally touches  the face.",
    "features": [
      "bronzer"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-488",
    "name": "Maybelline Fit Me Bronzer",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 10.29,
    "originalPrice": 11,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/488/original/open-uri20171223-4-deo82c?1514063329",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Why You'll Love It  Lightweight pigments blend easily and wear evenly Provides a natural, fade-proof bronzed color that leaves skin the way it was meant to be...fresh, breathing and natural  For Best Results: For soft, natural look, brush along cheekbone, sweeping upward.",
    "features": [
      "bronzer"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-477",
    "name": "Maybelline Facestudio Master Contour Kit",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 15.99,
    "originalPrice": 18,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/477/original/open-uri20171223-4-1m8bc4v?1514063328",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline Facestudio Master Contour Kit is the ultimate on the go all-in-one palette, with contouring brush included.  Define and highlight in a New York minute with this effortless 3-step face contouring kit.  This easy-to-use 3-step face contouring kit features a bronzer, blush and highlighter.",
    "features": [
      "bronzer"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-468",
    "name": "Maybelline Face Studio Master Hi-Light Light Booster Blush",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.99,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/468/original/open-uri20171223-4-sz64re?1514063327",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline Face Studio Master Hi-Light Light Boosting blush formula has an expert  balance of shade + shimmer illuminator for natural glow. Skin goes  soft-lit with zero glitz.  \t\tFor Best Results: Brush over all shades in palette and gently sweep over  cheekbones, brow bones, and temples, or anywhere light naturally touches  the face.",
    "features": [
      "blush",
      "powder"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-452",
    "name": "Maybelline Face Studio Master Hi-Light Light Booster Blush ",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.99,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/452/original/open-uri20171223-4-1pmofky?1514062277",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline Face Studio Master Hi-Light Light Boosting blush formula has an expert  balance of shade + shimmer illuminator for natural glow. Skin goes  soft-lit with zero glitz.  \t\tFor Best Results: Brush over all shades in palette and gently sweep over  cheekbones, brow bones, and temples, or anywhere light naturally touches  the face.",
    "features": [
      "blush",
      "powder"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-439",
    "name": "Maybelline Fit Me Blush",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 10.29,
    "originalPrice": 11,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/439/original/open-uri20171223-4-1max36x?1514063325",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline Fit Me Blush has lightweight pigments blend easily and wear evenly. It provides a natural, fade-proof cheek color that leaves skin the way it was meant to be...fresh, breathing, and natural.  For Best Results: For soft, natural look, brush along cheekbone, sweeping upward.",
    "features": [
      "blush",
      "powder"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-414",
    "name": "Maybelline Dream Bouncy Blush",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 11.99,
    "originalPrice": 13,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/414/original/open-uri20171223-4-cjvuw0?1514063320",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Now, blush has bounce! Freshest flush ever:• New bouncy texture is formulated with silicone elastomers• Lightweight like a powder, yet melts seamlessly into skin like a cream giving you a fresh flush• Dermatologist tested• Allergy tested• Non-comedogenic                                                                                                                 For best results: With your fingertips, blend a small amount of  blush onto the apples of your cheeks, applying from your cheekbones to  your temples. To build colour intensity, apply more blush.",
    "features": [
      "blush",
      "cream"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-398",
    "name": "Maybelline Color Sensational Lipliner",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 8.29,
    "originalPrice": 9,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/398/original/open-uri20171223-4-11xbwij?1514063314",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Keep your Maybelline lip color beautiful with matching lip liners that won't smudge, smear or bleed for smooth, defined lips. For best results: Line your lips starting in the center of your upper lip. Work from the  center to outer edges of your lips using small strokes, following the  contour of your mouth. Follow the same technique for your bottom lip. To  extend the wear of your favorite lip color or lip gloss, first fill in  your lips completely with lip liner.",
    "features": [
      "lip_liner"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-382",
    "name": "Maybelline Dream Smooth Mousse Foundation",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.79,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/382/original/open-uri20171223-4-8avct4?1514063314",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Why You'll Love ItUnique cream-whipped foundation provides 100% baby-smooth perfection.  Skin looks and feels hydrated for 14 hours - never rough or dry Lightweight formula provides perfectly moisturizing coverage Blends seamlessly and feels fresh all-day Oil-free, Fragrance-free, Dermatologist Tested, Allergy Tested, Non-comedogenic – won’t clog pores. Safe for sensitive skin",
    "features": [
      "foundation",
      "cream"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-380",
    "name": "Maybelline Fit Me Shine-Free Foundation Stick",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 10.99,
    "originalPrice": 12,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/380/original/open-uri20171223-4-13lju4x?1514063313",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Get flawless, shine-free skin instantly and on-the-go for tailor-made  mattifying coverage.  The anti-shine core has ultra-lightweight powders  built in to the stick foundation to instantly dissolve excess oil. Features: Maybelline's first gel stick foundation with an anti-shine core Fresh gel foundation blends to a flawless matte finish Lightweight powders in the anti-shine core instantly dissolve excess oil",
    "features": [
      "foundation",
      "cream"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-379",
    "name": "Maybelline Dream Matte Mousse Foundation",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.79,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/379/original/open-uri20171223-4-1koue12?1514063313",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline Dream Matte Mouse Foundation is a revolutionary air-soft mousse that provides perfecting coverage for 100% velvet-matte complexion. It's non-comedogenic, fragrance-free, dermatologist-tested, allergy-tested and ideal for normal to oily skin.For best results: Apply smoothly and evenly to your face and blend with your fingertips.",
    "features": [
      "foundation",
      "cream"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-366",
    "name": "Maybelline Mineral Power Natural Perfecting Powder Foundation",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.99,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/366/original/open-uri20171223-4-q5cytj?1514063309",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Why You'll Love ItMineral Power Powder Foundation with micro-minerals provides a more natural, healthier, luminous look. Discover the natural power of micro-minerals: 100% natural mica creates a more natural luminosity Complete, yet refined coverage Provides buildable, even coverage Preservative-free, talc-free, oil-free, fragrance-free Medium to Full Coverage",
    "features": [
      "foundation",
      "mineral"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-354",
    "name": "Maybelline Dream Velvet Foundation",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 18.49,
    "originalPrice": 20,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/354/original/open-uri20171223-4-ouczfl?1514063316",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "This Maybelline Dream Velvet Foundation is a refreshing gel-whipped foundation that leaves complexion perfected and smooth with a velvety, soft-matte finish. Skin stays hydrated for 12 hours. Features:Maybelline’s first hydrating matte foundation for 100% velvet-smooth perfectionUnique gel-whipped formulaIdeal for normal to combination skin, medium coverage For best results apply Maybelline Dream Velvet Foundation using Maybelline Dream Blender",
    "features": [
      "foundation",
      "cream"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-353",
    "name": "Maybelline Superstay Better Skin Foundation ",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.99,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/353/original/open-uri20171223-4-q9ubsf?1514063307",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "The Maybelline Superstay Better Skin Foundation reduces the appearance of spots, bumps, dullness and redness to give you brighter, smoother and more even skin. Features:Longwear that improves skin every minute you're in it: brighter, smoother and more even.With micro-flex technology and the antioxidant power of Actyl-C.Ideal for sensitive skin. Good for all skin types. Medium to full coverageHow to Apply: Apply evenly to your face and blend with your fingers.",
    "features": [
      "foundation",
      "liquid"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-339",
    "name": "Maybelline Dream Wonder Liquid Touch Foundation",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.99,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/339/original/data?1514063302",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline Dream Wonder Liquid Touch Foundation's breakthrough texture fuses with skin. A finish so impeccable, yet undetectable.Features:Exclusive dropperMedium to full coverage, ideal for normal skinFor Best Results: Shake well. Unscrew cap. Holding dropper vertically, allow foundation to drop onto fingertip. Apply to face as usual.",
    "features": [
      "foundation",
      "liquid"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-321",
    "name": "Maybelline Dream Liquid Mousse",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 14.79,
    "originalPrice": 16,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/321/original/open-uri20171223-4-4z6wpb?1514063292",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Airbrushed perfection made possible:Air-whipped liquid makeup for 100% poreless skin  Breakthrough finish cushions and smooths for the most flawless, luminous coverage Lightweight air-whipped formula blends to virtually eliminate pores and imperfections Innovative shade-match pump makes finding your perfect shade a dream",
    "features": [
      "foundation",
      "liquid"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-320",
    "name": "Maybelline FIT ME! Matte + Poreless Foundation",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 10.99,
    "originalPrice": 12,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/320/original/data?1514063292",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline FIT ME! Matte + Poreless Foundation goes beyond  skin tone  matching to fit the unique texture issues of normal to oily skin for  the ultimate natural skin fit.  While some foundations can exaggerate pores and oily skin, only Maybelline's  pore-minimizing foundation contains their genius blurring micro-powders  that erase pores and absorb oil for a naturally matte and  poreless-looking finish.Dermatologist and allergy tested.  Does not clog pores. Oil-free.",
    "features": [
      "foundation",
      "liquid"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-317",
    "name": "Maybelline Fit Me Foundation with SPF",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 10.99,
    "originalPrice": 12,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/317/original/open-uri20171223-4-13jpajg?1514063300",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "It’s face makeup that fits you!Features: No oils, no waxes, no nonsenseNatural, Light to medium coverage that leaves skin the way it was meant to be. Fresh, breathing, flawless.Exclusive transluscent base and lightweight pigments allow skin’s natural highs and lows to show through.New shades formulated specifically for women of color contain  revolutionary 5-D pigment technology to balance your skin’s authentic  tones and highlights.SPF 18",
    "features": [
      "foundation",
      "liquid"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-309",
    "name": "Maybelline Expert Wear Eye Shadow Quad ",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 8.99,
    "originalPrice": 10,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/309/original/open-uri20171223-4-1mmpy02?1514063299",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Easy to use, lots to choose!Maybelline Expert Wear Eye Shadow  Quads have 4 coordinating shades with step by step application guide  makes shadow easier than ever. The eyeshadows glide on effortlessly with  superior smoothness and the velvet-tip applicator blends without  tugging or pulling. Safe for sensitive eyes and contact lens wearers,  ophthalmologist-tested.For best results sweep the brush 4 times:Apply base color. Sweep shade on lid. Contour crease and blend. Line around eye.",
    "features": [
      "eyeshadow"
    ],
    "brand": "maybelline"
  },
  {
    "id": "makeup-307",
    "name": "Maybelline Eyestudio Color Tattoo Concentrated Crayon",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 10.99,
    "originalPrice": 12,
    "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/307/original/open-uri20171223-4-5xfc8v?1514063298",
    "rating": 4.5,
    "reviews": 50,
    "inStock": true,
    "description": "Maybelline Eyestudio Color Tattoo Concentrated Crayons give you high-intensity color that looks vibrant all-day long.Features:Smooth, soft creamy finishPlayful intense colorsAll day tattoo tenacity. Playful color intensity. In an easy glide on crayon.",
    "features": [
      "eyeshadow"
    ],
    "brand": "maybelline"
  },
  {
    "id": "gen-1000",
    "name": "ProBook Slim Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 85,
    "originalPrice": 246,
    "image": "https://source.unsplash.com/600x600/?laptop&sig=1001"
  },
  {
    "id": "gen-1001",
    "name": "Gaming Beast X Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 188,
    "originalPrice": 257,
    "image": "https://source.unsplash.com/600x600/?computer&sig=1002"
  },
  {
    "id": "gen-1002",
    "name": "Ultrabook Air Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 70,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?macbook&sig=1003"
  },
  {
    "id": "gen-1003",
    "name": "Workstation Z Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 40,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?laptop&sig=1004"
  },
  {
    "id": "gen-1004",
    "name": "Student Mate Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 165,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?computer&sig=1005"
  },
  {
    "id": "gen-1005",
    "name": "ProBook Slim Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 121,
    "originalPrice": 255,
    "image": "https://source.unsplash.com/600x600/?macbook&sig=1006"
  },
  {
    "id": "gen-1006",
    "name": "Gaming Beast X Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 92,
    "originalPrice": 250,
    "image": "https://source.unsplash.com/600x600/?laptop&sig=1007"
  },
  {
    "id": "gen-1007",
    "name": "Ultrabook Air Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 34,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?computer&sig=1008"
  },
  {
    "id": "gen-1008",
    "name": "Workstation Z Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 138,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?macbook&sig=1009"
  },
  {
    "id": "gen-1009",
    "name": "Student Mate Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 153,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?laptop&sig=1010"
  },
  {
    "id": "gen-1010",
    "name": "ProBook Slim Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 124,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?computer&sig=1011"
  },
  {
    "id": "gen-1011",
    "name": "Gaming Beast X Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 174,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?macbook&sig=1012"
  },
  {
    "id": "gen-1012",
    "name": "Ultrabook Air Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 46,
    "originalPrice": 266,
    "image": "https://source.unsplash.com/600x600/?laptop&sig=1013"
  },
  {
    "id": "gen-1013",
    "name": "Workstation Z Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Computers & Laptops",
    "price": 132,
    "originalPrice": 255,
    "image": "https://source.unsplash.com/600x600/?computer&sig=1014"
  },
  {
    "id": "gen-1014",
    "name": "Galaxy Note Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 207,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?smartphone&sig=1015"
  },
  {
    "id": "gen-1015",
    "name": "Pixel Vision Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 37,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?iphone&sig=1016"
  },
  {
    "id": "gen-1016",
    "name": "iPhone X Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 106,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?android&sig=1017"
  },
  {
    "id": "gen-1017",
    "name": "OnePlus Nord Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 198,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?smartphone&sig=1018"
  },
  {
    "id": "gen-1018",
    "name": "Xiaomi Pad Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 186,
    "originalPrice": 235,
    "image": "https://source.unsplash.com/600x600/?iphone&sig=1019"
  },
  {
    "id": "gen-1019",
    "name": "Galaxy Note Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 55,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?android&sig=1020"
  },
  {
    "id": "gen-1020",
    "name": "Pixel Vision Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 35,
    "originalPrice": 235,
    "image": "https://source.unsplash.com/600x600/?smartphone&sig=1021"
  },
  {
    "id": "gen-1021",
    "name": "iPhone X Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 134,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?iphone&sig=1022"
  },
  {
    "id": "gen-1022",
    "name": "OnePlus Nord Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 64,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?android&sig=1023"
  },
  {
    "id": "gen-1023",
    "name": "Xiaomi Pad Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 82,
    "originalPrice": 242,
    "image": "https://source.unsplash.com/600x600/?smartphone&sig=1024"
  },
  {
    "id": "gen-1024",
    "name": "Galaxy Note Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 84,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?iphone&sig=1025"
  },
  {
    "id": "gen-1025",
    "name": "Pixel Vision Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 144,
    "originalPrice": 245,
    "image": "https://source.unsplash.com/600x600/?android&sig=1026"
  },
  {
    "id": "gen-1026",
    "name": "iPhone X Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 155,
    "originalPrice": 255,
    "image": "https://source.unsplash.com/600x600/?smartphone&sig=1027"
  },
  {
    "id": "gen-1027",
    "name": "OnePlus Nord Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 105,
    "originalPrice": 247,
    "image": "https://source.unsplash.com/600x600/?iphone&sig=1028"
  },
  {
    "id": "gen-1028",
    "name": "Xiaomi Pad Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 217,
    "originalPrice": 223,
    "image": "https://source.unsplash.com/600x600/?android&sig=1029"
  },
  {
    "id": "gen-1029",
    "name": "Galaxy Note Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 145,
    "originalPrice": 253,
    "image": "https://source.unsplash.com/600x600/?smartphone&sig=1030"
  },
  {
    "id": "gen-1030",
    "name": "Pixel Vision Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 183,
    "originalPrice": 222,
    "image": "https://source.unsplash.com/600x600/?iphone&sig=1031"
  },
  {
    "id": "gen-1031",
    "name": "iPhone X Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 167,
    "originalPrice": 261,
    "image": "https://source.unsplash.com/600x600/?android&sig=1032"
  },
  {
    "id": "gen-1032",
    "name": "OnePlus Nord Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 174,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?smartphone&sig=1033"
  },
  {
    "id": "gen-1033",
    "name": "Xiaomi Pad Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 114,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?iphone&sig=1034"
  },
  {
    "id": "gen-1034",
    "name": "Galaxy Note Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 139,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?android&sig=1035"
  },
  {
    "id": "gen-1035",
    "name": "Pixel Vision Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 77,
    "originalPrice": 256,
    "image": "https://source.unsplash.com/600x600/?smartphone&sig=1036"
  },
  {
    "id": "gen-1036",
    "name": "iPhone X Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 187,
    "originalPrice": 265,
    "image": "https://source.unsplash.com/600x600/?iphone&sig=1037"
  },
  {
    "id": "gen-1037",
    "name": "OnePlus Nord Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Mobile & Tablets",
    "price": 78,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?android&sig=1038"
  },
  {
    "id": "gen-1038",
    "name": "BassBooster Pro Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 151,
    "originalPrice": 251,
    "image": "https://source.unsplash.com/600x600/?headphones&sig=1039"
  },
  {
    "id": "gen-1039",
    "name": "NoiseCancel Elite Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 114,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?speaker&sig=1040"
  },
  {
    "id": "gen-1040",
    "name": "Wireless Buds Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 25,
    "originalPrice": 221,
    "image": "https://source.unsplash.com/600x600/?audio&sig=1041"
  },
  {
    "id": "gen-1041",
    "name": "Studio Monitor Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 107,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?headphones&sig=1042"
  },
  {
    "id": "gen-1042",
    "name": "Soundbar 300 Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 128,
    "originalPrice": 265,
    "image": "https://source.unsplash.com/600x600/?speaker&sig=1043"
  },
  {
    "id": "gen-1043",
    "name": "BassBooster Pro Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 110,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?audio&sig=1044"
  },
  {
    "id": "gen-1044",
    "name": "NoiseCancel Elite Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 146,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?headphones&sig=1045"
  },
  {
    "id": "gen-1045",
    "name": "Wireless Buds Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 143,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?speaker&sig=1046"
  },
  {
    "id": "gen-1046",
    "name": "Studio Monitor Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 145,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?audio&sig=1047"
  },
  {
    "id": "gen-1047",
    "name": "Soundbar 300 Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 58,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?headphones&sig=1048"
  },
  {
    "id": "gen-1048",
    "name": "BassBooster Pro Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 69,
    "originalPrice": 238,
    "image": "https://source.unsplash.com/600x600/?speaker&sig=1049"
  },
  {
    "id": "gen-1049",
    "name": "NoiseCancel Elite Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 204,
    "originalPrice": 235,
    "image": "https://source.unsplash.com/600x600/?audio&sig=1050"
  },
  {
    "id": "gen-1050",
    "name": "Wireless Buds Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 86,
    "originalPrice": 258,
    "image": "https://source.unsplash.com/600x600/?headphones&sig=1051"
  },
  {
    "id": "gen-1051",
    "name": "Studio Monitor Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 60,
    "originalPrice": 255,
    "image": "https://source.unsplash.com/600x600/?speaker&sig=1052"
  },
  {
    "id": "gen-1052",
    "name": "Soundbar 300 Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 30,
    "originalPrice": 251,
    "image": "https://source.unsplash.com/600x600/?audio&sig=1053"
  },
  {
    "id": "gen-1053",
    "name": "BassBooster Pro Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 115,
    "originalPrice": 223,
    "image": "https://source.unsplash.com/600x600/?headphones&sig=1054"
  },
  {
    "id": "gen-1054",
    "name": "NoiseCancel Elite Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 171,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?speaker&sig=1055"
  },
  {
    "id": "gen-1055",
    "name": "Wireless Buds Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 66,
    "originalPrice": 250,
    "image": "https://source.unsplash.com/600x600/?audio&sig=1056"
  },
  {
    "id": "gen-1056",
    "name": "Studio Monitor Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 112,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?headphones&sig=1057"
  },
  {
    "id": "gen-1057",
    "name": "Soundbar 300 Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 210,
    "originalPrice": 238,
    "image": "https://source.unsplash.com/600x600/?speaker&sig=1058"
  },
  {
    "id": "gen-1058",
    "name": "BassBooster Pro Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 120,
    "originalPrice": 256,
    "image": "https://source.unsplash.com/600x600/?audio&sig=1059"
  },
  {
    "id": "gen-1059",
    "name": "NoiseCancel Elite Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 112,
    "originalPrice": 233,
    "image": "https://source.unsplash.com/600x600/?headphones&sig=1060"
  },
  {
    "id": "gen-1060",
    "name": "Wireless Buds Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Audio & Sound",
    "price": 69,
    "originalPrice": 261,
    "image": "https://source.unsplash.com/600x600/?speaker&sig=1061"
  },
  {
    "id": "gen-1061",
    "name": "FitBand 4 Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 86,
    "originalPrice": 258,
    "image": "https://source.unsplash.com/600x600/?smartwatch&sig=1062"
  },
  {
    "id": "gen-1062",
    "name": "Watch Series 7 Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 34,
    "originalPrice": 224,
    "image": "https://source.unsplash.com/600x600/?fitness&sig=1063"
  },
  {
    "id": "gen-1063",
    "name": "Activity Tracker Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 88,
    "originalPrice": 252,
    "image": "https://source.unsplash.com/600x600/?tracker&sig=1064"
  },
  {
    "id": "gen-1064",
    "name": "Sleep Monitor Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 184,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?smartwatch&sig=1065"
  },
  {
    "id": "gen-1065",
    "name": "Smart Ring Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 121,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?fitness&sig=1066"
  },
  {
    "id": "gen-1066",
    "name": "FitBand 4 Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 108,
    "originalPrice": 262,
    "image": "https://source.unsplash.com/600x600/?tracker&sig=1067"
  },
  {
    "id": "gen-1067",
    "name": "Watch Series 7 Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 208,
    "originalPrice": 246,
    "image": "https://source.unsplash.com/600x600/?smartwatch&sig=1068"
  },
  {
    "id": "gen-1068",
    "name": "Activity Tracker Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 68,
    "originalPrice": 259,
    "image": "https://source.unsplash.com/600x600/?fitness&sig=1069"
  },
  {
    "id": "gen-1069",
    "name": "Sleep Monitor Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 42,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?tracker&sig=1070"
  },
  {
    "id": "gen-1070",
    "name": "Smart Ring Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 110,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?smartwatch&sig=1071"
  },
  {
    "id": "gen-1071",
    "name": "FitBand 4 Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 196,
    "originalPrice": 221,
    "image": "https://source.unsplash.com/600x600/?fitness&sig=1072"
  },
  {
    "id": "gen-1072",
    "name": "Watch Series 7 Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 101,
    "originalPrice": 252,
    "image": "https://source.unsplash.com/600x600/?tracker&sig=1073"
  },
  {
    "id": "gen-1073",
    "name": "Activity Tracker Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 20,
    "originalPrice": 233,
    "image": "https://source.unsplash.com/600x600/?smartwatch&sig=1074"
  },
  {
    "id": "gen-1074",
    "name": "Sleep Monitor Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 29,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?fitness&sig=1075"
  },
  {
    "id": "gen-1075",
    "name": "Smart Ring Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 179,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?tracker&sig=1076"
  },
  {
    "id": "gen-1076",
    "name": "FitBand 4 Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 121,
    "originalPrice": 269,
    "image": "https://source.unsplash.com/600x600/?smartwatch&sig=1077"
  },
  {
    "id": "gen-1077",
    "name": "Watch Series 7 Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 59,
    "originalPrice": 252,
    "image": "https://source.unsplash.com/600x600/?fitness&sig=1078"
  },
  {
    "id": "gen-1078",
    "name": "Activity Tracker Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 119,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?tracker&sig=1079"
  },
  {
    "id": "gen-1079",
    "name": "Sleep Monitor Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 159,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?smartwatch&sig=1080"
  },
  {
    "id": "gen-1080",
    "name": "Smart Ring Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 188,
    "originalPrice": 259,
    "image": "https://source.unsplash.com/600x600/?fitness&sig=1081"
  },
  {
    "id": "gen-1081",
    "name": "FitBand 4 Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 202,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?tracker&sig=1082"
  },
  {
    "id": "gen-1082",
    "name": "Watch Series 7 Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 210,
    "originalPrice": 255,
    "image": "https://source.unsplash.com/600x600/?smartwatch&sig=1083"
  },
  {
    "id": "gen-1083",
    "name": "Activity Tracker Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 185,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?fitness&sig=1084"
  },
  {
    "id": "gen-1084",
    "name": "Sleep Monitor Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Wearable Tech",
    "price": 121,
    "originalPrice": 263,
    "image": "https://source.unsplash.com/600x600/?tracker&sig=1085"
  },
  {
    "id": "gen-1085",
    "name": "DSLR Professional Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 21,
    "originalPrice": 263,
    "image": "https://source.unsplash.com/600x600/?camera&sig=1086"
  },
  {
    "id": "gen-1086",
    "name": "Action Cam 4K Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 72,
    "originalPrice": 256,
    "image": "https://source.unsplash.com/600x600/?dslr&sig=1087"
  },
  {
    "id": "gen-1087",
    "name": "Mirrorless Alpha Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 171,
    "originalPrice": 265,
    "image": "https://source.unsplash.com/600x600/?lens&sig=1088"
  },
  {
    "id": "gen-1088",
    "name": "Drone Flyer Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 91,
    "originalPrice": 267,
    "image": "https://source.unsplash.com/600x600/?camera&sig=1089"
  },
  {
    "id": "gen-1089",
    "name": "Portrait Lens Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 74,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?dslr&sig=1090"
  },
  {
    "id": "gen-1090",
    "name": "DSLR Professional Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 200,
    "originalPrice": 242,
    "image": "https://source.unsplash.com/600x600/?lens&sig=1091"
  },
  {
    "id": "gen-1091",
    "name": "Action Cam 4K Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 27,
    "originalPrice": 239,
    "image": "https://source.unsplash.com/600x600/?camera&sig=1092"
  },
  {
    "id": "gen-1092",
    "name": "Mirrorless Alpha Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 60,
    "originalPrice": 224,
    "image": "https://source.unsplash.com/600x600/?dslr&sig=1093"
  },
  {
    "id": "gen-1093",
    "name": "Drone Flyer Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 208,
    "originalPrice": 221,
    "image": "https://source.unsplash.com/600x600/?lens&sig=1094"
  },
  {
    "id": "gen-1094",
    "name": "Portrait Lens Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 214,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?camera&sig=1095"
  },
  {
    "id": "gen-1095",
    "name": "DSLR Professional Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 28,
    "originalPrice": 224,
    "image": "https://source.unsplash.com/600x600/?dslr&sig=1096"
  },
  {
    "id": "gen-1096",
    "name": "Action Cam 4K Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 127,
    "originalPrice": 245,
    "image": "https://source.unsplash.com/600x600/?lens&sig=1097"
  },
  {
    "id": "gen-1097",
    "name": "Mirrorless Alpha Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 43,
    "originalPrice": 221,
    "image": "https://source.unsplash.com/600x600/?camera&sig=1098"
  },
  {
    "id": "gen-1098",
    "name": "Drone Flyer Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 114,
    "originalPrice": 222,
    "image": "https://source.unsplash.com/600x600/?dslr&sig=1099"
  },
  {
    "id": "gen-1099",
    "name": "Portrait Lens Edition",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 91,
    "originalPrice": 263,
    "image": "https://source.unsplash.com/600x600/?lens&sig=1100"
  },
  {
    "id": "gen-1100",
    "name": "DSLR Professional Pro",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 136,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?camera&sig=1101"
  },
  {
    "id": "gen-1101",
    "name": "Action Cam 4K Max",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 150,
    "originalPrice": 253,
    "image": "https://source.unsplash.com/600x600/?dslr&sig=1102"
  },
  {
    "id": "gen-1102",
    "name": "Mirrorless Alpha Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 32,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?lens&sig=1103"
  },
  {
    "id": "gen-1103",
    "name": "Drone Flyer Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 150,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?camera&sig=1104"
  },
  {
    "id": "gen-1104",
    "name": "Portrait Lens Plus",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 48,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?dslr&sig=1105"
  },
  {
    "id": "gen-1105",
    "name": "DSLR Professional Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 60,
    "originalPrice": 227,
    "image": "https://source.unsplash.com/600x600/?lens&sig=1106"
  },
  {
    "id": "gen-1106",
    "name": "Action Cam 4K Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 48,
    "originalPrice": 250,
    "image": "https://source.unsplash.com/600x600/?camera&sig=1107"
  },
  {
    "id": "gen-1107",
    "name": "Mirrorless Alpha Lite",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 100,
    "originalPrice": 246,
    "image": "https://source.unsplash.com/600x600/?dslr&sig=1108"
  },
  {
    "id": "gen-1108",
    "name": "Drone Flyer Ultra",
    "category": "Electronics & Gadgets",
    "subcategory": "Cameras & Gear",
    "price": 115,
    "originalPrice": 262,
    "image": "https://source.unsplash.com/600x600/?lens&sig=1109"
  },
  {
    "id": "gen-1109",
    "name": "Classic Oxford Shirt Max",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 148,
    "originalPrice": 261,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1110"
  },
  {
    "id": "gen-1110",
    "name": "Slim Fit Jeans Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 68,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1111"
  },
  {
    "id": "gen-1111",
    "name": "Casual Polo Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 79,
    "originalPrice": 221,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1112"
  },
  {
    "id": "gen-1112",
    "name": "Bomber Jacket Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 66,
    "originalPrice": 250,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1113"
  },
  {
    "id": "gen-1113",
    "name": "Chino Pants Edition",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 85,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1114"
  },
  {
    "id": "gen-1114",
    "name": "Classic Oxford Shirt Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 180,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1115"
  },
  {
    "id": "gen-1115",
    "name": "Slim Fit Jeans Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 82,
    "originalPrice": 267,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1116"
  },
  {
    "id": "gen-1116",
    "name": "Casual Polo Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 55,
    "originalPrice": 246,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1117"
  },
  {
    "id": "gen-1117",
    "name": "Bomber Jacket Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 160,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1118"
  },
  {
    "id": "gen-1118",
    "name": "Chino Pants Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 214,
    "originalPrice": 254,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1119"
  },
  {
    "id": "gen-1119",
    "name": "Classic Oxford Shirt Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 158,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1120"
  },
  {
    "id": "gen-1120",
    "name": "Slim Fit Jeans Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 136,
    "originalPrice": 255,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1121"
  },
  {
    "id": "gen-1121",
    "name": "Casual Polo Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 91,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1122"
  },
  {
    "id": "gen-1122",
    "name": "Bomber Jacket Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 32,
    "originalPrice": 264,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1123"
  },
  {
    "id": "gen-1123",
    "name": "Chino Pants Max",
    "category": "Fashion & Apparel",
    "subcategory": "Men's Clothing",
    "price": 26,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?mens%20fashion&sig=1124"
  },
  {
    "id": "gen-1124",
    "name": "Floral Summer Dress Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 29,
    "originalPrice": 247,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1125"
  },
  {
    "id": "gen-1125",
    "name": "Elegant Blouse Edition",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 99,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1126"
  },
  {
    "id": "gen-1126",
    "name": "High Waist Jeans Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 176,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1127"
  },
  {
    "id": "gen-1127",
    "name": "Evening Gown Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 151,
    "originalPrice": 258,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1128"
  },
  {
    "id": "gen-1128",
    "name": "Casual Top Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 144,
    "originalPrice": 242,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1129"
  },
  {
    "id": "gen-1129",
    "name": "Floral Summer Dress Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 176,
    "originalPrice": 242,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1130"
  },
  {
    "id": "gen-1130",
    "name": "Elegant Blouse Max",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 95,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1131"
  },
  {
    "id": "gen-1131",
    "name": "High Waist Jeans Max",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 129,
    "originalPrice": 250,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1132"
  },
  {
    "id": "gen-1132",
    "name": "Evening Gown Max",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 207,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1133"
  },
  {
    "id": "gen-1133",
    "name": "Casual Top Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 69,
    "originalPrice": 235,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1134"
  },
  {
    "id": "gen-1134",
    "name": "Floral Summer Dress Max",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 102,
    "originalPrice": 242,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1135"
  },
  {
    "id": "gen-1135",
    "name": "Elegant Blouse Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 64,
    "originalPrice": 227,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1136"
  },
  {
    "id": "gen-1136",
    "name": "High Waist Jeans Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 85,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1137"
  },
  {
    "id": "gen-1137",
    "name": "Evening Gown Max",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 23,
    "originalPrice": 254,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1138"
  },
  {
    "id": "gen-1138",
    "name": "Casual Top Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 212,
    "originalPrice": 252,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1139"
  },
  {
    "id": "gen-1139",
    "name": "Floral Summer Dress Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 199,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1140"
  },
  {
    "id": "gen-1140",
    "name": "Elegant Blouse Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 195,
    "originalPrice": 233,
    "image": "https://source.unsplash.com/600x600/?womens%20fashion&sig=1141"
  },
  {
    "id": "gen-1141",
    "name": "High Waist Jeans Max",
    "category": "Fashion & Apparel",
    "subcategory": "Women's Clothing",
    "price": 52,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?dress&sig=1142"
  },
  {
    "id": "gen-1142",
    "name": "Running Zoom Max",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 37,
    "originalPrice": 251,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1143"
  },
  {
    "id": "gen-1143",
    "name": "Leather Loafers Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 59,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1144"
  },
  {
    "id": "gen-1144",
    "name": "Canvas Sneakers Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 216,
    "originalPrice": 240,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1145"
  },
  {
    "id": "gen-1145",
    "name": "Formal Derby Edition",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 68,
    "originalPrice": 244,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1146"
  },
  {
    "id": "gen-1146",
    "name": "Hiking Boots Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 104,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1147"
  },
  {
    "id": "gen-1147",
    "name": "Running Zoom Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 144,
    "originalPrice": 238,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1148"
  },
  {
    "id": "gen-1148",
    "name": "Leather Loafers Max",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 81,
    "originalPrice": 266,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1149"
  },
  {
    "id": "gen-1149",
    "name": "Canvas Sneakers Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 175,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1150"
  },
  {
    "id": "gen-1150",
    "name": "Formal Derby Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 149,
    "originalPrice": 224,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1151"
  },
  {
    "id": "gen-1151",
    "name": "Hiking Boots Max",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 162,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1152"
  },
  {
    "id": "gen-1152",
    "name": "Running Zoom Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 122,
    "originalPrice": 220,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1153"
  },
  {
    "id": "gen-1153",
    "name": "Leather Loafers Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 125,
    "originalPrice": 235,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1154"
  },
  {
    "id": "gen-1154",
    "name": "Canvas Sneakers Max",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 75,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1155"
  },
  {
    "id": "gen-1155",
    "name": "Formal Derby Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 211,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1156"
  },
  {
    "id": "gen-1156",
    "name": "Hiking Boots Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 158,
    "originalPrice": 244,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1157"
  },
  {
    "id": "gen-1157",
    "name": "Running Zoom Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 78,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1158"
  },
  {
    "id": "gen-1158",
    "name": "Leather Loafers Max",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 199,
    "originalPrice": 257,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1159"
  },
  {
    "id": "gen-1159",
    "name": "Canvas Sneakers Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 195,
    "originalPrice": 254,
    "image": "https://source.unsplash.com/600x600/?sneakers&sig=1160"
  },
  {
    "id": "gen-1160",
    "name": "Formal Derby Max",
    "category": "Fashion & Apparel",
    "subcategory": "Footwear",
    "price": 66,
    "originalPrice": 245,
    "image": "https://source.unsplash.com/600x600/?shoes&sig=1161"
  },
  {
    "id": "gen-1161",
    "name": "Leather Wallet Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 38,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?watch&sig=1162"
  },
  {
    "id": "gen-1162",
    "name": "Aviator Sunglasses Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 115,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?bag&sig=1163"
  },
  {
    "id": "gen-1163",
    "name": "Designer Handbag Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 122,
    "originalPrice": 220,
    "image": "https://source.unsplash.com/600x600/?sunglasses&sig=1164"
  },
  {
    "id": "gen-1164",
    "name": "Classic Watch Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 62,
    "originalPrice": 236,
    "image": "https://source.unsplash.com/600x600/?watch&sig=1165"
  },
  {
    "id": "gen-1165",
    "name": "Silk Scarf Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 89,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?bag&sig=1166"
  },
  {
    "id": "gen-1166",
    "name": "Leather Wallet Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 157,
    "originalPrice": 227,
    "image": "https://source.unsplash.com/600x600/?sunglasses&sig=1167"
  },
  {
    "id": "gen-1167",
    "name": "Aviator Sunglasses Max",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 150,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?watch&sig=1168"
  },
  {
    "id": "gen-1168",
    "name": "Designer Handbag Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 156,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?bag&sig=1169"
  },
  {
    "id": "gen-1169",
    "name": "Classic Watch Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 143,
    "originalPrice": 258,
    "image": "https://source.unsplash.com/600x600/?sunglasses&sig=1170"
  },
  {
    "id": "gen-1170",
    "name": "Silk Scarf Pro",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 167,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?watch&sig=1171"
  },
  {
    "id": "gen-1171",
    "name": "Leather Wallet Plus",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 178,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?bag&sig=1172"
  },
  {
    "id": "gen-1172",
    "name": "Aviator Sunglasses Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 20,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?sunglasses&sig=1173"
  },
  {
    "id": "gen-1173",
    "name": "Designer Handbag Ultra",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 83,
    "originalPrice": 265,
    "image": "https://source.unsplash.com/600x600/?watch&sig=1174"
  },
  {
    "id": "gen-1174",
    "name": "Classic Watch Lite",
    "category": "Fashion & Apparel",
    "subcategory": "Accessories",
    "price": 52,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?bag&sig=1175"
  },
  {
    "id": "gen-1175",
    "name": "Modern Vase Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 62,
    "originalPrice": 256,
    "image": "https://source.unsplash.com/600x600/?home%20decor&sig=1176"
  },
  {
    "id": "gen-1176",
    "name": "Wall Art Canvas Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 209,
    "originalPrice": 262,
    "image": "https://source.unsplash.com/600x600/?vase&sig=1177"
  },
  {
    "id": "gen-1177",
    "name": "Decorative Mirror Max",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 44,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?art&sig=1178"
  },
  {
    "id": "gen-1178",
    "name": "Table Lamp Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 133,
    "originalPrice": 265,
    "image": "https://source.unsplash.com/600x600/?home%20decor&sig=1179"
  },
  {
    "id": "gen-1179",
    "name": "Soft Rug Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 196,
    "originalPrice": 267,
    "image": "https://source.unsplash.com/600x600/?vase&sig=1180"
  },
  {
    "id": "gen-1180",
    "name": "Modern Vase Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 74,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?art&sig=1181"
  },
  {
    "id": "gen-1181",
    "name": "Wall Art Canvas Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 134,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?home%20decor&sig=1182"
  },
  {
    "id": "gen-1182",
    "name": "Decorative Mirror Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 160,
    "originalPrice": 269,
    "image": "https://source.unsplash.com/600x600/?vase&sig=1183"
  },
  {
    "id": "gen-1183",
    "name": "Table Lamp Max",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 61,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?art&sig=1184"
  },
  {
    "id": "gen-1184",
    "name": "Soft Rug Max",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 65,
    "originalPrice": 269,
    "image": "https://source.unsplash.com/600x600/?home%20decor&sig=1185"
  },
  {
    "id": "gen-1185",
    "name": "Modern Vase Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 185,
    "originalPrice": 250,
    "image": "https://source.unsplash.com/600x600/?vase&sig=1186"
  },
  {
    "id": "gen-1186",
    "name": "Wall Art Canvas Max",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 107,
    "originalPrice": 264,
    "image": "https://source.unsplash.com/600x600/?art&sig=1187"
  },
  {
    "id": "gen-1187",
    "name": "Decorative Mirror Max",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 84,
    "originalPrice": 256,
    "image": "https://source.unsplash.com/600x600/?home%20decor&sig=1188"
  },
  {
    "id": "gen-1188",
    "name": "Table Lamp Lite",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 196,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?vase&sig=1189"
  },
  {
    "id": "gen-1189",
    "name": "Soft Rug Max",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 64,
    "originalPrice": 236,
    "image": "https://source.unsplash.com/600x600/?art&sig=1190"
  },
  {
    "id": "gen-1190",
    "name": "Modern Vase Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 147,
    "originalPrice": 240,
    "image": "https://source.unsplash.com/600x600/?home%20decor&sig=1191"
  },
  {
    "id": "gen-1191",
    "name": "Wall Art Canvas Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 103,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?vase&sig=1192"
  },
  {
    "id": "gen-1192",
    "name": "Decorative Mirror Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 189,
    "originalPrice": 224,
    "image": "https://source.unsplash.com/600x600/?art&sig=1193"
  },
  {
    "id": "gen-1193",
    "name": "Table Lamp Lite",
    "category": "Home & Lifestyle",
    "subcategory": "Home Decor",
    "price": 87,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?home%20decor&sig=1194"
  },
  {
    "id": "gen-1194",
    "name": "Velvet Sofa Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 218,
    "originalPrice": 220,
    "image": "https://source.unsplash.com/600x600/?furniture&sig=1195"
  },
  {
    "id": "gen-1195",
    "name": "Wooden Dining Table Lite",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 24,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?sofa&sig=1196"
  },
  {
    "id": "gen-1196",
    "name": "Ergonomic Chair Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 23,
    "originalPrice": 261,
    "image": "https://source.unsplash.com/600x600/?chair&sig=1197"
  },
  {
    "id": "gen-1197",
    "name": "Bed Frame King Lite",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 42,
    "originalPrice": 258,
    "image": "https://source.unsplash.com/600x600/?furniture&sig=1198"
  },
  {
    "id": "gen-1198",
    "name": "Coffee Table Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 67,
    "originalPrice": 266,
    "image": "https://source.unsplash.com/600x600/?sofa&sig=1199"
  },
  {
    "id": "gen-1199",
    "name": "Velvet Sofa Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 158,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?chair&sig=1200"
  },
  {
    "id": "gen-1200",
    "name": "Wooden Dining Table Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 216,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?furniture&sig=1201"
  },
  {
    "id": "gen-1201",
    "name": "Ergonomic Chair Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 73,
    "originalPrice": 251,
    "image": "https://source.unsplash.com/600x600/?sofa&sig=1202"
  },
  {
    "id": "gen-1202",
    "name": "Bed Frame King Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 53,
    "originalPrice": 264,
    "image": "https://source.unsplash.com/600x600/?chair&sig=1203"
  },
  {
    "id": "gen-1203",
    "name": "Coffee Table Lite",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 217,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?furniture&sig=1204"
  },
  {
    "id": "gen-1204",
    "name": "Velvet Sofa Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 59,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?sofa&sig=1205"
  },
  {
    "id": "gen-1205",
    "name": "Wooden Dining Table Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 42,
    "originalPrice": 257,
    "image": "https://source.unsplash.com/600x600/?chair&sig=1206"
  },
  {
    "id": "gen-1206",
    "name": "Ergonomic Chair Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 155,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?furniture&sig=1207"
  },
  {
    "id": "gen-1207",
    "name": "Bed Frame King Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 153,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?sofa&sig=1208"
  },
  {
    "id": "gen-1208",
    "name": "Coffee Table Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 212,
    "originalPrice": 264,
    "image": "https://source.unsplash.com/600x600/?chair&sig=1209"
  },
  {
    "id": "gen-1209",
    "name": "Velvet Sofa Max",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 92,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?furniture&sig=1210"
  },
  {
    "id": "gen-1210",
    "name": "Wooden Dining Table Lite",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 197,
    "originalPrice": 261,
    "image": "https://source.unsplash.com/600x600/?sofa&sig=1211"
  },
  {
    "id": "gen-1211",
    "name": "Ergonomic Chair Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 105,
    "originalPrice": 259,
    "image": "https://source.unsplash.com/600x600/?chair&sig=1212"
  },
  {
    "id": "gen-1212",
    "name": "Bed Frame King Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Furniture",
    "price": 40,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?furniture&sig=1213"
  },
  {
    "id": "gen-1213",
    "name": "Cotton Sheet Set Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 202,
    "originalPrice": 244,
    "image": "https://source.unsplash.com/600x600/?bedding&sig=1214"
  },
  {
    "id": "gen-1214",
    "name": "Luxury Towel Bundle Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 45,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?towel&sig=1215"
  },
  {
    "id": "gen-1215",
    "name": "Memory Foam Pillow Max",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 83,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?bath&sig=1216"
  },
  {
    "id": "gen-1216",
    "name": "Bath Mat Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 55,
    "originalPrice": 267,
    "image": "https://source.unsplash.com/600x600/?bedding&sig=1217"
  },
  {
    "id": "gen-1217",
    "name": "Duvet Cover Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 84,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?towel&sig=1218"
  },
  {
    "id": "gen-1218",
    "name": "Cotton Sheet Set Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 107,
    "originalPrice": 239,
    "image": "https://source.unsplash.com/600x600/?bath&sig=1219"
  },
  {
    "id": "gen-1219",
    "name": "Luxury Towel Bundle Max",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 154,
    "originalPrice": 244,
    "image": "https://source.unsplash.com/600x600/?bedding&sig=1220"
  },
  {
    "id": "gen-1220",
    "name": "Memory Foam Pillow Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 169,
    "originalPrice": 253,
    "image": "https://source.unsplash.com/600x600/?towel&sig=1221"
  },
  {
    "id": "gen-1221",
    "name": "Bath Mat Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 98,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?bath&sig=1222"
  },
  {
    "id": "gen-1222",
    "name": "Duvet Cover Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 28,
    "originalPrice": 251,
    "image": "https://source.unsplash.com/600x600/?bedding&sig=1223"
  },
  {
    "id": "gen-1223",
    "name": "Cotton Sheet Set Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 48,
    "originalPrice": 233,
    "image": "https://source.unsplash.com/600x600/?towel&sig=1224"
  },
  {
    "id": "gen-1224",
    "name": "Luxury Towel Bundle Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 193,
    "originalPrice": 222,
    "image": "https://source.unsplash.com/600x600/?bath&sig=1225"
  },
  {
    "id": "gen-1225",
    "name": "Memory Foam Pillow Max",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 203,
    "originalPrice": 221,
    "image": "https://source.unsplash.com/600x600/?bedding&sig=1226"
  },
  {
    "id": "gen-1226",
    "name": "Bath Mat Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 207,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?towel&sig=1227"
  },
  {
    "id": "gen-1227",
    "name": "Duvet Cover Ultra",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 160,
    "originalPrice": 236,
    "image": "https://source.unsplash.com/600x600/?bath&sig=1228"
  },
  {
    "id": "gen-1228",
    "name": "Cotton Sheet Set Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 91,
    "originalPrice": 238,
    "image": "https://source.unsplash.com/600x600/?bedding&sig=1229"
  },
  {
    "id": "gen-1229",
    "name": "Luxury Towel Bundle Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 61,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?towel&sig=1230"
  },
  {
    "id": "gen-1230",
    "name": "Memory Foam Pillow Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 35,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?bath&sig=1231"
  },
  {
    "id": "gen-1231",
    "name": "Bath Mat Lite",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 156,
    "originalPrice": 259,
    "image": "https://source.unsplash.com/600x600/?bedding&sig=1232"
  },
  {
    "id": "gen-1232",
    "name": "Duvet Cover Edition",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 186,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?towel&sig=1233"
  },
  {
    "id": "gen-1233",
    "name": "Cotton Sheet Set Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 108,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?bath&sig=1234"
  },
  {
    "id": "gen-1234",
    "name": "Luxury Towel Bundle Max",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 199,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?bedding&sig=1235"
  },
  {
    "id": "gen-1235",
    "name": "Memory Foam Pillow Pro",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 181,
    "originalPrice": 245,
    "image": "https://source.unsplash.com/600x600/?towel&sig=1236"
  },
  {
    "id": "gen-1236",
    "name": "Bath Mat Plus",
    "category": "Home & Lifestyle",
    "subcategory": "Bed & Bath",
    "price": 211,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?bath&sig=1237"
  },
  {
    "id": "gen-1237",
    "name": "Hydrating Serum Pro",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 23,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1238"
  },
  {
    "id": "gen-1238",
    "name": "Night Cream Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 217,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?face&sig=1239"
  },
  {
    "id": "gen-1239",
    "name": "Vitamin C Tonic Plus",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 41,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1240"
  },
  {
    "id": "gen-1240",
    "name": "Face Cleanser Max",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 141,
    "originalPrice": 252,
    "image": "https://source.unsplash.com/600x600/?face&sig=1241"
  },
  {
    "id": "gen-1241",
    "name": "Sunscreen SPF 50 Pro",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 172,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1242"
  },
  {
    "id": "gen-1242",
    "name": "Hydrating Serum Ultra",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 203,
    "originalPrice": 236,
    "image": "https://source.unsplash.com/600x600/?face&sig=1243"
  },
  {
    "id": "gen-1243",
    "name": "Night Cream Plus",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 170,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1244"
  },
  {
    "id": "gen-1244",
    "name": "Vitamin C Tonic Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 84,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?face&sig=1245"
  },
  {
    "id": "gen-1245",
    "name": "Face Cleanser Plus",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 181,
    "originalPrice": 262,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1246"
  },
  {
    "id": "gen-1246",
    "name": "Sunscreen SPF 50 Lite",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 151,
    "originalPrice": 265,
    "image": "https://source.unsplash.com/600x600/?face&sig=1247"
  },
  {
    "id": "gen-1247",
    "name": "Hydrating Serum Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 203,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1248"
  },
  {
    "id": "gen-1248",
    "name": "Night Cream Max",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 87,
    "originalPrice": 259,
    "image": "https://source.unsplash.com/600x600/?face&sig=1249"
  },
  {
    "id": "gen-1249",
    "name": "Vitamin C Tonic Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 205,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1250"
  },
  {
    "id": "gen-1250",
    "name": "Face Cleanser Max",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 138,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?face&sig=1251"
  },
  {
    "id": "gen-1251",
    "name": "Sunscreen SPF 50 Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 166,
    "originalPrice": 253,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1252"
  },
  {
    "id": "gen-1252",
    "name": "Hydrating Serum Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 57,
    "originalPrice": 259,
    "image": "https://source.unsplash.com/600x600/?face&sig=1253"
  },
  {
    "id": "gen-1253",
    "name": "Night Cream Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 56,
    "originalPrice": 251,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1254"
  },
  {
    "id": "gen-1254",
    "name": "Vitamin C Tonic Lite",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 213,
    "originalPrice": 269,
    "image": "https://source.unsplash.com/600x600/?face&sig=1255"
  },
  {
    "id": "gen-1255",
    "name": "Face Cleanser Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 198,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1256"
  },
  {
    "id": "gen-1256",
    "name": "Sunscreen SPF 50 Edition",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 145,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?face&sig=1257"
  },
  {
    "id": "gen-1257",
    "name": "Hydrating Serum Pro",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 164,
    "originalPrice": 236,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1258"
  },
  {
    "id": "gen-1258",
    "name": "Night Cream Plus",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 155,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?face&sig=1259"
  },
  {
    "id": "gen-1259",
    "name": "Vitamin C Tonic Lite",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 157,
    "originalPrice": 252,
    "image": "https://source.unsplash.com/600x600/?skincare&sig=1260"
  },
  {
    "id": "gen-1260",
    "name": "Face Cleanser Lite",
    "category": "Health & Beauty",
    "subcategory": "Skincare",
    "price": 125,
    "originalPrice": 254,
    "image": "https://source.unsplash.com/600x600/?face&sig=1261"
  },
  {
    "id": "gen-1261",
    "name": "Matte Lipstick Edition",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 107,
    "originalPrice": 250,
    "image": "https://source.unsplash.com/600x600/?makeup&sig=1262"
  },
  {
    "id": "gen-1262",
    "name": "Eyeshadow Palette Edition",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 146,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?lipstick&sig=1263"
  },
  {
    "id": "gen-1263",
    "name": "Volume Mascara Plus",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 168,
    "originalPrice": 244,
    "image": "https://source.unsplash.com/600x600/?makeup&sig=1264"
  },
  {
    "id": "gen-1264",
    "name": "Foundation Liquid Max",
    "category": "Health & Beauty",
    "subcategory": "Makeup",
    "price": 44,
    "originalPrice": 247,
    "image": "https://source.unsplash.com/600x600/?lipstick&sig=1265"
  },
  {
    "id": "gen-1265",
    "name": "Argan Oil Shampoo Ultra",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 47,
    "originalPrice": 267,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1266"
  },
  {
    "id": "gen-1266",
    "name": "Body Wash Fresh Ultra",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 214,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1267"
  },
  {
    "id": "gen-1267",
    "name": "Electric Toothbrush Pro",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 192,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1268"
  },
  {
    "id": "gen-1268",
    "name": "Hair Dryer Plus",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 169,
    "originalPrice": 246,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1269"
  },
  {
    "id": "gen-1269",
    "name": "Shaving Kit Plus",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 56,
    "originalPrice": 240,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1270"
  },
  {
    "id": "gen-1270",
    "name": "Argan Oil Shampoo Edition",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 90,
    "originalPrice": 238,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1271"
  },
  {
    "id": "gen-1271",
    "name": "Body Wash Fresh Edition",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 187,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1272"
  },
  {
    "id": "gen-1272",
    "name": "Electric Toothbrush Max",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 202,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1273"
  },
  {
    "id": "gen-1273",
    "name": "Hair Dryer Lite",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 121,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1274"
  },
  {
    "id": "gen-1274",
    "name": "Shaving Kit Plus",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 79,
    "originalPrice": 227,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1275"
  },
  {
    "id": "gen-1275",
    "name": "Argan Oil Shampoo Edition",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 114,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1276"
  },
  {
    "id": "gen-1276",
    "name": "Body Wash Fresh Plus",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 156,
    "originalPrice": 256,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1277"
  },
  {
    "id": "gen-1277",
    "name": "Electric Toothbrush Edition",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 159,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1278"
  },
  {
    "id": "gen-1278",
    "name": "Hair Dryer Ultra",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 155,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1279"
  },
  {
    "id": "gen-1279",
    "name": "Shaving Kit Plus",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 142,
    "originalPrice": 233,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1280"
  },
  {
    "id": "gen-1280",
    "name": "Argan Oil Shampoo Pro",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 46,
    "originalPrice": 244,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1281"
  },
  {
    "id": "gen-1281",
    "name": "Body Wash Fresh Pro",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 188,
    "originalPrice": 236,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1282"
  },
  {
    "id": "gen-1282",
    "name": "Electric Toothbrush Pro",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 24,
    "originalPrice": 235,
    "image": "https://source.unsplash.com/600x600/?soap&sig=1283"
  },
  {
    "id": "gen-1283",
    "name": "Hair Dryer Lite",
    "category": "Health & Beauty",
    "subcategory": "Personal Care",
    "price": 204,
    "originalPrice": 252,
    "image": "https://source.unsplash.com/600x600/?shampoo&sig=1284"
  },
  {
    "id": "gen-1284",
    "name": "Yoga Mat Plus",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 83,
    "originalPrice": 264,
    "image": "https://source.unsplash.com/600x600/?wellness&sig=1285"
  },
  {
    "id": "gen-1285",
    "name": "Multivitamin Daily Ultra",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 116,
    "originalPrice": 221,
    "image": "https://source.unsplash.com/600x600/?vitamin&sig=1286"
  },
  {
    "id": "gen-1286",
    "name": "Protein Powder Lite",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 63,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?yoga&sig=1287"
  },
  {
    "id": "gen-1287",
    "name": "Resistance Bands Lite",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 105,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?wellness&sig=1288"
  },
  {
    "id": "gen-1288",
    "name": "Meditation Cushion Edition",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 134,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?vitamin&sig=1289"
  },
  {
    "id": "gen-1289",
    "name": "Yoga Mat Ultra",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 175,
    "originalPrice": 261,
    "image": "https://source.unsplash.com/600x600/?yoga&sig=1290"
  },
  {
    "id": "gen-1290",
    "name": "Multivitamin Daily Max",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 198,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?wellness&sig=1291"
  },
  {
    "id": "gen-1291",
    "name": "Protein Powder Pro",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 77,
    "originalPrice": 242,
    "image": "https://source.unsplash.com/600x600/?vitamin&sig=1292"
  },
  {
    "id": "gen-1292",
    "name": "Resistance Bands Ultra",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 33,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?yoga&sig=1293"
  },
  {
    "id": "gen-1293",
    "name": "Meditation Cushion Max",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 127,
    "originalPrice": 267,
    "image": "https://source.unsplash.com/600x600/?wellness&sig=1294"
  },
  {
    "id": "gen-1294",
    "name": "Yoga Mat Ultra",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 54,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?vitamin&sig=1295"
  },
  {
    "id": "gen-1295",
    "name": "Multivitamin Daily Edition",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 107,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?yoga&sig=1296"
  },
  {
    "id": "gen-1296",
    "name": "Protein Powder Edition",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 54,
    "originalPrice": 233,
    "image": "https://source.unsplash.com/600x600/?wellness&sig=1297"
  },
  {
    "id": "gen-1297",
    "name": "Resistance Bands Edition",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 104,
    "originalPrice": 233,
    "image": "https://source.unsplash.com/600x600/?vitamin&sig=1298"
  },
  {
    "id": "gen-1298",
    "name": "Meditation Cushion Pro",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 215,
    "originalPrice": 235,
    "image": "https://source.unsplash.com/600x600/?yoga&sig=1299"
  },
  {
    "id": "gen-1299",
    "name": "Yoga Mat Edition",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 114,
    "originalPrice": 227,
    "image": "https://source.unsplash.com/600x600/?wellness&sig=1300"
  },
  {
    "id": "gen-1300",
    "name": "Multivitamin Daily Plus",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 126,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?vitamin&sig=1301"
  },
  {
    "id": "gen-1301",
    "name": "Protein Powder Pro",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 76,
    "originalPrice": 254,
    "image": "https://source.unsplash.com/600x600/?yoga&sig=1302"
  },
  {
    "id": "gen-1302",
    "name": "Resistance Bands Ultra",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 172,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?wellness&sig=1303"
  },
  {
    "id": "gen-1303",
    "name": "Meditation Cushion Lite",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 93,
    "originalPrice": 263,
    "image": "https://source.unsplash.com/600x600/?vitamin&sig=1304"
  },
  {
    "id": "gen-1304",
    "name": "Yoga Mat Pro",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 153,
    "originalPrice": 263,
    "image": "https://source.unsplash.com/600x600/?yoga&sig=1305"
  },
  {
    "id": "gen-1305",
    "name": "Multivitamin Daily Plus",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 53,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?wellness&sig=1306"
  },
  {
    "id": "gen-1306",
    "name": "Protein Powder Pro",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 102,
    "originalPrice": 238,
    "image": "https://source.unsplash.com/600x600/?vitamin&sig=1307"
  },
  {
    "id": "gen-1307",
    "name": "Resistance Bands Pro",
    "category": "Health & Beauty",
    "subcategory": "Wellness",
    "price": 165,
    "originalPrice": 246,
    "image": "https://source.unsplash.com/600x600/?yoga&sig=1308"
  },
  {
    "id": "gen-1308",
    "name": "Building Blocks Edition",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 66,
    "originalPrice": 223,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1309"
  },
  {
    "id": "gen-1309",
    "name": "Board Game Classic Plus",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 73,
    "originalPrice": 256,
    "image": "https://source.unsplash.com/600x600/?game&sig=1310"
  },
  {
    "id": "gen-1310",
    "name": "Plush Teddy Ultra",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 46,
    "originalPrice": 269,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1311"
  },
  {
    "id": "gen-1311",
    "name": "Remote Control Car Edition",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 30,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?game&sig=1312"
  },
  {
    "id": "gen-1312",
    "name": "Puzzle 1000pc Max",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 173,
    "originalPrice": 222,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1313"
  },
  {
    "id": "gen-1313",
    "name": "Building Blocks Ultra",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 99,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?game&sig=1314"
  },
  {
    "id": "gen-1314",
    "name": "Board Game Classic Ultra",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 101,
    "originalPrice": 242,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1315"
  },
  {
    "id": "gen-1315",
    "name": "Plush Teddy Ultra",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 181,
    "originalPrice": 257,
    "image": "https://source.unsplash.com/600x600/?game&sig=1316"
  },
  {
    "id": "gen-1316",
    "name": "Remote Control Car Edition",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 213,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1317"
  },
  {
    "id": "gen-1317",
    "name": "Puzzle 1000pc Pro",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 39,
    "originalPrice": 251,
    "image": "https://source.unsplash.com/600x600/?game&sig=1318"
  },
  {
    "id": "gen-1318",
    "name": "Building Blocks Max",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 53,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1319"
  },
  {
    "id": "gen-1319",
    "name": "Board Game Classic Edition",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 197,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?game&sig=1320"
  },
  {
    "id": "gen-1320",
    "name": "Plush Teddy Lite",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 176,
    "originalPrice": 229,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1321"
  },
  {
    "id": "gen-1321",
    "name": "Remote Control Car Edition",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 169,
    "originalPrice": 230,
    "image": "https://source.unsplash.com/600x600/?game&sig=1322"
  },
  {
    "id": "gen-1322",
    "name": "Puzzle 1000pc Max",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 49,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1323"
  },
  {
    "id": "gen-1323",
    "name": "Building Blocks Ultra",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 195,
    "originalPrice": 231,
    "image": "https://source.unsplash.com/600x600/?game&sig=1324"
  },
  {
    "id": "gen-1324",
    "name": "Board Game Classic Ultra",
    "category": "Family & Hobby",
    "subcategory": "Toys & Games",
    "price": 142,
    "originalPrice": 240,
    "image": "https://source.unsplash.com/600x600/?toy&sig=1325"
  },
  {
    "id": "gen-1325",
    "name": "Leather Notebook Lite",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 181,
    "originalPrice": 262,
    "image": "https://source.unsplash.com/600x600/?book&sig=1326"
  },
  {
    "id": "gen-1326",
    "name": "Fountain Pen Edition",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 166,
    "originalPrice": 220,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1327"
  },
  {
    "id": "gen-1327",
    "name": "Bestseller Novel Ultra",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 97,
    "originalPrice": 251,
    "image": "https://source.unsplash.com/600x600/?book&sig=1328"
  },
  {
    "id": "gen-1328",
    "name": "Art Sketchbook Edition",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 89,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1329"
  },
  {
    "id": "gen-1329",
    "name": "Desk Organizer Max",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 85,
    "originalPrice": 264,
    "image": "https://source.unsplash.com/600x600/?book&sig=1330"
  },
  {
    "id": "gen-1330",
    "name": "Leather Notebook Edition",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 111,
    "originalPrice": 258,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1331"
  },
  {
    "id": "gen-1331",
    "name": "Fountain Pen Ultra",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 74,
    "originalPrice": 227,
    "image": "https://source.unsplash.com/600x600/?book&sig=1332"
  },
  {
    "id": "gen-1332",
    "name": "Bestseller Novel Max",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 109,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1333"
  },
  {
    "id": "gen-1333",
    "name": "Art Sketchbook Pro",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 72,
    "originalPrice": 245,
    "image": "https://source.unsplash.com/600x600/?book&sig=1334"
  },
  {
    "id": "gen-1334",
    "name": "Desk Organizer Lite",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 53,
    "originalPrice": 260,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1335"
  },
  {
    "id": "gen-1335",
    "name": "Leather Notebook Pro",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 68,
    "originalPrice": 247,
    "image": "https://source.unsplash.com/600x600/?book&sig=1336"
  },
  {
    "id": "gen-1336",
    "name": "Fountain Pen Plus",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 138,
    "originalPrice": 252,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1337"
  },
  {
    "id": "gen-1337",
    "name": "Bestseller Novel Plus",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 101,
    "originalPrice": 258,
    "image": "https://source.unsplash.com/600x600/?book&sig=1338"
  },
  {
    "id": "gen-1338",
    "name": "Art Sketchbook Max",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 213,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1339"
  },
  {
    "id": "gen-1339",
    "name": "Desk Organizer Pro",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 166,
    "originalPrice": 267,
    "image": "https://source.unsplash.com/600x600/?book&sig=1340"
  },
  {
    "id": "gen-1340",
    "name": "Leather Notebook Max",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 130,
    "originalPrice": 249,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1341"
  },
  {
    "id": "gen-1341",
    "name": "Fountain Pen Edition",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 170,
    "originalPrice": 245,
    "image": "https://source.unsplash.com/600x600/?book&sig=1342"
  },
  {
    "id": "gen-1342",
    "name": "Bestseller Novel Max",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 180,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1343"
  },
  {
    "id": "gen-1343",
    "name": "Art Sketchbook Plus",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 124,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?book&sig=1344"
  },
  {
    "id": "gen-1344",
    "name": "Desk Organizer Max",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 140,
    "originalPrice": 245,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1345"
  },
  {
    "id": "gen-1345",
    "name": "Leather Notebook Pro",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 33,
    "originalPrice": 226,
    "image": "https://source.unsplash.com/600x600/?book&sig=1346"
  },
  {
    "id": "gen-1346",
    "name": "Fountain Pen Pro",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 22,
    "originalPrice": 236,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1347"
  },
  {
    "id": "gen-1347",
    "name": "Bestseller Novel Lite",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 198,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?book&sig=1348"
  },
  {
    "id": "gen-1348",
    "name": "Art Sketchbook Pro",
    "category": "Family & Hobby",
    "subcategory": "Books & Stationery",
    "price": 197,
    "originalPrice": 225,
    "image": "https://source.unsplash.com/600x600/?notebook&sig=1349"
  },
  {
    "id": "gen-1349",
    "name": "Camping Tent Edition",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 152,
    "originalPrice": 224,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1350"
  },
  {
    "id": "gen-1350",
    "name": "Yoga Ball Plus",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 66,
    "originalPrice": 267,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1351"
  },
  {
    "id": "gen-1351",
    "name": "Tennis Racket Lite",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 164,
    "originalPrice": 268,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1352"
  },
  {
    "id": "gen-1352",
    "name": "Soccer Ball Pro",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 53,
    "originalPrice": 263,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1353"
  },
  {
    "id": "gen-1353",
    "name": "Hiking Backpack Ultra",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 178,
    "originalPrice": 255,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1354"
  },
  {
    "id": "gen-1354",
    "name": "Camping Tent Max",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 130,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1355"
  },
  {
    "id": "gen-1355",
    "name": "Yoga Ball Edition",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 79,
    "originalPrice": 239,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1356"
  },
  {
    "id": "gen-1356",
    "name": "Tennis Racket Ultra",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 193,
    "originalPrice": 227,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1357"
  },
  {
    "id": "gen-1357",
    "name": "Soccer Ball Edition",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 195,
    "originalPrice": 263,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1358"
  },
  {
    "id": "gen-1358",
    "name": "Hiking Backpack Lite",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 74,
    "originalPrice": 234,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1359"
  },
  {
    "id": "gen-1359",
    "name": "Camping Tent Ultra",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 62,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1360"
  },
  {
    "id": "gen-1360",
    "name": "Yoga Ball Edition",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 199,
    "originalPrice": 243,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1361"
  },
  {
    "id": "gen-1361",
    "name": "Tennis Racket Max",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 121,
    "originalPrice": 239,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1362"
  },
  {
    "id": "gen-1362",
    "name": "Soccer Ball Ultra",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 183,
    "originalPrice": 241,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1363"
  },
  {
    "id": "gen-1363",
    "name": "Hiking Backpack Max",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 98,
    "originalPrice": 232,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1364"
  },
  {
    "id": "gen-1364",
    "name": "Camping Tent Edition",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 114,
    "originalPrice": 253,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1365"
  },
  {
    "id": "gen-1365",
    "name": "Yoga Ball Plus",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 160,
    "originalPrice": 247,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1366"
  },
  {
    "id": "gen-1366",
    "name": "Tennis Racket Plus",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 101,
    "originalPrice": 247,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1367"
  },
  {
    "id": "gen-1367",
    "name": "Soccer Ball Pro",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 23,
    "originalPrice": 263,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1368"
  },
  {
    "id": "gen-1368",
    "name": "Hiking Backpack Max",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 21,
    "originalPrice": 258,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1369"
  },
  {
    "id": "gen-1369",
    "name": "Camping Tent Max",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 202,
    "originalPrice": 248,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1370"
  },
  {
    "id": "gen-1370",
    "name": "Yoga Ball Lite",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 146,
    "originalPrice": 237,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1371"
  },
  {
    "id": "gen-1371",
    "name": "Tennis Racket Max",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 96,
    "originalPrice": 228,
    "image": "https://source.unsplash.com/600x600/?sports&sig=1372"
  },
  {
    "id": "gen-1372",
    "name": "Soccer Ball Edition",
    "category": "Family & Hobby",
    "subcategory": "Sports & Outdoors",
    "price": 160,
    "originalPrice": 250,
    "image": "https://source.unsplash.com/600x600/?camping&sig=1373"
  }
];

// Helper functions
export function getProductsByCategory(category: string): Product[] {
  const categoryName = category.replace(/-/g, ' ').replace(/and/g, '&');
  return products.filter(p =>
    p.category.toLowerCase() === categoryName.toLowerCase()
  );
}

export function getProductsBySubcategory(category: string, subcategory: string): Product[] {
  const categoryName = category.replace(/-/g, ' ').replace(/and/g, '&');
  const subcategoryName = subcategory.replace(/-/g, ' ').replace(/and/g, '&');
  return products.filter(p =>
    p.category.toLowerCase() === categoryName.toLowerCase() &&
    p.subcategory.toLowerCase() === subcategoryName.toLowerCase()
  );
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  products.forEach(p => categories.add(p.category));
  return Array.from(categories);
}

// Get total product count
export function getTotalProductCount(): number {
  return products.length;
}

// Get product count by category
export function getProductCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = {};
  products.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
}

// Get product count by subcategory  
export function getProductCountBySubcategory(): Record<string, Record<string, number>> {
  const counts: Record<string, Record<string, number>> = {};
  products.forEach(p => {
    if (!counts[p.category]) {
      counts[p.category] = {};
    }
    counts[p.category][p.subcategory] = (counts[p.category][p.subcategory] || 0) + 1;
  });
  return counts;
}
