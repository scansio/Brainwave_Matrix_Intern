import Reblend from "reblendjs";

function Header() {
  return (
    <div class="nc-HeaderLogged sticky top-0 w-full z-40" >
      <div
        class="nc-MainNav2Logged relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700"
        
      >
        <div class="container " >
          <div class="h-20 flex justify-between" >
            <div
              class="flex items-center lg:hidden flex-1"
              
            >
              <div >
                <button class="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="lg:flex-1 flex items-center" >
              <a
                class="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
                href="/"
              >
                <svg
                  width="59"
                  height="41"
                  viewBox="0 0 59 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5224 9.69455C34.547 8.66632 35.1818 7.24829 35.1818 5.68181C35.1818 2.54402 32.6378 0 29.5 0C27.516 0 25.7721 1.01857 24.7559 2.55971C24.4868 2.83004 1.8706 30.7044 1.65941 31.0255C0.633591 32.0525 0 33.4705 0 35.037C0 38.1748 2.54281 40.7188 5.6806 40.7188C7.66464 40.7188 9.40853 39.7002 10.4247 38.1591C10.695 37.8888 33.3112 10.0144 33.5224 9.69455Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M46.6081 22.9203C47.6363 21.8921 48.2723 20.4728 48.2723 18.904C48.2723 15.7662 45.7283 13.2221 42.5905 13.2221C40.6065 13.2221 38.8614 14.2419 37.8452 15.7831C37.5737 16.0558 25.6948 30.6972 25.4824 31.0206C24.4541 32.0489 23.8193 33.4681 23.8193 35.037C23.8193 38.1748 26.3621 40.7188 29.4999 40.7188C31.484 40.7188 33.2291 39.699 34.2452 38.1579C34.5168 37.8851 46.3957 23.2437 46.6081 22.9203Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M59.0001 5.68181C59.0001 8.81959 56.4573 11.3636 53.3195 11.3636C50.1817 11.3636 47.6377 8.81959 47.6377 5.68181C47.6377 2.54402 50.1817 0 53.3195 0C56.4573 0 59.0001 2.54402 59.0001 5.68181Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.3624 5.68181C11.3624 8.81959 8.81838 11.3636 5.6806 11.3636C2.54281 11.3636 0 8.81959 0 5.68181C0 2.54402 2.54281 0 5.6806 0C8.81838 0 11.3624 2.54402 11.3624 5.68181Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div
              class="flex-[2] hidden lg:flex justify-center mx-4"
              
            >
              <ul class="nc-Navigation items-center flex">
                <li
                  class="menu-item menu-dropdown relative"
                  data-headlessui-state=""
                >
                  <div
                    class="h-20 flex-shrink-0 flex items-center"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:r0:"
                    
                  >
                    <a
                      class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/"
                    >
                      Homes
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="ml-1 -mr-1 h-4 w-4 text-slate-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </li>
                <div
                  
                  style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
                ></div>
                <li
                  class="menu-item menu-dropdown relative"
                  data-headlessui-state=""
                >
                  <div
                    class="h-20 flex-shrink-0 flex items-center"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:r2:"
                    
                  >
                    <a
                      class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/single/demo-slug"
                    >
                      Singles
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="ml-1 -mr-1 h-4 w-4 text-slate-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </li>
                <div
                  
                  style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
                ></div>
                <li class="menu-item flex-shrink-0">
                  <div
                    class="h-20 flex-shrink-0 flex items-center"
                    
                  >
                    <a
                      class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/archive/demo-slug"
                    >
                      Beauty
                    </a>
                  </div>
                </li>
                <li class="menu-item flex-shrink-0">
                  <div
                    class="h-20 flex-shrink-0 flex items-center"
                    
                  >
                    <a
                      class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/archive/demo-slug"
                    >
                      Sport
                    </a>
                  </div>
                </li>
                <li class="menu-item flex-shrink-0 menu-megamenu menu-megamenu--large">
                  <div
                    class="h-20 flex-shrink-0 flex items-center"
                    
                  >
                    <a
                      class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/search"
                    >
                      Templates
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="ml-1 -mr-1 h-4 w-4 text-slate-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div
                    class="invisible sub-menu absolute top-full inset-x-0 transform z-50"
                    
                  >
                    <div
                      class="bg-white dark:bg-neutral-900 shadow-lg"
                      
                    >
                      <div class="container" >
                        <div
                          class="flex text-sm border-t border-slate-200 dark:border-slate-700 py-14"
                          
                        >
                          <div
                            class="flex-1 grid grid-cols-4 gap-6 pr-6 xl:pr-8"
                            
                          >
                            <div >
                              <p class="font-medium text-slate-900 dark:text-neutral-200">
                                Home Page
                              </p>
                              <ul class="grid space-y-4 mt-4">
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/"
                                  >
                                    Home page 1
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/home-2"
                                  >
                                    Home page 2
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/home-3"
                                  >
                                    Home page 3
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/home-4"
                                  >
                                    Home page 4
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/home-6"
                                  >
                                    Home page 5
                                  </a>
                                </li>
                                <li class="menuIsNew">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/"
                                  >
                                    Header style 1
                                  </a>
                                </li>
                                <li class="menuIsNew">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/home-2"
                                  >
                                    Header style 2
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div >
                              <p class="font-medium text-slate-900 dark:text-neutral-200">
                                Single Pages
                              </p>
                              <ul class="grid space-y-4 mt-4">
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/single/demo-slug"
                                  >
                                    Single page 1
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/single-2/demo-slug"
                                  >
                                    Single page 2
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/single-3/demo-slug"
                                  >
                                    Single page 3
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/single-4/demo-slug"
                                  >
                                    Single page 4
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/single-audio/demo-slug"
                                  >
                                    Single Audio
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/single-video/demo-slug"
                                  >
                                    Single Video
                                  </a>
                                </li>
                                <li class="menuIsNew">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/single-gallery/demo-slug"
                                  >
                                    Single Gallery
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div >
                              <p class="font-medium text-slate-900 dark:text-neutral-200">
                                Archive Pages
                              </p>
                              <ul class="grid space-y-4 mt-4">
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/archive/demo-slug"
                                  >
                                    Category page
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/archive-2/demo-slug"
                                  >
                                    Category audio
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/archive-3/demo-slug"
                                  >
                                    Category videos
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/search"
                                  >
                                    Search page
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/search-2"
                                  >
                                    Search page 2
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/author/demo-slug"
                                  >
                                    Author page
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div >
                              <p class="font-medium text-slate-900 dark:text-neutral-200">
                                Other Pages
                              </p>
                              <ul class="grid space-y-4 mt-4">
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/dashboard"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/about"
                                  >
                                    About
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/contact"
                                  >
                                    Contact us
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/login"
                                  >
                                    Login
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/signup"
                                  >
                                    Signup
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/forgot-pass"
                                  >
                                    Forgot password
                                  </a>
                                </li>
                                <li class="">
                                  <a
                                    class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                                    href="/subscription"
                                  >
                                    Subscription
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="w-[40%] " >
                            <div
                              class="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2"
                              
                            >
                              <h3 class="sr-only">Recent posts</h3>
                              <article class="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
                                <div
                                  class="relative flex-none"
                                  
                                >
                                  <div
                                    class="aspect-[2/1] w-full rounded-xl bg-gray-100 sm:aspect-[16/9] sm:h-32 lg:h-auto z-0"
                                    
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1678720175173-f57e293022e4?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                      alt=""
                                      sizes="300px"
                                      class="rounded-xl object-cover object-cover absolute inset-0 w-full h-full"
                                    />
                                  </div>
                                  <div
                                    class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                                    
                                  ></div>
                                </div>
                                <div >
                                  <div
                                    class="flex items-center gap-x-4"
                                    
                                  >
                                    <time
                                      datetime="2023-03-16"
                                      class="text-sm leading-6 text-gray-600"
                                    >
                                      Mar 16, 2023
                                    </time>
                                    <a
                                      class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 text-xs font-medium text-gray-600 hover:bg-gray-100"
                                      href="/archive/demo-slug"
                                    >
                                      Marketing
                                    </a>
                                  </div>
                                  <h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
                                    <a href="/single-gallery/demo-slug">
                                      <span class="absolute inset-0"></span>
                                      Boost your conversion rate
                                    </a>
                                  </h4>
                                  <p class="mt-2 text-sm leading-6 text-gray-600">
                                    Et et dolore officia quis nostrud esse aute
                                    cillum irure do esse. Eiusmod ad deserunt
                                    cupidatat est magna Lorem.
                                  </p>
                                </div>
                              </article>
                              <article class="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
                                <div
                                  class="relative flex-none"
                                  
                                >
                                  <div
                                    class="aspect-[2/1] w-full rounded-xl bg-gray-100 sm:aspect-[16/9] sm:h-32 lg:h-auto z-0"
                                    
                                  >
                                    <img
                                      src="https://images.unsplash.com/photo-1678846912726-667eda5a850f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyODh8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                      alt=""
                                      sizes="300px"
                                      class="rounded-xl object-cover object-cover absolute inset-0 w-full h-full"
                                    />
                                  </div>
                                  <div
                                    class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                                    
                                  ></div>
                                </div>
                                <div >
                                  <div
                                    class="flex items-center gap-x-4"
                                    
                                  >
                                    <time
                                      datetime="2023-03-10"
                                      class="text-sm leading-6 text-gray-600"
                                    >
                                      Mar 10, 2023
                                    </time>
                                    <a
                                      class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 text-xs font-medium text-gray-600 hover:bg-gray-100"
                                      href="/archive/demo-slug"
                                    >
                                      Sales
                                    </a>
                                  </div>
                                  <h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
                                    <a href="/single-gallery/demo-slug">
                                      <span class="absolute inset-0"></span>
                                      How to use search engine optimization to
                                      drive sales
                                    </a>
                                  </h4>
                                  <p class="mt-2 text-sm leading-6 text-gray-600">
                                    Optio cum necessitatibus dolor voluptatum
                                    provident commodi et.
                                  </p>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="menu-item menu-dropdown relative"
                  data-headlessui-state=""
                >
                  <div
                    class="h-20 flex-shrink-0 flex items-center"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:r4:"
                    
                  >
                    <a
                      class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      href="/search"
                    >
                      Explore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="ml-1 -mr-1 h-4 w-4 text-slate-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </li>
                <div
                  
                  style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
                ></div>
              </ul>
            </div>
            <div
              class="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100"
              
            >
              <div class="cursor-pointer" >
                <button class="flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M22 22L20 20"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="hidden sm:block" >
                <div
                  class="relative"
                  data-headlessui-state=""
                  
                >
                  <button
                    class="
                text-opacity-90
                 group  p-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:r6:"
                  >
                    <span class="w-2 h-2 bg-blue-500 absolute top-2 right-2 rounded-full"></span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 6.43994V9.76994"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M15.33 18.8201C15.33 20.6501 13.83 22.1501 12 22.1501C11.09 22.1501 10.25 21.7701 9.65004 21.1701C9.05004 20.5701 8.67004 19.7301 8.67004 18.8201"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div
                  
                  style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
                ></div>
              </div>
              <div class="AvatarDropdown " >
                <div
                  class="relative"
                  data-headlessui-state=""
                  
                >
                  <button
                    class="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:r8:"
                  >
                    <svg
                      class=" w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div
                  
                  style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
