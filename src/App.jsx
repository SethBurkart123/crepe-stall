import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Buy from './pages/Buy';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <ParallaxProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/buy" element={<Buy />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
