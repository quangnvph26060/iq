import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

const fz = {
    fontSize: '13px'
};

const TradeOpened = () => {
    const { trades } = useAuth();
    const date = trades.length > 0 ? trades[0].date : '';
   
    return (
        <div>
            <div className="text-center text-white small py-1">{date}</div>
            {trades.map((trade, index) => (
                <div
                    key={trade.id}
                    className={`d-flex justify-content-between align-items-center px-2 py-1  border-secondary`}
                    style={{
                        backgroundColor: index % 2 === 0 ? '#383850' : '#2A2A3D',
                    }}
                >
                    <div>
                        <div className="text-warning " style={fz}>
                            {trade.asset} <span className="text-success">{trade.profitPercent}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            {trade.direction === 'up' ? (
                                <FaArrowCircleUp className="text-success" />
                            ) : (
                                <FaArrowCircleDown className="text-danger" />
                            )}
                            <span className="text-white">{trade.amount}</span>
                        </div>
                    </div>
                    <div className="text-end">
                        <div className="text-success">{trade.result}</div>
                        <div className={`small ${trade.netProfit.startsWith('+') ? 'text-success' : 'text-white'}`}>
                            {trade.netProfit}
                        </div>
                    </div>
                    <div className="text-white small">{trade.time}</div>
                </div>
            ))}

        </div>
    );
};

export default TradeOpened;
