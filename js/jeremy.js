
// t3rreef el variables lel divs w inputs


var productinput = document.getElementById("product_input");
var productbtn = document.getElementById("product_btn");
var productdiv = document.getElementById("product_div");
var data = [
    { id: 1, name: "omar", desc: "Omk" },
    { id: 2, name: "Khaled", desc: "Omk" },
    { id: 3, name: "Twafik", desc: "Omk" },
    { id: 4, name: "OmarKhaled", desc: "Omk" }

];


// Draw Items ely httb3 el elements el mowgoda asln

function drawUi(items) {
    items.forEach( function(ele) {   // ele 3shan n3dy 3la kol ID lw7do 
    
        productdiv.innerHTML += "<div>" + ele.name  +"</div>";  // += de 3shan ttb3 kolo mesh a5r w7da bs

});
}

// Load of Data 3shan b3d ma t7ml el window of html page
window.onload =function () {
    drawUi(data);
};


productbtn.addEventListener ("click", additem);  // onclick on the button


// function ely hy7sal b3d el click on the button

function additem () {
    
    if(productinput.value == "" ) {
        alert("you should enter");  // el if de 3shan law el input fady y3ml alert
    } else 
    { // else hna ely hy7sl low ktbna 7aga fe el input
        var lastid = data.length?data[data.length - 1].id: 1;  // t3reeef el lastid lel data length   ...ex: 0,1,2,3...
        // el data.length? we el : 1; m3naha if el data length kan fady deflo 1

        
        data.push({id: ++lastid, name: productinput.value, desc: "Omk"})  //Add Array to the data var.

        var addeditem = data[data.length - 1 ]; //bn2lel el length fe el data 3shan bt2l wa7d 3n el id    ex id: 1,2,3 ... ex length: 0,1,2,3
        productdiv.innerHTML += "<div>" + addeditem.name  +"</div>"; // bttb3 el data (added item ) bel Name of ely d5lnah b2a


        productinput.value = "";  // btfdy el input b3d el ktaba
 
    }
};