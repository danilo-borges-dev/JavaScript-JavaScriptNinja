(function(){
    "use scrict";
    /*
    Crie um array com 5 items (tipos variados).
    */
    let cincoValoresVariadosArray = [
        "Bom dia",
        42_000_000.00,
        ["Arroz", "Feijão", "Tomate"],
        {
            propriedade1: "Texto",
            propriedade2: 1,
            propriedade3: function () {
                return "Eu vou ter uma dia maravilhoso!"
            }
        },
        function (arg) {
            return cincoValoresVariadosArray[arg];
        }
    ]

    /*
    Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
    A função deverá retornar o array atualizado.
    */
    function addItem (arg) {
        cincoValoresVariadosArray.push(arg);
        return cincoValoresVariadosArray;
    }

    /*
    Adicione um novo array ao array criado no início do desafio, com ao menos 3
    itens de tipos diferentes, mostrando o resultado no console.
    */
    let newArray = [
        "Somente eu tenho o poder de mudar minha vida",
        7,
        "Aquele que crê, vence"
    ]
    console.log(addItem(newArray));

    /*
    Mostre no console o segundo elemento desse último array, criado acima, com a
    frase:
    "O segundo elemento do segundo array é [ELEMENTO]."
    */
    console.log(`O segundo elemento do segundo array é ${cincoValoresVariadosArray[5][1]}`);

    /*
    Mostre no console quantos itens tem o primeiro array criado, com a frase:
    "O primeiro array tem [QUANTIDADE DE ITENS] itens."
    */
    console.log(`O primeiro array tem ${cincoValoresVariadosArray.length} itens.`);

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
    let number = 10;
    while(number <= 20){
        if(number % 2 === 0){
            console.log(number);
        }
        number++;
    }

    /*
    Na mesma ideia do exercício acima: mostre agora os números ímpares.
    */
    console.log( 'Números ímpares entre 10 e 20:' );
    number = 10;
    while(number <= 20){
        if(number % 2 !== 0){
            console.log(number);
        }
        number++;
    }

    /*
    Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
    Só vamos mudar o range:
    - No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
    - No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
    */
    console.log( 'Números pares entre 100 e 120:' );
    for (let number = 120; number >= 100; number--){
        if(number % 2 === 0){
            console.log(number);       
        }
    }
    console.log( 'Números ímpares entre 111 e 125:' );
    for (number = 125; number >= 111; number--){
        if(number % 2 !== 0){
            console.log(number);       
        }
    }
})();