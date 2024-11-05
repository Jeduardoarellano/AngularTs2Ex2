"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChequingAccount_1 = require("./ChequingAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var savingAccount = new SavingsAccount_1.SavingsAccount(1000);
var chequingAccount = new ChequingAccount_1.ChequingAccount(100);
console.log(savingAccount.printBalance());
console.log(chequingAccount.printBalance());
try {
    savingAccount.withdrawalAmount(100);
}
catch (error) {
    console.log(error.message);
}
console.log(savingAccount.printBalance());
savingAccount.depositAmount(20);
savingAccount.depositAmount(20);
savingAccount.depositAmount(20);
savingAccount.depositAmount(20);
savingAccount.depositAmount(20); //5th deposit
console.log(savingAccount.printBalance());
console.log("\n\nChequing Account");
try {
    chequingAccount.withdrawalAmount(19);
    chequingAccount.withdrawalAmount(19);
    chequingAccount.withdrawalAmount(19);
    chequingAccount.withdrawalAmount(19);
    chequingAccount.depositAmount(10);
    chequingAccount.withdrawalAmount(19); //5th withdrawal
}
catch (error) {
    console.log(error.message);
}
console.log(chequingAccount.printBalance());
