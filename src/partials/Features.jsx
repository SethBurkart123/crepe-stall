import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import Countdown from '../components/countdown';
import { useParallax } from 'react-scroll-parallax';

import StripeSecurity from '../images/stripe-security.png';
import Speed from '../images/Speed.jpg';
import Crepes from '../images/crepe.png';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
  
  const parallax = useParallax({
    speed: 100,
  });
  return (
    <section className="relative">
      <div ref={parallax.ref} className="absolute transform pointer-events-none left-1/2" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 mb-16 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl pb-16 mx-auto text-center md:pb-32">
            <h1 className="mb-4 text-xl sm:text-4xl h3">Pre-Order Now for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">20% Off!</span></h1>
            <h1 className="mb-4 text-3xl sm:text-6xl h1">Offer Ends in: <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"><Countdown time="September 14,2022"></Countdown></span></h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">Choose Your Own Toppings</div>
                    <div className="text-gray-600">Whatever you want! Take all or nothing.</div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4 2.44772 3.55229 2 3 2C2.44772 2 2 2.44772 2 3V13.2413C1.99999 14.0463 1.99998 14.7106 2.04419 15.2518C2.09012 15.8139 2.18868 16.3306 2.43597 16.816C2.81947 17.5686 3.43139 18.1805 4.18404 18.564C4.66937 18.8113 5.18608 18.9099 5.74818 18.9558C6.28936 19 6.95372 19 7.75868 19H14.126C14.5701 20.7252 16.1362 22 18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C16.1362 14 14.5701 15.2748 14.126 17H7.8C6.94342 17 6.36113 16.9992 5.91104 16.9624C5.47262 16.9266 5.24842 16.8617 5.09202 16.782C4.7157 16.5903 4.40973 16.2843 4.21799 15.908C4.1383 15.7516 4.07337 15.5274 4.03755 15.089C4.00078 14.6389 4 14.0566 4 13.2V9L14.126 9C14.5701 10.7252 16.1362 12 18 12C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4C16.1362 4 14.5701 5.27477 14.126 7L4 7V3Z" fill="black"/>
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">Dont Worry! Your information is safe</div>
                    <div className="text-gray-600">Secured with the most popular online payment system Stripe. Used by over 250m people per day!</div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.714 1.08843C11.9037 1.06102 12.0964 1.06102 12.2861 1.08843C12.5047 1.12002 12.7081 1.19688 12.8697 1.2579L12.9129 1.27422L18.4054 3.33374C19.0232 3.56439 19.5657 3.76694 19.9835 4.13517C20.349 4.45729 20.6306 4.86358 20.8039 5.31893C21.0019 5.83944 21.0011 6.41855 21.0002 7.07799L21 11.9999C21 14.8265 19.4627 17.1831 17.801 18.9143C16.1281 20.6571 14.214 21.888 13.2019 22.4785L13.1609 22.5025C12.9762 22.611 12.7365 22.7517 12.4194 22.8198C12.1599 22.8754 11.8401 22.8754 11.5807 22.8198C11.2635 22.7518 11.0238 22.611 10.8391 22.5025L10.7981 22.4785C9.78602 21.888 7.87198 20.6571 6.19908 18.9143C4.53731 17.1831 3.00002 14.8265 3.00002 11.9999L2.99989 7.078C2.99893 6.41856 2.99809 5.83944 3.19616 5.31893C3.36943 4.86358 3.65099 4.45729 4.01651 4.13517C4.43433 3.76695 4.97687 3.56439 5.59466 3.33374L11.0871 1.27422L11.1304 1.2579C11.2919 1.19688 11.4954 1.12002 11.714 1.08843ZM16.2071 9.70711C16.5976 9.31658 16.5976 8.68342 16.2071 8.29289C15.8166 7.90237 15.1834 7.90237 14.7929 8.29289L11 12.0858L9.70711 10.7929C9.31658 10.4024 8.68342 10.4024 8.29289 10.7929C7.90237 11.1834 7.90237 11.8166 8.29289 12.2071L10.2929 14.2071C10.6834 14.5976 11.3166 14.5976 11.7071 14.2071L16.2071 9.70711Z" fill="black"/>
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">Pickup your order on day extra fast!</div>
                    <div className="text-gray-600">Priority Queue for anyone who preorders online!</div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M14.0749 4.22821C13.4517 4.20488 12.8532 4.47362 12.4566 4.95492C12.1375 5.34215 12.0639 5.81929 12.0326 6.1674C12 6.52981 12 6.99146 12.0001 7.51783V16.4821C12 17.0085 12 17.4701 12.0326 17.8325C12.0639 18.1806 12.1375 18.6578 12.4566 19.045C12.8532 19.5263 13.4517 19.795 14.0749 19.7717C14.5763 19.753 14.9818 19.4909 15.2628 19.2831C15.5553 19.0667 15.9003 18.7599 16.2937 18.4102L21.3447 13.9204C21.5552 13.7334 21.7575 13.5536 21.9144 13.3882C22.0847 13.2087 22.272 12.9756 22.3819 12.6625C22.5325 12.2337 22.5325 11.7663 22.3819 11.3374C22.272 11.0243 22.0847 10.7912 21.9144 10.6117C21.7575 10.4463 21.5552 10.2665 21.3448 10.0795C21.3362 10.0719 21.3277 10.0643 21.3191 10.0567L16.2937 5.5897C15.9003 5.23998 15.5553 4.93325 15.2628 4.71685C14.9818 4.50899 14.5763 4.24698 14.0749 4.22821Z" fill="black"/>
                      <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3.07488 4.22821C2.45165 4.20488 1.85322 4.47362 1.4566 4.95492C1.1375 5.34215 1.06395 5.81929 1.03263 6.1674C1.00002 6.52981 1.00004 6.99146 1.00007 7.51783V16.4821C1.00004 17.0085 1.00002 17.4701 1.03263 17.8325C1.06395 18.1806 1.1375 18.6578 1.4566 19.045C1.85322 19.5263 2.45165 19.795 3.07488 19.7717C3.5763 19.753 3.98178 19.4909 4.26276 19.2831C4.5553 19.0667 4.90034 18.7599 5.29374 18.4102L10.3447 13.9204C10.5552 13.7334 10.7575 13.5536 10.9144 13.3882C11.0847 13.2087 11.272 12.9756 11.3819 12.6625C11.5325 12.2337 11.5325 11.7663 11.3819 11.3374C11.272 11.0243 11.0847 10.7912 10.9144 10.6117C10.7575 10.4463 10.5552 10.2665 10.3448 10.0795C10.3362 10.0719 10.3277 10.0643 10.3191 10.0567L5.29372 5.5897C4.90032 5.23998 4.55529 4.93325 4.26276 4.71685C3.98178 4.50899 3.5763 4.24698 3.07488 4.22821Z" fill="black"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col h-side">
                    <img className="pb-8 mx-auto rounded md:max-w-none center" src={Crepes} width="500" height="384" alt="Features bg" />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col h-side">
                    <img className="mx-auto rounded md:max-w-none center" src={StripeSecurity} width="500" height="384" alt="Features bg" />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col h-side">
                    <img className="mx-auto rounded md:max-w-none center" src={Speed} width="384" height="384" alt="Features bg" />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
