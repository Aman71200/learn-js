// js day 1

console.log("Hello buddy! JS Challenge Day 1");

// Variables

let name = "Aman";
let age = 18;

// Data Types 

console.log(typeof name);
console.log(typeof age);

// String operations 

let greet = "Hello" + name;
console.log(greet);

// Template literals

console.log('Your Age is ${18}');

// Simple Math

console.log(10 + 5);
console.log(10 % 3);

// Conditions 

if (age >= 18){
    console.log("Audult");
} else {
    console.log("Not an adult");
}

// Prompt 

// let userName = prompt("What is your Name:");
// console.log(userName);

// prompt example

// let city = prompt("Which city?", "Delhi");
// console.log(city);
// console.log(typeof city);

// Odd and Even identyify by using prompt

// let num = Number(prompt("Enter a number:"));
// if (num % 2 === 0) {
//   alert("Even number");
// } else {
//   alert("Odd number");
// }

// Array

let fruits = ["Apple","Mango","Orange"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// // Number mini practice task find 

let sum = 0;
let numbers = [10,20,30,40,50];
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

let avg = sum/numbers.length;
console.log("sum", sum);
console.log("avg", avg);

// // find largest Num

let nums = [12,15,13,75,80];
let max = nums[0];

for(let i = 0; i < nums.length; i++){
    if(nums[i] > max){
        max = nums[i];
    }
}
console.log("max Value:", max);

// Find Even or Odd while using Loop

// for(let i = 0; i <= 20; i++){
//     if (i % 2 === 0) {
//     console.log("odd =", i);
//     }
// }

// Mini task with while loop and prompt

// let rightNum = 100;
// let guessNum = prompt("enter your guessing Number:");

// while (guessNum != rightNum) {
//     let guessNum = prompt("You entered wrong number: guessing Again:");    
// }
// console.log("congratulations, You guess right number");

// // Question number 3

// let socialName = "";
// socialName = getName = prompt("Enter your Name");
// let finalName = "@"  + getName + getName.length;
// console.log(finalName);

// Question number 4 Reverse the Loop

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Day 3 of laerning javaScript 

// today Question no 1 is basic insert or remove

let cities = ["Delhi", "Mumbai", "Kolkata"];
cities.push("channai");
let removeCity = cities.shift();
let addedCity = cities.unshift("Jaipur");
console.log(`updated Cities: ${cities}`);

// Question Number 2 : Chekck & toggle if "pen" is exist remove it else add it

let cart = ["pen", "notebook", "eraser"];
let item = "pencil"; // Change to an item not in the cart
if (cart.includes(item)){
    let index = cart.indexOf(item);
    cart.splice(index, 1);
    console.log(`${item} was removed from cart.`);
} else {
    cart.push(item);
    console.log(`${item} was added to cart.`);
console.log("upadtedCart:", cart);
}

// Question Number 3 : Replace "drill" with "screwdriver"

let tools = ["hammer", "drill", "saw"];
let removeTool = "drill";
let addedTool = "screwdriver";

if(tools.includes(removeTool)){
    let index = tools.indexOf(removeTool);
    tools.splice(index, 1, addedTool);
    console.log(`${tools} was removed from tools`);
} else {
    tools.push(addedTool);
    console.log(`${tools} was added to tools`);
}

// Question number 4 : Remove "blue" and "yellow" from the array

let colors = ["red", "green", "blue", "yellow", "purple"];
colors.splice(2, 2);
console.log( "fianl colors:", colors);

// Question number 5 : Remove target and add newSong in the Playlist

let playlist = ["song1", "song2", "song3"];
let target = "song2";
let newSong = "song99";

if(playlist.includes(target)){
    let index = playlist.indexOf(target);
    playlist.splice(index, 1, newSong);
    console.log(`${target} was removed from playlist`);
} else {
    playlist.push(newSong);
    console.log(`${target} newsong was added to playlist`);
}
console.log( "updated playlist:", playlist);

// Question Number 6 : "stretch" ko "eat" ke pehle insert karna hai Agar "eat" nahi mila, to "stretch" ko end me add kar dena hai.

let tasks = ["wake", "eat", "code"];
let newTask = "stretch";
let before = "eat";

if (tasks.includes(before)){
    let index = tasks.indexOf(before);
    tasks.splice(index, 0, newTask);
    console.log(`${before} was removed`);
} else {
    tasks.push(newTask);
    console.log(`${newTask} was added`);
}
console.log("Updated tasks:", tasks);

// Question Number 7 : "verifyEmail" ko "login" ke baad insert karna hai. Agar "login" nahi mila, to "verifyEmail" ko start me add karna hai
// Expected Outputs
// ["login", "verifyEmail", "dashboard", "logout"]
// ["verifyEmail", "dashboard", "logout"]

let queue = ["login", "dashboard", "logout"];
let urgentTask = "verifyEmail";
let after = "login";

if(queue.includes(after)){
    let index = queue.indexOf(after);
    queue.splice(index + 1, 0, urgentTask);
    console.log("urgent task was added")
} else {
    queue.unshift(urgentTask);
    onsole.log(`${urgentTask} was added at start`);
}

// Question #8: Clean Your Cart remove all "pre" from cart

let oldCart = ["pen", "pencil", "eraser", "pen", "scale"];
let itemToRemove = "pen";

if(oldCart.includes(itemToRemove)){
    let index = oldCart.indexOf(itemToRemove);
    oldCart.splice(index, 1);
    console.log("new cart was clean now", oldCart);
}

// Question #9: To-Do List Insertion
// Tumhe urgentTask ko "eat" ke baad insert karna hai. Agar "eat" array me nahi mila, to urgentTask ko end me daalna hai
// xpected Output:
// ["wake", "eat", "call mom", "code", "sleep"]
// or (if "eat" not found)
// ["wake", "code", "sleep", "call mom"]

let todo = ["wake", "eat", "code", "sleep"];
let urgentWork = "call mom";
let afterTask = "eat";

if(todo.includes(afterTask)){
    let index  = todo.indexOf(afterTask);
    todo.splice(index + 1, 0, urgentWork);
    console.log("urgent work was added");
} else {
    console.log("not found");
}

// Question #10: Smart Insertion in Notes App
// "Functions" ko "Async" ke pehle insert karo
// Agar "Async" milta hai to splice() se use karo
// Agar nahi milta, to "Functions" ko end me add karo
// Expected Output:
// If "Async" exists:
// ["Intro", "JS Basics", "DOM", "Functions", "Async"]
// If not:
// ["Intro", "JS Basics", "DOM", "Async", "Functions"]

let notes = ["Intro", "JS Basics", "DOM", "Async"];
let newNote = "Functions";
let insertBefore = "Async";

if(notes.includes(insertBefore)){
    let index = notes.indexOf(insertBefore);
    notes.splice(index + 1, 0, newNote);
    console.log(`${newNote} was updated`);
} else {
    notes.push(newNote);
    console.log(`${newNote} was added`);
}

// Day 4 Starting Challenge

// 1. Add "Aman" at the end
// 2. Remove the first student
// 3. Insert "Zara" at index 1 without removing anyone
// 4. Slice from index 1 to 3 and store in new array
// Solve and print final students + sliced array

let students = ["Ali", "Sara", "John", "Meena"];
let findStudent = "Sara";
let addStudent = "Zara";
let finalStudents = [];

function studentData() {
    students.push("Aman");
    students.shift();

    if (students.includes(findStudent)) {
        let index = students.indexOf(findStudent);
        students.splice(index + 1, 0, addStudent);
        console.log(`${addStudent} was added`);
    }

    let sliced = students.slice(1, 3);
    finalStudents.push(...sliced);
    console.log("Final Students:", students);
    console.log("Sliced Students:", finalStudents);
}

studentData();

// # Day 4 – JavaScript Array Functional Methods
// map(), filter(), reduce();
// Ready-to-use Example:

let products = [
  { name: "Shirt", price: 500 },
  { name: "Pant", price: 800 },
  { name: "Socks", price: 100 }
];

// 1. Discounted price (map)
let discounted = products.map(p => ({ ...p, price: p.price * 0.9 }));
console.log(discounted, "price after discount");

// 2. Only products above 200 (filter)
let premium = discounted.filter(p => p.price > 200);
console.log(premium, "produts above 200");

// 3. Total bill (reduce)
let total = premium.reduce((acc, item) => acc + item.price, 0);
console.log(total, "ypur total price");

// Day 4 questions

// map() syntax
// let newArray = oldArray.map(function(item, index, array) {
//   return modifiedItem;
// });
    
// shorthand
// let newArray = oldArray.map(item => modifiedItem);
    
// Question 1 Use map() to return a new array of squares

// let digits = [1, 2, 3, 4, 5];
// let sqared = digits.map(digits => digits * digits);
// console.log(sqared);

// example Question Slightly Real Example — Add GST to Prices

let prices = [100, 200, 300];
let gstPrices = prices.map(price => price + price * 0.18);
console.log(gstPrices, "Your bill after GST"); // [118, 236, 354]

// example question Loop + Object Example

let users = ["Ali", "Sara", "Zara"];
let greetings = users.map(name => `Hello, ${name}!`);
console.log(greetings);
// ["Hello, Ali!", "Hello, Sara!", "Hello, Zara!"]

// Day 4 Questions 
// Q1. Start Sqare All Numbers

// Output: [4, 9, 16]

let digits = [2, 3, 4];
let squareNums = digits.map(digit => digits * digits);
console.log("All nums are squaed", squareNums);

// Q2. Convert strings to uppercase
;
// Output: ["ALI", "SARA", "ZARA"]

let names = ["ali", "sara", "zara"];
let uppercase = names.map(names => names.toUpperCase());
console.log("All nanes without converted to uppercase", names);
console.log("All nanes are converted to uppercase", uppercase);

// Q3. Add ₹100 delivery charge to each order

// Output: [600, 1100, 850]

let orders = [500, 1000, 750];
let afterCharge = orders.map(order => orders + 100);
console.log("Your Bill after adding dilivery Charges", afterCharge);

// Q4. Attach "Mr./Ms." in front of each name

// Output: ["Mr./Ms. Ali", "Mr./Ms. Sara", "Mr./Ms. John"]

let guests = ["Ali", "Sara", "John"];
let afterBecome = guests.map(guest => `Mr./Ms. ${guests}`);
console.log("Names after adding Mr and Ms", afterBecome);

// Q5. with object 
// Double the prices in array of objects
// output 
// [
//   { name: "pen", price: 20 },
//   { name: "notebook", price: 100 }
// ]


let items = [
  { name: "pen", price: 10 },
  { name: "notebook", price: 50 }
];

let doublePrice = items.map(items => ({...items, price: items.price + items.price}))
console.log("Items price after Double the price", doublePrice);

// filter syntax

// let newArray = oldArray.filter(function(item, index, array) {
//   return condition;
// });

// shorthand 
// let newArray = oldArray.filter(item => condition);

// Examples code and logics 
// with array
let numData = [10, 25, 5, 30];

let result = numData.filter(num => num >= 20);
console.log(result); // [25, 30]

// with object

let usersData = [
  { name: "Ali", active: true },
  { name: "Sara", active: false },
  { name: "Zara", active: true }
];

let activeUsers = usersData.filter(user => user.active);
console.log(activeUsers);

// common mistakes to Avoid

// array.filter(item => item * 2); // ❌ Wrong
// Because filter expects: true / false

// Correct:
// array.filter(item => item > 10); // ✅


// Q6. Filter numbers >= 50

let filterNums = [20, 55, 10, 99, 42, 75];
// Output: [55, 99, 75]

let getFinalNum = filterNums.filter(nums => nums >= 50);
console.log(`numbers was filtered ${getFinalNum}`);

// Q7. Filter even numbers

let values = [1, 2, 3, 4, 5, 6, 7, 8];
// Output: [2, 4, 6, 8]

let evenVlaues = values.filter(val => val % 2 === 0);
console.log(`All even values is ${evenVlaues}`);

//  Q8. Filter affordable products

let productsData = [
  { name: "Bag", price: 200 },
  { name: "Shoes", price: 1500 },
  { name: "Cap", price: 300 }
];

// Filter products with price < 1000
// Output: [{ name: "Bag", price: 200 }, { name: "Cap", price: 300 }]

let affordable = productsData.filter(p => p.price < 1000);
console.log("All affoardable produts are here", affordable);

// Q9. Filter passed students

let marks = [
  { name: "Ali", score: 33 },
  { name: "Sara", score: 85 },
  { name: "Zara", score: 20 },
  { name: "John", score: 77 }
];

// Passing marks: >= 35
// Output: [{ name: "Sara", ... }, { name: "John", ... }]

let finalResult = marks.filter(m => m.score >= 35);
console.log("Students who passed the Exam", finalResult);

// Q10. Filter truthy values only

let messy = [0, "Ali", "", false, 42, null, "Zara"];
// Output: ["Ali", 42, "Zara"]

let clean = messy.filter(item => Boolean(item));
console.log(`All turthy values is ${clean}`);