
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar.jsx';
import RightSidebar from './components/RightSidebar.jsx';
import Topbar from './components/Topbar.jsx';
import '../assets/styles/components/TradePage.css';
const MainLayout = () => {
    const [isSidebarExpanded, setSidebarExpanded] = useState(true);
    const [isRightSidebarExpanded, setRightSidebarExpanded] = useState(true);
    const sidebarWidthLeft = isSidebarExpanded ? 90 : 50;
    const sidebarWidthRight = isRightSidebarExpanded ? 90 : 50;

    const [showTradeTabs, setShowTradeTabs] = useState(true); 
    return (
        <div className="vh-100 d-flex flex-column bg-dark text-white">
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
                <div className="flex-grow-1">
                <Outlet context={{ showTradeTabs }} />
                </div>
                <div style={{
                    width: `${sidebarWidthRight}px`,
                    flexShrink: 0,
                    transition: 'width 0.3s',
                }}>
                    <RightSidebar
                        collapsed={!isRightSidebarExpanded}
                        toggleSidebar={() => setRightSidebarExpanded(prev => !prev)}
                        onToggleTradeTabs={() => setShowTradeTabs(prev => !prev)} 
                    />
                </div>
            </div>




        </div>
    );
};

export default MainLayout;
