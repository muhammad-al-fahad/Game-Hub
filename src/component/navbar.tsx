import { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import { FaMoon, FaSun } from 'react-icons/fa6'

const Navbar = () => {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if(theme) setTheme(theme);
  }, [])

  useEffect(() => {
    const darkMode = localStorage.getItem('theme');
    
    if(darkMode === 'light') {
      document.documentElement.classList.add(darkMode)
      document.documentElement.classList.remove('dark')
    } else if(darkMode === 'dark'){
      document.documentElement.classList.add(darkMode)
      document.documentElement.classList.remove('light')
    }
  }, [theme])

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <nav className='px-2 max-w-screen sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex space-x-6'>
            <img src={Logo} alt="" className='' width={50} height={50}/>
            <h3 className='text-2xl text-black dark:text-white'>Navbar</h3>
          </div>
          {
            theme === 'light'
              ? <FaSun className='text-3xl text-cyan-500' onClick={handleTheme}/>
              : <FaMoon className='text-3xl dark:text-cyan-500' onClick={handleTheme}/>
          }
        </div>
    </nav>
  )
}

export default Navbar