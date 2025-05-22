# Laravel E-commerce Project

A full-stack e-commerce application built with Laravel and React.

## Project Structure

```
Laravel_Ecommerce/
├── laravel/         # Laravel backend
└── react/          # React frontend
```

## Prerequisites

- PHP >= 8.1
- Composer
- Node.js >= 16
- MySQL >= 8.0
- npm or yarn

## Backend Setup (Laravel)

1. Navigate to the laravel directory:
   ```bash
   cd laravel
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

4. Generate application key:
   ```bash
   php artisan key:generate
   ```

5. Configure your database in `.env`:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel_ecommerce
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

6. Run migrations and seeders:
   ```bash
   php artisan migrate --seed
   ```

7. Start the development server:
   ```bash
   php artisan serve
   ```

The backend will be available at `http://localhost:8000`

## Frontend Setup (React)

1. Navigate to the react directory:
   ```bash
   cd react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user (requires authentication)

### Products
- GET `/api/products` - List all products
- GET `/api/products/{id}` - Get product details
- POST `/api/products` - Create product (admin only)
- PUT `/api/products/{id}` - Update product (admin only)
- DELETE `/api/products/{id}` - Delete product (admin only)

### Categories
- GET `/api/categories` - List all categories
- GET `/api/categories/{id}` - Get category details
- POST `/api/categories` - Create category (admin only)
- PUT `/api/categories/{id}` - Update category (admin only)
- DELETE `/api/categories/{id}` - Delete category (admin only)

### Orders
- GET `/api/orders` - List user's orders (authenticated)
- POST `/api/orders` - Create new order (authenticated)
- GET `/api/orders/{id}` - Get order details (authenticated)

## Sample API Payloads

### Register User
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "password_confirmation": "password123"
}
```

### Login User
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Product
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 99.99,
  "stock": 100,
  "category_id": 1,
  "image_url": "https://example.com/image.jpg"
}
```

### Create Order
```json
{
  "items": [
    {
      "product_id": 1,
      "quantity": 2
    },
    {
      "product_id": 2,
      "quantity": 1
    }
  ]
}
```

## Features

- User authentication and authorization
- Product catalog with categories
- Shopping cart functionality
- Order management
- Responsive design
- RESTful API
- Secure authentication with Laravel Sanctum
- TypeScript support
- Tailwind CSS styling

## Security

- All API endpoints except login and register require authentication
- Passwords are hashed using bcrypt
- CORS is configured to allow requests from the frontend
- Input validation on all endpoints
- CSRF protection enabled 