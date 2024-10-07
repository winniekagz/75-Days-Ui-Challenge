
import './App.css'
import { RouterProvider } from 'react-router-dom'

import MainLayout from './layouts'
import { routes } from './router'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

function App() {
  gsap.registerPlugin(useGSAP);


  return (
    <>
  <RouterProvider router={routes} />
    </>
  )
}

export default App
