import {Outlet} from 'react-router-dom'
import { Header } from '../layout/header/Header'
import { useTheme } from 'styled-components'

export const RoutingComponent = ({ userName, changeUserStatus}) => {
  const {isDark, toogleTheme} = useTheme()
  return (
    <>
     <Header  userName={userName} changeUserStatus={changeUserStatus}/>
     <main className={`main ${isDark ? 'dark' : 'light'}`}>
        <Outlet />
     </main>
    </>
  )
}