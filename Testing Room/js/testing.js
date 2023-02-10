

// Java Script Testing
// Dynamic 


let title = " Zero" , desc = " El zero web school" , date = 2022;

let a = 2;
let b = 1;

let div = `
    <div>
      <h3>${title}</h3>
      <p> ${desc}</p>
      <span> ${date}</span>
    </div>

`;
document.write(div.repeat(2)); // Repeat


// If condition 

let r = 40;
  // IF CONDITION Ternary
r < 10 ? console.log(10)  : 
  r >= 10 && r <= 40 ? console.log("10 to  40") :
  r > 40 ? console.log("bigger than 40") :
  console.log("not found");

 


// Concentation & String Methods
let numberBe = "mahmoud web schools";
if(numberBe.length + numberBe.length === 37 )
{
  console.log(numberBe.length + "Found");
}
else { console.log("UNDEFINED");
}

if(numberBe.charAt(numberBe.search("w")) === "w") {
	console.log("Good Searched for W");
}

if(typeof numberBe === "String")
{
  console.log("Yes sir ");
}
else {
  console.log("a7a");
}

document.write(numberBe.charAt(14).toUpperCase().repeat(7)); // 8H

console.log(numberBe.slice(0 ,1).toUpperCase() + numberBe.slice(1,7));  //  Mahmoud

console.log(numberBe.split(" ", 1));  // Return one array (split for array)

console.log(numberBe.substr(0, 7) + " " + numberBe.substr(12, 7) );   // Mahmoud Schools     with Concentation 

console.log(numberBe.slice(0, 1).toLowerCase() + numberBe.slice(1,18).toUpperCase()
 + numberBe.slice(-1).toLowerCase());   // mAHMOUD WEB SCHOOLs 


