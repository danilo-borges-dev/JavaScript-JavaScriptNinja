function funcTest () {
    return "hi";
}

console.log(funcTest.name);

// Funções são Objetos de Primeira Classe - Funções tem o mesmo Tratamento que Objetos em JS - Tudo o que conseguimos fazer com Objetos também 
// vamos conseguir fazer com funções.
// Programação em C# e Java é considerada uma Programação Imperativa, já em JS permite ser mais Dinâmica

function adder (x) {
    return function (y) {
        return x + y;
    };
}

let add2 = adder(2);
console.log(add2(3));

console.log(adder(3)(3));

let car = {
    color: "Yellow",
};

function getCarColor (car) {
    return car.color;
}

console.log(getCarColor(car));

function showOtherFunction (otherFunction) {
    return otherFunction();
}

function otherFunction () {
    return `Sou Engenheiro e Arquiteto de Software.`;
}

console.log(showOtherFunction(otherFunction));