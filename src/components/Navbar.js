import React from 'react';
import WalletConnectButton from './WalletConnectButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Shop</Typography>
        <div style={{ marginLeft: 'auto' }}>
          <WalletConnectButton />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;