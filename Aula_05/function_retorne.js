function mayFunc ()
{
    return ["Danilo", "Da", "Silva", "Borges"];
}

console.log(mayFunc()[0]);
console.log(mayFunc()[1]);
console.log(mayFunc()[0][1], mayFunc()[0][2]); // Neste ponto do código estamos acessando o primeiro arry, primeira dimensão do arry em seguida a segunda dimensão do primeiro arry

// Coluna  0  1  2  3  4  5  6  7  8  9  10
// Linha 0 D  a  n  i  l  o 
//       1    
//       2     
//       3     
//       4   
//       5
//       6
//       7
//       8
//       9
//       10    

function mayFuncObj () 
{
    return pessoa = 
    {
        p1: 1,
        p2: "Danilo",
        p3: "Sobrenome",
        p4: "Idade"
    };
}

console.log(mayFuncObj().p1);

let arr = [1 , 0, 3, 5];

function func ( args )
{
    return arr[args]
}

console.log(func(2));

console.log(mayFuncObj()["1"]);