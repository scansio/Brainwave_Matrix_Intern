import Reblend from "reblendjs";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div
        data-turbo-body=""
        class="logged-out env-production page-responsive header-overlay home-campaign"
        style={{ wordWrap: "break-word", color: "white" }}
      >
        <div class="position-relative js-header-wrapper ">
          <a
            href="#start-of-content"
            data-skip-target-assigned="false"
            class="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content"
          >
            Skip to content
          </a>

          <span
            data-view-component="true"
            class="progress-pjax-loader Progress position-fixed width-full"
          >
            <span
              style="width: 0%;"
              data-view-component="true"
              class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"
            ></span>
          </span>

          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/primer-react-65b92279806c.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/react-core-0819e0281150.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/react-lib-7b7b5264f6c1.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/octicons-react-45c3a19dd792.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-41da55-1851acd376ff.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js-4896ddd4b7bb.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hotkey_dist_index_js-no-d67c7f-bd7d077cdcb1.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/ui_packages_ui-commands_ui-commands_ts-d25fac54a6bc.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/keyboard-shortcuts-dialog-a549d5821edb.js"
          ></script>
          <link
            crossorigin="anonymous"
            media="all"
            rel="stylesheet"
            href="https://github.githubassets.com/assets/primer-react.ed72bee494c072c5b54c.module.css"
          />

          <react-partial
            partial-name="keyboard-shortcuts-dialog"
            data-ssr="false"
            data-attempted-ssr="false"
            data-catalyst=""
            class="loaded"
          >
            <script
              type="application/json"
              data-target="react-partial.embeddedData"
            >{`{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}`}</script>
            <div data-target="react-partial.reactRoot">
              <script
                type="application/json"
                id="__PRIMER_DATA_:r0:__"
              >{`{"resolvedServerColorMode":"day"}`}</script>
            </div>
          </react-partial>

          <global-banner
            role="alert"
            aria-label="Announcement"
            class="global-banner d-block position-relative lh-condensed fgColor-onEmphasis px-4 px-md-5 px-lg-8 text-center text-medium"
            id="universe24_11_global"
            data-analytics-visible='{"category":"global_banner","action":"visible","label":"text: universe24_11_global"}'
            data-color-mode="dark"
            data-light-theme="light"
            data-dark-theme="dark"
            enabled="enabled"
            data-catalyst=""
          >
            <span class="global-banner--title">
              Explore the future of proactive, AI-powered security at GitHub
              Universe on Oct. 29-30.
            </span>

            <a
              data-analytics-event='{"category":"global_banner","action":"universe24_11_global","label":"ref_cta:Explore the future of proactive, AI-powered security at GitHub Universe on Oct. 29-30.;"}'
              href="https://githubuniverse.com/?utm_source=github&amp;utm_medium=banner&amp;utm_campaign=24bannerheader11li"
              class="global-banner--link Link--inTextBlock Link--outlineOffset"
              style="color: currentColor"
            >
              Get your ticket today!
            </a>
            <div class="global-banner--close position-absolute height-full d-flex flex-items-center top-0 right-2 right-md-3 right-lg-7">
              <button
                data-analytics-event='{"category":"global_banner","action":"Dismiss global_banner_universe24_11_global","label":null}'
                data-action="click:global-banner#close"
                aria-label="Close"
                type="button"
                data-view-component="true"
                class="close-button color-fg-on-emphasis"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-x"
                >
                  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
              </button>
            </div>
          </global-banner>

          <script
            type="text/javascript"
            src="https://github.githubassets.com/assets/global-banner-disable-f988792be49f.js"
            crossorigin=""
          ></script>

          <active-global-banners
            data-banners="universe24_11_global"
            data-catalyst=""
          ></active-global-banners>

          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-94fd67-9a621ecbf672.js"
          ></script>
          <script
            crossorigin="anonymous"
            defer="defer"
            type="application/javascript"
            src="https://github.githubassets.com/assets/sessions-b61003c45c5a.js"
          ></script>
          <header
            class="HeaderMktg header-logged-out js-details-container js-header Details position-relative f4 py-3"
            role="banner"
            data-color-mode="light"
            data-light-theme="light"
            data-dark-theme="dark"
          >
            <h2 class="sr-only">Navigation Menu</h2>

            <button
              type="button"
              class="HeaderMktg-backdrop d-lg-none border-0 position-fixed top-0 left-0 width-full height-full js-details-target"
              aria-label="Toggle navigation"
            >
              <span class="d-none">Toggle navigation</span>
            </button>

            <div class="d-flex flex-column flex-lg-row flex-items-center px-3 px-md-4 px-lg-5 height-full position-relative z-1">
              <div class="d-flex flex-justify-between flex-items-center width-full width-lg-auto">
                <div class="flex-1">
                  <button
                    aria-label="Toggle navigation"
                    aria-expanded="false"
                    type="button"
                    data-view-component="true"
                    class="js-details-target js-nav-padding-recalculate js-header-menu-toggle Button--link Button--medium Button d-lg-none color-fg-inherit p-1"
                  >
                    {" "}
                    <span class="Button-content">
                      <span class="Button-label">
                        <div class="HeaderMenu-toggle-bar rounded my-1"></div>
                        <div class="HeaderMenu-toggle-bar rounded my-1"></div>
                        <div class="HeaderMenu-toggle-bar rounded my-1"></div>
                      </span>
                    </span>
                  </button>
                </div>

                <a
                  class="mr-lg-3 color-fg-inherit flex-order-2 js-prevent-focus-on-mobile-nav"
                  href="/"
                  aria-label="Homepage"
                  data-analytics-event='{"category":"Marketing nav","action":"click to go to homepage","label":"ref_page:Marketing;ref_cta:Logomark;ref_loc:Header"}'
                >
                  <svg
                    height="32"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    version="1.1"
                    width="32"
                    data-view-component="true"
                    class="octicon octicon-mark-github"
                  >
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                </a>

                <div class="flex-1 flex-order-2 text-right">
                  <a
                    href="/login"
                    class="HeaderMenu-link HeaderMenu-button d-inline-flex d-lg-none flex-order-1 f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit js-prevent-focus-on-mobile-nav"
                    data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="1ac0bd316eb4ecff0fd1f338bc397cea8b5025ce78fffb7ade6ffdd600360286"
                    data-analytics-event='{"category":"Marketing nav","action":"click to Sign in","label":"ref_page:Marketing;ref_cta:Sign in;ref_loc:Header"}'
                  >
                    Sign in
                  </a>
                </div>
              </div>

              <div class="HeaderMenu js-header-menu height-fit position-lg-relative d-lg-flex flex-column flex-auto top-0">
                <div class="HeaderMenu-wrapper d-flex flex-column flex-self-start flex-lg-row flex-auto rounded rounded-lg-0">
                  <nav class="HeaderMenu-nav" aria-label="Global">
                    <ul class="d-lg-flex list-style-none">
                      <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                        <button
                          type="button"
                          class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                          aria-expanded="false"
                        >
                          Product
                          <svg
                            opacity="0.5"
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                          >
                            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                          </svg>
                        </button>
                        <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 pt-2 pt-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 pb-2 pb-lg-4 d-lg-flex flex-wrap dropdown-menu-wide">
                          <div class="HeaderMenu-column px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
                            <div class="border-bottom pb-3 pb-lg-0 border-lg-bottom-0">
                              <ul class="list-style-none f5">
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"github_copilot","context":"product","tag":"link","label":"github_copilot_link_product_navbar"}'
                                    href="https://github.com/features/copilot"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-copilot color-fg-subtle mr-3"
                                    >
                                      <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path>
                                      <path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        GitHub Copilot
                                      </div>
                                      Write better code with AI
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"security","context":"product","tag":"link","label":"security_link_product_navbar"}'
                                    href="https://github.com/features/security"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-shield-check color-fg-subtle mr-3"
                                    >
                                      <path d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"></path>
                                      <path d="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Security
                                      </div>
                                      Find and fix vulnerabilities
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"actions","context":"product","tag":"link","label":"actions_link_product_navbar"}'
                                    href="https://github.com/features/actions"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-workflow color-fg-subtle mr-3"
                                    >
                                      <path d="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Actions
                                      </div>
                                      Automate any workflow
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"codespaces","context":"product","tag":"link","label":"codespaces_link_product_navbar"}'
                                    href="https://github.com/features/codespaces"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-codespaces color-fg-subtle mr-3"
                                    >
                                      <path d="M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 13H5.25a1.75 1.75 0 0 1-1.75-1.75Zm-2 12c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75ZM5.25 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Zm-2 12a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25Z"></path>
                                      <path d="M10 17.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Codespaces
                                      </div>
                                      Instant dev environments
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"issues","context":"product","tag":"link","label":"issues_link_product_navbar"}'
                                    href="https://github.com/features/issues"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-issue-opened color-fg-subtle mr-3"
                                    >
                                      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Issues
                                      </div>
                                      Plan and track work
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"code_review","context":"product","tag":"link","label":"code_review_link_product_navbar"}'
                                    href="https://github.com/features/code-review"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-code-review color-fg-subtle mr-3"
                                    >
                                      <path d="M10.3 6.74a.75.75 0 0 1-.04 1.06l-2.908 2.7 2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z"></path>
                                      <path d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.749.749 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Code Review
                                      </div>
                                      Manage code changes
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"discussions","context":"product","tag":"link","label":"discussions_link_product_navbar"}'
                                    href="https://github.com/features/discussions"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-comment-discussion color-fg-subtle mr-3"
                                    >
                                      <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
                                      <path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Discussions
                                      </div>
                                      Collaborate outside of code
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description"
                                    data-analytics-event='{"location":"navbar","action":"code_search","context":"product","tag":"link","label":"code_search_link_product_navbar"}'
                                    href="https://github.com/features/code-search"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-code-square color-fg-subtle mr-3"
                                    >
                                      <path d="M10.3 8.24a.75.75 0 0 1-.04 1.06L7.352 12l2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z"></path>
                                      <path d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Code Search
                                      </div>
                                      Find more, search less
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="HeaderMenu-column px-lg-4">
                            <div class="border-bottom pb-3 pb-lg-0 border-lg-bottom-0 border-bottom-0">
                              <span
                                class="d-block h4 color-fg-default my-1"
                                id="product-explore-heading"
                              >
                                Explore
                              </span>
                              <ul
                                class="list-style-none f5"
                                aria-labelledby="product-explore-heading"
                              >
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"all_features","context":"product","tag":"link","label":"all_features_link_product_navbar"}'
                                    href="https://github.com/features"
                                  >
                                    All features
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external"
                                    target="_blank"
                                    data-analytics-event='{"location":"navbar","action":"documentation","context":"product","tag":"link","label":"documentation_link_product_navbar"}'
                                    href="https://docs.github.com"
                                  >
                                    Documentation
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                    >
                                      <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                                    </svg>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external"
                                    target="_blank"
                                    data-analytics-event='{"location":"navbar","action":"github_skills","context":"product","tag":"link","label":"github_skills_link_product_navbar"}'
                                    href="https://skills.github.com"
                                  >
                                    GitHub Skills
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                    >
                                      <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                                    </svg>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external"
                                    target="_blank"
                                    data-analytics-event='{"location":"navbar","action":"blog","context":"product","tag":"link","label":"blog_link_product_navbar"}'
                                    href="https://github.blog"
                                  >
                                    Blog
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                    >
                                      <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                        <button
                          type="button"
                          class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                          aria-expanded="false"
                        >
                          Solutions
                          <svg
                            opacity="0.5"
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                          >
                            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                          </svg>
                        </button>
                        <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 pt-2 pt-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex flex-wrap dropdown-menu-wide">
                          <div class="HeaderMenu-column px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
                            <div class="border-bottom pb-3 pb-lg-0 border-lg-bottom-0 pb-lg-3 mb-3 mb-lg-0">
                              <span
                                class="d-block h4 color-fg-default my-1"
                                id="solutions-by-company-size-heading"
                              >
                                By company size
                              </span>
                              <ul
                                class="list-style-none f5"
                                aria-labelledby="solutions-by-company-size-heading"
                              >
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"enterprises","context":"solutions","tag":"link","label":"enterprises_link_solutions_navbar"}'
                                    href="https://github.com/enterprise"
                                  >
                                    Enterprises
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"small_and_medium_teams","context":"solutions","tag":"link","label":"small_and_medium_teams_link_solutions_navbar"}'
                                    href="https://github.com/team"
                                  >
                                    Small and medium teams
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"startups","context":"solutions","tag":"link","label":"startups_link_solutions_navbar"}'
                                    href="https://github.com/enterprise/startups"
                                  >
                                    Startups
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="border-bottom pb-3 pb-lg-0 border-lg-bottom-0">
                              <span
                                class="d-block h4 color-fg-default my-1"
                                id="solutions-by-use-case-heading"
                              >
                                By use case
                              </span>
                              <ul
                                class="list-style-none f5"
                                aria-labelledby="solutions-by-use-case-heading"
                              >
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"devsecops","context":"solutions","tag":"link","label":"devsecops_link_solutions_navbar"}'
                                    href="/solutions/use-case/devsecops"
                                  >
                                    DevSecOps
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"devops","context":"solutions","tag":"link","label":"devops_link_solutions_navbar"}'
                                    href="/solutions/use-case/devops"
                                  >
                                    DevOps
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"ci_cd","context":"solutions","tag":"link","label":"ci_cd_link_solutions_navbar"}'
                                    href="/solutions/use-case/ci-cd"
                                  >
                                    CI/CD
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"view_all_use_cases","context":"solutions","tag":"link","label":"view_all_use_cases_link_solutions_navbar"}'
                                    href="/solutions/use-case"
                                  >
                                    View all use cases
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="HeaderMenu-column px-lg-4">
                            <div class="border-bottom pb-3 pb-lg-0 border-lg-bottom-0">
                              <span
                                class="d-block h4 color-fg-default my-1"
                                id="solutions-by-industry-heading"
                              >
                                By industry
                              </span>
                              <ul
                                class="list-style-none f5"
                                aria-labelledby="solutions-by-industry-heading"
                              >
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"healthcare","context":"solutions","tag":"link","label":"healthcare_link_solutions_navbar"}'
                                    href="/solutions/industry/healthcare"
                                  >
                                    Healthcare
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"financial_services","context":"solutions","tag":"link","label":"financial_services_link_solutions_navbar"}'
                                    href="/solutions/industry/financial-services"
                                  >
                                    Financial services
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"manufacturing","context":"solutions","tag":"link","label":"manufacturing_link_solutions_navbar"}'
                                    href="/solutions/industry/manufacturing"
                                  >
                                    Manufacturing
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"government","context":"solutions","tag":"link","label":"government_link_solutions_navbar"}'
                                    href="/solutions/industry/government"
                                  >
                                    Government
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"view_all_industries","context":"solutions","tag":"link","label":"view_all_industries_link_solutions_navbar"}'
                                    href="/solutions/industry"
                                  >
                                    View all industries
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="HeaderMenu-trailing-link rounded-bottom-2 flex-shrink-0 mt-lg-4 px-lg-4 py-4 py-lg-3 f5 text-semibold">
                            <a href="/solutions">
                              View all solutions
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-chevron-right HeaderMenu-trailing-link-icon"
                              >
                                <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path>
                              </svg>
                            </a>{" "}
                          </div>
                        </div>
                      </li>

                      <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                        <button
                          type="button"
                          class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                          aria-expanded="false"
                        >
                          Resources
                          <svg
                            opacity="0.5"
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                          >
                            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                          </svg>
                        </button>
                        <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 pt-2 pt-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 pb-2 pb-lg-4 d-lg-flex flex-wrap dropdown-menu-wide">
                          <div class="HeaderMenu-column px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
                            <div class="border-bottom pb-3 pb-lg-0 border-lg-bottom-0">
                              <span
                                class="d-block h4 color-fg-default my-1"
                                id="resources-topics-heading"
                              >
                                Topics
                              </span>
                              <ul
                                class="list-style-none f5"
                                aria-labelledby="resources-topics-heading"
                              >
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"ai","context":"resources","tag":"link","label":"ai_link_resources_navbar"}'
                                    href="/resources/articles/ai"
                                  >
                                    AI
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"devops","context":"resources","tag":"link","label":"devops_link_resources_navbar"}'
                                    href="/resources/articles/devops"
                                  >
                                    DevOps
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"security","context":"resources","tag":"link","label":"security_link_resources_navbar"}'
                                    href="/resources/articles/security"
                                  >
                                    Security
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"software_development","context":"resources","tag":"link","label":"software_development_link_resources_navbar"}'
                                    href="/resources/articles/software-development"
                                  >
                                    Software Development
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"view_all","context":"resources","tag":"link","label":"view_all_link_resources_navbar"}'
                                    href="/resources/articles"
                                  >
                                    View all
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="HeaderMenu-column px-lg-4">
                            <div class="border-bottom pb-3 pb-lg-0 border-lg-bottom-0 border-bottom-0">
                              <span
                                class="d-block h4 color-fg-default my-1"
                                id="resources-explore-heading"
                              >
                                Explore
                              </span>
                              <ul
                                class="list-style-none f5"
                                aria-labelledby="resources-explore-heading"
                              >
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external"
                                    target="_blank"
                                    data-analytics-event='{"location":"navbar","action":"learning_pathways","context":"resources","tag":"link","label":"learning_pathways_link_resources_navbar"}'
                                    href="https://resources.github.com/learn/pathways"
                                  >
                                    Learning Pathways
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                    >
                                      <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                                    </svg>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external"
                                    target="_blank"
                                    data-analytics-event='{"location":"navbar","action":"white_papers_ebooks_webinars","context":"resources","tag":"link","label":"white_papers_ebooks_webinars_link_resources_navbar"}'
                                    href="https://resources.github.com"
                                  >
                                    White papers, Ebooks, Webinars
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                    >
                                      <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                                    </svg>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"customer_stories","context":"resources","tag":"link","label":"customer_stories_link_resources_navbar"}'
                                    href="https://github.com/customer-stories"
                                  >
                                    Customer Stories
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary Link--external"
                                    target="_blank"
                                    data-analytics-event='{"location":"navbar","action":"partners","context":"resources","tag":"link","label":"partners_link_resources_navbar"}'
                                    href="https://partner.github.com"
                                  >
                                    Partners
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                    >
                                      <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                        <button
                          type="button"
                          class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                          aria-expanded="false"
                        >
                          Open Source
                          <svg
                            opacity="0.5"
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                          >
                            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                          </svg>
                        </button>
                        <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 pt-2 pt-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 pb-2 pb-lg-4 px-lg-4">
                          <div class="HeaderMenu-column">
                            <div class="border-bottom pb-3 pb-lg-0 pb-lg-3 mb-3 mb-lg-0 mb-lg-3">
                              <ul class="list-style-none f5">
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description"
                                    data-analytics-event='{"location":"navbar","action":"github_sponsors","context":"open_source","tag":"link","label":"github_sponsors_link_open_source_navbar"}'
                                    href="/sponsors"
                                  >
                                    <div>
                                      <div class="color-fg-default h4">
                                        GitHub Sponsors
                                      </div>
                                      Fund open source developers
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="border-bottom pb-3 pb-lg-0 pb-lg-3 mb-3 mb-lg-0 mb-lg-3">
                              <ul class="list-style-none f5">
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description"
                                    data-analytics-event='{"location":"navbar","action":"the_readme_project","context":"open_source","tag":"link","label":"the_readme_project_link_open_source_navbar"}'
                                    href="https://github.com/readme"
                                  >
                                    <div>
                                      <div class="color-fg-default h4">
                                        The ReadME Project
                                      </div>
                                      GitHub community articles
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="border-bottom pb-3 pb-lg-0 border-bottom-0">
                              <span
                                class="d-block h4 color-fg-default my-1"
                                id="open-source-repositories-heading"
                              >
                                Repositories
                              </span>
                              <ul
                                class="list-style-none f5"
                                aria-labelledby="open-source-repositories-heading"
                              >
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"topics","context":"open_source","tag":"link","label":"topics_link_open_source_navbar"}'
                                    href="https://github.com/topics"
                                  >
                                    Topics
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"trending","context":"open_source","tag":"link","label":"trending_link_open_source_navbar"}'
                                    href="https://github.com/trending"
                                  >
                                    Trending
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary"
                                    data-analytics-event='{"location":"navbar","action":"collections","context":"open_source","tag":"link","label":"collections_link_open_source_navbar"}'
                                    href="https://github.com/collections"
                                  >
                                    Collections
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                        <button
                          type="button"
                          class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                          aria-expanded="false"
                        >
                          Enterprise
                          <svg
                            opacity="0.5"
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                          >
                            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                          </svg>
                        </button>
                        <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 pt-2 pt-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 pb-2 pb-lg-4 px-lg-4">
                          <div class="HeaderMenu-column">
                            <div class="border-bottom pb-3 pb-lg-0 pb-lg-3 mb-3 mb-lg-0 mb-lg-3">
                              <ul class="list-style-none f5">
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description"
                                    data-analytics-event='{"location":"navbar","action":"enterprise_platform","context":"enterprise","tag":"link","label":"enterprise_platform_link_enterprise_navbar"}'
                                    href="/enterprise"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-stack color-fg-subtle mr-3"
                                    >
                                      <path d="M11.063 1.456a1.749 1.749 0 0 1 1.874 0l8.383 5.316a1.751 1.751 0 0 1 0 2.956l-8.383 5.316a1.749 1.749 0 0 1-1.874 0L2.68 9.728a1.751 1.751 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z"></path>
                                      <path d="M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path>
                                      <path d="M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Enterprise platform
                                      </div>
                                      AI-powered developer platform
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="border-bottom pb-3 pb-lg-0 border-bottom-0">
                              <span
                                class="d-block h4 color-fg-default my-1"
                                id="enterprise-available-add-ons-heading"
                              >
                                Available add-ons
                              </span>
                              <ul
                                class="list-style-none f5"
                                aria-labelledby="enterprise-available-add-ons-heading"
                              >
                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"advanced_security","context":"enterprise","tag":"link","label":"advanced_security_link_enterprise_navbar"}'
                                    href="https://github.com/enterprise/advanced-security"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-shield-check color-fg-subtle mr-3"
                                    >
                                      <path d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"></path>
                                      <path d="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Advanced Security
                                      </div>
                                      Enterprise-grade security features
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description pb-lg-3"
                                    data-analytics-event='{"location":"navbar","action":"github_copilot","context":"enterprise","tag":"link","label":"github_copilot_link_enterprise_navbar"}'
                                    href="/features/copilot#enterprise"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-copilot color-fg-subtle mr-3"
                                    >
                                      <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path>
                                      <path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        GitHub Copilot
                                      </div>
                                      Enterprise-grade AI features
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="HeaderMenu-dropdown-link d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center Link--has-description"
                                    data-analytics-event='{"location":"navbar","action":"premium_support","context":"enterprise","tag":"link","label":"premium_support_link_enterprise_navbar"}'
                                    href="/premium-support"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                      width="24"
                                      data-view-component="true"
                                      class="octicon octicon-comment-discussion color-fg-subtle mr-3"
                                    >
                                      <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
                                      <path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"></path>
                                    </svg>
                                    <div>
                                      <div class="color-fg-default h4">
                                        Premium Support
                                      </div>
                                      Enterprise-grade 24/7 support
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                        <a
                          class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"
                          data-analytics-event='{"location":"navbar","action":"pricing","context":"global","tag":"link","label":"pricing_link_global_navbar"}'
                          href="https://github.com/pricing"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <div class="d-flex flex-column flex-lg-row width-full flex-justify-end flex-lg-items-center text-center mt-3 mt-lg-0 text-lg-left ml-lg-3">
                    <qbsearch-input
                      class="search-input"
                      data-scope=""
                      data-custom-scopes-path="/search/custom_scopes"
                      data-delete-custom-scopes-csrf="5C92SIMxnaqPxWOf13Bn3yU7H2OJAxJmnROadbWxh-r_EWlYYQ8zTRsW7779DucdO3bG2enoL7cXqNUX-YU0CA"
                      data-max-custom-scopes="10"
                      data-header-redesign-enabled="false"
                      data-initial-value=""
                      data-blackbird-suggestions-path="/search/suggestions"
                      data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
                      data-current-repository=""
                      data-current-org=""
                      data-current-owner=""
                      data-logged-in="false"
                      data-copilot-chat-enabled="false"
                      data-nl-search-enabled="false"
                      data-retain-scroll-position="true"
                      data-catalyst=""
                    >
                      <div
                        class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center mr-4 rounded"
                        data-action="click:qbsearch-input#searchInputContainerClicked"
                      >
                        <button
                          type="button"
                          class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"
                          data-target="qbsearch-input.inputButton"
                          aria-label="Search or jump to…"
                          aria-haspopup="dialog"
                          placeholder="Search or jump to..."
                          data-hotkey="s,/"
                          autocapitalize="off"
                          data-analytics-event='{"location":"navbar","action":"searchbar","context":"global","tag":"input","label":"searchbar_input_global_navbar"}'
                          data-action="click:qbsearch-input#handleExpand"
                        >
                          <div class="mr-2 color-fg-muted">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              class="octicon octicon-search"
                            >
                              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                            </svg>
                          </div>
                          <span
                            class="flex-1"
                            data-target="qbsearch-input.inputButtonText"
                          >
                            Search or jump to...
                          </span>
                          <div
                            class="d-flex"
                            data-target="qbsearch-input.hotkeyIndicator"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="20"
                              aria-hidden="true"
                              class="mr-1"
                            >
                              <path
                                fill="none"
                                stroke="#979A9C"
                                opacity=".4"
                                d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                              ></path>
                              <path
                                fill="#979A9C"
                                d="M11.8 6L8 15.1h-.9L10.8 6h1z"
                              ></path>
                            </svg>
                          </div>
                        </button>

                        <input
                          type="hidden"
                          name="type"
                          class="js-site-search-type-field"
                        />

                        <div
                          class="Overlay--hidden "
                          data-modal-dialog-overlay=""
                        >
                          <modal-dialog
                            data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose"
                            data-target="qbsearch-input.searchSuggestionsDialog"
                            role="dialog"
                            id="search-suggestions-dialog"
                            aria-modal="true"
                            aria-labelledby="search-suggestions-dialog-header"
                            data-view-component="true"
                            class="Overlay Overlay--width-large Overlay--height-auto"
                          >
                            <h1
                              id="search-suggestions-dialog-header"
                              class="sr-only"
                            >
                              Search code, repositories, users, issues, pull
                              requests...
                            </h1>
                            <div class="Overlay-body Overlay-body--paddingNone">
                              <div data-view-component="true">
                                {" "}
                                <div
                                  class="search-suggestions position-fixed width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container"
                                  style="border-radius: 12px;"
                                  data-target="qbsearch-input.queryBuilderContainer"
                                  hidden=""
                                >
                                  {/* <!-- '"` --><!-- </textarea></xmp> --> */}
                                  <form
                                    id="query-builder-test-form"
                                    action=""
                                    accept-charset="UTF-8"
                                    method="get"
                                  >
                                    <query-builder
                                      data-target="qbsearch-input.queryBuilder"
                                      id="query-builder-query-builder-test"
                                      data-filter-key=":"
                                      data-view-component="true"
                                      class="QueryBuilder search-query-builder"
                                      data-min-width="300"
                                      data-catalyst=""
                                    >
                                      <div class="FormControl FormControl--fullWidth">
                                        <label
                                          id="query-builder-test-label"
                                          for="query-builder-test"
                                          class="FormControl-label sr-only"
                                        >
                                          Search
                                        </label>
                                        <div
                                          class="QueryBuilder-StyledInput width-fit "
                                          data-target="query-builder.styledInput"
                                        >
                                          <span
                                            id="query-builder-test-leadingvisual-wrap"
                                            class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap"
                                          >
                                            <svg
                                              aria-hidden="true"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              version="1.1"
                                              width="16"
                                              data-view-component="true"
                                              class="octicon octicon-search FormControl-input-leadingVisual"
                                            >
                                              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                                            </svg>
                                          </span>
                                          <div
                                            data-target="query-builder.styledInputContainer"
                                            class="QueryBuilder-StyledInputContainer"
                                          >
                                            <div
                                              aria-hidden="true"
                                              class="QueryBuilder-StyledInputContent"
                                              data-target="query-builder.styledInputContent"
                                            ></div>
                                            <div class="QueryBuilder-InputWrapper">
                                              <div
                                                aria-hidden="true"
                                                class="QueryBuilder-Sizer"
                                                data-target="query-builder.sizer"
                                              >
                                                <span></span>
                                              </div>
                                              <input
                                                id="query-builder-test"
                                                name="query-builder-test"
                                                value=""
                                                autocomplete="off"
                                                type="text"
                                                role="combobox"
                                                spellcheck="false"
                                                aria-expanded="false"
                                                aria-describedby="validation-74bec0b5-774e-44ca-936c-3205f32c815a"
                                                data-target="query-builder.input"
                                                data-action="
            input:query-builder#inputChange
            blur:query-builder#inputBlur
            keydown:query-builder#inputKeydown
            focus:query-builder#inputFocus
          "
                                                data-view-component="true"
                                                class="FormControl-input QueryBuilder-Input FormControl-medium"
                                                aria-controls="query-builder-test-results"
                                                aria-autocomplete="list"
                                                aria-haspopup="listbox"
                                                style="width: 300px;"
                                              />
                                            </div>
                                          </div>
                                          <span
                                            class="sr-only"
                                            id="query-builder-test-clear"
                                          >
                                            Clear
                                          </span>
                                          <button
                                            role="button"
                                            id="query-builder-test-clear-button"
                                            aria-labelledby="query-builder-test-clear query-builder-test-label"
                                            data-target="query-builder.clearButton"
                                            data-action="
                  click:query-builder#clear
                  focus:query-builder#clearButtonFocus
                  blur:query-builder#clearButtonBlur
                "
                                            variant="small"
                                            hidden=""
                                            type="button"
                                            data-view-component="true"
                                            class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted"
                                          >
                                            {" "}
                                            <svg
                                              aria-hidden="true"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              version="1.1"
                                              width="16"
                                              data-view-component="true"
                                              class="octicon octicon-x-circle-fill Button-visual"
                                            >
                                              <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
                                            </svg>
                                          </button>
                                        </div>
                                        <template id="search-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-search"
                                          >
                                            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                                          </svg>
                                        </template>
                                        <template id="code-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-code"
                                          >
                                            <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                                          </svg>
                                        </template>
                                        <template id="file-code-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-file-code"
                                          >
                                            <path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                                          </svg>
                                        </template>
                                        <template id="history-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-history"
                                          >
                                            <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                                          </svg>
                                        </template>
                                        <template id="repo-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-repo"
                                          >
                                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                          </svg>
                                        </template>
                                        <template id="bookmark-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-bookmark"
                                          >
                                            <path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"></path>
                                          </svg>
                                        </template>
                                        <template id="plus-circle-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-plus-circle"
                                          >
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7.25-3.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"></path>
                                          </svg>
                                        </template>
                                        <template id="circle-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-dot-fill"
                                          >
                                            <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
                                          </svg>
                                        </template>
                                        <template id="trash-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-trash"
                                          >
                                            <path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path>
                                          </svg>
                                        </template>
                                        <template id="team-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-people"
                                          >
                                            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                                          </svg>
                                        </template>
                                        <template id="project-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-project"
                                          >
                                            <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
                                          </svg>
                                        </template>
                                        <template id="pencil-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-pencil"
                                          >
                                            <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
                                          </svg>
                                        </template>
                                        <template id="copilot-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-copilot"
                                          >
                                            <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path>
                                            <path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
                                          </svg>
                                        </template>
                                        <template id="copilot-error-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-copilot-error"
                                          >
                                            <path d="M16 11.24c0 .112-.072.274-.21.467L13 9.688V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-.198 0-.388-.009-.571-.029L6.833 5.226a4.01 4.01 0 0 0 .17-.782c.117-.935-.037-1.395-.241-1.614-.193-.206-.637-.413-1.682-.297-.683.076-1.115.231-1.395.415l-1.257-.91c.579-.564 1.413-.877 2.485-.996 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095Zm-5.083-8.707c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Zm2.511 11.074c-1.393.776-3.272 1.428-5.43 1.428-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.18-.455-.241-.963-.252-1.475L.31 4.107A.747.747 0 0 1 0 3.509V3.49a.748.748 0 0 1 .625-.73c.156-.026.306.047.435.139l14.667 10.578a.592.592 0 0 1 .227.264.752.752 0 0 1 .046.249v.022a.75.75 0 0 1-1.19.596Zm-1.367-.991L5.635 7.964a5.128 5.128 0 0 1-.889.073c-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433 1.539 0 3.089-.505 4.063-.934Z"></path>
                                          </svg>
                                        </template>
                                        <template id="workflow-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-workflow"
                                          >
                                            <path d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25Zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Z"></path>
                                          </svg>
                                        </template>
                                        <template id="book-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-book"
                                          >
                                            <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                                          </svg>
                                        </template>
                                        <template id="code-review-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-code-review"
                                          >
                                            <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 13H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25v-8.5C0 1.784.784 1 1.75 1ZM1.5 2.75v8.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm5.28 1.72a.75.75 0 0 1 0 1.06L5.31 7l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0Zm2.44 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.69 7 9.22 5.53a.75.75 0 0 1 0-1.06Z"></path>
                                          </svg>
                                        </template>
                                        <template id="codespaces-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-codespaces"
                                          >
                                            <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path>
                                            <path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
                                          </svg>
                                        </template>
                                        <template id="comment-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-comment"
                                          >
                                            <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                                          </svg>
                                        </template>
                                        <template id="comment-discussion-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-comment-discussion"
                                          >
                                            <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
                                          </svg>
                                        </template>
                                        <template id="organization-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-organization"
                                          >
                                            <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
                                          </svg>
                                        </template>
                                        <template id="rocket-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-rocket"
                                          >
                                            <path d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                                          </svg>
                                        </template>
                                        <template id="shield-check-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-shield-check"
                                          >
                                            <path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM11.28 6.28l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.97-2.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
                                          </svg>
                                        </template>
                                        <template id="heart-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-heart"
                                          >
                                            <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                          </svg>
                                        </template>
                                        <template id="server-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-server"
                                          >
                                            <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v4c0 .372-.116.717-.314 1 .198.283.314.628.314 1v4a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 12.75v-4c0-.358.109-.707.314-1a1.739 1.739 0 0 1-.314-1v-4C0 1.784.784 1 1.75 1ZM1.5 2.75v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm.25 5.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25ZM7 4.75A.75.75 0 0 1 7.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 4.75ZM7.75 10h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM3 4.75A.75.75 0 0 1 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 4.75ZM3.75 10h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
                                          </svg>
                                        </template>
                                        <template id="globe-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-globe"
                                          >
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552.714 1.192 1.436 2.874 1.58 4.948Z"></path>
                                          </svg>
                                        </template>
                                        <template id="issue-opened-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-issue-opened"
                                          >
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                                          </svg>
                                        </template>
                                        <template id="device-mobile-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-device-mobile"
                                          >
                                            <path d="M3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 .784 2.784 0 3.75 0ZM3.5 1.75v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                                          </svg>
                                        </template>
                                        <template id="package-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-package"
                                          >
                                            <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
                                          </svg>
                                        </template>
                                        <template id="credit-card-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-credit-card"
                                          >
                                            <path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path>
                                            <path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path>
                                          </svg>
                                        </template>
                                        <template id="play-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-play"
                                          >
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
                                          </svg>
                                        </template>
                                        <template id="gift-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-gift"
                                          >
                                            <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
                                          </svg>
                                        </template>
                                        <template id="code-square-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-code-square"
                                          >
                                            <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
                                          </svg>
                                        </template>
                                        <template id="device-desktop-icon">
                                          <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-device-desktop"
                                          >
                                            <path d="M14.25 1c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 14.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.752.752 0 0 1 11.25 16h-6.5a.75.75 0 0 1-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 0 1 0 10.25v-7.5C0 1.784.784 1 1.75 1ZM1.75 2.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25ZM9.018 12H6.982a5.72 5.72 0 0 1-.765 2.5h3.566a5.72 5.72 0 0 1-.765-2.5Z"></path>
                                          </svg>
                                        </template>
                                        <div class="position-relative">
                                          <ul
                                            role="listbox"
                                            class="ActionListWrap QueryBuilder-ListWrap"
                                            aria-label="Suggestions"
                                            data-action="
                      combobox-commit:query-builder#comboboxCommit
                      mousedown:query-builder#resultsMousedown
                    "
                                            data-target="query-builder.resultsList"
                                            data-persist-list="false"
                                            id="query-builder-test-results"
                                          >
                                            <li
                                              role="presentation"
                                              class="ActionList-sectionDivider"
                                            >
                                              <h3
                                                role="presentation"
                                                class="ActionList-sectionDivider-title QueryBuilder-sectionTitle p-2 text-left"
                                                aria-hidden="true"
                                              >
                                                Explore
                                              </h3>
                                              <ul role="presentation">
                                                <li
                                                  role="option"
                                                  class="ActionListItem"
                                                  data-type="url-result"
                                                  id="query-builder-test-result-enterprise"
                                                  data-value="Enterprise"
                                                  aria-label="Enterprise, jump to this explore page"
                                                >
                                                  <a
                                                    href="/enterprise?ref_loc=search"
                                                    data-action="click:query-builder#navigate"
                                                    tabindex="-1"
                                                    class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
                                                  >
                                                    <span
                                                      id="query-builder-test-result-enterprise--leading"
                                                      class="ActionListItem-visual ActionListItem-visual--leading"
                                                    >
                                                      <svg
                                                        aria-hidden="true"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        width="16"
                                                        data-view-component="true"
                                                        class="octicon octicon-organization"
                                                      >
                                                        <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
                                                      </svg>
                                                    </span>
                                                    <span class="ActionListItem-descriptionWrap">
                                                      <span class="ActionListItem-label text-normal">
                                                        {" "}
                                                        <span class="">
                                                          Enterprise
                                                        </span>{" "}
                                                      </span>
                                                    </span>

                                                    <span
                                                      aria-hidden="true"
                                                      class="ActionListItem-description QueryBuilder-ListItem-trailing"
                                                    >
                                                      Learn More
                                                    </span>
                                                  </a>
                                                </li>
                                                <li
                                                  role="option"
                                                  class="ActionListItem"
                                                  data-type="url-result"
                                                  id="query-builder-test-result-security"
                                                  data-value="Security"
                                                  aria-label="Security, jump to this explore page"
                                                >
                                                  <a
                                                    href="/security?ref_loc=search"
                                                    data-action="click:query-builder#navigate"
                                                    tabindex="-1"
                                                    class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
                                                  >
                                                    <span
                                                      id="query-builder-test-result-security--leading"
                                                      class="ActionListItem-visual ActionListItem-visual--leading"
                                                    >
                                                      <svg
                                                        aria-hidden="true"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        width="16"
                                                        data-view-component="true"
                                                        class="octicon octicon-shield-check"
                                                      >
                                                        <path d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM11.28 6.28l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.97-2.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
                                                      </svg>
                                                    </span>
                                                    <span class="ActionListItem-descriptionWrap">
                                                      <span class="ActionListItem-label text-normal">
                                                        {" "}
                                                        <span class="">
                                                          Security
                                                        </span>{" "}
                                                      </span>
                                                    </span>

                                                    <span
                                                      aria-hidden="true"
                                                      class="ActionListItem-description QueryBuilder-ListItem-trailing"
                                                    >
                                                      Learn More
                                                    </span>
                                                  </a>
                                                </li>
                                                <li
                                                  role="option"
                                                  class="ActionListItem"
                                                  data-type="url-result"
                                                  id="query-builder-test-result-copilot"
                                                  data-value="Copilot"
                                                  aria-label="Copilot, jump to this explore page"
                                                >
                                                  <a
                                                    href="/features/copilot?ref_loc=search"
                                                    data-action="click:query-builder#navigate"
                                                    tabindex="-1"
                                                    class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
                                                  >
                                                    <span
                                                      id="query-builder-test-result-copilot--leading"
                                                      class="ActionListItem-visual ActionListItem-visual--leading"
                                                    >
                                                      <svg
                                                        aria-hidden="true"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        width="16"
                                                        data-view-component="true"
                                                        class="octicon octicon-copilot"
                                                      >
                                                        <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path>
                                                        <path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
                                                      </svg>
                                                    </span>
                                                    <span class="ActionListItem-descriptionWrap">
                                                      <span class="ActionListItem-label text-normal">
                                                        {" "}
                                                        <span class="">
                                                          Copilot
                                                        </span>{" "}
                                                      </span>
                                                    </span>

                                                    <span
                                                      aria-hidden="true"
                                                      class="ActionListItem-description QueryBuilder-ListItem-trailing"
                                                    >
                                                      Learn More
                                                    </span>
                                                  </a>
                                                </li>
                                                <li
                                                  role="option"
                                                  class="ActionListItem"
                                                  data-type="url-result"
                                                  id="query-builder-test-result-pricing"
                                                  data-value="Pricing"
                                                  aria-label="Pricing, jump to this explore page"
                                                >
                                                  <a
                                                    href="/pricing?ref_loc=search"
                                                    data-action="click:query-builder#navigate"
                                                    tabindex="-1"
                                                    class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
                                                  >
                                                    <span
                                                      id="query-builder-test-result-pricing--leading"
                                                      class="ActionListItem-visual ActionListItem-visual--leading"
                                                    >
                                                      <svg
                                                        aria-hidden="true"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        width="16"
                                                        data-view-component="true"
                                                        class="octicon octicon-credit-card"
                                                      >
                                                        <path d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path>
                                                        <path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"></path>
                                                      </svg>
                                                    </span>
                                                    <span class="ActionListItem-descriptionWrap">
                                                      <span class="ActionListItem-label text-normal">
                                                        {" "}
                                                        <span class="">
                                                          Pricing
                                                        </span>{" "}
                                                      </span>
                                                    </span>

                                                    <span
                                                      aria-hidden="true"
                                                      class="ActionListItem-description QueryBuilder-ListItem-trailing"
                                                    >
                                                      Learn More
                                                    </span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          class="FormControl-inlineValidation"
                                          id="validation-74bec0b5-774e-44ca-936c-3205f32c815a"
                                          hidden="hidden"
                                        >
                                          <span class="FormControl-inlineValidation--visual">
                                            <svg
                                              aria-hidden="true"
                                              height="12"
                                              viewBox="0 0 12 12"
                                              version="1.1"
                                              width="12"
                                              data-view-component="true"
                                              class="octicon octicon-alert-fill"
                                            >
                                              <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                            </svg>
                                          </span>
                                          <span></span>
                                        </div>{" "}
                                      </div>
                                      <div
                                        data-target="query-builder.screenReaderFeedback"
                                        aria-live="polite"
                                        aria-atomic="true"
                                        class="sr-only"
                                      >
                                        4 suggestions.&nbsp;
                                      </div>
                                    </query-builder>
                                  </form>
                                  <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
                                    <a
                                      target="_blank"
                                      href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax"
                                      data-view-component="true"
                                      class="Link color-fg-accent text-normal ml-2"
                                    >
                                      Search syntax tips
                                    </a>{" "}
                                    <div class="d-flex flex-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </modal-dialog>
                        </div>
                      </div>
                      <div
                        data-action="click:qbsearch-input#retract"
                        class="dark-backdrop position-fixed"
                        hidden=""
                        data-target="qbsearch-input.darkBackdrop"
                      ></div>
                      <div class="color-fg-default">
                        <dialog-helper>
                          <dialog
                            data-target="qbsearch-input.feedbackDialog"
                            data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose"
                            id="feedback-dialog"
                            aria-modal="true"
                            aria-labelledby="feedback-dialog-title"
                            aria-describedby="feedback-dialog-description"
                            data-view-component="true"
                            class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade"
                          >
                            <div
                              data-view-component="true"
                              class="Overlay-header"
                            >
                              <div class="Overlay-headerContentWrap">
                                <div class="Overlay-titleWrap">
                                  <h1
                                    class="Overlay-title "
                                    id="feedback-dialog-title"
                                  >
                                    Provide feedback
                                  </h1>
                                </div>
                                <div class="Overlay-actionWrap">
                                  <button
                                    data-close-dialog-id="feedback-dialog"
                                    aria-label="Close"
                                    type="button"
                                    data-view-component="true"
                                    class="close-button Overlay-closeButton"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-x"
                                    >
                                      <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <scrollable-region
                              data-labelled-by="feedback-dialog-title"
                              data-catalyst=""
                              style="overflow: auto;"
                            >
                              <div
                                data-view-component="true"
                                class="Overlay-body"
                              >
                                {" "}
                                {/* <!-- '"` --><!-- </textarea></xmp> --> */}
                                <form
                                  id="code-search-feedback-form"
                                  data-turbo="false"
                                  action="/search/feedback"
                                  accept-charset="UTF-8"
                                  method="post"
                                >
                                  <input
                                    type="hidden"
                                    data-csrf="true"
                                    name="authenticity_token"
                                    value="wAOFqjdXcWiaDKh+/xfHdNK9qS0X2btNMKCLjhW/XF0OswGZ+9MC1FD9wiUNMctveC5xRFZc/uLnYYTQxT5DnA=="
                                  />
                                  <p>
                                    We read every piece of feedback, and take
                                    your input very seriously.
                                  </p>
                                  <textarea
                                    name="feedback"
                                    class="form-control width-full mb-2"
                                    style="height: 120px"
                                    id="feedback"
                                  ></textarea>
                                  <input
                                    name="include_email"
                                    id="include_email"
                                    aria-label="Include my email address so I can be contacted"
                                    class="form-control mr-2"
                                    type="checkbox"
                                  />
                                  <label
                                    for="include_email"
                                    style="font-weight: normal"
                                  >
                                    Include my email address so I can be
                                    contacted
                                  </label>
                                </form>
                              </div>
                            </scrollable-region>
                            <div
                              data-view-component="true"
                              class="Overlay-footer Overlay-footer--alignEnd"
                            >
                              {" "}
                              <button
                                data-close-dialog-id="feedback-dialog"
                                type="button"
                                data-view-component="true"
                                class="btn"
                              >
                                {" "}
                                Cancel
                              </button>
                              <button
                                form="code-search-feedback-form"
                                data-action="click:qbsearch-input#submitFeedback"
                                type="submit"
                                data-view-component="true"
                                class="btn-primary btn"
                              >
                                {" "}
                                Submit feedback
                              </button>
                            </div>
                          </dialog>
                        </dialog-helper>

                        <custom-scopes
                          data-target="qbsearch-input.customScopesManager"
                          data-catalyst=""
                        >
                          <dialog-helper>
                            <dialog
                              data-target="custom-scopes.customScopesModalDialog"
                              data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose"
                              id="custom-scopes-dialog"
                              aria-modal="true"
                              aria-labelledby="custom-scopes-dialog-title"
                              aria-describedby="custom-scopes-dialog-description"
                              data-view-component="true"
                              class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade"
                            >
                              <div
                                data-view-component="true"
                                class="Overlay-header Overlay-header--divided"
                              >
                                <div class="Overlay-headerContentWrap">
                                  <div class="Overlay-titleWrap">
                                    <h1
                                      class="Overlay-title "
                                      id="custom-scopes-dialog-title"
                                    >
                                      Saved searches
                                    </h1>
                                    <h2
                                      id="custom-scopes-dialog-description"
                                      class="Overlay-description"
                                    >
                                      Use saved searches to filter your results
                                      more quickly
                                    </h2>
                                  </div>
                                  <div class="Overlay-actionWrap">
                                    <button
                                      data-close-dialog-id="custom-scopes-dialog"
                                      aria-label="Close"
                                      type="button"
                                      data-view-component="true"
                                      class="close-button Overlay-closeButton"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        data-view-component="true"
                                        class="octicon octicon-x"
                                      >
                                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <scrollable-region
                                data-labelled-by="custom-scopes-dialog-title"
                                data-catalyst=""
                                style="overflow: auto;"
                              >
                                <div
                                  data-view-component="true"
                                  class="Overlay-body"
                                >
                                  {" "}
                                  <div data-target="custom-scopes.customScopesModalDialogFlash"></div>
                                  <div
                                    hidden=""
                                    class="create-custom-scope-form"
                                    data-target="custom-scopes.createCustomScopeForm"
                                  >
                                    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
                                    <form
                                      id="custom-scopes-dialog-form"
                                      data-turbo="false"
                                      action="/search/custom_scopes"
                                      accept-charset="UTF-8"
                                      method="post"
                                    >
                                      <input
                                        type="hidden"
                                        data-csrf="true"
                                        name="authenticity_token"
                                        value="yQvXAAbjqKtwE67cMjFBkHSYPj2av+ynA4+WxcMxS1p8aQwbdHZBwYuGijdSN+vjGo1g6nSGcHjniROUpSsPWg=="
                                      />
                                      <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

                                      <input
                                        type="hidden"
                                        id="custom_scope_id"
                                        name="custom_scope_id"
                                        data-target="custom-scopes.customScopesIdField"
                                      />

                                      <div class="form-group">
                                        <label for="custom_scope_name">
                                          Name
                                        </label>
                                        <auto-check
                                          src="/search/custom_scopes/check_name"
                                          required=""
                                        >
                                          <input
                                            type="text"
                                            name="custom_scope_name"
                                            id="custom_scope_name"
                                            data-target="custom-scopes.customScopesNameField"
                                            class="form-control"
                                            autocomplete="off"
                                            placeholder="github-ruby"
                                            required=""
                                            maxlength="50"
                                            spellcheck="false"
                                          />
                                          <input
                                            type="hidden"
                                            data-csrf="true"
                                            value="ivKCnTQ1I7O6Ote6gxFFBgpz4UFN/GSNKDZMp7RnwhaRj1UmHb1XDEngEz8uVl4Dsvi5iwt9Ou/IBvcVwEqmmw=="
                                          />
                                        </auto-check>
                                      </div>

                                      <div class="form-group">
                                        <label for="custom_scope_query">
                                          Query
                                        </label>
                                        <input
                                          type="text"
                                          name="custom_scope_query"
                                          id="custom_scope_query"
                                          data-target="custom-scopes.customScopesQueryField"
                                          class="form-control"
                                          autocomplete="off"
                                          placeholder="(repo:mona/a OR repo:mona/b) AND lang:python"
                                          required=""
                                          maxlength="500"
                                        />
                                      </div>

                                      <p class="text-small color-fg-muted">
                                        To see all available qualifiers, see our{" "}
                                        <a
                                          class="Link--inTextBlock"
                                          href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax"
                                        >
                                          documentation
                                        </a>
                                        .
                                      </p>
                                    </form>{" "}
                                  </div>
                                  <div data-target="custom-scopes.manageCustomScopesForm">
                                    <div data-target="custom-scopes.list"></div>
                                  </div>
                                </div>
                              </scrollable-region>
                              <div
                                data-view-component="true"
                                class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided"
                              >
                                {" "}
                                <button
                                  data-action="click:custom-scopes#customScopesCancel"
                                  type="button"
                                  data-view-component="true"
                                  class="btn"
                                >
                                  {" "}
                                  Cancel
                                </button>
                                <button
                                  form="custom-scopes-dialog-form"
                                  data-action="click:custom-scopes#customScopesSubmit"
                                  data-target="custom-scopes.customScopesSubmitButton"
                                  type="submit"
                                  data-view-component="true"
                                  class="btn-primary btn"
                                >
                                  {" "}
                                  Create saved search
                                </button>
                              </div>
                            </dialog>
                          </dialog-helper>
                        </custom-scopes>
                      </div>
                    </qbsearch-input>

                    <div class="position-relative HeaderMenu-link-wrap d-lg-inline-block">
                      <a
                        href="/login"
                        class="HeaderMenu-link HeaderMenu-link--sign-in HeaderMenu-button flex-shrink-0 no-underline d-none d-lg-inline-flex border border-lg-0 rounded rounded-lg-0 px-2 py-1"
                        style="margin-left: 12px;"
                        data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                        data-hydro-click-hmac="1ac0bd316eb4ecff0fd1f338bc397cea8b5025ce78fffb7ade6ffdd600360286"
                        data-analytics-event='{"category":"Marketing nav","action":"click to go to homepage","label":"ref_page:Marketing;ref_cta:Sign in;ref_loc:Header"}'
                      >
                        Sign in
                      </a>
                    </div>

                    <a
                      href="/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F&amp;source=header-home"
                      class="HeaderMenu-link HeaderMenu-link--sign-up HeaderMenu-button flex-shrink-0 d-flex d-lg-inline-flex no-underline border color-border-default rounded px-2 py-1"
                      data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                      data-hydro-click-hmac="1ac0bd316eb4ecff0fd1f338bc397cea8b5025ce78fffb7ade6ffdd600360286"
                      data-analytics-event='{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up;ref_loc:header logged out"}'
                    >
                      Sign up
                    </a>
                    <button
                      type="button"
                      class="sr-only js-header-menu-focus-trap d-block d-lg-none"
                    >
                      Reseting focus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div
            hidden="hidden"
            data-view-component="true"
            class="js-stale-session-flash stale-session-flash flash flash-warn flash-full"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-alert"
            >
              <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
            </svg>
            <span class="js-stale-session-flash-signed-in" hidden="">
              You signed in with another tab or window.{" "}
              <a class="Link--inTextBlock" href="">
                Reload
              </a>{" "}
              to refresh your session.
            </span>
            <span class="js-stale-session-flash-signed-out" hidden="">
              You signed out in another tab or window.{" "}
              <a class="Link--inTextBlock" href="">
                Reload
              </a>{" "}
              to refresh your session.
            </span>
            <span class="js-stale-session-flash-switched" hidden="">
              You switched accounts on another tab or window.{" "}
              <a class="Link--inTextBlock" href="">
                Reload
              </a>{" "}
              to refresh your session.
            </span>

            <button
              id="icon-button-61f3aa6d-f0dc-4772-8c3b-66a598ad2278"
              aria-labelledby="tooltip-a5e45d17-bfb8-4cab-a877-6c2d3390cfe1"
              type="button"
              data-view-component="true"
              class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close"
            >
              {" "}
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-x Button-visual"
              >
                <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
            </button>
            <tool-tip
              id="tooltip-a5e45d17-bfb8-4cab-a877-6c2d3390cfe1"
              for="icon-button-61f3aa6d-f0dc-4772-8c3b-66a598ad2278"
              popover="manual"
              data-direction="s"
              data-type="label"
              data-view-component="true"
              class="sr-only position-absolute"
              aria-hidden="true"
              role="tooltip"
            >
              Dismiss alert
            </tool-tip>
          </div>
        </div>

        <div id="start-of-content" class="show-on-focus"></div>

        <div
          id="js-flash-container"
          class="flash-container"
          data-turbo-replace=""
        >
          <template class="js-flash-template">
            <div class="flash flash-full   {{ className }}">
              <div>
                <button
                  autofocus=""
                  class="flash-close js-flash-close"
                  type="button"
                  aria-label="Dismiss this message"
                >
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-x"
                  >
                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
                </button>
                <div aria-atomic="true" role="alert" class="js-flash-alert">
                  <div>{`{{ message }}`}</div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <include-fragment
          class="js-notification-shelf-include-fragment"
          data-base-src="https://github.com/notifications/beta/shelf"
        ></include-fragment>

        <div
          class="application-main "
          data-commit-hovercards-enabled=""
          data-discussion-hovercards-enabled=""
          data-issue-and-pr-hovercards-enabled=""
        >
          <main class="font-mktg">
            <div
              class="experimental-video position-fixed bottom-0 right-0 mr-3 mb-3 hidden"
              style="height: 268px; z-index: 1000;"
            >
              <img
                alt=""
                aria-hidden="true"
                width="470"
                height="268"
                class="d-block width-full height-full object-fit-cover rounded-2"
                src="https://github.githubassets.com/assets/thumbnail-31b2a20df6fc.png"
              />
              <span class="position-absolute width-full height-full top-0 left-0 d-flex flex-column text-left p-3 p-lg-4">
                <span class="d-block d-flex flex-row flex-nowrap flex-justify-between flex-items-start">
                  <span
                    class="h6-mktg color-fg-default"
                    style="color: white !important;"
                  >
                    What is GitHub?
                  </span>
                </span>
              </span>
              <div class="position-absolute top-0 right-0 mt-2 mr-2">
                <span class="d-inline-block rounded p-2 mx-auto">
                  <button
                    class="Box-btn-octicon btn-octicon float-right js-close-video"
                    type="button"
                    aria-label="Close dialog"
                    style="color: white;"
                    data-close-dialog=""
                  >
                    <svg
                      aria-label="Close Dialog"
                      aria-hidden="false"
                      role="img"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-x"
                    >
                      <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                    </svg>
                  </button>
                </span>
              </div>
              <div class="position-absolute bottom-0 left-0 mb-1 ml-1">
                <button
                  class="js-video-play-dialog d-block d-sm-inline-block mb-3 mr-sm-3"
                  type="button"
                  aria-label="Play button"
                >
                  <img
                    alt=""
                    role="none"
                    width="178"
                    height="32"
                    class="d-block width-full height-full object-fit-cover"
                    src="https://github.githubassets.com/assets/play-1844e8414ade.png"
                  />
                </button>

                <dialog-helper>
                  <dialog
                    id="issues-video-dialog"
                    aria-modal="true"
                    aria-labelledby="issues-video-dialog-title"
                    aria-describedby="issues-video-dialog-description"
                    data-view-component="true"
                    class="Overlay Overlay-whenNarrow Overlay--size-xlarge Overlay--motion-scaleFade js-video-dialog"
                  >
                    <div data-view-component="true" class="Overlay-header">
                      <div class="Overlay-headerContentWrap">
                        <div class="Overlay-titleWrap">
                          <h1
                            class="Overlay-title sr-only"
                            id="issues-video-dialog-title"
                          >
                            Why GitHub?
                          </h1>
                        </div>
                        <div class="Overlay-actionWrap">
                          <button
                            data-close-dialog-id="issues-video-dialog"
                            aria-label="Close"
                            type="button"
                            data-view-component="true"
                            class="close-button Overlay-closeButton"
                          >
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              class="octicon octicon-x"
                            >
                              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <scrollable-region
                      data-labelled-by="issues-video-dialog-title"
                      data-catalyst=""
                      style="overflow: auto;"
                    >
                      <div data-view-component="true" class="Overlay-body">
                        {" "}
                        <div class="position-relative z-1 mt-2">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 1920 1080"
                            version="1.1"
                            width="1920"
                            height="1080"
                            class="width-full height-auto d-block"
                          ></svg>
                          <iframe
                            class="js-video position-absolute width-full height-full top-0 left-0 border-0"
                            data-src="https://www.youtube-nocookie.com/embed/pBy1zgt0XPc?si=wm_RA73kbmqtKmaO&amp;autoplay=1"
                            title="What is GitHub video"
                            type="text/html"
                            width="1920"
                            height="1080"
                            frameborder="0"
                            allowfullscreen=""
                            allow="autoplay;"
                          ></iframe>
                        </div>
                      </div>
                    </scrollable-region>
                  </dialog>
                </dialog-helper>
              </div>
            </div>

            <div
              class="overflow-hidden"
              data-color-mode="dark"
              data-light-theme="light"
              data-dark-theme="dark"
            >
              <div class="container-xl position-relative">
                <img
                  alt=""
                  aria-hidden="true"
                  width="2236"
                  height="1630"
                  class="position-absolute top-0 height-auto events-none d-none d-sm-block"
                  style="width: min(1118px, max(100vh, 100vw)); left: 67%;"
                  src="https://github.githubassets.com/assets/hero-desktop-a38b0fd77b6c.webp"
                />
                <img
                  alt=""
                  aria-hidden="true"
                  width="860"
                  height="544"
                  class="events-none d-sm-none width-full height-auto mb-n3"
                  src="https://github.githubassets.com/assets/hero-mobile-7163f4f5de41.webp"
                />
              </div>

              <div class="px-3 home-campaign-hero">
                <div
                  class="position-relative pt-3 pt-sm-8 pt-lg-12 container-xl js-build-in-trigger"
                  data-hpc=""
                >
                  <div class="d-flex pt-sm-9">
                    <div class="col-1 d-flex flex-column events-none position-relative">
                      <div class="mx-auto">
                        <div
                          class="d-inline-block circle p-1"
                          style="border: 2px solid rgba(255, 255, 255, 0.3);"
                        ></div>
                      </div>
                      <div
                        style="background: linear-gradient(transparent, #7C72FF 30%); height: 72%"
                        class="home-campaign-git-line rounded mx-auto"
                      ></div>

                      <div class="mx-auto my-3 home-campaign-glowing-icon">
                        <div class="position-relative d-inline-block z-1">
                          <svg
                            aria-hidden="true"
                            height="24"
                            viewBox="0 0 24 24"
                            version="1.1"
                            width="24"
                            data-view-component="true"
                            class="octicon octicon-code"
                          >
                            <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                          </svg>
                          <span
                            class="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1"
                            style="background-color: var(--mktg-accent-primary); filter: blur(18px);"
                          ></span>
                        </div>
                      </div>

                      <div
                        style="background: linear-gradient(#7C72FF, #2DA44E 80%, #3FB950);"
                        class="home-campaign-git-line height-full rounded mx-auto"
                      ></div>
                    </div>

                    <div class="col-11 text-left pl-2 pl-sm-0 mt-n4">
                      <div class="position-relative z-1 mb-2 mb-sm-6"></div>

                      <h1 class="h0-mktg mb-3 position-relative z-2">
                        <span style="font-size: 1.2em">
                          Let’s build from&nbsp;here
                        </span>
                      </h1>

                      <p class="f2-mktg text-normal color-fg-muted mb-3 mb-md-10 position-relative z-1">
                        The world’s leading AI-powered developer platform.
                      </p>

                      <div>
                        <label class="d-block pb-2" for="hero_user_email">
                          Email address
                        </label>
                        <div class="d-flex flex-column flex-md-row">
                          {/* <!-- '"` --><!-- </textarea></xmp> --> */}
                          <form
                            data-turbo="false"
                            class="mx-0 col-12 col-md-7 col-lg-5 js-signup-form position-relative z-2"
                            autocomplete="off"
                            action="/signup"
                            accept-charset="UTF-8"
                            method="get"
                          >
                            {" "}
                            <div class="d-flex flex-column flex-md-row flex-items-center">
                              <input
                                data-color-mode="light"
                                data-light-theme="light"
                                data-dark-theme="dark"
                                class="col-12 my-0 mb-3 mb-md-0 flex-auto form-control f4-mktg width-full rounded-md-right-0"
                                style="height: 3rem"
                                placeholder="you@company.com"
                                type="email"
                                name="user_email"
                                id="hero_user_email"
                                autocomplete="off"
                                spellcheck="false"
                                required=""
                              />
                              <input
                                type="hidden"
                                name="source"
                                value="form-home-signup"
                              />
                              <button
                                class="btn-mktg width-full width-md-auto mb-3 mb-md-0 rounded-md-left-0 home-campaign-signup-button btn-signup-mktg"
                                data-analytics-event='{"category":"Home campaign","action":"click to Sign up for GitHub","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:hero"}'
                                type="submit"
                              >
                                Sign up for GitHub
                              </button>
                            </div>
                          </form>
                          <div class="border-top border-md-left mx-md-3 mb-3 mb-md-0"></div>

                          <a
                            class="btn-mktg home-campaign-enterprise btn-muted-mktg"
                            data-analytics-event='{"category":"Start a free enterprise trial","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;"}'
                            href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&amp;ref_loc=Home+campaign+hero&amp;ref_page=%2F"
                            data-test-selector="start-trial-button"
                          >
                            Start a free enterprise trial
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill="currentColor"
                                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                              ></path>
                              <path
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div class="my-8 my-md-10 build-in-animate col-12">
                        <p class="d-block color-fg-subtle f3-mktg">
                          Trusted by the world’s
                          leading&nbsp;organizations&nbsp;↘︎
                        </p>

                        <div class="d-flex flex-wrap flex-justify-around flex-md-justify-between flex-items-center col-12 col-lg-11">
                          <img
                            src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg"
                            alt="3M logo"
                            height="48"
                            class="my-3"
                          />
                          <img
                            src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg"
                            alt="KPMG logo"
                            height="40"
                            class="my-3"
                          />
                          <div class="col-12 d-sm-none"></div>
                          <img
                            src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg"
                            alt="Mercedes-Benz logo"
                            height="44"
                            class="my-3"
                          />
                          <img
                            src="https://github.githubassets.com/assets/sap-96248a56d312.svg"
                            alt="SAP logo"
                            height="44"
                            class="my-3"
                          />
                          <div class="col-12 d-none d-sm-block d-md-none"></div>
                          <div class="col-12 d-sm-none"></div>
                          <img
                            src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg"
                            alt="P&amp;G logo"
                            height="32"
                            class="my-3"
                          />
                          <img
                            src="https://github.githubassets.com/assets/telus-df0c2109df99.svg"
                            alt="Telus logo"
                            height="32"
                            class="my-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="js-sticky-state position-sticky z-3 init-hidden is-stuck"
              style="height: 1px; top: -1px;"
            >
              <div
                class="sub-nav-mktg js-toggler-container z-3 is-stuck js-sticky-state position-sticky width-full scrollnav"
                data-color-mode="dark"
                data-light-theme="light"
                data-dark-theme="dark"
                style="top: -1px;"
              >
                <div class="sub-nav-mktg-wrapper d-flex flex-items-center py-3 p-responsive container-xl">
                  <button
                    type="button"
                    class="btn-octicon sub-nav-mktg-toggle d-lg-none p-1 flex-order-1 float-right js-toggler-target mr-n1"
                    aria-controls="sub-nav-dropdown"
                    aria-label="Page navigation"
                    aria-expanded="false"
                  >
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      class="octicon octicon-chevron-down on-hidden"
                    >
                      <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      class="octicon octicon-chevron-up on-visible"
                    >
                      <path d="M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z"></path>
                    </svg>
                  </button>

                  <div
                    class="sub-nav-mktg-links flex-auto f4-mktg d-flex flex-column flex-lg-row gap-4"
                    id="sub-nav-dropdown"
                  >
                    <a
                      class="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item"
                      data-analytics-event='{"location":"scrollnav","action":"productivity","context":"homepage","tag":"link","label":"productivity_link_homepage_scrollnav"}'
                      href="#productivity"
                    >
                      Productivity
                    </a>
                    <a
                      class="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item"
                      data-analytics-event='{"location":"scrollnav","action":"security","context":"homepage","tag":"link","label":"security_link_homepage_scrollnav"}'
                      href="#security"
                    >
                      Security
                    </a>
                    <a
                      class="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item"
                      data-analytics-event='{"location":"scrollnav","action":"collaboration","context":"homepage","tag":"link","label":"collaboration_link_homepage_scrollnav"}'
                      href="#collaboration"
                    >
                      Collaboration
                    </a>
                  </div>

                  <div class="sub-nav-mktg-ctas ml-lg-3">
                    <a
                      class="btn-mktg ml-lg-2 mt-2 mt-lg-0 d-block d-lg-inline-block btn-muted-mktg"
                      data-analytics-event='{"category":"Start a free enterprise trial","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;","context":"homepage","location":"scrollnav","tag":"link"}'
                      href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&amp;ref_loc=homepage+sticky+nav&amp;ref_page=%2F"
                    >
                      Start a free enterprise trial
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="octicon arrow-symbol-mktg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                        ></path>
                        <path
                          class="octicon-chevrow-stem"
                          stroke="currentColor"
                          d="M1.75 8H11"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </a>
                    <a
                      class="btn-mktg ml-lg-2 mt-2 mt-lg-0 d-block d-lg-inline-block"
                      data-analytics-event='{"category":"Sign up for GitHub","action":"click to Sign up for GitHub","label":"ref_cta:Sign up for GitHub;","context":"homepage","location":"scrollnav","tag":"link"}'
                      href="/join?ref_cta=Sign+up+for+GitHub&amp;ref_loc=homepage+sticky+nav&amp;ref_page=%2F&amp;source=homepage-sticky-nav"
                    >
                      Sign up for GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="octicon arrow-symbol-mktg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                        ></path>
                        <path
                          class="octicon-chevrow-stem"
                          stroke="currentColor"
                          d="M1.75 8H11"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="home-campaign-productivity js-section overflow-hidden px-3 pb-8 pt-5"
              data-color-mode="dark"
              data-light-theme="light"
              data-dark-theme="dark"
              id="productivity"
            >
              <div class="container-xl">
                <div
                  class="d-flex js-build-in-trigger position-relative"
                  data-build-in-stagger="100"
                  data-build-margin-bottom="20"
                >
                  <div class="col-1 d-flex flex-column flex-items-center">
                    <div class="mb-4 position-relative home-campaign-glowing-icon">
                      <svg
                        aria-hidden="true"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="24"
                        data-view-component="true"
                        class="octicon octicon-briefcase"
                      >
                        <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
                      </svg>
                      <span
                        class="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1"
                        style="background-color: var(--mktg-accent-primary); filter: blur(18px);"
                      ></span>
                    </div>
                    <div
                      class="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top"
                      style="background: linear-gradient(rgb(63, 185, 80), rgb(46, 160, 67), transparent); transition-delay: 500ms;"
                      data-build-delay="500"
                    ></div>
                  </div>

                  <div class="col-11 col-lg-8 ml-2 ml-md-0 mb-6 mb-md-10">
                    <h2 class="h5-mktg mb-4 text-medium">Productivity</h2>
                    <h3 class="h3-mktg mb-4 text-medium">
                      <span class="text-accent-primary d-block">
                        Accelerate innovation
                      </span>
                      Our AI-powered platform increases the pace of software
                      development.
                    </h3>
                  </div>

                  <img
                    alt=""
                    aria-hidden="true"
                    width="626"
                    height="626"
                    class="position-absolute height-auto d-none d-md-block col-6 events-none home-shape-rotate"
                    style="top: 0; right: -25%;"
                    loading="lazy"
                    decoding="async"
                    src="https://github.githubassets.com/assets/shape-0-df97fa6b0c27.svg"
                  />
                </div>

                <div class="js-build-in-trigger">
                  <img
                    alt=""
                    aria-hidden="true"
                    width="2496"
                    height="1302"
                    class="width-full d-block height-auto position-relative z-1 rounded-3 border js-build-in-item build-in-slideX-right"
                    loading="lazy"
                    decoding="async"
                    src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png"
                  />
                </div>

                <div
                  class="d-flex js-build-in-trigger position-relative"
                  data-build-in-stagger="100"
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    width="584"
                    height="584"
                    class="position-absolute height-auto d-none d-md-block col-7 events-none home-shape-rotate"
                    style="bottom: -50%; right: -20%; animation-duration: 300s;"
                    loading="lazy"
                    decoding="async"
                    src="https://github.githubassets.com/assets/shape-1-c219318e479a.svg"
                  />

                  <div class="col-1 d-flex flex-column flex-items-center position-relative">
                    <div
                      class="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
                      style="transition-duration: 900ms; background: linear-gradient(transparent, rgb(63, 185, 80), rgb(63, 185, 80), transparent); transition-delay: 0ms;"
                    ></div>
                    <img
                      alt=""
                      aria-hidden="true"
                      width="81"
                      height="485"
                      style="left: calc(50% - 2px); height: auto; max-width: 9vw; transition-delay: 100ms;"
                      class="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg"
                    />
                  </div>

                  <div class="col-11 ml-2 ml-md-6">
                    <div
                      class="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7"
                      data-build-in-stagger="100"
                    >
                      <div
                        class="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right"
                        style="transition-delay: 0ms;"
                      >
                        <div class="pr-md-4">
                          <h2 class="color-fg-default mb-3 f2-mktg color-fg-muted">
                            <em>GitHub Copilot</em> empowers developers to
                            complete tasks 55% faster with contextualized AI
                            coding assistance across workflows.
                          </h2>

                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/features/copilot"
                            data-analytics-event='{"category":"Explore GitHub Copilot","action":"click to Explore GitHub Copilot","label":"ref_cta:Explore GitHub Copilot;"}'
                          >
                            Explore GitHub Copilot{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill="currentColor"
                                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                              ></path>
                              <path
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div class="col-12 py-3 col-md-6 col-lg-6">
                        <div class="position-relative">
                          <div class="d-flex flex-column position-relative">
                            <div
                              class="js-build-in-item build-in-slideX-right overflow-hidden rounded-3 position-relative z-1 d-none d-md-block"
                              style="max-width: 480px; margin-top: -100%; transition-delay: 100ms;"
                            >
                              <img
                                src="https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png"
                                loading="lazy"
                                width="960"
                                height="1222"
                                alt=""
                                decoding="async"
                                class="width-full d-block height-auto"
                              />
                            </div>

                            <div
                              class="js-build-in-item build-in-slideX-right overflow-hidden rounded-3 position-absolute right-3 bottom-3 bottom-sm-0 z-1 d-md-none"
                              style="max-width: 60%; transition-delay: 200ms;"
                            >
                              <img
                                src="https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png"
                                loading="lazy"
                                width="960"
                                height="1222"
                                alt=""
                                decoding="async"
                                class="width-full d-block height-auto"
                              />
                            </div>

                            <img
                              alt=""
                              aria-hidden="true"
                              width="1000"
                              height="1000"
                              class="position-absolute d-none d-md-block events-none js-build-in-item build-in-fade"
                              style="bottom: -300px; right: -200px; transition-delay: 300ms;"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6 mb-md-7 pb-4 js-build-in-trigger">
                      <div
                        class="py-3 text-left col-sm-8 col-md-7 col-lg-6 col-xl-5 js-build-in-item build-in-slideX-left"
                        style="transition-delay: 600ms;"
                      >
                        <div
                          class="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
                          style="top: -1px"
                        >
                          <span class="text-gradient-mktg text-semibold">
                            Did you know?
                          </span>
                        </div>

                        <h3 class="text-accent-primary mb-2 mt-3 h1-mktg text-medium">
                          22% increase
                        </h3>
                        <p class="mb-3 f2-mktg text-medium col-6-max">
                          in developer productivity after three years with
                          GitHub
                        </p>
                        <a
                          class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                          href="https://resources.github.com/forrester/"
                          data-analytics-event='{"category":"Read the report","action":"click to Read the report","label":"ref_cta:Read the report;"}'
                        >
                          Read the report{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                            ></path>
                            <path
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="position-relative z-1">
                  <card-skew
                    class="overflow-hidden rounded-3 mb-3 mb-md-5"
                    data-catalyst=""
                    data-perspective="700"
                    style="transform: perspective(700px) rotateX(-0.03deg) rotateY(-0.03deg);"
                  >
                    <div
                      class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row"
                      data-target="card-skew.bounding"
                    >
                      <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
                        <p class="f2-mktg text-medium color-fg-muted mb-4">
                          <em>GitHub Actions</em> automates your build, test,
                          and deployment workflow with simple and secure CI/CD.
                        </p>

                        <div>
                          {" "}
                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/features/actions"
                            data-analytics-event='{"category":"Discover GitHub Actions","action":"click to Discover GitHub Actions","label":"ref_cta:Discover GitHub Actions;"}'
                          >
                            Discover GitHub Actions{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill="currentColor"
                                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                              ></path>
                              <path
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="overflow-hidden col-md-6 rounded-right-3">
                        <picture>
                          <source
                            srcset="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=1306&amp;format=webpll 1306w,https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=1044&amp;format=webpll 1044w,https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&amp;format=webpll 783w,https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=653&amp;format=webpll 653w,https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=522&amp;format=webpll 522w,https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=261&amp;format=webpll 261w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 653px"
                            type="image/webp"
                          />
                          <source
                            srcset="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png 1306w,https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=653 653w,https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=522 522w,https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=326 326w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 653px"
                            type="image/png"
                          />
                          <img
                            class="width-full d-block height-auto"
                            width="1306"
                            height="992"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            aria-hidden="true"
                            src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png"
                          />
                        </picture>
                      </div>

                      <div
                        data-target="card-skew.shine"
                        class="position-absolute bottom-0 right-0 events-none z-n1"
                        style="transform: translate(-193.19px, 29.475px);"
                      ></div>
                    </div>{" "}
                  </card-skew>
                </div>

                <div class="d-flex flex-column flex-md-row gutter js-build-in-trigger">
                  <div class="col-md-6 d-flex">
                    <card-skew
                      class="overflow-hidden rounded-3 mb-3 mb-md-5"
                      data-catalyst=""
                      data-perspective="700"
                    >
                      <div
                        class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                        data-target="card-skew.bounding"
                      >
                        <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                          <p class="f2-mktg text-medium color-fg-muted mb-4">
                            <em>GitHub Codespaces</em> offers a complete dev
                            environment in seconds. Code, build, test, and open
                            pull requests from any repo.
                          </p>

                          <div>
                            {" "}
                            <a
                              class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                              href="/features/codespaces"
                              data-analytics-event='{"category":"Check out GitHub Codespaces","action":"click to Check out GitHub Codespaces","label":"ref_cta:Check out GitHub Codespaces;"}'
                            >
                              Check out GitHub Codespaces{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  class="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div class="overflow-hidden rounded-bottom-3">
                          <picture>
                            <source
                              srcset="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=1209&amp;format=webpll 1209w,https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=967&amp;format=webpll 967w,https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=725&amp;format=webpll 725w,https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=241&amp;format=webpll 241w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/webp"
                            />
                            <source
                              srcset="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png 1209w,https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=604 604w,https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=483 483w,https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=302 302w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/png"
                            />
                            <img
                              class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                              width="1209"
                              height="890"
                              loading="lazy"
                              decoding="async"
                              alt=""
                              aria-hidden="true"
                              src="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png"
                            />
                          </picture>
                        </div>

                        <div
                          data-target="card-skew.shine"
                          class="position-absolute bottom-0 right-0 events-none z-n1"
                        ></div>
                      </div>{" "}
                    </card-skew>
                  </div>

                  <div class="col-md-6 d-flex">
                    <card-skew
                      class="overflow-hidden rounded-3 mb-3 mb-md-5"
                      data-catalyst=""
                      data-perspective="700"
                      style="transform: perspective(700px) rotateX(0deg) rotateY(0.03deg);"
                    >
                      <div
                        class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                        data-target="card-skew.bounding"
                      >
                        <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                          <p class="f2-mktg text-medium color-fg-muted mb-4">
                            <em>GitHub Mobile and Copilot</em> now let you
                            manage projects and converse with your AI pair
                            programmer on the&nbsp;go.
                          </p>

                          <div>
                            {" "}
                            <a
                              class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                              href="/mobile"
                              data-analytics-event='{"category":"Download GitHub Mobile","action":"click to Download GitHub Mobile","label":"ref_cta:Download GitHub Mobile;"}'
                            >
                              Download GitHub Mobile{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  class="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div class="overflow-hidden rounded-bottom-3">
                          <picture>
                            <source
                              srcset="https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp 1244w,https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp?width=995 995w,https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp?width=746 746w,https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp?width=622 622w,https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp?width=497 497w,https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp?width=248 248w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 622px"
                              type="image/webp"
                            />
                            <img
                              class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                              width="1244"
                              height="1029"
                              loading="lazy"
                              decoding="async"
                              alt=""
                              aria-hidden="true"
                              src="https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp"
                            />
                          </picture>
                        </div>

                        <div
                          data-target="card-skew.shine"
                          class="position-absolute bottom-0 right-0 events-none z-n1"
                          style="transform: translate(-195.19px, -41.805px);"
                        ></div>
                      </div>{" "}
                    </card-skew>
                  </div>
                </div>

                <div class="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
                  <div
                    class="home-campaign-git-line mt-n3 mt-md-n4 mb-n8 rounded js-build-in-item build-in-scale-top"
                    style="height: 160px; background: linear-gradient(transparent, #33B3AE 40%);"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="home-campaign-security js-section overflow-hidden px-3 pb-8 pt-5"
              data-color-mode="dark"
              data-light-theme="light"
              data-dark-theme="dark"
              id="security"
            >
              <div class="container-xl">
                <div
                  class="d-flex js-build-in-trigger position-relative"
                  data-build-in-stagger="100"
                >
                  <div class="col-1 d-flex flex-column flex-items-center">
                    <div
                      class="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade"
                      style="transition-delay: 0ms;"
                    >
                      <svg
                        aria-hidden="true"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="24"
                        data-view-component="true"
                        class="octicon octicon-lock"
                      >
                        <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
                      </svg>
                      <span
                        class="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1"
                        style="background-color: var(--mktg-accent-primary); filter: blur(18px);"
                      ></span>
                    </div>

                    <div
                      class="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top"
                      style="background: linear-gradient(rgb(51, 179, 174) 40%, transparent); transition-delay: 500ms;"
                      data-build-delay="500"
                    ></div>
                  </div>

                  <div class="col-11 col-lg-7 ml-2 ml-md-0 mb-6 mb-md-10 pr-lg-3">
                    <h2
                      class="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
                      style="transition-delay: 200ms;"
                    >
                      Application security
                    </h2>
                    <h3
                      class="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
                      style="transition-delay: 300ms;"
                    >
                      <span class="text-accent-primary d-block">
                        Empower developers
                      </span>{" "}
                      With GitHub, you can secure code in minutes.
                    </h3>
                  </div>

                  <img
                    alt=""
                    aria-hidden="true"
                    width="595"
                    height="595"
                    class="position-absolute height-auto d-none d-md-block col-8 events-none"
                    style="top: -10%; right: -25%;"
                    loading="lazy"
                    decoding="async"
                    src="https://github.githubassets.com/assets/shape-2-f30dcc9bd35c.svg"
                  />
                </div>

                <card-skew
                  class="overflow-hidden rounded-3 mb-3 mb-md-5 position-relative z-1"
                  data-catalyst=""
                  data-perspective="700"
                  style="transform: perspective(700px) rotateX(0deg) rotateY(-0.03deg);"
                >
                  <div
                    class="color-bg-subtle border rounded-3 p-2 p-lg-6 js-build-in-trigger feature-card-mktg z-1 position-relative"
                    data-target="card-skew.bounding"
                    data-build-in-stagger="200"
                  >
                    <div class="color-fg-subtle p-4">
                      <div class="f5 text-medium">cmake.yml</div>
                      <span class="f6">on: push</span>
                    </div>

                    <div class="position-relative d-flex flex-column flex-md-row gutter-spacious col-lg-10 mx-auto my-lg-6">
                      <div
                        class="col-md-6 js-build-in-item build-in-scale-right"
                        style="transition-delay: 0ms;"
                      >
                        <div
                          class="p-4 rounded mt-5 box-shadow-mktg-xl mb-6"
                          style="background: rgba(235, 245, 255, 0.2);"
                        >
                          <ul class="list-style-none mb-n4">
                            <li
                              class="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade"
                              style="transition-delay: 200ms;"
                            >
                              <div class="d-flex flex-items-center">
                                <svg
                                  aria-hidden="true"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width="24"
                                  data-view-component="true"
                                  class="octicon octicon-check-circle-fill color-fg-success mr-2"
                                >
                                  <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                                </svg>
                                <span class="text-medium">Build</span>
                              </div>
                              <span class="f5 color-fg-muted d-none d-sm-block">
                                1m 21s
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        class="home-campaign-ghas-connect position-relative position-md-absolute z-1 d-flex flex-items-center js-build-in-item build-in-scale-fade"
                        style="transition-delay: 400ms;"
                      >
                        <div
                          class="d-inline-block circle p-1 color-bg-emphasis"
                          style="box-shadow: 0 0 0 2px #444D56;"
                        ></div>
                        <div style="width: 40px; height: 2px; background: #D1D5DA;"></div>
                        <div
                          class="d-inline-block circle p-1 color-bg-emphasis"
                          style="box-shadow: 0 0 0 2px #444D56;"
                        ></div>
                      </div>

                      <div
                        class="col-md-6 js-build-in-item build-in-scale-right"
                        style="transition-delay: 600ms;"
                      >
                        <div
                          class="pt-2 pb-1 px-4 rounded-top-2 d-inline-block text-medium"
                          style="background: rgba(235, 245, 255, 0.2);"
                        >
                          Steps
                        </div>
                        <div
                          class="p-4 rounded-bottom-2 rounded-right-2 box-shadow-mktg-xl mb-6"
                          style="background: rgba(235, 245, 255, 0.2);"
                        >
                          <ul class="list-style-none mb-n4">
                            <li
                              class="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade"
                              style="transition-delay: 800ms;"
                            >
                              <div class="d-flex flex-items-center">
                                <svg
                                  aria-hidden="true"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width="24"
                                  data-view-component="true"
                                  class="octicon octicon-check-circle-fill color-fg-success mr-2"
                                >
                                  <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                                </svg>
                                <span class="text-medium">
                                  Initialize CodeQL
                                </span>
                              </div>
                              <span class="f5 color-fg-muted d-none d-sm-block">
                                1m 42s
                              </span>
                            </li>
                            <li
                              class="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade"
                              style="transition-delay: 1000ms;"
                            >
                              <div class="d-flex flex-items-center">
                                <svg
                                  aria-hidden="true"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width="24"
                                  data-view-component="true"
                                  class="octicon octicon-check-circle-fill color-fg-success mr-2"
                                >
                                  <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                                </svg>
                                <span class="text-medium">Autobuild</span>
                              </div>
                              <span class="f5 color-fg-muted d-none d-sm-block">
                                1m 24s
                              </span>
                            </li>
                            <li
                              class="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade"
                              style="transition-delay: 1200ms;"
                            >
                              <div class="d-flex flex-items-center">
                                <svg
                                  aria-hidden="true"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width="24"
                                  data-view-component="true"
                                  class="octicon octicon-check-circle-fill color-fg-success mr-2"
                                >
                                  <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                                </svg>
                                <span class="text-medium">
                                  Perform CodeQL Analyses
                                </span>
                              </div>
                              <span class="f5 color-fg-muted d-none d-sm-block">
                                1m 36s
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      data-target="card-skew.shine"
                      class="position-absolute bottom-0 right-0 events-none z-n1"
                      style="transform: translate(-195.19px, 39.23px);"
                    ></div>
                  </div>
                </card-skew>

                <div
                  class="d-flex js-build-in-trigger position-relative"
                  data-build-in-stagger="100"
                >
                  <div class="col-1 d-flex flex-column flex-items-center position-relative">
                    <div
                      class="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
                      style="background: linear-gradient(transparent, rgb(51, 179, 174), rgb(51, 179, 174), transparent); transition-delay: 0ms;"
                    ></div>

                    <img
                      alt=""
                      aria-hidden="true"
                      width="81"
                      height="612"
                      style="left: calc(50% - 2px); height: auto; max-width: 9vw; transition-delay: 100ms;"
                      class="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg"
                    />
                  </div>

                  <div class="col-11 ml-2 ml-md-6">
                    <div
                      class="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7"
                      data-build-in-stagger="100"
                    >
                      <div
                        class="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right"
                        style="transition-delay: 0ms;"
                      >
                        <div class="pr-md-4">
                          <h2 class="color-fg-default mb-3 f2-mktg color-fg-muted">
                            <em>GitHub Advanced Security</em> enables you to
                            find and fix vulnerabilities with ease and ship
                            secure code quickly.
                          </h2>

                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/enterprise/advanced-security"
                            data-analytics-event='{"category":"Dive into GitHub Advanced Security","action":"click to Dive into GitHub Advanced Security","label":"ref_cta:Dive into GitHub Advanced Security;"}'
                          >
                            Dive into GitHub Advanced Security{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill="currentColor"
                                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                              ></path>
                              <path
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div class="col-12 py-3 col-md-6 col-lg-6">
                        <div class="position-relative">
                          <div class="d-flex flex-column position-relative">
                            <div
                              class="js-build-in-item build-in-slideX-right border overflow-hidden rounded-2 position-relative left-6 z-1"
                              style="max-width: 541px; margin-top: -30%; transition-delay: 100ms;"
                            >
                              <img
                                src="https://github.githubassets.com/assets/illu-ghas-list-84af1f1ce2b8.png"
                                alt=""
                                loading="lazy"
                                decoding="async"
                                width="1084"
                                height="600"
                                class="width-full height-auto d-block"
                              />
                            </div>

                            <img
                              alt=""
                              aria-hidden="true"
                              width="1000"
                              height="1000"
                              class="position-absolute d-none d-md-block events-none js-build-in-item build-in-fade"
                              style="bottom: -160px; right: -220px; transition-delay: 200ms;"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/bg-glow-blue-036b8dc2d1ce.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6 mb-md-12 pb-3 js-build-in-trigger">
                      <div
                        class="py-3 js-build-in-item col-sm-10 col-md-6 text-left col-lg-7 build-in-slideX-left"
                        style="transition-delay: 500ms;"
                      >
                        <div
                          class="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
                          style="top: -1px"
                        >
                          <span class="text-gradient-mktg text-semibold">
                            Did you know?
                          </span>
                        </div>

                        <h3 class="text-accent-primary mb-2 mt-3 h1-mktg text-medium">
                          7x faster
                        </h3>
                        <p class="mb-3 f2-mktg text-medium col-6-max">
                          vulnerability fixes with GitHub<sup>1</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="position-relative z-1 js-build-in-trigger">
                  <card-skew
                    class="overflow-hidden rounded-3 mb-3 mb-md-5"
                    data-catalyst=""
                    data-perspective="700"
                    style="transform: perspective(700px) rotateX(0.03deg) rotateY(-0.03deg);"
                  >
                    <div
                      class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row"
                      data-target="card-skew.bounding"
                    >
                      <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
                        <p class="f2-mktg text-medium color-fg-muted mb-4">
                          <em>Code scanning</em> is our code analysis tool that
                          helps you remediate issues in your code.
                        </p>

                        <div>
                          {" "}
                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="https://resources.github.com/security/sast/"
                            data-analytics-event='{"category":"Download the latest SAST ebook","action":"click to Download the latest SAST ebook","label":"ref_cta:Download the latest SAST ebook;"}'
                          >
                            Download the latest SAST ebook{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill="currentColor"
                                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                              ></path>
                              <path
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="overflow-hidden col-md-6 rounded-right-3">
                        <picture>
                          <source
                            srcset="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=1288&amp;format=webpll 1288w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=1030&amp;format=webpll 1030w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=772&amp;format=webpll 772w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=644&amp;format=webpll 644w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=515&amp;format=webpll 515w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=257&amp;format=webpll 257w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 644px"
                            type="image/webp"
                          />
                          <source
                            srcset="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png 1288w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=644 644w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=515 515w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=322 322w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 644px"
                            type="image/png"
                          />
                          <img
                            class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                            width="1288"
                            height="992"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            aria-hidden="true"
                            src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png"
                          />
                        </picture>
                      </div>

                      <div
                        data-target="card-skew.shine"
                        class="position-absolute bottom-0 right-0 events-none z-n1"
                        style="transform: translate(-196.19px, 118.325px);"
                      ></div>
                    </div>{" "}
                  </card-skew>
                </div>

                <div class="d-flex flex-column flex-md-row gutter js-build-in-trigger">
                  <div class="col-md-6 d-flex">
                    <card-skew
                      class="overflow-hidden rounded-3 mb-3 mb-md-5"
                      data-catalyst=""
                      data-perspective="700"
                    >
                      <div
                        class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                        data-target="card-skew.bounding"
                      >
                        <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                          <p class="f2-mktg text-medium color-fg-muted mb-4">
                            <em>Dependabot</em> makes it easy to find and fix
                            vulnerable dependencies in your supply chain.
                          </p>

                          <div>
                            {" "}
                            <a
                              class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                              href="/features/security/software-supply-chain"
                              data-analytics-event='{"category":"Explore Dependabot","action":"click to Explore Dependabot","label":"ref_cta:Explore Dependabot;"}'
                            >
                              Explore Dependabot{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  class="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div class="overflow-hidden rounded-bottom-3">
                          <picture>
                            <source
                              srcset="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=241&amp;format=webpll 241w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/webp"
                            />
                            <source
                              srcset="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png 1208w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=604 604w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=483 483w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=302 302w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/png"
                            />
                            <img
                              class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                              width="1208"
                              height="764"
                              loading="lazy"
                              decoding="async"
                              alt=""
                              aria-hidden="true"
                              src="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png"
                            />
                          </picture>
                        </div>

                        <div
                          data-target="card-skew.shine"
                          class="position-absolute bottom-0 right-0 events-none z-n1"
                        ></div>
                      </div>{" "}
                    </card-skew>
                  </div>

                  <div class="col-md-6 d-flex">
                    <card-skew
                      class="overflow-hidden rounded-3 mb-3 mb-md-5"
                      data-catalyst=""
                      data-perspective="700"
                      style="transform: perspective(700px) rotateX(0.03deg) rotateY(0.03deg);"
                    >
                      <div
                        class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                        data-target="card-skew.bounding"
                      >
                        <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                          <p class="f2-mktg text-medium color-fg-muted mb-4">
                            <em>Secret scanning</em> automatically looks for
                            partner patterns and prevents fraudulent use of
                            accidentally committed secrets.
                          </p>

                          <div>
                            {" "}
                            <a
                              class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                              href="/features/security/code"
                              data-analytics-event='{"category":"Read about secret scanning","action":"click to Read about secret scanning","label":"ref_cta:Read about secret scanning;"}'
                            >
                              Read about secret scanning{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  class="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div class="overflow-hidden rounded-bottom-3">
                          <picture>
                            <source
                              srcset="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=241&amp;format=webpll 241w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/webp"
                            />
                            <source
                              srcset="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png 1208w,https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=604 604w,https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=483 483w,https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=302 302w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/png"
                            />
                            <img
                              class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                              width="1208"
                              height="804"
                              loading="lazy"
                              decoding="async"
                              alt=""
                              aria-hidden="true"
                              src="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png"
                            />
                          </picture>
                        </div>

                        <div
                          data-target="card-skew.shine"
                          class="position-absolute bottom-0 right-0 events-none z-n1"
                          style="transform: translate(-196.19px, 93.49px);"
                        ></div>
                      </div>{" "}
                    </card-skew>
                  </div>
                </div>

                <div class="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
                  <div
                    class="home-campaign-git-line mt-n3 mt-md-n4 mb-n8 rounded js-build-in-item build-in-scale-top"
                    style="height: 160px; background: linear-gradient(transparent, #F778BA 40%);"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="home-campaign-collaboration js-section pt-5 px-3 overflow-hidden"
              data-color-mode="dark"
              data-light-theme="light"
              data-dark-theme="dark"
              id="collaboration"
            >
              <div class="container-xl">
                <div
                  class="d-flex js-build-in-trigger position-relative"
                  data-build-in-stagger="100"
                >
                  <div class="col-1 d-flex flex-column flex-items-center">
                    <div
                      class="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade"
                      style="transition-delay: 0ms;"
                    >
                      <svg
                        aria-hidden="true"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="24"
                        data-view-component="true"
                        class="octicon octicon-code-of-conduct"
                      >
                        <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
                      </svg>
                      <span
                        class="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1"
                        style="background-color: var(--mktg-accent-primary); filter: blur(18px);"
                      ></span>
                    </div>

                    <div
                      class="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top"
                      style="background: linear-gradient(rgb(247, 120, 186) 40%, transparent); transition-delay: 500ms;"
                      data-build-delay="500"
                    ></div>
                  </div>

                  <div class="col-11 col-lg-8 ml-2 ml-md-0 mb-6 mb-md-10 pr-lg-3">
                    <h2
                      class="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
                      style="transition-delay: 200ms;"
                    >
                      Collaboration
                    </h2>
                    <h3
                      class="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
                      style="transition-delay: 300ms;"
                    >
                      <span class="text-accent-primary d-block">
                        Supercharge collaboration
                      </span>
                      GitHub helps your teams work more efficiently together.
                    </h3>
                  </div>

                  <img
                    alt=""
                    aria-hidden="true"
                    width="502"
                    height="735"
                    class="position-absolute height-auto d-none d-md-block col-5 events-none js-build-in-item build-in-fade"
                    style="top: -9%; right: -12%; transition-delay: 400ms;"
                    loading="lazy"
                    decoding="async"
                    src="https://github.githubassets.com/assets/shape-3-9e542b5c31b8.svg"
                  />
                </div>

                <picture>
                  <source
                    srcset="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=2498&amp;format=webpll 2498w,https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1998&amp;format=webpll 1998w,https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1498&amp;format=webpll 1498w,https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1249&amp;format=webpll 1249w,https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=999&amp;format=webpll 999w,https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=499&amp;format=webpll 499w"
                    sizes="(max-width: 1200px) 90vw, 1248px"
                    type="image/webp"
                  />
                  <source
                    srcset="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png 2498w,https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1249 1249w,https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=999 999w,https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=624 624w"
                    sizes="(max-width: 1200px) 90vw, 1248px"
                    type="image/png"
                  />
                  <img
                    class="position-relative z-1 width-full height-auto d-block rounded-3 border box-shadow-card-dark-mktg"
                    width="2498"
                    height="1450"
                    loading="lazy"
                    decoding="async"
                    alt="Illustration of project table view with cards grouped by 'Feature planning' phase."
                    src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png"
                  />
                </picture>

                <div class="d-flex position-relative">
                  <div class="col-1 d-flex flex-column flex-items-center position-relative js-build-in-trigger">
                    <div
                      class="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
                      style="transition-duration: 1100ms; background: linear-gradient(transparent, #F778BA, #F778BA, transparent);"
                    ></div>
                    <img
                      alt=""
                      aria-hidden="true"
                      width="81"
                      height="612"
                      style="left: calc(50% - 2px); height: auto; max-width: 9vw;"
                      class="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/git-branch-collaboration-2-e46b1fb1d363.svg"
                    />
                  </div>

                  <div class="col-11 ml-2 ml-md-6">
                    <div
                      class="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7"
                      data-build-in-stagger="100"
                    >
                      <div
                        class="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right"
                        style="transition-delay: 0ms;"
                      >
                        <div class="pr-md-4">
                          <h2 class="color-fg-default mb-3 f2-mktg color-fg-muted">
                            <em>GitHub Issues and GitHub Projects</em> supply
                            project management tools that adapt to your team
                            alongside your code.
                          </h2>

                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/features/issues"
                            data-analytics-event='{"category":"Get started with GitHub Issues","action":"click to Get started with GitHub Issues","label":"ref_cta:Get started with GitHub Issues;"}'
                          >
                            Get started with GitHub Issues{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill="currentColor"
                                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                              ></path>
                              <path
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div class="col-12 py-3 col-md-6 col-lg-6">
                        <div class="position-relative">
                          <div class="d-flex flex-column position-relative">
                            <div
                              class="js-build-in-item build-in-slideY border box-shadow-mktg-xl overflow-hidden rounded-2 position-relative left-4 z-1"
                              style="max-width: 595px; margin-top: -50%; transition-delay: 100ms;"
                            >
                              <img
                                src="https://github.githubassets.com/assets/illu-projects-2-26077f1dd188.png"
                                alt=""
                                loading="lazy"
                                decoding="async"
                                width="1190"
                                height="964"
                                class="width-full height-auto d-block"
                              />
                            </div>

                            <img
                              alt=""
                              aria-hidden="true"
                              width="1000"
                              height="1000"
                              class="position-absolute d-none d-md-block events-none js-build-in-item build-in-fade"
                              style="bottom: -300px; right: -240px; transition-delay: 200ms;"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6 mb-md-9 pb-4 js-build-in-trigger">
                      <div class="py-3 text-left col-sm-10 col-md-6 col-lg-3 js-build-in-item build-in-slideX-left">
                        <div
                          class="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
                          style="top: -1px"
                        >
                          <span class="text-gradient-mktg text-semibold">
                            Did you know?
                          </span>
                        </div>

                        <h3 class="text-accent-primary mb-2 mt-3 h1-mktg text-medium">
                          80%
                        </h3>
                        <p class="mb-3 f2-mktg text-medium col-6-max">
                          reduction in onboarding time with GitHub<sup>2</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex flex-column flex-md-row gutter js-build-in-trigger build-in-animate">
                  <div class="position-relative z-1 col-md-6 d-flex">
                    <card-skew
                      class="overflow-hidden rounded-3 mb-3 mb-md-5"
                      data-catalyst=""
                      data-perspective="700"
                    >
                      <div
                        class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                        data-target="card-skew.bounding"
                      >
                        <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                          <p class="f2-mktg text-medium color-fg-muted mb-4">
                            <em>GitHub Discussions</em> creates space to ask
                            questions and have open-ended conversations.
                          </p>

                          <div>
                            {" "}
                            <a
                              class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                              href="/features/discussions"
                              data-analytics-event='{"category":"Jump into GitHub Discussions","action":"click to Jump into GitHub Discussions","label":"ref_cta:Jump into GitHub Discussions;"}'
                            >
                              Jump into GitHub Discussions{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  class="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div class="overflow-hidden rounded-bottom-3">
                          <picture>
                            <source
                              srcset="https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=241&amp;format=webpll 241w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/webp"
                            />
                            <source
                              srcset="https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png 1208w,https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=604 604w,https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=483 483w,https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=302 302w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/png"
                            />
                            <img
                              class="width-full d-block height-auto js-build-in-item build-in-scale-up build-in-animate"
                              width="1208"
                              height="804"
                              loading="lazy"
                              decoding="async"
                              alt=""
                              aria-hidden="true"
                              src="https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png"
                            />
                          </picture>
                        </div>

                        <div
                          data-target="card-skew.shine"
                          class="position-absolute bottom-0 right-0 events-none z-n1"
                        ></div>
                      </div>{" "}
                    </card-skew>
                  </div>

                  <div class="col-md-6 d-flex">
                    <card-skew
                      class="overflow-hidden rounded-3 mb-3 mb-md-5"
                      data-catalyst=""
                      data-perspective="700"
                    >
                      <div
                        class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                        data-target="card-skew.bounding"
                      >
                        <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                          <p class="f2-mktg text-medium color-fg-muted mb-4">
                            <em>Pull requests</em> allow real-time communication
                            and collaboration about code changes.
                          </p>

                          <div>
                            {" "}
                            <a
                              class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                              href="/features/code-review"
                              data-analytics-event='{"category":"Check out pull requests","action":"click to Check out pull requests","label":"ref_cta:Check out pull requests;"}'
                            >
                              Check out pull requests{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  class="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div class="overflow-hidden rounded-bottom-3">
                          <picture>
                            <source
                              srcset="https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=241&amp;format=webpll 241w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/webp"
                            />
                            <source
                              srcset="https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png 1208w,https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=604 604w,https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=483 483w,https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=302 302w"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                              type="image/png"
                            />
                            <img
                              class="width-full d-block height-auto js-build-in-item build-in-scale-up build-in-animate"
                              width="1208"
                              height="804"
                              loading="lazy"
                              decoding="async"
                              alt=""
                              aria-hidden="true"
                              src="https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png"
                            />
                          </picture>
                        </div>

                        <div
                          data-target="card-skew.shine"
                          class="position-absolute bottom-0 right-0 events-none z-n1"
                        ></div>
                      </div>{" "}
                    </card-skew>
                  </div>
                </div>

                <card-skew
                  class="overflow-hidden rounded-3 mb-3 mb-md-5"
                  data-catalyst=""
                  data-perspective="700"
                  style="transform: perspective(700px) rotateX(-0.03deg) rotateY(-0.03deg);"
                >
                  <div
                    class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row"
                    data-target="card-skew.bounding"
                  >
                    <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
                      <p class="f2-mktg text-medium color-fg-muted mb-4">
                        <em>GitHub Sponsors</em> lets you support your favorite
                        open source maintainers and projects.
                      </p>

                      <div>
                        {" "}
                        <a
                          class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                          href="/sponsors"
                          data-analytics-event='{"category":"Invest with GitHub Sponsors","action":"click to Invest with GitHub Sponsors","label":"ref_cta:Invest with GitHub Sponsors;"}'
                        >
                          Invest with GitHub Sponsors{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                            ></path>
                            <path
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div class="overflow-hidden col-md-6 rounded-right-3">
                      <div
                        class="d-flex flex-wrap position-relative top-n12 mt-n4 right-n4 p-4 js-build-in-trigger build-in-animate"
                        style="transform: rotate(-15deg) translateZ(10px); max-height: 480px;"
                        data-build-in-stagger="75"
                      >
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/dayhaysoos"
                            style="transition-delay: 0ms;"
                          >
                            <img
                              alt="Nick DeJesus avatar"
                              width="96"
                              height="96"
                              class="d-block circle"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              Nick DeJesus
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/kazupon"
                            style="transition-delay: 75ms;"
                          >
                            <img
                              alt="kazuya kawaguchi avatar"
                              width="96"
                              height="96"
                              class="d-block circle"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/kazupon-d7aeb7b8df20.jpeg"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              kazuya kawaguchi
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/prophen"
                            style="transition-delay: 150ms;"
                          >
                            <img
                              alt="Nikema avatar"
                              width="96"
                              height="96"
                              class="d-block circle"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/prophen-da9b089d8a25.jpeg"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              Nikema
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/imolorhe"
                            style="transition-delay: 225ms;"
                          >
                            <img
                              alt="Samuel avatar"
                              width="96"
                              height="96"
                              class="d-block circle"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/imolorhe-9d771b1d4332.jpeg"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              Samuel
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/commandpost"
                            style="transition-delay: 300ms;"
                          >
                            <img
                              alt="CommandPost avatar"
                              width="96"
                              height="96"
                              class="d-block rounded"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/commandpost-18d45fffda67.png"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              CommandPost
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/homebrew"
                            style="transition-delay: 375ms;"
                          >
                            <img
                              alt="Homebrew avatar"
                              width="96"
                              height="96"
                              class="d-block rounded"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/homebrew-c7e38eeacb52.png"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              Homebrew
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/chaynhq"
                            style="transition-delay: 450ms;"
                          >
                            <img
                              alt="chaynHQ avatar"
                              width="96"
                              height="96"
                              class="d-block rounded"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/chaynhq-4c5953025dca.png"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              chaynHQ
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/yyx990803"
                            style="transition-delay: 525ms;"
                          >
                            <img
                              alt="Evan You avatar"
                              width="96"
                              height="96"
                              class="d-block circle"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              Evan You
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                        <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                          <a
                            target="_blank"
                            class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up build-in-animate"
                            tabindex="-1"
                            href="/sindresorhus"
                            style="transition-delay: 600ms;"
                          >
                            <img
                              alt="sindresorhus avatar"
                              width="96"
                              height="96"
                              class="d-block circle"
                              loading="lazy"
                              decoding="async"
                              src="https://github.githubassets.com/assets/sindresorhus-d3224f241a4d.jpeg"
                            />
                            <div class="color-fg-muted text-truncate my-2">
                              sindresorhus
                            </div>
                            <button
                              tabindex="-1"
                              type="button"
                              data-view-component="true"
                              class="Button--secondary Button--medium Button"
                            >
                              {" "}
                              <span class="Button-content">
                                <span class="Button-visual Button-leadingVisual">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                  </svg>
                                </span>
                                <span class="Button-label">Sponsor</span>
                              </span>
                            </button>
                          </a>{" "}
                        </div>
                      </div>
                    </div>

                    <div
                      data-target="card-skew.shine"
                      class="position-absolute bottom-0 right-0 events-none z-n1"
                      style="transform: translate(309.33px, -36.01px);"
                    ></div>
                  </div>{" "}
                </card-skew>
              </div>
            </div>

            <div
              class="home-campaign-footer position-relative js-section overflow-hidden"
              data-color-mode="dark"
              data-light-theme="light"
              data-dark-theme="dark"
            >
              <div class="container-xl position-relative z-2 px-3">
                <div
                  class="d-flex js-build-in-trigger"
                  data-build-in-stagger="100"
                >
                  <div class="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
                    <div
                      class="home-campaign-git-line rounded js-build-in-item build-in-scale-top"
                      style="height: 100%; background: linear-gradient(transparent, rgb(102, 57, 186) 10%, rgb(163, 113, 247), rgb(210, 168, 255)); transition-delay: 0ms;"
                    ></div>

                    <div class="mx-auto my-3 home-campaign-glowing-icon">
                      <div class="position-relative d-inline-block z-1">
                        <svg
                          aria-hidden="true"
                          height="24"
                          viewBox="0 0 24 24"
                          version="1.1"
                          width="24"
                          data-view-component="true"
                          class="octicon octicon-code"
                        >
                          <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                        <span
                          class="position-absolute left-0 bottom-0 height-full width-full home-campaign-glowing-icon-glow z-n1"
                          style="background-color: var(--mktg-accent-primary); filter: blur(17px);"
                        ></span>
                      </div>
                    </div>
                  </div>

                  <div class="col-11 ml-2 ml-md-0">
                    <div class="col-md-11 col-lg-9 py-8">
                      <h2 class="h2-mktg mb-5">
                        Over 100 million developers call GitHub home
                        <sup class="f3-mktg" style="vertical-align: super">
                          3
                        </sup>
                      </h2>
                      <p class="f3-mktg color-fg-muted">
                        Whether you’re scaling your startup or just learning how
                        to code, GitHub is your home. Join the world’s largest
                        developer platform to build the innovations that empower
                        humanity. Let’s&nbsp;build from&nbsp;here.
                      </p>
                    </div>

                    <div class="pb-2">
                      <div>
                        <label class="d-block pb-2" for="footer_user_email">
                          Email address
                        </label>
                        <div class="d-flex flex-column flex-md-row">
                          {/* <!-- '"` --><!-- </textarea></xmp> --> */}
                          <form
                            data-turbo="false"
                            class="mx-0 col-12 col-md-7 col-lg-5 js-signup-form position-relative z-2"
                            autocomplete="off"
                            action="/signup"
                            accept-charset="UTF-8"
                            method="get"
                          >
                            {" "}
                            <div class="d-flex flex-column flex-md-row flex-items-center">
                              <input
                                data-color-mode="light"
                                data-light-theme="light"
                                data-dark-theme="dark"
                                class="col-12 my-0 mb-3 mb-md-0 flex-auto form-control f4-mktg width-full rounded-md-right-0"
                                style="height: 3rem"
                                placeholder="you@company.com"
                                type="email"
                                name="user_email"
                                id="footer_user_email"
                                autocomplete="off"
                                spellcheck="false"
                                required=""
                              />
                              <input
                                type="hidden"
                                name="source"
                                value="form-home-signup"
                              />
                              <button
                                class="btn-mktg width-full width-md-auto mb-3 mb-md-0 rounded-md-left-0 home-campaign-signup-button btn-signup-mktg"
                                data-analytics-event='{"category":"Home campaign","action":"click to Sign up for GitHub","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:footer"}'
                                type="submit"
                              >
                                Sign up for GitHub
                              </button>
                            </div>
                          </form>
                          <div class="border-top border-md-left mx-md-3 mb-3 mb-md-0"></div>

                          <a
                            class="btn-mktg home-campaign-enterprise btn-muted-mktg"
                            data-analytics-event='{"category":"Start a free enterprise trial","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;"}'
                            href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&amp;ref_loc=Home+campaign+footer&amp;ref_page=%2F"
                            data-test-selector="start-trial-button"
                          >
                            Start a free enterprise trial
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill="currentColor"
                                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                              ></path>
                              <path
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="globe" class="js-globe-root">
                <div
                  class="position-relative z-2 user-select-none home-globe-scene js-webgl-globe-data events-none"
                  role="img"
                  aria-label="Millions of developers from around the world are collaborating right now, opening and merging pull requests on GitHub."
                >
                  <div class="home-globe-container home-globe-container-webgl mx-auto">
                    <div class="mx-auto width-full position-relative height-full js-webgl-globe js-webgl-globe-trigger">
                      <video
                        width="916"
                        height="918"
                        loop=""
                        muted=""
                        playsinline=""
                        preload="none"
                        class="home-globe-container-video js-globe-fallback-video "
                        hidden=""
                      >
                        <source
                          type="video/mp4; codecs=hevc,mp4a.40.2"
                          src="https://github.githubassets.com/assets/globe-900.hevc-58019d77b21c.mp4"
                        />
                        <source
                          type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                          src="https://github.githubassets.com/assets/globe-900.h264-975e7b5ac572.mp4"
                        />
                      </video>
                      <video
                        loop=""
                        muted=""
                        playsinline=""
                        preload="none"
                        class="home-globe-container-video js-globe-fallback-video-small"
                        hidden=""
                      >
                        <source
                          type="video/mp4; codecs=hevc,mp4a.40.2"
                          src="https://github.githubassets.com/assets/globe-500.hevc-42032a395ff1.mp4"
                        />
                        <source
                          type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                          src="https://github.githubassets.com/assets/globe-500.h264-f00ceaddc706.mp4"
                        />
                      </video>
                      <img
                        srcset="https://github.githubassets.com/assets/globe-700-7504469d0f87.jpg 700w,
                  https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg 1400w"
                        sizes="(max-width: 700px) 70vw, 700px"
                        src="https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg"
                        alt="Planet earth with visualization of GitHub activity crossing the globe"
                        class="width-full height-auto js-globe-fallback-image"
                        loading="lazy"
                        decoding="async"
                        width="1238"
                        height="1404"
                        hidden=""
                      />

                      <canvas
                        width="2516"
                        height="801"
                        class="webgl-canvas js-globe-canvas"
                        style="display: block; width: 2826.11px; height: 900px;"
                      ></canvas>
                    </div>

                    <img
                      alt=""
                      aria-hidden="true"
                      width="150"
                      height="150"
                      style="left: 0; top: 30%;"
                      class="d-none d-md-block position-absolute home-footer-float z-1"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/footer-copilot-54114bfd1d20.png"
                    />

                    <img
                      alt=""
                      aria-hidden="true"
                      width="200"
                      height="200"
                      style="right: 5%; top: 50%; animation-delay: 1s;"
                      class="d-none d-md-block position-absolute home-footer-float z-2"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/footer-mona-d1c861cd8018.png"
                    />

                    <img
                      alt=""
                      aria-hidden="true"
                      width="48"
                      height="48"
                      style="left: -5%; top: 50%;"
                      class="d-none d-md-block position-absolute home-footer-rotate"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/footer-star-36e5b5724973.png"
                    />

                    <img
                      alt=""
                      aria-hidden="true"
                      width="50"
                      height="50"
                      style="right: 10%; top: 20%;"
                      class="d-none d-md-block position-absolute home-footer-rotate"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/footer-diamond-ed642fc95144.png"
                    />

                    <img
                      alt=""
                      aria-hidden="true"
                      width="98"
                      height="90"
                      style="right: -10%; top: 30%;"
                      class="d-none d-md-block position-absolute home-footer-float"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/footer-orb-a0438104a7a2.png"
                    />

                    <img
                      alt=""
                      aria-hidden="true"
                      width="64"
                      height="64"
                      style="left: 10%; top: 70%; animation-delay: 2s;"
                      class="d-none d-md-block position-absolute home-footer-float"
                      loading="lazy"
                      decoding="async"
                      src="https://github.githubassets.com/assets/footer-blur-8bc8e1f23df6.png"
                    />
                  </div>

                  <video
                    loop=""
                    muted=""
                    playsinline=""
                    preload="none"
                    class="js-globe-aurora position-absolute top-0 left-0 right-0"
                    style="margin: auto; z-index: -1; min-width: 100%; min-height: 100%; -webkit-mask-image: -webkit-linear-gradient(transparent, #000 20%, transparent 90%);"
                    hidden=""
                  >
                    <source
                      type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                      src="https://github.githubassets.com/assets/aurora.h264-25af1afc4e69.mp4"
                    />
                  </video>
                  <div
                    class="data-info position-absolute top-0 left-0 rounded text-mono f6 py-3 pl-2 pr-5 z-3 js-globe-popup text-white d-none"
                    style="max-width: 450px; background-color: rgba(0, 0, 0, 0.4); backdrop-filter: blur(10px);"
                  >
                    <a class="js-globe-popover-card no-underline d-flex flex-row flex-items-start">
                      <div class="pr-2 pt-1 pl-2">
                        <img
                          src="https://github.githubassets.com/images/modules/site/home/globe/pull-request-icon.svg"
                          aria-hidden="true"
                          class="js-globe-popup-icon-pr"
                          loading="lazy"
                        />
                        <img
                          src="https://github.githubassets.com/images/modules/site/home/globe/north-star.svg"
                          aria-hidden="true"
                          class="js-globe-popup-icon-acv mt-n1 d-none"
                          width="24"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <div class="f4 color-text-white js-globe-popover-header">
                          #34234 facebook/react
                        </div>
                        <div
                          style="color: #959da5"
                          class="js-globe-popover-body"
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="text-center position-relative z-3 mt-5 mb-7">
                  <button
                    type="button"
                    class="f4-mktg js-animation-pause-toggle js-globe-pause-toggle animation-pause-toggle rounded-2"
                    data-target-id="globe"
                    aria-pressed="false"
                    data-pause-aria-label="Globe is curently animating. Click to pause animation."
                    data-play-aria-label="Globe is paused. Click to play animation."
                    aria-label="Globe is curently animating. Click to pause animation."
                  >
                    <span class="animation-toggle-pause-label">Pause</span>
                    <span class="animation-toggle-play-label">Play</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="container-xl p-responsive"
              data-dark-theme="dark"
              data-color-mode="dark"
            >
              <ul class="list-style-none col-lg-9 color-fg-muted f5">
                <li class="mb-3">
                  <sup id="footnote-1">1</sup> This 7X times factor is based on
                  data from the industry’s longest running analysis of fix rates
                  Veracode State of Software Security 2023, which cites the
                  average time to fix 50% of flaws as 198 days vs. GitHub’s fix
                  rates of 72% of flaws with in 28 days which is at a minimum of
                  7X faster when compared.
                </li>
                <li class="mb-3">
                  <sup id="footnote-2">2</sup> The Total Economic Impact™ Of
                  GitHub Enterprise Cloud and Advanced Security, a commissioned
                  study conducted by Forrester Consulting, 2022. Results are for
                  a composite organization based on interviewed customers.
                </li>
                <li class="mb-3">
                  <sup id="footnote-3">3</sup> There are now 100 million
                  developers around the world using GitHub.{" "}
                  <a
                    href="https://github.blog/2023-01-25-100-million-developers-and-counting/"
                    class="color-fg-muted text-underline"
                    target="_blank"
                  >
                    Read the blog post
                  </a>
                  .
                </li>
              </ul>
            </div>
          </main>
        </div>

        <footer
          role="contentinfo"
          class="footer pt-6 position-relative"
          data-analytics-visible='{"category":"Footer","action":"visible","label":"text: Marketing footer"}'
          data-color-mode="dark"
          data-dark-theme="dark"
        >
          <h2 class="sr-only">Site-wide Links</h2>
          <div class="container-xl p-responsive">
            <div class="d-flex flex-wrap py-5 mb-5">
              <section class="col-12 col-lg-4 mb-5">
                <a
                  href="/"
                  data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
                  class="color-fg-default d-inline-block"
                  aria-label="Go to GitHub homepage"
                >
                  <svg
                    height="30"
                    aria-hidden="true"
                    viewBox="0 0 68 24"
                    version="1.1"
                    width="85"
                    data-view-component="true"
                    class="octicon octicon-logo-github footer-logo-mktg width-auto d-block"
                  >
                    <path d="M27.8 17.908h-.03c.013 0 .022.014.035.017l.01-.002-.016-.015Zm.005.017c-.14.001-.49.073-.861.073-1.17 0-1.575-.536-1.575-1.234v-4.652h2.385c.135 0 .24-.12.24-.283V9.302c0-.133-.12-.252-.24-.252H25.37V5.913c0-.119-.075-.193-.21-.193h-3.24c-.136 0-.21.074-.21.193V9.14s-1.636.401-1.741.416a.255.255 0 0 0-.195.253v2.021c0 .164.12.282.255.282h1.665v4.876c0 3.627 2.55 3.998 4.29 3.998.796 0 1.756-.252 1.906-.327.09-.03.135-.134.135-.238v-2.23a.264.264 0 0 0-.219-.265Zm35.549-3.272c0-2.69-1.095-3.047-2.25-2.928-.9.06-1.62.505-1.62.505v5.232s.735.506 1.83.536c1.545.044 2.04-.506 2.04-3.345ZM67 14.415c0 5.099-1.665 6.555-4.576 6.555-2.46 0-3.78-1.233-3.78-1.233s-.06.683-.135.773c-.045.089-.12.118-.21.118h-2.22c-.15 0-.286-.119-.286-.252l.03-16.514a.26.26 0 0 1 .255-.252h3.196a.26.26 0 0 1 .255.252v5.604s1.23-.788 3.03-.788l-.015-.03c1.8 0 4.456.67 4.456 5.767ZM53.918 9.05h-3.15c-.165 0-.255.119-.255.282v8.086s-.826.58-1.95.58c-1.126 0-1.456-.506-1.456-1.62v-7.06a.262.262 0 0 0-.255-.254h-3.21a.262.262 0 0 0-.256.253v7.596c0 3.27 1.846 4.087 4.381 4.087 2.085 0 3.78-1.145 3.78-1.145s.076.58.12.67c.03.074.136.133.24.133h2.011a.243.243 0 0 0 .255-.253l.03-11.103c0-.133-.12-.252-.285-.252Zm-35.556-.015h-3.195c-.135 0-.255.134-.255.297v10.91c0 .297.195.401.45.401h2.88c.3 0 .375-.134.375-.401V9.287a.262.262 0 0 0-.255-.252ZM16.787 4.01c-1.155 0-2.07.907-2.07 2.051 0 1.145.915 2.051 2.07 2.051a2.04 2.04 0 0 0 2.04-2.05 2.04 2.04 0 0 0-2.04-2.052Zm24.74-.372H38.36a.262.262 0 0 0-.255.253v6.08H33.14v-6.08a.262.262 0 0 0-.255-.253h-3.196a.262.262 0 0 0-.255.253v16.514c0 .133.135.252.255.252h3.196a.262.262 0 0 0 .255-.253v-7.06h4.966l-.03 7.06c0 .134.12.253.255.253h3.195a.262.262 0 0 0 .255-.253V3.892a.262.262 0 0 0-.255-.253Zm-28.31 7.313v8.532c0 .06-.015.163-.09.193 0 0-1.875 1.323-4.966 1.323C4.426 21 0 19.84 0 12.2S3.87 2.986 7.651 3c3.27 0 4.59.728 4.8.862.06.075.09.134.09.208l-.63 2.646c0 .134-.134.297-.3.253-.54-.164-1.35-.49-3.255-.49-2.205 0-4.575.623-4.575 5.543s2.25 5.5 3.87 5.5c1.38 0 1.875-.164 1.875-.164V13.94H7.321c-.165 0-.285-.12-.285-.253v-2.735c0-.134.12-.252.285-.252h5.61c.166 0 .286.118.286.252Z"></path>
                  </svg>
                </a>

                <h3 class="h5 mt-4 mb-0" id="subscribe-to-newsletter">
                  Subscribe to our developer newsletter
                </h3>
                <p class="f5 color-fg-muted mb-3">
                  Get tips, technical guides, and best practices. Twice a month.
                  Right in your inbox.
                </p>
                <a
                  class="btn-mktg mb-4 btn-muted-mktg"
                  data-analytics-event='{"category":"Subscribe","action":"click to Subscribe","label":"ref_cta:Subscribe;"}'
                  href="https://resources.github.com/newsletter/"
                >
                  Subscribe
                </a>
              </section>

              <nav
                class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-lg-0 pl-lg-4"
                aria-labelledby="footer-title-product"
              >
                <h3
                  class="h5 mb-3 text-mono color-fg-muted text-normal"
                  id="footer-title-product"
                >
                  Product
                </h3>

                <ul class="list-style-none color-fg-muted f5">
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"features","context":"product","tag":"link","label":"features_link_product_footer"}'
                      href="/features"
                    >
                      Features
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"enterprise","context":"product","tag":"link","label":"enterprise_link_product_footer"}'
                      href="/enterprise"
                    >
                      Enterprise
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"copilot","context":"product","tag":"link","label":"copilot_link_product_footer"}'
                      href="/features/copilot"
                    >
                      Copilot
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"security","context":"product","tag":"link","label":"security_link_product_footer"}'
                      href="/security"
                    >
                      Security
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"pricing","context":"product","tag":"link","label":"pricing_link_product_footer"}'
                      href="/pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"team","context":"product","tag":"link","label":"team_link_product_footer"}'
                      href="/team"
                    >
                      Team
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"resources","context":"product","tag":"link","label":"resources_link_product_footer"}'
                      href="https://resources.github.com"
                    >
                      Resources
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"roadmap","context":"product","tag":"link","label":"roadmap_link_product_footer"}'
                      href="https://github.com/github/roadmap"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"compare","context":"product","tag":"link","label":"compare_link_product_footer"}'
                      href="https://resources.github.com/devops/tools/compare"
                    >
                      Compare GitHub
                    </a>
                  </li>
                </ul>
              </nav>

              <nav
                class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4"
                aria-labelledby="footer-title-platform"
              >
                <h3
                  class="h5 mb-3 text-mono color-fg-muted text-normal"
                  id="footer-title-platform"
                >
                  Platform
                </h3>

                <ul class="list-style-none f5">
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"dev-api","context":"platform","tag":"link","label":"dev-api_link_platform_footer"}'
                      href="https://docs.github.com/get-started/exploring-integrations/about-building-integrations"
                    >
                      Developer API
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"partners","context":"platform","tag":"link","label":"partners_link_platform_footer"}'
                      href="https://partner.github.com"
                    >
                      Partners
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"edu","context":"platform","tag":"link","label":"edu_link_platform_footer"}'
                      href="https://github.com/edu"
                    >
                      Education
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"cli","context":"platform","tag":"link","label":"cli_link_platform_footer"}'
                      href="https://cli.github.com"
                    >
                      GitHub CLI
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"desktop","context":"platform","tag":"link","label":"desktop_link_platform_footer"}'
                      href="https://desktop.github.com"
                    >
                      GitHub Desktop
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"mobile","context":"platform","tag":"link","label":"mobile_link_platform_footer"}'
                      href="https://github.com/mobile"
                    >
                      GitHub Mobile
                    </a>
                  </li>
                </ul>
              </nav>

              <nav
                class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4"
                aria-labelledby="footer-title-support"
              >
                <h3
                  class="h5 mb-3 text-mono color-fg-muted text-normal"
                  id="footer-title-support"
                >
                  Support
                </h3>

                <ul class="list-style-none f5">
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"docs","context":"support","tag":"link","label":"docs_link_support_footer"}'
                      href="https://docs.github.com"
                    >
                      Docs
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"community","context":"support","tag":"link","label":"community_link_support_footer"}'
                      href="https://github.community"
                    >
                      Community Forum
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"services","context":"support","tag":"link","label":"services_link_support_footer"}'
                      href="https://services.github.com"
                    >
                      Professional Services
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"premium_support","context":"support","tag":"link","label":"premium_support_link_support_footer"}'
                      href="/enterprise/premium-support"
                    >
                      Premium Support
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"skills","context":"support","tag":"link","label":"skills_link_support_footer"}'
                      href="https://skills.github.com"
                    >
                      Skills
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"status","context":"support","tag":"link","label":"status_link_support_footer"}'
                      href="https://www.githubstatus.com"
                    >
                      Status
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"contact_github","context":"support","tag":"link","label":"contact_github_link_support_footer"}'
                      href="https://support.github.com?tags=dotcom-footer"
                    >
                      Contact GitHub
                    </a>
                  </li>
                </ul>
              </nav>

              <nav
                class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4"
                aria-labelledby="footer-title-company"
              >
                <h3
                  class="h5 mb-3 text-mono color-fg-muted text-normal"
                  id="footer-title-company"
                >
                  Company
                </h3>

                <ul class="list-style-none f5">
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"about","context":"company","tag":"link","label":"about_link_company_footer"}'
                      href="https://github.com/about"
                    >
                      About
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"customer_stories","context":"company","tag":"link","label":"customer_stories_link_company_footer"}'
                      href="/customer-stories?type=enterprise"
                    >
                      Customer stories
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"blog","context":"company","tag":"link","label":"blog_link_company_footer"}'
                      href="https://github.blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"readme","context":"company","tag":"link","label":"readme_link_company_footer"}'
                      href="/readme"
                    >
                      The ReadME Project
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"careers","context":"company","tag":"link","label":"careers_link_company_footer"}'
                      href="https://github.careers"
                    >
                      Careers
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"newsroom","context":"company","tag":"link","label":"newsroom_link_company_footer"}'
                      href="/newsroom"
                    >
                      Newsroom
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"inclusion","context":"company","tag":"link","label":"inclusion_link_company_footer"}'
                      href="/about/diversity"
                    >
                      Inclusion
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"social_impact","context":"company","tag":"link","label":"social_impact_link_company_footer"}'
                      href="https://socialimpact.github.com"
                    >
                      Social Impact
                    </a>
                  </li>
                  <li class="lh-condensed mb-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"shop","context":"company","tag":"link","label":"shop_link_company_footer"}'
                      href="https://shop.github.com"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="color-bg-subtle">
            <div class="container-xl p-responsive f6 py-4 d-md-flex flex-justify-between flex-items-center">
              <nav aria-label="Legal and Resource Links">
                <ul class="list-style-none d-flex flex-wrap color-fg-muted">
                  <li class="mr-3">
                    © <time datetime="2024">2024</time> GitHub, Inc.
                  </li>

                  <li class="mr-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"terms","context":"subfooter","tag":"link","label":"terms_link_subfooter_footer"}'
                      href="https://docs.github.com/site-policy/github-terms/github-terms-of-service"
                    >
                      Terms
                    </a>
                  </li>

                  <li class="mr-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"privacy","context":"subfooter","tag":"link","label":"privacy_link_subfooter_footer"}'
                      href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
                    >
                      Privacy
                    </a>
                    (
                    <a
                      href="https://github.com/github/site-policy/pull/582"
                      class="Link--secondary"
                    >
                      Updated <time datetime="2022-08">08/2022</time>
                    </a>
                    )
                  </li>

                  <li class="mr-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"sitemap","context":"subfooter","tag":"link","label":"sitemap_link_subfooter_footer"}'
                      href="/sitemap"
                    >
                      Sitemap
                    </a>
                  </li>

                  <li class="mr-3">
                    <a
                      class="Link--secondary"
                      data-analytics-event='{"location":"footer","action":"what_is_git","context":"subfooter","tag":"link","label":"what_is_git_link_subfooter_footer"}'
                      href="/git-guides"
                    >
                      What is Git?
                    </a>
                  </li>

                  <li class="mr-3">
                    <cookie-consent-link data-catalyst="">
                      <button
                        type="button"
                        class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent"
                        data-action="click:cookie-consent-link#showConsentManagement"
                        data-analytics-event='{"location":"footer","action":"cookies","context":"subfooter","tag":"link","label":"cookies_link_subfooter_footer"}'
                      >
                        Manage cookies
                      </button>
                    </cookie-consent-link>
                  </li>

                  <li class="mr-3">
                    <cookie-consent-link data-catalyst="">
                      <button
                        type="button"
                        class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent"
                        data-action="click:cookie-consent-link#showConsentManagement"
                        data-analytics-event='{"location":"footer","action":"dont_share_info","context":"subfooter","tag":"link","label":"dont_share_info_link_subfooter_footer"}'
                      >
                        Do not share my personal information
                      </button>
                    </cookie-consent-link>
                  </li>
                </ul>
              </nav>

              <nav
                aria-label="GitHub's Social Media Links"
                class="mt-3 mt-md-0"
              >
                <ul class="list-style-none d-flex flex-items-center lh-condensed-ultra">
                  <li class="ml-md-3">
                    <a
                      href="https://x.com/github"
                      class="footer-social-icon d-block Link--outlineOffset"
                      data-analytics-event='{"category":"Footer","action":"go to X","label":"text:text:x"}'
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 1227"
                        fill="currentColor"
                        aria-hidden="true"
                        class="d-block"
                        width="16"
                        height="16"
                      >
                        <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
                      </svg>

                      <span class="sr-only">GitHub on X</span>
                    </a>
                  </li>
                  <li class="ml-3">
                    <a
                      href="https://www.facebook.com/GitHub"
                      class="footer-social-icon d-block Link--outlineOffset"
                      data-analytics-event='{"category":"Footer","action":"go to Facebook","label":"text:text:facebook"}'
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15.3 15.4"
                        aria-hidden="true"
                        class="d-block"
                        width="18"
                        height="18"
                      >
                        <path
                          d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">GitHub on Facebook</span>
                    </a>
                  </li>
                  <li class="ml-3">
                    <a
                      href="https://www.linkedin.com/company/github"
                      class="footer-social-icon d-block Link--outlineOffset"
                      data-analytics-event='{"category":"Footer","action":"go to Linkedin","label":"text:text:linkedin"}'
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19 18"
                        aria-hidden="true"
                        class="d-block"
                        width="19"
                        height="18"
                      >
                        <path
                          d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">GitHub on LinkedIn</span>
                    </a>
                  </li>
                  <li class="ml-3">
                    <a
                      href="https://www.youtube.com/github"
                      class="footer-social-icon d-block Link--outlineOffset"
                      data-analytics-event='{"category":"Footer","action":"go to YouTube","label":"text:text:youtube"}'
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.17 13.6"
                        aria-hidden="true"
                        class="d-block"
                        width="23"
                        height="16"
                      >
                        <path
                          d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">GitHub on YouTube</span>
                    </a>
                  </li>
                  <li class="ml-3">
                    <a
                      href="https://www.twitch.tv/github"
                      class="footer-social-icon d-block Link--outlineOffset"
                      data-analytics-event='{"category":"Footer","action":"go to Twitch","label":"text:text:twitch"}'
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="d-block"
                        width="18"
                        height="18"
                      >
                        <title>Twitch</title>
                        <path
                          d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">GitHub on Twitch</span>
                    </a>
                  </li>
                  <li class="ml-3">
                    <a
                      href="https://www.tiktok.com/@github"
                      class="footer-social-icon d-block Link--outlineOffset"
                      data-analytics-event='{"category":"Footer","action":"go to tiktok","label":"text:text:tiktok"}'
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="d-block"
                        width="18"
                        height="18"
                      >
                        <title>TikTok</title>
                        <path
                          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span class="sr-only">GitHub on TikTok</span>
                    </a>
                  </li>
                  <li class="ml-3">
                    <a
                      href="https://github.com/github"
                      class="footer-social-icon d-block Link--outlineOffset"
                      data-analytics-event='{"category":"Footer","action":"go to github&apos;s org","label":"text:text:github"}'
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 16 16"
                        width="20"
                        aria-hidden="true"
                        class="d-block"
                      >
                        <path
                          fill="currentColor"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>

                      <span class="sr-only">
                        GitHub’s organization on GitHub
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>

        <fullstory-capture
          data-fs-script-domain="https://github.githubassets.com"
          data-catalyst=""
        ></fullstory-capture>

        <ghcc-consent
          id="ghcc"
          class="position-fixed bottom-0 left-0"
          style="z-index: 999999"
          data-initial-cookie-consent-allowed=""
          data-cookie-consent-required="true"
          data-catalyst=""
        ></ghcc-consent>

        <div
          id="ajax-error-message"
          class="ajax-error-message flash flash-error"
          hidden=""
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-alert"
          >
            <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
          </svg>
          <button
            type="button"
            class="flash-close js-ajax-error-dismiss"
            aria-label="Dismiss error"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-x"
            >
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
          </button>
          You can’t perform that action at this time.
        </div>

        <template id="site-details-dialog">
          <details
            class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm"
            open=""
          >
            <summary role="button" aria-label="Close dialog"></summary>
            <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
              <button
                class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0"
                type="button"
                aria-label="Close dialog"
                data-close-dialog=""
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-x"
                >
                  <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
              </button>
              <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
            </details-dialog>
          </details>
        </template>

        <div
          class="Popover js-hovercard-content position-absolute"
          style="display: none; outline: none;"
        >
          <div
            class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large"
            style="width:360px;"
          ></div>
        </div>

        <template id="snippet-clipboard-copy-button">
          <div class="zeroclipboard-container position-absolute right-0 top-0">
            <clipboard-copy
              aria-label="Copy"
              class="ClipboardButton btn js-clipboard-copy m-2 p-0"
              data-copy-feedback="Copied!"
              data-tooltip-direction="w"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-copy js-clipboard-copy-icon m-2"
              >
                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
              </svg>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2"
              >
                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
            </clipboard-copy>
          </div>
        </template>
        <template id="snippet-clipboard-copy-button-unpositioned">
          <div class="zeroclipboard-container">
            <clipboard-copy
              aria-label="Copy"
              class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 d-flex flex-justify-center flex-items-center"
              data-copy-feedback="Copied!"
              data-tooltip-direction="w"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-copy js-clipboard-copy-icon"
              >
                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
              </svg>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none"
              >
                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
            </clipboard-copy>
          </div>
        </template>
      </div>
    </>
  );
}

export default App;