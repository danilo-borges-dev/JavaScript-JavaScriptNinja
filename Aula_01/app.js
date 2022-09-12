function m01 ( n1 ) {
    return function ( n2 ){
        return n1 * n2;
    }
}

let retornoDeUmaFuncao = m01(10)(02);


console.log(retornoDeUmaFuncao);