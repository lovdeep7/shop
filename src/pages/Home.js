import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Shop</h1>
        <p>A decentralized shopping platform.</p>
      </div>
    </>
  );
};

export default Home;