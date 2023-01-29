 /* TEEEST */

var clickreply = document.getElementById("btnp");
var clicklike = document.getElementById("clickme");
var divy = document.getElementById("divs");

/*  Here when we define the function 'onclickreply' and ask if its none or not...' */
function onclickreply() {
if (divy.style.display === "none") {
    divy.style.display = "flex";
  } else {
    divy.style.display = "none";
  }
}

clickreply.onclick = onclickreply;  // here onclick on clickreply button, go to function click here so its shows at first click and hidden at second click


clicklike.onclick = function onclicklike () {
    clickme.style.fontWeight= "700"; // This is for Font Weight
    clickme.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>Liked'; // This is for Viewing the icon with the letter
    console.log(clicklike); 
};
