import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

const PageNotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1 style={{ fontSize: '5rem', color: '#FF6347' }}>404</h1>
            <h2>Trang không tìm thấy</h2>
            <p>
                Trang bạn tìm kiếm không tồn tại. Vui lòng quay lại{' '}
                <Link to="/iqplay" style={{ color: '#00f', textDecoration: 'underline' }}>trang chủ</Link>.
            </p>
        </div>
    );
};

export default PageNotFound;
