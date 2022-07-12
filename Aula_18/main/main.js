(function(){
    let myObject = {
        myProp: 1,
        init: function(){
            return this;
        }
    };
    console.log(myObject.init());

    function MyConstructor(){
        this.prop1 = "Propriedade 1",
        this.prop2 = "Propriedade 2"
    }

    console.log(`MeyConstructor = ${MyConstructor()}`);  // String interpolada
})();