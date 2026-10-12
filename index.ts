//  DataTypes

// 1. number datatype
        // let productPrice:number = 100;
        // console.log(productPrice);

        let productPrice:number;
        productPrice = 150;
        console.log(productPrice);

 // 2. string datatype
    let productName:String = "iPhone 14 Pro Max";
    console.log(productName);

// 3. boolean datatype
    let isLoggedIn: boolean = true;
    console.log(isLoggedIn);

// 4. undefined datatype
    // let userName:undefined;
    // console.log(userName);

    let userName:undefined | String = undefined;
    console.log(userName);
    userName = "krishna";
    console.log(userName);

// 5. null datatype
    // let user:null = null;
    // console.log(user);

    let user:null | String = null;
    console.log(user);
    user = "Ram";
    console.log(user);

// 6. Array for number
let arr:number[] = [10,20,30,40,50];
console.log(arr);
arr.push(60);
console.log(arr);

// 7. Array for string
let user1:String[] = ["Ram", "Shyam", "mohan", "rohan"];
console.log(user1);
user1.push("Gopal");
console.log(user1);

// 8. TypeScript datatype 
        // a. any --> any datatype kisi bhi type ka data store kar leta hai
        // b. unknown --> unknown datatype kisi bhi type ka data store kar sakta hai. but
        //  unknown ke kes mai hum direct change nahi kar sakta hai. change karne se phele
        //  type check karna padega jab change kar sakte hai

        // a. any
        let ar:any[] = [50,60,"mohan", "shyam", "Gopi"];
        console.log(ar);


        // b. unknown
        let test:unknown = "Hare Krishna";
        console.log(test);
        // console.log(test.toUpperCase());
        if(typeof(test)=="string"){
            let t = test.toUpperCase();
            console.log(t);
        }

// 9. enum datatype :--> fix value ka group banane ke liye use hota hai
        enum Role {
            Admin = 1,
            User = 2,
            Guest = 3
        }

        let userRole:Role = Role.Admin;
        console.log(userRole);
        console.log(Role[1]);

    enum status{
        success = "success",
        pending = "pending",
        rejected = "rejected"
    }
    let userStatus:status = status.success;
    console.log(userStatus);

// 9. Fix array size and type
// let demo:[number, String] = [50,"Ram"];
// console.log(demo);

// let demo:[number, String?] = [50];
// console.log(demo);

let demo:[number ?, String ?] = [];
console.log(demo);


// 10. Readonly ka matlab ab hum esme koi change nahi kar sakte
let user2: readonly String[] = ["Ram","Shyam", "mohan", "rohan"];
console.log(user2);

// 11. Object in TypeScript
    let userObj :{name:String, age:number}={
        name:"Ra,",
        age:25
    }
    console.log(userObj);

// 12. Nested Object in TypeScript;
    let userAddress : {
        readonly name:String,
        email:String,
        address:{
            pincode:number,
            city:String
        }
    }={
        name:"Krishna",
        email:"krishna@gmail.com",
        address:{
            pincode:251218,
            city:"varandavan"
        }
    }
    console.log(userAddress);

// 13. type structure ko fix karta hai
    type userObj1={name:String,
                  age:number
                 }

    let user3:userObj1 = {
        name : "Mohan",
        age : 25
    }
    console.log(user3);

    let user4:userObj1 = {
        name : "Shyam",
        age : 24
    }
    console.log(user4);


// 14. Array of Object
    type userObj2={name:String,
                  age:number
                 }

    let userListnew:userObj2[]=[
        {
            name:"price",
            age:25
        },
        {
            name:"Mohan",
            age:22
        },
        {
            name:"Monu",
            age:21
        }
    ]
    console.log(userListnew);



    // Function in TypeScript
    function addData(num1:number, num2:number):number{
        // return "Hello;"
        return num1+num2;

    }
    console.log(addData(10,30));


    function sumArr(arr:number[]) :number[]{
        return arr.map((v:number):number=>v+5);
    }
    console.log(sumArr([40,50,60,70]));


    // Arrow Function in TypeScript 
    let sumOfArray = (arr:number[]):number =>{
        return arr.reduce((v,t)=> t+v, 0)
    }
    console.log(sumOfArray([10,20,30]));


    // No return type function 
    function displayData():void{
        console.log(10+20);
    }
    displayData();


