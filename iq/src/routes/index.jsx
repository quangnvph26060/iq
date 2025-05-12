
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import TradePage from '../features/auth/components/TradePage';
import DepositPopup from '../features/auth/components/DepositPopup';
import WithDraw from '../features/auth/components/WithDraw';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import RequireAuth from './RequireAuth';
import RequireNoAuth from './RequireNoAuth';
import ReferrerTable from "../features/auth/components/tables/ReferrerTable";
import PageNotFound from '../features/auth/components/PageNotFound';
import DepositLoad from '../features/auth/components/DepositLoad';
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
                <Route path="/referrer" element={<ReferrerTable />}/>
                <Route path="/iqplay" element={<TradePage />} />

            </Route>
            <Route element={
                <RequireAuth>
                    <AuthLayout />
                </RequireAuth>
            }>
                <Route path="/deposit" element={<DepositPopup />} />
                 <Route path="/desposit_load" element={<DepositLoad />} />
                <Route path="/withdraw" element={<WithDraw />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default AppRoutes;
