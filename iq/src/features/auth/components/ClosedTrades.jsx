import React from 'react';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

const closedTrades = [
    {
        id: 1,
        asset: 'EUR/USD OTC',
        profitPercent: '+91%',
        direction: 'down',
        amount: '$10',
        result: '$19.10',
        netProfit: '+$9.10',
        time: '13:31',
        date: '2025-05-04',
    },
    {
        id: 2,
        asset: 'EUR/USD OTC',
        profitPercent: '+91%',
        direction: 'up',
        amount: '$10',
        result: '$0',
        netProfit: '$0',
        time: '13:31',
        date: '2025-05-04',
    },
    {
        id: 3,
        asset: 'EUR/USD OTC',
        profitPercent: '+91%',
        direction: 'up',
        amount: '$10',
        result: '$0',
        netProfit: '$0',
        time: '13:31',
        date: '2025-05-04',
    },
    {
        id: 4,
        asset: 'EUR/USD OTC',
        profitPercent: '+91%',
        direction: 'down',
        amount: '$10',
        result: '$0',
        netProfit: '$0',
        time: '13:31',
        date: '2025-05-04',
    },
];
const fz = {
    fontSize: '13px'
};

const ClosedTrades = () => {
    const date = closedTrades.length > 0 ? closedTrades[0].date : '';

    return (
        <div>
            <div className="text-center text-white small py-1">{date}</div>
            {closedTrades.map((trade, index) => (
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

export default ClosedTrades;
