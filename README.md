# React Product Catalog

A fast, responsive e-commerce product showcase built with **React** and **Vite**. This application dynamically fetches product data—including titles, descriptions, ratings, prices, and images—from a REST API endpoint and displays them in a modern card grid layout.

## Features

- **Dynamic Data Fetching**: Retrieves real-time product list from API using custom React hooks and asynchronous HTTP requests.
- **Loading & Error Handling**: Built-in state management for smooth loading indicators and graceful API failure handling.
- **Product Routing**: Includes individual product view routes (`/product/:id`) for detailed item specifications.
- **Modern UI**: Clean grid layout displaying ratings, dynamic pricing, and product previews.

## Tech Stack

- **Frontend**: React, Vite, JavaScript (ES6+)
- **Data Fetching**: Native Fetch API / Axios
- **Routing**: React Router DOM

## API Fetching Example

Below is the core logic used in the application to fetch product data asynchronously:

```javascript
import { useState, useEffect } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('[https://dummyjson.com/products](https://dummyjson.com/products)');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error fetching products: {error}</div>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="card-footer">
            <span>⭐ {product.rating}</span>
            <strong>${product.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
Getting Started
Prerequisites
Ensure you have Node.js (v16 or higher) installed.
