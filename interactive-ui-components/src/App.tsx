import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import {  routes } from './router';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function LocationEffect() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return null; // this component doesn't need to render anything
}

function App() {
  LocationEffect()
  return (
 
    <Routes >
    {routes.map((route)=>(<Route path={route.path} element={route.element} key={route.path}/> ))}
  </Routes>
  );
}

export default App;
