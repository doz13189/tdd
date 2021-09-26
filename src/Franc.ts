class Franc {

  private _amount

  constructor(amount: number) {
    this._amount = amount
  }

  times(multipler: number): Franc {
    return new Franc(this._amount * multipler)
  }

  equals(franc: Franc): boolean {
    return this._amount === franc.amount
  }

  get amount(): number {
    return this._amount
  }
}

export {
  Franc
}