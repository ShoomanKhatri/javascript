let sym=Symbol("key")
let myObj={
    name:"pratik",
    age:19,
    location:"btwl",
    [sym]:"key", // at first we have to declare symbol to put synmol in object
}
console.log(myObj.age);
console.log(myObj);
console.log(myObj[sym]);

