import {Link, Outlet} from 'react-router-dom'
import { Header } from '../layout/header/Header'

export const RoutingComponent = ({userStatusOut}) => {
  return (
    <>
     <Header userStatusOut={userStatusOut}/>
     <main>
        <Outlet />
     </main>
    </>
  )
}