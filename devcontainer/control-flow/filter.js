let mynumbers=[1,2,3,4,5,6,7,8,9,10]
let values = mynumbers.filter( (nums) => nums>5 ) //using filter as arrow function
console.log(values);

let newobj=[
   { title:"english",
    genre:"fiction",
    published:1990
},
{
    title:"science",
    genre:"fiction",
    published:2000
},
{
    title:"eco",
    genre:"money",
    published:1995
},
{
    title:"nepali",
    genre:"literature",
    published:2020
},
{
    title:"history",
    genre:"money",
    published:2050
}
]
let mybooks = newobj.filter( (books) => books.published >2020 && books.genre =="money")
    console.log(mybooks);
    
