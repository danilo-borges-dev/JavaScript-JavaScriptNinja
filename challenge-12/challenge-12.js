(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
let person = 
{
    name: "Danilo",
    lastname: "da Silva Borges",
    age: 29
}
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
let myArray = Object.keys(person);
console.log(myArray);

/*
Crie um array vazio chamado `books`.
*/
let books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: "Nome de Livro 01", pages: 100}, {name: "Nome de Livro 02", pages: 150}, {name: "Nome de Livro 03", pages: 200});

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
books.forEach(element => {
    console.log(element["name"]);
});

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
books.pop();

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
let newString = JSON.stringify(books);
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(newString);

/*
Converta os livros novamente para objeto.
*/
let newJson = JSON.parse(newString);
console.log( '\nAgora os livros são objetos novamente:' );
console.log(newJson);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (let i = 0; i < books.length; i++) {
    for (let prop in books[i]) {
             console.log(prop + ": " + books[i][prop]);
        }
    }   


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
let myName = ["D", "A", "N", "I", "L", "O"]
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(""));
console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join(""));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());
})();