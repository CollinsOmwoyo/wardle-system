A **Vue 3 & Laravel 11** web application to manage and organize your wardrobe items efficiently. Interview Test.

## 📌 Requested Features by Uzapoint

- ✅ **User Authentication** (Login/Registration)
- ✅ **Add, Edit & Delete** Clothing Items
- ✅ **Categorization** (Tops, Bottoms, Shoes, etc.)
- ✅ **Search & Filter** Items
- ✅ **Responsive UI** for Desktop & Mobile

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone will give link 
cd wardrobe-mgt-app
```

### 2️⃣ Install Laravel Backend

```sh
composer install
cp .env.example .env
php artisan key:generate
```

Edit `.env` to configure your database, then run:

```sh
php artisan migrate
php artisan serve
```

### 3️⃣ Install Vue Frontend

```sh
npm install
npm run dev
```

---

## 🛠️ Tech Stack

| Technology  | Description |
|-------------|------------|
| Laravel 11  | Backend Framework |
| Vue 3       | Frontend Framework |
| Vite        | Build Tool |
| Vue Router  | Client-side Navigation |
| Tailwind CSS | Styling |

---

## 📜 API Endpoints (Laravel)

| Method | Endpoint       | Description |
|--------|--------------|-------------|
| `GET`  | `/api/items`  | Fetch all clothing items |
| `POST` | `/api/items`  | Add a new item |
| `PUT`  | `/api/items/{id}` | Update an item |
| `DELETE` | `/api/items/{id}` | Delete an item |

---

## UI Components (Vue)

- **Home.vue** → Landing Page
- **Items.vue** → List of wardrobe items
- **ItemForm.vue** → Add/Edit clothing items
- **Navbar.vue** → Navigation bar

---
# Clothing Inventory System Frontend

## Project Overview
This project aims to build a fully functional frontend for a clothing inventory system. Currently, the frontend lacks several key features necessary for a complete user experience. Below is an analysis of the missing features and the approach to implementing them.

## Missing Features

### 1. User Authentication (Login/Registration)
- Basic login and registration pages exist but need improvement.
- Lacks validation for user inputs.
- No session persistence (e.g., JWT or local storage handling).
- No logout functionality.

### 2. CRUD for Clothing Items
- No UI for adding, editing, or deleting clothing items.
- No feedback mechanism for success or failure.
- Lacks form validation for input fields.

### 3. Categorization of Clothing Items
- No categorization feature for tops, bottoms, shoes, etc.
- Users cannot filter items by category.
- No category selection in the add-item form.

### 4. Filter and Search Functionality
- No search bar for filtering items.
- Cannot sort items by name, category, or date.
- No real-time filtering for search results.

### 5. Responsive & User-Friendly UI
- Current UI lacks styling, alignment, and spacing.
- Forms are not properly structured.
- No light/dark mode for user customization.
- Tailwind CSS is included but not fully utilized.

## Implementation Plan

### 1. Enhance Authentication System
- Implement authentication state persistence using Vuex or Pinia.
- Improve UI design for login and registration forms.
- Add form validation for secure user input handling.

### 2. Develop CRUD Features for Clothing Items
- Build UI components for adding, editing, and deleting items.
- Provide success/error messages for user feedback.
- Ensure dynamic UI updates after operations.

### 3. Implement Categorization System
- Allow users to assign categories to clothing items.
- Enable category-based sorting and filtering.
- Display items grouped by category.

### 4. Create Search & Filter System
- Add a search bar to filter items dynamically.
- Implement real-time search functionality.
- Provide sorting options for better item management.

### 5. Improve UI & Responsiveness
- Use Tailwind CSS to enhance UI styling.
- Implement a grid/flex layout for better alignment.
- Ensure mobile and desktop responsiveness.
- Add global theming (light/dark mode) for better UX.

## 📝 License

This project is licensed under the **MIT License**.

---

## 📩 Contact

For inquiries, reach out at [collinsomwoyo@gmail.com(mailto:collinsomwoyo@gmail.com).
```
