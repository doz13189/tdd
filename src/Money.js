"use strict";
// import { Dollar } from './Dollar';
// import { Franc } from './Franc';
exports.__esModule = true;
exports.Money = void 0;
var Money = /** @class */ (function () {
    function Money(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }
    Money.prototype.equals = function (money) {
        return this._amount === money.amount && this.constructor.name === money.constructor.name;
    };
    Object.defineProperty(Money.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Money.prototype, "currency", {
        get: function () {
            return this._currency;
        },
        enumerable: false,
        configurable: true
    });
    return Money;
}());
exports.Money = Money;
