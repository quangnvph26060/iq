
import React, { useState } from 'react';

import { QRCodeCanvas } from 'qrcode.react';

// import './Popup.css';



const DepositPopup = ({ onClose, onDeposit }) => {
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');

    const [showQR, setShowQR] = useState(false);


    //Xu li logic xac nhan vi o day 
    const handleSubmit = () => {
        const depositAmount = parseFloat(amount);
        if (!address.trim()) {
            alert('Vui lòng nhập địa chỉ ví.');
            return;
        }
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert('Số tiền không hợp lệ');
            return;
        }

        if (!address || !amount || parseFloat(amount) <= 0) {
            alert('Vui lòng nhập đầy đủ địa chỉ ví và số tiền hợp lệ.');
            return;
        }

        setShowQR(true); // Hiện QR khi bấm xác nhận
    };
    //address dia chi vi nhan
    let address_vinhan = '0x51b62F113f05c8Be2E40Cb589a23F3ea85D35356'
    const qrValue = `ethereum:${address_vinhan}?value=${amount}`; // Định dạng URI cơ bản (có thể thay đổi theo chuẩn mạng)


    return (
        <div className="popuplogin">
            <h3>Nạp tiền USDT</h3>

            <input
                type="text"
                placeholder="Nhập địa chỉ ví (from address)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}

            />

            <input
                type="number"
                placeholder="Nhập số tiền"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ marginTop: 10 }}
            />

            <div style={{ marginTop: 10 }}>
                <button onClick={handleSubmit}>Xác nhận</button>
                <button onClick={onClose}>Hủy</button>
            </div>

            {showQR && (
                <div className="qr-container">
                    <p>Quét mã để gửi USDT:</p>
                    <QRCodeCanvas value={qrValue} size={180} />
                    <p className="wallet-address">{address_vinhan}</p> {/* Hiển thị ví nhận */}

                    {/* Trạng thái chờ nạp tiền */}
                    <p className="pending-text">⏳ Đang chờ bạn gửi USDT...</p>
                </div>
            )}

        </div>
    );
};

export default DepositPopup;