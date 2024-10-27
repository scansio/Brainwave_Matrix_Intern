import Reblend from "reblendjs";

function LatestArticles() {
  return (
    <div class="nc-PageHome relative mt-10" >
      <div
        class="nc-SectionLatestPosts relative pb-16 lg:pb-28"
        
      >
        <div class="flex flex-col lg:flex-row" >
          <div class="w-full lg:w-3/5 xl:w-2/3 xl:pr-14" >
            <div
              class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
              
            >
              <div class="max-w-2xl" >
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Latest Articles 🎈
                </h2>
                <span class="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                  Discover the most outstanding articles in all topics of life.{" "}
                </span>
              </div>
            </div>
            <div class="grid gap-6 md:gap-8 " >
              <div
                class="nc-Card3 relative flex flex-row items-center group py-3"
                
              >
                <div class="flex flex-col flex-grow" >
                  <div class="space-y-3.5" >
                    <div
                      class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                      
                    >
                      <a
                        class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                        href="/archive/the-demo-archive-slug"
                      >
                        Electronics
                      </a>
                    </div>
                    <a class="block" href="/single/this-is-single-slug">
                      <h2 class="nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg">
                        <span
                          class="line-clamp-2"
                          title="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities"
                        >
                          Microsoft announces a five-year commitment to create
                          bigger opportunities for people with disabilities
                        </span>
                      </h2>
                      <div class="hidden sm:block sm:mt-2" >
                        <span class="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                          Duis bibendum. Morbi non quam nec dui luctus rutrum.
                          Nulla tellus.
                        </span>
                      </div>
                    </a>
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
                          <img
                            sizes="100px"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkJCggKCAsLCQsKCwsLDhAMCgsNExcVEBQPFhISDhYSDxQPDxQSFBgTFhQZIBoeGRgrIRwkExwdMiIzKjclIjABBgsKCw0OCwwMDg4MDRAOHRQNDCIUFRcOHggXDBAWEBEXCxATFAsRGREeCRkMCCIYHRQPHRANDA8WEAsUFSMWGP/AABEIAQAArAMBIgACEQEDEQH/xAClAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwgQAAIBAwIDBQUFBgYCAgMAAAECAwAEERIhBTFBEyJRYXEGMoGRoRRCcrHBIzNSYrLRBxUkc4LCQ1Ph8SWi8AEAAgMBAQAAAAAAAAAAAAAAAwQAAgUBBhEAAQMCBAMGBQMEAwAAAAAAAQACEQMhEjFBUWFx8AQigaGxwRMyQnKRYtHhI1KSooKy8f/aAAwDAQACEQMRAD8A5WKXikBlpYZaRRCUdHii1LR6lqKqVQpOtaGtaiiVQpOtaIyxqCWIAqLqcOwzyAqFJexr7u58v1JqJNNLM250pyCjYUXYxIP2h9DTDWbqFG11cOe53R5UpVvZTsZT8TSY544TsurA6jbNTIr922ZzD5rsp/4riiQNApJSDFfwKGkE4/EjFfnTsdwDtJsfEf8AYcxVna8QmVgFu8k9NRwR6Omk1MuEtJ4u0urfsSx7l5BjTnz0/sz8gaXPEeP8IwAKqNjuCD6UVPy2TwgOrgo3uTLuh8nHNTUcFtRVxhh0qiG5sIUk0vFERUVE2aRThFJNdUTRpttjTxpthvVlEkK1LCNTyinAK7K4o+hqGhqlUMVWVFG0NR6GqTigRXJXVGEbHYZJ6Ac6RILWLa4cvKOUMe6r+Mg4J8gaK4uGUNFCcbYkf9BTVlAsr40FzRADrZFFshJ3T4EHZdpEdWfubZHqDvSII3nSSdwexh6eJ/hNOT28PRRt1TAHxJq/9n4o7mC5tCiHUuQepI5A9DRSYCqGyVmLSVTcapQmCdgSwUdeSK1axIOGSoNdtbtnqupfkGRPzqrk4NxKGZuxjAIJ9aOK24vGSezldqTe4mC0gJ+nTEQ8FOT8CjbW1jKzKNzC3vL6E4Jqpj/zGynKrLLE3XB7rDzDd1x4girVOI3drIF4hCzRk++ow6+amry4ht762SZGV0faGYbd7+CT+FqgquEB8EHI/wAqrqLTdmn5/CprW+CgpOkadp3WwP2D+Tr/AOM+BXalXNphO1t+9Ep0lW9+Nj9xz1U/daoUsDQE617u6uviP0IqXw+5KyLA7Z1DTbyH3WU/+KT9Ku6125Ko2dmoQ3H5jqDRVNuIQHZ4xgZ0yIeYPnUWqAylHNgpvFJIp0ikkVdCTJFNMN6kkUw471WCieApykinQK4ok4pVKxR4qqiTiktnScEA/wAR5AeNPKpJwKL7Mbh9AOVH7wj3fTNULgLkwmKbC5wAEqrt7R7qTKkRwL70z/p/Exq61wRRCCzj7p99j7zHxY/pyFPumIgARDBGNmO2o/yDov50iwge7uUgj5SH4lR1PUDyoXxMUnQaLV+GGwBGIp+y4dxC+mVUA09WxXTuF+zdpbBGbJlFWPD7KG0iRIlAGNzV7EN6TL3POw2TOFoyHiowsLbHeRSTzaibh1qV2Rc1abUeBV8KriWL4lwCzuUIdAMjYAbVgTYS8DvG2L2E50XkPgOjr5pXbJFDDesrxu1R4W26GhGRy1HXkjNg556Fc/4pZ6Dr2cHTh+hQ7K/6H4GsRcRPCX0bqTkDqrCujWrCe3ktZO9Jbg6QesROCB6VleKWzxr2ijvo2k46sNwT5ONqcoPkYTmFn1mYTbJNRzm4thcgZliAS7Xo6ePxH1FMyIqtlDqRgGRvI0mzKRXJAx2Uowy9NDbj5UGDRFoSc9kx0+ac6KM+skq9shIxREU6RScUZZ6aIpiQd74VKIpiQd4eldCimiBxRFcGrp2i3wKrZipbajFohADzKj4owKXilKMsBS6MlxpJKyxQKNTEL/8ALGpV7Pb8Nt+zh0yOuAWb70h5s/kvQVdWsK2XD57sgGT9zCDyDtzPwFY7iRjj7LtSS+Xlx5khR/TWVPxKgabtGnFehpNwUydd1GzNM4ed3kd/dDf25Kora+xtuJ7yW5wTHF3FY/pXPjO7ApEC0ku2a7f7PWSWHBbdDs2kPKfMjJpirLW7EmI/TrbyCvTwuJi8DP8AVoPdadPLep8IbqKzKXPHrgf/AI6w7JOayXLBWb8KE1Ig4zc2zdnxuxmtvC5jGuP/AJlCcUAMOasX6LUUkk01BcW1xGHt5UlQ9VNOE5NXlVCKqjiKaozVuSKg3aZiYnAGOZqjskQGDK5LJJ9j4rDKThDKYZvwPlfocU7f24YyR80kXs8eY3U/QimuK2+pboB1Y5DKF3OQf0JFPLMZrRX++EDMBzxyYD06ehoYdhc05TY+3qrVBiBWNu4WSNHxh4iVIHrSpmDpFMCNQwHPljrVpepqWQjqBKv/ABIJqnAK64TyOQKfmYKzyNE4oyvptRkUmAhlp40yFjvEOI/HJMkVGlHeHpUwio0w749KuqKxAPiaaI3qUBTLDejFACTiplnHmTXjOndR4npUbFXPDkH2gD7oH1J/QClX2BTNMS4K44hCfsFvCvJO1kb12H/aue8YQ/a0LjI7NdI+bV1ORVlsHPWNnRj5NpI+hrB8SVe2i1YOIVH0FZNCfiE8/VeiN2FqqeDWs08xlC/ujq09AAM713uxVXto8fwiuV+yFzY23Eby3v3jh+0ovYPLsmxJYZNdS4YQIBpIYH3WHIjxFGrEl/oi0gMEZlZz2ls/aeeSL7DcPDbBgJmhz2oXyqkh4Zeo5ht+JcTDtJvfysdATIwHhbc7ZrrqAFfEUZhib7oorHECIEILmtJ+oHgbfhYfhkEqyanVkubdtM00SlEkXo+g7YetoA5XV0xnIpx1RYSMCmpW02JPXGKA4XPKYRJ9YWV4vxuaBjFZAtJkICFyS55KnTNYK7u+Oyu3+YwXsnfMbWqTqsoOrR7ipXW4bKzkgTtIo3YZIYjcE8yD41W3fA7aRtcUkkUg91194ehIJo7C1ok3Pt4XQnNxWHd3ndcpspeEvc4t/tUMpDLPbTnLKcNkZI8vpUtA0DPHsCudJ/lY5HyJ/wD3qVf8BXhd0bsM7Nr1u7nJNH2QuYTpHfUHR5ryxSVZwNxMecpqm0gQY56Kqca42K8172k+G+QfqKprlGjnyDyVGI8v/oVNDyRzlX3cnSw9eR+ON6auiNKddLdmD5HdaYpnJLvaq2AhXO/UnH0NWGKpXYowcdGIf0yVNXSHVEp+B+G1aLVi1hkUjFRph3x6VNIqJN749KIk1bAUw43qWBUdxvTJS6TjatBwtQwZ/LHxGTVEBVtwecx3L25GUuFIXykA/UbUlVHdPVk5RMPbO/mtHYHWt7aNzMCyL+IbViOMK5lgVdv2CgnqTllP5VooZzFxnPIzQ6FHmdJHyYCmuP2yiWBhydCyfFi+PgWrHa7C9ejaJEbhc34gmlEJ5n9NjXefZxy/AeHP428f0UCuJcUTuMOqnUBXX/YmVbj2XtCu5hLwP6hs/kRT9cyxp2d7INLu1HDdvv8Ayt5E1PahUGNgACadUayC3ujpSofZOEDNCR9RwKVMNVsV8qjzGWI6ooxImcsM4Io5eIWaw6tyx2EY97NcBzkrhHywJSbKTmh5ipxIqnttb5kdezY7ovUDzqW0wC786jXRYq2GSsb7ZzLHYS78xjNZu2LpDAV3ZFUn48waP23u/tF1Z2EW5lkXtPnUjQNblNlRSw+AC7+uaG8dydzPgiFwnCNB/sVS8dti0YvLXu7aj8PGqaV+1gSUDuvgso6Hn+dasK0nDAr9WdT8Qf7/AErHxqyIY+ap0rlKY+0/6nqQhOInmFBnQZZOhf6HerK0z2GG5qcH5Co2nV7+4AHyGCKmW4ILk/8Ak7wHlsK2G6LDriycIqHOO+PT9TU4iolx749P1NMLLCthTDjepApmTnTCCiFGCUIZThgQwPgRRUZoUIgKsOMyANbXsO2kpIo/MGrri7LecGguYxvbk5I6BgCDWex29hJCfuhsD6j61a8BlFxw17Z8ntFeLB8Ruv515iqC0kHNpg/ZEtPl5r1tMh7GPHPx1H5WK4ivaprXmB3xWk/w84slpfzcLncLFeHXbE9JgMY/5r/TWdcFZFRtxrMLj1/sRVDMHinQozI6HKsNiGB2II5EVp0xjaaZOkg9cvwVSqIio3MHLgdPNep1UFcHmDUK8u72xXWlo13Bt+6YCRfxK2Bj0NQPZ7ib8R4bby3G0+gCbzbxq/ZdQKnrSDeN0yIm+WoTCXN5NHqgtRKu/uuCdvEHBqG91MoL/wCVXGfvuwAAx5mlsrQMWKMfBoyVb6VGlmlkTRHBK3nK3dHwrQ/oEC490y1uwpObvLgY4gPv5KKnGYrm4Nvb2t00yY1gLlOn3wdH1p++cQQPLI2gAbDrmjtla1jIJy5+VYf2l4q804sLVtUmP2rDkg8aRLQ4w2Y9kF2EOOD5d758jcTosskpvfaJ7pv3dtrOf5sED5ZrXoGewlbJBmREXxySzn6KKzaQpb2hWNebhCx5sxrZWEarbxvPgIoMx9MBVA9QD86o90ugZAR4a/mVQjC2dSZ8f4hQ3jaKxmR9zAYj8WzWQSIHtW3zk1qZ5mbh8kkhAa+u1VV8EUgfqKpYF2kB6OflqziiUoGIbhBcqye2VLmFU21xLrHnppZXBHltT0xPbhie7qYKfDnROBsRWkzNZNfIJo1DuPfH4f1NTTzqFce+Pw/qadWQrdaYfnTy009HQkVHg0DsBmnFVn5A4HM0I2RQNrnZCJuyctzGk/3qTwpmiMLjk9wm38pJz9GqreYSv9ntgWklIiBHIA8zV5BGpvYIY/dhOZW6ADB/IV57tjmktjOLn9Iy9V6fsjHtY8PsCbDjqqC+j7LiF2h937Q5T57VnuJLi+IHNsN8960vFWL3crHk0rsD/LmqtLWTiHG1VFOkBdRolB0Q45YL87Jqq2WtaNXj/GZK617NxlOGwdCVBFbO2k1DS/vLVRa2/YQIoGyqAKlnJUMuzDkaVyUmZVvhGppljC8hVO/EHh2liL+DLzqm4jxi97Im3i7PA99/7Cr/ABGq4Y6yi+0/FWs1W1s8Pdz50Doq9XfwArD2sHYo5LGaZzqmlbdnc+H5KKWRNJPJLKzPPL+8kPPyAFXdlB2aLIy407x56t4n05mrh4wmFctg3RR2vaSwxEZWEa5j0Mp6D8NP3Mz3B+ywhdOdLsACT93AHgOQqPdXS20LLEcOdi3meg65P0qujkljQRW5czz/AL6dtio5aU3IUDqedLwAC46qhlxAGnrqVJu5InuYIId7eyBwSd3YZLN56nNRrfuQvKQMgGQ+u5puQxx25ZN2lYRoOukdfiafbPZiIHmrSSeijAH/ACb8qtTNyuOFlVT4RAcnSw+Rzk/Umlkd1cjbGRUO4YvqK7rgkjw0/wD0aftpVeHY52Bp5j4IOmRSFanLSNYkI251Auf3g/D+pqykAAGPnVdcfvB+H9TWwF5zVWa1Khsnm70ssUEQ5u9Qw2netDwrg8t+wmu9XZc44qHWeWCcQaNBEunhJwo9GmHmA0uOpmGAcYE8k0917O8PjwqzX8vp3M+WdqoL7ik94SiQrBH0Rdz9BXVxwfh/ZaJIUIxgbVJ4d7KcOeJ5XLbviJSAQBWIGvqOgDFrd3sBhXoQaVFsnPgOjzXLuFWLqv8Ap4iJnBBllG4XrpXc1ZyolpA4RjoUarqfx66E8Sa6kfZyALpSVkHgoA/Sgns1w7I+0lplHRqKOx1XGXQlz2xmgPJeeiLnid1iCNyrMAcfw88V072f4H9nPbXAHaNVzFw+04fNJbiIIyu3ZMV95M5UqfSrOJGIGDQjY4YiNOuSfxYgCNRnw6KmhAVxUZUOlgDyqQEkA7poKCobXzNVIyXAFWNbM5zVHxuLRAB0G5xWqLgCs3x5o0tHkmYjcaQOZ8AKWeAAYTDZkLGQKhnJc4jT3m8W8B4k1NmuGZnHdQIu4+7FH4serVULKUZdgZz+7Tmka/xHxaptpZyXyhEUmMvmTJ/edTqP8PjVGHIHrrRGqBRIIjdSC4cMIgx+yIeb9O1f1+7U+S37MaGIEkv7w+CfwL/2PStM8FtYQhiYxNpyC3TbHdUb4A2FZe8dmDadQ17M7++w/gGNgPIVHmSNBoNUFpzjxKqyVnuhoHcjOUB6qNs+A1HkKkTn/VRIvIKRIf5gckfAE0hQbeJ3GDKzaV8jj6haBUrCrKdTROdYPUGrNN/Ic1ZwsqNSVSUttmV1UnwBwRTLa4E7SIEoh1YHPTyINTuIw5nXT7rMZgB0U4P1xv60wkwWRonAKsAPLwNN4vqAmc28JQMMiDaMipMciTQ6k36/Colx74/D+ppKRi3JaElcH3emPAUq6yJRqyp0jI+dalGq0iJyy3jrNYXaOzuYcQFjn93WS1PBOGtezCaQHsUO3ma6dbxLEgVRUOwto7a3SOMABQBVxGgHOkHvL3YjloP09ZrQp0202ho/5Hd/Vmogu2TWjt00W0a+Cgn1O9UPNkjXcuwUVpKe7M35iku1H5B4oU2wztTh5UWK1VlImjikj0Sorp/CwzUL/K7UEmNpE8gcj6jNWIpQ9KC5jXZgFHa9zflJCr04fED3pJD8h+lOS8Osyww8rDqMj8wtTutEedD+Ez+0IvxameIqqksbNdxH9T/esD7YwpHFahFwGZvnsBXTmGRiqDjPC4uI2LRvs8ZMkMng1LV6INNwa0TCPRrObUYXOcRK4vbWZlnEaHU8veYjovnWyd04fAsFoBLeNgb7qmd9T+gqGez4ehKJm4YaiB81HkF2J8yKj2SyEyTuSZZe/L6491TyryrX4c7uOn6v41Xo39++TR1/4nZI4II3u72XODrdm3LN5A+835VmJbia/uIpY1MVqMsQfeKrkEMfEnHKl8Xeee5iR8ExJl0HIO2xQfgHM+OaTKnY23YIxLle1Ydd9jj0o57gB+o2Hv8AjNcbDuSjSuZJtX3YhlfMZ3qeVUDvgGOQYyPkf/7yquttDhA/usNJPgCCjVbxBuwkhfBaPKt47ciPUUs4xHBMgZ8VXTwuezB5AaJD0KjcfA7VCFoskixP3ObaiNieeKtlkDwvH96JCRnqB0+ApyCMzQoV3OjvE+dGD3XI3VAAFQ3UJgZdfKrC+iLvE6rqDwq31YEVaXFkv+WuWGZB3mc8zg43PoajpEy29uD/AOv/ALuKapGXAax5Jese7I3XVI1wKcd9IpSjuULVUlv4I393VqYeIHexRxcho1KVNgXHQSrawtWQCeYd9x3F/hU/qatRSjRV6JjQ1oaOivOPcXOLj0NkRoUKOioaApwUkUdUV0dEedHQri6kU1KuY5B4qw+hp40mu5gqLmM8cEkF4/Z9pcy3a2dqvmFDE+g1b+gqLbRG0uzFKMoqAEnq+dh8TV09nMnFZktwGnim+2wRtyYECNxk+gqs9oIuJC3+1TQRwKr7hWy2rkCSNhivHFsDHBltja2ZxEnKZseEL0rTJDJEO43mBFvTjKyfErZLCe5JYTKzm4hx4ncg+hNZmO6l7btHBds6mB5aT3T9OVdJuoLfiXsx29vlJrAF5YhuT1LKd271cqmkCI32dcMSSzsdRwcHbbAFGDJMm4cO6dMOo/fVM0zLSPqaYcNZGR8dFdxIgdtB1x6taH6kNjkfoc1ahjrB0kFtkI64+76jp4iszw2bY9nlZFOwJ5jy8Qa1sUSzRZCbNg4XZlf4eHSkarSHFp64pkEQCFAuFEd1HMp2O0i9P/jNS7ACOadDkDI0fgPeFHLbh+65IONyB8mHkaal1iwkdAO3hwj+gPSuU9jpb9lR+kLQXCLJaFF5v3fmR+Qqr4lGscsSDCgQrt/yarThziS1jYjvH8yACRUPjSA3iY/9S/1NWhSHenhCRqG0cV0FgSc5Ix06Gq2aU2txFcg/u3BPmvIj4ircjArN8W7SUpbQDVNO4ji9ScUQg2Izm33aLtjIOUX+3VdKVldFZdwwBBo6j2iGG1hhZtbRRojP4kADNSK9OvLIqFGKOoojFHQoVVdQoutDNEeYqKIydqTR0K6oqa/tmaeOaJuznQ6oZOmsDGlvJhTF6Yr/AIVc20y9lcGNsxt1bnlD13q8miEsTLnSeaN4MORqEgt7tWiuUCzxbSRnmP5lPgazX07vAgCoMvpLovfQ6jcaGE419mkzLDY6x7jdcc9nuJmx4otvLvHMOxnQ9VO30rP8a4X9g4lewqP2MchEBPVWIdAvj3XHyrdX0ctp7Ry20kEDwgGW2n0YfB2GTWW9oL6BnFwmDIIxDCT13J7U+mcCsFpLJpR3g633Tf8A6yvR/M8VBYOb3to09YWCdniu0KthlOjzztmttwzilvDNFHfAxF1Gi5G8RHXtV5j1WsMiMylj3mDa1I3Pga1FmLa8hFvMSrtho5D0PIEeOacrtBDJGKLE68wow/MDYErolxaK0aTQFXRgCpQhlKnqpHMGq9oArpMBmKQBZfToSPoah8Dku+FzG1uVP2Zjll5qP508K07Kis8YwYpQXjI86y2xMjkVHBwlpvqCquz0LLImkDQcIByIO+ajcZGLqP8A2h/U9K7kLd84OMAjrpOMn4Y+VV/EZ5WmjwQwEQCk88amrQpkYrJV4JYumzMAprLi6EftJw7O6tL2XxcFAfmaur2XCneslayCT2p4YjdZwfkC1HB77PuHqrFowPJ/tPouwgYNOkU2KdFeiK8sEQFHQoVVXQoYNChUUQ00RG4o6FRcRaaOhQqLqFRLm3hnKsw0yJnRKmzjyyKl03KwRGZtgoJNVIBBxQQugmbZrEe0dqog1tLmcqURyO9p67jGK45fWuuUgjUF2U/dAFdRvbz/ADC6YA9wHc9MVU3nDgf2cI777knoPOvJVHy8vp5aDWN5Xq6IwMDHm+ZXPOFWM15xSGFVxEGzIQBkKNsD1JrRycJ7G4+zNt2hY2kn8/MoT4HpV3wOwe3uC6LmdWwpPIDcFmrScYtklsWCjvxKxRupl5gj0NNwajJyIy69UB1XDUAF2nNZGxvGP+kvFBddo2PM42ZatpB2dvmFiUQZix0U8wPzFZm6LS24u0GmeBwLpf5xt2g8n5N61Jtr8doIXJAnQyQ/i6rWU60kDnzCcAmNtEzJcfaWKLjtA6jH60jiNpKssQeZiTEDsMD3mqovWaC8E0C53GpR8/rWiuJxdJbTKrprhBZXGCDrem+zjI5yLdeipXEAxv5rTcRn0qR1rC8Ivll/xB4PAG7iXBWQ/wAxRlqT7UcYW1QqhzPJtGv/AGNc64Rdm04/w68ZjmG8gmkbyEilq16FOTjOWnNZ/aKkNNMZx3uWy9h9aWKRsTkcjuKWtbKwEdChQqq6hQoUKiiFChQqKIUKFCoohVT7Rl4OA3sq+8IjVtRcQtkvLC4tpPdmjZPiRtQqjS5j2jMtIHOEVhAewnIOBPKVxPgz6IpLmTdRllTqW/sK2nDrdpog8nvyjXKx6L4VgLntuFube8VoyFMJ8A+sn6iun8ExdWokGNGwwPoDXleztlwZrey9H2k90v0OR4KOLZUvCIgVUgEY+R3PpUr7Csj5+6o3B/pFT5Ygt2mocxUk8s4xXoadId6dDksF9Q2jZca9oT9kaR0TRICWdTyZPv8A0FZGWVD2XZEqUZZEPQjBXA3zyNb324iCzxMcBXDgjyxXPIoxPNbQwbklMnyA3I8Kxnshz5zxH/Ei37L0FB0tbth81ruBI1xePOV1aAAPDJOT5bVY8aB+1x/7Q/qetFY2yQwhY0VAdzpFU/HFxeR/7K/1PUpMwwFys6ZXC7u5nvbp7m4bU7n4AdAKisDilCjr0OSxYmZzOa9bey3Ek4t7M8MvQwZzAsNz5TRgRPWiFcI/wk4lIs/EeFu2Y3RbyBfBx3H+YK13SNtSg0cZJAiCQnaFAUK4ohQoUKiiFChQqKIUKFCoohQoUKiiofaP2csuMxPyinCgCUVjOGR8T4PxF7W6ma1hY/s5yhaPI6EryrqNMzwxTkmVQc86zavZQ5wqM7rwfA75QdE/T7S5rTTd3mabgql7QG5tgbiKYvry6+GM+J8KsXYEHBqnfh1hHxaJlXBCM+PioqxndIoyzbAA4pqiHgPxgC+8/SN0tULThwkm20alcf8A8Qbn7RxWG0hK5hh7/m7kH6Ko+dNezfDFiKyMQ74xn+1ZG7umvONT3TnPbXDuPJMkD5LXR+DldIx1FZtcQed1udlILCBoYWthAAFZzjw/1sf+yv8AW9aOPJrN8dYfbY/9lf63oDMwiVBZefsGgcinAy0HZcVvwvPYytR7C332D2v4fI5xHOzWsvpIpQfJ9NepYtlHqa8awPomhdTpZJEZWHQhga9jKT2EZPMorH1IzRQl3GTKmDmKOm0OcGnKqrIUKFCuLqFChQqKIUKFCoohQoUKiiFBjQpL866uKruIdV5FOHKlFZSvQg45/Kqj2naRPZ3iEkWzpbSkY/DV7cbMpqBxGNZ+G3cLe7LBIh+KkVeBB6uqSbLzCh0xgiun8CfXCrA9Nq5emykeBIrd+ys+qPR1UkVkdpEtDtj5Lb7E7vOZuJHNdKhOF9aznHSPtkf+yv8AU9XsLbCs3x183qY/9S/1PWWw3WzUb3V//9k="
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
                  </div>
                  <div
                    class="mt-5 flex items-center flex-wrap justify-between"
                    
                  >
                    <div
                      class="nc-PostCardLikeAndComment flex items-center space-x-2 "
                      
                    >
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked"
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
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
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                          ></path>
                        </svg>
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                          110
                        </span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 "
                      
                    >
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-[18px] h-[18px]"
                        >
                          <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ml-3 sm:ml-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0"
                  
                >
                  <a
                    class="block w-full h-0 aspect-h-1 aspect-w-1 relative"
                    href="/single/this-is-single-slug"
                  >
                    <div class="absolute inset-0" >
                      <img
                        src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                        alt="Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities"
                        sizes="(max-width: 600px) 480px, 800px"
                        class="object-cover w-full h-full object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <span>
                      <div
                        class="nc-PostTypeFeaturedIcon absolute left-2 bottom-2"
                        
                      ></div>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="nc-Card3 relative flex flex-row items-center group py-3"
                
              >
                <div class="flex flex-col flex-grow" >
                  <div class="space-y-3.5" >
                    <div
                      class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                      
                    >
                      <a
                        class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                        href="/archive/the-demo-archive-slug"
                      >
                        Electronics
                      </a>
                    </div>
                    <a class="block" href="/single/this-is-single-slug">
                      <h2 class="nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg">
                        <span
                          class="line-clamp-2"
                          title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                        >
                          360-degree video: How Microsoft deployed a datacenter
                          to the bottom of the ocean
                        </span>
                      </h2>
                      <div class="hidden sm:block sm:mt-2" >
                        <span class="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                          We’re an online magazine dedicated to covering the
                          best in international product design. We started as a
                          little blog back in 2002 covering student work and
                          over time
                        </span>
                      </div>
                    </a>
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
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
                  </div>
                  <div
                    class="mt-5 flex items-center flex-wrap justify-between"
                    
                  >
                    <div
                      class="nc-PostCardLikeAndComment flex items-center space-x-2 "
                      
                    >
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked"
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
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
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                          ></path>
                        </svg>
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                          110
                        </span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 "
                      
                    >
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-[18px] h-[18px]"
                        >
                          <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ml-3 sm:ml-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0"
                  
                >
                  <a
                    class="block w-full h-0 aspect-h-1 aspect-w-1 relative"
                    href="/single/this-is-single-slug"
                  >
                    <div class="absolute inset-0" >
                      <img
                        src="https://images.unsplash.com/photo-1581122584612-713f89daa8eb?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                        alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                        sizes="(max-width: 600px) 480px, 800px"
                        class="object-cover w-full h-full object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <span>
                      <div
                        class="nc-PostTypeFeaturedIcon absolute left-2 bottom-2"
                        
                      ></div>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="nc-Card3 relative flex flex-row items-center group py-3"
                
              >
                <div class="flex flex-col flex-grow" >
                  <div class="space-y-3.5" >
                    <div
                      class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                      
                    >
                      <a
                        class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                        href="/archive/the-demo-archive-slug"
                      >
                        Industrial
                      </a>
                    </div>
                    <a class="block" href="/single-video/this-is-single-slug">
                      <h2 class="nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg">
                        <span
                          class="line-clamp-2"
                          title="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
                        >
                          To cool datacenter servers, Microsoft turns to boiling
                          liquid Donec quis
                        </span>
                      </h2>
                      <div class="hidden sm:block sm:mt-2" >
                        <span class="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                          Nam ultrices, libero non mattis pulvinar, nulla pede
                          ullamcorper augue, a suscipit nulla elit ac nulla. Sed
                          vel enim sit amet nunc viverra dapibus. Nulla suscipit
                          ligula in lacus.
                        </span>
                      </div>
                    </a>
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
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
                  </div>
                  <div
                    class="mt-5 flex items-center flex-wrap justify-between"
                    
                  >
                    <div
                      class="nc-PostCardLikeAndComment flex items-center space-x-2 "
                      
                    >
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked"
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
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
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                          ></path>
                        </svg>
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                          110
                        </span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 "
                      
                    >
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-[18px] h-[18px]"
                        >
                          <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ml-3 sm:ml-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0"
                  
                >
                  <a
                    class="block w-full h-0 aspect-h-1 aspect-w-1 relative"
                    href="/single-video/this-is-single-slug"
                  >
                    <div class="absolute inset-0" >
                      <img
                        src="https://images.unsplash.com/photo-1606490114832-d41056bdca34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY1fHxnYW1pbmd8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                        alt="To cool datacenter servers, Microsoft turns to boiling liquid Donec quis"
                        sizes="(max-width: 600px) 480px, 800px"
                        class="object-cover w-full h-full object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <span>
                      <div
                        class="nc-PostTypeFeaturedIcon absolute left-2 bottom-2"
                        
                      >
                        <span class="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-8 h-8">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                              stroke="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="nc-Card3 relative flex flex-row items-center group py-3"
                
              >
                <div class="flex flex-col flex-grow" >
                  <div class="space-y-3.5" >
                    <div
                      class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                      
                    >
                      <a
                        class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                        href="/archive/the-demo-archive-slug"
                      >
                        Electronics
                      </a>
                    </div>
                    <a class="block" href="/single-video/this-is-single-slug">
                      <h2 class="nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg">
                        <span
                          class="line-clamp-2"
                          title="Xbox connects people to help through Crisis Text Line and Aenean lectus"
                        >
                          Xbox connects people to help through Crisis Text Line
                          and Aenean lectus
                        </span>
                      </h2>
                      <div class="hidden sm:block sm:mt-2" >
                        <span class="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                          Aenean lectus. Pellentesque eget nunc. Donec quis orci
                          eget orci vehicula condimentum.
                        </span>
                      </div>
                    </a>
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
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
                  </div>
                  <div
                    class="mt-5 flex items-center flex-wrap justify-between"
                    
                  >
                    <div
                      class="nc-PostCardLikeAndComment flex items-center space-x-2 "
                      
                    >
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked"
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
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
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                          ></path>
                        </svg>
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                          110
                        </span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 "
                      
                    >
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-[18px] h-[18px]"
                        >
                          <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ml-3 sm:ml-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0"
                  
                >
                  <a
                    class="block w-full h-0 aspect-h-1 aspect-w-1 relative"
                    href="/single-video/this-is-single-slug"
                  >
                    <div class="absolute inset-0" >
                      <img
                        src="https://images.unsplash.com/photo-1587381420844-7bc5f4feec02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                        alt="Xbox connects people to help through Crisis Text Line and Aenean lectus"
                        sizes="(max-width: 600px) 480px, 800px"
                        class="object-cover w-full h-full object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <span>
                      <div
                        class="nc-PostTypeFeaturedIcon absolute left-2 bottom-2"
                        
                      >
                        <span class="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-8 h-8">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
                              stroke="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="nc-Card3 relative flex flex-row items-center group py-3"
                
              >
                <div class="flex flex-col flex-grow" >
                  <div class="space-y-3.5" >
                    <div
                      class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                      
                    >
                      <a
                        class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100 hover:bg-blue-800"
                        href="/archive/the-demo-archive-slug"
                      >
                        Industrial
                      </a>
                    </div>
                    <a class="block" href="/single-audio/this-is-single-slug">
                      <h2 class="nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg">
                        <span
                          class="line-clamp-2"
                          title="Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus"
                        >
                          Unusual ‘machine in the woods’ taps clean energy deep
                          underground for new Microsoft campus
                        </span>
                      </h2>
                      <div class="hidden sm:block sm:mt-2" >
                        <span class="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                          In hac habitasse platea dictumst. Etiam faucibus
                          cursus urna. Ut tellus.
                        </span>
                      </div>
                    </a>
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
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
                  </div>
                  <div
                    class="mt-5 flex items-center flex-wrap justify-between"
                    
                  >
                    <div
                      class="nc-PostCardLikeAndComment flex items-center space-x-2 "
                      
                    >
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked"
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
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
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                          ></path>
                        </svg>
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                          110
                        </span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 "
                      
                    >
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-[18px] h-[18px]"
                        >
                          <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ml-3 sm:ml-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0"
                  
                >
                  <a
                    class="block w-full h-0 aspect-h-1 aspect-w-1 relative"
                    href="/single-audio/this-is-single-slug"
                  >
                    <div class="absolute inset-0" >
                      <img
                        src="https://images.unsplash.com/photo-1576500714954-8a687d0ea1ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                        alt="Unusual ‘machine in the woods’ taps clean energy deep underground for new Microsoft campus"
                        sizes="(max-width: 600px) 480px, 800px"
                        class="object-cover w-full h-full object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <span>
                      <div
                        class="nc-PostTypeFeaturedIcon absolute left-2 bottom-2"
                        
                      >
                        <span class="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-8 h-8">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M20.8398 16.8V12"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M9.40039 9.5199L20.8404 6.3999"
                              stroke="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="nc-Card3 relative flex flex-row items-center group py-3"
                
              >
                <div class="flex flex-col flex-grow" >
                  <div class="space-y-3.5" >
                    <div
                      class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                      
                    >
                      <a
                        class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 hover:bg-red-800"
                        href="/archive/the-demo-archive-slug"
                      >
                        Jewelry
                      </a>
                    </div>
                    <a class="block" href="/single-gallery/this-is-single-slug">
                      <h2 class="nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg">
                        <span
                          class="line-clamp-2"
                          title="WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "
                        >
                          WNBA’s Sabrina Ionescu teams up with Xbox to empower
                          young girls to pursue their hoop dreams{" "}
                        </span>
                      </h2>
                      <div class="hidden sm:block sm:mt-2" >
                        <span class="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                          In hac habitasse platea dictumst. Etiam faucibus
                          cursus urna. Ut tellus.
                        </span>
                      </div>
                    </a>
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
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
                  </div>
                  <div
                    class="mt-5 flex items-center flex-wrap justify-between"
                    
                  >
                    <div
                      class="nc-PostCardLikeAndComment flex items-center space-x-2 "
                      
                    >
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked"
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
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
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                          ></path>
                        </svg>
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                          110
                        </span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 "
                      
                    >
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-[18px] h-[18px]"
                        >
                          <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ml-3 sm:ml-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0"
                  
                >
                  <a
                    class="block w-full h-0 aspect-h-1 aspect-w-1 relative"
                    href="/single-gallery/this-is-single-slug"
                  >
                    <div class="absolute inset-0" >
                      <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                        alt="WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "
                        sizes="(max-width: 600px) 480px, 800px"
                        class="object-cover w-full h-full object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <span>
                      <div
                        class="nc-PostTypeFeaturedIcon absolute left-2 bottom-2"
                        
                      >
                        <span class="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-8 h-8">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
                              stroke="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="nc-Card3 relative flex flex-row items-center group py-3"
                
              >
                <div class="flex flex-col flex-grow" >
                  <div class="space-y-3.5" >
                    <div
                      class="nc-CategoryBadgeList flex flex-wrap space-x-2"
                      
                    >
                      <a
                        class="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                        href="/archive/the-demo-archive-slug"
                      >
                        Industrial
                      </a>
                    </div>
                    <a class="block" href="/single-audio/this-is-single-slug">
                      <h2 class="nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg">
                        <span
                          class="line-clamp-2"
                          title="New tools and advocacy support Black pregnant and postpartum mothers to save lives "
                        >
                          New tools and advocacy support Black pregnant and
                          postpartum mothers to save lives{" "}
                        </span>
                      </h2>
                      <div class="hidden sm:block sm:mt-2" >
                        <span class="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
                          In sagittis dui vel nisl. Duis ac nibh. Fusce lacus
                          purus, aliquet at, feugiat non, pretium quis, lectus.
                        </span>
                      </div>
                    </a>
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
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
                  </div>
                  <div
                    class="mt-5 flex items-center flex-wrap justify-between"
                    
                  >
                    <div
                      class="nc-PostCardLikeAndComment flex items-center space-x-2 "
                      
                    >
                      <button
                        class="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"
                        title="Liked"
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
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
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                          ></path>
                        </svg>
                        <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                          110
                        </span>
                      </a>
                    </div>
                    <div
                      class="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 "
                      
                    >
                      <button
                        class="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        title="Save to reading list"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-[18px] h-[18px]"
                        >
                          <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ml-3 sm:ml-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0"
                  
                >
                  <a
                    class="block w-full h-0 aspect-h-1 aspect-w-1 relative"
                    href="/single-audio/this-is-single-slug"
                  >
                    <div class="absolute inset-0" >
                      <img
                        src="https://images.unsplash.com/photo-1571435763834-4d6fbb550bb7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                        alt="New tools and advocacy support Black pregnant and postpartum mothers to save lives "
                        sizes="(max-width: 600px) 480px, 800px"
                        class="object-cover w-full h-full object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <span>
                      <div
                        class="nc-PostTypeFeaturedIcon absolute left-2 bottom-2"
                        
                      >
                        <span class="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-8 h-8">
                          <svg
                            class="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M20.8398 16.8V12"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M9.40039 9.5199L20.8404 6.3999"
                              stroke="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center"
              
            >
              <nav class="nc-Pagination inline-flex space-x-1 text-base font-medium ">
                <span class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none">
                  1
                </span>
                <a
                  class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  href="/"
                >
                  2
                </a>
                <a
                  class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  href="/"
                >
                  3
                </a>
                <a
                  class="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  href="/"
                >
                  4
                </a>
              </nav>
              <button class="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">
                Show me more
              </button>
            </div>
          </div>
          <div
            class="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 "
            
          >
            <div
              class="nc-WidgetTags rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
              
            >
              <div
                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 "
                
              >
                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                  💡 More tags
                </h2>
                <a
                  class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                  rel="noopener noreferrer"
                  href="/"
                >
                  View all
                </a>
              </div>
              <div class="flex flex-wrap p-4 xl:p-5" >
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Garden<span class="text-xs font-normal"> (13)</span>
                </a>
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Jewelry<span class="text-xs font-normal"> (16)</span>
                </a>
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Industrial<span class="text-xs font-normal"> (15)</span>
                </a>
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Tools<span class="text-xs font-normal"> (21)</span>
                </a>
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Automotive<span class="text-xs font-normal"> (16)</span>
                </a>
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Toys<span class="text-xs font-normal"> (25)</span>
                </a>
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Outdoors<span class="text-xs font-normal"> (14)</span>
                </a>
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Health<span class="text-xs font-normal"> (4)</span>
                </a>
                <a
                  class="nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 mr-2 mb-2"
                  href="/archive/the-demo-archive-slug"
                >
                  Electronics<span class="text-xs font-normal"> (7)</span>
                </a>
              </div>
            </div>
            <div
              class="nc-WidgetCategories rounded-3xl  overflow-hidden bg-neutral-100 dark:bg-neutral-800"
              
            >
              <div
                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 "
                
              >
                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                  ✨ Trending topic
                </h2>
                <a
                  class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                  rel="noopener noreferrer"
                  href="/"
                >
                  View all
                </a>
              </div>
              <div class="flow-root" >
                <div
                  class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
                  
                >
                  <a
                    class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/archive/the-demo-archive-slug"
                  >
                    <div
                      class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      
                    >
                      <img
                        src="https://images.unsplash.com/photo-1546015018-8f2e2f225773?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                        alt=""
                        sizes="80px"
                        class="object-cover object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div >
                      <h2 class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                        Electronics
                      </h2>
                      <span class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        7 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/archive/the-demo-archive-slug"
                  >
                    <div
                      class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      
                    >
                      <img
                        src="https://images.unsplash.com/photo-1512658740823-0ebb97b3b86e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                        alt=""
                        sizes="80px"
                        class="object-cover object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div >
                      <h2 class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                        Industrial
                      </h2>
                      <span class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        26 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/archive/the-demo-archive-slug"
                  >
                    <div
                      class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      
                    >
                      <img
                        src="https://images.unsplash.com/photo-1616504132588-0eeeb5213fc2?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                        alt=""
                        sizes="80px"
                        class="object-cover object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div >
                      <h2 class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                        Health
                      </h2>
                      <span class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        20 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/archive/the-demo-archive-slug"
                  >
                    <div
                      class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      
                    >
                      <img
                        src="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRveXN8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                        alt=""
                        sizes="80px"
                        class="object-cover object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div >
                      <h2 class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                        Toys
                      </h2>
                      <span class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        22 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    class="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/archive/the-demo-archive-slug"
                  >
                    <div
                      class="relative flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      
                    >
                      <img
                        src="https://images.unsplash.com/photo-1604935067269-27c7e8b36618?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                        alt=""
                        sizes="80px"
                        class="object-cover object-cover absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div >
                      <h2 class="text-base nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold">
                        Sports
                      </h2>
                      <span class="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        15 Articles
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="nc-WidgetAuthors rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
              
            >
              <div
                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 "
                
              >
                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                  🎭 Discover Authors
                </h2>
                <a
                  class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                  rel="noopener noreferrer"
                  href="/"
                >
                  View all
                </a>
              </div>
              <div class="flow-root" >
                <div
                  class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
                  
                >
                  <a
                    class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/author/the-demo-author-slug"
                  >
                    <div
                      class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 mr-4"
                      
                    >
                      <img
                        sizes="100px"
                        src="data:image/jpeg;base64,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"
                        class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                        alt="Truelock Alric"
                      />
                      <span class="wil-avatar__name">T</span>
                    </div>
                    <div >
                      <h2 class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                        Truelock Alric
                      </h2>
                      <span class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">
                        Author Job
                      </span>
                    </div>
                  </a>
                  <a
                    class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/author/the-demo-author-slug"
                  >
                    <div
                      class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 mr-4"
                      
                    >
                      <img
                        sizes="100px"
                        src="data:image/jpeg;base64,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"
                        class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                        alt="Birrell Chariot"
                      />
                      <span class="wil-avatar__name">B</span>
                    </div>
                    <div >
                      <h2 class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                        Birrell Chariot
                      </h2>
                      <span class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">
                        Author Job
                      </span>
                    </div>
                  </a>
                  <a
                    class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/author/the-demo-author-slug"
                  >
                    <div
                      class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 mr-4"
                      
                    >
                      <img
                        sizes="100px"
                        src="data:image/jpeg;base64,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"
                        class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                        alt="Foulcher Nathanil"
                      />
                      <span class="wil-avatar__name">F</span>
                    </div>
                    <div >
                      <h2 class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                        Foulcher Nathanil
                      </h2>
                      <span class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">
                        Author Job
                      </span>
                    </div>
                  </a>
                  <a
                    class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/author/the-demo-author-slug"
                  >
                    <div
                      class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 mr-4"
                      
                    >
                      <img
                        sizes="100px"
                        src="data:image/jpeg;base64,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"
                        class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                        alt="Falconar Agnes"
                      />
                      <span class="wil-avatar__name">F</span>
                    </div>
                    <div >
                      <h2 class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                        Falconar Agnes
                      </h2>
                      <span class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">
                        Author Job
                      </span>
                    </div>
                  </a>
                  <a
                    class="nc-CardAuthor flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    href="/author/the-demo-author-slug"
                  >
                    <div
                      class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-base flex-shrink-0 mr-4"
                      
                    >
                      <img
                        sizes="100px"
                        src="data:image/jpeg;base64,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"
                        class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                        alt="Tousy Vita"
                      />
                      <span class="wil-avatar__name">T</span>
                    </div>
                    <div >
                      <h2 class="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold">
                        Tousy Vita
                      </h2>
                      <span class="block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400">
                        Author Job
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="nc-WidgetPosts rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
              
            >
              <div
                class="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 "
                
              >
                <h2 class="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                  🎯 Popular Posts
                </h2>
                <a
                  class="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                  rel="noopener noreferrer"
                  href="/"
                >
                  View all
                </a>
              </div>
              <div
                class="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
                
              >
                <div
                  class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  
                >
                  <a
                    class="absolute inset-0"
                    title="New tools for Black pregnant and postpartum mothers to save lives"
                    href="/single/this-is-single-slug"
                  ></a>
                  <div class="relative space-y-2" >
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
                          <img
                            sizes="100px"
                            src="data:image/jpeg;base64,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"
                            class="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full"
                            alt="Tousy Vita"
                          />
                          <span class="wil-avatar__name">T</span>
                        </div>
                        <span class="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Tousy Vita
                        </span>
                      </a>
                      <span class="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span class="text-neutral-500 dark:text-neutral-400 font-normal">
                        May 20, 2021
                      </span>
                    </div>
                    <h2 class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        class="line-clamp-2"
                        title="New tools for Black pregnant and postpartum mothers to save lives"
                        href="/single/this-is-single-slug"
                      >
                        New tools for Black pregnant and postpartum mothers to
                        save lives
                      </a>
                    </h2>
                  </div>
                  <a
                    title="New tools for Black pregnant and postpartum mothers to save lives"
                    class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ml-4 group"
                    href="/single/this-is-single-slug"
                  >
                    <div
                      class="w-full h-0 aspect-w-1 aspect-h-1"
                      
                    >
                      <img
                        sizes="100px"
                        src="https://images.unsplash.com/photo-1581610489881-f316ffcf0424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                        title="New tools for Black pregnant and postpartum mothers to save lives"
                        class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300 object-cover absolute inset-0 w-full h-full"
                        alt="featured"
                      />
                    </div>
                  </a>
                </div>
                <div
                  class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  
                >
                  <a
                    class="absolute inset-0"
                    title="People who inspired us in 2019 "
                    href="/single-video/this-is-single-slug"
                  ></a>
                  <div class="relative space-y-2" >
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
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
                    <h2 class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        class="line-clamp-2"
                        title="People who inspired us in 2019 "
                        href="/single-video/this-is-single-slug"
                      >
                        People who inspired us in 2019{" "}
                      </a>
                    </h2>
                  </div>
                  <a
                    title="People who inspired us in 2019 "
                    class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ml-4 group"
                    href="/single-video/this-is-single-slug"
                  >
                    <div
                      class="w-full h-0 aspect-w-1 aspect-h-1"
                      
                    >
                      <img
                        sizes="100px"
                        src="https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                        title="People who inspired us in 2019 "
                        class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300 object-cover absolute inset-0 w-full h-full"
                        alt="featured"
                      />
                    </div>
                  </a>
                </div>
                <div
                  class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  
                >
                  <a
                    class="absolute inset-0"
                    title="How architects visualize design for world’s biggest airport"
                    href="/single/this-is-single-slug"
                  ></a>
                  <div class="relative space-y-2" >
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
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
                    <h2 class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        class="line-clamp-2"
                        title="How architects visualize design for world’s biggest airport"
                        href="/single/this-is-single-slug"
                      >
                        How architects visualize design for world’s biggest
                        airport
                      </a>
                    </h2>
                  </div>
                  <a
                    title="How architects visualize design for world’s biggest airport"
                    class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ml-4 group"
                    href="/single/this-is-single-slug"
                  >
                    <div
                      class="w-full h-0 aspect-w-1 aspect-h-1"
                      
                    >
                      <img
                        sizes="100px"
                        src="https://images.pexels.com/photos/4397925/pexels-photo-4397925.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        title="How architects visualize design for world’s biggest airport"
                        class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300 object-cover absolute inset-0 w-full h-full"
                        alt="featured"
                      />
                    </div>
                  </a>
                </div>
                <div
                  class="nc-Card3Small relative flex flex-row justify-between items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  
                >
                  <a
                    class="absolute inset-0"
                    title="Take a 3D tour through a Microsoft datacenter"
                    href="/single-video/this-is-single-slug"
                  ></a>
                  <div class="relative space-y-2" >
                    <div
                      class="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs"
                      
                    >
                      <a
                        class="relative flex items-center space-x-2"
                        href="/author/the-demo-author-slug"
                      >
                        <div
                          class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900"
                          
                        >
                          <img
                            sizes="100px"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAH3wAIABMAEgAWADFhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAIAAgAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAABAAUGBwIDBAj/xAA2EAABAwMBBgMHAwQDAQAAAAABAAIDBAUREgYTITFBUSJxgRQyYZGxwdEHQqEkUmLhFRYjkv/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAkEQACAgIDAAEEAwAAAAAAAAAAAQIRAyEEEjETBSJRcTJBYf/aAAwDAQACEQMRAD8AuIIoIogAooIqygorB72xsc97g1rRkk9FFrlfnVD3Rwu0Qj5uQyko+hRi5eEjlr6aEkOlBI6N4rSbpCG6j4R0zzPoFEIpZpn+Ahv+TuJ9E9Qtipodc0haD15ud5BI+Vsb8aXoq/a6GgJ1UsrgBknTj6rgp/1JtEkgjnbNTk9Xxkt/+m5Cbrvbam9sc2XeU9G0jTFry6Q9M/hddk/T6kpId7UwNmqJCOBOGxjoD3KLvIroiX0VxprhCJaeVr2njlpyutR+k2dlttQZ4KwMZpwIGjwD5lbI785leaSppZWHmJG+JpHfKYppgOLQ9pIAhwBHIpIwBJFJBQhgiEAiFRYQkgmzaCuNDaZHsOJHeBvmVG6VkSt0Me0l93spoqY5Y0+N3Qn8JgjdrcA3xOPU9f8AS485Jy4c8ucep/CzirNBIh4D9zz1WGU7dmyMElRIIXspeBw+fGeJ4N8/wtsEstTUtHFzz1Pb7BNVHvJQA0EAnOo83fH/AGpBR7qniw14yfekz9+qFMNxHiljYwjhqc3kTxPxwnaIZA+6ZoJWDGhjnZ68gnaEvewftHw4BOixTVGc2GsOdI4c3KFXmSuq75Rw0kQ3EWZKieQaQG8g0D4n7KauaGgiNu8eeJJPBN89JLUN8btWg5HDAL++OwUZSMbTWxV9vZNFqxyIcMEELuTdTBtNUbiP3A0D5BOC0QdozzVMWUksoIwTBFBIKEMlFdtJSIKaMHHEuKlKg+3Ly6rgizhugl3wHVLyv7WMxK5Ih8k2+IAJEecNGeLvj5LvoossDsZHl9E2x6ZZNTvDGPp2WFde45P6WlqI4tPAZIGT6rAb0vwSiOox4RgA+84nn6ruiuAhLdA1n+5x5Kt6SsrYagtqqkyuJ8Jxj+FLpIql9qM0b9GW8Ceioaoa2TigrXStDsMb8SOKeYtUgGpxLe5+wVQ2eouftIabs52T7ugHPqrOtNNX7gb+r3zSPE1zNJPljknQaehGSFDo6piax5Em7iZ78h+gXJV1OId7lzIgzIYOePyue4QvxGGs8OsAN6D/ACPfH1QinirgZmODoi4Mb5BFYlqjfSsc58kjxgkN4dua61wWWqFbb2VGCDM4uAPMN6LsJ4p+LwRlM8pZWGUU0UBFYhFUWFV/t0S67xR8muhGT8MqwFDNvKJz4IqxgyWjQ49uyXl3EbidSKxrp31VWaKnJaxoySO6aX7INZG9swlcHuD3OyMkjlxKdLWA2uqJH/3NH8KRVNWz2XJ7LCm1tHSUIyWyL0NvdC6CnBeQHjRqOSB2VwVdnd/1YwRt/wDQx8Pkq4sX9XdoXubpZrGCeo7q7i3eW0OjbqLW8B3RRjdkm+tJHn6usdbV1JY6rnpmBww5jT4QPLn6q09jLdcKBsRgv0lZSFgaaaoYXBuBza4kuB7g5HwCa6y50tRWvi3ZjeHYc1wwQVMdm42NaC3lhXBu6JkikuzHS4QuNuqCPf3biPPCqj9OdonubHa6txLyXkPJ65JH1x6K27tKYrXVPAyRE/A7nBVE7OUEtJtDSs0k6JwHO8zghMemZ6bjZcdqjZT0jo2DAY4tC68rVBHuosY4klx81sWnGqiYcjuRkllAIhGCBFBFUWFc9dSR11FLTyDLXtI8l0BJUXZRt4tNRZ7hPFI3Trw5p6HHBcEk0jgwO93l6q3tsrJ/y1oL4WZqYTqZ8R1H0VRVEDKqikgkaQRkdiCsOWHWR0+Pk7RFRzVNHXQmNwc1pHAHBVq2m+19QIzTgMhaMFsjclx+ap2wW6gn3dNXvqIpA7G+DstcB9CrVtVqsVDa4Zpa2eUmPIDS4knIzgD4FUou9Dvtqpe/oZ9qrfUR1Elw3ZDy7UeGAVKtibgKi3skzwPDj0KiV7ornc6xk8EtdTW+QhraSZ+S49SW8cAeamWzlsFupBG39ztXkotSKl/CmO21N3pbLs7U3GtL/Z4tOsMGScuAwB6qK7JUrbs1t6ex+5kOuESBoceJ4uDeGfJP+1NpO0NLSWyRgNE6cS1Rzza3iGjzOPknKCnipadkEEbY4o2hrWtGAAFojj7O2YJ5eq6oyKCywlhaTIBEJJKEMQigEVRYUViioQJAIIPVVrtzYW0FY2507cQVLtMoH7X9/X6hWVlcl0pKWvtlRTVuPZ3sOs5xpxx1A9COaDJDtGhuKbhKyjW2uT2newSuZq544g+in2ytGYpGzTPMj28WgNAwofRV0cFU6F7w5oOGudw1DoVPbRdKCBrdU0eojg1pyT6BYbr+zsd5dKRIvZN6/ey4yPhyXRTx+PDeXfssaZz6wBzssj6N6nzTiyJrAABgI1vaMrdaZp06SQTniktkvv5WtbIO4o5+RVJgwkikjAAkigVCGsJZWuSaOGMySvaxg5uccAJiqtqqeNxbSxOmP9x8I/KCU4x9DjCUvESIJuvG0Fp2fp2zXWvhpWPzo3h4uxzwBxKi1XtTcJGnS5sDe7Bx+ZVD7WX+p2gvs1TNM+VkZ3cOp2fCD9+amOayPReTG4LZaF2/XVjKmRlotTZIG5DZal5Bce+kch5lcLNqL5erSJrhXPd7SNRiYA2No6AAKocHGOqs21NJs1K3HERgfwg5T6xSQzixTk2zAtEziCn6wwbmoa4DHHoE1tgO9BA9FJLfTua0ODeK5sjpw0WFaagua0Ek+akAcC3KiNnbI0AkKTsfiLJTsb0IyrZue3U3yULuW39stV+fbKlkmmMAPmZ4sPPTCeNoL9HZbPUVbiCWN8I7novPE9TLVVktTM4ukkLnuJ6kldPg4fkk2/DncyfSKr09C2zaizXZzI6SvidM/lE7wv8AkU7rznsdUvG1Nvbk5FWz6r0O2XuPkj5EYYpJJ+isPfIm6NqCQcDySSk0/A2mvStrpepLtWu0kimYcRt+5+K1sZlqa6LmMp13ga1cuUnJ2zrQioqkM21VULfs7VzA4foLWeZ4fdUnjAHmrI/Uiv8A6OmpQffeXkfAD8lVyBlkY75K6XDhWO/yc7ly++vwGMZljGM5I+qvWlpab2eMNiDQGjgAqNb4J2EftwR6cV6Et0Daihp5WjwyRtcPUIebGkhnCabZjTWykmOHsHDkU7U9BHF7ucLXFTljuSc4W8srnUb26OmmeI2Dgt7qzIw44C1BgwmLaq7w2a0S1Dj4sYYM8S7oEyKb0hcmvWRD9S9pI6qaCz0rsiM7ydw79B6c/kq/Mni7cM/RYmd9XUyVEpJe4l7s9StD3nWT105+y9NxsXw4lE8/nyfLkch32Lk07X21zjw3+r5L0HHUa25yvPWxzc7YW9nYk/wVdrKgsAHRcn6lKpx/R0+BG4N/6P8AFL4hxTg2IvZkc1HqSoy8EqUUUgfGFjxt3o0ZUq2f/9k="
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
                    <h2 class="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        class="line-clamp-2"
                        title="Take a 3D tour through a Microsoft datacenter"
                        href="/single-video/this-is-single-slug"
                      >
                        Take a 3D tour through a Microsoft datacenter
                      </a>
                    </h2>
                  </div>
                  <a
                    title="Take a 3D tour through a Microsoft datacenter"
                    class="block w-20 flex-shrink-0 relative rounded-lg overflow-hidden z-0 ml-4 group"
                    href="/single-video/this-is-single-slug"
                  >
                    <div
                      class="w-full h-0 aspect-w-1 aspect-h-1"
                      
                    >
                      <img
                        sizes="100px"
                        src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                        title="Take a 3D tour through a Microsoft datacenter"
                        class="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300 object-cover absolute inset-0 w-full h-full"
                        alt="featured"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestArticles;
