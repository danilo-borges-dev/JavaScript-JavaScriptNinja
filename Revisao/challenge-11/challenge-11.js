(function ()
{
    ;// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

    /*
    Crie uma variável chamada `once`, que recebe `false` como seu valor.
    Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
    loop, mostre no console a mensagem:
    'Entrou ao menos uma vez!'
    Qual loop você deve usar para que essa mensagem seja mostrada no console?
    */
    let once = false;
    do
    {
        console.log(`Entrou ao menos uma vez!`);
    } while (once)

    /*
    Crie um objeto chamado `person`, que receba as seguintes propriedades:
    - 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
    para o nome, idade, peso e data de nascimento dessa pessoa.
    */
    let person =
    {
        name: "Danilo Borges",
        age: 29,
        weight: 93,
        birthday: "26/12/1992"
    }
    /*
    Use um loop para percorrer o objeto criado acima, mostrando no console
    a frase:
    'The [PROPERTY] of person is [VALUE]'
    Aproveite e crie uma variável `counter` que vai contar quantas propriedades
    esse objeto tem.
    Após o loop, mostre a frase:
    'The person has [COUNTER] properties'
    */
    let counter = 0;

    for (var item in person)
    {
        let valueOfperson = item;
        console.log(`The ${item} of person is ${person[valueOfperson]}`);
        counter++;
    }
    console.log(`The person has ${counter} properties`);


    /*
    Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
    criado acima) é mais velha que a idade passada por parâmetro.
    Se verdadeiro, retornar `true`. Senão, retornar false.
    Após a função, mostrar a mensagem no console:
    'The person has more than 25 years old? [TRUE/FALSE]'
    */
    function moreThan (ageParam)
    {
        let returnVar;
        birthdayPerson = person.birthday.split("/");   
        let birthdayDate =    birthdayPerson[2];  
        let dateNow = new Date;
        let age = dateNow.getFullYear() - birthdayDate;

        if (ageParam > age)
        {
            returnVar =  true;
        }
        else 
        {
            returnVar = false;
        }
        return `The person has more than 25 years old? ${returnVar}`;
    }

    console.log(moreThan(19));

    /*
    Faça um loop de 0 a 20, que adicione cada número como um item de um
    array chamado `numbers`. Se o contador for maior que 10, saia do loop.
    Mostre no console os números no array.
    */
    console.log('De 0 a 10:');
    let numbers = [];
    
    for(let i = 1; i <= 10; i++)
    {
        numbers[i - 1] = i;
    }

    for (let i = 0; i <= 10; i++)
    {
        console.log(`Array no Index ${i} tem o valor ${numbers[i]}`);
    }

    /*
    Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
    criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
    esses. Se o número for ímpar, pular para o próximo número.
    Mostrar no console os números do array.
    */
    for (let i = numbers.length; i > 0; i--)
    {
        numbers.pop();
    }

    console.log();

    console.log('Pares de 0 a 20:');
    for (let i = 0; i < 20; i++)
    {        
        let n = (i % 2) == 0;
        if(n)
        {        
            numbers[i] = i;            
        }
        else
        {
            continue;
        }
        console.log(`Números: ${numbers[i]}`);
    }
    
})()