### Part 1

https://jason-yamada-www-lushusa-com-default.layer0-limelight.link/home

### What you intended to accomplish in this assessment:
I wanted to accomplish a better understanding of the Layer0 tool and how to utilize edge caching to increase and improve website load performance but my main priority was to work on reducing the LCP for the PDPs.. I added the PLP and PDP pages to Layer0 as well as applied pre-fetch to the static images and deep fetch to the PDP images. This was done in an effort to get the site closer to instant page loads.

```
Added PLP to Layer0 routes.ts:
  // PLP pages
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
```

```
Added PDP to Layer0 routes.ts: 
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
```

```
  Static images added to routes.ts
    // All Images in /dw/image/v2
  .match('/dw/image/v2/:path.jpg', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })
```

```
Deep prefetch of PDP images in the service-worker.ts:
  function deepFetchPDPImages({ $el, el, $ }: DeepFetchCallbackParam) {
    const url = $el.attr('src')
    console.log("[][]][][[][]][][][][][[]][[][][]\nPrefetching PDP: "+url+"\n")
    prefetch(url, 'image')
  }
```

```
Revitalized PDP image sources:
    // PDP
    $('pdp-carousel-imaged img-fluid').map((i, el) => {
      const dataSrc = $(el).attr('data-src') || "";
      const newUrl = dataSrc?.replace('https://www.lushusa.com/', '/')
      $(el).attr('src', newUrl)
           .attr('data-src', newUrl)
    })
```  

### What you’d do as next steps if you had more time:
With more time, I would want to tweak the way certain assets are loaded and better target assets to cache based on logical customer flows and progressions. Add prerender to the PLP and home PDP pages and include a more extensive deep fetch for the PLP images.

### Any feedback you may have for Layer0 regarding the process:
The tool is extremely powerful and at a surface level is easy to understand, but I can see where a website could be tweaked to the point of being able to load in an instant no matter where you are, using the edge caching. I do wish more could be done within the Layer0 website. Maybe running a script a page test from within Layer0 to allow for faster feedback between changes.

### Part 2
without Layer0

www.lushusa.com

https://www.webpagetest.org/result/220113_AiDcDA_820aeb4ab746f6ffb93a0875c3dce58d/

with Layer0

https://jason-yamada-www-lushusa-com-default.layer0-limelight.link/home

https://www.webpagetest.org/result/220113_BiDcE9_e5bb6c3ee1aca5f24ddea79efa8dd876/
