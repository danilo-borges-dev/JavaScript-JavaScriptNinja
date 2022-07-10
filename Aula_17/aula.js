let arr = [ 1, 2, 3, 4, 5 ];

let reduceLet = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
}, 0); // Zero é o indice que será inicializado o parâmetro aculado, ou seja, será iniciado no primeiro indice. 

// Temos como retorno no console o valor 15

/*
    1ª - 0 + 1 = 1
    2ª - 1 + 2 = 3
    3ª - 3 + 3 = 6
    4ª - 7 + 4 = 10
    5ª - 12 + 5 = 15
*/