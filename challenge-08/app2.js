(function(){
    "use strict";
    /*
    Declare uma variável chamada `sum` e atribua a ela uma função chamada
    `calculateSum`. A função deve receber dois parâmetros e retornar a soma
    desses parâmetros.
    */
    let sum = function calculator (n1, n2) {
        return n1 + n2;
    }

    /*
    Invoque a função criada acima, passando dois números que serão somados, e mostre
    o resultado no console, com a frase:
    "A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
    */
    console.log(`A soma de 11 e 7 é igual a ${sum(11, 7)}.`);

    /*
    Mostre no console o nome da função criada acima, com a frase:
    "O nome da função que faz a soma é [NOME DA FUNÇÃO]."
    */
    console.log(`O nome da função que faz a soma é ${sum.name}.`);

    /*
    Crie uma função literal chamada `showName`. Essa função deve retornar o
    seu nome.
    */
    function showName () {
        return showName.name;
    }

    /*
    Declare uma variável chamada `varShowName` que recebe a função criada acima.
    */
    let varShowName = showName();

    /*
    Usando a variável criada acima, mostre no console o nome e o retorno da função
    atribuída a ela, com a seguinte frase:
    "A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
    */
    console.log(`A função ${showName.name} retorna ${varShowName}.`);

    /*
    Crie uma função literal chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
    vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;

    - Essa função deve retornar uma segunda função que fará o seguinte:
    - Essa segunda função deve receber dois parâmetros;

    - Esses dois parâmetros serão os operandos usados na operação matemática;
    - O retorno dessa segunda função é a operação matemática completa, com a frase:
    "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
    - Se o operador não for válido, retornar a frase:
    "Operação inválida."
    */
    function calculator (signal) {
        return function (n1, n2) {
            switch(signal){
                case "+" : return `Resultado da operação: ${n1} ${signal} ${n2} = ${n1 + n2}.`;
                case "-" : return `Resultado da operação: ${n1} ${signal} ${n2} = ${n1 - n2}.`;
                case "*" : return `Resultado da operação: ${n1} ${signal} ${n2} = ${n1 * n2}.`;
                case "/" : return `Resultado da operação: ${n1} ${signal} ${n2} = ${n1 / n2}.`;
                case "%" : return `Resultado da operação: ${n1} ${signal} ${n2} = ${n1 % n2}.`;
                default : return `Operação inválida.`;
            }
        }
    }

    /*
    Declare uma variável chamada `sum`, que receberá a função acima, passando como
    parâmetro o operador de soma.
    */
    let sum2 = calculator("+");

    /*
    Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
    */
    console.log(sum2(10, 45));

    /*
    Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
    `division` e `mod`, e atribua a elas a função `calculator`, passando o operador
    correto por parâmetro para cada uma delas.
    */
    let subtraction = calculator("-");
    let multiplication = calculator("*");
    let division = calculator("/");
    let mod = calculator("%");

    /*
    Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
    no console.
    */
    console.log(subtraction(15, 8));
    console.log(multiplication(30, 80));
    console.log(division(48, 6));
    console.log(mod(182, 82));
})();