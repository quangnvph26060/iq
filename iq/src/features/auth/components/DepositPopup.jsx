

import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

import '../../../assets/styles/components/DepositPopup.css';



const DepositPopup = ({ onClose, onDeposit }) => {
    const [currency, setCurrency] = useState('usdt');
    const [qrUrl, setQrUrl] = useState('');
    const [address, setAddress] = useState('TFJdhryCMsQYvHo7VzLhMoykBMmEzWTu9');

    // const currencyIcons = {
    //     usdt: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    //     btc: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    //     eth: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    //     bnb: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    // };

    useEffect(() => {
        // const iconUrl = currencyIcons[currency];
        // const selectEl = document.getElementById('currency');
        // if (selectEl) {
        //     selectEl.style.backgroundImage = `url(${iconUrl})`;
        // }

        // Update QR code when currency changes
        setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?data=${address}&size=200x200`);
    }, [currency, address]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address).then(() => {
            alert('Copied to clipboard!');
        });
    };
    return (
        <div className=" site-content-in">
            <div className="  card shadow-lg">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="card-title">Deposit Funds</h4>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="currency" className="form-label">Currency</label>
                        <select
                            id="currency"
                            className="form-select form-select-with-icons"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <option value="usdt">USDT</option>
                            <option value="btc">BTC</option>
                            <option value="eth">ETH</option>
                            <option value="bnb">BNB</option>
                        </select>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="network" className="form-label">Network</label>
                        <select className="form-select" id="network">
                            <option>Tron</option>
                            <option>Tron 2</option>
                            <option>Tron 3</option>
                        </select>
                    </div>


                    <div className="alert alert-primary small" role="alert">
                        ⚠ <strong>Do not send assets other than USD Tether on Tron to this address!</strong> Any other assets sent to this address will be lost.
                    </div>


                    <div className="row align-items-center mt-4">
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

                    <hr />

                    <div className="text-muted small mt-4">
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