import React, { useState, useEffect, useContext } from 'react';
import { WalletContext } from '../contexts/WalletContext';
import { getShopContract } from '../utils/contractUtils';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { provider } = useContext(WalletContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      if (provider) {
        const contract = getShopContract(provider);
        const productCount = await contract.getProductCount();
        const items = [];
        for (let i = 0; i < productCount; i++) {
          const product = await contract.products(i);
          items.push(product);
        }
        setProducts(items);
      }
    };

    loadProducts();
  }, [provider]);

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
