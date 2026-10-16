                 //Prototypes in js
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },

};

karanArjun.__proto__=employee;
console.log(karanArjun);
console.log(karanArjun.calcTax);
 
 
                  //classes in js
//class is a program-code template for creating object
 //syntax --> let myobj = new MyClass(); 
 
 class Toyotocar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
 }

 let fortuner = new Toyotocar("fortuner", 10); //its covert class into object.....
 console.log(fortuner);
 let lexus = new Toyotocar("lexus", 12); //constructor
 console.log(lexus);

                 //Inheritance in js 
//--> inheritance is passing down properties & methods from parent class to child class.

class person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
    
     sleep() {
        console.log("sleep");
    }
    
};

class Engineer extends person {
    constructor(name) {
        super(name); //to invoke parent class constructor
    }
    work() {
        super.eat(); 
        console.log("solve proble, build something");
    }
};

let siddObj = new Engineer();

console.log(siddObj);
siddObj.work();




          //pratice 