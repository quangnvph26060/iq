import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Topbar from './Topbar';
import TradePanel from './TradePanel';
import TradeChart from './TradeChart';
import './TradePage.css';
const TradePage = () => {
    const [isSidebarExpanded, setSidebarExpanded] = useState(true);
    const [isRightSidebarExpanded, setRightSidebarExpanded] = useState(true);
    const sidebarWidthLeft = isSidebarExpanded ? 90 : 50;
    const sidebarWidthRight = isRightSidebarExpanded ? 90 : 50;
    return (
        <div className="vh-100 d-flex flex-column bg-dark text-white">
            {/* Thanh trên cùng */}
            <Topbar />
            <div className="d-flex flex-grow-1 overflow-hidden" style={{ height: '100vh' }}>
                <div style={{
                    width: `${sidebarWidthLeft}px`,
                    flexShrink: 0,
                    transition: 'width 0.3s',
                }}>
                    <LeftSidebar
                        collapsed={!isSidebarExpanded}
                        toggleSidebar={() => setSidebarExpanded(prev => !prev)}
                    />
                </div>
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

                <div style={{
                    width: `${sidebarWidthRight}px`,
                    flexShrink: 0,
                    transition: 'width 0.3s',
                }}>
                    <RightSidebar
                        collapsed={!isRightSidebarExpanded}
                        toggleSidebar={() => setRightSidebarExpanded(prev => !prev)}
                    />
                </div>
            </div>




        </div>
    );
};

export default TradePage;
