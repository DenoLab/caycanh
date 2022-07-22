import React from 'react'
import { useEffect } from 'react'
import { useStateContext } from '../ContextProvider'
import './Header.css'
import { Navbar } from '../components'

function Header(props) {
  const { activeMobileLayout, setActiveMobileLayout, screenSize, setScreenSize, activeMobileNavbar, setActiveMobileNavbar } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    console.log(screenSize);
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    console.log(screenSize);
    if (screenSize <= 900) {
      setActiveMobileLayout(true)
    } else {
      setActiveMobileLayout(false)
      setActiveMobileNavbar(false)
    }
  }, [screenSize])

  return (
    <div className='CIAOckIsP'>
      <div className='lLcisQaem'>
        {activeMobileLayout &&
          <div className='gDOEXLZdj'>
            <a onClick={() => setActiveMobileNavbar((prevActiveMenu) => !prevActiveMenu)} class="ASTefQmNv">
              <span className='IKBFEImuJ'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
            </a>
          </div>
        }

        <div className='FqXatfvlA'>
          <a className='LubDQOktq' href='/'>
            <img className='skQfnraZJ' src='http://mauweb.monamedia.net/caycanh/wp-content/uploads/2018/03/logo-cay-canh.png' ></img>
          </a>
        </div>

        {!activeMobileLayout &&
          <>
            <div className='DrbQuWmxi'>
              <form className='EkpmkYLqe'>
                <input className='UQuAQCjJJ' type='text' placeholder='Tìm kiếm'></input>
                <button class="vjsLUltGE">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>
            <div className='xoHdNclNb'>
              <p className='BKfWtvnGR'>
                <strong>
                  <a className='KBkDLaJNB' href='tel:0123456789'>0123 456 789</a>
                </strong>
                <br />
                <span className='rqwYGUMUR'>Tổng đài miễn phí</span>
              </p>
              <p className='divider'></p>
              <p className='BKfWtvnGR'>
                <strong>
                  <a className='dFhovvrfP' href='tel:0123456789'>K.NGHIỆM HAY</a>
                </strong>
                <br />
                <span className='XWEcmKDzg'>Hướng dẫn - Mẹo vặt</span>
              </p>
              <p className='divider'></p>
            </div>
          </>
        }

        <div>
          <a href='' className='sUfnEksRi'>
            {!activeMobileLayout &&
              <span className='kdyuCRgtd'>Giỏ hàng /
                <span className='MwHeSuwcs'> 0&nbsp;₫</span>
              </span>}

            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className='UvzrpcfAb' fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </span>
          </a>
        </div>
      </div >

      {/* Khu vực Navbar  */}
      {!activeMobileLayout &&
        <div className='navbar lAFfRRPbT'>
          <Navbar />
        </div>}
    </div>
  );
}

export default Header;