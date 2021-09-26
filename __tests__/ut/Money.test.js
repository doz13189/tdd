import { Dollar } from "../../src/Dollar";
import { Franc } from "../../src/Franc";
import { Money } from "../../src/Money";

test('ドルの掛け算のテスト', () => {

  const five = new Money.dollar(5)
  expect(five.times(2)).toStrictEqual(new Money.dollar(10))
  expect(five.times(3)).toStrictEqual(new Money.dollar(15))

});

test('フランの掛け算のテスト', () => {

  const five = new Money.franc(5)
  expect(five.times(2)).toStrictEqual(new Money.franc(10))
  expect(five.times(3)).toStrictEqual(new Money.franc(15))

});

test('ドルを比較するテスト', () => {
  
  expect(new Money.dollar(5).equals(new Money.dollar(5))).toBe(true)
  expect(new Money.dollar(5).equals(new Money.dollar(6))).toBe(false)

});

test('フランを比較するテスト', () => {
  
  expect(new Money.franc(5).equals(new Money.franc(5))).toBe(true)
  expect(new Money.franc(5).equals(new Money.franc(6))).toBe(false)

});

test('ドルとフランを比較するテスト', () => {
  
  // expect(new Dollar(5).equals(new Franc(5))).toBe(true)
  expect(new Money.dollar(5).equals(new Money.franc(5))).toBe(false)

});