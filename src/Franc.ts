import { Money } from "./Money"
import { MoneyType } from "./MoneyInterface"

class Franc extends Money {

  constructor(amount: number, currency: string) {
    super(amount, currency)
  }

  times(multipler: number): Money {
    return MoneyType.franc(this._amount * multipler)
  }

}

export {
  Franc
}