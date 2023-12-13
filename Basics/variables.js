const accountId = 12345
let accountEmail = "pranav123@gmail.com"
var accountPassword = "67890"
accountCity = "Pune"
let accountState;

console.log(accountId);

// accountId = 67890 // not allowed
accountEmail = "123@gmail.com"
accountPassword = "12345"
accountCity = "Mumbai"
// accountState = "Maharashtra"

console.table([accountEmail, accountPassword, accountCity, accountState])