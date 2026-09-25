Order Tracking Screen

A simple and user-friendly Order Tracking Screen that allows users to view, search, and manage their orders efficiently.

Features

📦 All Orders: Displays all available orders in one place.

🔍 Order Search: Search for a specific order quickly using the search option.

👁️ View Details: Each order includes a View Details button to navigate to a separate page with complete order information.

📱 Responsive UI: Designed to provide a clean experience across different screen sizes.

Pages
Orders Page

Displays the list of all orders along with a search option and a View Details button for each order.

Order Details Page

Shows detailed information about the selected order.

User Flow
Orders List
    │
    ├── Search Order
    │
    └── View Details
            │
            ▼
      Order Details

Purpose

The goal of this screen is to provide a simple and efficient way for users to find their orders and view detailed order information from a centralized interface.


folder structure : 
src
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   │
│   └── orders
│       └── [id]
│           └── page.jsx
│
├── components
│   ├── motion.jsx
│   ├── OrderDeliveryinfo.jsx
│   ├── OrderDeliverytimeline.jsx
│   ├── Orderheader.jsx
│   ├── OrderListItems.jsx
│   ├── OrderProductsummary.jsx
│   ├── OrderStatePannel.jsx
│   ├── OrderStatusbadge.jsx
│   └── OrderSupportactions.jsx
│
├── data
│   └── orders.js
│

