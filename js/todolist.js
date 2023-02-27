

// let productbtn = document.getElementById('product_btn');
// let productinput = document.getElementById('product_input');
// let productdiv = document.getElementById('product_div');


// productbtn.onclick = function(){
//     if(productinput.value.length === 0){
//         alert("Enter the name");
//     }

//     else{
//         productdiv.innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${productinput.value}
//                 </span>
//                 <button class="delete" style="margin-left: 80px; margin-top: 9px;">
//                     <i class="fa fa-trash"></i>
//                 </button>
//             </div>
//         `;
//         productinput.value = "";

//         let current_tasks = document.querySelectorAll(".delete");
//         for(let i=0; i < current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();   // Don't understand well...
                
//             }
//         }
//     }
// }









// t3rreef el variables lel divs w inputs


var productinput = document.getElementById("product_input");
var productbtn = document.getElementById("product_btn");
var productdiv = document.getElementById("product_div");
var data = [];
// let deletes = `<button id="product_delete"><i class="fa fa-trash"></i></button>`;
// let current_tasks = document.querySelectorAll('#product_delete');
//     current_tasks.onclick = function () {
      
//     }

// Draw Items ely httb3 el elements el mowgoda asln

function drawUi(items) {
    productdiv.innerHTML = "";
    items.forEach( function(ele) {   // ele 3shan n3dy 3la kol ID lw7do 
    
        productdiv.innerHTML +=         `<div onclick='deleteitem(${ele.id})'>
        ${ele.name}
        
        <button class="delete" style="margin-left: 80px; margin-top: 9px;">
                     <i class="fa fa-trash"></i></button></div>`;  

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
        alert("You should enter something");  // el if de 3shan law el input fady y3ml alert
    } else 
    { 
        // else hna ely hy7sl low ktbna 7aga fe el input
        let lastid = data.length; // t3reeef el lastid lel data length   ...ex: 0,1,2,3...
        
        data.push({id: ++lastid, name: productinput.value, desc: "Omk"})  //Add Array to the data var.

        let addeditem = data[data.length - 1 ]; //bn2lel el length fe el data 3shan bt2l wa7d 3n el id    ex id: 1,2,3 ... ex length: 0,1,2,3
        productdiv.innerHTML += `<div onclick='deleteitem(${addeditem.id})'>
        ${addeditem.name}
       
        <button class="delete" style="margin-left: 80px; margin-top: 9px;">
                     <i class="fa fa-trash"></i></button> </div>`; // bttb3 el data (added item ) bel Name of ely d5lnah b2a
        

        productinput.value = "";  // btfdy el input b3d el ktaba
        console.log(data);
    }
};
function deleteitem(id) {
    let index = data.map(function(i) {
        return i.id;

    }).indexOf(id);

    if(index !== -1) {
        data.splice(index, 1);
        drawUi(data);
    }

}