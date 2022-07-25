import React from 'react'
import './HiddenMenu.css'
import { Link, NavLink } from 'react-router-dom'

const HiddenMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className='NAFKifZMn'>
      <div className='lsuPKLCYu'>
        <NavLink className="kKrGnMKZo" activeClassName="active" exact to="/" onClick={() => { setActiveMenu(false) }}>Trang chủ</NavLink>
        <NavLink className="kKrGnMKZo" activeClassName="active" exact to="/about" onClick={() => { setActiveMenu(false) }}>Giới thiệu</NavLink>
        <NavLink className="kKrGnMKZo" activeClassName="active" exact to="/products" onClick={() => { setActiveMenu(false) }}>Sản phẩm</NavLink>
        <NavLink className="kKrGnMKZo" activeClassName="active" exact to="/blog" onClick={() => { setActiveMenu(false) }}>Kinh nghiệm hay</NavLink>
        <NavLink className="kKrGnMKZo" activeClassName="active" exact to="/contact" onClick={() => { setActiveMenu(false) }}>Liên hệ</NavLink>
        <NavLink className="kKrGnMKZo" activeClassName="active" exact to="/locations" onClick={() => { setActiveMenu(false) }}>Hệ thống siêu thị</NavLink>
        <div className='btnClose'>
          <button onClick={() => {
            console.log(activeMenu)
            setActiveMenu(false)
          }}>Đóng</button>
        </div>
      </div>
    </div>
  )
}

export default HiddenMenu