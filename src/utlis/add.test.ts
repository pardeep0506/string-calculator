import { add } from './add';

test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("should return the number when only one number is passed", () => {
    expect(add("1")).toBe(1);
});

test("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
});

test("should handle new lines between numbers", () => {
    expect(add("1\\n2,3")).toBe(6);
});

test("should support different delimiters", () => {
    expect(add("//;\\n1;2")).toBe(3);
    expect(add("//|\\n1|2|3")).toBe(6);
});

test("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});
