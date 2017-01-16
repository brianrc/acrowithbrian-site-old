// FIX VH change of address bar  https://bugs.chromium.org/p/chromium/issues/detail?id=428132#c73
function stabilizeVH(element) {
    var HEIGHT_CHANGE_TOLERANCE = 100; // Approximate height of URL bar in Chrome on tablet
    var viewportHeight = window.innerHeight;
    var elementHeight = element.offsetHeight;
    var originalElementPercent = element.offsetHeight / viewportHeight;

    window.addEventListener('resize', function() {
        if (Math.abs(viewportHeight - window.innerHeight) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = window.innerHeight;
            elementHeight = window.innerHeight * originalElementPercent;
            update();
        }
    });

    function update() {
        element.style.height = elementHeight + "px";
    }

    update()
}
const isBrowser = typeof window !== 'undefined'
if (isBrowser) {
  var elements = document.querySelectorAll(".stabilizeVH");
  for (var i = 0; i < elements.length; i++) {
      stabilizeVH(elements[i]);
  }
}
