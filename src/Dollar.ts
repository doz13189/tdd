import { Money } from "./Money"

class Dollar extends Money {

  constructor(amount: number) {
    super(amount)
  }

  times(multipler: number): Dollar {
    return new Dollar(this._amount * multipler)
  }
}

export {
  Dollar
}