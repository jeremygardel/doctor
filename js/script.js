 /* TEEEST */

var clickreply = document.getElementById("btnp");
var clicklike = document.getElementById("clickme");
var divy = document.getElementById("divs");
var checkicon = document.getElementById("checki");
var thumbsicon = document.getElementById("thumbsi");

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
    console.log(onclicklike); 
    
  
  }
};

clicklike.onclick = onclicklike;


