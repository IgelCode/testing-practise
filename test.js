const sum = require("./sum");
const capitalize = require("./capitalize");
const reverse = require("./reverse");
const calc = require("./calc");
const caesarShift = require("./caesar");
const analyzeArray = require("./analyzeArray");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Capitalize first letter", () => {
  expect(capitalize("penis")).toBe("Penis");
});
test("Reverse a String", () => {
  expect(reverse("penis")).toBe("sinep");
});
test("Sums", () => {
  expect(calc.sum(1, 4)).toBe(5);
});
test("Multiplys", () => {
  expect(calc.multiply(2, 2)).toBe(4);
});
test("Subs", () => {
  expect(calc.substract(5, 3)).toBe(2);
});
test("Divides", () => {
  expect(calc.divide(6, 3)).toBe(2);
});
test("Ceasar", () => {
  expect(caesarShift("penis", 1)).toBe("qfojt");
});
test("Ceasardot", () => {
  expect(caesarShift("penis.lol", 1)).toBe("qfojt.mpm");
});
test("Ceasarz", () => {
  expect(caesarShift("z", 1)).toBe("a");
});
test("Ceasarcase", () => {
  expect(caesarShift("A", 1)).toBe("B");
});
test("normal number array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
