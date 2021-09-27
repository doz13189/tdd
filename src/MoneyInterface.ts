import { Money } from "./Money"


class MoneyInterface {

  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }
  
  static franc(amount: number): Money {
    return new Money(amount, 'CHF')
  }
  
}

export {
  MoneyInterface
}