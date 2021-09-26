import { Dollar } from "../../src/Dollar";

test('ドルの掛け算のテスト', () => {
  const five = new Dollar(5)
  let product = five.times(2)
  expect(product.amount).toBe(10)

  product = five.times(3)
  expect(product.amount).toBe(15)

});

test('ドルを比較するテスト', () => {
  
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false)

});

