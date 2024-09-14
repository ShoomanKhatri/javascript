let mynum =[1,2,3,4]
let initialvalue = 0

let store= mynum.reduce((accumulator,currentvalue) => accumulator + currentvalue,initialvalue)
console.log("acc :",accumulator ,"curvalu:", currentvalue);

console.log(store);
