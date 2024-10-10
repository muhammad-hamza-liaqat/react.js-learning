import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from "../pages/LoginPage"

const authRoutes = [
    <Route key="auth" path='/auth/login' element={<LoginPage />} />,
    <Route key="auth" path='/auth/sign-up' element={<LoginPage />} />
]

export default authRoutes;