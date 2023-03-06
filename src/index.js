import React from 'react';
import { Route, Routes } from "react-router-dom";
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Try1left from "./components/Try1left";
import Landing from "./components/Landing";
import Lose from "./components/Lose";
import Win from "./components/Win";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>

    <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/App" element={<App/>}/>
          <Route path="/Win" element={<Win/>}/>
          <Route path="/Lose" element={<Lose/>}/>
          <Route path="/Try1left" element={<Try1left text="OH... THIS IS YOUR LAST ATTEMPT TO WIN YOURSELF A RC AMERICAN PRIDE HIGHBALL"/>}/>
          <Route path="/Try2left" element={<Try1left text="GREAT! YOU HAVE TWO MORE ATTEMPTS TO WIN YOURSELF A COMPLEMENTARY RC AMERICAN PRIDE HIGHBALLl"/>}/>
        </Routes>
   
  </BrowserRouter>
 );

