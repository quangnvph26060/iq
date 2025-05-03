import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://your-api.com/register', {
                email,
                password,
                promoCode,
            });
            alert('Registration successful!');
            navigate('/login');
        } catch (error) {
            setError('Đăng ký thất bại! Vui lòng thử lại.');
        }
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            {/* Link đầu trang */}
            <div className="w-100  d-flex justify-content-between align-items-center mb-3 mt-3" >
                <a href="/login" className="d-flex justify-content-center align-items-center custom-link small">
                    <FaChevronLeft className="me-1 text-primary icon-16" />
                    Về trang chủ
                </a>
                <div className="text-muted small">
                    🌐 Tiếng Việt <FaChevronDown className="icon-16" />
                </div>
            </div>

            {/* Form box */}
            <div className="card p-4 shadow-sm text-center" style={{ maxWidth: '600px', width: '100%', borderRadius: '10px' }}>
                <img src="https://pocketoption.com/assets/logo.svg" alt="Logo" className="mb-3" style={{ height: '40px' }} />
                <h3 className="fw-bold mb-1">Đăng ký</h3>
                <p className="mb-3 small">
                    Đã có tài khoản?
                    <a href="/login" className="custom-link" style={{ marginLeft: '10px' }}>Đăng nhập</a>
                </p>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3 border-bottom">
                        <input
                            type="email"
                            className="form-control border-0"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ boxShadow: 'none' }}
                        />
                        <label htmlFor="email" className="text-muted">Email *</label>
                    </div>

                    <div className="form-floating mb-3 border-bottom">
                        <input
                            type="password"
                            className="form-control border-0"
                            id="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ boxShadow: 'none' }}
                        />
                        <label htmlFor="password" className="text-muted">Mật khẩu *</label>
                    </div>

                    <div className="form-floating mb-3 border-bottom">
                        <input
                            type="text"
                            className="form-control border-0"
                            id="promo"
                            placeholder="Mã ưu đãi"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            style={{ boxShadow: 'none' }}
                        />
                        <label htmlFor="promo" className="text-muted">Mã ưu đãi</label>
                    </div>
                    <div className="d-flex  mb-3 small">
                        <div className="d-flex  mb-3 small">
                            <input type="checkbox" className="form-check-input me-1" id="remember" />
                            <label htmlFor="remember" className="form-check-label">Tôi đã đọc và chấp nhận các thỏa thuận sau đây: Đề nghị công khai</label>
                        </div>

                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mb-3"
                        style={{ background: 'linear-gradient(to right, #00aaff, #005eff)' }}
                    >
                        ĐĂNG KÝ
                    </button>
                    <div className="small mb-2">Hoặc đăng ký với </div>
                    <button className="btn btn-light w-100 border d-flex justify-content-center align-items-center">
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" style={{ height: '20px', marginRight: '8px' }} />
                        Google
                    </button>
                </form>
            </div>

            {/* Footer links */}
            <div className="text-center mt-4 small text-muted" style={{ maxWidth: '500px', fontSize: '12px' }}>
                <a href="/contact" className="me-2 text-muted text-decoration-underline">Liên hệ</a>
                <a href="/aml-kyc" className="me-2 text-muted text-decoration-underline">Chính sách AML và KYC</a>
                <a href="/payment-policy" className="me-2 text-muted text-decoration-underline">Chính sách thanh toán</a>
                <a href="/terms" className="me-2 text-muted text-decoration-underline">Các điều khoản và điều kiện</a>
                <a href="/privacy-policy" className="me-2 text-muted text-decoration-underline">Chính sách bảo mật</a>
                <a href="/disclaimer" className="text-muted text-decoration-underline d-block mt-1">Tiết lộ trách nhiệm</a>
            </div>
        </div>
    );
}

export default Register;
