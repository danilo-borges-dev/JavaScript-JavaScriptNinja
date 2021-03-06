/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let IsTruThy = function (x)
{
    return console.log(`Result= ${!!x}`);
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
IsTruThy(NaN);
IsTruThy(null);
IsTruThy(false);
IsTruThy(0);
IsTruThy(-0);
IsTruThy(undefined);
IsTruThy('');
IsTruThy("");



/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
IsTruThy("Danilo Sucesso, Gatidão, Coragem, Fé, Metalizar, Só Alegria");
IsTruThy(1);
IsTruThy(true);
IsTruThy([]);
IsTruThy({});
IsTruThy(' ');
IsTruThy(-1);
IsTruThy([1,2,3]);
IsTruThy(12);
IsTruThy(150);



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
let Carro = 
{
    Marca: "",
    Modelo: "",
    Placa: "",
    Ano: 0,
    Cor: "",
    QuantasPortas: 0,
    Assentos: 0,
    QuantidadeDePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
let mudarCor = function(cor)
{
    Carro.Cor = cor;
}

mudarCor("Branco");
console.log(Carro.Cor);

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
let obterCor = function ()
{
    return Carro.Cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/ 
Carro.Modelo = "LTZ SPORT 6";
let obterModelo = function ()
{
    return Carro.Modelo;
}

console.log(obterModelo());

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
Carro.Marca = "Cruze 2012 Lindo, Perfeito, Com Teto Solar, Incrível :D Eu tenho";
let obterMarca = function ()
{
    return Carro.Marca;
}

console.log(obterMarca());
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
let obterMarcaModelo = function ()
{
    return console.log(`Esse carro é um ${Carro.Marca} ${Carro.Modelo}`);
}

obterMarcaModelo();
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
Carro.QuantidadeDePessoas = 0;
Carro.Assentos = 5;

let assentosDisponiveis = 0;
let perWord = "pessoas";

let entraPessoasNoCarro = function (numPerson)
{
    if(Carro.QuantidadeDePessoas < 0)
    {
        Carro.QuantidadeDePessoas = 0;
    }

    assentosDisponiveis = Carro.Assentos - Carro.QuantidadeDePessoas;

    if (Carro.QuantidadeDePessoas <= Carro.Assentos && numPerson < assentosDisponiveis)
    {
        Carro.QuantidadeDePessoas += numPerson;
        console.log(`Já temos ${Carro.QuantidadeDePessoas} pessoas no carro!`);
        return;
    }

    if (assentosDisponiveis === 1)
    {
        perWord = "pessoa";
    }

    if (assentosDisponiveis < numPerson && Carro.QuantidadeDePessoas > 0) 
    {
        console.log(`Só cabem mais ${Carro.Assentos - Carro.QuantidadeDePessoas} ${perWord}!`);
        return;
    }

    if(Carro.QuantidadeDePessoas === 0)
    {
        console.log(`O carro cabe apenas ${Carro.Assentos}.`);
        return;
    }
    console.log("O carro já está lotado!");
    return;
}

        


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
// Branco

// Mude a cor do carro para vermelho.
Carro.Cor = "Vermelho";

// E agora, qual a cor do carro?
// Vermelho

// Mude a cor do carro para verde musgo.
mudarCor("musgo");
console.log(Carro.Cor);

// E agora, qual a cor do carro?
// musgo

// Qual a marca e modelo do carro?
console.log(obterMarca());

// Adicione 2 pessoas no carro.
//entraPessoasNoCarro(2);

// Adicione mais 4 pessoas no carro.
//entraPessoasNoCarro(1);

// Faça o carro encher.
//entraPessoasNoCarro(2);

// Tire 4 pessoas do carro.
Carro.QuantidadeDePessoas = -4;

// Adicione 10 pessoas no carro.
entraPessoasNoCarro(10);

// Quantas pessoas temos no carro?
console.log(`Temos ${Carro.QuantidadeDePessoas} no carro.`);
