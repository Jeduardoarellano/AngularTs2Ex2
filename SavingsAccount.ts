import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccount";

export class SavingsAccount extends BankAccount implements IBankAccount {


    public numberofDeposits: number = 0;
    public readonly INTEREST: number = 0.05;

    constructor(initialBalance: number) {
        super(initialBalance);
    }

    public withdrawalAmount(amount: number): void {
        if (amount > this.accountBalance) {
            throw new Error('insufficient funds');
        } else {
            this.accountBalance -= amount;
        }

    }

    /**
     * Every 5 deposits we incur interest at the defined rate
     * @param amount 
     */
    public depositAmount(amount: number): void {
        this.numberofDeposits++;

        if (this.numberofDeposits % 5 == 0 && this.numberofDeposits > 0) {
            let temp = this.accountBalance + amount;
            this.accountBalance = (temp + (temp * this.INTEREST));
        } else {
            this.accountBalance += amount;
        }
    }

    public getBalance(): number {
        return this.accountBalance;
    }

    public printBalance(): string {
        return `Your savings account balance is $${this.accountBalance}`;
    }
}

