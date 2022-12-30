(function(){
    "use strict";
    /*
    Crie um array com 5 items (tipos variados).
    */
    let mayArray = [
        "Dia Maravilhoso",
        {
            propriedade1: 1001,
            "Minha Propriedade 2": "Seja Feliz, Seja Foda"
        },
        [1, 2, 3, 4, 5],
        95852,
        function () {return mayArray[0];}
    ];

    /*
    Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
    A função deverá retornar o array atualizado.
    */
    function addItem (element) {
        mayArray.push(element);
        return mayArray;
    }

    /*
    Adicione um novo array ao array criado no início do desafio, com ao menos 3
    itens de tipos diferentes, mostrando o resultado no console.
    */
    let newArray = ["Laranja", "Melancia", "Morango"];
    console.log(addItem(newArray));

    /*
    Mostre no console o segundo elemento desse último array, criado acima, com a
    frase:
    "O segundo elemento do segundo array é [ELEMENTO]."
    */
    console.log(`O segundo elemento do segundo array é ${mayArray[5][1]}.`);

    /*
    Mostre no console quantos itens tem o primeiro array criado, com a frase:
    "O primeiro array tem [QUANTIDADE DE ITENS] itens."
    */
    console.log(`O primeiro array tem ${mayArray.length} itens.`);

    /*
    Agora mostre no console quantos itens tem o segundo array criado, com a frase:
    "O segundo array tem [QUANTIDADE DE ITENS] itens."
    */
    console.log(`O segundo array tem ${newArray.length} itens.`);

    /*
    Utilizando a estrutura de repetição `while`, mostre no console todos os números
    pares entre 10 e 20, inclusive esses 2.
    */
    console.log( 'Números pares entre 10 e 20:' );
    let numbers = 10;
    while(numbers <= 20){
        if(numbers % 2 == 0){
            console.log(numbers);
        }
        numbers++;
    }

    /*
    Na mesma ideia do exercício acima: mostre agora os números ímpares.
    */
    console.log( 'Números ímpares entre 10 e 20:' );
    numbers = 10;
    while(numbers <= 20){
        if(numbers % 2 !== 0){
            console.log(numbers);
        }
        numbers++;
    }

    /*
    Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
    Só vamos mudar o range:
    - No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
    - No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
    */
    console.log( 'Números pares entre 100 e 120:' );
    numbers = 100;
    for (let i = 100; i <= 120; i++) {
        if(numbers % 2 === 0){
            console.log(numbers);
        } 
        numbers++;
    }

    numbers = 125;
    console.log( 'Números ímpares entre 111 e 125:' );
    for (let i = 125; i >= 111; i--) {
        if(numbers % 2 !== 0){
            console.log(numbers);
        }   
        numbers--;
    }
})();