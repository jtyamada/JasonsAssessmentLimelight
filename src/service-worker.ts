import { skipWaiting, clientsClaim } from 'workbox-core'
import { Prefetcher, prefetch } from '@layer0/prefetch/sw'
import DeepFetchPlugin, { DeepFetchCallbackParam } from '@layer0/prefetch/sw/DeepFetchPlugin'
import install from '@layer0/prefetch/window/install'
import { prefetch } from '@layer0/prefetch/window'

install()
skipWaiting()
clientsClaim()

new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      {
        selector: '.component-image.position-absolute.promotion-impression-img',
        maxMatches: 1,
        attribute: 'src',
        as: 'image',
        callback: deepFetchPLPImages,
      },
      {
        selector: '.plp-banner-top-inner img.plp-banner-top-image',
        maxMatches: 1,
        attribute: 'src',
        as: 'image',
        callback: deepFetchPLPImagesHero,
      },
      {
        selector: 'img.product-tile-image.position-relative',
        maxMatches: 2,
        attribute: 'src',
        as: 'image',
        callback: deepFetchPLPImagesTwo,
      },
      // Addded this for deep fetching PDP Images
      {
        selector: 'img.pdp-carousel-image',
        maxMatches: 1,
        attribute: 'src',
        as: 'image',
        callback: deepFetchPDPImages,
      },
    ]),
  ],
})
  .route()
  // .cache(/^https:\/\/assets-global\.website-files\.com\/.*/)
  // ENTER REGULAR EXPRESSION SELECTOR FOR IMAGES YOU WANT TO PREFETCH //
  // (usualy as CDN base domain name followed by ".*" as general selecor) //

///////////////////////////////////////////////
// Callback function for PLP image selector //
function deepFetchPLPImages({ $el, el, $ }: DeepFetchCallbackParam) {
  const url = $el.attr('src')
  console.log("[][]][][[][]][][][][][[]][[][][]\nPrefetching PLP Hero 1: "+url+"\n")
  prefetch(url, 'image')
}

function deepFetchPLPImagesHero({ $el, el, $ }: DeepFetchCallbackParam) {
  const url = $el.attr('src')
  console.log("[][]][][[][]][][][][][[]][[][][]\nPrefetching PLP Hero 2: "+url+"\n")
  prefetch(url, 'image')
}

function deepFetchPLPImagesTwo({ $el, el, $ }: DeepFetchCallbackParam) {
  const url = $el.attr('src')
  console.log("[][]][][[][]][][][][][[]][[][][]\nPrefetching PLP: "+url+"\n")
  prefetch(url, 'image')
}

function deepFetchPDPImages({ $el, el, $ }: DeepFetchCallbackParam) {
  const url = $el.attr('src')
  console.log("[][]][][[][]][][][][][[]][[][][]\nPrefetching PDP: "+url+"\n")
  prefetch(url, 'image')
}

// function logPrefetchedContent({$el}) { // for testing
//   // console.log("[][]][][[][]][][][][][[]][[][][]")
//   console.log("content '"+$el.attr('src')+"' has been prefetched...")
// }
