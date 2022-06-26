// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(x, y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let mayVar = (sum(10, 15)) + 5;

console.log(mayVar);

// Declare uma nova variável, sem valor.
let semValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function returValue() {
    semValor = 117;
    return console.log("O Valor da variável agora é " + semValor);
}

// Invoque a função criada acima.
returValue();

// Qual o retorno da função? (Use comentários de bloco).
//117

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function threeArgs(args1, args2, args3) {
    var meyArray = [];
    meyArray[0] = args1;
    meyArray[1] = args2;
    meyArray[2] = args3;

    for (let i = 0; i <= 2; i++) {
        if (meyArray[i] == NaN || meyArray[i] == undefined) {
            mesage();
        }
    }

    function mesage() {
        console.log("Preencha todos os valores corretamente!");
    }
    let result = args1 * args2 * args3;
    return console.log(result);
}

// Invoque a função criada acima, passando só dois números como argumento.
threeArgs(3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
threeArgs(3, 3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 27

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgs_02(a, b, c) {
    if ((a !== undefined) && (b === undefined) && (c === undefined)) 
    {
        return console.log("Somente 1 argumento foi passado= " + a);
    }
    else {
        if ((a !== undefined) && (b !== undefined) && (c === undefined)) 
        {
            return console.log("Soma dos dois argumentos= " + (a + b));
        }
        else {
            if ((a !== undefined) && (b !== undefined) && (c !== undefined)) 
            {
                return console.log("Soma do primeiro com o segundo divido pelo terceiro= " + (a + b) / c);
            }
            else {
                if ((a === undefined) && (b === undefined) && (c === undefined)) 
                {
                    return console.log(false);
                }
            }
        }
    }
    return console.log(null);;

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
threeArgs_02();
//threeArgs_02(2);
//threeArgs_02(2,3);
//threeArgs_02(2, 3, 5);
