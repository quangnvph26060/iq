import React, { useState } from 'react';
import '../../../assets/styles/components/TradeTabs.css'; // Đảm bảo bạn tạo file CSS này
import ClosedTrades from "./ClosedTrades";
import TradeOpened from "./TradeOpened";
const TradeTabs = () => {
    const [activeTab, setActiveTab] = useState('closed');

    return (
        <div className="flex-grow-1" style={{ backgroundColor: '#1E1E2F', color: '#fff' }}>
            <div className="">
            <div className="title flex-centered"><span>Giao dịch</span></div>

                <div className="tab-container d-flex">
                    <button
                        className={`tab-btn flex-fill ${activeTab === 'open' ? 'active' : ''}`}
                        onClick={() => setActiveTab('open')}
                    >
                        Đã mở
                    </button>
                    <button
                        className={`tab-btn flex-fill ${activeTab === 'closed' ? 'active' : ''}`}
                        onClick={() => setActiveTab('closed')}
                    >
                        Đóng
                    </button>
                </div>

            </div>

            {/* Nội dung tab */}
            <div className="text-center  text-white">
                {activeTab === 'open' ? <TradeOpened /> : <ClosedTrades/>}
            </div>
        </div>
    );
};

export default TradeTabs;
