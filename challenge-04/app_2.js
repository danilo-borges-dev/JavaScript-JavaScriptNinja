(function(){
    "use strict";
    // Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


    // Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
    function sum (n1, n2) {
        return n1 + n2;
    }

    // Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
    let varSum = sum(10 , 15);

    // Qual o valor atualizado dessa variável?
    console.log(varSum + 5); // 30


    // Declare uma nova variável, sem valor.
    let semValor = 0;

    /*
    Crie uma função que adicione um valor à variável criada acima, e retorne a string:
        O valor da variável agora é VALOR.
    Onde VALOR é o novo valor da variável.
    */
    function addValor () {
        semValor++;
        return semValor;
    }

    // Invoque a função criada acima.
    console.log(addValor());

    // Qual o retorno da função? (Use comentários de bloco).
    // 1

    /*
    Crie uma função com as seguintes características:
    1. A função deve receber 3 argumentos;
    2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
        Preencha todos os valores corretamente!
    3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
    */
    function func (arg1, arg2, arg3) {
        if(arg1 == undefined && arg2 == undefined && arg3 == undefined){
            return `Preencha todos os valores corretamente!`;
        }
        return arg1 * arg2 * arg3 + 2;
    }

    // Invoque a função criada acima, passando só dois números como argumento.
    console.log(func(2,3));

    // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
    // Preencha todos os valores corretamente!

    // Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
    console.log(func(2,3, 5));

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
    function argsFunc (n1, n2, n3) {
        if(n1 != undefined && n2 == undefined && n3 == undefined){
            return n1;
        }
        if(n1 != undefined && n2 != undefined && n3 == undefined){
            return n1 + n2;
        }
        if(n1 != undefined && n2 != undefined && n3 != undefined){
            return (n1 + n2) / n3;
        }
        if(n1 == undefined && n2 == undefined && n3 == undefined){
            return false;
        }
        return null;
    }

    // Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

    console.log(argsFunc());
    console.log(argsFunc(5));
    console.log(argsFunc(2, 8));
    console.log(argsFunc(10, 12, 8));

})();