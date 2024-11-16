import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const BuyButton = ({ product }) => {
  const { userProfile, setUserProfile } = useContext(UserContext);

  const handlePurchase = async () => {

    if (!userProfile.purchasedProducts.includes(product.id)) {
      setUserProfile({
        ...userProfile,
        purchasedProducts: [...userProfile.purchasedProducts, product.id],
      });
    }
  };

  return (
    <Button onClick={handlePurchase}>Buy Now</Button>
  );
};

export default BuyButton;
