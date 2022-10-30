let hamburger = document.getElementById("hamburger");
let navbar = document.getElementById("navbar");
let mobileIcons = document.getElementById("mobileIcons")

hamburger.addEventListener("click", toggleMenu);

//opens and closes the hamburger menu for mobile devices
function toggleMenu(){
    navbar.classList.toggle("mobile__closed");

//enables the mobile menu icon to change from bars to x and from x to bars. 
    if (mobileIcons.classList.contains("fa-bars")){
        mobileIcons.classList.replace("fa-bars", "fa-x");
    }else {
        mobileIcons.classList.replace("fa-x","fa-bars");
    }   navbar.style.animation("")

}

  



