import React from 'react';
import {
    FaChartLine, FaDollarSign, FaUser, FaTrophy, FaLongArrowAltRight,
    FaLongArrowAltLeft, FaQuestionCircle, FaComments, FaSignInAlt, FaUserPlus
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = ({ collapsed, toggleSidebar }) => {
    const items = [
        { label: 'Giao dịch', icon: <FaChartLine /> },
        { label: 'Tài chính', icon: <FaDollarSign /> },
        { label: 'Hồ sơ', icon: <FaUser /> },
        { label: 'Thị trường', icon: <FaChartLine /> },
        { label: 'Thành tựu', icon: <FaTrophy /> },
        { label: 'Trò chuyện', icon: <FaComments /> },
        { label: 'Trợ giúp', icon: <FaQuestionCircle /> },
    ];
    const bottomItems = [
        { label: 'Đăng ký', icon: <FaUserPlus />, path: '/register' },
        { label: 'Đăng nhập', icon: <FaSignInAlt />, path: '/login' },
    ];
    const navigate = useNavigate();
    

    return (
        <aside className={`bg-dark text-white d-flex flex-column align-items-center
             ${collapsed ? 'collapsed' : ''}`}
            style={{
                width: collapsed ? '50px' : '90px',
                height: '100vh',
                position: 'fixed',
                left: 0,
                height: '100vh'
            }}>
            <div className="">
                <nav className="main-nav nav flex-column align-items-center">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="sidebar-item mt-1 nav-link flex-column d-flex align-items-center text-white px-2 py-1 hover-bg-secondary rounded">
                                <span className="me-2 icon">{item.icon}</span>
                                <span className={`nlabel ${collapsed ? 'collapsed' : ''}`}>{item.label}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </nav>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className="w-100 d-flex flex-column align-items-center  mb-2">
                {bottomItems.map((item, index) => (
                        <div
                            key={index}
                            className="sidebar-item mt-1 nav-link flex-column d-flex align-items-center text-white px-2 py-1 hover-bg-secondary rounded"
                            onClick={() => navigate(item.path)}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="me-2 icon">{item.icon}</span>
                            <span className={`nlabel ${collapsed ? 'collapsed' : ''}`}>{item.label}</span>
                        </div>
                    ))}
                </div>

                <div onClick={toggleSidebar} className="mt-1 arrow-toggle">
                    {collapsed
                        ? <FaLongArrowAltRight size={20} className="arrow-icon" />
                        : <FaLongArrowAltLeft size={20} className="arrow-icon" />}
                </div>
            </div>
        </aside>
    );
};

export default LeftSidebar;
