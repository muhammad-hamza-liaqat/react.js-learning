import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import aboutRoutes from './aboutRoutes';
import homeRoutes from './homeRoutes';

const MyRoutes = () =>{
    return(
        <Router>
            <Routes>
                {authRoutes}
                {userRoutes}
                {aboutRoutes}
                {homeRoutes}
            </Routes>
        </Router>
    ) 
} 

export default MyRoutes