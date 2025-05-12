import React, { useState, useEffect } from 'react';
import {
    FaArrowAltCircleUp,
    FaArrowAltCircleDown,
    FaInfoCircle,
    FaClock,
    FaDollarSign,
    FaArrowCircleUp,

} from 'react-icons/fa';
import { useAuth } from '../../../contexts/AuthContext';
import '../../../assets/styles/components/LeftPanel.css'
const LeftPanel = () => {
    const popupStyles = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#2a2a2a',
        color: '#fff',
        padding: '20px 30px',
        borderRadius: '10px',
        zIndex: 9999,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '400px',
        width: '80%',
        textAlign: 'center',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
    };

    const popupContentStyles = {
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px',
    };

    const closeBtnStyles = {
        padding: '8px 16px',
        backgroundColor: '#f44336',
        border: 'none',
        color: '#fff',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

   
    const boxStyle = {
        backgroundColor: '#2A2A3D',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 600,
        padding: '0 10px 0 8px'
    };
    const CYCLE_DURATION = 5 * 60 * 1000; // 5 phút

    const [trades, setTrades] = useState([]);
    const [value, setValue] = useState('10');
    const { addTrade } = useAuth();
    const [timeInput, setTimeInput] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [popupShown, setPopupShown] = useState(false);
    const formatTime = (milliseconds) => {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${minutes}:${secs}`;
    };
    useEffect(() => {
        let start = localStorage.getItem("lastCycleStart");

        // Nếu chưa có thời gian bắt đầu chu kỳ, thiết lập thời gian mới
        if (!start) {
            start = Date.now();
            localStorage.setItem("lastCycleStart", start);
        }

        const interval = setInterval(() => {
            const now = Date.now();
            const elapsed = now - start;
            let remaining = CYCLE_DURATION - (elapsed % CYCLE_DURATION);

            // Khi thời gian còn lại là 0, cập nhật lại thời gian bắt đầu để tiếp tục chu kỳ
            if (remaining <= 0) {
                start = Date.now();
                localStorage.setItem("lastCycleStart", start);
                remaining = CYCLE_DURATION;
            }

            setTimeLeft(remaining);
            setTimeInput(formatTime(remaining));

            // Hiển thị popup khi còn 1 phút và chưa hiển thị popup
            if (remaining <= 60 * 1000 && !popupShown) {
                setShowPopup(true);
                setPopupShown(true); // Đánh dấu là đã hiển thị popup
                setTimeout(() => setShowPopup(false), 2000); // Ẩn popup sau 2 giây
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [popupShown]);
    // const handleTimeChange = (e) => {
    //     let newTime = e.target.value;

    //     const regex = /^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
    //     if (regex.test(newTime)) {
    //         setTimeInput(newTime);
    //         const [hours, minutes, seconds] = newTime.split(':');
    //         const updatedTime = new Date();
    //         updatedTime.setHours(parseInt(hours) || 0);
    //         updatedTime.setMinutes(parseInt(minutes) || 0);
    //         updatedTime.setSeconds(parseInt(seconds) || 0);

    //         setSelectedTime(updatedTime);
    //     }
    // };
    const handleTimeChange = (e) => {
        setTimeInput(e.target.value);
    };
    const handleClosePopup = () => {
        setShowPopup(false); // Đóng popup khi bấm nút Close
    };

    const formatNumber = (num) => {
        if (!num) return '';
        const cleaned = num.replace(/,/g, '');
        const number = parseInt(cleaned);
        if (isNaN(number)) return '';
        return number.toLocaleString();
    };

    const handleChange = (e) => {
        const raw = e.target.value.replace(/[^\d]/g, '');
        const formatted = formatNumber(raw);
        setValue(formatted);
    };
    const handleTradeClick = (direction) => {
        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue) || parsedValue <= 0) {
            setValue('1');
            return;
        }
        // const seconds = selectedTime.getSeconds();
        // const hours = selectedTime.getHours();
        // const minutes = selectedTime.getMinutes();
        // const formattedHours = hours < 10 ? `0${hours}` : hours;
        // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        // const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        const now = new Date();
        const date = now.toISOString().split('T')[0]; // yyyy-mm-dd

        const newTrade = {
            id: trades.length + 1,
            asset: 'EUR/USD OTC',
            profitPercent: '+91%',
            direction, // 'up' hoặc 'down'
            amount: `${parsedValue}`,
            result: '$0',
            netProfit: '$0',
            // time: `${formattedHours}:${formattedMinutes}:${formattedSeconds}`,
            date,
        };


        setTrades(prev => [...prev, newTrade]);
        addTrade(newTrade);
    };


    return (
        <div
            className="p-3 position-relative"
            style={{ width: '190px', backgroundColor: '#23283b', height: '100vh' }}
        >
            {/* Thời gian */}
            <div className="mb-3 position-relative">
                <label className="form-label d-flex align-items-center gap-1 text-white mb-1">
                    Thời gian <FaInfoCircle size={12} />
                </label>
                <div className="d-flex align-items-center"
                    style={{
                        backgroundColor: '#2A2A3D',
                        borderRadius: '6px',
                        height: '36px',
                        padding: '0 10px 0 8px',
                        border: '1px solid rgb(88 88 88)',
                    }}>
                    <input
                        type="text"
                        value={timeInput}
                        onChange={handleTimeChange}

                        className="form-control text-white bg-transparent border-0 p-0 m-0 me-2"
                        style={{
                            boxShadow: 'none',
                            fontSize: '14px',
                            fontWeight: 600,
                            width: '100%',
                        }}
                        placeholder="MM:SS"
                        readOnly // vì đây là countdown
                    />
                    <FaClock size={12} className="text-white" />
                </div>
            </div>


            {/* Số tiền */}
            <div className="mb-3">
                <label className="form-label d-flex align-items-center gap-1 text-white mb-1">
                    Số tiền <FaInfoCircle size={12} className="text-white" />
                </label>
                <div
                    className="d-flex align-items-center"
                    style={{
                        backgroundColor: '#2A2A3D',
                        borderRadius: '6px',
                        height: '36px',
                        padding: '0 10px 0 8px',
                        border: '1px solid rgb(88 88 88)',
                    }}
                >
                    <input
                        type="text"

                        className="form-control text-white bg-transparent border-0 p-0 m-0 me-2"
                        style={{ boxShadow: 'none', fontSize: '14px', fontWeight: 600, width: '100%' }}
                        value={value}
                        onChange={handleChange}
                        inputMode="numeric"
                        pattern="[0-9]*"
                    />
                    <FaDollarSign size={12} className="text-white" />
                </div>
            </div>

            {/* Thanh toán */}
            <div className="mb-3">
                <label className="form-label d-flex align-items-center gap-1 text-white mb-1">
                    Thanh toán <FaInfoCircle size={12} />
                </label>
                <div
                    style={{
                        ...boxStyle,
                        textAlign: 'center',
                        width: '158px',
                        height: '44px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        border: '1px dashed rgb(88 88 88)',
                    }}
                >
                    <div className="text-success fw-bold small">+92%</div>
                    <div className="text-success small">+$19.20</div>
                </div>
            </div>

            {/* Nút MUA & BÁN */}
            <div className="d-flex flex-column gap-2">
                <button className="btn btn-success buy-btn d-flex align-items-center justify-content-start gap-2 fw-semibold py-2"
                    onClick={() => handleTradeClick('up')} >
                    <FaArrowCircleUp className="buy-icon" /> MUA
                </button>

                <button className="btn btn-danger sell-btn d-flex align-items-center justify-content-start gap-2 fw-semibold py-2"
                    onClick={() => handleTradeClick('down')}>
                    <FaArrowCircleUp className="sell-icon" /> BÁN
                </button>

            </div>
            {/* Popup thông báo khi còn 1 phút */}
            {showPopup && (
                <div className="popup" style={popupStyles}>
                    <div className="popup-content" style={popupContentStyles}>
                        <h5>Time's up! The bet period has ended.</h5>
                        <button onClick={handleClosePopup} className="close-btn" style={closeBtnStyles}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeftPanel;
