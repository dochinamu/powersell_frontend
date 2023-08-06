import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';
import DetailProductPage from './pages/DetailProductPage/DetailProductPage';
import AuthenticationPage from './pages/OrderConfirmPage/AuthenticationPage';
import OrderConfirmPage from './pages/OrderConfirmPage/OrderConfirmPage';

import Grow1 from './api/Grow1';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/product/:productId' element={<DetailProductPage />} />
      <Route path='/authentication' element={<AuthenticationPage />} />
      <Route path='/orderconfirm' element={<OrderConfirmPage/>} />
      
      <Route path='/grow1' element={<Grow1 />} />
    </Routes>
  );
}

export default App;
