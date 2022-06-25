let func = function meyFunc (x, y)
{
    return x + y;
}

let letfunc = func(10, 10);

function number ()
{
    return 10;
}

let number1 = number();

function meyFunc (a, b)
{
    let result = a + b;
    
    return console.log(result);
}

meyFunc(letfunc, number1);
