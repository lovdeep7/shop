import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { generateRecommendations } from '../utils/recommendation';
import ProductCard from './ProductCard';

const Recommendations = ({ products }) => {
  const { userProfile } = useContext(UserContext);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const recommendations = generateRecommendations(userProfile, products);
    setRecommendedProducts(recommendations);
  }, [userProfile, products]);

  return (
    <div>
      <h2>Recommended for You</h2>
      <div className="product-grid">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
