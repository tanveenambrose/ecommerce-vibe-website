// Comprehensive product database with 40+ products per subcategory
export interface Product {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    description: string;
    features: string[];
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

// Generate product variations
function generateProducts(): Product[] {
    const products: Product[] = [];
    let productId = 1;

    // ELECTRONICS & GADGETS
    const electronicsSubcategories = [
        { name: 'Computers & Laptops', items: ['Gaming Laptop', 'Ultrabook', 'Desktop PC', 'MacBook', 'Chromebook', 'Workstation', '2-in-1 Laptop', 'Mini PC', 'All-in-One PC', 'Tablet PC'] },
        { name: 'Mobile & Tablets', items: ['Smartphone', 'iPhone', 'Android Phone', 'iPad', 'Android Tablet', 'E-Reader', '5G Phone', 'Foldable Phone', 'Budget Phone', 'Flagship Phone'] },
        { name: 'Audio & Sound', items: ['Headphones', 'Earbuds', 'Speaker', 'Soundbar', 'Amplifier', 'Microphone', 'DJ Equipment', 'Studio Monitor', 'Portable Speaker', 'Home Theater'] },
        { name: 'Wearable Tech', items: ['Smartwatch', 'Fitness Tracker', 'Smart Ring', 'VR Headset', 'AR Glasses', 'Health Monitor', 'GPS Watch', 'Kids Smartwatch', 'Hybrid Watch', 'Sport Watch'] },
        { name: 'Cameras & Gear', items: ['DSLR Camera', 'Mirrorless Camera', 'Action Camera', 'Drone', 'Lens', 'Tripod', 'Camera Bag', 'Flash', 'Gimbal', 'Memory Card'] }
    ];

    electronicsSubcategories.forEach(subcat => {
        for (let i = 0; i < 45; i++) {
            const baseItem = subcat.items[i % subcat.items.length];

            let brand = brands.electronics[i % brands.electronics.length];

            // Generic brand logic for all subcategories
            const brandMapping = subCategoryBrands[subcat.name];
            if (brandMapping) {
                const allBrands = brandMapping.flatMap(g => g.brands);
                brand = allBrands[i % allBrands.length];

                // Specific adjustments
                if (baseItem === 'MacBook' || baseItem === 'iPhone' || baseItem === 'iPad') brand = 'Apple';
                if (baseItem === 'Galaxy' || baseItem === 'Android Phone') brand = 'Samsung';
                if (baseItem === 'Chromebook') brand = ['Acer', 'HP', 'Lenovo'][i % 3];
            }

            const basePrice = 99 + (i * 47) + Math.floor(Math.random() * 200);
            const hasDiscount = i % 3 === 0;

            // Generate Unsplash image URL with specific product keyword
            const imageKeyword = baseItem.toLowerCase().replace(/\s+/g, '-');
            const imageUrl = `https://source.unsplash.com/400x400/?${imageKeyword},technology,product`;

            // More meaningful descriptions
            const descriptions: Record<string, string> = {
                'Gaming Laptop': 'High-performance gaming laptop with advanced cooling and RGB lighting',
                'Ultrabook': 'Slim and lightweight laptop perfect for professionals on the go',
                'Desktop PC': 'Powerful desktop computer for work and entertainment',
                'MacBook': 'Premium Apple laptop with M-series chip and stunning display',
                'Smartphone': 'Latest smartphone with advanced camera and 5G connectivity',
                'iPhone': 'Apple iPhone with A-series chip and iOS ecosystem',
                'iPad': 'Versatile tablet perfect for creativity and productivity',
                'Headphones': 'Premium over-ear headphones with noise cancellation',
                'Earbuds': 'True wireless earbuds with crystal clear sound',
                'Speaker': 'Portable Bluetooth speaker with 360-degree sound',
                'Smartwatch': 'Feature-rich smartwatch with health tracking',
                'Fitness Tracker': 'Advanced fitness band with heart rate monitoring',
                'VR Headset': 'Immersive virtual reality headset for gaming',
                'DSLR Camera': 'Professional DSLR camera with high resolution',
                'Drone': 'Advanced drone with 4K camera and GPS',
                'default': `Premium ${baseItem.toLowerCase()} with cutting-edge technology`
            };

            const description = descriptions[baseItem] || descriptions['default'];

            products.push({
                id: `elec-${productId++}`,
                name: `${brand} ${baseItem} ${String.fromCharCode(65 + (i % 26))}${i + 1}`,
                category: 'Electronics & Gadgets',
                subcategory: subcat.name,
                price: hasDiscount ? Math.floor(basePrice * 0.85) : basePrice,
                originalPrice: hasDiscount ? basePrice : undefined,
                image: imageUrl,
                rating: Number((3.5 + (Math.random() * 1.5)).toFixed(1)),
                reviews: 50 + Math.floor(Math.random() * 2000),
                inStock: i % 7 !== 0,
                description: description,
                features: [
                    `Latest ${brand} Technology`,
                    'High Performance Processor',
                    'Energy Efficient Design',
                    'Premium Build Quality'
                ],
                brand
            });
        }
    });

    // FASHION & APPAREL
    const fashionSubcategories = [
        { name: "Men's Clothing", items: ['Shirt', 'T-Shirt', 'Jeans', 'Pants', 'Jacket', 'Sweater', 'Hoodie', 'Blazer', 'Suit', 'Shorts'] },
        { name: "Women's Clothing", items: ['Dress', 'Blouse', 'Skirt', 'Leggings', 'Top', 'Cardigan', 'Jumpsuit', 'Coat', 'Activewear', 'Lingerie'] },
        { name: 'Footwear', items: ['Sneakers', 'Boots', 'Sandals', 'Heels', 'Loafers', 'Oxfords', 'Slippers', 'Athletic Shoes', 'Formal Shoes', 'Casual Shoes'] },
        { name: 'Accessories', items: ['Watch', 'Sunglasses', 'Belt', 'Wallet', 'Handbag', 'Backpack', 'Scarf', 'Hat', 'Jewelry', 'Tie'] }
    ];

    fashionSubcategories.forEach(subcat => {
        for (let i = 0; i < 45; i++) {
            const baseItem = subcat.items[i % subcat.items.length];
            let brand = brands.fashion[i % brands.fashion.length];
            const brandMapping = subCategoryBrands[subcat.name];
            if (brandMapping) {
                const allBrands = brandMapping.flatMap(g => g.brands);
                brand = allBrands[i % allBrands.length];
            }
            const basePrice = 29 + (i * 23) + Math.floor(Math.random() * 150);
            const hasDiscount = i % 4 === 0;

            const imageKeyword = baseItem.toLowerCase().replace(/\s+/g, '-');
            const imageUrl = `https://source.unsplash.com/400x400/?${imageKeyword},fashion,clothing`;

            products.push({
                id: `fash-${productId++}`,
                name: `${brand} ${baseItem} Collection ${String.fromCharCode(65 + (i % 26))}`,
                category: 'Fashion & Apparel',
                subcategory: subcat.name,
                price: hasDiscount ? Math.floor(basePrice * 0.8) : basePrice,
                originalPrice: hasDiscount ? basePrice : undefined,
                image: imageUrl,
                rating: Number((3.8 + (Math.random() * 1.2)).toFixed(1)),
                reviews: 100 + Math.floor(Math.random() * 1500),
                inStock: i % 8 !== 0,
                description: `Stylish ${brand} ${baseItem.toLowerCase()} with premium quality and modern design`,
                features: [
                    'Premium Quality Fabric',
                    'Contemporary Design',
                    'Comfortable All-Day Fit',
                    'Versatile for Any Occasion'
                ],
                brand
            });
        }
    });

    // HOME & LIFESTYLE
    const homeSubcategories = [
        { name: 'Home Decor', items: ['Wall Art', 'Vase', 'Lamp', 'Mirror', 'Clock', 'Candle', 'Rug', 'Curtain', 'Plant Stand', 'Sculpture'] },
        { name: 'Furniture', items: ['Sofa', 'Chair', 'Table', 'Bed', 'Desk', 'Shelf', 'Cabinet', 'Dresser', 'Ottoman', 'Bench'] },
        { name: 'Kitchen & Dining', items: ['Cookware Set', 'Knife Set', 'Dinnerware', 'Glassware', 'Blender', 'Mixer', 'Coffee Maker', 'Toaster', 'Air Fryer', 'Instant Pot'] },
        { name: 'Bed & Bath', items: ['Bedding Set', 'Pillow', 'Comforter', 'Towel Set', 'Bath Mat', 'Shower Curtain', 'Bathrobe', 'Duvet', 'Mattress Pad', 'Blanket'] }
    ];

    homeSubcategories.forEach(subcat => {
        for (let i = 0; i < 45; i++) {
            const baseItem = subcat.items[i % subcat.items.length];
            let brand = brands.home[i % brands.home.length];
            const brandMapping = subCategoryBrands[subcat.name];
            if (brandMapping) {
                const allBrands = brandMapping.flatMap(g => g.brands);
                brand = allBrands[i % allBrands.length];
            }
            const basePrice = 49 + (i * 31) + Math.floor(Math.random() * 250);
            const hasDiscount = i % 5 === 0;

            const imageKeyword = baseItem.toLowerCase().replace(/\s+/g, '-');
            const imageUrl = `https://source.unsplash.com/400x400/?${imageKeyword},home,interior`;

            products.push({
                id: `home-${productId++}`,
                name: `${brand} ${baseItem} Series ${i + 1}`,
                category: 'Home & Lifestyle',
                subcategory: subcat.name,
                price: hasDiscount ? Math.floor(basePrice * 0.75) : basePrice,
                originalPrice: hasDiscount ? basePrice : undefined,
                image: imageUrl,
                rating: Number((4.0 + (Math.random() * 1.0)).toFixed(1)),
                reviews: 75 + Math.floor(Math.random() * 1200),
                inStock: i % 6 !== 0,
                description: `${brand} ${baseItem.toLowerCase()} combining style and functionality for modern homes`,
                features: [
                    'Durable Construction',
                    'Modern Aesthetic Design',
                    'Easy to Assemble',
                    'Premium Quality Materials'
                ],
                brand
            });
        }
    });

    // HEALTH & BEAUTY
    const beautySubcategories = [
        { name: 'Skincare', items: ['Moisturizer', 'Serum', 'Cleanser', 'Toner', 'Sunscreen', 'Face Mask', 'Eye Cream', 'Exfoliator', 'Night Cream', 'Essence'] },
        { name: 'Makeup', items: ['Foundation', 'Lipstick', 'Eyeshadow', 'Mascara', 'Blush', 'Concealer', 'Eyeliner', 'Bronzer', 'Highlighter', 'Primer'] },
        { name: 'Personal Care', items: ['Shampoo', 'Conditioner', 'Body Wash', 'Lotion', 'Deodorant', 'Perfume', 'Hair Oil', 'Body Scrub', 'Hand Cream', 'Foot Cream'] },
        { name: 'Wellness', items: ['Multivitamin', 'Protein Powder', 'Supplements', 'Essential Oils', 'Massage Gun', 'Yoga Mat', 'Resistance Bands', 'Foam Roller', 'Dumbbells', 'Fitness Tracker'] }
    ];

    beautySubcategories.forEach(subcat => {
        for (let i = 0; i < 45; i++) {
            const baseItem = subcat.items[i % subcat.items.length];
            let brand = brands.beauty[i % brands.beauty.length];
            const brandMapping = subCategoryBrands[subcat.name];
            if (brandMapping) {
                const allBrands = brandMapping.flatMap(g => g.brands);
                brand = allBrands[i % allBrands.length];
            }
            const basePrice = 19 + (i * 17) + Math.floor(Math.random() * 100);
            const hasDiscount = i % 4 === 0;

            const imageKeyword = baseItem.toLowerCase().replace(/\s+/g, '-');
            const imageUrl = `https://source.unsplash.com/400x400/?${imageKeyword},beauty,cosmetics`;

            products.push({
                id: `beauty-${productId++}`,
                name: `${brand} ${baseItem} Pro ${String.fromCharCode(65 + (i % 26))}`,
                category: 'Health & Beauty',
                subcategory: subcat.name,
                price: hasDiscount ? Math.floor(basePrice * 0.7) : basePrice,
                originalPrice: hasDiscount ? basePrice : undefined,
                image: imageUrl,
                rating: Number((4.1 + (Math.random() * 0.9)).toFixed(1)),
                reviews: 150 + Math.floor(Math.random() * 2500),
                inStock: i % 9 !== 0,
                description: `${brand} premium ${baseItem.toLowerCase()} with natural ingredients for radiant results`,
                features: [
                    'Dermatologist Tested & Approved',
                    'Natural & Organic Ingredients',
                    '100% Cruelty Free',
                    'Long-Lasting Formula'
                ],
                brand
            });
        }
    });

    // FAMILY & HOBBY
    const hobbySubcategories = [
        { name: 'Toys & Games', items: ['Board Game', 'Action Figure', 'Puzzle', 'Building Blocks', 'Doll', 'RC Car', 'Educational Toy', 'Playset', 'Card Game', 'STEM Toy'] },
        { name: 'Baby Essentials', items: ['Diapers', 'Stroller', 'Car Seat', 'Baby Monitor', 'High Chair', 'Crib', 'Baby Carrier', 'Changing Table', 'Baby Swing', 'Playpen'] },
        { name: 'Books & Stationery', items: ['Novel', 'Textbook', 'Notebook', 'Planner', 'Pen Set', 'Art Supplies', 'Magazine', 'Comics', 'Journal', 'Sketchbook'] },
        { name: 'Sports & Outdoors', items: ['Tent', 'Sleeping Bag', 'Backpack', 'Bike', 'Basketball', 'Soccer Ball', 'Yoga Mat', 'Camping Gear', 'Fishing Rod', 'Golf Clubs'] }
    ];

    hobbySubcategories.forEach(subcat => {
        for (let i = 0; i < 45; i++) {
            const baseItem = subcat.items[i % subcat.items.length];
            let brand = brands.hobby[i % brands.hobby.length];
            const brandMapping = subCategoryBrands[subcat.name];
            if (brandMapping) {
                const allBrands = brandMapping.flatMap(g => g.brands);
                brand = allBrands[i % allBrands.length];
            }
            const basePrice = 24 + (i * 19) + Math.floor(Math.random() * 120);
            const hasDiscount = i % 4 === 0;

            const imageKeyword = baseItem.toLowerCase().replace(/\s+/g, '-');
            const imageUrl = `https://source.unsplash.com/400x400/?${imageKeyword},toys,hobby`;

            products.push({
                id: `hobby-${productId++}`,
                name: `${brand} ${baseItem} Edition ${i + 1}`,
                category: 'Family & Hobby',
                subcategory: subcat.name,
                price: hasDiscount ? Math.floor(basePrice * 0.8) : basePrice,
                originalPrice: hasDiscount ? basePrice : undefined,
                image: imageUrl,
                rating: Number((4.2 + (Math.random() * 0.8)).toFixed(1)),
                reviews: 80 + Math.floor(Math.random() * 1800),
                inStock: i % 7 !== 0,
                description: `${brand} ${baseItem.toLowerCase()} designed for fun, learning and quality family time`,
                features: [
                    'Premium Quality Construction',
                    'Safe, Non-Toxic Materials',
                    'Age-Appropriate Design',
                    'Educational & Entertaining'
                ],
                brand
            });
        }
    });

    return products;
}

export const products = generateProducts();

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
