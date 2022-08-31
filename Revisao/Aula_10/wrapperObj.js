let name = new String("Danilo");  // Aqui estamos utilizando o construtor de string para criar a string name com valor Danilo

console.log(name.valueOf());  // Com o comando .valueOf conseguimos acessar o valor da string name

let valor = 10;

console.log(valor, typeof(valor));

let valorConvertido = String(valor);

console.log(valorConvertido, typeof(valorConvertido));

let resultado = parseInt(valorConvertido) + parseInt(valorConvertido);

console.log(`O valor convertido de duas string e somado ${resultado}`);


console.log(typeof(null)); // Erro de implementação de JavaScript

// Utilizar e confiar no typeof apenas com valores primitivos, como number, boolean, undefnid, string (cuidado com strings porque elas são objetos), null, symbol

console.log();

console.log(typeof(Number));
console.log(typeof(String));
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(Symbol));
console.log(typeof(Boolean));


