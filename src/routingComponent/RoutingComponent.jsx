import {Link, Outlet} from 'react-router-dom'
import { Header } from '../layout/header/Header'

export const RoutingComponent = () => {
  return (
    <>
     <Header />
     <main>
        <Outlet />
     </main>
    </>
  )
}