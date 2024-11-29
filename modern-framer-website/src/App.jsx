import { useContext, useState } from 'react'

import './App.css'
import Home from './pages/Home'
import ThemeContext, { ThemeBgContext } from './components/ContextWrapper/ThemeContext'

function App() {
 
  const themectx = useContext(ThemeBgContext);
  console.log('theme',themectx)
  return (
    <>
      <ThemeContext>
      <div className={themectx?.theme === "light" ? "bg-white" : "bg-dark"}>
    <Home/>
    </div>
    </ThemeContext>
    </>
  )
}

export default App
