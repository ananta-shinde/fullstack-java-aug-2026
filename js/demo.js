var prompt = require('prompt-sync')();

name = prompt("enter your name:")

email = prompt("enter your email:")
while(!email.includes("@") || !email.endsWith("gmail.com")){
    console.log("invalid email, please provide a valid email id")
    email = prompt("enter your email:")
}

password = prompt("enter your password:")
while(password.length < 7){
     console.log("invalid password, please provide minmum 7 character")
    password = prompt("enter your passowrd:")
}


confirmPassword = prompt("confirm your password:")
while(password != confirmPassword){
     console.log("password mismatched")
    confirmPassword = prompt("confirm your password:")
}

console.log(name,email,password,confirmPassword)

