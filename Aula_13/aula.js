let myArray_01 = [ "Danilo", 1, "Borges"]
let myArray_02 = [ "Brasil", 1, 3]
let newArray = myArray_01.concat(myArray_02);
console.log(newArray );

console.log(myArray_01.toString());

console.log();

myArray_01.unshift("Primeiro");

console.log(myArray_01);

console.log();

newFunction();

function newFunction() {
    myArray_01.shift();

    console.log(myArray_01);
}

console.log();

let nameList = [ "Danilo", "João", "Maria", "Barbára"]

let newList = nameList.slice(1, 2);
console.log(newList);

console.log();

let newArray_03 = [1, 2, 3, 4, 5]

let resultSplace = newArray_03.splice(4);

console.log(resultSplace);

let newArray_04 = [1, 2, 3, 4, 5]

console.log(newArray_04.splice(2, 2));

newArray_04.splice(1, 0,  "Danilo");

console.log(newArray_04);

newArray_04.splice(2, 0, "João", "Sueli", "Rosana");

console.log(newArray_04);

let arrayTest = newArray_04.splice(0, 1, "Marcos", "Michel");

console.log(arrayTest);
console.log(newArray_04);