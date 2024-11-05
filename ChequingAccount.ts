import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccount";


export class ChequingAccount extends BankAccount implements IBankAccount{

    
    public numberOfwithdrawals:number = 0; 
    public readonly TRANSFEE:number = 10;

    constructor (initialBalance: number) { 
        super(initialBalance);
    }

    /**
     * Every fifth we incur a transfee. We cannot withdrawal if we cannot cover the amount and transfee.
     * @param amount
     */
    
    withdrawalAmount (amount: number) {
        this.numberOfwithdrawals++;
        let amountToWithdrawal: number = amount;

        if(this.numberOfwithdrawals % 5 == 0 && this.numberOfwithdrawals>0){
            amountToWithdrawal += this.TRANSFEE;
        }

        if(this.accountBalance < amountToWithdrawal){
            this.numberOfwithdrawals--;
            throw new Error('Insufficent funds');
        } else {
            this.accountBalance = amountToWithdrawal;
        }
    }

    /**
     * 
     * @param amount 
     */
    depositAmount(amount: number) {
        this.accountBalance += amount;
    }

    /**
     * 
     */
    getBalance(): number {
        return this.accountBalance;
    }

    /**
     * 
     */
    printBalance(): string {
        return `Your chequing account balance is $${this.accountBalance}`;
    }


}