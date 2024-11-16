import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
// ...other imports

const ProductCard = ({ product }) => {
  const { userProfile, setUserProfile } = useContext(UserContext);

  const handleViewProduct = () => {
    // Update viewed products
    if (!userProfile.viewedProducts.includes(product.id)) {
      setUserProfile({
        ...userProfile,
        viewedProducts: [...userProfile.viewedProducts, product.id],
      });
    }
    // Navigate to product details page
  };

  return (
    <Card onClick={handleViewProduct}>
      {/* ...card content */}
    </Card>
  );
};

export default ProductCard;
