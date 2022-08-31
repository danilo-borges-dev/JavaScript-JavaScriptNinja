//É uma técnica que verifica se o valor da variável é Verdadeiro ou Falso. Utilizado quando se necessita testar o valor de uma variável se é verdadeiro ou falso.

// Os Tipos de Dados que são por padrão Falsy**
/*
    null
    0 
    -0
    undefined
    false
    ""
    ''
    NaN
*/

let teste = NaN;

if (teste) 
{
    teste = true;
}
else
{
    teste = false;
}

console.log(`Valor de teste NaN = ${teste}`);

teste = null;

if (teste) 
{
    teste = true;
}
else
{
    teste = false;
}

console.log(`Valor de teste null = ${teste}`);

teste = '';

if (teste) 
{
    teste = true;
}
else
{
    teste = false;
}

console.log(`Valor de teste '' = ${teste}`);

teste = "";

if (teste) 
{
    teste = true;
}
else
{
    teste = false;
}

console.log(`Valor de teste "" = ${teste}`);

teste = undefined;

if (teste) 
{
    teste = true;
}
else
{
    teste = false;
}

console.log(`Valor de teste undefined = ${teste}`);

teste = 0;

if (teste) 
{
    teste = true;
}
else
{
    teste = false;
}

console.log(`Valor de teste 0 = ${teste}`);

teste = -0;

if (teste) 
{
    teste = true;
}
else
{
    teste = false;
}

console.log(`Valor de teste -0 = ${teste}`);

console.log("-------------------------------------------------------------------------------------------------");


teste = NaN;

console.log(`Valor de teste NaN = ${!!teste}`);

teste = null;

console.log(`Valor de teste null = ${!!teste}`);

teste = '';

console.log(`Valor de teste '' = ${!!teste}`);

teste = "";

console.log(`Valor de teste "" = ${!!teste}`);

teste = undefined;

console.log(`Valor de teste undefined = ${!!teste}`);

teste = 0;

console.log(`Valor de teste 0 = ${!!teste}`);

teste = -0;

console.log(`Valor de teste -0 = ${!!teste}`);