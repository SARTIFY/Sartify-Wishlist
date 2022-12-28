import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
  <div className="">
    <header className="py-4 bg-black sm:py-6" x-data="{expanded: false}" style={{marginTop:"-75px"}}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" class="flex">
              <img className="w-auto h-40" src="https://www.innocentcharles.com/assets/img/IMG_20221022_063346_003-removebg-preview%20(1).png" width={1000} height={1000} alt="Sartify Logo" />
            </a>
          </div>
          <div className="flex md:hidden">
            {/* <button type="button" className="text-white" onclick="expanded = !expanded" aria-expanded="expanded">
              <span x-show="!expanded" aria-hidden="true">
                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
              <span x-show="expanded" aria-hidden="true">
                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                 </svg>
              </span>
            </button> */}
          </div>
          <nav className="hidden ml-10 space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start" style={{marginRight:"25px"}}>
            <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
            <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Team </a>
            <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Contact </a>
          </nav>
          {/* <div className="relative  md:items-center md:justify-center md:inline-flex group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <a href="#" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Join Wishlist </a>
          </div> */}
        </div>
        {/* <nav x-show="expanded" x-collapse>
          <div className="flex flex-col pt-8 pb-4 space-y-6">
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                </div>
                <a href="#" title="" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
              </div>
          </div>
        </nav> */}
      </div>
    </header>

    <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24" style={{marginTop:"-83px"}}>
      <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          <div>
          <h2 className="mt-4 max-w-3xl space-y-6 text-gray-400 sm:mt-8 bg-clip-text bg-gradient-to-r from-blue-900 to-purple-400"> Meet, Sartify 👋🏻 :</h2>
          <h1 className="font-extrabold tracking-tight text-4xl font-medium text-white sm:text-5xl lg:text-5xl xl:text-7xl font-sans ...">The smart HR and workforce software for Africa's businesses</h1>
          <p className="mt-4 max-w-3xl space-y-6 text-gray-400 sm:mt-8">HR administration may be tough, but it’s no rocket science. We help great companies in Africa unlock their workforce potential, and effortlessly save 200hrs for efficient and costless talent acquisition, interview, retention, payrolling, staffing, time-off, employee data, organizational development, and HR workflows in one place</p>
          
          <div className="relative mt-8 rounded-full sm:mt-12">
            <p className="mt-4 max-w-3xl space-y-6 text-gray-400 sm:mt-8 hover:text-blue-600" style={{fontSize:"10px",marginBottom:"10px"}}>WISHLISTED BY 50+ USERS</p> 

            <div className="relative md:items-center md:justify-center md:inline-flex group" style={{marginLeft:"100px"}}>
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <a href="https://tally.so#tally-open=me5zAq&tally-emoji-text=👋&tally-emoji-animation=wave" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Get Eearly Access - it's free </a>
          </div>
          
          </div>

          <div className="mt-8 sm:mt-12">
           {/* <p className="text-lg font-normal text-white">Wishlisted by 50+ users</p> */}
           <div className="flex items-center mt-3">
            <div className="flex">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z" fill="url(#b)" />
                <defs>
                  <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" style={{stopColor: "var(--color-cyan-500)"}} />
                    <stop offset="100%" style={{stopColor: "var(--color-purple-500)"}} />
                  </linearGradient>
                </defs>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z" fill="url(#b)" />
                <defs>
                  <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                   <stop offset="0%" style={{stopColor:"var(--color-cyan-500)"}} />
                   <stop offset="100%" style={{stopColor: "var(--color-purple-500)"}} />
                  </linearGradient>
                </defs>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z" fill="url(#b)" />
                <defs>
                  <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" style={{stopColor:"var(--color-cyan-500)"}} />
                    <stop offset="100%" style={{stopColor: "var(--color-purple-500)"}} />
                  </linearGradient>
                </defs>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z" fill="url(#b)" />
                  <defs>
                    <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" style={{stopColor : "var(--color-cyan-500)"}} />
                      <stop offset="100%" style={{stopColor: "var(--color-purple-500)"}} />
                    </linearGradient>
                  </defs>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z" fill="url(#b)" />
                  <defs>
                    <linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" style={{stopColor : "var(--color-cyan-500)"}} />
                      <stop offset="100%" style={{stopColor: "var(--color-purple-500)"}} />
                    </linearGradient>
                  </defs>
              </svg>
            </div>
           </div>
          </div>
          </div>
          <div className="relative">
            {/* <div className="absolute inset-0">
              <svg className="blur-3xl filter opacity-70" style={{filter:"blur(64px)"}} width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
                  <defs>
                    <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" style={{stopColor:"var(--color-cyan-500)"}} />
                      <stop offset="100%" style={{stopColor:"var(--color-purple-500)"}} />
                    </linearGradient>
                  </defs>
              </svg>
            </div> */}
            <div className="absolute inset-0">
              <img className="object-cover w-full h-full opacity-90" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
            </div>
            <img src="https://www.innocentcharles.com/assets/img/Group%201.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

