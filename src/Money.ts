class Money {

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

  toString() {
    return this._amount + ' ' + this._currency
  }

  get amount(): number {
    return this._amount
  }

  get currency(): string {
    return this._currency
  }

}


export {
  Money
}