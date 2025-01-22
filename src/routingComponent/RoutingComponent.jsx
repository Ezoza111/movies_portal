import {Link, Outlet} from 'react-router-dom'
import { Header } from '../layout/header/Header'

export const RoutingComponent = ({userStatusOut, changeUserStatus}) => {
  return (
    <>
     <Header changeUserStatus={changeUserStatus} userStatusOut={userStatusOut}/>
     <main>
        <Outlet />
     </main>
    </>
  )
}