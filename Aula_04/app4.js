function map(f, a){
    let result = [];
    for (let i = 0; i != a; i++){
        result[i] = f(a[i]);
        return result;
    }
}

map(function(x) {return x * x * x}, [0, 1 , 3]);