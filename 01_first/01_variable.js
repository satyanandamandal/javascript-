const accountId = 90909
let accountEmail = "satyanandamandal5566@gmail.com"
var accountPassword = "1234"
accountCity = "malkangiri"


// accountId = 2 // not allowed 

console.log(accountId);

/* 
prefer not use var
because of issue in block scope and functional scope 
*/

accountEmail = "samcolmt@gmail.com"
accountPassword = "9090" 
accountCity = "koraput"


console.table([accountEmail,accountId,accountPassword,accountCity])