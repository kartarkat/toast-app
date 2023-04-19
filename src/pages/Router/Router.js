import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodDataProvider from '../../contexts/FoodDataProvider';
import App from '../../App';

function Router() {
  return (
    <FoodDataProvider>
       <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<App />} />
          {/* <Route path={`path`} element={<component />} /> */}
        </Routes>
      </BrowserRouter>
    </FoodDataProvider>
  )
}

export default Router