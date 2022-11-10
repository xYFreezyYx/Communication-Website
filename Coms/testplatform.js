let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobile = regexp.test(details);
let Nav = document.querySelector(".Nav");

if(isMobile){
    Nav.style.flexDirection = "column";
    Nav.style.height = "90px";
}