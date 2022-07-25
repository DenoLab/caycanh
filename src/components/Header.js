import React, { useState } from 'react'
import './Header.css'
import { Navbar, HiddenMenu } from '../components'

function Header({ activeMenu, setActiveMenu }) {

  return (
    <div className='CIAOckIsP' id='header'>

      <div className='lLcisQaem'>
        <div className='gDOEXLZdj'>
          <a onClick={(e) => { setActiveMenu(true) }} class="ASTefQmNv">
            <span className='IKBFEImuJ'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
          </a>
        </div>

        <div className='FqXatfvlA'>
          <a className='LubDQOktq' href='/'>
            <img className='skQfnraZJ' src='http://mauweb.monamedia.net/caycanh/wp-content/uploads/2018/03/logo-cay-canh.png' ></img>
          </a>
        </div>

        <div className='exYhIMzgy'>
          <form className='EkpmkYLqe'>
            <input className='UQuAQCjJJ' type='text' placeholder='Bạn tìm gì...'></input>
            <button class="vjsLUltGE">
              <svg className='cYqhiIaWY' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path className='SnxqWFlOr' stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        <div className='fPbVvXSGW'>
          <div className='xoHdNclNb'>
            <p className='BKfWtvnGR'>
              <strong>
                <a className='KBkDLaJNB' href='tel:01269220162'>0126 922 0162</a>
              </strong>
              <br />
              <span className='rqwYGUMUR'>Tổng đài miễn phí</span>
            </p>
            <p className='divider'></p>
            <p className='BKfWtvnGR'>
              <strong>
                <a className='KBkDLaJNB' href='tel:01269220162'>K.NGHIỆM HAY</a>
              </strong>
              <br />
              <span className='rqwYGUMUR'>Hướng dẫn - Mẹo vặt</span>
            </p>
            <p className='divider'></p>
          </div>
          <a href='' className='sUfnEksRi'>
            <span className='kdyuCRgtd'>Giỏ hàng /
              <span className='MwHeSuwcs'> 0&nbsp;₫</span>
            </span>

            <span className='lvYjkrgYy'>
              <svg xmlns="http://www.w3.org/2000/svg" className='UvzrpcfAb' fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                {/* <path stroke-linecap="round" stroke-linejoin="round" d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" /> */}
              </svg>
            </span>
          </a>
        </div>
      </div >


      <div className='YPYbWjycK'>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;