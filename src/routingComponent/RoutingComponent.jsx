import {Link, Outlet} from 'react-router-dom'
import { Header } from '../layout/header/Header'
import { useState } from 'react'

export const RoutingComponent = ({ userName, changeUserStatus}) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`mainStyles ${isDark ? 'dark' : 'light'}`} isDark = {isDark}>
     <Header  userName={userName} changeUserStatus={changeUserStatus} isDark = {isDark}/>
     <main className={`main ${isDark ? 'dark' : 'light'}`}>
        <Outlet />
     </main>
    </div>
  )
}