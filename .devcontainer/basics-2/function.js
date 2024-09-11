function logged(username) {
   return `${username} has logged in` //a
//return username //b
}
let print=logged("pratik")
console.log(print) //a
//console.log(print," has logged in"); //b

//-------------------------------------------//
//checking how arguments are printed when there is only one or less parameters(by writing... {three dots})
//it is printed in the form of array 
 function  parameter(...num1){
          return num1;
 }
 //console.log(parameter(50));
 const argu=parameter(50,60,70)
console.log(argu);

//----------------------------------------------

let myobj={
    name:"pratik",
    learning:"javascript"
}
function passing(_rect) {
    //console.log(`my name is ${_rect.name} and i am learning ${_rect.learning}`)
console.log("my name is",_rect.name ,"and learning",_rect.learning);

}
passing(myobj)

