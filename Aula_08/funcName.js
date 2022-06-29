function funcname ()
{
    return;
}

console.log(funcname.name);

function person ()
{
    return { name: "Danilo", lastName: " Borges"};
}

console.log(person().name);

function adder (x)
{
    return function otherFunc (y)
    {
        return x + y;
    }
}

console.log(adder(10)(5));

let sum = adder(2);
console.log(sum(3));

let car =
{
    color: "yellow"
};

function getCarColor (mycar)
{
    return mycar.color;
}

console.log(getCarColor(car));


function showOtherFunction (otherFunc)
{
    return otherFunc ();
}

function func ()
{
    return `Programação Funcional em JS Ninja!`;
}

console.log(showOtherFunction(func));  // Aqui estamos passando a intração func (Function) por parâmetro, lembrando que não podemos invocá-la