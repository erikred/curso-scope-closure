var firstName; //undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; //declarar y asignar
lastName = "Ana"; // reasignar

console.log(lastName);

var secondName = 'David'; // Declarando y asignando
var secondName = "Ana"; // reasignando

console.log(secondName);

// Let

let fruit = 'Apple'; // declarar y asignar

fruit = 'Kiwi'; //reasingar

console.log(fruit);

//let fruit = 'Banana'; // No se puede redeclarar la variable fruit block scoped

console.log(fruit);

// const

const animal = 'dog'; //declara y asigna
//animal = 'cat'; // reasignando

console.log(animal); // No se puede reasignar valores a una constante

const vehicles = []; // Con objetos se meustra que podemos burlar la inmutabilidad de las constantes.

vehicles.push("car");
console.log(vehicles);

vehicles.pop(vehicles);
console.log(vehicles);

