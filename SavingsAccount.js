"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(initialBalance) {
        var _this = _super.call(this, initialBalance) || this;
        _this.numberofDeposits = 0;
        _this.INTEREST = 0.05;
        return _this;
    }
    SavingsAccount.prototype.withdrawalAmount = function (amount) {
        if (amount > this.accountBalance) {
            throw new Error('insufficient funds');
        }
        else {
            this.accountBalance -= amount;
        }
    };
    /**
     * Every 5 deposits we incur interest at the defined rate
     * @param amount
     */
    SavingsAccount.prototype.depositAmount = function (amount) {
        this.numberofDeposits++;
        if (this.numberofDeposits % 5 == 0 && this.numberofDeposits > 0) {
            var temp = this.accountBalance + amount;
            this.accountBalance = (temp + (temp * this.INTEREST));
        }
        else {
            this.accountBalance += amount;
        }
    };
    SavingsAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    SavingsAccount.prototype.printBalance = function () {
        return "Your savings account balance is $".concat(this.accountBalance);
    };
    return SavingsAccount;
}(BankAccount_1.BankAccount));
exports.SavingsAccount = SavingsAccount;
