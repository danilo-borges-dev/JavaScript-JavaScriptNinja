let person = {
    nome: "Danilo",
    idade: 29,
    sexo: "masculino",
    peso: 85,
}

console.log(person["nome"]);


let pessoa = {
    nome: "Danilo",
    idade: 29,
    andar: function () {
    return "Está andando!";
    },
    parar: function () {
        return "Está parado!";
    },
}

console.log(pessoa.parar());