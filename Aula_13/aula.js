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
