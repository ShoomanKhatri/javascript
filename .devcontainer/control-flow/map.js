let myarray = [1,2,3,4,5,6,7,8,9,10]
// for(i=0; i<myarray.length;i++){
//     let newarray = myarray[i]+10
//     console.log(newarray);
    
// }
// or we can do same thing by using map method
 
let nextarr = myarray.map( (array) => array+10)
console.log(nextarr);    // basically using map and filter are same

let nextarray = myarray.map( (array) => array+10).map( (array) => array+1)
console.log(nextarray);    //IN FILTERS THERE IS TRUE OR FALSE BUT IN MAP IT RETURNS ANY OPERATION

let nextarrays = myarray.map( (array) => array+10).map( (array) => array+1).filter((array) => array > 14)
console.log(nextarrays);    
