import { describe, test, expect } from "bun:test";
import { S } from "../../stripper.ts";

describe("StripperObject", () => {
  test("should match object with specific keys", () => {
    const objStripper = S.obj({
      a: S.any(),
      b: S.any(),
    });

    const data = {
      a: "a",
      b: "b",
    };

    expect(result).toEqual(data);
  });
});
