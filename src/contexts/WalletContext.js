import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  // Initialize the provider and check for an existing wallet connection
  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(web3Provider);

        // Check if the user is already connected
        const accounts = await web3Provider.listAccounts();
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } else {
        console.error('MetaMask is not installed.');
      }
    };

    initProvider();
  }, []);

  // Function to connect the wallet
  const connectWallet = async () => {
    if (provider) {
      try {
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    }
  };

  return (
    <WalletContext.Provider value={{ walletAddress, provider, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
