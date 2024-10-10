import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';

const homeRoutes = [
    <Route key="home" path='/' element={<HomePage />} />
]

export default homeRoutes;