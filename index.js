//string 
let firstName = "John";
let secondName = 'Doe';
let concatenatedstring = firstName + " " + secondName;
document.write(concatenatedstring);

let ans = 2 + 2 + "2"; 
console.log(ans); 
console.log(typeof ans);

let ans2 = "2" + 2 + 2; 
console.log(ans2); 

//boolean to string
let bool = true;
let strBool = String(bool);
console.log(strBool);
console.log(typeof strBool);

//number to string
let num = 123;
let strNum = String(num);
console.log(strNum);
console.log(typeof strNum);

//string to number
let str = "456";
let numStr = Number(str);
console.log(numStr);
console.log(typeof numStr);

//boolean to number
let boolVal = false;
let numBool = Number(boolVal);
console.log(numBool);
console.log(typeof numBool);

//number to boolean
let number = 0;
let boolNumber = Boolean(number);
console.log(boolNumber);
console.log(typeof boolNumber);