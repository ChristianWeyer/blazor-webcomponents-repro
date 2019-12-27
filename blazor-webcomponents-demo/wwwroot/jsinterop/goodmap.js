var interopJS = interopJS || {}

interopJS.maps = {
    init: _ => {
        var map = document.querySelector('good-map');

        map.addEventListener("google-map-ready", function (e) {
            console.log('### google-map-ready event fired!');
            console.log(e);
        });
    }
}

window.interop = interopJS;
