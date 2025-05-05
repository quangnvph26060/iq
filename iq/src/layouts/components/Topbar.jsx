import React from 'react';
import { FaStar, FaSyncAlt,FaUserCircle  } from 'react-icons/fa';
import '../../assets/styles/components/Topbar.css';
const Topbar = () => {
    return (
        <header className="bg-dark text-white px-3 py-2 d-flex justify-content-between align-items-center border-bottom border-secondary">
            {/* Logo + Tên + Star */}
            <div className="d-flex align-items-center gap-2">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/63/PocketOption_logo.png"
        alt="PocketOption"
        style={{ height: '24px' }}
    />
    <button
        className="btn btn-outline-secondary btn-sm star-btn"
        style={{ borderRadius: '6px', width: '42px', height: '42px', padding: 0 }}
    >
        <FaStar className="star-icon" color="#6c757d" size={18} />
    </button>
</div>


            <div className="d-flex align-items-center gap-3">
                <div
                    className="bg-primary text-white px-3 py-1 rounded d-flex flex-column justify-content-center"
                    style={{ fontSize: '0.75rem', width: '237px', height: '42px' }}
                >
                    <div>🎁 NHẬN 50% TIỀN THƯỞNG</div>
                    <small className="text-white-50">Mở tài khoản thực</small>
                </div>


                <div className="text-end">
                    <div style={{ fontSize: '0.75rem' }} className="text-white-50">QT Demo - USD</div>
                    <div className="d-flex align-items-center">
                        <strong>$50,000</strong>
                        <FaSyncAlt className="ms-2 text-white-50" />
                    </div>
                </div>

                <button className="btn btn-success btn-sm px-3">NẠP TIỀN</button>

                <div
                    className="rounded-circle bg-secondary"
                    style={{ width: '42px', height: '42px' }}
                >
                    <FaUserCircle   size={42} />
                </div>
            </div>
        </header>
    );
};

export default Topbar;
