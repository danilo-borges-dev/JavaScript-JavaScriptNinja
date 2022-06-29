/*
Crie um array com 5 items (tipos variados).
*/
let myArray = 
[
    "Coragem",
    123456,
    [ "C#", "Js", "Java", "HTML", "CSS" ],
    function ()
    {
        return `Uma função anônima dentro de um arry de 01 dimensão`;
    },
    {
        nome: "Maria",
        sobrenome: "Luiza",
        idade: 26,
        escolaridade: () =>  `Uma função anônima dentro de um Objeto. Este objeto está dentro de um arry de 01 dimensão.`
    }
]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem ( newItem )
{
    myArray.push(newItem);
    return myArray;
}

addItem("Danilo Boladão");
console.log(myArray);

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
let newArray =
[
    "String",
    123,
    [ "Novo Array" ]
]
myArray.push(newArray);
console.log(myArray);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${myArray[6][1]}.`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArray.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myArray[6].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
for (let index = 10; index <= 20; index++) {
    if (index % 2 == 0)
    {
        console.log(index);
    }  
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
for (let index = 10; index <= 20; index++) {
    if (index % 2 != 0)
    {
        console.log(index);
    }  
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
let ax = 100;

while (ax >= 100 & ax <= 120) 
{
    if (ax % 2 == 0)
    {
        console.log(ax);
    }
    ax++;
}

console.log( 'Números ímpares entre 111 e 125:' );
ax = 111;

while (ax >= 111 & ax <= 125) 
{
    if (ax % 2 != 0)
    {
        console.log(ax);
    }
    ax++;
}