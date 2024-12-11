import { ReactNode } from 'react'
import NavHeader from './NavContainer'
import Footer from './Footer'

export default function WebLayout({children}:{children:ReactNode}) {
  return (
    <div>
        <NavHeader/>
        {children}
        <Footer/>
    </div>
  )
}
