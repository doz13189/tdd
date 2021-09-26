class Dollar {

  private _amount

  constructor(amount: number) {
    this._amount = amount
  }

  times(multipler: number): Dollar {
    return new Dollar(this._amount * multipler)
  }

  get amount(): number {
    return this._amount
  }
}

export {
  Dollar
}