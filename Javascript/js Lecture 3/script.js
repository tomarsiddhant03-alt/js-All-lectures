                       //loops
                     //for loop 


for(let i=1; i<=10; i++){
    console.log("i=",i);
}       

         

                    // calculate of 1 to 5


let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("sum =",sum);
console.log("loop has ended");


                      //while loop

let i=1
while(i <=5){
    console.log("i =",i);
    i++;
}      


                     //do while loop
//the do while loop executed a condition atleast once even the whole condition false


let count = 20;
do{
    console.log("siddhant tomar");
    count++;
}while (count <=10);  



                    //for-of loop 
       
  
let length = 0;      
let str = "javascript";

for (let val of str){
         //iterator ->characters
         console.log("val =",val);
         length++;
}

console.log("string length =", length);  //10



                   //for in loop


let student ={
    name: "siddhant",
    age: 19,
    cgpa: 8.5,
    isPass: true
};

for(let key in student){
    console.log("key =",key, " value=", student [key]); // its returns key-value pair of the student
}

       

                    //practice questions related loops

                 //1. Print all even numbers from 0 to 100
        

for(let num=0; num<=100; num++){
    if(num%2 === 0){ //even number
        console.log("num =", num);


    }
}    


           

                     //question 2


let gameNum = 25;
let userNum = prompt("Guess the game number :");

while ( userNum != gameNum) {
    userNum = prompt("You entered wrong number. Guess again :");
}

console.log("congratulations,you entered the right number");



                                //string


 let string = "siddhant";     
 console.log(string[1]); //i
 
 
 //template literals
 let specialString = `This is a template literal ${1 + 2 + 3}`;
 console.log(specialString)

 console.log("hyper\ntext");//the \n gives second line
 console.log("hyper\ttext");//its gives a tab space



                    //strings methods


let str1 = "ApnaCollege";
str1 = str1.toUpperCase();
console.log(str1);

          //str.trim() //its removes whitespaces from starting and ending

let str3 = "         shubh tomar  js          ";   
console.log(str3.trim()); 


  
           // slice  .....return part of slice

let str4 = "01234567";
console.log(str4.slice(1,3)); 


             //concetitation.....joins str2 with str1

let string1 = "apna";
let string2 = "college";

let res = string2.concat(string1);
       //or
//let res = string1 + string2;       
console.log(res);  
             

      
                 //str.replace(searchVal,newVal) 

 let str5 = "hello";
 
 console.log(str5.replace("h","l"));
            

                 //str.charAt(idx)

            /*
 let str = "IloveJs";
 
 console.log(str.charAt(3)); //v
          */


          //practice question..........

 let fullName = prompt("enter your fullname without spaces");
 let username ="@" + fullName; + fullName.length;
 console.log(fullName);



        

