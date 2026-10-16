           //arrays
let marks = [77,88,67,98,56,45,90];
console.log(marks);
console.log(marks.length);   //length is a property of arrays

let heroes = ["thor","iron man","spiderman","antman","doctor strange","captain America"];

                        //for loop
 
for (let idx = 0; idx < heroes.length; idx++) {
    console.log(heroes[idx]);
}
    

//for of
for (let hero of heroes) {
    console.log(hero);
}

let cities = ["delhi","mumbai","gurgaon","pune","banglore","hydrabad"];
for(let city of cities){
    console.log(city.toUpperCase());
      
}


                      //practice question

 let numbers = [85,66,78,89,45,80];
 
 let sum = 0;
 for(let val of numbers) {
    sum += val;
 }
 let avg = sum / numbers.length;
 console.log(`avg number of the class = ${avg}`); //its gives the average value of all numbers


                    //second practice question
                    //its cut 10% of each number
let items = [250, 645, 300, 900, 50];
for (let i =0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}                    

console.log(items);    



                 // arrays methods 

                 //push and pop

let foodItems = ["potato","apple","litchi","tomato"];

foodItems.push("mango","chips","banana");
foodItems.pop();//its deleted last value here the lasr value is banana ..
console.log(foodItems.toString());
console.log(foodItems);

           //concate method
let marvelNames = ["tonny stark","sidd"];
let dcNames = ["superman","batman"];
let indianNames = ["shaktiman","krish"];

let names = marvelNames.concat(dcNames,indianNames);
console.log(names);
 
            //unshift
let marvel = ["sidd","moni"];  
marvel.unshift("simo");   //its add element at the begain of the array
      console.log(marvel);


           //splice
  let arr = [1,2,3,4,5,6,7];
  
//   arr.splice(2,2,101,102);
  
  //Add Element
//   arr.splice(2,0,101);

 //Delete Element
//  arr.splice(3,1);//delete 4

//Replace Element
arr.splice(3,1,101);
  console.log(arr);


      //practice questions
let companies = ["bloomberg","Microsof","uber","Google","IBM","Netflix"];
  //remove first element..
companies.shift();
  //remove uber and add ola in its place
companies.splice(2,1,"ola");
  //add Amazon at the end
companies.push("Amazon");  


console.log(companies);