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

let myVar = function () {
    return "Minha Função";
}

let obj = {};

obj.myVar = myVar;

console.log(obj.myVar);

console.log();

let novaPessoa = {
    nome: "Danilo",
    idade: 29,
    sexo: 'M',
    andouQuantosMetros: 0,
    parado: "Sim",

    andar: function () {
        this.andouQuantosMetros = 10;
        this.parado =  "Não";
        return "Está andando";
    },

    parar: function () {
        this.parado = "Sim";
        return "Pessoa parou";
    },

    aniversario: function () {
        return this.idade++;
    }
}

console.log(novaPessoa.andar());  // Está andando
console.log("Está parado? " + novaPessoa.parado);  // Não
console.log("Idade atual " + novaPessoa.idade); // 29 anos
novaPessoa.aniversario();  
console.log("Nova Idade " + novaPessoa.idade);  // 30 anos