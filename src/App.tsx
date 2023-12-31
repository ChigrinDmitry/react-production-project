import React, { Suspense, useContext, useState } from 'react';
import Counter from './components/Counter';
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { ThemeContext, Theme } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Loading ...</div>}>      
          <Routes>
          <Route path={'/'} element={<MainPageAsync />}/>
          <Route path={'/about'} element={<AboutPageAsync />}/>
        </Routes>       
       </Suspense>
    </div>
  );
};

export default App;