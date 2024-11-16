import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Recommendations from '../components/Recommendations';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    setProducts([
      // ... product data
    ]);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Recommendations products={products} />
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Home;
