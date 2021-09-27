abstract class Money {

  protected _amount
  protected _currency

  constructor(amount: number, currency: string) {
    this._amount = amount
    this._currency = currency
  }

  equals(money: Money): boolean {
    return this._amount === money.amount && this.constructor.name === money.constructor.name
  }

  abstract times(amount: number): void

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