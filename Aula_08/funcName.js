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