let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

array.forEach(element => {
    console.log(element);
});

array.forEach((item, index, array) => console.log(item, index, array))

console.log();

let everyVar = array.every((item) => item < 5);
console.log(everyVar);  // Retorna true ou false se todos os valores do array forem menores que 5

console.log();

let someVar = array.some((item) => item > 5);
console.log(sameVar);
