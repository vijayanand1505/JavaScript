
// This is the first Program in Object and Class

// const myObj =  {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     country: 'USA',
//     occupation: 'Software Engineer',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
//     content: {
//         earn: 'javascript',
//         grow: 'react',
//         develop: 'nodejs'
//     }
// };


// const anotherObj ={
//     subscriber : true,
//     no : 1000,
//     content :{
//         give :  1000,
//         receive : 5000
//     },
//     subfunction :['earn', 'grow', 'give'],
//     action : function() {
//         return  `Earn by ${this.content.receive}`;
//     }
// };

// console.log(anotherObj.action());



// This is the second Program in Object and Class

// const vehicle = {
//     doors : 2,
//     color : 'red',
//     model : 'WagonR',
//     wheels : 2,
//     engine : {
//         speed : 100,
//         power : 100
//     },
//     sound : function() {
//         return `${this.model} sound is Shsssshhhh`;
//     }
// };


// const car = Object.create(vehicle); 
// car.wheels = 4;
// car.sound = function(){
//     return "Vroooom!";
// }

// const vehicle2 = Object.create(car);
// vehicle2.wheels = 6;

// console.log(vehicle2.sound());



// This is the third Program in Object and Class

// const movies = {
//     title: 'Star Wars',
//     year: 2015,
//     director: 'Steve Smith',
//     actors: ['Vijay', 'Ajith', 'Suriya', 'Kamal']
// };

//console.log(JSON.stringify(movies.actors));
//console.log(Object.values(movies.actors));

// for (let job in movies) {
//     console.log(movies[job]);
// }

// for (let job in movies){
//     console.log(`${job}, it's  ${movies[job]}`);
// }

//delete movies.director;
//console.log(movies.hasOwnProperty("director"));


//const {director : myFavDirector , title : myFavTitle} = movies;
//console.log(myFavDirector , myFavTitle);

// const {title,year,director,actors} = movies;
// console.log(title);
// console.log(year);
// console.log(director);
// console.log(actors);
// console.log(movies.actors[2]);

// function sings ({ director}) {
//     return director;
// };

// console.log(sings(movies));

// This is the fourth Program in Object and Class

// const myPizza = {
//     size: 'large',
//     toppings: ['mushroom', 'pepperoni', 'olives'],
//     price: 100,
//     bake : function(){
//         return `Bake A ${this.size} ${this.toppings[0]} flavoured pizza`;
//     }
// };

// console.log(myPizza.bake());

/////////////////////////////////////////////////////////////
// class Pizza {
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type = typePizza;
//         this.size = sizePizza;
//         this.crust = crustPizza;
//         this.toppings = [];
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppingsPizza){
//         this.toppings.push(toppingsPizza);
//     }
//     bake(){
//             return console.log(`Bake A ${this.type} ${this.size} ${this.crust} pizza with ${this.toppings}`);
//         }
// }

// const myPizza2 = new Pizza("margaritta","large","thin");
// myPizza2.setToppings("mushroom");
// myPizza2.bake();

////////////////////////////////////////////////////

/// Parent and Child Classes --------------------------------

// class Pizza {
//     constructor(sizePizza){
//         this.size = sizePizza;
//         this.crust = "Original";
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(crustPizza){
//             //this.crust = crustPizza;
//         }
// }

// class specialPizza extends Pizza {
//     constructor(sizePizza){
//         super(sizePizza);
//         this.type = "Margaritta";
//     }
//     slice(){
//         console.log(`our ${this.type} ${this.size} ${this.crust} Pizza has 8 Slices`);
//     }
// }

// const mySpecialPizza = new specialPizza ("Medium");
// mySpecialPizza.slice();


////////////////////////////////////////

/// Protected  --------------------------------

// class Pizza {
//     crust = "Original";
//     #sauce = "tomato";
//     constructor(sizePizza){
//             this.size = sizePizza;
//         }
//         getCrust(){
//             return this.crust;
//         }
//         setCrust(crustPizza){
//             this.crust = crustPizza;
//         }
// bake (){
//     return console.log(`Baking a ${this.crust} ${this.#sauce} pizza...`);
// }
// }

// const myPizza = new Pizza ("small");
// myPizza.bake();

////////////////////////////////////////

//"use strict";

// variable = "my  secret";
// console.log(variable);

// const variable = "Dhuddu";
// console.log(variable);


//Type Error---------------

// const makeError = () => {
//     try {
//         const name = "Dhuddu";
//         name = "name";
//         console.log(name);
//     } catch (error) {
//         console.error(error);
//     }
// };

// makeError();


// const makeError = () => {
//     try {
//         throw new customError
//         ("This is the New Error!");
//     } catch (error) {
//         console.error(error);
//     }
// };

// function customError() {
//     this.message = "This is the New Error!";
//     this.name = "New Error";
//     this.stack = `${this.name} ${this.message}`;
// }

// makeError();


// const newobj = () => {
//         let i = 4;
//             try{
//                 if (i % 2 !== 0){
//                     throw new Error("It is a Odd Number");
//                 }
//                 console.log(` The ${i} is a even number`);
//             }
//      catch (error) {
//         console.error(error);
//     }
//     finally{
//         console.log("... Finally finished");
//         i++;
//     }
// };

// newobj();


// New Program just to recall 

///////// New Program just to recall ///////////

// const myObj = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     country: 'USA',
//     occupation: 'Software Engineer',
//     nature :{
//         animal : 'Dog',
//         place : 'New York'
//     },
//     skills: function () {
//         return `This is a training in ${this.nature.place}`;
//     }
// }

// const myObj2 = Object.create(myObj);
// myObj2.city = 'America';
// myObj2.movies = ['vijay', 'ajith','suriya','kamal','vikram']; 

// console.log(myObj2.movies);
// const mov = (JSON.stringify(myObj2.movies));
// console.log(mov);
// console.log(JSON.parse(mov));

//  for (let job in myObj) {
//      console.log(myObj[job]);
//  }



// class Pizza {
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type = typePizza;
//         this.size = sizePizza;
//         this.crust = crustPizza;
//         this.toppings = [];
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppingsPizza){
//         this.toppings.push(toppingsPizza);
//     }
//     bake(){
//             return console.log(`Bake A ${this.type} ${this.size} ${this.crust} pizza with ${this.toppings}`);
//         }
// }

// const myPizza2 = new Pizza("margaritta","large","thin");
// myPizza2.setToppings("mushroom");
// myPizza2.bake();





// class vehicle {
//     constructor(typeCar,typeWheels,typeColor){
//             this.type = typeCar;
//             this.wheels = typeWheels;
//             this.color = typeColor;
//             this.model = [];
//     }
//     getModel(){
//         return this.model;
//     }
//     setModel(modelcar){
//         this.model.push(modelcar);
//     }
//     output(){
//         return console.log(`This is a ${this.type} car with 4 ${this.wheels} and ${this.color} color and ${this.model} model`);
//     }
// }   

// const myObjVehicle = new vehicle("Audi","Wheels","Red");
// myObjVehicle.setModel("A4");
// myObjVehicle.output();



// const newobj = () => {
//         let i = 5;
//             try{
//                 if (i % 2 !== 0){
//                     throw new Error("It is a Odd Number");
//                 }
//                 console.log(` The ${i} is a even number`);
//             }
//      catch (error) {
//         console.error(error);
//     }
//     finally{
//         console.log("... Finally finished");
//         //i++;
//     }
// };

// newobj();

