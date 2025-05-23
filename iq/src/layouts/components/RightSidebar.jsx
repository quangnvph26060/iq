import React from 'react';
import {
    FaSyncAlt, FaSignal, FaUsers, FaBolt, FaTrophy,
    FaLongArrowAltRight, FaLongArrowAltLeft, FaQuestionCircle,
    FaArrowRight, FaUserFriends
} from 'react-icons/fa';
import '../../assets/styles/components/Sidebar.css';
import { useNavigate } from 'react-router-dom';
const RightSidebar = ({ collapsed, toggleSidebar, onToggleTradeTabs }) => {
    const navigate = useNavigate();
    const items = [
        { label: 'Giao dịch', icon: <FaSyncAlt /> },
        { label: 'Người giới thiệu', icon: <FaUserFriends />,path: '/referrer' },
        { label: 'Tín hiệu', icon: <FaSignal /> },
        { label: 'Giao dịch Xã hội', icon: <FaUsers /> },
        { label: 'Giao dịch nhanh', icon: <FaBolt /> },
        { label: 'Giải đấu', icon: <FaTrophy /> },
        { label: 'Đặt cược chờ', icon: <FaQuestionCircle /> },
        { label: 'Hotkey', icon: <FaArrowRight /> },
    ];

    return (
        <aside className={`bg-dark text-white d-flex flex-column align-items-center ${collapsed ? 'collapsed' : ''}`}
            style={{
                width: collapsed ? '50px' : '90px',
                right: 0,
                position: 'fixed',
                height: '100vh'
            }}>
            <div className="">
                <nav className="main-nav nav flex-column align-items-center">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                if (item.label === 'Giao dịch') {
                                    onToggleTradeTabs?.();
                                } else if (item.path) {
                                    navigate(item.path);
                                }
                            }}
                            className="sidebar-item mt-1 nav-link flex-column d-flex align-items-center text-white px-2 py-1 hover-bg-secondary rounded"
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="me-2 icon">{item.icon}</span>

                            {!collapsed && <span className="nlabel">{item.label}</span>}
                            {collapsed && <span className="tooltip-text">{item.label}</span>}
                        </div>
                    ))}

                </nav>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <div onClick={toggleSidebar} className="arrow-toggle">
                    {collapsed
                        ? <FaLongArrowAltLeft size={20} className="arrow-icon" />
                        : <FaLongArrowAltRight size={20} className="arrow-icon" />}
                </div>

                <div className="text-center small text-muted mt-2">POCKET FRIENDS</div>
            </div>
        </aside>
    );
};

export default RightSidebar;
