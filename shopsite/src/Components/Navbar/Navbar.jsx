import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { RxHamburgerMenu } from 'react-icons/rx'
import SideNav from './SideNav'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authAtom } from '../../store/atom/authAtom'
// import Cookies from 'js-cookie'
const Navbar = () => {
  const [auth, setAuth] = useRecoilState(authAtom)
  console.log(auth)
  const [sidenav, setSideNav] = useState(false)
  const handleHamClick = () => {
    setSideNav(!sidenav)
  }
  const handleLogout = () => {
    setAuth((prev) => !prev)
    localStorage.removeItem('token')
  }
  return (
    <>
      <div className='navbar flex justify-between p-[18px] shadow-md items-center top-0 sticky z-10 bg-white'>
        {/* left side */}
        <div className='brand-name-container'>
          <Link
            to='/'
            className='brand-name'
          >
            DevShop
          </Link>
        </div>

        {/* in middle */}
        <div className='hidden cursor-pointer links-container sm:block'>
          <Link to='/allproducts'>
            <span className='links mx-[1vw]'>Categories</span>
          </Link>
          <Link to='/allproducts'>
            <span className='links mx-[1vw]'>New Arrivals</span>
          </Link>
          <Link to='/allproducts'>
            <span className='links mx-[1vw]'>Features</span>
          </Link>
          <Link to='/allproducts'>
            <span className='links mx-[1vw]'>Collection</span>
          </Link>
        </div>

        {/* in right */}

        <div className='items-center hidden right-container sm:flex'>
          <span className='search mx-[1vw] cursor-pointer'>
            <CiSearch size={20} />
          </span>
          <Link
            to='/cart'
            className='cart mx-[1vw] cursor-pointer'
          >
            <CiShoppingCart size={20} />
          </Link>
          <span className='button-container mx-[1vw]'>
            {auth ? (
              <button
                onClick={handleLogout}
                className=' bg-slate-200 font-medium px-[10px] py-[5px] rounded-md hover:font-semibold'
              >
                Logout
              </button>
            ) : (
              <Link to='/login'>
                <button className=' bg-slate-200 font-medium px-[10px] py-[5px] rounded-md hover:font-semibold'>
                  Login
                </button>
              </Link>
            )}
          </span>
        </div>
        <div
          className='block hamburger sm:hidden'
          onClick={handleHamClick}
        >
          <RxHamburgerMenu size={20} />
        </div>
      </div>

      {/* hamburger */}

      <SideNav
        handleHamClick={handleHamClick}
        sidenav={sidenav}
      />
    </>
  )
}
export default Navbar
