import React from 'react';
import TradePanel from './TradePanel';
import TradeChart from './TradeChart';
import '../../../assets/styles/components/TradePage.css';
const TradePage = () => {

    return (
        <div className="flex-grow-1 overflow-auto hide-scrollbar">
            <div className="container-fluid h-100">
                <div className="row h-100">

                    <div className="col-12 col-lg-7 p-0">
                        <TradeChart />
                    </div>
                    <div className="col-12 col-lg-5 p-0">
                        <TradePanel />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TradePage;
