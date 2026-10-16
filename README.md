# Pemando Brand
## تشغيل محلي
npm install
npm run dev   # http://localhost:3000

## قبل النشر
1. lib/data.ts → BRAND.whatsapp (رقمك الدولي بدون +) + المنتجات والأسعار
2. صور المنتجات في public/products ثم images: ["/products/x.jpg"]

## رفع إلى GitHub
git init && git add . && git commit -m "Initial commit: Pemando Brand"
git branch -M main
git remote add origin https://github.com/USERNAME/pemando-brand.git
git push -u origin main
