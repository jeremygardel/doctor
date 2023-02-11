

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

console.log(numberBe.charAt(14).toUpperCase().repeat(7)); // 8H

console.log(numberBe.slice(0 ,1).toUpperCase() + numberBe.slice(1,7));  //  Mahmoud

console.log(numberBe.split(" ", 1));  // Return one array (split for array)

console.log(numberBe.substr(0, 7) + " " + numberBe.substr(12, 7) );   // Mahmoud Schools     with Concentation 

console.log(numberBe.slice(0, 1).toLowerCase() + numberBe.slice(1,18).toUpperCase()
 + numberBe.slice(-1).toLowerCase());   // mAHMOUD WEB SCHOOLs 


