console.log("hello buddy");
console.log("siddhant tomar");

fullname="tonny stark";
fullName="iron man";  //here the javascript is case sensitive so fullname & fullName are different
console.log(fullname);
console.log(fullName);


age=19;
console.log(age);

price=150.50;
console.log(price);

x=null;
console.log(x);

y=undefined;
console.log(y);


// correct way to declare a variable in javascript is using var,let,const keywords. 

let totalPrice=500;
console.log(totalPrice); // let value can be updated or changed once it is assigned

const PI=3.14;
console.log(PI);
// const value can not be changed or updated once it is assigned

const student={
    name:"sidd",
    age:19,
    marks:85,
    isPass:true,
};
console.log(student);

console.log(student["name"]);
console.log(student["age"]);
console.log(student["marks"]);
console.log(student["isPass"]);

// update value
// change age of student
student["age"] = student["age"] + 1;
console.log(student["age"]);

// change name of student
student["name"] = "simo"
console.log(student["name"]);


//    practice question 

const profile={
    username:"siddhant tomar",
    isFollow: false,
    followers: 256,
    following: 150,
}

console.log(typeof profile["isFollow"]);