import { Link } from 'react-router-dom';
import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative mt-32">


      <div className="relative px-4 pb-12 bg-gray-900 sm:px-8 h-5/6">
        <div className="py-6 md:py-8">

          {/* Section header */}
          <div className="max-w-3xl pt-6 mx-auto text-center text-white md:pb-4">
            <h2 className="h2">Pre-Order Now!</h2>
          </div>

          {/* Items */}
          <div className="flex flex-wrap justify-center gap-8 px-4 pt-8 sm:px-6 h-5/6">

            {/* 1st item */}
            <div class="flex flex-col p-6 md:p-8 bg-white text-center rounded-3xl shadow-xl my-2 w-72 ring-gray-200 ring-4">
                <h1 class="text-black font-semibold text-2xl">Large</h1>
                <p class="pt-2 tracking-wide">
                    <span class="text-gray-400">$ </span>
                    <span class="text-3xl font-semibold">3.99</span>
                    <span class="text-xl align-top font-light text-gray-400 line-through pl-1">4.99</span>
                </p>
                <hr class="mt-4 border-1"></hr>
                <div class="pt-8">
                <p class="flex font-semibold text-gray-400 text-left pt-5 items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="black"/>
                          </svg>
                        </span>
                        <span class="pl-2">
                            A single large <span class="text-black">Crepe</span>
                        </span>
                    </p>
                    <p class="flex font-semibold text-gray-400 text-left pt-5">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="black"/>
                          </svg>
                        </span>
                        <span class="pl-2">
                            All <span class="text-black">Toppings</span>
                        </span>
                    </p>
                    <p class="flex font-semibold text-gray-400 text-left pt-5">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="black"/>
                          </svg>
                        </span>
                        <span class="pl-2">
                            <span class="text-black">Priority</span> Queue
                        </span>
                    </p>

                    <a href="https://buy.stripe.com/28ofZl8Vwcw3fXG144" class="">
                        <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                           Buy
                        </p>
                    </a>
                </div>
            </div>

            {/* 2nd item */}
            <div class="flex flex-col p-6 md:p-8 bg-white text-center rounded-3xl shadow-xl my-2 w-72 ring-gray-200 ring-4">
                <h1 class="text-black font-semibold text-2xl">Gigantic</h1>
                <p class="pt-2 tracking-wide">
                    <span class="text-gray-400">$ </span>
                    <span class="text-3xl font-semibold">5.59</span>
                    <span class="text-xl align-top font-light text-gray-400 line-through pl-1">6.99</span>
                </p>
                <hr class="mt-4 border-1"></hr>
                <div class="pt-8">
                <p class="flex font-semibold text-gray-400 text-left pt-5 items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="black"/>
                          </svg>
                        </span>
                        <span class="pl-2">
                            Two large <span class="text-black">Crepes</span>
                        </span>
                    </p>
                    <p class="flex font-semibold text-gray-400 text-left pt-5">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="black"/>
                          </svg>
                        </span>
                        <span class="pl-2">
                            Even more <span class="text-black">Toppings!</span>
                        </span>
                    </p>
                    <p class="flex font-semibold text-gray-400 text-left pt-5">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="black"/>
                          </svg>
                        </span>
                        <span class="pl-2">
                            <span class="text-black">Priority</span> Queue
                        </span>
                    </p>

                    <a href="https://buy.stripe.com/dR628v8VwanVfXG9AB" class="">
                        <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                           Buy
                        </p>
                    </a>
                </div>
            </div>


          </div>
        </div>
        <Link to="/" aria-label="e">
          <p className="pt-24 mx-auto text-gray-400 underline">
            Click to see dietary information
          </p>
        </Link>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
