import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testing-practice";

describe("#capitalize", () => {
  test("returns a string with the first letter capitalized", () => {
    expect(capitalize()).toBeNull();
    expect(capitalize("testing, testing, 123")).toBe("Testing, testing, 123");
  });
});

describe("#reverseString", () => {
  test("returns a string that is reversed", () => {
    expect(reverseString()).toBeNull();
    expect(reverseString("Hello, my name is trroev")).toBe(
      "veorrt si eman ym ,olleH"
    );
  });
});

describe("#calculator", () => {
  describe("#add", () => {
    test("returns the sum of two numbers", () => {
      expect(calculator.add(3, 33)).toBe(36);
    });
  });
  describe("#subtract", () => {
    test("returns the subtraction of two numbers", () => {
      expect(calculator.subtract(33, 3)).toBe(30);
      expect(calculator.subtract(3, 33)).toBe(-30);
    });
  });
  describe("#divide", () => {
    test("returns the division of two numbers", () => {
      expect(calculator.divide(33, 3)).toBe(11);
      expect(calculator.divide(-33, 3)).toBe(-11);
      expect(calculator.divide(33, 0)).toBe(Infinity);
      expect(calculator.divide(33, 32)).toBe(1.03125);
    });
  });
  describe("#multiply", () => {
    test("returns the product of two numbers", () => {
      expect(calculator.multiply(33, 3)).toBe(99);
      expect(calculator.multiply(9, 0)).toBe(0);
      expect(calculator.multiply(6.25, 9.99)).toBe(62.4375);
    });
  });
});

describe("#caesarCipher", () => {
  test("returns a string with each character shifted a certain amount of letters in the alphabet", () => {
    expect(caesarCipher("this is just a test", 1)).toBe("uijt jt kvtu b uftu");
    expect(caesarCipher("New Zealand", 3)).toBe("Qhz Chdodqg");
    expect(caesarCipher("stop looking at me, swan!", 6)).toBe(
      "yzuv ruuqotm gz sk, ycgt!"
    );
  });
});

describe("#analyzeArray", () => {
  test("takes an array and returns an object with the following properties: average, min, max and length", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
    expect(analyzeArray([3, -6, 99, 0.14, 666])).toEqual({
      average: 152.428,
      min: -6,
      max: 666,
      length: 5,
    });
    expect(analyzeArray([])).toBeNull();
    expect(analyzeArray("hello")).toBe("please enter a proper array");
  });
});
