import { Money } from "../../src/Money";
import { Bank } from "../../src/Bank";

test('ドルの掛け算のテスト', () => {

  const five = Money.dollar(5)

  expect(five.times(2)).toStrictEqual(Money.dollar(10))
  expect(five.times(3)).toStrictEqual(Money.dollar(15))

});

test('ドルの足し算のテスト', () => {

  const sum = Money.dollar(5).plus(Money.dollar(5))
  const bank = new Bank()
  const reduced = bank.reduce(sum, 'USD')

  expect(reduced).toStrictEqual(Money.dollar(10))

});

test('ドルを比較するテスト', () => {
  
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)

});

test('ドルとフランを比較するテスト', () => {
  
  expect(Money.dollar(5).equals(Money.franc(5))).toBe(false)

});

test('ドルの通貨タイプ取得のテスト', () => {
  
  expect(Money.dollar(5).currency).toBe('USD')
  expect(Money.franc(5).currency).toBe('CHF')

});




