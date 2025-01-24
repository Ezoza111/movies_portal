import {Outlet} from 'react-router-dom'
import { Header } from '../layout/header/Header'
import { ThemeContext } from '../components/smartComponents/context/ThemeContext'
import { useContext } from 'react'

export const RoutingComponent = ({ userName, changeUserStatus}) => {
 const {isDark} = useContext(ThemeContext);
  return (
    <>
     <Header  userName={userName} changeUserStatus={changeUserStatus}/>
     <main className={`main ${isDark ? 'dark' : 'light'}`}>
        <Outlet />
     </main>
    </>
  )
}