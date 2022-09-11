import React, { useState } from 'react';
import Modal from '../utils/Modal';
import Crepes from '../images/crepe.png';

import { useParallax } from 'react-scroll-parallax';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const { ref } = useParallax({ speed: 10 });
  return (
    <section className="relative h-3/4">

      <div className="max-w-6xl px-4 mx-auto sm:px-6">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <img className="absolute top-0 left-0 z-0 transition-all scale-105 -translate-y-40 bg-black blur-sm brightness-50" src={Crepes} ></img>
      </div>

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div ref={ref} className="pb-12 text-center md:pb-16">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl leading-tighter" data-aos="zoom-y-out">Let's keep this <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Short</span> </h1>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl leading-tighter" data-aos="zoom-y-out">And <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Sweet</span>. </h1>
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="hidden w-full my-4 text-white bg-red-500 btn hover:bg-orange-700 sm:w-auto sm:mb-0" href="#0">Pre-Order Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <button className="absolute flex items-center p-4 font-medium transform -translate-y-1/2 bg-white rounded-full shadow-lg top-full group" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="flex-shrink-0 w-6 h-6 text-gray-400 fill-current group-hover:text-blue-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the video (35 sec)</span>
              </button>
            </div>

            {/* Modal */}
            <Modal id="modal" className="rounded-lg" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative rounded-lg pb-9/16">
                <iframe className="absolute w-full h-full rounded-lg" src="https://www.youtube.com/embed/v6UNSjnzUzs" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;