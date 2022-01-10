import { Router } from '@layer0/core/router'
import { starterRoutes } from '@layer0/starter'
import { CACHE_ASSETS, CACHE_PAGES } from './cache'
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler'

export default new Router()
  .use(starterRoutes)

  // Home page
  .match('/', shoppingFlowRouteHandler)
  .match('/home', shoppingFlowRouteHandler)

  // PLP pages
  .match('/new/:path*', shoppingFlowRouteHandler)
  .match('/bath/:path*', shoppingFlowRouteHandler)
  .match('/gifts/:path*', shoppingFlowRouteHandler)
  .match('/shower/:path*', shoppingFlowRouteHandler)
  .match('/hair/:path*', shoppingFlowRouteHandler)
  .match('/face/:path*', shoppingFlowRouteHandler)
  .match('/scent/:path*', shoppingFlowRouteHandler)
  .match('/products/:path*', shoppingFlowRouteHandler)
  .match('/ingredients/:path*', shoppingFlowRouteHandler)
  .match('/bath-and-shower/:path*', shoppingFlowRouteHandler)
  .match('/bath-shower/:path*', shoppingFlowRouteHandler)
  .match('/extras/:path*', shoppingFlowRouteHandler)
  .match('/body/:path*', shoppingFlowRouteHandler)
  .match('/by-occasion/:path*', shoppingFlowRouteHandler)
  .match('/shop-by-price/:path*', shoppingFlowRouteHandler)
  .match('/stories/:path*', shoppingFlowRouteHandler)

  // PDP pages
  .match('/bath/:path.html', shoppingFlowRouteHandler)
  .match('/gifts/:path.html', shoppingFlowRouteHandler)
  .match('/shower/:path.html', shoppingFlowRouteHandler)
  .match('/hair/:path.html', shoppingFlowRouteHandler)
  .match('/face/:path.html', shoppingFlowRouteHandler)
  .match('/scent/:path.html', shoppingFlowRouteHandler)
  .match('/ingredients/.html', shoppingFlowRouteHandler)
  .match('/bath-and-shower/:path.html', shoppingFlowRouteHandler)
  .match('/bath-shower/:path.html', shoppingFlowRouteHandler)
  .match('/extras/:path.html', shoppingFlowRouteHandler)
  .match('/body/:path.html', shoppingFlowRouteHandler)
  .match('/by-occasion/:path.html', shoppingFlowRouteHandler)
  .match('/shop-by-price/:path*', shoppingFlowRouteHandler)
  .match('/body/:path.html', shoppingFlowRouteHandler)

  // All Images in /dw/image/v2
  .match('/dw/image/v2/:path.jpg', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })

  // example route for cacheable assets:
  .match('/images/:path*', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })

  .match('/service-worker.js', ({ serviceWorker }) => serviceWorker('dist/service-worker.js'))
  .match('/main.js', ({ serveStatic, cache }) => {
    cache(CACHE_ASSETS)
    return serveStatic('dist/browser.js')
  })

  // fallback route for all other requests:
  .fallback(({ proxy }) => {
    proxy('origin')
  })
