(function () {
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

    let obj_01 =
    {
        prop_01: 1,
        prop_02: "Danilo"
    }

    let obj_02 = Object.create(obj_01);

    obj_02.prop_03 = "Nova Propriedade";

    for (let item in obj_02) {
        console.log(obj_02.hasOwnProperty(item), item);
    }
})();