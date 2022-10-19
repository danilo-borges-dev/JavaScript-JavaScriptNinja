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

    console.log(!!0);
    console.log(!!1);
    console.log(!!undefined);
    console.log(!![]);
    console.log(!!-0);
    console.log(!!NaN);
    console.log(!!false);
    console.log(!!'');
    console.log(!!"");
    console.log(!!null);
    console.log(!!" ");
    console.log(!!function(){});
})();


