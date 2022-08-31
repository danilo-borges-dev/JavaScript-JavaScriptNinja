let obj1 = 
{
    prop1: "Nome",
    prop2: "Idade"
}

let obj2 = Object.create(obj1);

obj2.prop3 = "Propriedade";

 for (var item in obj2) {
    console.log(item);
 }

 console.log();

 for (let item in obj2)
 {
     console.log(obj2.hasOwnProperty(item));
 }

console.log();

 let objToArray = 
 {
    name: "Danilo",
    age: 29,
    sex: 'M'
 }

 let newArry = Object.keys(objToArray);
 console.log(newArry);
 console.log(newArry.length);

 console.log();

 let objToString = 
 {
    a: "A",
    b: "B",
    c: "C"
 }

 console.log(JSON.stringify(objToString));

 console.log();

 let stringToObject = '{"prop1": 1, "prop2": 2, "prop3": 4}';
 console.log(JSON.parse(stringToObject));