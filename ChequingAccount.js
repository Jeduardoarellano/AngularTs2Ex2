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
exports.ChequingAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var ChequingAccount = /** @class */ (function (_super) {
    __extends(ChequingAccount, _super);
    function ChequingAccount(initialBalance) {
        var _this = _super.call(this, initialBalance) || this;
        _this.numberOfwithdrawals = 0;
        _this.TRANSFEE = 10;
        return _this;
    }
    /**
     * Every fifth we incur a transfee. We cannot withdrawal if we cannot cover the amount and transfee.
     * @param amount
     */
    ChequingAccount.prototype.withdrawalAmount = function (amount) {
        this.numberOfwithdrawals++;
        var amountToWithdrawal = amount;
        if (this.numberOfwithdrawals % 5 == 0 && this.numberOfwithdrawals > 0) {
            amountToWithdrawal += this.TRANSFEE;
        }
        if (this.accountBalance < amountToWithdrawal) {
            this.numberOfwithdrawals--;
            throw new Error('Insufficent funds');
        }
        else {
            this.accountBalance = amountToWithdrawal;
        }
    };
    /**
     *
     * @param amount
     */
    ChequingAccount.prototype.depositAmount = function (amount) {
        this.accountBalance += amount;
    };
    /**
     *
     */
    ChequingAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    /**
     *
     */
    ChequingAccount.prototype.printBalance = function () {
        return "Your chequing account balance is $".concat(this.accountBalance);
    };
    return ChequingAccount;
}(BankAccount_1.BankAccount));
exports.ChequingAccount = ChequingAccount;
