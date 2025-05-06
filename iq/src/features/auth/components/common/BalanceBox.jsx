
import React, { useEffect, useState } from 'react';
import axiosClient from '../../../../api/axiosClient.js';
const BalanceBox = ({ balance = 0, currency = 'USDT', width = '122px', height = '42px' }) => {
  const [walletData, setWalletData] = useState(null);
  const WalletApi = () => axiosClient.get('http://14.225.207.29:3003/wallet');
  const fetchWallet = async () => {
      try {
          const response = await WalletApi();

          setWalletData(response.data);
      } catch (error) {
          console.error('Error fetching wallet:', error);
      }
  };
  
  useEffect(()=>{
      fetchWallet();
  },[])
  return (
    <div
    className="fw-semibold bg-primary text-white px-3 py-1 rounded d-flex flex-column justify-content-center"
    style={{
      fontSize: '0.75rem',
      whiteSpace: 'nowrap',       
      width: 'fit-content',        
      height,                      
    }}
  >
    <div>Balance {walletData?.['balance']} {currency}</div>
  </div>
  
  );
};

export default BalanceBox;
