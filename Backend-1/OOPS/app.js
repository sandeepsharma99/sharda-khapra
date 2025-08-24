
// #2 way to write objects  
// Constructor - doesn't return anything %// let {user ,password } = req.query;& start with capital

// const { log } = require("console");

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
// }

// Person.prototype.talk=function(){
//     console.log(`Hi, my name is ${this.name}`);
    
// }
//object
// let p1 = new Person("ram",23);


//  <-- 3rd way by creating class -->

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`hi, ${this.name} this side`);
//     }
// }

// class student{
//     constructor(name,age){
//     this.name = name;
//     this.age = age;
//     this.marks = this.marks;
//     }
//     talks(){
//         console.log(`hi,${this.name} side got ${this.marks} marks`);
        
//     }
// }

// class teacher{
//     constructor(name,age,subject){
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }
//     talks(){
//         console.log(`hi,${this.name} side i'm ${this.subjext} teacher`);
        
//     }
// }


// """  **<- Inheritance ->
// Inheritance is a mechanism that allow us to create new classes on the basis of already existing classes. """

class Person{
    constructor(name,age){
        console.log("person class contructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi, ${this.name} this side`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
    console.log("student class constructor ");
    super(name,age);    // person class constructor is being called
    this.marks = marks;
    }
    
}

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("teacher class constructor ");
        super(name,age);   // person class constructor is being called
        this.subject = subject;
    }
   
}

 
