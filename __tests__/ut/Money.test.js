import { MoneyIf } from "../../src/MoneyInterface";

test('ドルの掛け算のテスト', () => {

  const five = MoneyIf.dollar(5)
  expect(five.times(2)).toStrictEqual(MoneyIf.dollar(10))
  expect(five.times(3)).toStrictEqual(MoneyIf.dollar(15))

});

test('フランの掛け算のテスト', () => {

  const five = MoneyIf.franc(5)
  expect(five.times(2)).toStrictEqual(MoneyIf.franc(10))
  expect(five.times(3)).toStrictEqual(MoneyIf.franc(15))

});

test('ドルを比較するテスト', () => {
  
  expect(MoneyIf.dollar(5).equals(MoneyIf.dollar(5))).toBe(true)
  expect(MoneyIf.dollar(5).equals(MoneyIf.dollar(6))).toBe(false)

});

test('フランを比較するテスト', () => {
  
  expect(MoneyIf.franc(5).equals(MoneyIf.franc(5))).toBe(true)
  expect(MoneyIf.franc(5).equals(MoneyIf.franc(6))).toBe(false)

});

test('ドルとフランを比較するテスト', () => {
  
  // expect(Dollar(5).equals(Franc(5))).toBe(true)
  expect(MoneyIf.dollar(5).equals(MoneyIf.franc(5))).toBe(false)

});

test('ドルの通貨タイプ取得のテスト', () => {
  
  expect(MoneyIf.dollar(5).currency).toBe('USD')

});


