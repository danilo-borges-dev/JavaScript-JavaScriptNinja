(function(){
    "use strict";
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
    let isTruthy = function (arg) {
        return !!arg;
    }

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
    console.log(isTruthy(0));
    console.log(isTruthy(-0));
    console.log(isTruthy(false));
    console.log(isTruthy(''));
    console.log(isTruthy(""));
    console.log(isTruthy(NaN));
    console.log(isTruthy(null));
    console.log(isTruthy(undefined));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
    console.log(isTruthy(1));
    console.log(isTruthy(-2));
    console.log(isTruthy(3.5));
    console.log(isTruthy(Object));
    console.log(isTruthy([]));
    console.log(isTruthy({}));
    console.log(isTruthy(" "));
    console.log(isTruthy(' '));
    console.log(isTruthy("Nome"));
    console.log(isTruthy(function () {}));
    console.log(isTruthy(true));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
    let carro = {
        "marca": "Chevrolet",
        "modelo": "Hatch Sport 6",
        "placa": "1025-jhg",
        "ano": 2022,
        "cor": "Vermelho",
        "quantasPortas": 4,
        "assentos": 5,
        "quantidadeDePessoas": 0,
    };

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
    carro.MudarCor = function (arg) {
        this.cor = arg;
    }

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
    carro.ObterCor = function () {
        return this.cor;
    }

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
    carro.ObterModelo = function () {
        return this.modelo;
    }

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
    carro.ObterMarca = function () {
        return this.marca;
    }

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
    carro.ObterMarcaModelo = function () {
        return `Esse carro é um ${this.marca} ${this.modelo}`;
    }

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
    carro.AdicionarPessoas = function (arg) {
        if (((this.quantidadeDePessoas === this.assentos) || (this.quantidadeDePessoas + arg === this.assentos)) && arg > 0) {
            if(this.quantidadeDePessoas < this.assentos){
                this.quantidadeDePessoas += arg;
            }
            return `O carro já está lotado!`;
        }

        if (this.assentos - this.quantidadeDePessoas > arg){
            this.quantidadeDePessoas += arg;
            return `Já temos  ${this.quantidadeDePessoas} pessoas no carro!`;
        }

        if((this.assentos - this.quantidadeDePessoas < arg)){
            return `Só cabem mais ${this.assentos - this.quantidadeDePessoas} pessoas!`;
        }
    }

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
    console.log(carro.ObterCor());

// Mude a cor do carro para vermelho.
    carro.MudarCor("Vermelho");

// E agora, qual a cor do carro?
    console.log(carro.ObterCor());

// Mude a cor do carro para verde musgo.
    carro.MudarCor("Musgo");    

// E agora, qual a cor do carro?
    console.log(carro.ObterCor());


// Qual a marca e modelo do carro?
    console.log(carro.ObterMarca());

// Adicione 2 pessoas no carro.
    console.log(carro.AdicionarPessoas(2));

// Adicione mais 4 pessoas no carro.
    console.log(carro.AdicionarPessoas(4));

// Faça o carro encher.
    console.log(carro.AdicionarPessoas(3));

// Tire 4 pessoas do carro.
    console.log(carro.AdicionarPessoas(-4)); 

// Adicione 10 pessoas no carro.
    console.log(carro.AdicionarPessoas(10));

// Quantas pessoas temos no carro?
    console.log(carro.quantidadeDePessoas);

})();