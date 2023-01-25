let name = new String("Danilo Borges");
console.log(name);
console.log(name.valueOf()); // Saída no Console "Danilo".


console.log(typeof(function(){}));


function sum (num1, num2) {
    return num1 + num2;
}

function subtract (n1, n2){
    if(+n1 && +n2){
        return console.log(n1 - n2);
    }
    return console.log("Informe apenas números");
}

console.log(sum(10,2));

console.log(typeof(sum()));

console.log(sum("Ls", 10));

console.log(subtract("Gc", 15));

subtract(110,5)
subtract("j", 5)