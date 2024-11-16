import { ethers } from 'ethers';
import ShopArtifact from '../contracts/Shop.json';
import ContractAddress from '../contracts/contract-address.json';

export const getShopContract = (provider) => {
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    ContractAddress.Shop,
    ShopArtifact.abi,
    signer
  );
  return contract;
};
