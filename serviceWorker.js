const staticDevCoffee = "eecalc-site-v1"
const assets = [
    "/",
    "/index.html",
    "/index.css",
    "/index.js",
    "/images"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("activate", evt => {
    console.log("activated");
});


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})