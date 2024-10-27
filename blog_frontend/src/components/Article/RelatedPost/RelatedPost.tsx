import Reblend from "reblendjs";

function RelatedPost({ tag }: { tag: string }) {
  return (
    <div>
      <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 text-neutral-900 dark:text-neutral-50">
        <div class="max-w-2xl">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Related posts - {tag}
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
          <div class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
            <div>
              <div class="nc-PostFeaturedMedia relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1606490114832-d41056bdca34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY1fHxnYW1pbmd8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                  sizes="(max-width: 600px) 480px, 800px"
                  class="object-cover object-cover absolute inset-0 w-full h-full"
                  alt="featured"
                />
                <span class="absolute inset-0 flex items-center justify-center ">
                  <div
                    class="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform"
                    data-nc-id="PostTypeFeaturedIcon"
                  >
                    <span class="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11">
                      <svg
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </span>
                <a
                  class="block absolute inset-0 "
                  href="/single-video/this-is-single-slug0"
                ></a>
              </div>
            </div>
          </div>
          <a
            class="absolute inset-0"
            href="/single-video/this-is-single-slug0"
          ></a>
          <span class="absolute top-3 inset-x-3 z-10">
            <div
              class="nc-CategoryBadgeList flex flex-wrap space-x-2"
              data-nc-id="CategoryBadgeList"
            >
              <a
                class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                href="/archive/the-demo-archive-slug"
              >
                Industrial
              </a>
            </div>
          </span>
          <div class="p-4 flex flex-col space-y-3">
            <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
              <a
                class="relative flex items-center space-x-2"
                href="/author/the-demo-author-slug"
              >
                <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                  <img
                    sizes="100px"
                    src="data:image/jpeg;base64,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"
                    class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                    alt="Foulcher Nathanil"
                  />
                  <span class="wil-avatar__name">F</span>
                </div>
                <span class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                  Foulcher Nathanil
                </span>
              </a>
              <span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                ·
              </span>
              <span class="text-neutral-500 dark:text-neutral-400 font-normal">
                May 20, 2021
              </span>
            </div>
            <h3 class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
              <span
                class="line-clamp-2"
                title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
              >
                To cool datacenter servers, Microsoft turns to boiling liquid
                Donec quis
              </span>
            </h3>
            <div class="flex items-end justify-between mt-auto">
              <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                <button
                  class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    34
                  </span>
                </button>
                <a
                  class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                  title="Comments"
                  href="/single/demo-slug#comments"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                    ></path>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    110
                  </span>
                </a>
              </div>
              <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                <button
                  class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  title="Save to reading list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    stroke="currentColor"
                    class="w-[18px] h-[18px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
          <div class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
            <div>
              <div class="nc-PostFeaturedMedia relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1587381420844-7bc5f4feec02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                  sizes="(max-width: 600px) 480px, 800px"
                  class="object-cover object-cover absolute inset-0 w-full h-full"
                  alt="featured"
                />
                <span class="absolute inset-0 flex items-center justify-center ">
                  <div
                    class="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform"
                    data-nc-id="PostTypeFeaturedIcon"
                  >
                    <span class="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11">
                      <svg
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </span>
                <a
                  class="block absolute inset-0 "
                  href="/single-video/this-is-single-slug1"
                ></a>
              </div>
            </div>
          </div>
          <a
            class="absolute inset-0"
            href="/single-video/this-is-single-slug1"
          ></a>
          <span class="absolute top-3 inset-x-3 z-10">
            <div
              class="nc-CategoryBadgeList flex flex-wrap space-x-2"
              data-nc-id="CategoryBadgeList"
            >
              <a
                class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                href="/archive/the-demo-archive-slug"
              >
                Electronics
              </a>
            </div>
          </span>
          <div class="p-4 flex flex-col space-y-3">
            <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
              <a
                class="relative flex items-center space-x-2"
                href="/author/the-demo-author-slug"
              >
                <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                  <img
                    sizes="100px"
                    src="data:image/jpeg;base64,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"
                    class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                    alt="Pillifant Vern"
                  />
                  <span class="wil-avatar__name">P</span>
                </div>
                <span class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                  Pillifant Vern
                </span>
              </a>
              <span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                ·
              </span>
              <span class="text-neutral-500 dark:text-neutral-400 font-normal">
                May 20, 2021
              </span>
            </div>
            <h3 class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
              <span
                class="line-clamp-2"
                title="Xbox connects people to help through Crisis Text Line and Aenean lectus"
              >
                Xbox connects people to help through Crisis Text Line and Aenean
                lectus
              </span>
            </h3>
            <div class="flex items-end justify-between mt-auto">
              <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                <button
                  class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    34
                  </span>
                </button>
                <a
                  class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                  title="Comments"
                  href="/single/demo-slug#comments"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                    ></path>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    110
                  </span>
                </a>
              </div>
              <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                <button
                  class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  title="Save to reading list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    stroke="currentColor"
                    class="w-[18px] h-[18px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
          <div class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
            <div>
              <div class="nc-PostFeaturedMedia relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1576500714954-8a687d0ea1ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                  sizes="(max-width: 600px) 480px, 800px"
                  class="object-cover object-cover absolute inset-0 w-full h-full"
                  alt="featured"
                />
                <div class="nc-ButtonPlayMusicPlayer select-none absolute inset-0 bg-neutral-900/30 flex items-center justify-center">
                  <div
                    class="nc-PostTypeFeaturedIcon z-20 hover:scale-105 transform cursor-pointer transition-transform"
                    data-nc-id="PostTypeFeaturedIcon"
                  >
                    <span class="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11">
                      <svg
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.8398 16.8V12"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9.40039 9.5199L20.8404 6.3999"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <a
                  class="block absolute inset-0 "
                  href="/single-audio/this-is-single-slug2"
                ></a>
              </div>
            </div>
          </div>
          <a
            class="absolute inset-0"
            href="/single-audio/this-is-single-slug2"
          ></a>
          <span class="absolute top-3 inset-x-3 z-10">
            <div
              class="nc-CategoryBadgeList flex flex-wrap space-x-2"
              data-nc-id="CategoryBadgeList"
            >
              <a
                class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100 hover:bg-blue-800"
                href="/archive/the-demo-archive-slug"
              >
                Industrial
              </a>
            </div>
          </span>
          <div class="p-4 flex flex-col space-y-3">
            <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
              <a
                class="relative flex items-center space-x-2"
                href="/author/the-demo-author-slug"
              >
                <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                  <img
                    sizes="100px"
                    src="data:image/jpeg;base64,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"
                    class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                    alt="Fones Mimi"
                  />
                  <span class="wil-avatar__name">F</span>
                </div>
                <span class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                  Fones Mimi
                </span>
              </a>
              <span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                ·
              </span>
              <span class="text-neutral-500 dark:text-neutral-400 font-normal">
                May 20, 2021
              </span>
            </div>
            <h3 class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
              <span
                class="line-clamp-2"
                title="Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus"
              >
                Unusual ‘machine in the woods’ taps clean energy deep
                underground for new Microsoft campus
              </span>
            </h3>
            <div class="flex items-end justify-between mt-auto">
              <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                <button
                  class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    34
                  </span>
                </button>
                <a
                  class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                  title="Comments"
                  href="/single/demo-slug#comments"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                    ></path>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    110
                  </span>
                </a>
              </div>
              <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                <button
                  class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  title="Save to reading list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    stroke="currentColor"
                    class="w-[18px] h-[18px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
          <div class="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-4 aspect-h-3">
            <div>
              <div class="nc-PostFeaturedMedia relative w-full h-full">
                <div class=" group group/cardGallerySlider absolute inset-0 z-10">
                  <div class="w-full overflow-hidden absolute inset-0">
                    <a
                      class="flex items-center justify-center absolute inset-0"
                      href="/single-gallery/this-is-single-slug3"
                    >
                      <div
                        class="absolute inset-0"
                        style="opacity: 1; transform: none;"
                      >
                        <img
                          src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                          sizes="(max-width: 1025px) 100vw, 300px"
                          class="object-cover  object-cover absolute inset-0 w-full h-full"
                          alt="listing card gallery"
                        />
                      </div>
                    </a>
                  </div>
                  <div class="opacity-0 group-hover/cardGallerySlider:opacity-100 transition-opacity ">
                    <button
                      class="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none z-10"
                      style="transform: translate3d(0px, 0px, 0px);"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div class="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-neutral-900 opacity-50 rounded-b-lg"></div>
                  <div class="flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5">
                    <button class="w-1.5 h-1.5 rounded-full bg-white"></button>
                    <button class="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
                    <button class="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
                    <button class="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="absolute inset-0"
            href="/single-gallery/this-is-single-slug3"
          ></a>
          <span class="absolute top-3 inset-x-3 z-10">
            <div
              class="nc-CategoryBadgeList flex flex-wrap space-x-2"
              data-nc-id="CategoryBadgeList"
            >
              <a
                class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                href="/archive/the-demo-archive-slug"
              >
                Jewelry
              </a>
            </div>
          </span>
          <div class="p-4 flex flex-col space-y-3">
            <div class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
              <a
                class="relative flex items-center space-x-2"
                href="/author/the-demo-author-slug"
              >
                <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                  <img
                    sizes="100px"
                    src="data:image/jpeg;base64,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"
                    class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                    alt="Birrell Chariot"
                  />
                  <span class="wil-avatar__name">B</span>
                </div>
                <span class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                  Birrell Chariot
                </span>
              </a>
              <span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                ·
              </span>
              <span class="text-neutral-500 dark:text-neutral-400 font-normal">
                May 20, 2021
              </span>
            </div>
            <h3 class="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
              <span
                class="line-clamp-2"
                title="WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "
              >
                WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls
                to pursue their hoop dreams{" "}
              </span>
            </h3>
            <div class="flex items-end justify-between mt-auto">
              <div class="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                <button
                  class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    34
                  </span>
                </button>
                <a
                  class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
                  title="Comments"
                  href="/single/demo-slug#comments"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                    ></path>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    110
                  </span>
                </a>
              </div>
              <div class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
                <button
                  class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  title="Save to reading list"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    stroke="currentColor"
                    class="w-[18px] h-[18px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedPost;
