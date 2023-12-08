# Inventory Management System (Invy)

## Description
A comprehensive Inventory Management System designed for shops to manage products, discounts, categories, sales, and more. The system supports multiple user roles, providing distinct features and authorization levels for System Admin, Shop Manager, and Logged-User.

## Live Link
[Click Here](https://invy-ffcdc.web.app/)

## Features
- **Interactive UI Design**
  - Pleasing color contrast
  - Customized component styling for a visually appealing website

- **User Roles and Authorization**
  - System-Admin, Shop-Manager, and Logged-User roles
  - Restricted access based on user roles

- **Layouts**
  - Basic Layout with Navbar, Content, and Footer
  - Dashboard Layout with Shop Logo, Menu, Home, Log-Out, and Footer

- **Home-Page and Error Pages**
  - Dynamic Navbar based on user login status
  - 404 Error Page with a redirect button to Home
  - Forbidden Route Page for unauthorized access

- **Login & Registration System**
  - Relevant error messages on login and registration pages
  - Google Sign-in option
  - Photo URL/image uploading during registration

- **Create Shop (Private)**
  - Shop creation for logged-in users
  - Form with shop details: Name, Logo, Info, Location, Owner Email, Owner Name

- **Dashboard - Shop-Manager Routes**
  - Product Management
    - Add, manage, delete, view, and search products
  - Sales Collection
    - View, search, add to cart, mark as paid, generate invoice
  - Sales Summary
    - View total profit, total sell, total investment, and sales history

- **Checkout**
  - Display information about added products
  - Generate a PDF with checkout information
  - Update database and clear cart on successful checkout

- **Subscription & Payment**
  - Three plan cards for increasing product limit
  - Stripe payment integration
  - Update product limit and admin income after successful payment

- **Sales Summary (System Admin Route)**
  - Manage Shop
    - View all shops, send notices to shop owners
  - Sale-Summary
    - Display total income, total products, total sales
  - Users Section
    - View registered user information, send promotional emails

## Bonus Features
- Email Sending Functionalities with nodemail
- Dynamic Titling based on route using react helmet
- Responsive Design for homepage
- Implementation of Animation Package(Data-AOS)

## Data Visualization 
- Implementation of react-rechart on sale summary route


## More info
- Images hosted on imagebb
- Using tailwind CSS and daisy UI
- Firebase hosting for client site
- Vercel Hosting for server side





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
