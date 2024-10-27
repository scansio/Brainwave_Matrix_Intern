import Reblend, { useState } from "reblendjs";

function CommentSection() {
  const [discussion, setDiscussion] = useState("");

  return (
    <>
      <div id="comments" class="scroll-mt-20 max-w-screen-md mx-auto pt-5">
        <h3 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses (10)
        </h3>
        <form action="#" class="nc-SingleCommentForm mt-5">
          <textarea
            class="block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 "
            rows="4"
            placeholder="Add to discussion"
            required=""
            value={discussion}
            onchange={(e: any) => setDiscussion(e.target.value)}
          ></textarea>
          <div class="mt-2 space-x-3">
            <button
              class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  "
              type="submit"
            >
              Submit
            </button>
            <button
              class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  "
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div class="max-w-screen-md mx-auto">
        <ul class="nc-SingleCommentLists space-y-5">
          <div class="nc-CommentCard flex ">
            <div
              class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
              style=""
            >
              <img
                sizes="100px"
                src="/static/media/8.ce5f252ae5871de13c94.jpg"
                class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                alt="John Doe"
              />
              <span class="wil-avatar__name">J</span>
            </div>
            <div class="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
              <div class="relative flex items-center pr-6">
                <div class="absolute -right-3 -top-3">
                  <div
                    class="relative inline-block text-left"
                    data-headlessui-state=""
                  >
                    <button
                      class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
                      title="More"
                      id="headlessui-menu-button-:r26:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="h-6 w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <a
                  class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                  href="/author/the-demo-author-slug"
                >
                  Truelock Alric
                </a>
                <span class="mx-2">·</span>
                <span class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
                  May 20, 2021
                </span>
              </div>
              <span class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
                Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                justo. Morbi ut odio.
              </span>
              <div
                class="nc-CommentCardLikeReply flex items-center space-x-2 "
                data-nc-id="CommentCardLikeReply"
              >
                <button
                  class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <svg class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-neutral-900 dark:text-neutral-200">96</span>
                </button>
                <button
                  class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none "
                  title="Reply"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-[18px] w-[18px] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    ></path>
                  </svg>
                  <span class="text-xs leading-none text-neutral-900 dark:text-neutral-200">
                    Reply
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="nc-NcModal"></div>
          <div class="nc-NcModal"></div>
          <div class="nc-NcModal"></div>
          <div class="nc-CommentCard flex ">
            <div
              class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
              style=""
            >
              <img
                sizes="100px"
                src="data:image/jpeg;base64,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"
                class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                alt="John Doe"
              />
              <span class="wil-avatar__name">J</span>
            </div>
            <div class="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
              <div class="relative flex items-center pr-6">
                <div class="absolute -right-3 -top-3">
                  <div
                    class="relative inline-block text-left"
                    data-headlessui-state=""
                  >
                    <button
                      class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
                      title="More"
                      id="headlessui-menu-button-:r27:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="h-6 w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <a
                  class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                  href="/author/the-demo-author-slug"
                >
                  Truelock Alric
                </a>
                <span class="mx-2">·</span>
                <span class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
                  May 20, 2021
                </span>
              </div>
              <span class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
                Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                justo. Morbi ut odio.
              </span>
              <div
                class="nc-CommentCardLikeReply flex items-center space-x-2 "
                data-nc-id="CommentCardLikeReply"
              >
                <button
                  class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <svg class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-neutral-900 dark:text-neutral-200">96</span>
                </button>
                <button
                  class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none "
                  title="Reply"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-[18px] w-[18px] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    ></path>
                  </svg>
                  <span class="text-xs leading-none text-neutral-900 dark:text-neutral-200">
                    Reply
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="nc-NcModal"></div>
          <div class="nc-NcModal"></div>
          <div class="nc-NcModal"></div>
          <div class="nc-CommentCard flex ">
            <div
              class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
              style=""
            >
              <img
                sizes="100px"
                src="data:image/jpeg;base64,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"
                class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                alt="John Doe"
              />
              <span class="wil-avatar__name">J</span>
            </div>
            <div class="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
              <div class="relative flex items-center pr-6">
                <div class="absolute -right-3 -top-3">
                  <div
                    class="relative inline-block text-left"
                    data-headlessui-state=""
                  >
                    <button
                      class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
                      title="More"
                      id="headlessui-menu-button-:r28:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="h-6 w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <a
                  class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                  href="/author/the-demo-author-slug"
                >
                  Truelock Alric
                </a>
                <span class="mx-2">·</span>
                <span class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
                  May 20, 2021
                </span>
              </div>
              <span class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
                Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                justo. Morbi ut odio.
              </span>
              <div
                class="nc-CommentCardLikeReply flex items-center space-x-2 "
                data-nc-id="CommentCardLikeReply"
              >
                <button
                  class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <svg class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-neutral-900 dark:text-neutral-200">96</span>
                </button>
                <button
                  class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none "
                  title="Reply"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-[18px] w-[18px] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    ></path>
                  </svg>
                  <span class="text-xs leading-none text-neutral-900 dark:text-neutral-200">
                    Reply
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="nc-NcModal"></div>
          <div class="nc-NcModal"></div>
          <div class="nc-NcModal"></div>
          <div class="nc-CommentCard flex ">
            <div
              class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base sm:text-lg sm:h-8 sm:w-8 mt-4"
              style=""
            >
              <img
                sizes="100px"
                src="data:image/jpeg;base64,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"
                class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                alt="John Doe"
              />
              <span class="wil-avatar__name">J</span>
            </div>
            <div class="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
              <div class="relative flex items-center pr-6">
                <div class="absolute -right-3 -top-3">
                  <div
                    class="relative inline-block text-left"
                    data-headlessui-state=""
                  >
                    <button
                      class="p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
                      title="More"
                      id="headlessui-menu-button-:r29:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="h-6 w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <a
                  class="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                  href="/author/the-demo-author-slug"
                >
                  Truelock Alric
                </a>
                <span class="mx-2">·</span>
                <span class="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
                  May 20, 2021
                </span>
              </div>
              <span class="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
                Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                justo. Morbi ut odio.
              </span>
              <div
                class="nc-CommentCardLikeReply flex items-center space-x-2 "
                data-nc-id="CommentCardLikeReply"
              >
                <button
                  class="min-w-[68px] flex items-center rounded-full leading-none px-3 h-8 text-xs focus:outline-none text-neutral-700 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:text-rose-500"
                  title="Liked"
                >
                  <svg class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-neutral-900 dark:text-neutral-200">96</span>
                </button>
                <button
                  class="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none "
                  title="Reply"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-[18px] w-[18px] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    ></path>
                  </svg>
                  <span class="text-xs leading-none text-neutral-900 dark:text-neutral-200">
                    Reply
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="nc-NcModal"></div>
          <div class="nc-NcModal"></div>
          <div class="nc-NcModal"></div>
          <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 dark:bg-primary-700 w-full ">
            View full comments (+117 comments)
          </button>
        </ul>
        <div></div>
      </div>
      <div class="sticky mt-8 bottom-8 z-40 justify-center">
        <div class="bg-white dark:bg-neutral-800 shadow-lg rounded-full ring-1 ring-offset-1 ring-neutral-900/5 p-1.5 flex items-center justify-center space-x-2 text-xs">
          <button
            class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-9 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
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
            <span class="ml-1 text-neutral-900 dark:text-neutral-200">34</span>
          </button>
          <div class="border-l h-4 border-neutral-200 dark:border-neutral-700"></div>
          <a
            href="#comments"
            class="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500  flex px-3 h-9 text-xs "
            title="Comments"
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
            <span class="ml-1 text-neutral-900 dark:text-neutral-200">110</span>
          </a>
          <div class="border-l h-4 border-neutral-200 dark:border-neutral-700"></div>
          <button class="w-9 h-9 items-center justify-center bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 rounded-full flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            class="w-9 h-9 items-center justify-center hidden"
            title="Go to top"
          >
            258%
          </button>
        </div>
      </div>
    </>
  );
}

export default CommentSection;
