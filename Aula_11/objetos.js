let obj1 = 
{
    prop: "Nome",
    prop2: "Idade"
}

let obj2 = obj1;

obj2.prop = "100";

console.log(obj1);

 let obj3 = { x1: 1, x2: 2};

 let obj4 = Object.create(obj3);

 console.log(obj4.x1);
 
 obj4.x1 = "Danilo";
 
 console.log(obj4.x1);
 console.log(obj3.x1);

 obj4.x3 = "X3";

 console.log(obj4.x3);


