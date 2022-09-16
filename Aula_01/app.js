function m01 ( n1 ) {
    return function ( n2 ){
        return n1 * n2;
    }
}

let retornoDeUmaFuncao = m01(10)(02);


console.log(retornoDeUmaFuncao);

let number = new Number();

console.log(typeof number);

let f1 = function () {
    return "Função anônima e sem parâmetro de entrada.";
}

function calcularSoma () {
    return 2 + 3; // Funçao nomeada com retorno de uma operação Aritmética
}

function multiplicacao ( x ) {
    return function ( y ) {
        return x * y;
    }
}

console.log((1 > 0 || 10 < 5) && !(8 != 10));

let n1 = "true";

if (n1 === true) { console.log("Entrou dentro do if")};