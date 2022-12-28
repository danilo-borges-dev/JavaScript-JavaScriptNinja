(function(){
    "use strict";
    /*
    Crie uma variável qualquer, que receba um array com alguns valores aleatórios
    - ao menos 5 - (fica por sua conta os valores do array).
    */
    let arryAny = [
        10,
        function(){
            return {
                prop1: "Danilo",
                "Sobrenome do Nome": "Silva Borges",
                idade: 30
            }
        },
        [ 1,2,3,4,5],
        "Dia Lindo!",
        function(){
            return function(){
                return [
                    "Seja Feliz",
                    "Seja Grato",
                    "Mentalize",
                    "Viva o agora"
                ]
            }
        }
    ]

    /*
    Crie uma função que receba um array como parâmetro, e retorne esse array.
    */
    function funcArry (myArray){
        return myArray;
    }

    /*
    Imprima o segundo índice do array retornado pela função criada acima.
    */
    console.log(funcArry(arryAny[1]().prop1));

    /*
    Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
    segundo, um número. A função deve retornar o valor de um índice do array que foi passado
    no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
    segundo parâmetro.
    */
    function thwoParans (arg1, arg2){
        return arg1[arg2 - 1];
    }

    /*
    Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
    */
    let fiveValues = [
        "Red",
        "Purple",
        "Pink",
        "Magenta",
        "Yellow"
    ]

    /*
    Invoque a função criada acima, fazendo-a retornar todos os valores do último
    array criado.
    */
    console.log(thwoParans(fiveValues, 1));
    console.log(thwoParans(fiveValues, 2));
    console.log(thwoParans(fiveValues, 3));
    console.log(thwoParans(fiveValues, 4));
    console.log(thwoParans(fiveValues, 5));

    /*
    Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
    livro. Dentro dessa função, declare uma variável que recebe um objeto com as
    seguintes características:
    - esse objeto irá receber 3 propriedades, que serão nomes de livros;
    - cada uma dessas propriedades será um novo objeto, que terá outras 3
    propriedades:
        - `quantidadePaginas` - Number (quantidade de páginas)
        - `autor` - String
        - `editora` - String
    - A função deve retornar o objeto referente ao livro passado por parâmetro.
    - Se o parâmetro não for passado, a função deve retornar o objeto com todos
    os livros.
    */
    function book (bookName) {
        let books = {
            "Os segredos do ninja javascript": {
                quantidadeDePaginas: 321,
                autor: "Marck Petterson",
                editora: "NovaTec"
            },
            "C# avançado e prático": {
                quantidadeDePaginas: 1452,
                autor: "Danilo Borges",
                editora: "Alta Books"
            },
            "Mentalize e crie sua realidade": {
                quantidadeDePaginas: 740,
                autor: "O Divino",
                editora: "Bookman"
            }
        }
        return !!bookName ? books[bookName] : books;
    }

    /*
    Usando a função criada acima, imprima o objeto com todos os livros.
    */
    console.log(book());

    /*
    Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
    usando a frase:
    "O livro [NOME_DO_LIVRO] tem [X] páginas!"
    */
    console.log(`O livro C# avançado e prático tem ${book("C# avançado e prático").quantidadeDePaginas} páginas!`);

    /*
    Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
    a frase:
    "O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
    */
    console.log(`O autor do livro Mentalize e crie sua realidade é ${book("Mentalize e crie sua realidade").autor}.`);

    /*
    Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
    a frase:
    "O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
    */
    console.log(`O livro Os segredos do ninja javascript foi publicado pela editora ${book("Os segredos do ninja javascript").editora}.`);
})();