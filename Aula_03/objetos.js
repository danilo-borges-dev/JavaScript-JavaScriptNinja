let mayFunc = function () 
{
    return "Danilo";
}

let sum = function (a, b) 
{
    return a + b;
}

let mayObject = 
{
    prop_01: mayFunc(),
    prop_02: "Silva Borges",
    prop_03: sum(10,10)
}

console.log(mayObject.prop_01 + " " + mayObject.prop_02);
console.log(mayObject.prop_03);

let objePerson = 
{
    Name: "Danilo",
    Age: 29,
    Weight: 80,
    Height: 1.87
}

console.log(objePerson.Name);
console.log(objePerson.Height);


