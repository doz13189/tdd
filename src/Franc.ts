import { Money } from "./Money"

class Franc extends Money {

  constructor(amount: number, currency: string) {
    super(amount, currency)
  }

}

export {
  Franc
}