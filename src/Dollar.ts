import { Money } from "./Money"
import { MoneyType } from "./MoneyInterface"

class Dollar extends Money {

  constructor(amount: number, currency: string) {
    super(amount, currency)
  }

  times(multipler: number): Money {
    return MoneyType.dollar(this._amount * multipler)
  }

}

export {
  Dollar
}