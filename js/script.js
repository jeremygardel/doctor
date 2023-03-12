 /* TEEEST */

var clickreply = document.getElementById("btnp");
var clicklike = document.getElementById("clickme");
var divy = document.getElementById("divs");
var checkicon = document.getElementById("checki");
var thumbsicon = document.getElementById("thumbsi");


let loginpage = document.getElementById("popup");
let loginbtn = document.getElementById("login-btn");
let popexit = document.getElementById("pop-exit");

/*  Here when we define the function 'onclickreply' and ask if its none or flex...' */
function onclickreply() {
if (divy.style.display === "none") {
    divy.style.display = "flex";
  } else {
    divy.style.display = "none";
  }
}

clickreply.onclick = onclickreply;  // here onclick on clickreply button, go to function click here so its shows at first click and hidden at second click

// On Click like button

function onclicklike () {
  if (checkicon.style.display === "none") {   
 
    checkicon.style.display = "inline-block";   // We Set the Display of the Check mark as visible 
    clicklike.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>Liked';   // We create the check mark with letter Liked
    clicklike.style.fontWeight= "600"; 
  
  } else {
    checkicon.style.display = "none"; // We Set the Display of the Check mark as hidden
    clicklike.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>Like';  // We create the Like mark again with letter Like
   
    
  
  }
}
clicklike.onclick = onclicklike;

// Function on click on button contact (With ForEach ) 
let onesBtn = document.querySelectorAll(".ones-btn");
let contactNum = "+201069797760";

onesBtn.forEach(function(ele) {
  ele.onclick = function () {
    if(ele.innerText === contactNum) {
      ele.innerHTML = '<i class="fa fa-comment" aria-hidden="true"></i>Contact';
    }
    else {
      ele.innerHTML = `<i class="fa fa-comment" aria-hidden="true"></i>${contactNum}`;
    }
  }
});

// Slideshow of the home page

let tour = document.querySelector(".tour-btn");
let x = document.querySelectorAll(".slideshow");

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let x = document.getElementsByClassName("slideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// Subscribe Popup
let downloadBtn = document.querySelectorAll(".subscribe");
let subscribeExit = document.querySelector(".pop-exit");
let subscribe = document.querySelector(".subscribe-overlay");
let subscribeBtn = document.querySelector(".btn-subscribe");
let subscribePage = document.querySelector(".subscribe-page");
let subscribeDone = document.querySelector(".subscribe-done");

downloadBtn.forEach(function(ele) { ele.onclick = function () { subscribe.style.display = "block"; }

});

subscribeExit.onclick = function () { subscribe.style.display = "none"; }

subscribeBtn.onclick = function () {
  subscribeDone.style.display = "block";
  subscribePage.style.display = "none";
}
