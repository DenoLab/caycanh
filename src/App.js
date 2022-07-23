import './App.css';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, Navbar } from './components';
import { Homepage, About, Products, Contact, Blog, Locations } from './pages';
import { useStateContext } from './ContextProvider'

function App() {
  const { activeMobileLayout, setActiveMobileLayout, screenSize, setScreenSize, activeMobileNavbar, setActiveMobileNavbar } = useStateContext()

  window.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 200) {
      document.getElementById('header').classList.add('fixed');
    } else {
      document.getElementById('header').classList.remove('fixed');
    }
  })

  return (
    <div className="App">
      <BrowserRouter>
        {activeMobileNavbar &&
          <Navbar />
        }

        <div className='PYZqolzxE'>
          <Header />

          {/* Body */}
          <div className='ljXiyssiW'>
            <Routes>
              <Route path='/' element={<Homepage />} />
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
