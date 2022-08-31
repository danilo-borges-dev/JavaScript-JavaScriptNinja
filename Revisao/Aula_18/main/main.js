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
        return this;
    }

    let obj = new MyConstructor();
    console.log(`MeyConstructor = ${obj.prop1}`);  // String interpolada

    function ar (arg1, arg2){
        return arguments[1];
    }

    console.log(ar(11, 45));
})();