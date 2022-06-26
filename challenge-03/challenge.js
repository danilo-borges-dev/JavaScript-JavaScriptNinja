// Declarar uma variável qualquer, que receba um objeto vazio.
let VarQualquer = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let Pessoa = 
{
    Nome: "",
    SobreNome: "",
    Sexo: "",
    Idade: 0,
    Altura: 0,
    Peso: 0,
    Andando: false,
    CaminhouQuantosMetros: 0
};


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

Pessoa.FazerAniversario = function ()
{
    Pessoa.Idade += 1;
};
Pessoa.FazerAniversario();
Pessoa.FazerAniversario();
console.log(Pessoa.Idade);

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
Pessoa.Andar = function (metersToWalk) 
{
    Pessoa.CaminhouQuantosMetros += metersToWalk;
    Pessoa.Andando = true;
}
Pessoa.Andar(100);
console.log(Pessoa.CaminhouQuantosMetros);
console.log(Pessoa.Andando);

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
Pessoa.Parar = function ()
{
    Pessoa.Andando = false;
}
Pessoa.Parar();
console.log(Pessoa.Andando);

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
Pessoa.NomeCompleto = function ()
{
    return "Olá! Meu nome é " + Pessoa.Nome + " " + Pessoa.SobreNome;
}

Pessoa.Nome = "Danilo";
Pessoa.SobreNome = "da Silva Borges";
console.log(Pessoa.NomeCompleto());

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
Pessoa.MostrarIdade = function () 
{
    return "Olá, eu tenho " + Pessoa.Idade + " anos.";
}

console.log(Pessoa.MostrarIdade());

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
Pessoa.MostrarPeso = function ()
{
    return "Eu peso " + Pessoa.Peso + "Kg.";
}

Pessoa.Peso = 80;
console.log(Pessoa.MostrarPeso());

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
Pessoa.MostrarAltura = function ()
{
    return "Minha Altura é " + Pessoa.Altura + "m.";
}

Pessoa.Altura = 1.87;
console.log(Pessoa.MostrarAltura());

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
// Olá! Meu nome é Danilo da Silva Borges;

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
// Olá, eu tenho 2 anos.

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
// Eu peso 80Kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
// Minha Altura é 1.87m.


/*
Faça a `pessoa` fazer 3 aniversários.
*/
Pessoa.FazerAniversario();
console.log(Pessoa.Idade);

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
// 3

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
Pessoa.Andar(152);
Pessoa.Andar(80);
Pessoa.Andar(15);


/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoa.Andando);

/*
Se a pessoa ainda está andando, faça-a parar.
*/
Pessoa.Parar();
console.log(Pessoa.Andando);


/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
// false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(Pessoa.CaminhouQuantosMetros);
//347

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
Pessoa.Sexo = "Masculino";

Pessoa.Apresentacao = function ()
{
    let CaractereSexo = "o";
    if (Pessoa.Sexo === "Femino")
    {
        CaractereSexo = "a";
    }

    let PalavraIdade = "ano";
    if (Pessoa.Idade > 1)
    {
        PalavraIdade = "anos";
    }

    let PalavraMetro = "metro";
    if (Pessoa.CaminhouQuantosMetros > 1)
    {
        PalavraMetro = "metros";
    }
    return `Olá, eu sou ${CaractereSexo} ${Pessoa.NomeCompleto()}, tenho ${Pessoa.Idade} ${PalavraIdade}, ${Pessoa.Altura}, meu peso é ${Pessoa.Peso} e, só hoje, eu já caminhei ${Pessoa.CaminhouQuantosMetros} ${PalavraMetro}!`;
}

// Agora, apresente-se ;)
console.log(Pessoa.Apresentacao());