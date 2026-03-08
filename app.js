alert("Hello World Testers!");
const myFavouriteSubject = "Hello World Testers! JavaScript is fun!";
alert(myFavouriteSubject);
//Declaration of Age Variables
const $myCurrentAge1 = 35
const _myCurrentAge2 = 36
alert($myCurrentAge1);
alert(_myCurrentAge2);

console.log($myCurrentAge1);
console.log(_myCurrentAge2);

var myFavouriteSentence = "Hello World Testers! JavaScript is fun!";
console.log(myFavouriteSentence);

let myFavouriteProgrammingLanguage = "Python";
console.log(myFavouriteProgrammingLanguage);

let currentScore = 30;
/*currentScore += 10;
console.log(currentScore)*/;

const myAge = 35;
typeof (myAge);
console.log(typeof (myAge));
console.log(myAge + 20); 
const multiplyAge = myAge * 3;
console.log(multiplyAge);
const myBirthYear = 1988;
const currentYear = 2024;
const calculatedAge = currentYear - myBirthYear;
console.log(calculatedAge); 
console.log(20 < myAge);

const myFavLanguage = "JavaScript";
const myFavFramework = "React";
const myFavLibrary = "jQuery";
console.log(typeof(myFavLanguage));
console.log(typeof(myFavFramework));
console.log(typeof(myFavLibrary));
console.log('myFavouriteProgrammingLanguage is ' + myFavLanguage);

const name = "Adewale";
const greeting = "Hello, " + name + "! Welcome to JavaScript programming.";
console.log(greeting);

const sentence1 = "JavaScript is a versatile language.";
const sentence2 = "It can be used for both front-end and back-end development.";
const combinedSentence = sentence1 + " " + sentence2;
console.log(combinedSentence);

const sentence= 'My name is ' + name + ' and I love programming. I am ' + myAge + ' years old.';
console.log(sentence);


// 1. Get the current day of the week as a string
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
let day = daysOfWeek[today.getDay()];   // e.g., "Thursday"

// 2. Get the numeric position of the day (Sunday = 1, Monday = 2, ...)
let position = today.getDay() + 1;      // e.g., Thursday → 4

// 3. Create the output string using concatenation
let output = "Today is " + day + ". It is the " + position + "th day of the week.";

console.log(output);

const isBritish = true;
const isAmerican = false;
console.log(typeof(isBritish));
console.log(typeof(isAmerican));    

const userDetails = {null: "This is a null value"};
console.log(typeof(userDetails.null));

const addition = 5 + (-10);
console.log(addition);

const compare = 7 > 2; 
console.log(compare);

const isEqual = 10 === 10;
console.log(isEqual);

console.log(5 > 3 && 2 < 4); // true
console.log(5 > 3 || 2 > 4); // true
console.log(!(5 > 3)); // false 
console.log(5==5 && 10 > 5); // true
console.log(5=='5' || 10 < 5); // true

const userName = "Adewale";
let age = 35;

const logic = age === 35 && userName === "Adewale";
console.log(!logic);


if (userName === "Adewale") {
    console.log("Welcome, Adewale!");
} else {
    console.log("Welcome, guest!");
}

age = 78;
if (age >= 18) {
    console.log("You are an adult and eligible to vote.");
} else if (age >= 65) {
    console.log("You are a senior citizen and too old to vote.");
} else {                                    
    console.log("You are a minor and not eligible to vote.");
}   


age = 23;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are too young to vote.");
}


// Initialize the three sides of the triangle
let side1 = 5;
let side2 = 5;
let side3 = 8;

// Check the type of triangle
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}

const day = 'Thursday';
//if (day === 'Friday')   {
    //console.log("TGIF!!! It's Friday, time to relax!");
//}
//else if (day === 'Saturday') {
  //  console.log("It's Saturday! Enjoy your weekend!");
//}
//else if (day === 'Sunday') {
    //console.log("It's Sunday! Time to recharge for the week ahead!");
//}
//else if (day === 'Monday') {
    //console.log("Ugh, it's Monday. Back to work!");
//}

switch (day) {
    case 'Friday':
        console.log("TGIF!!! It's Friday, time to relax!");
        break;
    case 'Saturday':
        console.log("It's Saturday! Enjoy your weekend!");
        break;
    case 'Sunday':
        console.log("It's Sunday! Time to recharge for the week ahead!");
        break;
    case 'Monday':
        console.log("Ugh, it's Monday. Back to work!");
        break;
        case;
    default:
        console.log("Invalid day of the week.");
}