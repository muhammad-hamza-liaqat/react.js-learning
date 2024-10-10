import React from 'react'
import { Route } from 'react-router-dom'
import About from '../pages/About'

const aboutRoutes = [
    <Route key="about" path='/about' element={<About />} />
]

export default aboutRoutes
