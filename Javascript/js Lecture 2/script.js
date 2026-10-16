                       //Arithmatic operators
let a = 10;
let b = 3;

console.log("a =",a,"& b = ",b);
console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);  //for multiplication
console.log("a/b =", a / b);  //for division
console.log("a%b =", a % b);  //for remainder
console.log("a**b =", a ** b);  //for exponentiation

                        //unary operators

   //increment
a++; //incrementing a by 1
console.log("a =",a);    //6

   //decrement
b--; //decrementing b by 1
console.log("b =",b);    //2 


                   //next topic
               //Assigment operators
let x = 5;
let y = 3;
                // addition assignment operator
x += 4; // x = x + 4
console.log("x =",x);    // ans=9
            //    subtraction assignment operator
y -=1;
console.log("y =",y);   //ans=2

//Note aise hi sab ke stt kar sakte multiplication assignment operator, division assignment operator, remainder assignment operator, exponentiation assignment operator
      

                            //next topic

                      //comparison operators
let s = 5;
let t = 2; 

console.log("s === t", s===t);  //ans=false
console.log("s !== t", s !==t);  //ans=true
console.log("s < t", s < t);  //ans=false
console.log("s > t", s > t);  //ans=true
console.log("s <= t", s <= t);  //ans=false
console.log("s >= t", s >= t);  //ans=true


                              //next topic
                              //logical operators


let S = 6;
let T = 3;
                           //logical AND operator
let cond1 = S > T; //true
let cond2 = S === 6; //true
console.log("cond1 && cond2 =",cond1 && cond2); //ans=true
//its checking both conditions are true or not, if both are true then it will return true otherwise false
              

//logical OR operator
let A = 6;
let B = 5;
 
console.log("cond1 || cond2 =", A < B || A !== 6); //ans=false
//its checking either of the conditions is true or not, if either is true then it will return true otherwise false
//means agar ek bhi condition true hoga to ans true hoga otherwise false...orh isme hamne dono conditions ko false kar diya hai isliye false ans aaya
 
//logical not operator
let C = 6;
let D = 5;
console.log("cond1 || cond2 =", C > D); //ans=false
//its gives the positive answer if the ans is false then it will return true 

                            //conditional statements....
                                //if statement

let Age =20
if(Age >=18)  {
    console.log("you can vote");
}

                              //if-else statement
      
/*
let age = 25;
if(age >=18)  {
    console.log("you can vote");
} 
else{
  console.log ("you can not vote")
}

                            //else-if statement
let mode = "dark";
let color;

if (mode ==="dark"){
    color = "black";
} 
else if (mode === "blue") {
color = "blue";
} 
else {
    color = "white";
}   

console.log (color);
*/
         

                //Ternary operators

let age = 15;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);


            //practice questions
            //question 1
let num = prompt("enter a number:");

if(num % 5 === 0) {
    console.log(num, "is multiple of 5")
}
else{
    console.log(num, "is not multiple of 5")
}

           //question 2
let score = 75;
let grade;

if(score >=90 && score <= 100){
    grade = "A";
}
else if (score >= 70 && score <= 89){
    grade="B";
} 
else if (score >= 60 && score <= 69){
    grade ="C";
}
 else if(score >= 50 && score <= 59){
    grade = "D";
} 
else if (score >=0 && score <= 49) {
    grade="f";
}

console.log("according to your scores, your grade was :", grade);

            

