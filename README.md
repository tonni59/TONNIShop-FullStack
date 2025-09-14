<img width="1894" height="998" alt="Mens" src="https://github.com/user-attachments/assets/af221e97-f03b-472f-93c8-5a5a6bc3bd3b" /># 🛍️ TONNIShop – Full-Stack E-Commerce Platform

![Build Status](https://img.shields.io/github/actions/workflow/status/tonni59/TONNIShop-FullStack/deploy.yml?branch=main)
![License](https://img.shields.io/github/license/tonni59/TONNIShop-FullStack)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![Database](https://img.shields.io/badge/Database-MongoDB-darkgreen)

TONNIShop is a **full-stack e-commerce web application** built with a modern MERN stack.  
It provides customers with a smooth shopping experience and admins with a simple dashboard to manage products.  

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage Screenshot](screenshots/homepage.png)

### 🛒 Product Listing
![Products Screenshot](screenshots/new-collections.png)

### 🛒 Popular in Women
![Products Screenshot](screenshots/popular-women.png)

### 🛒 Mens Products
![Products Screenshot](screenshots/Mens.png)

### 🛒 Womens Products
![Products Screenshot](screenshots/Women.png)

### 🛒 Footer
![Products Screenshot](screenshots/Footer.png)

### 🛒 Single Products
![Products Screenshot](screenshots/Single-Product.png)

### 📦 Cart 
![Cart Screenshot](screenshots/Cart.png)

### ⚙️ Checkout
![Admin Screenshot](screenshots/Checkout.png)

> 📌 Place your real screenshots inside a `screenshots/` folder in the repo.

---


### 🔑Default Credentials
- **Admin Email:** admin@example.com  
- **Password:** password

## ✨ Features & Functionality
- 👤 User authentication (JWT) & role-based access.
- 🛍 Product listing, searching, filtering, and management.
- 🛒 Shopping cart functionality with quantity updates.
- 📦 Order creation & history tracking.
- 📤 Image uploads stored in uploads/.
- 📱 Responsive frontend UI.

## 📊 Data Handling
- ✅MongoDB database for users, products, and orders
- ✅Mongoose schemas for structured data modeling
- ✅REST APIs for handling client requests

## 🧠 User Experience & Design
- ✅Intuitive product browsing and filtering
- ✅Responsive layout using modern design principles
- ✅Interactive cart and checkout pages

## 🔐 Authentication & Security
- ✅JSON Web Tokens (JWT) for authentication
- ✅bcrypt for password encryption
- ✅Protected routes for admin and user roles

## 🛠 Tech Stack
### Frontend
- [React.js](https://react.dev/) – UI library
- [Redux Toolkit](https://redux-toolkit.js.org/) – State management
- [Axios](https://axios-http.com/) – HTTP requests
- [React Router](https://reactrouter.com/) – Client-side routing
- [Bootstrap](https://getbootstrap.com/) / [Tailwind CSS](https://tailwindcss.com/) – Styling

### Backend
- [Node.js](https://nodejs.org/) – Runtime environment
- [Express.js](https://expressjs.com/) – Web framework
- [MongoDB](https://www.mongodb.com/) – Database
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) – Password hashing
- [jsonwebtoken (JWT)](https://jwt.io/) – Authentication
- [Multer](https://github.com/expressjs/multer) – File upload middleware
- [dotenv](https://github.com/motdotla/dotenv) – Environment variables

## 📂Repositories
- **Frontend Repo:** [Client Side](https://github.com/tonni59/QuickCart-Client-Side)  
- **Backend Repo:** [Server Side](https://github.com/tonni59/QuickCart-Server-Side)

---

## ⚙️ Setup & Installation

### 🛠 Client Setup
1. Clone the client repository:
   ```bash
   git clone https://github.com/tonni59/QuickCart-Client-Side.git
   cd QuickCart-Client-Side
    ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Create a .env file in the root and add:
    ```bash
    # ==========================
    # 🌐 API Config
    # ==========================
    VITE_API_URL=http://localhost:5000/api

    # ==========================
    # 💳 Payment Gateway (Public Keys Only)
    # ==========================
    VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
    VITE_PAYPAL_CLIENT_ID=your_paypal_client_id

    # ==========================
    # 🔑 Firebase (if used for Auth/Storage)
    # ==========================
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_id
    VITE_FIREBASE_APP_ID=your_firebase_app_id

    # ==========================
    # 📊 Analytics / Monitoring
    # ==========================
    VITE_GA_TRACKING_ID=your_google_analytics_tracking_id
 
   ```
4. Start development server:
   ```bash
   npm start
   ```

### 🖥️ Server Setup
1. Clone the server repository:
   ```bash
   git clone https://github.com/tonni59/QuickCart-Server-Side.git
   cd QuickCart-Server-Side
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root and add:
   ```bash
    # ==========================
    # 🔧 Server & Database
    # ==========================
     PORT=5000
    NODE_ENV=development
    MONGO_URI=your_mongodb_connection_string

    # ==========================
    # 🔐 Authentication & Security
    # ==========================
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRES_IN=7d
    COOKIE_SECRET=your_cookie_secret

    # ==========================
    # 🌐 Client Config
    # ==========================
    CLIENT_URL=http://localhost:3000

     # ==========================
     # 💳 Payment Gateways
     # ==========================
    STRIPE_SECRET_KEY=your_stripe_secret_key
    PAYPAL_CLIENT_ID=your_paypal_client_id
    PAYPAL_CLIENT_SECRET=your_paypal_client_secret

    # ==========================
    # 📧 Email / Notifications
    # ==========================
    SMTP_HOST=smtp.yourmail.com
    SMTP_PORT=587
    SMTP_USER=your_email@example.com
    SMTP_PASS=your_email_password
    EMAIL_FROM=no-reply@yourdomain.com

    # ==========================
    # ☁️ Cloud Storage (e.g., Cloudinary, AWS S3)
    # ==========================
    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

    # ==========================
    # 🔑 Third-Party Auth Integrations
    # ==========================
    GOOGLE_CLIENT_ID=your_google_oauth_client_id
    GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
    FACEBOOK_APP_ID=your_facebook_app_id
    FACEBOOK_APP_SECRET=your_facebook_app_secret

    # ==========================
    # 📊 Analytics / Monitoring
    # ==========================
    SENTRY_DSN=your_sentry_error_tracking_dsn

    # ==========================
    # ⚡ Caching / Performance
    # ==========================
   REDIS_URI=redis://localhost:6379


   ```
4. Start the server:
   ```bash
   npm run dev

   ```

## 📦 NPM Dependencies

```json
{
  "dependencies": {
    "@tanstack/react-query": "^5.64.2",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "react-modal": "^3.16.3",
    "react-rating": "^2.0.5",
    "react-rating-stars-component": "^2.2.0",
    "react-responsive-carousel": "^3.2.23",
    "react-router-dom": "^7.1.1",
    "react-toastify": "^11.0.3",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.2.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.23",
    "eslint": "^9.17.0",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5"
  }
}

