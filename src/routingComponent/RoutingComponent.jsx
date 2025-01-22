import {Link, Outlet} from 'react-router-dom'
import { Header } from '../layout/header/Header'

export const RoutingComponent = ({ userName, changeUserStatus}) => {
  return (
    <>
     <Header  userName={userName} changeUserStatus={changeUserStatus}/>
     <main>
        <Outlet />
     </main>
    </>
  )
}