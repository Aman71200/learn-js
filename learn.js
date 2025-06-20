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


// function modifyStudents(arr) {
  // Step 1: push
  // Step 2: shift
  // Step 3: splice (for Zara)
  // Step 4: slice and return sliced array

  // return dono: final array + sliced
// }
