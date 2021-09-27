import { MoneyInterface } from "../../src/MoneyInterface";


test('ドルの掛け算のテスト', () => {

  const five = MoneyInterface.dollar(5)

  expect(five.times(2)).toStrictEqual(MoneyInterface.dollar(10))
  expect(five.times(3)).toStrictEqual(MoneyInterface.dollar(15))

});

// test('フランの掛け算のテスト', () => {

//   const five = MoneyInterface.franc(5)
//   expect(five.times(2)).toStrictEqual(MoneyInterface.franc(10))
//   expect(five.times(3)).toStrictEqual(MoneyInterface.franc(15))

// });

test('ドルを比較するテスト', () => {
  
  expect(MoneyInterface.dollar(5).equals(MoneyInterface.dollar(5))).toBe(true)
  expect(MoneyInterface.dollar(5).equals(MoneyInterface.dollar(6))).toBe(false)

});

// test('フランを比較するテスト', () => {
  
//   expect(MoneyInterface.franc(5).equals(MoneyInterface.franc(5))).toBe(true)
//   expect(MoneyInterface.franc(5).equals(MoneyInterface.franc(6))).toBe(false)

// });

test('ドルとフランを比較するテスト', () => {
  
  expect(MoneyInterface.dollar(5).equals(MoneyInterface.franc(5))).toBe(false)

});

test('ドルの通貨タイプ取得のテスト', () => {
  
  expect(MoneyInterface.dollar(5).currency).toBe('USD')
  expect(MoneyInterface.franc(5).currency).toBe('CHF')

});


