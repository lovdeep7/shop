import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ margin: '20px' }}>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography color="textSecondary">{product.description}</Typography>
        <Typography variant="h6">Price: {product.price} MATIC</Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
