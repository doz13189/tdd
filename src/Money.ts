import { Dollar } from './Dollar';
import { Franc } from './Franc';

abstract class Money {

  protected _amount

  constructor(amount: number) {
    this._amount = amount
  }

  equals(money: Money): boolean {
    return this._amount === money.amount && this.constructor.name === money.constructor.name
  }

  abstract times(amount: number): void

  static dollar(amount: number): Money {
    return new Dollar(amount)
  }

  static franc(amount: number): Money {
    return new Franc(amount)
  }

  get amount(): number {
    return this._amount
  }

}

export {
  Money
}