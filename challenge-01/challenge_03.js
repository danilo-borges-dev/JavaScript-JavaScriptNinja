
// Declarar uma variável chamada `myvar`, sem valor.
let myVar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myVar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
let soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma++;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

// Qual é o valor da variável `soma` até aqui?
console.log(soma);  // 72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
let souNinja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
let comida = [
    "arroz",
    "feijão",
    "ovo",
]

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log(soma === myVar ? `${soma} - soma é igual a ${myVar} - mayVar` : "soma não é igual a myVar");

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log(myVar <= soma ? "Sim myVar é Menor ou Igual a variável soma" : "Não myVar não é Igual e não é Menor que a variável soma.");

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao ( n1, n2 ) {
    return n1 / n2;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(divisao(936, 3));