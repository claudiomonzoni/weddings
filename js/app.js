
const sendmail = require('sendmail')(
    {
        logger: {
          debug: console.log,
          info: console.info,
          warn: console.warn,
          error: console.error
        },
        silent: false,
        devPort: 1234, // Default: False
        devHost: 'localhost', // Default: localhost
        smtpPort: 2525, // Default: 25
        smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
      }
);
// Modal Image Gallery
import {onClick} from "./galeria.js"
const galeria = document.getElementById("galeria")
const imagenes = galeria.querySelectorAll(".m3 img")
imagenes.forEach(imagen => {
    imagen.addEventListener("click", ()=>{
    onClick(imagen)
    })
});


// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
document.getElementById("toggle").addEventListener("click", toggleFunction )


// video
const play = document.querySelector("#play");
const video = document.getElementById("video");

play.addEventListener("click", (e) => {
    e.preventDefault();
    video.play();
    play.style.opacity = "0";
  });
  
  video.addEventListener("click", (e) => {
    e.preventDefault();
    video.pause();
    play.style.opacity = "1"
  });
  
//   contacto
  
  //instagram feed 
  
  new InstagramFeed({
      'username': 'weddingsinzihua',
      'container': document.getElementById("instagram"),
      'display_profile': false,
      'display_biography': false,
      'display_gallery': true,
      'display_captions': false,
      'callback': null,
      'styling': true,
      'items': 8,
      'items_per_row': 4,
      'margin': 1 
  });
