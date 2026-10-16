             //Functions in js
//-Block of code that performs a specific task,can be invoked(call) whenever needed


function myrutine(){
   console.log("I have been learning English since morning"); 
   console.log("He has been enjoying his vacations"); 
}


myrutine();
myrutine();

            //parameter & argument
function myfunction(msg){
    //parameter -> input 
    console.log(msg);
}     

myfunction("I love js");  //argument

            //Function -> calculate the sum of two numbers
               
// function sum(x, y) {
//     console.log(x + y);
// }

// sum(3, 5);
// sum(100, 500);
// sum(55, 99);

           //another wayyyyy..
function sum(x,y){
    //local variable -> scope
    s = x + y;
    console.log(x);
    return s
    console.log(x); //yeh print nhi hoga q ki after return aaya koi bhi valve print ni hogi ish place ki
                   //isliye ham functons ke parameters ko bolte h local variable or inka 
                   // block scope hota h means ye khali {} ke andar hi jinda rehte h 
}           

let val = sum(3,7);
console.log(val);
//console.log(x); //yaha print bhi nhi karega yeh q ki yeh ho pura hi {}se bahar ho gya or
                // return ke niche bhi mnhi karega print means ush valve ko...
                // only jo hamne first wala likha h usko hi excute karega parameter
 

                              //Arrow Function
                         //--compact way(chota tarika ) writting a functiom 
 const arrowsum =(a,b) => {
    console.log(a+b);
 };
 
 console.log(arrowsum);
 arrowsum(4,4); //8

                     //for multiplication

 const arrowmul = (a,b) => {
    console.log(a*b);
 };          
    arrowmul(28,5);  //140
    
                      //print hello.....using functiom
const printhello = () => {
    console.log("hello");
}    
printhello();//hello

                 // practice question
//Q1-> Create a function using the "function" keyword that takes a string as an argument & return the number of vowels in the string
       
function countVowels(str) {
    let count = 0;
    for (const char of str){
        if( char ==="a" || char ==="o"|| char ==="u" || char ==="i" || char ==="a" ){
            count++;
        }
        }
    //return count; //agar ham direct browser pe hi call kr rahe ho tho yehh 
    console.log(count);  //otherwise yehh
}

countVowels("aaa");//3
countVowels("siddhant");//2 vowels in siddhant


              //Q2-> create a arrow function to perform the same task

const countVow = (str) => {
    let count = 0;
    for (const char of str){
        if( char ==="a" || char ==="o"|| char ==="u" || char ==="i" || char ==="a" ){
            count++;
        }
        }
    console.log(count);  
}
 
countVow("naina"); //3vowels


              // Methods of array
           //forEach Loop in Arrays
        //arr.ForEach( callBackFunction )
//CallbackFunction : here, it is a function to execute for each element in the array
//*A callback is a function passed as an argument to another function


let arr = ["pune", "delhi", "mumbai", "gujarat", "hydrabad"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

console.log(arr);//pune,delhi,mumbai,gujarat,hydrabad

           
//Q3=>For a given array of numbers,print the square of each valve using the forEach loop.

let nums = [2,3,4,5,6];

nums.forEach((num) => {
    console.log(num*num);//another way //num*2
});
    //output..4,9,16,25,36
  
                      //map method...........
                      //values ko use karke koi new array create karna ho jab ham ishe use karege.
let number = [67 , 52 , 39];

let newArr = number.map((val) => {
    return val *2;
});

console.log(newArr);//134,104,78

                     //filter
//create a new array of elements that give true for a condition/filter
//Ex:-all even elements

let sidd = [1,2,3,4,5,6,7];

let evenArr = sidd.filter((val) => {
    return val % 2 == 0;
});

console.log(evenArr);//2,4,6

            // Reduce
//performs some operation & reduces the array to a single valve.it return that single valve

let n = [1, 2, 3, 4];

const output = n.reduce((prev, curr) => {
    return prev + curr;
});

console.log(output);//10


//Q4->we are given array of marks of student. filter out of the marks of students that scored 90+..

let marks = [97, 64, 32, 49, 99, 96, 86 ];

let toppers = marks.filter((val) => {
     return val > 90;
});

console.log(toppers);//97,99,96...(3 toppers)

//Q5->take a number numb as input from user.create an aaray of numbers from 1 to numb




let numb = Number(prompt("enter a number :"));
let ar = [];

for (let i = 1; i <= numb; i++) {
    ar[i - 1] = i;
}

console.log(ar);

//use the reduce method to calculate sum of all numbers in the array.
let sam = ar.reduce((res, curr) => {
    return res + curr;
});

console.log("sam =",sam);

//use the reduce method to calculate product of all numbers in the array

let factorial = ar.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial =",factorial);

