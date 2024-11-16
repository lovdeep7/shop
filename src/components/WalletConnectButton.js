import React, { useContext } from 'react';
import { WalletContext } from '../contexts/WalletContext';
import Button from '@mui/material/Button';

const WalletConnectButton = () => {
  const { walletAddress, connectWallet } = useContext(WalletContext);

  const shortAddress = (address) => {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet';
  };

  return (
    <Button variant="contained" onClick={connectWallet}>
      {shortAddress(walletAddress)}
    </Button>
  );
};

export default WalletConnectButton;
