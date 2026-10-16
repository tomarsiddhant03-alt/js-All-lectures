                     //DOM (Document object model)
// alert("hello!");                     
console.log("hello!");   
// console.dir(document.body);                  
// console.log(document.body);                  
// console.log(document.body.childNodes[5]);                  
 document.body.childNodes[1].innerText = "my name is siddhant tomar"; 
  //it changed html code means jo maine phle body ke andar code likha tha hyy guys yeh usko replace kar dega

                      //next topic

                    //dom manipulation
              //selecting with id 
              //--->document.getElementbyId("myid")      
let heading = document.getElementById("heading");  //h2
console.dir(heading);  

              //--->Selecting with class
let simo =  document.getElementsByClassName("simo");
console.dir(simo);               


           //Selecting with tag
      //jab ham sare ke sare h1,paragraph,div jab ham isme se koi bhi specific tag ko access karna chahate     
      //for ex. ek h1 h wo 10 bar aara h tho wo sab access ho jayege

 let headings = document.getElementsByTagName("h1");
 console.dir(headings)     
        
               //querySelector
     //yeh automatic detact kr liya konsa h id/class/tag bsss hame tag put karni h bhi ho

let firstEL = document.querySelector(".simo");  //1st element
console.dir(firstEL)


           //...
let allelements = document.querySelectorAll("p");  //gives all elements
console.dir(allelements)           
    

                      //Dom manipulation properties
                //tagName : return tag form element nodes
 console.log(firstEL.tagName);//yeh tag ka naam dega //p(paragraph)


                           //next
        //innerText : returns the text content of the element and all its children
 let fruits = document.querySelectorAll("#fruitList");
console.dir(fruits);
   

     //textContent: returns textual content ever for hidden elements


