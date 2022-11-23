(function () {
  "use strict";
  // Declarar uma variável qualquer, que receba um objeto vazio.
  let qualquer = {};

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
  let pessoa = {
    nome: "Danilo",
    sobrenome: "Borges",
    sexo: "M",
    idade: 29,
    altura: 1.9,
    peso: 89.0,
    andando: false,
    caminhouQuantosMetros: 0,
  };

  /*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
  pessoa.FazerAniversario = function () {
    this.idade += 1;
  };
  console.log(pessoa.idade);
  pessoa.FazerAniversario();
  console.log(pessoa.idade);

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
  pessoa.Andar = function (qtdMetros) {
    this.caminhouQuantosMetros += qtdMetros;
    this.andando = true;
  };
  console.log(pessoa.andando);
  console.log(pessoa.Andar(100));
  console.log(pessoa.andando);
  console.log(pessoa.caminhouQuantosMetros);

  /*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
  pessoa.Parar = function () {
    this.andando = false;
  }
  pessoa.Parar();
  console.log(pessoa.andando);
  /*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
  pessoa.NomeCompleto = function () {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
  }
  console.log(pessoa.NomeCompleto());
  /*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
  pessoa.MostrarIdade = function () {
    return `Olá, eu tenho ${pessoa.idade} anos!`;
  }
  console.log(pessoa.MostrarIdade());
  /*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
  pessoa.MostrarPeso = function () {
    return `Eu peso ${pessoa.peso}Kg.`;
  }
  console.log(pessoa.MostrarPeso());
  /*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
  pessoa.MostrarAltura = function () {
    return `Minha altura é ${pessoa.altura}m.`;
  }
  console.log(pessoa.MostrarAltura());
  /*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
    console.log(pessoa.NomeCompleto()); // Olá! Meu nome é Danilo Borges!
  /*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
    console.log(pessoa.MostrarIdade()); // Olá, eu tenho 30 anos!
  /*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
    console.log(pessoa.MostrarPeso()); // Eu peso 89Kg.
  /*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
    console.log(pessoa.MostrarAltura());  // Minha altura é 1.9m.
  /*
Faça a `pessoa` fazer 3 aniversários.
*/
    pessoa.FazerAniversario();
    pessoa.FazerAniversario();
    pessoa.FazerAniversario();
  /*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
    console.log(pessoa.MostrarIdade());  // Olá, eu tenho 33 anos!
  /*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
    pessoa.Andar(152);
    pessoa.Andar(52);
    pessoa.Andar(89);

  /*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
    console.log(pessoa.andando);  // true
  /*
Se a pessoa ainda está andando, faça-a parar.
*/  
    pessoa.Parar();
  /*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
    console.log(pessoa.andando);  // false
  /*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
    console.log(pessoa.caminhouQuantosMetros);  // 393
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
    pessoa.Apresentacao = function () {
        let masculinoOuFeminio = pessoa.sexo === "M" ? "o" : "a";
        let idadeSingularOuPlural = pessoa.idade === 1 ? "ano" : "anos";
        let metroSingularOuPlural = pessoa.caminhouQuantosMetros > 1 ? "metros" : "metro";
        return `Olá, eu sou ${masculinoOuFeminio} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${idadeSingularOuPlural}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metroSingularOuPlural}!`;
    }
  // Agora, apresente-se ;
    console.log(`\nApresentação:\n${pessoa.Apresentacao()}`);

})();
