// let sym=Symbol("key")
// let myObj={
//     name:"pratik",
//     age:19,
//     location:"btwl",
//     [sym]:"key", // at first we have to declare symbol to put synmol in object
// }
// console.log(myObj.age);
// console.log(myObj);
// console.log(myObj[sym]);

//----------- SECOND PART

// let bio={
//     adreess:"bhw",
//     mail:"qwerty",
//     fullname:{
//         fName:"pratik",
//         lname:"kshetree"
//     },
//     age:19
// }
// console.log(bio);
// console.log(bio.fullname.fName);
// console.log(bio.fullname);

let obj1={1:"a",2:"b"}
let obj2={3:"a",4:"b"}
let obj3={5:"a",6:"b"}

//let obj4=Object.assign({},obj1,obj2,obj3)//giving curly brackets at first is not mandotary but its a good way to do it

//another way to keep obj together called as spread method
let obj4={...obj1,...obj2,...obj3}
console.log(obj4);
console.log(Object.keys(obj1));

console.log(Object.values(obj1));




//paart 19




