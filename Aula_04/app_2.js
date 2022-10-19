(function(){
    "use strict";
    let nome = "Danilo";
    console.log(nome);


    let sexo = 'M';
    let quantidadeDeHomens = 0;
    let quantidadeDeMulheres = 0;

    sexo === 'M' ? quantidadeDeHomens++ : quantidadeDeMulheres++;
    sexo === 'M' ? quantidadeDeHomens++ : quantidadeDeMulheres++;
    console.log(quantidadeDeHomens);
    console.log(quantidadeDeMulheres);
    sexo === 'F' ? quantidadeDeHomens++ : quantidadeDeMulheres++;
    console.log(quantidadeDeMulheres);

})();


