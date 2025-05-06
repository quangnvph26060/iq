// src/components/common/BalanceBox.jsx
import React from 'react';

const BalanceBox = ({ balance = 0, currency = 'USDT', width = '122px', height = '42px' }) => {
  return (
    <div
      className="fw-semibold bg-primary text-white px-3 py-1 rounded d-flex flex-column justify-content-center"
      style={{ fontSize: '0.75rem', width, height }}
    >
      <div>Balance {balance} {currency}</div>
    </div>
  );
};

export default BalanceBox;
