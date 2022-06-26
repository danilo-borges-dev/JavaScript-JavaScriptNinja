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
    prop_03: sum(10, 10),
    prop_04: function(a, b)
    {
        return a * b;
    }
}

console.log(mayObject.prop_01 + " " + mayObject.prop_02);
console.log(mayObject.prop_03);

let ObjePerson =
{
    Name: "Danilo",
    Age: 29,
    Weight: 80,
    Height: 1.87
}

ObjePerson.Color = "White";

console.log(ObjePerson.Name);
console.log(ObjePerson.Height);
console.log(ObjePerson.Color);

console.log(mayObject.prop_03);

mayObject.NomeCompleto = function () 
{
    return mayObject.prop_01 + " " + mayObject.prop_02;
}

console.log(mayObject.NomeCompleto());


let MayObj =
{

}

MayObj.Nome = function ()
{
    return "Danilo";
}

console.log(MayObj.Nome());

console.log();

console.log(mayObject.prop_04(10,2));

