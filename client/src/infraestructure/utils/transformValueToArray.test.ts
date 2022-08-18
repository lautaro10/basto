import { transformValueToArray } from "./transformValueToArray";

describe("TransformValueToArray function tests", () => {
  test("It should convert string value to array of string", () => {
    expect(transformValueToArray("transform value")).toEqual([
      "transform value",
    ]);
  });

  test("It string value is empty, transform value to empty array", () => {
    expect(transformValueToArray("")).toEqual([]);
  });
});
