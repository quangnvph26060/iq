
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import TradePage from '../features/auth/components/TradePage';
import DepositPopup from '../features/auth/components/DepositPopup';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import RequireAuth from './RequireAuth';
import RequireNoAuth from './RequireNoAuth';
const AppRoutes = () => {

    return (
        <Routes>
            {/* Layout dành cho chưa đăng nhập */}
            <Route element={
                <RequireNoAuth>
                    <AuthLayout />
                </RequireNoAuth>
            }>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            {/* Layout dành cho đã đăng nhập */}
            <Route element={
                <RequireAuth>
                    <MainLayout />
                </RequireAuth>
            }>
                <Route path="/iqplay" element={<TradePage />} />
                <Route path="/deposit" element={<DepositPopup />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
