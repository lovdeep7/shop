import React, { useContext } from 'react';
import { WalletContext } from '../contexts/WalletContext';
import Button from '@mui/material/Button';

const connectWallet = async () => {
    if (provider) {
      try {
        await provider.send('eth_requestAccounts', []);
        const { chainId } = await provider.getNetwork();
  
        // Check if the connected network is Polygon (Mainnet or Mumbai Testnet)
        if (chainId !== 137 && chainId !== 80001) {
          await switchToPolygon();
        }
  
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    }
  };
  
  // Function to switch the network to Polygon
  const switchToPolygon = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }], // '0x89' is 137 in hexadecimal (Polygon Mainnet)
      });
    } catch (error) {
      // If the network is not added to MetaMask, request to add it
      if (error.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x89',
              chainName: 'Polygon Mainnet',
              rpcUrls: ['https://polygon-rpc.com/'],
              nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18,
              },
              blockExplorerUrls: ['https://polygonscan.com/'],
            },
          ],
        });
      } else {
        console.error('Failed to switch to Polygon network:', error);
      }
    }
  };
  

export default WalletConnectButton;
