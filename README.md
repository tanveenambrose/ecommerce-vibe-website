# 🛍️ Full-Stack E-Commerce Platform

A modern, feature-rich e-commerce platform built with Next.js 16 and NestJS, featuring real-time authentication, 3D animations, and a comprehensive shopping experience.

## ✨ Features

### 🎨 Frontend (Next.js 16 + Tailwind CSS)
- **3D Animated Homepage** - Stunning floating geometric shapes with CSS 3D transforms
- **Product Catalog** - 513 real products across 21 subcategories
- **Dynamic Categories** - 5 main categories with subcategory filtering
- **Shopping Cart** - Persistent cart with LocalStorage
- **User Authentication** - JWT-based auth with email OTP verification
- **Order Management** - Complete order history and tracking
- **Responsive Design** - Mobile-first, fully responsive UI
- **Real Product Images** - Integration with DummyJSON, FakeStore, and Makeup APIs

### 🔧 Backend (NestJS + MongoDB)
- **RESTful API** - Clean, documented API endpoints
- **MongoDB Database** - Scalable NoSQL database with Mongoose
- **JWT Authentication** - Secure token-based authentication
- **Email OTP System** - Nodemailer integration for verification
- **User Management** - Registration, login, profile, password reset
- **Orders API** - Create and retrieve user orders
- **CORS Enabled** - Configured for frontend integration

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 16, React, TypeScript, Tailwind CSS |
| **Backend** | NestJS, Node.js, TypeScript |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JWT, Bcrypt |
| **Email** | Nodemailer (Gmail) |
| **Deployment** | Vercel |
| **Monorepo** | Turborepo |

## 📁 Project Structure

```
ecommerce-platform/
├── apps/
│   ├── client/              # Next.js frontend
│   │   ├── app/            # App router pages
│   │   ├── components/     # React components
│   │   ├── lib/           # Utilities & data
│   │   └── public/        # Static assets
│   └── api/               # NestJS backend
│       ├── src/
│       │   ├── modules/   # Feature modules
│       │   └── main.ts    # Entry point
│       └── package.json
├── scripts/               # Development scripts (gitignored)
├── turbo.json            # Turborepo config
└── package.json          # Root dependencies
```

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account
- Gmail account (for OTP emails)

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ecommerce-platform.git
cd ecommerce-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

**Backend (.env in `apps/api/`):**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_32_character_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your_16_char_app_password
CLIENT_URL=http://localhost:3000
```

**Frontend (.env.local in `apps/client/`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 4. Run Development Servers

```bash
# Terminal 1 - Frontend
cd apps/client
npm run dev
# Access at http://localhost:3000

# Terminal 2 - Backend  
cd apps/api
npm run start:dev
# API at http://localhost:4000
```

## 🌐 Deployment to Vercel

See **[DEPLOYMENT_GUIDE.md](./deployment_guide.md)** for complete step-by-step deployment instructions.

**Quick Summary:**
1. Push code to GitHub
2. Setup MongoDB Atlas
3. Deploy backend to Vercel
4. Deploy frontend to Vercel
5. Configure environment variables

## 📊 Product Data

The platform includes 513 products sourced from:
- DummyJSON API (electronics, fashion, beauty)
- FakeStore API (general products)
- Makeup API (cosmetics)
- Synthetic generated data (to fill gaps)

All products are properly categorized across:
- **5 Main Categories**: Electronics, Fashion, Home, Health, Family
- **21 Subcategories**: Laptops, Smartphones, Men's Clothing, etc.
- **24+ Products per Subcategory**

## 🎯 Key Features Walkthrough

### User Journey
1. **Browse Products** - Explore categorized products with filters
2. **Register Account** - Sign up with email OTP verification
3. **Add to Cart** - Select products and quantities
4. **Checkout** - Enter shipping details and payment method
5. **View Orders** - Track order history and details

### Admin Capabilities
- User management via MongoDB
- Order tracking and management
- Email notifications for OTP

## 🔐 Security Features

- ✅ Password hashing with Bcrypt (10 rounds)
- ✅ JWT tokens with secure secrets
- ✅ Email OTP verification (6-digit codes)
- ✅ Environment variable protection
- ✅ CORS configuration
- ✅ MongoDB connection security

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Verify connection string format
- Check MongoDB Atlas network access (0.0.0.0/0)
- Ensure database user has read/write permissions

**Email OTP Not Sending:**
- Enable Gmail 2-step verification
- Generate new app password (16 chars)
- Check EMAIL_USER and EMAIL_PASSWORD env vars

**Build Errors:**
- Run `npm install` in root, client, and api folders
- Clear `.next` and `node_modules`, reinstall
- Check Node.js version (18+ required)

## 📝 API Documentation

### Authentication Endpoints
```
POST /auth/register/initiate - Start registration
POST /auth/register/verify   - Verify OTP
POST /auth/login              - User login
PUT  /auth/profile            - Update profile
POST /auth/change-password    - Change password
POST /auth/forgot-password    - Request password reset
POST /auth/reset-password     - Reset password
```

### Orders Endpoints
```
POST /orders     - Create new order
GET  /orders     - Get user's orders
GET  /orders/:id - Get specific order
```

## 🤝 Contributing

This is a portfolio/learning project. Feel free to fork and customize!

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

## 🎉 Acknowledgments

- Product data from DummyJSON, FakeStore API, and Makeup API
- UI inspiration from modern e-commerce platforms
- Built with love using Next.js and NestJS

---

**Built by [Your Name]** | [Portfolio](https://yourportfolio.com) | [LinkedIn](https://linkedin.com/in/yourprofile)
