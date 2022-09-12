
// Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function fSoma(arg01, arg02) {
    return arg01 + arg02;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let soma = fSoma(2, 3) + 5;

// Qual o valor atualizado dessa variável?
console.log(soma); // 10

// Declare uma nova variável, sem valor.
let semValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionaValor() {
    semValor = 10;
    return console.log(`O valor da variável agora é ${semValor}`);
}

// Invoque a função criada acima.
console.log(adicionaValor(10));

// Qual o retorno da função? (Use comentários de bloco).
// O valor da variável agora é 10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function myFunc(x1, x2, x3) {
    let result = 0;
    if (x1 === undefined || x2 === undefined || x3 === undefined) {
        return console.log("Preencha todos os valores corretamente!");
    }
    result = (x1 * x2 * x3) + 2;
    return console.log(result);
}

// Invoque a função criada acima, passando só dois números como argumento.
myFunc(2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
myFunc(2, 3, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 32

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
console.log();

function myNewFunc(x1, x2, x3) {
    if (x1 !== undefined && (x2 === undefined && x3 === undefined)) {
        return console.log(x1);
    }
    if (x1 !== undefined && x2 !== undefined && x3 === undefined) {
        return console.log(x1 + x2);
    }
    if (x1 === undefined) {
        return console.log("false");
    }
    if ((x1 !== undefined && +x1) && (x2 !== undefined && +x2) && (x3 !== undefined && +x3)) {
        return console.log((x1 + x2) / x3);
    }
    else {
        return console.log("null");
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
myNewFunc();
myNewFunc(10);
myNewFunc(10, 5);
myNewFunc(10, 5, 3);
myNewFunc("Danilo", 5, 3);
