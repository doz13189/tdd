import { Dollar } from './Dollar';
import { Franc } from './Franc';
import { Money } from "./Money"


class MoneyType {
  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD')
  }
  
  static franc(amount: number): Money {
    return new Franc(amount, 'CHF')
  }
  
}

export {
  MoneyType
}