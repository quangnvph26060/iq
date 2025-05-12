import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

const COUNTDOWN_DURATION = 10 * 60; // 10 phút

const DepositLoad = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [usdt, setUsdt] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const depositInfo = JSON.parse(localStorage.getItem("depositInfo") || "{}");

    if (!depositInfo.address || !depositInfo.usdt) {
      navigate("/deposit");
      return;
    }

    setAddress(depositInfo.address);
    setUsdt(depositInfo.usdt);

    let startedAt = localStorage.getItem("startedAt");
    if (!startedAt) {
      startedAt = Date.now();
      localStorage.setItem("startedAt", startedAt);
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startedAt) / 1000);
      const remaining = COUNTDOWN_DURATION - elapsed;

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        setExpired(true);
        localStorage.removeItem("startedAt");
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleBack = () => {
    localStorage.removeItem("depositInfo");
    localStorage.removeItem("startedAt");
    navigate("/deposit");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center border rounded p-4 shadow" style={{ maxWidth: 450, backgroundColor: '#f8f9fa' }}>
        <h4 className="mb-3">Deposit Confirmation</h4>

        <p className="mb-1">
          <strong>Time remaining:</strong>{' '}
          <span className="text-danger">{formatTime(timeLeft)}</span>
        </p>

        <div className="my-3">
          <p><strong>Amount to Deposit:</strong> {usdt} USDT</p>
          <p><strong>Address:</strong> <code>{address}</code></p>
        </div>

        <div className="mb-4">
          <QRCodeCanvas value={address} size={180} />
        </div>

        <div className="text-muted small">
          <p>Scan the QR code above with your wallet to send the USDT to this address.</p>
          <p><strong>Important Notes:</strong></p>
          <ul>
            <li>Ensure the network is Polygon (MATIC) when sending.</li>
            <li>Minimum deposit: 100 USDT</li>
            <li>Transaction will be credited after 10 confirmations.</li>
          </ul>
        </div>

        <div className="alert alert-warning mt-3" role="alert">
          ⚠ <strong>Do not send assets other than USDT on Polygon to this address!</strong> Any other assets sent will be lost.
        </div>
      </div>

      {expired && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
          <div className="bg-white p-4 rounded shadow text-center" style={{ maxWidth: 400 }}>
            <h5 className="mb-3">Transaction Expired</h5>
            <p className="mb-4">Your deposit session has expired. Please go back to create a new transaction.</p>
            <button className="btn btn-primary" onClick={handleBack}>Go Back to Deposit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepositLoad;
