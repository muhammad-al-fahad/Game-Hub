import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar'

const Layout = () => {
  return (
    <>
        <div className="grid grid-cols-1">
            <Navbar/>
        </div>
        <Outlet />
    </>
  )
}

export default Layout