import { ethers } from 'ethers';
import ShopContract from '../contracts/ShopContract.json';

export const getShopContract = (provider) => {
  const signer = provider.getSigner();
  const contract = new ethers.Contract(ShopContract.address, ShopContract.abi, signer);
  return contract;
};
