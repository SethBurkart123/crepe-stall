import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-80 transition duration-300 ease-in-out ${!top && 'bg-gray-100 backdrop-blur-lg shadow-lg'}`}>
      <div className="max-w-6xl px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="flex text-white align-middle" aria-label="logo">
              <img src="src/images/logo.svg" alt="logo" className="w-12 h-12" />
              <p className="pl-4 my-auto text-3xl text-transparent dancing bg-gradient-to-tr from-red-600 to-yellow-500 bg-clip-text">La Creperie</p>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-wrap items-center justify-end flex-grow">
              <li>
                <Link to="/signup" className="hidden ml-3 text-gray-200 bg-gray-900 btn-sm hover:bg-gray-800">
                  <span>Preorder Now</span>
                  <svg className="flex-shrink-0 w-3 h-3 ml-2 -mr-1 text-gray-400 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
