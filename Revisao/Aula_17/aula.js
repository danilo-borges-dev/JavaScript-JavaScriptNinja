let arr = [ 1, 2, 3, 4, 5 ];

let reduceLet = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
}, 0); // Zero é o indice que será inicializado o parâmetro aculado, ou seja, será iniciado no primeiro indice. 

// Temos como retorno no console o valor 15

/*
    1ª - 0 + 1 = 1
    2ª - 1 + 2 = 3
    3ª - 3 + 3 = 6
    4ª - 7 + 4 = 10
    5ª - 12 + 5 = 15
*/


let newArr = ["D", "a", "n", "i", "l", "o"];
reduceLet = newArr.reduce(function (acumulado, atual, index, arry){
    return acumulado + atual;
});

console.log(reduceLet);

let newArray2 = ["Danilo", 3, {}, [], 'T'];

console.log(newArray2.indexOf('T'));

console.log(Array.isArray(newArr));

console.log(Array.isArray([]));
console.log(Array.isArray({}));