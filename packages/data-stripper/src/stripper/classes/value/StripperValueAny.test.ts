import { describe, expect, it } from "bun:test";
import { S } from "../../stripper.ts";

describe("StripperValueAny", () => {
  it("should test true for any value", () => {
    const value = "asd";
    expect(S.any().strip(value)).toEqual(value);
  });
});
