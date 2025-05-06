import React, { useState } from 'react';

import '../../../assets/styles/components/WithDraw.css';

const currencyOptions = [
  { name: 'USDT', icon: 'assets/images/usdt.png' },
  { name: 'BTC', icon: 'assets/images/btc.png' },
  { name: 'ETH', icon: 'assets/images/eth.png' },
  { name: 'BNB', icon: 'assets/images/bnb.png' },
];

const Withdraw = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
  const [network, setNetwork] = useState('tron');
  const [address, setAddress] = useState('');

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="site-content-in">
      <div className="card shadow-sm w-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="card-title mb-0">Request a Withdrawal</h5>
          </div>
          <hr />
          <form>
            <div className="row mb-3">
              {/* Currency dropdown */}
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label">Currency</label>
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle w-100 d-flex align-items-center justify-content-between"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="d-flex align-items-center">
                      <img src={selectedCurrency.icon} alt={selectedCurrency.name} className="currency-icon" />
                      {selectedCurrency.name}
                    </span>
                  </button>
                  <ul className="dropdown-menu w-100">
                    {currencyOptions.map((currency) => (
                      <li key={currency.name}>
                        <button
                          className="dropdown-item d-flex align-items-center"
                          type="button"
                          onClick={() => handleCurrencySelect(currency)}
                          style={{ backgroundColor: 'transparent' }}
                        >
                          <img src={currency.icon} alt={currency.name} className="currency-icon" />
                          {currency.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Network */}
              <div className="col-md-6">
                <label htmlFor="network" className="form-label">Network</label>
                <select
                  className="form-select"
                  id="network"
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                >
                  <option value="tron">tron (Tron)</option>
                  <option value="erc20">ERC20</option>
                  <option value="bep20">BEP20</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="New Address"
              />
            </div>
          </form>
        </div>
      </div>

     
    </div>
  );
};

export default Withdraw;