"use strict";
//  DataTypes
Object.defineProperty(exports, "__esModule", { value: true });
// 1. number datatype
// let productPrice:number = 100;
// console.log(productPrice);
let productPrice;
productPrice = 150;
console.log(productPrice);
// 2. string datatype
let productName = "iPhone 14 Pro Max";
console.log(productName);
// 3. boolean datatype
let isLoggedIn = true;
console.log(isLoggedIn);
// 4. undefined datatype
// let userName:undefined;
// console.log(userName);
let userName = undefined;
console.log(userName);
userName = "krishna";
console.log(userName);
// 5. null datatype
// let user:null = null;
// console.log(user);
let user = null;
console.log(user);
user = "Ram";
console.log(user);
// 6. Array for number
let arr = [10, 20, 30, 40, 50];
console.log(arr);
arr.push(60);
console.log(arr);
// 7. Array for string
let user1 = ["Ram", "Shyam", "mohan", "rohan"];
console.log(user1);
user1.push("Gopal");
console.log(user1);
// 8. TypeScript datatype 
// a. any --> any datatype kisi bhi type ka data store kar leta hai
// b. unknown --> unknown datatype kisi bhi type ka data store kar sakta hai. but
//  unknown ke kes mai hum direct change nahi kar sakta hai. change karne se phele
//  type check karna padega jab change kar sakte hai
// a. any
let ar = [50, 60, "mohan", "shyam", "Gopi"];
console.log(ar);
// b. unknown
let test = "Hare Krishna";
console.log(test);
// console.log(test.toUpperCase());
if (typeof (test) == "string") {
    let t = test.toUpperCase();
    console.log(t);
}
// 9. enum datatype :--> fix value ka group banane ke liye use hota hai
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
    Role[Role["Guest"] = 3] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(userRole);
console.log(Role[1]);
var status;
(function (status) {
    status["success"] = "success";
    status["pending"] = "pending";
    status["rejected"] = "rejected";
})(status || (status = {}));
let userStatus = status.success;
console.log(userStatus);
// 9. Fix array size and type
// let demo:[number, String] = [50,"Ram"];
// console.log(demo);
// let demo:[number, String?] = [50];
// console.log(demo);
let demo = [];
console.log(demo);
// 10. Readonly ka matlab ab hum esme koi change nahi kar sakte
let user2 = ["Ram", "Shyam", "mohan", "rohan"];
console.log(user2);
// 11. Object in TypeScript
let userObj = {
    name: "Ra,",
    age: 25
};
console.log(userObj);
// 12. Nested Object in TypeScript;
let userAddress = {
    name: "Krishna",
    email: "krishna@gmail.com",
    address: {
        pincode: 251218,
        city: "varandavan"
    }
};
console.log(userAddress);
let user3 = {
    name: "Mohan",
    age: 25
};
console.log(user3);
let user4 = {
    name: "Shyam",
    age: 24
};
console.log(user4);
let userListnew = [
    {
        name: "price",
        age: 25
    },
    {
        name: "Mohan",
        age: 22
    },
    {
        name: "Monu",
        age: 21
    }
];
console.log(userListnew);
// Function in TypeScript
function addData(num1, num2) {
    // return "Hello;"
    return num1 + num2;
}
console.log(addData(10, 30));
function sumArr(arr) {
    return arr.map((v) => v + 5);
}
console.log(sumArr([40, 50, 60, 70]));
// Arrow Function in TypeScript 
let sumOfArray = (arr) => {
    return arr.reduce((v, t) => t + v, 0);
};
console.log(sumOfArray([10, 20, 30]));
// No return type function 
function displayData() {
    console.log(10 + 20);
}
displayData();
//# sourceMappingURL=index.js.map