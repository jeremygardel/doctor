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
// function onclickreply() {
// if (divy.style.display === "none") {
//     divy.style.display = "flex";
//   } else {
//     divy.style.display = "none";
//   }
// }

// clickreply.onclick = onclickreply;  // here onclick on clickreply button, go to function click here so its shows at first click and hidden at second click

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
//let phoneNumbers = ["+201069797760", "+201049795010", "+201056714430", "+201052344485"]
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
let subscribeEmail = document.querySelector(".subscribe-email");
let subscribePage = document.querySelector(".subscribe-page");
let subscribeDone = document.querySelector(".subscribe-done");
let subscribeContinue = document.querySelector(".btn-continueSub");

downloadBtn.forEach(function(ele) { ele.onclick = function () { 
  subscribe.style.display = "block"; 
  subscribePage.style.display = "block"; 
}

});

subscribeExit.onclick = function () { subscribe.style.display = "none"; }

subscribeBtn.onclick = function () {
  if(subscribeEmail.value === "") {}
  else {
      if(subscribeEmail.value && subscribeEmail.value.contains('@'))
      {
        subscribeDone.style.display = "block";
        subscribePage.style.display = "none";
        subscribeEmail.value = "";
      }

  }

}
subscribeContinue.onclick = function () { 
  subscribeDone.style.display = "none";
  subscribe.style.display = "none";

}

//  POst reply in the blog
let replyDiv = document.querySelector(".new-left-reply");
let postBtn = document.querySelector(".reply-btn");
let replyInput = document.querySelector(".reply-input");
let newReply = document.querySelector(".new-reply-div");
let replyName = document.querySelector(".reply-name");
let replyDone = document.querySelector(".reply-done");
let clearBtn = document.querySelector(".clear-btn");

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
//<button class="delete" style="margin-left: 80px; margin-top: 9px;"></button>
                  

postBtn.onclick = function () {
  if(replyInput.value === ""){
    
  }
  else {
          newReply.innerHTML = `
                <div class="task">
                    <h5 id="username"> 
                      ${replyName.value} <span class="reply-date">${dateTime}</span>
                    </h5>
                    <span id="taskname" style="margin-left: 50px; marin-bottom: 10px">
                        ${replyInput.value}
                    </span>
                    
                </div>
            `;
            replyInput.value = "";
            replyInput.value = "";
            replyDiv.style.display = "none";
            replyDone.style.display = "block";

       }
  }
    
clearBtn.onclick = function () {
  replyInput.value = "";
  replyName.value = "";
}