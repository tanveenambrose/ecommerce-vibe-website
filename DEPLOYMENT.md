# Quick Deployment Commands

## 🔧 Git Setup & Push

```bash
# Navigate to project
cd "d:\vibe code project\ecommerce-platform"

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: Full-stack e-commerce platform with 3D animations"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 📝 Environment Variables Reference

### Backend Environment Variables
```env
MONGODB_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/
JWT_SECRET=generate_32_char_random_string
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=16_char_gmail_app_password
CLIENT_URL=https://your-frontend.vercel.app
```

### Frontend Environment Variables
```env
NEXT_PUBLIC_API_URL=https://your-api.vercel.app
```

## 🔑 Generate JWT Secret

```bash
# On Windows (PowerShell)
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})

# On Mac/Linux
openssl rand -base64 32

# Online
# Visit: https://randomkeygen.com/
```

## 🌐 Vercel CLI (Alternative Deployment)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy Backend
cd apps/api
vercel --prod

# Deploy Frontend
cd ../client
vercel --prod
```

## 📊 Useful MongoDB Queries

```javascript
// In MongoDB Atlas → Browse Collections

// View all users
db.users.find({})

// View all orders
db.orders.find({})

// Count users
db.users.countDocuments()

// Find user by email
db.users.findOne({ email: "user@example.com" })

// Delete test data
db.users.deleteMany({ email: /test/ })
db.orders.deleteMany({})
```

## ✅ Deployment Checklist

- [ ] Create MongoDB Atlas cluster
- [ ] Create database user
- [ ] Set network access to 0.0.0.0/0
- [ ] Get connection string
- [ ] Create Gmail app password
- [ ] Push code to GitHub
- [ ] Deploy backend to Vercel
- [ ] Add backend env vars
- [ ] Deploy frontend to Vercel
- [ ] Add frontend env var (API URL)
- [ ] Update CLIENT_URL in backend
- [ ] Redeploy backend
- [ ] Test registration & OTP
- [ ] Test shopping cart
- [ ] Test orders

## 🔄 Update Deployment

```bash
# Make changes locally
git add .
git commit -m "feat: Add new feature"
git push

# Vercel auto-deploys! ✨
```

## 📞 Support

Check `deployment_guide.md` for detailed troubleshooting.
