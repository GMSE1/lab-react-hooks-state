import { useState } from 'react';
import ProductList, { sampleProducts } from './components/ProductList';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const categories = ['All', ...new Set(sampleProducts.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? sampleProducts
    : sampleProducts.filter(p => p.category === selectedCategory);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <h1>Product Store</h1>
      
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      <div style={{ margin: '20px 0' }}>
        <label htmlFor="category">Filter by Category: </label>
        <select 
          id="category"
          value={selectedCategory} 
          onChange={handleCategoryChange}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {cart.length > 0 && (
        <div style={{ marginBottom: '20px', padding: '10px', border: '2px solid green' }}>
          <h2>Shopping Cart</h2>
          {cart.map((item, index) => (
            <p key={index}>{item.name} is in your cart</p>
          ))}
        </div>
      )}

      <ProductList 
        products={filteredProducts} 
        onAddToCart={handleAddToCart}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;