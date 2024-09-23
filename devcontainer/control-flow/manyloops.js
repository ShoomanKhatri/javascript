for(i=2;i<=5;i=i+2){
    console.log(i);
    
}
// MAP LOOP
let map=new Map()
map.set('nep',"ktm")
map.set('ind',"del")
map.set('usa',"dc")

console.log(map);

// FOR EACH LOOP
let lang=["js","c","c++","python"]
lang.forEach(function (items) {
    console.log(items);
    
})
let newarray=[
    {
        file:"javascript",
        filename:"js"
    },
    {
        file:"python",
        filename:"py"
    },
    {
        file:"ruby",
        filename:"rb"
    }
]
newarray.forEach(function (items) {
    console.log(items.file);
    
})

// USING ARROW FUNCTION

newarray.forEach((items)=>{
    console.log(items.file);
    
})
