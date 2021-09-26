import { Money } from "./Money"

class Franc extends Money {

  constructor(amount: number) {
    super(amount)
  }

  times(multipler: number): Franc {
    return new Franc(this._amount * multipler)
  }

}

export {
  Franc
}