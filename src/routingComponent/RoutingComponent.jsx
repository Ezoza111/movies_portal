import {Outlet} from 'react-router-dom'
import { Header } from '../layout/header/Header'
import { ThemeContext } from '../components/smartComponents/context/ThemeContext'
import { useContext } from 'react'

export const RoutingComponent = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <>
      <Header />
      <main className={`main ${isDark ? 'dark' : 'light'}`}>
        <Outlet />
      </main>
    </>
  )
}