
const books = ["b1","b2",200,{name:"ananta"}];
const numbers = [20,25,56,45,82,15]
console.log(books.length)
// books = 500;
books.push("demo")
// books.pop()
// books.shift()
console.log(books.slice(0,2))
// console.log(books.splice(2,4))
console.log(numbers.find((num)=>(num > 50)))
console.log(numbers.findLast((num)=>(num>50)))
console.log(numbers.findIndex((num)=>(num>50)))
console.log(numbers.filter((num)=>(num>50)))
console.log(numbers.includes(200))
// books.fill("20",3,4)
index = books.indexOf(200)
books.fill(100,index,index+1)
books[2] = "demo"

console.log(books)
console.log(books.length)


