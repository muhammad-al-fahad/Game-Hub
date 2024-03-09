import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar'

const Layout = () => {
  return (
    <>
        <div className="fixed top-0 left-0 z-10 grid w-full grid-cols-1 bg-white h-fit dark:bg-slate-800 drop-shadow-md">
            <Navbar/>
        </div>
        <Outlet />
    </>
  )
}

export default Layout