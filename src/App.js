import './App.css';
import 'animate.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, Navbar, HiddenMenu } from './components';
import { Homepage, About, Products, Contact, Blog, Locations } from './pages';
import { useStateContext } from './ContextProvider'
import { Link, NavLink } from 'react-router-dom'

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeMobileLayout, setActiveMobileLayout] = useState(false)
  const [screenSize, setScreenSize] = useState(undefined);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    console.log(screenSize);
  }, [screenSize])

  window.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 200) {
      document.getElementById('header').classList.add('fixed');
      document.getElementById('empty-header').classList.add('show');
    } else {
      document.getElementById('header').classList.remove('fixed');
      document.getElementById('empty-header').classList.remove('show');
    }
  })

  return (
    <div className="App">
      <BrowserRouter>


        <div className='PYZqolzxE'>
          {activeMenu && <div className='UoIdFTvxG'>
            <HiddenMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>}
          <div className='TPojohRJJ' id='empty-header'></div>
          <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          {/* Body */}
          <div className='ljXiyssiW'>
            <Routes>
              <Route path='/' element={<Homepage screenSize={screenSize} />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Products />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/locations' element={<Locations />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
