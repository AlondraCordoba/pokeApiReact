import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './components/pokemon/Pokemon';
import Profile from './components/myProfile/MyProfile';
import NotFound from './components/notFound/NotFound';
import Sidebar from './components/common/sidebar/Sidebar';
import './config/configI18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App'>
    <Sidebar/>
    <div className='center-a center-b'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/pokemons/:id' element={<Pokemon/>} />
          <Route path='/191286' element={<Profile/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
