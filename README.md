#  MERN Stack E-Commerce Application with Admin Panel

A full-featured e-commerce platform built with MongoDB, Express.js, React, and Node.js, featuring both customer-facing storefront and administrative management capabilities.

## Features

### Admin Panel Features
- **Super Admin Access** - Secure administrative controls
- **Dashboard Management** - Upload promotional banners and featured images
- **Product Management** 
  - Create/edit products with details (name, description, pricing)
  - Organize by categories and brands
  - Manage inventory and stock status
  - Cloudinary image hosting for product media
- **Order Management** - Process and track customer orders

### Customer Features
- **Product Catalog** - Browse by categories/brands
- **Detailed Product Pages** - Complete product information
- **Shopping Cart** - Add/remove items, quantity adjustment
- **User Account** - Address book and order history
- **Secure Checkout** - PayPal payment integration
- **Search Functionality** - Find products quickly
- **Review System** - Customer feedback on purchases

## Technology Stack

### Frontend
- **React** - UI Components
- **Redux Toolkit** - State management
- **Tailwind CSS** - Responsive styling
- **Shadcn/UI** - Component library
- **React Router** - Navigation
- **Axios** - API communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Cloudinary** - Media storage
- **PayPal SDK** - Payments

## Installation Guide

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB Atlas account
- Cloudinary account
- PayPal developer account
- Git



### Backend Setup

1. Navigate to the server directory:
```bash
cd server
npm init -y
npm install bcryptjs cloudinary cookie-parser cors dotenv express jsonwebtoken mongoose multer nodemon paypal-rest-sdk
```

Create .gitignore in server/:
```
node_modules
.env
dist

Create a .env file in server/:
```
PORT=5000
MONGO_DB_URL=your_mongo_connection_string
CLOUD_NAME=your_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
TOKEN_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
CLIENT_URL=http://localhost:5173
🔐 Never commit this file to version control.

Update package.json scripts:

json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
},
"main": "server.js"
Run the backend server:

bash
npm run dev
💻 Frontend Setup
bash
cd ../client
npm create vite@latest client -- --template react
cd client
npm install
Install core dependencies:

bash
npm install @reduxjs/toolkit react-redux axios react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install tailwindcss-animate
Configure tailwind.config.js:

js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Create jsconfig.json for absolute imports:

json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
Update vite.config.js:

js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
(Optional) Add Shadcn UI components:

bash
npx shadcn-ui@latest add button
Start the React frontend:

bash
npm run dev
