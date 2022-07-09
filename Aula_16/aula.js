
myFunction();

function myFunction (){
    let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ];
    
    console.log(array.map((item) => item + 1));
    console.log();

    console.log(array.map(function(item, index, array){ return {index: index, item: item };}));

    console.log();

    let filterTest = array.filter(function(item, index, array){
        return item > 2;
    });

    console.log(filterTest);
}


