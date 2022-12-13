function map (a, b) {
    let resultado = [];
    for (let index = 0; index < a.length; index++) {
        resultado[i] = b(a[i]);        
    }
    return resultado;
}

console.log(map([10, 5, 8, 2, 6], function (x) {return x * x * x}));