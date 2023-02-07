let title = " Zero" , desc = " El zero web school" , date = 2022;

let a = 2;
let b = 1;
console.log(b - a);
let div = `
    <div>
      <h3>${title}</h3>
      <p> ${desc}</p>
      <span>${date}</span>
    </div>

`;

let numberBe = "mahmoud web schools";


document.write(div.repeat(2)); // Repeat

document.write(numberBe.charAt(14).toUpperCase().repeat(2)); // 8H

console.log(numberBe.slice(0 , 7).charAt(0).toUpperCase() + numberBe.slice(1,7));  //  Mahmoud

console.log(numberBe.split(" ", 1));  // Return one array

console.log(numberBe.substr(0, 7) + " " + numberBe.substr(12) );   // Mahmoud Schools with Concentation 

console.log(numberBe.slice(0, 1).toLowerCase() + numberBe.slice(1,18).toUpperCase()
 + numberBe.slice(-1).toLowerCase());   // mAHMOUD WEB SCHOOLs 
