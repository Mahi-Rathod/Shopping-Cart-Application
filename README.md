# Shopping Cart Application

## Overview
This is a **React.js** shopping cart application built with **Vite** and styled using **Tailwind CSS**. It features product listing, cart management, quantity adjustment, and local storage persistence.

## Features Implemented

### 1️⃣ **Navigation Bar**
- Contains a **Products** icon and a **Cart** icon.
- Both icons are clickable and navigate to their respective pages.

### 2️⃣ **Products Page**
- Displays products in a **grid layout**.
- Each product has an **image, name, price, and stock status**.
- Users can add products to the cart.

### 3️⃣ **Cart Page**
- Lists added products with details including:
  - **Product Image**
  - **Name**
  - **Price**
  - **Total Price (Price × Quantity)**
  - **Stock Availability**
  - **Quantity Adjustment Buttons** (Increase & Decrease)
  - **Remove from Cart** option
- Displays a **Price Summary** with:
  - Item price
  - Discounts
  - Delivery charges
  - Final total

### 4️⃣ **State Management Using `useContext`**
- Created a `CartContext` to manage the cart globally.
- Implemented `CartProvider` to wrap the app.
- Functions include:
  - `addToCart(product)` - Adds a new product or increments quantity.
  - `removeFromCart(productId)` - Removes a product from the cart.
  - `incrementQuantity(productId)` - Increases quantity of a product.
  - `decrementQuantity(productId)` - Decreases quantity (removes item if quantity is 1).

### 5️⃣ **Local Storage for Cart Persistence**
- Cart data is **saved in Local Storage** so items remain after refresh.
- `useEffect` loads cart data from Local Storage on app start.

## Folder Structure
```
/src
  ├── components
  │   ├── Navbar.jsx
  │
  ├── context
  │   ├── CartContext.jsx
  |   ├── ProductContext.jsx
  │
  ├── pages
  |   ├── Layout.jsx
  │   ├── ProductsPage.jsx
  │   ├── CartPage.jsx
  │
  ├── App.jsx
  ├── main.jsx
  ├── styles.css
```

## How to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/Mahi-Rathod/Shopping-Cart-Application
   cd shopping-cart
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Technologies Used
- **React.js (Vite)**
- **Tailwind CSS**
- **React Icons**
- **useContext for state management**
- **LocalStorage for persistence**

## Future Enhancements
✅ User authentication for personalized carts.  
✅ API integration for product data.  
✅ Payment gateway integration.  

---
📌 *This project provides a clean, minimal, and functional shopping cart experience using React and modern web technologies!* 🚀
