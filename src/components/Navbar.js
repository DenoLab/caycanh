import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../ContextProvider'

const Navbar = () => {
  const { activeMobileNavbar, setActiveMobileNavbar } = useStateContext()

  return (
    <>
      {activeMobileNavbar && <div className='WwUkHefbb'>
        <div className='lsuPKLCYu'>
          <NavLink className="nav-link" activeClassName="active" exact to="/" onClick={() => setActiveMobileNavbar((prevActiveMenu) => !prevActiveMenu)}>Trang chủ</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/about" onClick={() => setActiveMobileNavbar((prevActiveMenu) => !prevActiveMenu)}>Giới thiệu</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/products" onClick={() => setActiveMobileNavbar((prevActiveMenu) => !prevActiveMenu)}>Sản phẩm</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/blog" onClick={() => setActiveMobileNavbar((prevActiveMenu) => !prevActiveMenu)}>Kinh nghiệm hay</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/contact" onClick={() => setActiveMobileNavbar((prevActiveMenu) => !prevActiveMenu)}>Liên hệ</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/locations" onClick={() => setActiveMobileNavbar((prevActiveMenu) => !prevActiveMenu)}>Hệ thống siêu thị</NavLink>
        </div>
        <div className='btnClose'>
          <button onClick={() => setActiveMobileNavbar((prevActiveMenu) => !prevActiveMenu)}>Đóng</button>
        </div>
      </div>}

      {!activeMobileNavbar && <div className='mCCRHhUCW'>
        <div className='tYFSQzCXe'>
          <NavLink className="nav-link" activeClassName="active" exact to="/">Trang chủ</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/about">Giới thiệu</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/products">Sản phẩm</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/blog">Kinh nghiệm hay</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/contact">Liên hệ</NavLink>
          <NavLink className="nav-link" activeClassName="active" exact to="/locations">Hệ thống siêu thị</NavLink>
        </div>
      </div>}
    </>
  )
}

export default Navbar