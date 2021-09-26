import { Dollar } from "../../src/Dollar";
import { Franc } from "../../src/Franc";

test('ドルの掛け算のテスト', () => {

  const five = new Dollar(5)
  expect(five.times(2)).toStrictEqual(new Dollar(10))
  expect(five.times(3)).toStrictEqual(new Dollar(15))

});

test('フランの掛け算のテスト', () => {

  const five = new Franc(5)
  expect(five.times(2)).toStrictEqual(new Franc(10))
  expect(five.times(3)).toStrictEqual(new Franc(15))

});

test('ドルを比較するテスト', () => {
  
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false)

});

test('フランを比較するテスト', () => {

  const five = new Franc(5)
  expect(five.times(2)).toStrictEqual(new Franc(10))
  expect(five.times(3)).toStrictEqual(new Franc(15))

});