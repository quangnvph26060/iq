

import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import '../../../assets/styles/components/DepositPopup.css';



const DepositPopup = ({ onClose, onDeposit }) => {
    const [currency, setCurrency] = useState('usdt');
    const [qrUrl, setQrUrl] = useState('');
    const [address, setAddress] = useState('');
    const [network, setNetwork] = useState("Polygon USDT");
    const [usdt, setUsdt] = useState("");

    const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();  // Ngăn form tự động submit
       
        // if (usdt < 100) {
        //     alert("Số USDT tối thiểu là 100.");
        //     return;
        // }
        localStorage.setItem("depositInfo", JSON.stringify({ address, usdt }));
        navigate(`/desposit_load`);
    };



    const copyToClipboard = () => {
        navigator.clipboard.writeText(address).then(() => {
            alert('Copied to clipboard!');
        });
    };
    return (
        <div className=" site-content-in">
            <div className="  card shadow-lg">
                <div className="card-body d-flex  flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="card-title">Deposit Funds</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="currency" className="form-label">Currency</label>
                            <select
                                id="currency"
                                className="form-select form-select-with-icons"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option value="usdt">USDT</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="network" className="form-label">Network</label>
                            <select
                                className="form-select"
                                id="network"
                                value={network}
                                onChange={(e) => setNetwork(e.target.value)}
                            >
                                <option value="Polygon USDT">Polygon USDT</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Địa chỉ ví</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Nhập địa chỉ ví"
                                value={address}
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usdt" className="form-label">USDT</label>
                            <input
                                type="number"
                                className="form-control"
                                id="usdt"
                                placeholder="Nhập USDT"
                                min="100"
                                step="any"
                                value={usdt}
                                required
                                onChange={(e) => setUsdt(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary float-end">
                                Lưu
                            </button>
                        </div>
                    </form>
                    <div className="alert alert-primary small mb-3 d-none" role="alert">
                        ⚠ <strong>Do not send assets other than USD Tether on Tron to this address!</strong> Any other assets sent to this address will be lost.
                    </div>


                    <div className="row align-items-center  d-none">
                        <div className="col-md-4 qr-col text-center">
                            <img src={qrUrl || null} alt="QR Code" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <p className="mb-1 fw-bold">Your Tether deposit address:</p>
                            <p className="crypto-address text-break">{address}</p>
                            <button className="btn btn-outline-primary btn-sm" onClick={copyToClipboard}>
                                Copy to clipboard
                            </button>
                        </div>
                    </div>



                    <div className="text-muted small">
                        <hr />
                        <h6>Important notes</h6>
                        <ul className="mb-0">
                            <li>Do not send assets other than USDT Tether on Tron to this address.</li>
                            <li>The minimum deposit amount is 100 USDT.</li>
                            <li>Your deposit will be credited after 10 confirmations on the Tron network.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositPopup;