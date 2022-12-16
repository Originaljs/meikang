export const flexible = (window: Window, document: Document) => {
    let docEl = document.documentElement;
    let dpr = window.devicePixelRatio || 1;

    // adjust body font size
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = 12 * dpr + "px";
        } else {
            document.addEventListener("DOMContentLoaded", setBodyFontSize);
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 24
    function setRemUnit() {
        let ws = docEl.clientWidth / 24;
        let hs = docEl.clientHeight / 13.5;
        let rem = ws > hs ? hs : ws;
        docEl.style.fontSize = rem + "px";
    }

    setRemUnit();

    // reset rem unit on page resize
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            setRemUnit();
        }
    });

    // detect 0.5px supports
    if (dpr >= 2) {
        let fakeBody = document.createElement("body");
        let testElement = document.createElement("div");
        testElement.style.border = ".5px solid transparent";
        fakeBody.appendChild(testElement);
        docEl.appendChild(fakeBody);
        if (testElement.offsetHeight === 1) {
            docEl.classList.add("hairlines");
        }
        docEl.removeChild(fakeBody);
    }
};
