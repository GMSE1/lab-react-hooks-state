import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 2.99 },
  { id: 2, name: 'Banana', category: 'Fruits', price: 1.99 },
  { id: 3, name: 'Milk', category: 'Dairy', price: 3.49 },
  { id: 4, name: 'Cheese', category: 'Dairy', price: 4.99 },
  { id: 5, name: 'Bread', category: 'Bakery', price: 2.49 },
];

function ProductList({ products, onAddToCart, darkMode }) {
  if (products.length === 0) {
    return <p>No products available in this category.</p>;
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {products.map((product) => (
        <div key={product.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <button 
            data-testid={`product-${product.id}`}
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList
