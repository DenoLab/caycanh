import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      {/* {activeMenu &&
        <div className='NAFKifZMn'>
          <div className='lsuPKLCYu'>
            <NavLink className="nav-link" activeClassName="active" exact to="/" onClick={() => { setActiveMenu(false) }}>Trang chủ</NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/about" onClick={() => { setActiveMenu(false) }}>Giới thiệu</NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/products" onClick={() => { setActiveMenu(false) }}>Sản phẩm</NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/blog" onClick={() => { setActiveMenu(false) }}>Kinh nghiệm hay</NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/contact" onClick={() => { setActiveMenu(false) }}>Liên hệ</NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/locations" onClick={() => { setActiveMenu(false) }}>Hệ thống siêu thị</NavLink>
          </div>
          <div className='btnClose'>
            <button onClick={() => { setActiveMenu(false) }}>Đóng</button>
          </div>
        </div>} */}

      <div className='tYFSQzCXe'>
        <NavLink className="pQnCIyNkY" activeClassName="active" exact to="/">Trang chủ</NavLink><p className='divider-navbar'></p>
        <NavLink className="pQnCIyNkY" activeClassName="active" exact to="/about">Giới thiệu</NavLink><p className='divider-navbar'></p>
        <NavLink className="pQnCIyNkY" activeClassName="active" exact to="/products">Sản phẩm</NavLink><p className='divider-navbar'></p>
        <NavLink className="pQnCIyNkY" activeClassName="active" exact to="/blog">Kinh nghiệm hay</NavLink><p className='divider-navbar'></p>
        <NavLink className="pQnCIyNkY" activeClassName="active" exact to="/contact">Liên hệ</NavLink><p className='divider-navbar'></p>
        <NavLink className="pQnCIyNkY" activeClassName="active" exact to="/locations">Hệ thống siêu thị</NavLink>
      </div>
    </>
  )
}

export default Navbar