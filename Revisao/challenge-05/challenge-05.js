/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let qualquer = [ 2, 8, 9, 13, 7, 14, 4];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArry (ar)
{
    return qualquer[ar];
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArry(1));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function thowParans (paran_01, paran_02)
{
    let arr = paran_01;
    return arr[paran_02];
}

console.log(thowParans(qualquer, 3));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arr_02 = [ 
    "Danilo", 
    29, 
    [ 1, 2, 3, 4, 5], 
    { 
        nome: "Danilo",
        sobrenome: " da Silva Borges"
    },
    function ()
    {
        let nomeCompleto = arr_02[0] + arr_02[3].sobrenome;
        return nomeCompleto;
    },
    [
        ["Está dentro de um arry de terceira dimenção"]
    ]
]

console.log(arr_02[4]());

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arr_02[5][0][0]);

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
function book (bookName)
{
    let obj = 
    {
        "Senhor dos Aneis": 
        {
            quantidadePaginas: 753,
            autor: "Tolkien",
            editora: "Genesis"
        },
        "Animais Fantásticos e o Segredo de Dumbledore": 
        {
            quantidadePaginas: 375,
            autor: "Nome do Autor",
            editora: "Alta books"
        },
        "Percy Jackson o Caçador de Raios": 
        {   
            quantidadePaginas: 124,
            autor: "Maycon P. Daris",
            editora: "Nome da Editora"
        },  
    }
    if (bookName === undefined)
    {        
        return obj;
    }
    return obj[bookName];
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
console.log("O livro Animais Fantásticos e o Segredo de Dumbledore tem "  + book("Animais Fantásticos e o Segredo de Dumbledore").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Senhor dos Aneis é ${book("Senhor dos Aneis").autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Percy Jackson o Caçador de Raios foi publicado pela editora ${book("Percy Jackson o Caçador de Raios").editora}`);
