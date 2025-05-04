import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-clock/dist/Clock.css';
import {
    FaArrowAltCircleUp,
    FaArrowAltCircleDown,
    FaInfoCircle,
    FaClock,
    FaDollarSign,
    FaArrowCircleUp,

} from 'react-icons/fa';
import './LeftPanel.css'
const LeftPanel = () => {
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

    const [value, setValue] = useState('1,000');
    const [showPicker, setShowPicker] = useState(false);
    const [time, setTime] = useState('00:00:05');
    const [selectedTime, setSelectedTime] = useState(new Date());
    const togglePicker = () => setShowPicker((prev) => !prev);

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
                <div className="position-relative">
                    <DatePicker
                        selected={selectedTime}
                        onChange={(date) => setSelectedTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={1}
                        timeCaption="Giờ"
                        dateFormat="HH:mm:ss"
                        customInput={
                            <div
                                className="form-control d-flex justify-content-between align-items-center text-white"
                                style={{
                                    backgroundColor: '#2A2A3D',
                                    height: '36px',
                                    width: '160px',
                                    padding: '0 10px 0 8px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    border: '1px solid rgb(88 88 88)',
                                }}
                            >
                                <span>{selectedTime.toLocaleTimeString('vi-VN')}</span>
                                <FaClock size={12} className="text-white" />
                            </div>
                        }
                    />
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
            <button className="btn btn-success buy-btn d-flex align-items-center justify-content-start gap-2 fw-semibold py-2">
    <FaArrowCircleUp className="buy-icon" /> MUA
</button>

                <button className="btn btn-danger sell-btn d-flex align-items-center justify-content-start gap-2 fw-semibold py-2">
                    <FaArrowCircleUp className="sell-icon" /> BÁN
                </button>

            </div>
        </div>
    );
};

export default LeftPanel;
