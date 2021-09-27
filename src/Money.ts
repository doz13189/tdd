import { Expression } from './Expression'

class Money implements Expression {

  protected _amount
  protected _currency

  constructor(amount: number, currency: string) {
    this._amount = amount
    this._currency = currency
  }

  equals(money: Money): boolean {
    return this._amount === money.amount && this._currency === money.currency
  }

  times(multipler: number): Money {
    return new Money(this._amount * multipler, this._currency)
  }

  plus(addend: Money): Expression {
    return new Money(this._amount + addend.amount, this._currency)
  }

  toString() {
    return this._amount + ' ' + this._currency
  }

  get amount(): number {
    return this._amount
  }

  get currency(): string {
    return this._currency
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }
  
  static franc(amount: number): Money {
    return new Money(amount, 'CHF')
  }

}


export {
  Money
}