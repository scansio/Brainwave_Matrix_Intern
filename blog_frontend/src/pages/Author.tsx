import Reblend from "reblendjs";

function Author() {
  return (
    <div class="flex h-full w-full">
      <div class="sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 translate-x-0">
        <span class="absolute top-4 right-4 block cursor-pointer xl:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <div class="mx-[56px] mt-[50px] flex items-center">
          <div class="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
            Horizon <span class="font-medium">FREE</span>
          </div>
        </div>
        <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30"></div>
        <ul class="mb-auto pt-1">
          <a href="/horizon-tailwind-react/admin/default">
            <div class="relative mb-3 flex hover:cursor-pointer">
              <li class="my-[3px] flex cursor-pointer items-center px-8">
                <span class="font-bold text-brand-500 dark:text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  </svg>{" "}
                </span>
                <p class="leading-1 flex ms-4 font-bold text-navy-700 dark:text-white">
                  Main Dashboard
                </p>
              </li>
              <div class="absolute top-px h-9 w-1 rounded-lg bg-brand-500 end-0 dark:bg-brand-400"></div>
            </div>
          </a>
          <a href="/horizon-tailwind-react/admin/nft-marketplace">
            <div class="relative mb-3 flex hover:cursor-pointer">
              <li class="my-[3px] flex cursor-pointer items-center px-8">
                <span class="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>{" "}
                </span>
                <p class="leading-1 flex ms-4 font-medium text-gray-600">
                  NFT Marketplace
                </p>
              </li>
            </div>
          </a>
          <a href="/horizon-tailwind-react/admin/data-tables">
            <div class="relative mb-3 flex hover:cursor-pointer">
              <li class="my-[3px] flex cursor-pointer items-center px-8">
                <span class="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>{" "}
                </span>
                <p class="leading-1 flex ms-4 font-medium text-gray-600">
                  Data Tables
                </p>
              </li>
            </div>
          </a>
          <a href="/horizon-tailwind-react/admin/profile">
            <div class="relative mb-3 flex hover:cursor-pointer">
              <li class="my-[3px] flex cursor-pointer items-center px-8">
                <span class="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>{" "}
                </span>
                <p class="leading-1 flex ms-4 font-medium text-gray-600">
                  Profile
                </p>
              </li>
            </div>
          </a>
          <a href="/horizon-tailwind-react/auth/sign-in">
            <div class="relative mb-3 flex hover:cursor-pointer">
              <li class="my-[3px] flex cursor-pointer items-center px-8">
                <span class="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                  </svg>{" "}
                </span>
                <p class="leading-1 flex ms-4 font-medium text-gray-600">
                  Sign In
                </p>
              </li>
            </div>
          </a>
          <a href="/horizon-tailwind-react/rtl/rtl">
            <div class="relative mb-3 flex hover:cursor-pointer">
              <li class="my-[3px] flex cursor-pointer items-center px-8">
                <span class="font-medium text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  </svg>{" "}
                </span>
                <p class="leading-1 flex ms-4 font-medium text-gray-600">
                  RTL Admin
                </p>
              </li>
            </div>
          </a>
        </ul>
        <div class="flex justify-center">
          <div class="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4">
            <div class="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z"
                  fill="white"
                ></path>
                <path
                  d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div class="mt-16 flex h-fit flex-col items-center">
              <p class="text-lg font-bold text-white">Upgrade to PRO</p>
              <p class="mt-1 px-4 text-center text-sm text-white">
                Improve your development process and start doing more with
                Horizon UI PRO!
              </p>
              <a
                target="blank"
                class="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[12px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
              >
                Upgrade to PRO
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main class="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
          <div class="h-full">
            <nav class="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
              <div class="ml-[6px]">
                <div class="h-6 w-[224px] pt-1">
                  <a
                    class="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                    href=" "
                  >
                    Pages
                    <span class="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
                      {" "}
                      /{" "}
                    </span>
                  </a>
                  <a
                    class="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                    href="/horizon-tailwind-react/admin/default"
                  >
                    Main Dashboard
                  </a>
                </div>
                <p class="shrink text-[33px] capitalize text-navy-700 dark:text-white">
                  <a
                    class="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
                    href="/horizon-tailwind-react/admin/default"
                  >
                    Main Dashboard
                  </a>
                </p>
              </div>
              <div class="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
                <div class="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
                  <p class="pl-3 pr-2 text-xl">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4 text-gray-400 dark:text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </p>
                  <input
                    type="text"
                    placeholder="Search..."
                    class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
                  />
                </div>
                <span class="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="21" y1="10" x2="3" y2="10"></line>
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="14" x2="3" y2="14"></line>
                    <line x1="21" y1="18" x2="3" y2="18"></line>
                  </svg>
                </span>
                <div class="relative flex">
                  <div class="flex">
                    <p class="cursor-pointer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="h-4 w-4 text-gray-600 dark:text-white"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path>
                      </svg>
                    </p>
                  </div>
                  <div class="py-2 top-4 -left-[230px] md:-left-[440px] w-max absolute z-10 origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out scale-0">
                    <div class="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                      <div class="flex items-center justify-between">
                        <p class="text-base font-bold text-navy-700 dark:text-white">
                          Notification
                        </p>
                        <p class="text-sm font-bold text-navy-700 dark:text-white">
                          Mark all read
                        </p>
                      </div>
                      <button class="flex w-full items-center">
                        <div class="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                          <p class="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                            New Update: Horizon UI Dashboard PRO
                          </p>
                          <p class="font-base text-left text-xs text-gray-900 dark:text-white">
                            A new update for your downloaded item is available!
                          </p>
                        </div>
                      </button>
                      <button class="flex w-full items-center">
                        <div class="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                          <p class="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                            New Update: Horizon UI Dashboard PRO
                          </p>
                          <p class="font-base text-left text-xs text-gray-900 dark:text-white">
                            A new update for your downloaded item is available!
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex">
                  <div class="flex">
                    <p class="cursor-pointer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="h-4 w-4 text-gray-600 dark:text-white"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                        <path d="M277 360h-42V235h42v125zm0-166h-42v-42h42v42z"></path>
                      </svg>
                    </p>
                  </div>
                  <div class="py-2 top-6 -left-[250px] md:-left-[330px] w-max absolute z-10 origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out scale-0">
                    <div class="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                      <div
                        class="mb-2 aspect-video w-full rounded-lg"
                        style='background-image: url("/horizon-tailwind-react/static/media/Navbar.f96a9f58c491b9acda99.png"); background-repeat: no-repeat; background-size: cover;'
                      ></div>
                      <a
                        target="blank"
                        href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                        class="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
                      >
                        Buy Horizon UI PRO
                      </a>
                      <a
                        target="blank"
                        href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                        class="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
                      >
                        See Documentation
                      </a>
                      <a
                        target="blank"
                        href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                        class="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
                      >
                        Try Horizon Free
                      </a>
                    </div>
                  </div>
                </div>
                <div class="cursor-pointer text-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-4 w-4 text-gray-600 dark:text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z"></path>
                  </svg>
                </div>
                <div class="relative flex">
                  <div class="flex">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="/horizon-tailwind-react/static/media/avatar4.54d5c1de851c273b2cd9.png"
                      alt="Elon Musk"
                    />
                  </div>
                  <div class="py-2 top-8 -left-[180px] w-max absolute z-10 origin-top-right transition-all duration-300 ease-in-out scale-0">
                    <div class="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                      <div class="mt-3 ml-4">
                        <div class="flex items-center gap-2">
                          <p class="text-sm font-bold text-navy-700 dark:text-white">
                            👋 Hey, Adela
                          </p>{" "}
                        </div>
                      </div>
                      <div class="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 "></div>
                      <div class="mt-3 ml-4 flex flex-col">
                        <a
                          href=" "
                          class="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                        >
                          Profile Settings
                        </a>
                        <a
                          href=" "
                          class="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                        >
                          Newsletter Settings
                        </a>
                        <a
                          href=" "
                          class="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                        >
                          Log Out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div class="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <div>
                <div class="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
                    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="h-7 w-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                      <p class="font-dm text-sm font-medium text-gray-600">
                        Earnings
                      </p>
                      <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        $340.5
                      </h4>
                    </div>
                  </div>
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
                    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            class="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z"></path>
                            <path d="M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z"></path>
                            <path d="M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                      <p class="font-dm text-sm font-medium text-gray-600">
                        Spend this month
                      </p>
                      <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        $642.39
                      </h4>
                    </div>
                  </div>
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
                    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="h-7 w-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                      <p class="font-dm text-sm font-medium text-gray-600">
                        Sales
                      </p>
                      <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        $574.34
                      </h4>
                    </div>
                  </div>
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
                    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                      <p class="font-dm text-sm font-medium text-gray-600">
                        Your Balance
                      </p>
                      <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        $1,000
                      </h4>
                    </div>
                  </div>
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
                    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="h-7 w-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                      <p class="font-dm text-sm font-medium text-gray-600">
                        New Tasks
                      </p>
                      <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        145
                      </h4>
                    </div>
                  </div>
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
                    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                      <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span class="flex items-center text-brand-500 dark:text-white">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            class="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="h-50 ml-4 flex w-auto flex-col justify-center">
                      <p class="font-dm text-sm font-medium text-gray-600">
                        Total Projects
                      </p>
                      <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                        $2433
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !p-[20px] text-center">
                    <div class="flex justify-between">
                      <button class="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"></path>
                        </svg>
                        <span class="text-sm font-medium text-gray-600">
                          This month
                        </span>
                      </button>
                      <button class="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          class="h-6 w-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
                      <div class="flex flex-col">
                        <p class="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
                          $37.5K
                        </p>
                        <div class="flex flex-col items-start">
                          <p class="mt-2 text-sm text-gray-600">Total Spent</p>
                          <div class="flex flex-row items-center justify-center">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="font-medium text-green-500"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M7 14l5-5 5 5z"></path>
                            </svg>
                            <p class="text-sm font-bold text-green-500">
                              {" "}
                              +2.45%{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="h-full w-full">
                        <div>
                          <div
                            id="apexchartst6iqhm74"
                            class="apexcharts-canvas apexchartst6iqhm74 apexcharts-theme-light"
                            style="width: 310px; height: 358px;"
                          >
                            <svg
                              id="SvgjsSvg2121"
                              width="310"
                              height="358"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xmlns:svgjs="http://svgjs.dev"
                              class="apexcharts-svg apexcharts-zoomable"
                              xmlns:data="ApexChartsNS"
                              transform="translate(0, 0)"
                              style="background: transparent;"
                            >
                              <g
                                id="SvgjsG2123"
                                class="apexcharts-inner apexcharts-graphical"
                                transform="translate(12, 30)"
                              >
                                <defs id="SvgjsDefs2122">
                                  <clipPath id="gridRectMaskt6iqhm74">
                                    <rect
                                      id="SvgjsRect2128"
                                      width="284.9143877029419"
                                      height="296.1995787849426"
                                      x="-4.5"
                                      y="-2.5"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="forecastMaskt6iqhm74"></clipPath>
                                  <clipPath id="nonForecastMaskt6iqhm74"></clipPath>
                                  <clipPath id="gridRectMarkerMaskt6iqhm74">
                                    <rect
                                      id="SvgjsRect2129"
                                      width="279.9143877029419"
                                      height="295.1995787849426"
                                      x="-2"
                                      y="-2"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <line
                                  id="SvgjsLine2127"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="291.1995787849426"
                                  stroke="#b6b6b6"
                                  stroke-dasharray="3"
                                  stroke-linecap="butt"
                                  class="apexcharts-xcrosshairs"
                                  x="0"
                                  y="0"
                                  width="1"
                                  height="291.1995787849426"
                                  fill="#b1b9c4"
                                  filter="none"
                                  fill-opacity="0.9"
                                  stroke-width="1"
                                ></line>
                                <g
                                  id="SvgjsG2139"
                                  class="apexcharts-xaxis"
                                  transform="translate(0, 0)"
                                >
                                  <g
                                    id="SvgjsG2140"
                                    class="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                  >
                                    <text
                                      id="SvgjsText2142"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="0"
                                      y="320.1995787849426"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="12px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2143">SEP</tspan>
                                      <title>SEP</title>
                                    </text>
                                    <text
                                      id="SvgjsText2145"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="55.18287754058838"
                                      y="320.1995787849426"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="12px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2146">OCT</tspan>
                                      <title>OCT</title>
                                    </text>
                                    <text
                                      id="SvgjsText2148"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="110.36575508117676"
                                      y="320.1995787849426"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="12px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2149">NOV</tspan>
                                      <title>NOV</title>
                                    </text>
                                    <text
                                      id="SvgjsText2151"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="165.54863262176514"
                                      y="320.1995787849426"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="12px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2152">DEC</tspan>
                                      <title>DEC</title>
                                    </text>
                                    <text
                                      id="SvgjsText2154"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="220.73151016235352"
                                      y="320.1995787849426"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="12px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2155">JAN</tspan>
                                      <title>JAN</title>
                                    </text>
                                    <text
                                      id="SvgjsText2157"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="275.9143877029419"
                                      y="320.1995787849426"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="12px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2158">FEB</tspan>
                                      <title>FEB</title>
                                    </text>
                                  </g>
                                </g>
                                <g id="SvgjsG2160" class="apexcharts-grid">
                                  <g
                                    id="SvgjsG2161"
                                    class="apexcharts-gridlines-horizontal"
                                    style="display: none;"
                                  >
                                    <line
                                      id="SvgjsLine2163"
                                      x1="0"
                                      y1="0"
                                      x2="275.9143877029419"
                                      y2="0"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2164"
                                      x1="0"
                                      y1="41.599939826420375"
                                      x2="275.9143877029419"
                                      y2="41.599939826420375"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2165"
                                      x1="0"
                                      y1="83.19987965284075"
                                      x2="275.9143877029419"
                                      y2="83.19987965284075"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2166"
                                      x1="0"
                                      y1="124.79981947926112"
                                      x2="275.9143877029419"
                                      y2="124.79981947926112"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2167"
                                      x1="0"
                                      y1="166.3997593056815"
                                      x2="275.9143877029419"
                                      y2="166.3997593056815"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2168"
                                      x1="0"
                                      y1="207.99969913210188"
                                      x2="275.9143877029419"
                                      y2="207.99969913210188"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2169"
                                      x1="0"
                                      y1="249.59963895852226"
                                      x2="275.9143877029419"
                                      y2="249.59963895852226"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2170"
                                      x1="0"
                                      y1="291.1995787849426"
                                      x2="275.9143877029419"
                                      y2="291.1995787849426"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                  </g>
                                  <g
                                    id="SvgjsG2162"
                                    class="apexcharts-gridlines-vertical"
                                    style="display: none;"
                                  ></g>
                                  <line
                                    id="SvgjsLine2172"
                                    x1="0"
                                    y1="291.1995787849426"
                                    x2="275.9143877029419"
                                    y2="291.1995787849426"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2171"
                                    x1="0"
                                    y1="1"
                                    x2="0"
                                    y2="291.1995787849426"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG2130"
                                  class="apexcharts-line-series apexcharts-plot-series"
                                >
                                  <g
                                    id="SvgjsG2131"
                                    class="apexcharts-series"
                                    seriesName="Revenue"
                                    data:longestSeries="true"
                                    rel="1"
                                    data:realIndex="0"
                                  >
                                    <path
                                      id="SvgjsPath2134"
                                      d="M 0 124.79981947926115C 19.314007139205934 124.79981947926115 35.86887040138245 66.55990372227262 55.182877540588386 66.55990372227262C 74.49688467979432 66.55990372227262 91.05174794197083 133.11980744454522 110.36575508117677 133.11980744454522C 129.6797622203827 133.11980744454522 146.23462548255924 58.23991575698852 165.54863262176517 58.23991575698852C 184.8626397609711 58.23991575698852 201.41750302314762 128.95981346190317 220.73151016235354 128.95981346190317C 240.04551730155947 128.95981346190317 256.600380563736 49.91992779170448 275.9143877029419 49.91992779170448"
                                      fill="none"
                                      fill-opacity="1"
                                      stroke="rgba(67,24,255,0.85)"
                                      stroke-opacity="1"
                                      stroke-linecap="butt"
                                      stroke-width="5"
                                      stroke-dasharray="0"
                                      class="apexcharts-line"
                                      index="0"
                                      clip-path="url(#gridRectMaskt6iqhm74)"
                                      pathTo="M 0 124.79981947926115C 19.314007139205934 124.79981947926115 35.86887040138245 66.55990372227262 55.182877540588386 66.55990372227262C 74.49688467979432 66.55990372227262 91.05174794197083 133.11980744454522 110.36575508117677 133.11980744454522C 129.6797622203827 133.11980744454522 146.23462548255924 58.23991575698852 165.54863262176517 58.23991575698852C 184.8626397609711 58.23991575698852 201.41750302314762 128.95981346190317 220.73151016235354 128.95981346190317C 240.04551730155947 128.95981346190317 256.600380563736 49.91992779170448 275.9143877029419 49.91992779170448"
                                      pathFrom="M -1 332.799518611363L -1 332.799518611363L 55.182877540588386 332.799518611363L 110.36575508117677 332.799518611363L 165.54863262176517 332.799518611363L 220.73151016235354 332.799518611363L 275.9143877029419 332.799518611363"
                                    ></path>
                                    <g
                                      id="SvgjsG2132"
                                      class="apexcharts-series-markers-wrap"
                                      data:realIndex="0"
                                    >
                                      <g class="apexcharts-series-markers">
                                        <circle
                                          id="SvgjsCircle2178"
                                          r="0"
                                          cx="0"
                                          cy="0"
                                          class="apexcharts-marker wfah0r9rm no-pointer-events"
                                          stroke="#ffffff"
                                          fill="#4318ff"
                                          fill-opacity="1"
                                          stroke-width="2"
                                          stroke-opacity="0.9"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG2135"
                                    class="apexcharts-series"
                                    seriesName="Profit"
                                    data:longestSeries="true"
                                    rel="2"
                                    data:realIndex="1"
                                  >
                                    <path
                                      id="SvgjsPath2138"
                                      d="M 0 207.99969913210188C 19.314007139205934 207.99969913210188 35.86887040138245 166.3997593056815 55.182877540588386 166.3997593056815C 74.49688467979432 166.3997593056815 91.05174794197083 232.9596630279541 110.36575508117677 232.9596630279541C 129.6797622203827 232.9596630279541 146.23462548255924 141.4397954098293 165.54863262176517 141.4397954098293C 184.8626397609711 141.4397954098293 201.41750302314762 249.59963895852223 220.73151016235354 249.59963895852223C 240.04551730155947 249.59963895852223 256.600380563736 141.4397954098293 275.9143877029419 141.4397954098293"
                                      fill="none"
                                      fill-opacity="1"
                                      stroke="rgba(106,210,255,0.85)"
                                      stroke-opacity="1"
                                      stroke-linecap="butt"
                                      stroke-width="5"
                                      stroke-dasharray="0"
                                      class="apexcharts-line"
                                      index="1"
                                      clip-path="url(#gridRectMaskt6iqhm74)"
                                      pathTo="M 0 207.99969913210188C 19.314007139205934 207.99969913210188 35.86887040138245 166.3997593056815 55.182877540588386 166.3997593056815C 74.49688467979432 166.3997593056815 91.05174794197083 232.9596630279541 110.36575508117677 232.9596630279541C 129.6797622203827 232.9596630279541 146.23462548255924 141.4397954098293 165.54863262176517 141.4397954098293C 184.8626397609711 141.4397954098293 201.41750302314762 249.59963895852223 220.73151016235354 249.59963895852223C 240.04551730155947 249.59963895852223 256.600380563736 141.4397954098293 275.9143877029419 141.4397954098293"
                                      pathFrom="M -1 332.799518611363L -1 332.799518611363L 55.182877540588386 332.799518611363L 110.36575508117677 332.799518611363L 165.54863262176517 332.799518611363L 220.73151016235354 332.799518611363L 275.9143877029419 332.799518611363"
                                    ></path>
                                    <g
                                      id="SvgjsG2136"
                                      class="apexcharts-series-markers-wrap"
                                      data:realIndex="1"
                                    >
                                      <g class="apexcharts-series-markers">
                                        <circle
                                          id="SvgjsCircle2179"
                                          r="0"
                                          cx="0"
                                          cy="0"
                                          class="apexcharts-marker wuccv5ra6 no-pointer-events"
                                          stroke="#ffffff"
                                          fill="#6ad2ff"
                                          fill-opacity="1"
                                          stroke-width="2"
                                          stroke-opacity="0.9"
                                          default-marker-size="0"
                                        ></circle>
                                      </g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG2133"
                                    class="apexcharts-datalabels"
                                    data:realIndex="0"
                                  ></g>
                                  <g
                                    id="SvgjsG2137"
                                    class="apexcharts-datalabels"
                                    data:realIndex="1"
                                  ></g>
                                </g>
                                <line
                                  id="SvgjsLine2173"
                                  x1="0"
                                  y1="0"
                                  x2="275.9143877029419"
                                  y2="0"
                                  stroke="#b6b6b6"
                                  stroke-dasharray="0"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs"
                                ></line>
                                <line
                                  id="SvgjsLine2174"
                                  x1="0"
                                  y1="0"
                                  x2="275.9143877029419"
                                  y2="0"
                                  stroke-dasharray="0"
                                  stroke-width="0"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs-hidden"
                                ></line>
                                <g
                                  id="SvgjsG2175"
                                  class="apexcharts-yaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2176"
                                  class="apexcharts-xaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2177"
                                  class="apexcharts-point-annotations"
                                ></g>
                                <rect
                                  id="SvgjsRect2180"
                                  width="0"
                                  height="0"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke="none"
                                  stroke-dasharray="0"
                                  fill="#fefefe"
                                  class="apexcharts-zoom-rect"
                                ></rect>
                                <rect
                                  id="SvgjsRect2181"
                                  width="0"
                                  height="0"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke="none"
                                  stroke-dasharray="0"
                                  fill="#fefefe"
                                  class="apexcharts-selection-rect"
                                ></rect>
                              </g>
                              <rect
                                id="SvgjsRect2126"
                                width="0"
                                height="0"
                                x="0"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fefefe"
                              ></rect>
                              <g
                                id="SvgjsG2159"
                                class="apexcharts-yaxis"
                                rel="0"
                                transform="translate(-18, 0)"
                              ></g>
                              <g
                                id="SvgjsG2124"
                                class="apexcharts-annotations"
                              ></g>
                            </svg>
                            <div
                              class="apexcharts-legend"
                              style="max-height: 179px;"
                            ></div>
                            <div class="apexcharts-tooltip apexcharts-theme-dark">
                              <div
                                class="apexcharts-tooltip-title"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                              ></div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 1;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(67, 24, 255);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 2;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(106, 210, 255);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                              <div
                                class="apexcharts-xaxistooltip-text"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                              ></div>
                            </div>
                            <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                              <div class="apexcharts-yaxistooltip-text"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
                    <div class="mb-auto flex items-center justify-between px-6">
                      <h2 class="text-lg font-bold text-navy-700 dark:text-white">
                        Weekly Revenue
                      </h2>
                      <button class="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          class="h-6 w-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="md:mt-16 lg:mt-0">
                      <div class="h-[250px] w-full xl:h-[350px]">
                        <div>
                          <div
                            id="apexchartsmw68w6ud"
                            class="apexcharts-canvas apexchartsmw68w6ud apexcharts-theme-light"
                            style="width: 427px; height: 350px;"
                          >
                            <svg
                              id="SvgjsSvg1925"
                              width="427"
                              height="350"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xmlns:svgjs="http://svgjs.dev"
                              class="apexcharts-svg"
                              xmlns:data="ApexChartsNS"
                              transform="translate(0, 0)"
                              style="background: transparent;"
                            >
                              <g
                                id="SvgjsG1927"
                                class="apexcharts-inner apexcharts-graphical"
                                transform="translate(12, 30)"
                              >
                                <defs id="SvgjsDefs1926">
                                  <linearGradient
                                    id="SvgjsLinearGradient1930"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop1931"
                                      stop-opacity="0.4"
                                      stop-color="rgba(216,227,240,0.4)"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop1932"
                                      stop-opacity="0.5"
                                      stop-color="rgba(190,209,230,0.5)"
                                      offset="1"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop1933"
                                      stop-opacity="0.5"
                                      stop-color="rgba(190,209,230,0.5)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <clipPath id="gridRectMaskmw68w6ud">
                                    <rect
                                      id="SvgjsRect1935"
                                      width="409"
                                      height="279.56617524909973"
                                      x="-2"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="forecastMaskmw68w6ud"></clipPath>
                                  <clipPath id="nonForecastMaskmw68w6ud"></clipPath>
                                  <clipPath id="gridRectMarkerMaskmw68w6ud">
                                    <rect
                                      id="SvgjsRect1936"
                                      width="409"
                                      height="283.56617524909973"
                                      x="-2"
                                      y="-2"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <rect
                                  id="SvgjsRect1934"
                                  width="9"
                                  height="279.56617524909973"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke-dasharray="3"
                                  fill="url(#SvgjsLinearGradient1930)"
                                  class="apexcharts-xcrosshairs"
                                  y2="279.56617524909973"
                                  filter="none"
                                  fill-opacity="0.9"
                                ></rect>
                                <g
                                  id="SvgjsG1971"
                                  class="apexcharts-xaxis"
                                  transform="translate(0, 0)"
                                >
                                  <g
                                    id="SvgjsG1972"
                                    class="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                  >
                                    <text
                                      id="SvgjsText1974"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="22.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1975">17</tspan>
                                      <title>17</title>
                                    </text>
                                    <text
                                      id="SvgjsText1977"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="67.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1978">18</tspan>
                                      <title>18</title>
                                    </text>
                                    <text
                                      id="SvgjsText1980"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="112.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1981">19</tspan>
                                      <title>19</title>
                                    </text>
                                    <text
                                      id="SvgjsText1983"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="157.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1984">20</tspan>
                                      <title>20</title>
                                    </text>
                                    <text
                                      id="SvgjsText1986"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="202.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1987">21</tspan>
                                      <title>21</title>
                                    </text>
                                    <text
                                      id="SvgjsText1989"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="247.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1990">22</tspan>
                                      <title>22</title>
                                    </text>
                                    <text
                                      id="SvgjsText1992"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="292.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1993">23</tspan>
                                      <title>23</title>
                                    </text>
                                    <text
                                      id="SvgjsText1995"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="337.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1996">24</tspan>
                                      <title>24</title>
                                    </text>
                                    <text
                                      id="SvgjsText1998"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="382.5"
                                      y="308.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan1999">25</tspan>
                                      <title>25</title>
                                    </text>
                                  </g>
                                </g>
                                <g id="SvgjsG2001" class="apexcharts-grid">
                                  <g
                                    id="SvgjsG2002"
                                    class="apexcharts-gridlines-horizontal"
                                  ></g>
                                  <g
                                    id="SvgjsG2003"
                                    class="apexcharts-gridlines-vertical"
                                  ></g>
                                  <line
                                    id="SvgjsLine2005"
                                    x1="0"
                                    y1="279.56617524909973"
                                    x2="405"
                                    y2="279.56617524909973"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2004"
                                    x1="0"
                                    y1="1"
                                    x2="0"
                                    y2="279.56617524909973"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG1937"
                                  class="apexcharts-bar-series apexcharts-plot-series"
                                >
                                  <g
                                    id="SvgjsG1938"
                                    class="apexcharts-series"
                                    seriesName="PRODUCTxA"
                                    rel="1"
                                    data:realIndex="0"
                                  >
                                    <path
                                      id="SvgjsPath1940"
                                      d="M 18 279.56617524909973L 18 205.01519518267315Q 18 205.01519518267315 18 205.01519518267315L 27 205.01519518267315Q 27 205.01519518267315 27 205.01519518267315L 27 205.01519518267315L 27 279.56617524909973L 27 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 18 279.56617524909973L 18 205.01519518267315Q 18 205.01519518267315 18 205.01519518267315L 27 205.01519518267315Q 27 205.01519518267315 27 205.01519518267315L 27 205.01519518267315L 27 279.56617524909973L 27 279.56617524909973z"
                                      pathFrom="M 18 279.56617524909973L 18 279.56617524909973L 27 279.56617524909973L 27 279.56617524909973L 27 279.56617524909973L 27 279.56617524909973L 27 279.56617524909973L 18 279.56617524909973"
                                      cy="205.01519518267315"
                                      cx="63"
                                      j="0"
                                      val="400"
                                      barHeight="74.55098006642659"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1941"
                                      d="M 63 279.56617524909973L 63 210.60651868765513Q 63 210.60651868765513 63 210.60651868765513L 72 210.60651868765513Q 72 210.60651868765513 72 210.60651868765513L 72 210.60651868765513L 72 279.56617524909973L 72 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 63 279.56617524909973L 63 210.60651868765513Q 63 210.60651868765513 63 210.60651868765513L 72 210.60651868765513Q 72 210.60651868765513 72 210.60651868765513L 72 210.60651868765513L 72 279.56617524909973L 72 279.56617524909973z"
                                      pathFrom="M 63 279.56617524909973L 63 279.56617524909973L 72 279.56617524909973L 72 279.56617524909973L 72 279.56617524909973L 72 279.56617524909973L 72 279.56617524909973L 63 279.56617524909973"
                                      cy="210.60651868765513"
                                      cx="108"
                                      j="1"
                                      val="370"
                                      barHeight="68.9596565614446"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1942"
                                      d="M 108 279.56617524909973L 108 218.06161669429778Q 108 218.06161669429778 108 218.06161669429778L 117 218.06161669429778Q 117 218.06161669429778 117 218.06161669429778L 117 218.06161669429778L 117 279.56617524909973L 117 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 108 279.56617524909973L 108 218.06161669429778Q 108 218.06161669429778 108 218.06161669429778L 117 218.06161669429778Q 117 218.06161669429778 117 218.06161669429778L 117 218.06161669429778L 117 279.56617524909973L 117 279.56617524909973z"
                                      pathFrom="M 108 279.56617524909973L 108 279.56617524909973L 117 279.56617524909973L 117 279.56617524909973L 117 279.56617524909973L 117 279.56617524909973L 117 279.56617524909973L 108 279.56617524909973"
                                      cy="218.06161669429778"
                                      cx="153"
                                      j="2"
                                      val="330"
                                      barHeight="61.50455855480194"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1943"
                                      d="M 153 279.56617524909973L 153 206.8789696843338Q 153 206.8789696843338 153 206.8789696843338L 162 206.8789696843338Q 162 206.8789696843338 162 206.8789696843338L 162 206.8789696843338L 162 279.56617524909973L 162 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 153 279.56617524909973L 153 206.8789696843338Q 153 206.8789696843338 153 206.8789696843338L 162 206.8789696843338Q 162 206.8789696843338 162 206.8789696843338L 162 206.8789696843338L 162 279.56617524909973L 162 279.56617524909973z"
                                      pathFrom="M 153 279.56617524909973L 153 279.56617524909973L 162 279.56617524909973L 162 279.56617524909973L 162 279.56617524909973L 162 279.56617524909973L 162 279.56617524909973L 153 279.56617524909973"
                                      cy="206.8789696843338"
                                      cx="198"
                                      j="3"
                                      val="390"
                                      barHeight="72.68720556476593"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1944"
                                      d="M 198 279.56617524909973L 198 219.92539119595847Q 198 219.92539119595847 198 219.92539119595847L 207 219.92539119595847Q 207 219.92539119595847 207 219.92539119595847L 207 219.92539119595847L 207 279.56617524909973L 207 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 198 279.56617524909973L 198 219.92539119595847Q 198 219.92539119595847 198 219.92539119595847L 207 219.92539119595847Q 207 219.92539119595847 207 219.92539119595847L 207 219.92539119595847L 207 279.56617524909973L 207 279.56617524909973z"
                                      pathFrom="M 198 279.56617524909973L 198 279.56617524909973L 207 279.56617524909973L 207 279.56617524909973L 207 279.56617524909973L 207 279.56617524909973L 207 279.56617524909973L 198 279.56617524909973"
                                      cy="219.92539119595847"
                                      cx="243"
                                      j="4"
                                      val="320"
                                      barHeight="59.640784053141275"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1945"
                                      d="M 243 279.56617524909973L 243 214.33406769097644Q 243 214.33406769097644 243 214.33406769097644L 252 214.33406769097644Q 252 214.33406769097644 252 214.33406769097644L 252 214.33406769097644L 252 279.56617524909973L 252 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 243 279.56617524909973L 243 214.33406769097644Q 243 214.33406769097644 243 214.33406769097644L 252 214.33406769097644Q 252 214.33406769097644 252 214.33406769097644L 252 214.33406769097644L 252 279.56617524909973L 252 279.56617524909973z"
                                      pathFrom="M 243 279.56617524909973L 243 279.56617524909973L 252 279.56617524909973L 252 279.56617524909973L 252 279.56617524909973L 252 279.56617524909973L 252 279.56617524909973L 243 279.56617524909973"
                                      cy="214.33406769097644"
                                      cx="288"
                                      j="5"
                                      val="350"
                                      barHeight="65.23210755812327"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1946"
                                      d="M 288 279.56617524909973L 288 212.47029318931578Q 288 212.47029318931578 288 212.47029318931578L 297 212.47029318931578Q 297 212.47029318931578 297 212.47029318931578L 297 212.47029318931578L 297 279.56617524909973L 297 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 288 279.56617524909973L 288 212.47029318931578Q 288 212.47029318931578 288 212.47029318931578L 297 212.47029318931578Q 297 212.47029318931578 297 212.47029318931578L 297 212.47029318931578L 297 279.56617524909973L 297 279.56617524909973z"
                                      pathFrom="M 288 279.56617524909973L 288 279.56617524909973L 297 279.56617524909973L 297 279.56617524909973L 297 279.56617524909973L 297 279.56617524909973L 297 279.56617524909973L 288 279.56617524909973"
                                      cy="212.47029318931578"
                                      cx="333"
                                      j="6"
                                      val="360"
                                      barHeight="67.09588205978393"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1947"
                                      d="M 333 279.56617524909973L 333 219.92539119595847Q 333 219.92539119595847 333 219.92539119595847L 342 219.92539119595847Q 342 219.92539119595847 342 219.92539119595847L 342 219.92539119595847L 342 279.56617524909973L 342 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 333 279.56617524909973L 333 219.92539119595847Q 333 219.92539119595847 333 219.92539119595847L 342 219.92539119595847Q 342 219.92539119595847 342 219.92539119595847L 342 219.92539119595847L 342 279.56617524909973L 342 279.56617524909973z"
                                      pathFrom="M 333 279.56617524909973L 333 279.56617524909973L 342 279.56617524909973L 342 279.56617524909973L 342 279.56617524909973L 342 279.56617524909973L 342 279.56617524909973L 333 279.56617524909973"
                                      cy="219.92539119595847"
                                      cx="378"
                                      j="7"
                                      val="320"
                                      barHeight="59.640784053141275"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1948"
                                      d="M 378 279.56617524909973L 378 208.74274418599447Q 378 208.74274418599447 378 208.74274418599447L 387 208.74274418599447Q 387 208.74274418599447 387 208.74274418599447L 387 208.74274418599447L 387 279.56617524909973L 387 279.56617524909973z"
                                      fill="rgba(106,210,250,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 378 279.56617524909973L 378 208.74274418599447Q 378 208.74274418599447 378 208.74274418599447L 387 208.74274418599447Q 387 208.74274418599447 387 208.74274418599447L 387 208.74274418599447L 387 279.56617524909973L 387 279.56617524909973z"
                                      pathFrom="M 378 279.56617524909973L 378 279.56617524909973L 387 279.56617524909973L 387 279.56617524909973L 387 279.56617524909973L 387 279.56617524909973L 387 279.56617524909973L 378 279.56617524909973"
                                      cy="208.74274418599447"
                                      cx="423"
                                      j="8"
                                      val="380"
                                      barHeight="70.82343106310526"
                                      barWidth="9"
                                    ></path>
                                  </g>
                                  <g
                                    id="SvgjsG1949"
                                    class="apexcharts-series"
                                    seriesName="PRODUCTxB"
                                    rel="2"
                                    data:realIndex="1"
                                  >
                                    <path
                                      id="SvgjsPath1951"
                                      d="M 18 205.01519518267315L 18 130.46421511624658Q 18 130.46421511624658 18 130.46421511624658L 27 130.46421511624658Q 27 130.46421511624658 27 130.46421511624658L 27 130.46421511624658L 27 205.01519518267315L 27 205.01519518267315z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 18 205.01519518267315L 18 130.46421511624658Q 18 130.46421511624658 18 130.46421511624658L 27 130.46421511624658Q 27 130.46421511624658 27 130.46421511624658L 27 130.46421511624658L 27 205.01519518267315L 27 205.01519518267315z"
                                      pathFrom="M 18 205.01519518267315L 18 205.01519518267315L 27 205.01519518267315L 27 205.01519518267315L 27 205.01519518267315L 27 205.01519518267315L 27 205.01519518267315L 18 205.01519518267315"
                                      cy="130.46421511624658"
                                      cx="63"
                                      j="0"
                                      val="400"
                                      barHeight="74.55098006642659"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1952"
                                      d="M 63 210.60651868765513L 63 141.64686212621052Q 63 141.64686212621052 63 141.64686212621052L 72 141.64686212621052Q 72 141.64686212621052 72 141.64686212621052L 72 141.64686212621052L 72 210.60651868765513L 72 210.60651868765513z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 63 210.60651868765513L 63 141.64686212621052Q 63 141.64686212621052 63 141.64686212621052L 72 141.64686212621052Q 72 141.64686212621052 72 141.64686212621052L 72 141.64686212621052L 72 210.60651868765513L 72 210.60651868765513z"
                                      pathFrom="M 63 210.60651868765513L 63 210.60651868765513L 72 210.60651868765513L 72 210.60651868765513L 72 210.60651868765513L 72 210.60651868765513L 72 210.60651868765513L 63 210.60651868765513"
                                      cy="141.64686212621052"
                                      cx="108"
                                      j="1"
                                      val="370"
                                      barHeight="68.9596565614446"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1953"
                                      d="M 108 218.06161669429778L 108 156.55705813949584Q 108 156.55705813949584 108 156.55705813949584L 117 156.55705813949584Q 117 156.55705813949584 117 156.55705813949584L 117 156.55705813949584L 117 218.06161669429778L 117 218.06161669429778z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 108 218.06161669429778L 108 156.55705813949584Q 108 156.55705813949584 108 156.55705813949584L 117 156.55705813949584Q 117 156.55705813949584 117 156.55705813949584L 117 156.55705813949584L 117 218.06161669429778L 117 218.06161669429778z"
                                      pathFrom="M 108 218.06161669429778L 108 218.06161669429778L 117 218.06161669429778L 117 218.06161669429778L 117 218.06161669429778L 117 218.06161669429778L 117 218.06161669429778L 108 218.06161669429778"
                                      cy="156.55705813949584"
                                      cx="153"
                                      j="2"
                                      val="330"
                                      barHeight="61.50455855480194"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1954"
                                      d="M 153 206.8789696843338L 153 134.1917641195679Q 153 134.1917641195679 153 134.1917641195679L 162 134.1917641195679Q 162 134.1917641195679 162 134.1917641195679L 162 134.1917641195679L 162 206.8789696843338L 162 206.8789696843338z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 153 206.8789696843338L 153 134.1917641195679Q 153 134.1917641195679 153 134.1917641195679L 162 134.1917641195679Q 162 134.1917641195679 162 134.1917641195679L 162 134.1917641195679L 162 206.8789696843338L 162 206.8789696843338z"
                                      pathFrom="M 153 206.8789696843338L 153 206.8789696843338L 162 206.8789696843338L 162 206.8789696843338L 162 206.8789696843338L 162 206.8789696843338L 162 206.8789696843338L 153 206.8789696843338"
                                      cy="134.1917641195679"
                                      cx="198"
                                      j="3"
                                      val="390"
                                      barHeight="72.68720556476593"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1955"
                                      d="M 198 219.92539119595847L 198 160.2846071428172Q 198 160.2846071428172 198 160.2846071428172L 207 160.2846071428172Q 207 160.2846071428172 207 160.2846071428172L 207 160.2846071428172L 207 219.92539119595847L 207 219.92539119595847z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 198 219.92539119595847L 198 160.2846071428172Q 198 160.2846071428172 198 160.2846071428172L 207 160.2846071428172Q 207 160.2846071428172 207 160.2846071428172L 207 160.2846071428172L 207 219.92539119595847L 207 219.92539119595847z"
                                      pathFrom="M 198 219.92539119595847L 198 219.92539119595847L 207 219.92539119595847L 207 219.92539119595847L 207 219.92539119595847L 207 219.92539119595847L 207 219.92539119595847L 198 219.92539119595847"
                                      cy="160.2846071428172"
                                      cx="243"
                                      j="4"
                                      val="320"
                                      barHeight="59.640784053141275"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1956"
                                      d="M 243 214.33406769097644L 243 149.10196013285315Q 243 149.10196013285315 243 149.10196013285315L 252 149.10196013285315Q 252 149.10196013285315 252 149.10196013285315L 252 149.10196013285315L 252 214.33406769097644L 252 214.33406769097644z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 243 214.33406769097644L 243 149.10196013285315Q 243 149.10196013285315 243 149.10196013285315L 252 149.10196013285315Q 252 149.10196013285315 252 149.10196013285315L 252 149.10196013285315L 252 214.33406769097644L 252 214.33406769097644z"
                                      pathFrom="M 243 214.33406769097644L 243 214.33406769097644L 252 214.33406769097644L 252 214.33406769097644L 252 214.33406769097644L 252 214.33406769097644L 252 214.33406769097644L 243 214.33406769097644"
                                      cy="149.10196013285315"
                                      cx="288"
                                      j="5"
                                      val="350"
                                      barHeight="65.23210755812327"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1957"
                                      d="M 288 212.47029318931578L 288 145.37441112953184Q 288 145.37441112953184 288 145.37441112953184L 297 145.37441112953184Q 297 145.37441112953184 297 145.37441112953184L 297 145.37441112953184L 297 212.47029318931578L 297 212.47029318931578z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 288 212.47029318931578L 288 145.37441112953184Q 288 145.37441112953184 288 145.37441112953184L 297 145.37441112953184Q 297 145.37441112953184 297 145.37441112953184L 297 145.37441112953184L 297 212.47029318931578L 297 212.47029318931578z"
                                      pathFrom="M 288 212.47029318931578L 288 212.47029318931578L 297 212.47029318931578L 297 212.47029318931578L 297 212.47029318931578L 297 212.47029318931578L 297 212.47029318931578L 288 212.47029318931578"
                                      cy="145.37441112953184"
                                      cx="333"
                                      j="6"
                                      val="360"
                                      barHeight="67.09588205978393"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1958"
                                      d="M 333 219.92539119595847L 333 160.2846071428172Q 333 160.2846071428172 333 160.2846071428172L 342 160.2846071428172Q 342 160.2846071428172 342 160.2846071428172L 342 160.2846071428172L 342 219.92539119595847L 342 219.92539119595847z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 333 219.92539119595847L 333 160.2846071428172Q 333 160.2846071428172 333 160.2846071428172L 342 160.2846071428172Q 342 160.2846071428172 342 160.2846071428172L 342 160.2846071428172L 342 219.92539119595847L 342 219.92539119595847z"
                                      pathFrom="M 333 219.92539119595847L 333 219.92539119595847L 342 219.92539119595847L 342 219.92539119595847L 342 219.92539119595847L 342 219.92539119595847L 342 219.92539119595847L 333 219.92539119595847"
                                      cy="160.2846071428172"
                                      cx="378"
                                      j="7"
                                      val="320"
                                      barHeight="59.640784053141275"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1959"
                                      d="M 378 208.74274418599447L 378 137.9193131228892Q 378 137.9193131228892 378 137.9193131228892L 387 137.9193131228892Q 387 137.9193131228892 387 137.9193131228892L 387 137.9193131228892L 387 208.74274418599447L 387 208.74274418599447z"
                                      fill="rgba(67,24,255,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="1"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 378 208.74274418599447L 378 137.9193131228892Q 378 137.9193131228892 378 137.9193131228892L 387 137.9193131228892Q 387 137.9193131228892 387 137.9193131228892L 387 137.9193131228892L 387 208.74274418599447L 387 208.74274418599447z"
                                      pathFrom="M 378 208.74274418599447L 378 208.74274418599447L 387 208.74274418599447L 387 208.74274418599447L 387 208.74274418599447L 387 208.74274418599447L 387 208.74274418599447L 378 208.74274418599447"
                                      cy="137.9193131228892"
                                      cx="423"
                                      j="8"
                                      val="380"
                                      barHeight="70.82343106310526"
                                      barWidth="9"
                                    ></path>
                                  </g>
                                  <g
                                    id="SvgjsG1960"
                                    class="apexcharts-series"
                                    seriesName="PRODUCTxC"
                                    rel="3"
                                    data:realIndex="2"
                                  >
                                    <path
                                      id="SvgjsPath1962"
                                      d="M 18 130.46421511624658L 18 65.91323504981999Q 18 55.91323504981999 28 55.91323504981999L 17 55.91323504981999Q 27 55.91323504981999 27 65.91323504981999L 27 65.91323504981999L 27 130.46421511624658L 27 130.46421511624658z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 18 130.46421511624658L 18 65.91323504981999Q 18 55.91323504981999 28 55.91323504981999L 17 55.91323504981999Q 27 55.91323504981999 27 65.91323504981999L 27 65.91323504981999L 27 130.46421511624658L 27 130.46421511624658z"
                                      pathFrom="M 18 130.46421511624658L 18 130.46421511624658L 27 130.46421511624658L 27 130.46421511624658L 27 130.46421511624658L 27 130.46421511624658L 27 130.46421511624658L 18 130.46421511624658"
                                      cy="55.91323504981999"
                                      cx="63"
                                      j="0"
                                      val="400"
                                      barHeight="74.55098006642659"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1963"
                                      d="M 63 141.64686212621052L 63 82.68720556476592Q 63 72.68720556476592 73 72.68720556476592L 62 72.68720556476592Q 72 72.68720556476592 72 82.68720556476592L 72 82.68720556476592L 72 141.64686212621052L 72 141.64686212621052z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 63 141.64686212621052L 63 82.68720556476592Q 63 72.68720556476592 73 72.68720556476592L 62 72.68720556476592Q 72 72.68720556476592 72 82.68720556476592L 72 82.68720556476592L 72 141.64686212621052L 72 141.64686212621052z"
                                      pathFrom="M 63 141.64686212621052L 63 141.64686212621052L 72 141.64686212621052L 72 141.64686212621052L 72 141.64686212621052L 72 141.64686212621052L 72 141.64686212621052L 63 141.64686212621052"
                                      cy="72.68720556476592"
                                      cx="108"
                                      j="1"
                                      val="370"
                                      barHeight="68.9596565614446"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1964"
                                      d="M 108 156.55705813949584L 108 105.05249958469389Q 108 95.05249958469389 118 95.05249958469389L 107 95.05249958469389Q 117 95.05249958469389 117 105.05249958469389L 117 105.05249958469389L 117 156.55705813949584L 117 156.55705813949584z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 108 156.55705813949584L 108 105.05249958469389Q 108 95.05249958469389 118 95.05249958469389L 107 95.05249958469389Q 117 95.05249958469389 117 105.05249958469389L 117 105.05249958469389L 117 156.55705813949584L 117 156.55705813949584z"
                                      pathFrom="M 108 156.55705813949584L 108 156.55705813949584L 117 156.55705813949584L 117 156.55705813949584L 117 156.55705813949584L 117 156.55705813949584L 117 156.55705813949584L 108 156.55705813949584"
                                      cy="95.05249958469389"
                                      cx="153"
                                      j="2"
                                      val="330"
                                      barHeight="61.50455855480194"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1965"
                                      d="M 153 134.1917641195679L 153 71.50455855480196Q 153 61.50455855480196 163 61.50455855480196L 152 61.50455855480196Q 162 61.50455855480196 162 71.50455855480196L 162 71.50455855480196L 162 134.1917641195679L 162 134.1917641195679z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 153 134.1917641195679L 153 71.50455855480196Q 153 61.50455855480196 163 61.50455855480196L 152 61.50455855480196Q 162 61.50455855480196 162 71.50455855480196L 162 71.50455855480196L 162 134.1917641195679L 162 134.1917641195679z"
                                      pathFrom="M 153 134.1917641195679L 153 134.1917641195679L 162 134.1917641195679L 162 134.1917641195679L 162 134.1917641195679L 162 134.1917641195679L 162 134.1917641195679L 153 134.1917641195679"
                                      cy="61.50455855480196"
                                      cx="198"
                                      j="3"
                                      val="390"
                                      barHeight="72.68720556476593"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1966"
                                      d="M 198 160.2846071428172L 198 110.64382308967593Q 198 100.64382308967593 208 100.64382308967593L 197 100.64382308967593Q 207 100.64382308967593 207 110.64382308967593L 207 110.64382308967593L 207 160.2846071428172L 207 160.2846071428172z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 198 160.2846071428172L 198 110.64382308967593Q 198 100.64382308967593 208 100.64382308967593L 197 100.64382308967593Q 207 100.64382308967593 207 110.64382308967593L 207 110.64382308967593L 207 160.2846071428172L 207 160.2846071428172z"
                                      pathFrom="M 198 160.2846071428172L 198 160.2846071428172L 207 160.2846071428172L 207 160.2846071428172L 207 160.2846071428172L 207 160.2846071428172L 207 160.2846071428172L 198 160.2846071428172"
                                      cy="100.64382308967593"
                                      cx="243"
                                      j="4"
                                      val="320"
                                      barHeight="59.640784053141275"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1967"
                                      d="M 243 149.10196013285315L 243 93.86985257472988Q 243 83.86985257472988 253 83.86985257472988L 242 83.86985257472988Q 252 83.86985257472988 252 93.86985257472988L 252 93.86985257472988L 252 149.10196013285315L 252 149.10196013285315z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 243 149.10196013285315L 243 93.86985257472988Q 243 83.86985257472988 253 83.86985257472988L 242 83.86985257472988Q 252 83.86985257472988 252 93.86985257472988L 252 93.86985257472988L 252 149.10196013285315L 252 149.10196013285315z"
                                      pathFrom="M 243 149.10196013285315L 243 149.10196013285315L 252 149.10196013285315L 252 149.10196013285315L 252 149.10196013285315L 252 149.10196013285315L 252 149.10196013285315L 243 149.10196013285315"
                                      cy="83.86985257472988"
                                      cx="288"
                                      j="5"
                                      val="350"
                                      barHeight="65.23210755812327"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1968"
                                      d="M 288 145.37441112953184L 288 88.2785290697479Q 288 78.2785290697479 298 78.2785290697479L 287 78.2785290697479Q 297 78.2785290697479 297 88.2785290697479L 297 88.2785290697479L 297 145.37441112953184L 297 145.37441112953184z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 288 145.37441112953184L 288 88.2785290697479Q 288 78.2785290697479 298 78.2785290697479L 287 78.2785290697479Q 297 78.2785290697479 297 88.2785290697479L 297 88.2785290697479L 297 145.37441112953184L 297 145.37441112953184z"
                                      pathFrom="M 288 145.37441112953184L 288 145.37441112953184L 297 145.37441112953184L 297 145.37441112953184L 297 145.37441112953184L 297 145.37441112953184L 297 145.37441112953184L 288 145.37441112953184"
                                      cy="78.2785290697479"
                                      cx="333"
                                      j="6"
                                      val="360"
                                      barHeight="67.09588205978393"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1969"
                                      d="M 333 160.2846071428172L 333 110.64382308967593Q 333 100.64382308967593 343 100.64382308967593L 332 100.64382308967593Q 342 100.64382308967593 342 110.64382308967593L 342 110.64382308967593L 342 160.2846071428172L 342 160.2846071428172z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 333 160.2846071428172L 333 110.64382308967593Q 333 100.64382308967593 343 100.64382308967593L 332 100.64382308967593Q 342 100.64382308967593 342 110.64382308967593L 342 110.64382308967593L 342 160.2846071428172L 342 160.2846071428172z"
                                      pathFrom="M 333 160.2846071428172L 333 160.2846071428172L 342 160.2846071428172L 342 160.2846071428172L 342 160.2846071428172L 342 160.2846071428172L 342 160.2846071428172L 333 160.2846071428172"
                                      cy="100.64382308967593"
                                      cx="378"
                                      j="7"
                                      val="320"
                                      barHeight="59.640784053141275"
                                      barWidth="9"
                                    ></path>
                                    <path
                                      id="SvgjsPath1970"
                                      d="M 378 137.9193131228892L 378 77.09588205978395Q 378 67.09588205978395 388 67.09588205978395L 377 67.09588205978395Q 387 67.09588205978395 387 77.09588205978395L 387 77.09588205978395L 387 137.9193131228892L 387 137.9193131228892z"
                                      fill="rgba(239,244,251,0.85)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="2"
                                      clip-path="url(#gridRectMaskmw68w6ud)"
                                      pathTo="M 378 137.9193131228892L 378 77.09588205978395Q 378 67.09588205978395 388 67.09588205978395L 377 67.09588205978395Q 387 67.09588205978395 387 77.09588205978395L 387 77.09588205978395L 387 137.9193131228892L 387 137.9193131228892z"
                                      pathFrom="M 378 137.9193131228892L 378 137.9193131228892L 387 137.9193131228892L 387 137.9193131228892L 387 137.9193131228892L 387 137.9193131228892L 387 137.9193131228892L 378 137.9193131228892"
                                      cy="67.09588205978395"
                                      cx="423"
                                      j="8"
                                      val="380"
                                      barHeight="70.82343106310526"
                                      barWidth="9"
                                    ></path>
                                  </g>
                                  <g
                                    id="SvgjsG1939"
                                    class="apexcharts-datalabels"
                                    data:realIndex="0"
                                  ></g>
                                  <g
                                    id="SvgjsG1950"
                                    class="apexcharts-datalabels"
                                    data:realIndex="1"
                                  ></g>
                                  <g
                                    id="SvgjsG1961"
                                    class="apexcharts-datalabels"
                                    data:realIndex="2"
                                  ></g>
                                </g>
                                <line
                                  id="SvgjsLine2006"
                                  x1="0"
                                  y1="0"
                                  x2="405"
                                  y2="0"
                                  stroke="#b6b6b6"
                                  stroke-dasharray="0"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs"
                                ></line>
                                <line
                                  id="SvgjsLine2007"
                                  x1="0"
                                  y1="0"
                                  x2="405"
                                  y2="0"
                                  stroke-dasharray="0"
                                  stroke-width="0"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs-hidden"
                                ></line>
                                <g
                                  id="SvgjsG2008"
                                  class="apexcharts-yaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2009"
                                  class="apexcharts-xaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2010"
                                  class="apexcharts-point-annotations"
                                ></g>
                              </g>
                              <g
                                id="SvgjsG2000"
                                class="apexcharts-yaxis"
                                rel="0"
                                transform="translate(-18, 0)"
                              ></g>
                              <g
                                id="SvgjsG1928"
                                class="apexcharts-annotations"
                              ></g>
                            </svg>
                            <div
                              class="apexcharts-legend"
                              style="max-height: 175px;"
                            ></div>
                            <div class="apexcharts-tooltip apexcharts-theme-dark">
                              <div
                                class="apexcharts-tooltip-title"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                              ></div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 1;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(106, 210, 250);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 2;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(67, 24, 255);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 3;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(239, 244, 251);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                              <div class="apexcharts-yaxistooltip-text"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                  <div>
                    <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full h-full sm:overflow-auto px-6">
                      <header class="relative flex items-center justify-between pt-4">
                        <div class="text-xl font-bold text-navy-700 dark:text-white">
                          Check Table
                        </div>
                        <div class="relative flex">
                          <div class="flex">
                            <button class="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 16 16"
                                class="h-6 w-6"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                              </svg>
                            </button>
                          </div>
                          <div class="top-11 right-0 w-max absolute z-10 origin-top-right transition-all duration-300 ease-in-out scale-0">
                            <div class="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                              <p class="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
                                <span>
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                                  </svg>
                                </span>
                                Panel 1
                              </p>
                              <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                                <span>
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z"></path>
                                  </svg>
                                </span>
                                Panel 2
                              </p>
                              <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                                <span>
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    version="1.2"
                                    baseProfile="tiny"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M12.5 5.5c-.276 0-.5.224-.5.5s.224.5.5.5c1.083 0 1.964.881 1.964 1.964 0 .276.224.5.5.5s.5-.224.5-.5c0-1.634-1.33-2.964-2.964-2.964zM12.5 1c-4.136 0-7.5 3.364-7.5 7.5 0 1.486.44 2.922 1.274 4.165l.08.135c1.825 2.606 2.146 3.43 2.146 4.2v3c0 .552.448 1 1 1h2c0 .26.11.52.29.71.19.18.45.29.71.29.26 0 .52-.11.71-.29.18-.19.29-.45.29-.71h2c.552 0 1-.448 1-1v-3c0-.782.319-1.61 2.132-4.199.895-1.275 1.368-2.762 1.368-4.301 0-4.136-3.364-7.5-7.5-7.5zm2 18h-4v-1h4v1zm2.495-7.347c-1.466 2.093-2.143 3.289-2.385 4.347h-1.11v-2c0-.552-.448-1-1-1s-1 .448-1 1v2h-1.113c-.24-1.03-.898-2.2-2.306-4.22l-.077-.129c-.657-.934-1.004-2.024-1.004-3.151 0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5c0 1.126-.347 2.216-1.005 3.153z"></path>
                                    </g>
                                  </svg>
                                </span>
                                Panel 3
                              </p>
                              <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                                <span>
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                  </svg>
                                </span>
                                Panel 4
                              </p>
                            </div>
                          </div>
                        </div>
                      </header>
                      <div class="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                        <table
                          role="table"
                          class="w-full"
                          variant="simple"
                          color="gray-500"
                          mb="24px"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                class="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                                style="cursor: pointer;"
                              >
                                <div class="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                  NAME
                                </div>
                              </th>
                              <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                class="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                                style="cursor: pointer;"
                              >
                                <div class="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                  PROGRESS
                                </div>
                              </th>
                              <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                class="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                                style="cursor: pointer;"
                              >
                                <div class="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                  QUANTITY
                                </div>
                              </th>
                              <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                class="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                                style="cursor: pointer;"
                              >
                                <div class="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                  DATE
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody role="rowgroup">
                            <tr role="row">
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                                    name="weekly"
                                  />
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    Marketplace
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center">
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    75.5%
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  {" "}
                                  2458{" "}
                                </p>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Apr 26, 2022
                                </p>
                              </td>
                            </tr>
                            <tr role="row">
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                                    name="weekly"
                                  />
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    Venus DB PRO
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center">
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    35.4%
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  {" "}
                                  1485{" "}
                                </p>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Jul 20, 2022
                                </p>
                              </td>
                            </tr>
                            <tr role="row">
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                                    name="weekly"
                                  />
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    Venus DS
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center">
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    25%
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  {" "}
                                  1024{" "}
                                </p>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Sep 30, 2022
                                </p>
                              </td>
                            </tr>
                            <tr role="row">
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                                    name="weekly"
                                  />
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    Venus 3D Asset
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center">
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    100%
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  {" "}
                                  858{" "}
                                </p>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Oct 24, 2022
                                </p>
                              </td>
                            </tr>
                            <tr role="row">
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                                    name="weekly"
                                  />
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    Marketplace
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <div class="flex items-center">
                                  <p class="text-sm font-bold text-navy-700 dark:text-white">
                                    75.5%
                                  </p>
                                </div>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  {" "}
                                  258{" "}
                                </p>
                              </td>
                              <td
                                role="cell"
                                class="pt-[14px] pb-[16px] sm:text-[14px]"
                              >
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Nov 29, 2022
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
                    <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none pb-7 p-[20px]">
                      <div class="flex flex-row justify-between">
                        <div class="ml-1 pt-2">
                          <p class="text-sm font-medium leading-4 text-gray-600">
                            Daily Traffic
                          </p>
                          <p class="text-[34px] font-bold text-navy-700 dark:text-white">
                            2.579{" "}
                            <span class="text-sm font-medium leading-6 text-gray-600">
                              Visitors
                            </span>
                          </p>
                        </div>
                        <div class="mt-2 flex items-start">
                          <div class="flex items-center text-sm text-green-500">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="h-5 w-5"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M7 14l5-5 5 5z"></path>
                            </svg>
                            <p class="font-bold"> +2.45% </p>
                          </div>
                        </div>
                      </div>
                      <div class="h-[300px] w-full pt-10 pb-0">
                        <div>
                          <div
                            id="apexcharts7pg62rox"
                            class="apexcharts-canvas apexcharts7pg62rox apexcharts-theme-light"
                            style="width: 172px; height: 260px;"
                          >
                            <svg
                              id="SvgjsSvg2011"
                              width="172"
                              height="260"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xmlns:svgjs="http://svgjs.dev"
                              class="apexcharts-svg"
                              xmlns:data="ApexChartsNS"
                              transform="translate(0, 0)"
                              style="background: transparent;"
                            >
                              <g
                                id="SvgjsG2013"
                                class="apexcharts-inner apexcharts-graphical"
                                transform="translate(12, 30)"
                              >
                                <defs id="SvgjsDefs2012">
                                  <linearGradient
                                    id="SvgjsLinearGradient2016"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2017"
                                      stop-opacity="0.4"
                                      stop-color="rgba(216,227,240,0.4)"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2018"
                                      stop-opacity="0.5"
                                      stop-color="rgba(190,209,230,0.5)"
                                      offset="1"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2019"
                                      stop-opacity="0.5"
                                      stop-color="rgba(190,209,230,0.5)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <clipPath id="gridRectMask7pg62rox">
                                    <rect
                                      id="SvgjsRect2021"
                                      width="154"
                                      height="189.56617524909973"
                                      x="-2"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="forecastMask7pg62rox"></clipPath>
                                  <clipPath id="nonForecastMask7pg62rox"></clipPath>
                                  <clipPath id="gridRectMarkerMask7pg62rox">
                                    <rect
                                      id="SvgjsRect2022"
                                      width="154"
                                      height="193.56617524909973"
                                      x="-2"
                                      y="-2"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <linearGradient
                                    id="SvgjsLinearGradient2028"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2029"
                                      stop-opacity="1"
                                      stop-color="#4318ff"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2030"
                                      stop-opacity="0.28"
                                      stop-color="rgba(67, 24, 255, 1)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="SvgjsLinearGradient2033"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2034"
                                      stop-opacity="1"
                                      stop-color="#4318ff"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2035"
                                      stop-opacity="0.28"
                                      stop-color="rgba(67, 24, 255, 1)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="SvgjsLinearGradient2038"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2039"
                                      stop-opacity="1"
                                      stop-color="#4318ff"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2040"
                                      stop-opacity="0.28"
                                      stop-color="rgba(67, 24, 255, 1)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="SvgjsLinearGradient2043"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2044"
                                      stop-opacity="1"
                                      stop-color="#4318ff"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2045"
                                      stop-opacity="0.28"
                                      stop-color="rgba(67, 24, 255, 1)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="SvgjsLinearGradient2048"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2049"
                                      stop-opacity="1"
                                      stop-color="#4318ff"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2050"
                                      stop-opacity="0.28"
                                      stop-color="rgba(67, 24, 255, 1)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="SvgjsLinearGradient2053"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2054"
                                      stop-opacity="1"
                                      stop-color="#4318ff"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2055"
                                      stop-opacity="0.28"
                                      stop-color="rgba(67, 24, 255, 1)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="SvgjsLinearGradient2058"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2059"
                                      stop-opacity="1"
                                      stop-color="#4318ff"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2060"
                                      stop-opacity="0.28"
                                      stop-color="rgba(67, 24, 255, 1)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                </defs>
                                <rect
                                  id="SvgjsRect2020"
                                  width="8.571428571428571"
                                  height="189.56617524909973"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke-dasharray="3"
                                  fill="url(#SvgjsLinearGradient2016)"
                                  class="apexcharts-xcrosshairs"
                                  y2="189.56617524909973"
                                  filter="none"
                                  fill-opacity="0.9"
                                ></rect>
                                <g
                                  id="SvgjsG2062"
                                  class="apexcharts-xaxis"
                                  transform="translate(0, 0)"
                                >
                                  <g
                                    id="SvgjsG2063"
                                    class="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                  >
                                    <text
                                      id="SvgjsText2065"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="10.714285714285714"
                                      y="218.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2066">00</tspan>
                                      <title>00</title>
                                    </text>
                                    <text
                                      id="SvgjsText2068"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="32.14285714285714"
                                      y="218.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2069">04</tspan>
                                      <title>04</title>
                                    </text>
                                    <text
                                      id="SvgjsText2071"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="53.57142857142856"
                                      y="218.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2072">08</tspan>
                                      <title>08</title>
                                    </text>
                                    <text
                                      id="SvgjsText2074"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="75"
                                      y="218.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2075">12</tspan>
                                      <title>12</title>
                                    </text>
                                    <text
                                      id="SvgjsText2077"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="96.42857142857143"
                                      y="218.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2078">14</tspan>
                                      <title>14</title>
                                    </text>
                                    <text
                                      id="SvgjsText2080"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="117.85714285714285"
                                      y="218.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2081">16</tspan>
                                      <title>16</title>
                                    </text>
                                    <text
                                      id="SvgjsText2083"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="139.28571428571425"
                                      y="218.56617524909973"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="500"
                                      fill="#a3aed0"
                                      class="apexcharts-text apexcharts-xaxis-label "
                                      style="font-family: Helvetica, Arial, sans-serif;"
                                    >
                                      <tspan id="SvgjsTspan2084">18</tspan>
                                      <title>18</title>
                                    </text>
                                  </g>
                                </g>
                                <g id="SvgjsG2086" class="apexcharts-grid">
                                  <g
                                    id="SvgjsG2087"
                                    class="apexcharts-gridlines-horizontal"
                                    style="display: none;"
                                  >
                                    <line
                                      id="SvgjsLine2089"
                                      x1="0"
                                      y1="0"
                                      x2="150"
                                      y2="0"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="5"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2090"
                                      x1="0"
                                      y1="37.913235049819946"
                                      x2="150"
                                      y2="37.913235049819946"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="5"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2091"
                                      x1="0"
                                      y1="75.82647009963989"
                                      x2="150"
                                      y2="75.82647009963989"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="5"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2092"
                                      x1="0"
                                      y1="113.73970514945984"
                                      x2="150"
                                      y2="113.73970514945984"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="5"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2093"
                                      x1="0"
                                      y1="151.65294019927978"
                                      x2="150"
                                      y2="151.65294019927978"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="5"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2094"
                                      x1="0"
                                      y1="189.56617524909973"
                                      x2="150"
                                      y2="189.56617524909973"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="5"
                                      stroke-linecap="butt"
                                      class="apexcharts-gridline"
                                    ></line>
                                  </g>
                                  <g
                                    id="SvgjsG2088"
                                    class="apexcharts-gridlines-vertical"
                                    style="display: none;"
                                  ></g>
                                  <line
                                    id="SvgjsLine2096"
                                    x1="0"
                                    y1="189.56617524909973"
                                    x2="150"
                                    y2="189.56617524909973"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2095"
                                    x1="0"
                                    y1="1"
                                    x2="0"
                                    y2="189.56617524909973"
                                    stroke="transparent"
                                    stroke-dasharray="0"
                                    stroke-linecap="butt"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG2023"
                                  class="apexcharts-bar-series apexcharts-plot-series"
                                >
                                  <g
                                    id="SvgjsG2024"
                                    class="apexcharts-series"
                                    rel="1"
                                    seriesName="DailyxTraffic"
                                    data:realIndex="0"
                                  >
                                    <path
                                      id="SvgjsPath2031"
                                      d="M 6.428571428571428 189.56617524909973L 6.428571428571428 123.73970514945984Q 6.428571428571428 113.73970514945984 16.428571428571427 113.73970514945984L 5 113.73970514945984Q 15 113.73970514945984 15 123.73970514945984L 15 123.73970514945984L 15 189.56617524909973L 15 189.56617524909973z"
                                      fill="url(#SvgjsLinearGradient2028)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMask7pg62rox)"
                                      pathTo="M 6.428571428571428 189.56617524909973L 6.428571428571428 123.73970514945984Q 6.428571428571428 113.73970514945984 16.428571428571427 113.73970514945984L 5 113.73970514945984Q 15 113.73970514945984 15 123.73970514945984L 15 123.73970514945984L 15 189.56617524909973L 15 189.56617524909973z"
                                      pathFrom="M 6.428571428571428 189.56617524909973L 6.428571428571428 189.56617524909973L 15 189.56617524909973L 15 189.56617524909973L 15 189.56617524909973L 15 189.56617524909973L 15 189.56617524909973L 6.428571428571428 189.56617524909973"
                                      cy="113.73970514945984"
                                      cx="27.857142857142854"
                                      j="0"
                                      val="20"
                                      barHeight="75.82647009963989"
                                      barWidth="8.571428571428571"
                                    ></path>
                                    <path
                                      id="SvgjsPath2036"
                                      d="M 27.857142857142854 189.56617524909973L 27.857142857142854 85.8264700996399Q 27.857142857142854 75.8264700996399 37.857142857142854 75.8264700996399L 26.428571428571423 75.8264700996399Q 36.42857142857142 75.8264700996399 36.42857142857142 85.8264700996399L 36.42857142857142 85.8264700996399L 36.42857142857142 189.56617524909973L 36.42857142857142 189.56617524909973z"
                                      fill="url(#SvgjsLinearGradient2033)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMask7pg62rox)"
                                      pathTo="M 27.857142857142854 189.56617524909973L 27.857142857142854 85.8264700996399Q 27.857142857142854 75.8264700996399 37.857142857142854 75.8264700996399L 26.428571428571423 75.8264700996399Q 36.42857142857142 75.8264700996399 36.42857142857142 85.8264700996399L 36.42857142857142 85.8264700996399L 36.42857142857142 189.56617524909973L 36.42857142857142 189.56617524909973z"
                                      pathFrom="M 27.857142857142854 189.56617524909973L 27.857142857142854 189.56617524909973L 36.42857142857142 189.56617524909973L 36.42857142857142 189.56617524909973L 36.42857142857142 189.56617524909973L 36.42857142857142 189.56617524909973L 36.42857142857142 189.56617524909973L 27.857142857142854 189.56617524909973"
                                      cy="75.8264700996399"
                                      cx="49.28571428571428"
                                      j="1"
                                      val="30"
                                      barHeight="113.73970514945982"
                                      barWidth="8.571428571428571"
                                    ></path>
                                    <path
                                      id="SvgjsPath2041"
                                      d="M 49.28571428571428 189.56617524909973L 49.28571428571428 47.913235049819946Q 49.28571428571428 37.913235049819946 59.28571428571428 37.913235049819946L 47.85714285714285 37.913235049819946Q 57.85714285714285 37.913235049819946 57.85714285714285 47.913235049819946L 57.85714285714285 47.913235049819946L 57.85714285714285 189.56617524909973L 57.85714285714285 189.56617524909973z"
                                      fill="url(#SvgjsLinearGradient2038)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMask7pg62rox)"
                                      pathTo="M 49.28571428571428 189.56617524909973L 49.28571428571428 47.913235049819946Q 49.28571428571428 37.913235049819946 59.28571428571428 37.913235049819946L 47.85714285714285 37.913235049819946Q 57.85714285714285 37.913235049819946 57.85714285714285 47.913235049819946L 57.85714285714285 47.913235049819946L 57.85714285714285 189.56617524909973L 57.85714285714285 189.56617524909973z"
                                      pathFrom="M 49.28571428571428 189.56617524909973L 49.28571428571428 189.56617524909973L 57.85714285714285 189.56617524909973L 57.85714285714285 189.56617524909973L 57.85714285714285 189.56617524909973L 57.85714285714285 189.56617524909973L 57.85714285714285 189.56617524909973L 49.28571428571428 189.56617524909973"
                                      cy="37.913235049819946"
                                      cx="70.71428571428571"
                                      j="2"
                                      val="40"
                                      barHeight="151.65294019927978"
                                      barWidth="8.571428571428571"
                                    ></path>
                                    <path
                                      id="SvgjsPath2046"
                                      d="M 70.71428571428571 189.56617524909973L 70.71428571428571 123.73970514945984Q 70.71428571428571 113.73970514945984 80.71428571428571 113.73970514945984L 69.28571428571428 113.73970514945984Q 79.28571428571428 113.73970514945984 79.28571428571428 123.73970514945984L 79.28571428571428 123.73970514945984L 79.28571428571428 189.56617524909973L 79.28571428571428 189.56617524909973z"
                                      fill="url(#SvgjsLinearGradient2043)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMask7pg62rox)"
                                      pathTo="M 70.71428571428571 189.56617524909973L 70.71428571428571 123.73970514945984Q 70.71428571428571 113.73970514945984 80.71428571428571 113.73970514945984L 69.28571428571428 113.73970514945984Q 79.28571428571428 113.73970514945984 79.28571428571428 123.73970514945984L 79.28571428571428 123.73970514945984L 79.28571428571428 189.56617524909973L 79.28571428571428 189.56617524909973z"
                                      pathFrom="M 70.71428571428571 189.56617524909973L 70.71428571428571 189.56617524909973L 79.28571428571428 189.56617524909973L 79.28571428571428 189.56617524909973L 79.28571428571428 189.56617524909973L 79.28571428571428 189.56617524909973L 79.28571428571428 189.56617524909973L 70.71428571428571 189.56617524909973"
                                      cy="113.73970514945984"
                                      cx="92.14285714285714"
                                      j="3"
                                      val="20"
                                      barHeight="75.82647009963989"
                                      barWidth="8.571428571428571"
                                    ></path>
                                    <path
                                      id="SvgjsPath2051"
                                      d="M 92.14285714285714 189.56617524909973L 92.14285714285714 28.956617524909973Q 92.14285714285714 18.956617524909973 102.14285714285714 18.956617524909973L 90.71428571428571 18.956617524909973Q 100.71428571428571 18.956617524909973 100.71428571428571 28.956617524909973L 100.71428571428571 28.956617524909973L 100.71428571428571 189.56617524909973L 100.71428571428571 189.56617524909973z"
                                      fill="url(#SvgjsLinearGradient2048)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMask7pg62rox)"
                                      pathTo="M 92.14285714285714 189.56617524909973L 92.14285714285714 28.956617524909973Q 92.14285714285714 18.956617524909973 102.14285714285714 18.956617524909973L 90.71428571428571 18.956617524909973Q 100.71428571428571 18.956617524909973 100.71428571428571 28.956617524909973L 100.71428571428571 28.956617524909973L 100.71428571428571 189.56617524909973L 100.71428571428571 189.56617524909973z"
                                      pathFrom="M 92.14285714285714 189.56617524909973L 92.14285714285714 189.56617524909973L 100.71428571428571 189.56617524909973L 100.71428571428571 189.56617524909973L 100.71428571428571 189.56617524909973L 100.71428571428571 189.56617524909973L 100.71428571428571 189.56617524909973L 92.14285714285714 189.56617524909973"
                                      cy="18.956617524909973"
                                      cx="113.57142857142857"
                                      j="4"
                                      val="45"
                                      barHeight="170.60955772418976"
                                      barWidth="8.571428571428571"
                                    ></path>
                                    <path
                                      id="SvgjsPath2056"
                                      d="M 113.57142857142857 189.56617524909973L 113.57142857142857 10Q 113.57142857142857 0 123.57142857142857 0L 112.14285714285714 0Q 122.14285714285714 0 122.14285714285714 10L 122.14285714285714 10L 122.14285714285714 189.56617524909973L 122.14285714285714 189.56617524909973z"
                                      fill="url(#SvgjsLinearGradient2053)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMask7pg62rox)"
                                      pathTo="M 113.57142857142857 189.56617524909973L 113.57142857142857 10Q 113.57142857142857 0 123.57142857142857 0L 112.14285714285714 0Q 122.14285714285714 0 122.14285714285714 10L 122.14285714285714 10L 122.14285714285714 189.56617524909973L 122.14285714285714 189.56617524909973z"
                                      pathFrom="M 113.57142857142857 189.56617524909973L 113.57142857142857 189.56617524909973L 122.14285714285714 189.56617524909973L 122.14285714285714 189.56617524909973L 122.14285714285714 189.56617524909973L 122.14285714285714 189.56617524909973L 122.14285714285714 189.56617524909973L 113.57142857142857 189.56617524909973"
                                      cy="0"
                                      cx="135"
                                      j="5"
                                      val="50"
                                      barHeight="189.56617524909973"
                                      barWidth="8.571428571428571"
                                    ></path>
                                    <path
                                      id="SvgjsPath2061"
                                      d="M 135 189.56617524909973L 135 85.8264700996399Q 135 75.8264700996399 145 75.8264700996399L 133.57142857142858 75.8264700996399Q 143.57142857142858 75.8264700996399 143.57142857142858 85.8264700996399L 143.57142857142858 85.8264700996399L 143.57142857142858 189.56617524909973L 143.57142857142858 189.56617524909973z"
                                      fill="url(#SvgjsLinearGradient2058)"
                                      fill-opacity="1"
                                      stroke-opacity="1"
                                      stroke-linecap="round"
                                      stroke-width="0"
                                      stroke-dasharray="0"
                                      class="apexcharts-bar-area"
                                      index="0"
                                      clip-path="url(#gridRectMask7pg62rox)"
                                      pathTo="M 135 189.56617524909973L 135 85.8264700996399Q 135 75.8264700996399 145 75.8264700996399L 133.57142857142858 75.8264700996399Q 143.57142857142858 75.8264700996399 143.57142857142858 85.8264700996399L 143.57142857142858 85.8264700996399L 143.57142857142858 189.56617524909973L 143.57142857142858 189.56617524909973z"
                                      pathFrom="M 135 189.56617524909973L 135 189.56617524909973L 143.57142857142858 189.56617524909973L 143.57142857142858 189.56617524909973L 143.57142857142858 189.56617524909973L 143.57142857142858 189.56617524909973L 143.57142857142858 189.56617524909973L 135 189.56617524909973"
                                      cy="75.8264700996399"
                                      cx="156.42857142857142"
                                      j="6"
                                      val="30"
                                      barHeight="113.73970514945982"
                                      barWidth="8.571428571428571"
                                    ></path>
                                    <g
                                      id="SvgjsG2026"
                                      class="apexcharts-bar-goals-markers"
                                      style="pointer-events: none"
                                    >
                                      <g
                                        id="SvgjsG2027"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2032"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2037"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2042"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2047"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2052"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2057"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG2025"
                                    class="apexcharts-datalabels"
                                    data:realIndex="0"
                                  ></g>
                                </g>
                                <line
                                  id="SvgjsLine2097"
                                  x1="0"
                                  y1="0"
                                  x2="150"
                                  y2="0"
                                  stroke="#b6b6b6"
                                  stroke-dasharray="0"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs"
                                ></line>
                                <line
                                  id="SvgjsLine2098"
                                  x1="0"
                                  y1="0"
                                  x2="150"
                                  y2="0"
                                  stroke-dasharray="0"
                                  stroke-width="0"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs-hidden"
                                ></line>
                                <g
                                  id="SvgjsG2099"
                                  class="apexcharts-yaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2100"
                                  class="apexcharts-xaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2101"
                                  class="apexcharts-point-annotations"
                                ></g>
                              </g>
                              <g
                                id="SvgjsG2085"
                                class="apexcharts-yaxis"
                                rel="0"
                                transform="translate(-18, 0)"
                              ></g>
                              <g
                                id="SvgjsG2014"
                                class="apexcharts-annotations"
                              ></g>
                            </svg>
                            <div
                              class="apexcharts-legend"
                              style="max-height: 130px;"
                            ></div>
                            <div class="apexcharts-tooltip apexcharts-theme-dark">
                              <div
                                class="apexcharts-tooltip-title"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                              ></div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 1;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(0, 143, 251);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                              <div class="apexcharts-yaxistooltip-text"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none rounded-[20px] p-3">
                      <div class="flex flex-row justify-between px-3 pt-2">
                        <div>
                          <h4 class="text-lg font-bold text-navy-700 dark:text-white">
                            Your Pie Chart
                          </h4>
                        </div>
                        <div class="mb-6 flex items-center justify-center">
                          <select class="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                            <option value="weekly">Weekly</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-auto flex h-[220px] w-full items-center justify-center">
                        <div>
                          <div
                            id="apexcharts93it9szs"
                            class="apexcharts-canvas apexcharts93it9szs apexcharts-theme-light"
                            style="width: 188px; height: 220px;"
                          >
                            <svg
                              id="SvgjsSvg2102"
                              width="188"
                              height="220"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xmlns:svgjs="http://svgjs.dev"
                              class="apexcharts-svg"
                              xmlns:data="ApexChartsNS"
                              transform="translate(0, 0)"
                              style="background: transparent;"
                            >
                              <g
                                id="SvgjsG2104"
                                class="apexcharts-inner apexcharts-graphical"
                                transform="translate(-3, 0)"
                              >
                                <defs id="SvgjsDefs2103">
                                  <clipPath id="gridRectMask93it9szs">
                                    <rect
                                      id="SvgjsRect2106"
                                      width="202"
                                      height="220"
                                      x="-3"
                                      y="-1"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="forecastMask93it9szs"></clipPath>
                                  <clipPath id="nonForecastMask93it9szs"></clipPath>
                                  <clipPath id="gridRectMarkerMask93it9szs">
                                    <rect
                                      id="SvgjsRect2107"
                                      width="200"
                                      height="222"
                                      x="-2"
                                      y="-2"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      stroke-width="0"
                                      stroke="none"
                                      stroke-dasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g id="SvgjsG2108" class="apexcharts-pie">
                                  <g
                                    id="SvgjsG2109"
                                    transform="translate(0, 0) scale(1)"
                                  >
                                    <g
                                      id="SvgjsG2110"
                                      class="apexcharts-slices"
                                    >
                                      <g
                                        id="SvgjsG2111"
                                        class="apexcharts-series apexcharts-pie-series"
                                        seriesName="Yourxfiles"
                                        rel="1"
                                        data:realIndex="0"
                                      >
                                        <path
                                          id="SvgjsPath2112"
                                          d="M 98 8.39024390243901 A 89.60975609756099 89.60975609756099 0 1 1 32.6772990939935 159.34209919956103 L 98 98 L 98 8.39024390243901"
                                          fill="rgba(67,24,255,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="2"
                                          stroke-dasharray="0"
                                          class="apexcharts-pie-area apexcharts-pie-slice-0"
                                          index="0"
                                          j="0"
                                          data:angle="226.8"
                                          data:startAngle="0"
                                          data:strokeWidth="2"
                                          data:value="63"
                                          data:pathOrig="M 98 8.39024390243901 A 89.60975609756099 89.60975609756099 0 1 1 32.6772990939935 159.34209919956103 L 98 98 L 98 8.39024390243901"
                                          stroke="#ffffff"
                                        ></path>
                                      </g>
                                      <g
                                        id="SvgjsG2113"
                                        class="apexcharts-series apexcharts-pie-series"
                                        seriesName="System"
                                        rel="2"
                                        data:realIndex="1"
                                      >
                                        <path
                                          id="SvgjsPath2114"
                                          d="M 32.6772990939935 159.34209919956103 A 89.60975609756099 89.60975609756099 0 0 1 36.65790080043894 32.677299093993526 L 98 98 L 32.6772990939935 159.34209919956103"
                                          fill="rgba(106,210,255,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="2"
                                          stroke-dasharray="0"
                                          class="apexcharts-pie-area apexcharts-pie-slice-1"
                                          index="0"
                                          j="1"
                                          data:angle="90"
                                          data:startAngle="226.8"
                                          data:strokeWidth="2"
                                          data:value="25"
                                          data:pathOrig="M 32.6772990939935 159.34209919956103 A 89.60975609756099 89.60975609756099 0 0 1 36.65790080043894 32.677299093993526 L 98 98 L 32.6772990939935 159.34209919956103"
                                          stroke="#ffffff"
                                        ></path>
                                      </g>
                                      <g
                                        id="SvgjsG2115"
                                        class="apexcharts-series apexcharts-pie-series"
                                        seriesName="Empty"
                                        rel="3"
                                        data:realIndex="2"
                                      >
                                        <path
                                          id="SvgjsPath2116"
                                          d="M 36.65790080043894 32.677299093993526 A 89.60975609756099 89.60975609756099 0 0 1 97.98436014722127 8.390245267273642 L 98 98 L 36.65790080043894 32.677299093993526"
                                          fill="rgba(239,244,251,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="2"
                                          stroke-dasharray="0"
                                          class="apexcharts-pie-area apexcharts-pie-slice-2"
                                          index="0"
                                          j="2"
                                          data:angle="43.19999999999999"
                                          data:startAngle="316.8"
                                          data:strokeWidth="2"
                                          data:value="12"
                                          data:pathOrig="M 36.65790080043894 32.677299093993526 A 89.60975609756099 89.60975609756099 0 0 1 97.98436014722127 8.390245267273642 L 98 98 L 36.65790080043894 32.677299093993526"
                                          stroke="#ffffff"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <line
                                  id="SvgjsLine2117"
                                  x1="0"
                                  y1="0"
                                  x2="196"
                                  y2="0"
                                  stroke="#b6b6b6"
                                  stroke-dasharray="0"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs"
                                ></line>
                                <line
                                  id="SvgjsLine2118"
                                  x1="0"
                                  y1="0"
                                  x2="196"
                                  y2="0"
                                  stroke-dasharray="0"
                                  stroke-width="0"
                                  stroke-linecap="butt"
                                  class="apexcharts-ycrosshairs-hidden"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG2105"
                                class="apexcharts-annotations"
                              ></g>
                            </svg>
                            <div class="apexcharts-legend"></div>
                            <div class="apexcharts-tooltip apexcharts-theme-dark">
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 1;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(67, 24, 255);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 2;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(106, 210, 255);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="apexcharts-tooltip-series-group"
                                style="order: 3;"
                              >
                                <span
                                  class="apexcharts-tooltip-marker"
                                  style="background-color: rgb(239, 244, 251);"
                                ></span>
                                <div
                                  class="apexcharts-tooltip-text"
                                  style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                                >
                                  <div class="apexcharts-tooltip-y-group">
                                    <span class="apexcharts-tooltip-text-y-label"></span>
                                    <span class="apexcharts-tooltip-text-y-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-goals-group">
                                    <span class="apexcharts-tooltip-text-goals-label"></span>
                                    <span class="apexcharts-tooltip-text-goals-value"></span>
                                  </div>
                                  <div class="apexcharts-tooltip-z-group">
                                    <span class="apexcharts-tooltip-text-z-label"></span>
                                    <span class="apexcharts-tooltip-text-z-value"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div class="flex flex-col items-center justify-center">
                          <div class="flex items-center justify-center">
                            <div class="h-2 w-2 rounded-full bg-brand-500"></div>
                            <p class="ml-1 text-sm font-normal text-gray-600">
                              Your Files
                            </p>
                          </div>
                          <p class="mt-px text-xl font-bold text-navy-700  dark:text-white">
                            63%
                          </p>
                        </div>
                        <div class="h-11 w-px bg-gray-300 dark:bg-white/10"></div>
                        <div class="flex flex-col items-center justify-center">
                          <div class="flex items-center justify-center">
                            <div class="h-2 w-2 rounded-full bg-[#6AD2FF]"></div>
                            <p class="ml-1 text-sm font-normal text-gray-600">
                              System
                            </p>
                          </div>
                          <p class="mt-px text-xl font-bold text-navy-700 dark:text-white">
                            25%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full h-full px-6 pb-6 sm:overflow-x-auto">
                    <div class="relative flex items-center justify-between pt-4">
                      <div class="text-xl font-bold text-navy-700 dark:text-white">
                        Complex Table
                      </div>
                      <div class="relative flex">
                        <div class="flex">
                          <button class="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              class="h-6 w-6"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                            </svg>
                          </button>
                        </div>
                        <div class="top-11 right-0 w-max absolute z-10 origin-top-right transition-all duration-300 ease-in-out scale-0">
                          <div class="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <p class="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
                              <span>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 1024 1024"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                                </svg>
                              </span>
                              Panel 1
                            </p>
                            <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                              <span>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 1024 1024"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z"></path>
                                </svg>
                              </span>
                              Panel 2
                            </p>
                            <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                              <span>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  version="1.2"
                                  baseProfile="tiny"
                                  viewBox="0 0 24 24"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g>
                                    <path d="M12.5 5.5c-.276 0-.5.224-.5.5s.224.5.5.5c1.083 0 1.964.881 1.964 1.964 0 .276.224.5.5.5s.5-.224.5-.5c0-1.634-1.33-2.964-2.964-2.964zM12.5 1c-4.136 0-7.5 3.364-7.5 7.5 0 1.486.44 2.922 1.274 4.165l.08.135c1.825 2.606 2.146 3.43 2.146 4.2v3c0 .552.448 1 1 1h2c0 .26.11.52.29.71.19.18.45.29.71.29.26 0 .52-.11.71-.29.18-.19.29-.45.29-.71h2c.552 0 1-.448 1-1v-3c0-.782.319-1.61 2.132-4.199.895-1.275 1.368-2.762 1.368-4.301 0-4.136-3.364-7.5-7.5-7.5zm2 18h-4v-1h4v1zm2.495-7.347c-1.466 2.093-2.143 3.289-2.385 4.347h-1.11v-2c0-.552-.448-1-1-1s-1 .448-1 1v2h-1.113c-.24-1.03-.898-2.2-2.306-4.22l-.077-.129c-.657-.934-1.004-2.024-1.004-3.151 0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5c0 1.126-.347 2.216-1.005 3.153z"></path>
                                  </g>
                                </svg>
                              </span>
                              Panel 3
                            </p>
                            <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                              <span>
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx="12" cy="12" r="3"></circle>
                                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                              </span>
                              Panel 4
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
                      <table role="table" class="w-full">
                        <thead>
                          <tr role="row">
                            <th
                              colspan="1"
                              role="columnheader"
                              title="Toggle SortBy"
                              class="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                              style="cursor: pointer;"
                            >
                              <p class="text-xs tracking-wide text-gray-600">
                                NAME
                              </p>
                            </th>
                            <th
                              colspan="1"
                              role="columnheader"
                              title="Toggle SortBy"
                              class="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                              style="cursor: pointer;"
                            >
                              <p class="text-xs tracking-wide text-gray-600">
                                STATUS
                              </p>
                            </th>
                            <th
                              colspan="1"
                              role="columnheader"
                              title="Toggle SortBy"
                              class="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                              style="cursor: pointer;"
                            >
                              <p class="text-xs tracking-wide text-gray-600">
                                DATE
                              </p>
                            </th>
                            <th
                              colspan="1"
                              role="columnheader"
                              title="Toggle SortBy"
                              class="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                              style="cursor: pointer;"
                            >
                              <p class="text-xs tracking-wide text-gray-600">
                                PROGRESS
                              </p>
                            </th>
                          </tr>
                        </thead>
                        <tbody role="rowgroup">
                          <tr role="row">
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <p class="text-sm font-bold text-navy-700 dark:text-white">
                                Marketplace
                              </p>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <div class="flex items-center gap-2">
                                <div class="rounded-full text-xl">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    class="text-green-500"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                  </svg>
                                </div>
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Approved
                                </p>
                              </div>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <p class="text-sm font-bold text-navy-700 dark:text-white">
                                24.Jan.2021
                              </p>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <div class="h-2 w-[108px] rounded-full bg-gray-200 dark:bg-navy-700">
                                <div
                                  class="flex h-full items-center justify-center rounded-full bg-brand-500 dark:bg-brand-400"
                                  style="width: 30%;"
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr role="row">
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <p class="text-sm font-bold text-navy-700 dark:text-white">
                                Marketplace
                              </p>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <div class="flex items-center gap-2">
                                <div class="rounded-full text-xl">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    class="text-red-500"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                                  </svg>
                                </div>
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Disable
                                </p>
                              </div>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <p class="text-sm font-bold text-navy-700 dark:text-white">
                                30.Dec.2021
                              </p>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <div class="h-2 w-[108px] rounded-full bg-gray-200 dark:bg-navy-700">
                                <div
                                  class="flex h-full items-center justify-center rounded-full bg-brand-500 dark:bg-brand-400"
                                  style="width: 30%;"
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr role="row">
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <p class="text-sm font-bold text-navy-700 dark:text-white">
                                Marketplace
                              </p>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <div class="flex items-center gap-2">
                                <div class="rounded-full text-xl">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    class="text-orange-500"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                                  </svg>
                                </div>
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Error
                                </p>
                              </div>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <p class="text-sm font-bold text-navy-700 dark:text-white">
                                20.May.2021
                              </p>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <div class="h-2 w-[108px] rounded-full bg-gray-200 dark:bg-navy-700">
                                <div
                                  class="flex h-full items-center justify-center rounded-full bg-brand-500 dark:bg-brand-400"
                                  style="width: 30%;"
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr role="row">
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <p class="text-sm font-bold text-navy-700 dark:text-white">
                                Marketplace
                              </p>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <div class="flex items-center gap-2">
                                <div class="rounded-full text-xl">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    class="text-green-500"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                  </svg>
                                </div>
                                <p class="text-sm font-bold text-navy-700 dark:text-white">
                                  Approved
                                </p>
                              </div>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <p class="text-sm font-bold text-navy-700 dark:text-white">
                                12.Jul.2021
                              </p>
                            </td>
                            <td
                              class="pt-[14px] pb-[18px] sm:text-[14px]"
                              role="cell"
                            >
                              <div class="h-2 w-[108px] rounded-full bg-gray-200 dark:bg-navy-700">
                                <div
                                  class="flex h-full items-center justify-center rounded-full bg-brand-500 dark:bg-brand-400"
                                  style="width: 30%;"
                                ></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
                    <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none pb-7 p-[20px]">
                      <div class="relative flex flex-row justify-between">
                        <div class="flex items-center">
                          <div class="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="h-6 w-6 text-brand-500 dark:text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                            </svg>
                          </div>
                          <h4 class="ml-4 text-xl font-bold text-navy-700 dark:text-white">
                            Tasks
                          </h4>
                        </div>
                        <div class="relative flex">
                          <div class="flex">
                            <button class="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 16 16"
                                class="h-6 w-6"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                              </svg>
                            </button>
                          </div>
                          <div class="top-11 right-0 w-max absolute z-10 origin-top-right transition-all duration-300 ease-in-out scale-0">
                            <div class="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                              <p class="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
                                <span>
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                                  </svg>
                                </span>
                                Panel 1
                              </p>
                              <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                                <span>
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z"></path>
                                  </svg>
                                </span>
                                Panel 2
                              </p>
                              <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                                <span>
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    version="1.2"
                                    baseProfile="tiny"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g>
                                      <path d="M12.5 5.5c-.276 0-.5.224-.5.5s.224.5.5.5c1.083 0 1.964.881 1.964 1.964 0 .276.224.5.5.5s.5-.224.5-.5c0-1.634-1.33-2.964-2.964-2.964zM12.5 1c-4.136 0-7.5 3.364-7.5 7.5 0 1.486.44 2.922 1.274 4.165l.08.135c1.825 2.606 2.146 3.43 2.146 4.2v3c0 .552.448 1 1 1h2c0 .26.11.52.29.71.19.18.45.29.71.29.26 0 .52-.11.71-.29.18-.19.29-.45.29-.71h2c.552 0 1-.448 1-1v-3c0-.782.319-1.61 2.132-4.199.895-1.275 1.368-2.762 1.368-4.301 0-4.136-3.364-7.5-7.5-7.5zm2 18h-4v-1h4v1zm2.495-7.347c-1.466 2.093-2.143 3.289-2.385 4.347h-1.11v-2c0-.552-.448-1-1-1s-1 .448-1 1v2h-1.113c-.24-1.03-.898-2.2-2.306-4.22l-.077-.129c-.657-.934-1.004-2.024-1.004-3.151 0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5c0 1.126-.347 2.216-1.005 3.153z"></path>
                                    </g>
                                  </svg>
                                </span>
                                Panel 3
                              </p>
                              <p class="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                                <span>
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                  </svg>
                                </span>
                                Panel 4
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="h-full w-full">
                        <div class="mt-5 flex items-center justify-between p-2">
                          <div class="flex items-center justify-center gap-2">
                            <input
                              type="checkbox"
                              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                              name="weekly"
                            />
                            <p class="text-base font-bold text-navy-700 dark:text-white">
                              Landing Page Design
                            </p>
                          </div>
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="h-6 w-6 text-navy-700 dark:text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="mt-2 flex items-center justify-between p-2">
                          <div class="flex items-center justify-center gap-2">
                            <input
                              type="checkbox"
                              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                              name="weekly"
                            />
                            <p class="text-base font-bold text-navy-700 dark:text-white">
                              Mobile App Design
                            </p>
                          </div>
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="h-6 w-6 text-navy-700 dark:text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="mt-2 flex items-center justify-between p-2">
                          <div class="flex items-center justify-center gap-2">
                            <input
                              type="checkbox"
                              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                              name="weekly"
                            />
                            <p class="text-base font-bold text-navy-700 dark:text-white">
                              Dashboard Builder
                            </p>
                          </div>
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="h-6 w-6 text-navy-700 dark:text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="mt-2 flex items-center justify-between p-2">
                          <div class="flex items-center justify-center gap-2">
                            <input
                              type="checkbox"
                              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                              name="weekly"
                            />
                            <p class="text-base font-bold text-navy-700 dark:text-white">
                              Landing Page Design
                            </p>
                          </div>
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="h-6 w-6 text-navy-700 dark:text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="mt-2 flex items-center justify-between p-2">
                          <div class="flex items-center justify-center gap-2">
                            <input
                              type="checkbox"
                              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 undefined"
                              name="weekly"
                            />
                            <p class="text-base font-bold text-navy-700 dark:text-white">
                              Dashboard Builder
                            </p>
                          </div>
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="h-6 w-6 text-navy-700 dark:text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 rounded-[20px]">
                      <div>
                        <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none flex w-full h-full flex-col px-3 py-3">
                          <div class="react-calendar">
                            <div class="react-calendar__navigation">
                              <button
                                aria-label=""
                                class="react-calendar__navigation__arrow react-calendar__navigation__prev2-button"
                                type="button"
                              >
                                «
                              </button>
                              <button
                                aria-label=""
                                class="react-calendar__navigation__arrow react-calendar__navigation__prev-button"
                                type="button"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  class="ml-1 h-6 w-6 "
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path fill="none" d="M0 0h24v24H0z"></path>
                                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                                </svg>
                              </button>
                              <button
                                aria-label=""
                                class="react-calendar__navigation__label"
                                type="button"
                                style="flex-grow: 1;"
                              >
                                <span class="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from">
                                  October 2024
                                </span>
                              </button>
                              <button
                                aria-label=""
                                class="react-calendar__navigation__arrow react-calendar__navigation__next-button"
                                type="button"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  class="ml-1 h-6 w-6 "
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path fill="none" d="M0 0h24v24H0z"></path>
                                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                </svg>
                              </button>
                              <button
                                aria-label=""
                                class="react-calendar__navigation__arrow react-calendar__navigation__next2-button"
                                type="button"
                              >
                                »
                              </button>
                            </div>
                            <div class="react-calendar__viewContainer">
                              <div class="react-calendar__month-view ">
                                <div style="display: flex; align-items: flex-end;">
                                  <div style="flex-grow: 1; width: 100%;">
                                    <div
                                      class="react-calendar__month-view__weekdays"
                                      style="display: flex;"
                                    >
                                      <div
                                        class="react-calendar__month-view__weekdays__weekday"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr
                                          aria-label="Monday"
                                          title="Monday"
                                        >
                                          Mon
                                        </abbr>
                                      </div>
                                      <div
                                        class="react-calendar__month-view__weekdays__weekday"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr
                                          aria-label="Tuesday"
                                          title="Tuesday"
                                        >
                                          Tue
                                        </abbr>
                                      </div>
                                      <div
                                        class="react-calendar__month-view__weekdays__weekday"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr
                                          aria-label="Wednesday"
                                          title="Wednesday"
                                        >
                                          Wed
                                        </abbr>
                                      </div>
                                      <div
                                        class="react-calendar__month-view__weekdays__weekday"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr
                                          aria-label="Thursday"
                                          title="Thursday"
                                        >
                                          Thu
                                        </abbr>
                                      </div>
                                      <div
                                        class="react-calendar__month-view__weekdays__weekday"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr
                                          aria-label="Friday"
                                          title="Friday"
                                        >
                                          Fri
                                        </abbr>
                                      </div>
                                      <div
                                        class="react-calendar__month-view__weekdays__weekday react-calendar__month-view__weekdays__weekday--weekend"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr
                                          aria-label="Saturday"
                                          title="Saturday"
                                        >
                                          Sat
                                        </abbr>
                                      </div>
                                      <div
                                        class="react-calendar__month-view__weekdays__weekday react-calendar__month-view__weekdays__weekday--weekend"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr
                                          aria-label="Sunday"
                                          title="Sunday"
                                        >
                                          Sun
                                        </abbr>
                                      </div>
                                    </div>
                                    <div
                                      class="react-calendar__month-view__days"
                                      style="display: flex; flex-wrap: wrap;"
                                    >
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--neighboringMonth"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="September 30, 2024">
                                          30
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 1, 2024">
                                          1
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 2, 2024">
                                          2
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 3, 2024">
                                          3
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 4, 2024">
                                          4
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 5, 2024">
                                          5
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 6, 2024">
                                          6
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 7, 2024">
                                          7
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 8, 2024">
                                          8
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 9, 2024">
                                          9
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 10, 2024">
                                          10
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 11, 2024">
                                          11
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 12, 2024">
                                          12
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 13, 2024">
                                          13
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 14, 2024">
                                          14
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 15, 2024">
                                          15
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 16, 2024">
                                          16
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 17, 2024">
                                          17
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 18, 2024">
                                          18
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 19, 2024">
                                          19
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 20, 2024">
                                          20
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 21, 2024">
                                          21
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 22, 2024">
                                          22
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 23, 2024">
                                          23
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 24, 2024">
                                          24
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 25, 2024">
                                          25
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 26, 2024">
                                          26
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 27, 2024">
                                          27
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 28, 2024">
                                          28
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__tile--now react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 29, 2024">
                                          29
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 30, 2024">
                                          30
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="October 31, 2024">
                                          31
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--neighboringMonth"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="November 1, 2024">
                                          1
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend react-calendar__month-view__days__day--neighboringMonth"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="November 2, 2024">
                                          2
                                        </abbr>
                                      </button>
                                      <button
                                        class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend react-calendar__month-view__days__day--neighboringMonth"
                                        type="button"
                                        style="flex: 0 0 14.2857%; overflow: hidden;"
                                      >
                                        <abbr aria-label="November 3, 2024">
                                          3
                                        </abbr>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
                <h5 class="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
                  <p class="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
                    ©2024 Horizon UI. All Rights Reserved.
                  </p>
                </h5>
                <div>
                  <ul class="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
                    <li>
                      <a
                        target="blank"
                        href="mailto:hello@simmmple.com"
                        class="text-base font-medium text-gray-600 hover:text-gray-600"
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        target="blank"
                        href="https://simmmple.com/licenses"
                        class="text-base font-medium text-gray-600 hover:text-gray-600"
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        target="blank"
                        href="https://simmmple.com/terms-of-service"
                        class="text-base font-medium text-gray-600 hover:text-gray-600"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a
                        target="blank"
                        href="https://blog.horizon-ui.com/"
                        class="text-base font-medium text-gray-600 hover:text-gray-600"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Author;
