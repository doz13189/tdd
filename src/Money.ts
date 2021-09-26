class Money {

  protected _amount

  constructor(amount: number) {
    this._amount = amount
  }

  equals(money: Money): boolean {
    return this._amount === money.amount
  }

  get amount(): number {
    return this._amount
  }

}

export {
  Money
}