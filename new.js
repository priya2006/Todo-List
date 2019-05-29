const sum = require('./web.js')
let checkingAccountbalance = 200
let savingsAccountbalance = 1000
let retirementAccountbalance = 20000

let  totalBalance=sum([checkingAccountbalance,savingsAccountbalance,retirementAccountbalance])
console.log(totalBalance)
