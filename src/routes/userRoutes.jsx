import React from 'react'
import { Route } from 'react-router-dom'
import UserPage from '../pages/UserPage'

const userRoutes = [
    <Route key="user-dashboard" path='/user/dashboard' element={<UserPage />} />,
    <Route key="user-help" path='/user/user-help' element={<UserPage />} />,
    <Route key="user-chat" path='/user/user-chat' element={<UserPage />} />
]

export default userRoutes;