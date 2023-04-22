import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodDataProvider from '../../contexts/FoodDataProvider';
import App from '../../App';
import Events from '../Events/Events';
import Order from '../Orders/Orders';

function Router() {
  return (
    <FoodDataProvider>
       <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/events"} element={<Events />} />
          <Route path={"/orders"} element={<Order />} />
          <Route path={"/*"} element={<div>404 - Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </FoodDataProvider>
  )
}

export default Router