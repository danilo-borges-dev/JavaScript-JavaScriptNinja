(function(){
    "use strict";
    let name = "Danilo ";

    console.log(name.charAt(5));

    let frase = "Coragem ";
    let frase2 = "Mentalização ";
    console.log(name.concat(frase, frase2));
    frase = "Coragem ";
    console.log(frase.indexOf("a"));

    console.log(frase.lastIndexOf("e"));

    let newFrase = "Danilo da Silva Borges";
    console.log(newFrase.replace("o", "u"));

    let sliceTest = "Danilo";
    console.log(sliceTest.slice(1, 4));
})();