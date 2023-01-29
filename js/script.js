/* TEEEST */

var clickreply = document.getElementById("btnp");
var clicklike = document.getElementById("clickme");


clickreply.onclick = function () {
    divs.style.display = "flex";
}


clicklike.onclick = function () {
    clickme.style.fontWeight= "700";
    console.log(clicklike);
    clickme.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>Liked';
};
