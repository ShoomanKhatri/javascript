let mynum=2045.789
console.log(mynum);
let play=String(mynum)
console.log(typeof play);

//!!!!!! IT DISCARDS THE DIGITS AFTER DECIMAL
console.log(mynum.toFixed(1))
console.log(mynum.toFixed(2));

//  IT ROUNDSOFF THE VALUE AFTER DECIMAL
console.log(mynum.toPrecision(6));
 
//IT GIVES COMMAS BETWEEN DIGITS
let ANOTHERnum= 248540236.8900
console.log(ANOTHERnum.toLocaleString());
console.log(ANOTHERnum.toLocaleString("en-IN"));

//IT GIVES RANDOM NUMBER BETWEEN 0 AND 1
let max=6
let min=1
console.log(Math.random());
console.log(Math.floor(Math.random()*(max- min+1))+min);



