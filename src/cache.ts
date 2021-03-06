const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR

/**
 * The default cache setting for pages in the shopping flow
 */
export const CACHE_PAGES = {
    edge: {
        maxAgeSeconds: ONE_HOUR,
        forcePrivateCaching: true,
        staleWhileRevalidateSeconds: ONE_HOUR, //added to line to ensure really successful cache hit rates
    },
    browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_HOUR,
    },
}

/**
 * The default cache setting for static assets like JS, CSS, and images.
 */
export const CACHE_ASSETS = {
    edge: {
        maxAgeSeconds: ONE_DAY,
        forcePrivateCaching: true,
        staleWhileRevalidateSeconds: ONE_HOUR, //added to line to ensure really successful cache hit rates
    },
    browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_DAY,
    },
}
