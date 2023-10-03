import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, GradoPage } from './pages'
import { Navbar } from './components';

export const AppRouter = () => {
    return <>
    
    <Navbar />

    <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/grado/:grado' element={ <GradoPage /> } />
    </Routes>
    </>
}