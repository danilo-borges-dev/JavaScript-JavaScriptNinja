(function(){
    "use strict";
    /*
    Crie uma variável qualquer, que receba um array com alguns valores aleatórios
    - ao menos 5 - (fica por sua conta os valores do array).
    */
    let arrayQualquer = [
        "Bom dia!",
        9999,
        [ 10, 20, 30, 40, 50 ],
        {
            propriedade1: function () { return `Vá e fassa um dia maravilhoso.`; },
            propriedade2: 10
        },
        function () { return ["Banana", "Maracuja", "Tomate", "Batata", "Milho"] },
    ]

    /*
    Crie uma função que receba um array como parâmetro, e retorne esse array.
    */
    function funcArry (arrayParan) {
        return arrayParan;
    }

    /*
    Imprima o segundo índice do array retornado pela função criada acima.
    */
    console.log(funcArry(arrayQualquer)[1]);
    console.log(funcArry(arrayQualquer)[4]()[2]);
    console.log(funcArry(arrayQualquer)[3].propriedade1());

    /*
    Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
    segundo, um número. A função deve retornar o valor de um índice do array que foi passado
    no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
    segundo parâmetro.
    */
    function doisParans (paran1, paran2){
        return paran1[paran2];
    }

    /*
    Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
    */
    let newArray = [
        1010,
        "Mensagem",
        function () { return [1, 2, 3] },
        {
            prop1: "Mensagem",
            "Proprieade 2": "Nome"
        },
        [ "Whey Protein", "BCAA", "Creatina" ]
    ];

    /*
    Invoque a função criada acima, fazendo-a retornar todos os valores do último
    array criado.
    */
    console.log(doisParans(newArray, 0));
    console.log(doisParans(newArray, 1));
    console.log(doisParans(newArray, 2)());
    console.log(doisParans(newArray, 3));
    console.log(doisParans(newArray, 4));

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
    function book (bookName){
        let books = {
            "Os segredos do Javascript Ninja": {
                quantidadeDePaginas: 375,
                autor: "Jose da Silva",
                editora: "Notatec"
            },
            "C# do Básico ao Avançado": {
                quantidadeDePaginas: 1_352,
                autor: "Danilo Borges",
                editora: "Solução"
            },
            "Angular o Melhor Framework": {
                quantidadeDePaginas: 780,
                autor: "Maria Silva",
                editora: "Altabooks"
            }
        }
        if(!!bookName){
            return books[bookName];
        }
        return books;
    }

    /*
    Usando a função criada acima, imprima o objeto com todos os livros.
    */
    console.log(book())

    /*
    Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
    usando a frase:
    "O livro [NOME_DO_LIVRO] tem [X] páginas!"
    */
    console.log(`O livro C# do Básico ao Avançado tem ${book("C# do Básico ao Avançado").quantidadeDePaginas} páginas!`);

    /*
    Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
    a frase:
    "O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
    */
    console.log(`O autor do livro Angular o Melhor Framework é ${book("Angular o Melhor Framework").autor}.`);

    /*
    Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
    a frase:
    "O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
    */
    console.log(`O livro Os segredos do Javascript Ninja foi publicado pela editora ${book("Os segredos do Javascript Ninja").editora}.`);
})();