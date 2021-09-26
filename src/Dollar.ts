import { Money } from "./Money"

class Dollar extends Money {

  constructor(amount: number) {
    super(amount)
  }

  times(multipler: number): Money {
    return new Dollar(this._amount * multipler)
  }
  
}

export {
  Dollar
}