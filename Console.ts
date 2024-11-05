
import { ChequingAccount } from "./ChequingAccount"; 
import { SavingsAccount } from "./SavingsAccount";

let savingAccount = new SavingsAccount (1000); 
let chequingAccount = new ChequingAccount (100);

console.log(savingAccount.printBalance());
console.log(chequingAccount.printBalance());

try {
    savingAccount.withdrawalAmount(100);
} catch (error) {
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
    chequingAccount.withdrawalAmount (19);
    chequingAccount.withdrawalAmount (19);
    chequingAccount.withdrawalAmount (19);
    chequingAccount.withdrawalAmount (19);
    chequingAccount.depositAmount (10);
    chequingAccount.withdrawalAmount (19); //5th withdrawal
}catch (error) {
    console.log(error.message);
}

console.log(chequingAccount.printBalance());
