let username="pratik"
let pw=true
let email=true
let logedinfb=false

//both the condition should be true torun in and (&&) case
if( username && pw){
    console.log("process successfull");
    
} 
if( username && logedinfb){
    console.log(" process successfull");
    
} 
else{
    console.log("unsuccessfull");
    
}
// in or (||) case if only one condition is true then it will run
if( username || logedinfb){
    console.log(" process successfull");
    
} 
else{
    console.log("unsuccessfull");
    
}

