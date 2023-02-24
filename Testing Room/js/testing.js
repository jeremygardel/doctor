

// Java Script Testing


// Quotes Testing 
let divDisplay = document.getElementById("divDisplay");
let btnDisplay = document.getElementById("btnDisplay");
const quotes = [
  'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',
  'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
  'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
  'Don\'t judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson',
  'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller',
  'Whoever is happy will make others happy too. -Anne Frank',
  'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson'

];

function newQuote() {
  let randomQ = Math.floor(Math.random() * (quotes.length));
  divDisplay.innerHTML = quotes[randomQ];
  
}
window.onload = function() {
  divDisplay.innerHTML = "";
  //newQuote(); ms7t de 3shan yzhar fe el awl el inner html fady
  btnDisplay.addEventListener('click', newQuote);
}



//Switch case to if case'=

// let jobs = ['Manager', 'Information Tech', 'Support', 'Developer', 'Designer']
let job = "Designers";
let salary = 0;
switch (job) {
  case "Manager":
    salary = 8000;
    console.log("I am a manager" + " " + salary);
    
    break;
  case "Designer": 
    salary = 6000;
    console.log("I am a designer" + " " + salary);
  default: 
    console.log ("none of above" + " " + salary);

}
// If to switch
/*if(job === "Designer") {
  salary = 4000;
  console.log ( "I am a desinger" + " " + salary);
}
else if +(job === "Manager" || job === "driver") {
  salary === 7000;
  console.log ( " IAm a manager/driver" + " " + salary);

}
else {
console.log (" bye");
} */


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
//console.log(div.repeat(1)); // Repeat


// If condition 

let r = 40;
  // IF CONDITION Ternary
r < 10 ? console.log(10)  : 
  r >= 10 && r <= 40 ? console.log("10 to  40") :
  r > 40 ? console.log("bigger than 40") :
  console.log("not found");

 

//as// Concentation & String Methods
let numberBe = "mahmoud web schools";
if(numberBe.length + numberBe.length === 38 )
{
  
  console.log(numberBe.length * numberBe.length + " " + "Found");
}
else { console.log("UNDEFINED");
}

if(numberBe.charAt(numberBe.search("j")) === "j") {
	console.log("Good Searched for the letter");
}
else { console.log("Not found the letter");
}

if(typeof numberBe === 'object')
{
  console.log("Yes sir ");
}
else {
  console.log("a7a");
}

console.log(numberBe.charAt(14).toUpperCase().repeat(7)); // 8H

console.log(numberBe.slice(0 ,1).toUpperCase() + numberBe.slice(1,7));  //  Mahmoud

console.log(numberBe.split(" ", 1));  // Return one array (split for array)

console.log(numberBe.substr(0, 7) + " " + numberBe.substr(12, 7) );   // Mahmoud Schools     with Concentation 

console.log(numberBe.slice(0, 1).toLowerCase() + numberBe.slice(1,18).toUpperCase()
 + numberBe.slice(-1).toLowerCase());   // mAHMOUD WEB SCHOOLs 




 // Array Selecting & joining



// Without slice

let omar = ["Ahmed", "Eman", "Osama", "Gamal"];
omar.shift();
omar.pop();
console.log(omar);

// Slice  >   NOT INCLUDING END!
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer" ];
let my2 = ["Sara", "mtwly"];





// Starting from Ahmed and ending at Ahmed [ not including end ]

//console.log(my.slice(zero, ++counter).reverse());  // NOT INCLUDING END!  //['Osama ', 'Elham ', 'Mazero', 'Ahmed']

// ["Elham" ,"Mazero"]
//console.log(my.slice(++zero,--counter).reverse()); // ["Elham" ,"Mazero"]



//     Elham(2) counter=2              El        Mazero(1)    zero         
//console.log(my[--counter].slice(zero, counter)+my[++zero].slice(counter)); // "Elzero"



//console.log(my[zero].slice(zero,--counter)+my[++zero].slice(counter));// "Ahzero"


//                Mazero > r            Mazero > O 
//console.log(my[++zero][++counter]+my[zero][++counter].toUpperCase()); // rO


//console.log(my.concat(my2)); // joining my with my2 > concat function



//          Looping (For)

let Friends = [1,2, "Nour", "Yomna", "Mahmoud", "Ali", "Niera", "Othman"];

let Names = [];
// Trying to push arrays in name array with 'for'
for(j = 0; j < Friends.length; j++) {
  if(typeof Friends[j] === "string") {
    Names.push(Friends[j]);
  }
  console.log(Names);
  
}
// trying continue function & break function
for (i = 0; i < Friends.length; i++) {
  
  if(Friends[i] === "Mahmoud") {
    continue;
  }
  console.log(Friends[i]);
}

// Loop Testing
let teachers = ["Ahmed", "Ali", "Carl", "Crock", "Opera", "Opf" ];
let students = ["Ahre", "Ckea", "Cea", "Arioa", "Cera"];

let count = 5;

for(let i = 0; i < count; i++) {
  document.write(`<p> The Teacher of the name is [${i+1}]  ${teachers[i]} </p>`);
  document.write(`<h2> Team Students </h2> `);
  if(teachers[i][0] === "A") {
    let t = 0;
    for(let j = 0; j < students.length; j++)
    {
      if(students[j][0] === "A")
      {
        t += 1;
        document.write(`<p> [${t}] ${students[j]}</p>`);
      }
      
    }

  }
  else if(teachers[i][0] === "C") {
    let k = 0;
    for(let j = 0; j < students.length; j++) {
      if(students[j][0] === "C") {
        k += 1;
        document.write(`<p> [${k}] ${students[j]}</p>`);
      }
    }
  }
  document.write(`<p> ----------------- ---------------------- </p> `); 
}


// Another Loop Test

let friendsy = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counters = 0;

for(let i = index; i < friendsy.length; i++) {
  if(friendsy[i][index] === "A" || typeof friendsy[i] === "number") {
    continue;
  }
  console.log(friendsy[i]);
}



// Function Basics
function jeremy(jermo, rashd) {
  console.log( `Hello ${jermo}, is ${rashd}`);
}
jeremy("jermo", 4);
/*
function generateyear(start,end, stop) {
  for(let i = start; i < end; i++) {
    
    if(i === stop) {
      continue;
    }
    console.log(i);
  }
}
generateyear(1990,2024,2022);
*/

//Random Function Arguments
function showDate(...useful) {
  let a = 0;
  let b = 0;
  let c = 0;
  for(let i = 0; i < useful.length; i++) {
    typeof useful[i] === 'string' ? a = useful[i] 
    : typeof useful[i] === 'number' ? b = useful[i] 
    : typeof useful[i] === 'boolean' ? c = useful[i] : console.log("Not FOund");  

  }

  console.log(`Hello ${a}, Your Age is ${b}`);
  if(c === true) {
    console.log(`You are Allowed`);
  }
  else 
  { 
    console.log(`You are not Allowed`);
  }
  
}
showDate(50, "Omar", true);
showDate("Omar", 50, true);
showDate(false, 50, "Omar");
