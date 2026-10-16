                        //sync in js
          // there are two types 1.synchronous 2.Asynchronous


            
             

function hello(){
    console.log("hello");
   }       

setTimeout(hello, 4000); // 4 second bad executere hoga
                //or yeh sabse last me hi print hoga ise phle hor sare ho jayege execute

         //callbacck
function sum(a, b) {
    return a + b;
}

function calculator(a, b, sumCallback) {
    return sumCallback(a, b);
}

console.log(calculator(1, 2, sum)); // 3

                                 



                     //promises
                
//--> promise is for "eventual" completion of task. it is an object in js it is a solution to callback hell

//  let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//      resolve("success");
//     // reject("some error occor")
//  });


               //***this is the long way for writting promise chain */     
                  //promise chaining
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }                  

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }                  

// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => {});
// });






         //***this is the long way for writting chain promise jo upper hai */

                     
                        //here is the short way niche wali...//
              //let simple example of promise & promise chain



                  /*



                        
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("pass");
        }, 3000);
});
}

//promise chain

console.log("getting data1.......");
getData(1)
.then((res) => {
    console.log("getting data2.......");
    return getData(2);
    })
    .then((res) => {
    console.log("getting data3.......");    
    return getData(3);
    })
    .then((res) => {
      console.log(res);
    });

                           */






                //Async-Await
                /*async function always returns a promise*/

         //isko hi ham most frequently use karte h or yeh wala method sabse easy bhi hota hai 

 function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("pura ho gya...success");
        }, 2000);
});
}

//Async-await
(async function () {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
     console.log("getting data4...");
    await getData(4);
})();