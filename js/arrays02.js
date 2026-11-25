
const fruits = ["apple", "mango","orange","papaya","lemon","avacado"]

function print(value){
    console.log(value)
}
// console.log(fruits[0])
// traversal
for(i=0;i<fruits.length;i++){

     console.log(fruits[i])
}


console.log(fruits)

fruits.forEach((value,i)=>{
    console.log(value);  
    console.log(i)
});

fruits.forEach(print)
console.log(fruits)


fruits.forEach((value)=>{
    if(value.startsWith("a")){
        console.log(value)
    }
    });


console.log(fruits)

