import React, { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../../assets/styles/components/Login.css';
import { registerApi } from '../api/authApi';

function Register() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [userId, setuserId] = useState();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('refId');
        if (id) {
            setuserId(id);
            console.log(id);
          
        }
      }, []);

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await registerApi(form);
            console.log('Đăng ký thành công:', res.data);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Đăng ký thất bại');
        }
    };
    return (
        <div className="blank page-login">
            <div className="portrait-dummy" />
            <div className="wrapper">
                <div className="wrapper__top">
                    <header className="site-header">
                        <div className="login-container">
                            <Link className="site-header__back-btn" to="/login">  Về trang chủ </Link>
                            <div className="site-header__end">
                                <div className="languages js-languages">
                                    <p className="languages__title">
                                        <svg
                                            className="svg-icon language-icon"
                                            fill="none"
                                            height="25"
                                            viewBox="0 0 25 25"
                                            width="25"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#a5640)">
                                                <path
                                                    d="M12.5 24.919c-1.645 0-3.198-.315-4.658-.946a12.164 12.164 0 0 1-3.82-2.576 12.165 12.165 0 0 1-2.576-3.82A11.619 11.619 0 0 1 .5 12.919c0-1.658.315-3.214.946-4.668a12.197 12.197 0 0 1 2.576-3.81 12.166 12.166 0 0 1 3.82-2.576C9.302 1.235 10.855.92 12.5.92c1.658 0 3.214.315 4.668.946 1.453.63 2.723 1.49 3.81 2.576a12.197 12.197 0 0 1 2.576 3.81c.63 1.454.946 3.01.946 4.668a11.62 11.62 0 0 1-.946 4.658 12.166 12.166 0 0 1-2.576 3.82 12.195 12.195 0 0 1-3.81 2.576c-1.454.63-3.01.946-4.668.946Zm0-1.922a17.26 17.26 0 0 0 1.628-2.587c.44-.87.799-1.82 1.076-2.852H9.796c.293 1.064.656 2.031 1.089 2.901.432.87.97 1.716 1.615 2.538Zm-2.446-.347a13.7 13.7 0 0 1-1.305-2.37 15.497 15.497 0 0 1-.898-2.722H3.566a9.902 9.902 0 0 0 2.684 3.307 9.017 9.017 0 0 0 3.804 1.785Zm4.892 0a9.016 9.016 0 0 0 3.804-1.785 9.902 9.902 0 0 0 2.684-3.306H17.15a19.84 19.84 0 0 1-.96 2.734c-.385.885-.8 1.67-1.243 2.357ZM2.771 15.664h4.696c-.08-.47-.137-.93-.173-1.381a17.331 17.331 0 0 1 0-2.728c.036-.451.094-.911.173-1.38H2.771a10.133 10.133 0 0 0-.28 4.151c.066.463.159.909.28 1.338Zm6.59 0h6.278a15.966 15.966 0 0 0 .225-2.745 15.966 15.966 0 0 0-.226-2.745H9.362a15.977 15.977 0 0 0-.225 2.745 15.977 15.977 0 0 0 .226 2.745Zm8.172 0h4.696a10.14 10.14 0 0 0 .28-4.151 9.955 9.955 0 0 0-.28-1.339h-4.696c.08.47.137.93.173 1.381a17.32 17.32 0 0 1 0 2.728c-.036.451-.094.911-.173 1.38Zm-.384-7.385h4.285c-.675-1.328-1.564-2.43-2.666-3.306-1.102-.876-2.376-1.475-3.822-1.797.484.735.915 1.539 1.292 2.412.378.873.681 1.77.911 2.691Zm-7.353 0h5.408a16.254 16.254 0 0 0-1.107-2.918c-.444-.89-.977-1.73-1.597-2.52-.62.79-1.153 1.63-1.597 2.52-.445.89-.814 1.862-1.107 2.918Zm-6.23 0H7.85c.23-.921.533-1.818.91-2.691.378-.873.809-1.677 1.293-2.412-1.454.322-2.73.923-3.828 1.803-1.099.88-1.985 1.98-2.66 3.3Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="a5640">
                                                    <path
                                                        d="M0 0h24v24H0z"
                                                        fill="currentColor"
                                                        transform="translate(.5 .919)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="languages__title-text"> Tiếng Việt </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="wrapper__center">
                    <div className="site-content">
                        <div
                            className="site-content-in"
                            style={{
                                height: "100%",
                            }}>
                            <div className="login login-v2">
                                <div className="login-header">
                                    <div className="brand">
                                        <a href="">
                                            <img src="#" alt="" />
                                        </a>
                                        <h1>Đăng ký</h1>
                                    </div>
                                </div>
                                <div className="login-content">
                                    <p className="login-content__redirect">
                                        Đã đăng ký?
                                        <Link to="/login">Đăng nhập</Link>
                                    </p>
                                    <form
                                        onSubmit={handleSubmit} 
                                        className="form-with-label"
                                    >
                                        <input defaultValue="1" name="submitLogin" type="hidden" />
                                        <div className="ajax-message js-message" />
                                        <div className="step1 js-step1">
                                            <div className="form-group form-group_with-label email-container">
                                                <input
                                                    className="form-control"
                                                    value={form.username}
                                                    onChange={handleChange}
                                                    id="email"
                                                    name="username"
                                                    placeholder="Username *"
                                                    required
                                                    type="text"
                                                />
                                                <label htmlFor="username">
                                                    User Name <span>*</span>
                                                </label>
                                            </div>
                                            <div className="form-group form-group_with-label email-container">
                                                <input
                                                    className="form-control"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email *"
                                                    required
                                                    type="email"
                                                />
                                                <label htmlFor="email">
                                                    Email <span>*</span>
                                                </label>
                                            </div>
                                            <div className="form-group form-group_with-label password-container">
                                                <input
                                                    autoComplete="off"
                                                    className="form-control js-f-pswd-input"
                                                    value={form.password}
                                                    onChange={handleChange}
                                                    id="password"
                                                    name="password"
                                                    placeholder="Mật khẩu *"
                                                    required
                                                    type="password"
                                                />
                                                <label htmlFor="password">
                                                    Mật khẩu <span>*</span>
                                                </label>
                                            </div>
                                            {error && <p style={{ color: 'red' }}>{error}</p>}
                                            <div className="form-bottom rules form-bottom_2-col">
                                                <div className="checkbox">
                                                    <div className="checkbox clearfix m-b-0">
                                                        <p className="ruls">
                                                            <label>
                                                                <input
                                                                    defaultValue="1"
                                                                    name="remember"
                                                                    type="checkbox"
                                                                />
                                                                Tôi đã đọc và chấp nhận các thỏa thuận sau đây: Đề nghị công khai
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step2 js-step2" />
                                        <div className="submit-btn-wrap">
                                            <button className="btn btn-green-light" type="submit">
                                                Đăng ký
                                            </button>
                                        </div>
                                        <div className="form-group social-container">
                                            <p className="social-container__title">Hoặc đăng ký với</p>
                                            <div
                                                className="register-social"
                                                style={{
                                                    textAlign: "center",
                                                }}>
                                                <a
                                                    className="social-btn social-btn--gp"
                                                    href="https://pocketoption.com/vt/login?social=Google">
                                                    Google
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper__bottom">
                    <div className="login-container">
                        <div className="login-footer">
                            <ul className="login-footer-nav">
                                <li className="login-footer-nav__item">
                                    <a
                                        className="login-footer-nav__link"
                                        href="https://pocketoption.com/vt/contacts/">
                                        Liên hệ
                                    </a>
                                </li>
                                <li className="login-footer-nav__item">
                                    <a
                                        className="login-footer-nav__link"
                                        href="https://pocketoption.com/vt/aml-policy/">
                                        Chính sách AML và KYC
                                    </a>
                                </li>
                                <li className="login-footer-nav__item">
                                    <a
                                        className="login-footer-nav__link"
                                        href="https://pocketoption.com/vt/payment-policy/">
                                        Chính sách thanh toán
                                    </a>
                                </li>
                                <li className="login-footer-nav__item">
                                    <a
                                        className="login-footer-nav__link"
                                        href="https://pocketoption.com/vt/public-offer/">
                                        Các điều khoản và điều kiện
                                    </a>
                                </li>
                                <li className="login-footer-nav__item">
                                    <a
                                        className="login-footer-nav__link"
                                        href="https://pocketoption.com/pdf/po_trade/po_privacy_en.pdf">
                                        Chính sách bảo mật
                                    </a>
                                </li>
                                <li className="login-footer-nav__item">
                                    <a
                                        className="login-footer-nav__link"
                                        href="https://pocketoption.com/vt/responsibility-disclosure/">
                                        Tiết lộ trách nhiệm
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
