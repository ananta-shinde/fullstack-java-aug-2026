
const data = ["Ananta",22,55,"pune"]

const person = { name:"Ananta",age:22,weight:55,city:"pune",qualification:"Ananta"}
const person2 = {}

// person2= person

person.age = 35;
person.qualification = "";
delete person.qualification;

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
console.log(Object.assign(person2,person))

console.log(person2)
console.log(person)
