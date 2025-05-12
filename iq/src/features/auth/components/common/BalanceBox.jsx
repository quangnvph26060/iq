
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BalanceBox = ({ balance = 0, currency = 'USDT', width = '122px', height = '42px' }) => {
  const [walletData, setWalletData] = useState(null);
  const WalletApi = async () => {
    const token = localStorage.getItem('accessToken');
  
    return axios.get('http://14.225.207.29:3003/wallet', {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      }
    });
  };
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
    <div>Balance {walletData?.['balance'] ?? 0} {currency}</div>
  </div>
  
  );
};

export default BalanceBox;
