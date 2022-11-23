(function(){
    "use strict"
    // Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


    // Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
    function soma (n1, n2) {
        return n1 + n2;
    }

    // Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
    let resultado = soma(10, 7) + 5;

    // Qual o valor atualizado dessa variável?
    console.log(`Resultado = ${resultado}`);

    // Declare uma nova variável, sem valor.
    let semValor;

    /*
    Crie uma função que adicione um valor à variável criada acima, e retorne a string:
        O valor da variável agora é VALOR.
    Onde VALOR é o novo valor da variável.
    */
    function adicionaValor (){
        semValor = "Sou Feliz";
        return `O valor da variável agora é "${semValor}"`;
    }

    // Invoque a função criada acima.
    console.log(`Retorno da função = ` + adicionaValor());

    // Qual o retorno da função? (Use comentários de bloco).
    // "Sou Feliz"

    /*
    Crie uma função com as seguintes características:
    1. A função deve receber 3 argumentos;
    2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
        Preencha todos os valores corretamente!
    3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
    */
    function f1 (arg1, arg2, arg3){
        if(arg1 == null || arg2 == null | arg3 == null){
            return `Preencha todos os valores corretamente!`;
        }
        return arg1 * arg2 * arg3 + 2;
    }

    // Invoque a função criada acima, passando só dois números como argumento.
    console.log(`Passando dois argumentos = ${f1(10,3)}`);

    // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
    // Preencha todos os valores corretamente!

    // Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
    console.log(`Passando três argumentos = ${f1(10,3,7)}`);

    // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
    // 212

    /*
    Crie uma função com as seguintes características:
    1. A função deve receber 3 argumentos.
    2. Se somente um argumento for passado, retorne o valor do argumento.
    3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    5. Se nenhum argumento for passado, retorne o valor booleano `false`.
    6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
    */
    function argumentos (arg1, arg2, arg3){
        if(arg1 == null && arg2 == null && arg3 == null){
            return false;
        }

        if(arg2 == null && arg3 == null){
            return arg1;
        }

        if(arg3 == null){
            return arg1 + arg2;
        }

        if(arg1 != null && arg2 !== null && arg3 != null){
            return (arg1 + arg2) / arg3;
        }

        return null;
    }

    // Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
    console.log(`Com um argumento : ${argumentos(10)}`); // 10
    console.log(`Com dois argumentos : ${argumentos(2, 3)}`);  // 5
    console.log(`Com três argumentos : ${argumentos(5, 11, 99)}`);  // 0.16161616161616163
    console.log(`Sem argumentos : ${argumentos()}`);  // false

})();