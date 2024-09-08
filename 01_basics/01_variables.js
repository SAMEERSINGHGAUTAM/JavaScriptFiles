const accountId = 167895 // change is not possible

let accountEmail = "javaScript@gmail.com" // change is possible

var accountPassword = "#123" // change is possible

accountCity = "Indore" // change is possible

let accountState; // value is undefined when you just declare a variable

// accountId = 678

console.log(accountId)

accountEmail = "java@gmail.com"
accountPassword = "123#"
accountCity = "Jaipur"

console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// const, let

/*
Prefer not to use "var" 
because of issue in block scope and functional scope
*/