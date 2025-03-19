import { describe, expect, it } from "bun:test";
import { strip } from "./strip";

describe("strip()", () => {
  it("empty object still empty when stripper definition is blank", () => {
    const emptyObject = {};
    expect(strip(emptyObject, {})).toEqual(emptyObject);
  });

  it("basic object same when snip structure is blank", () => {
    const basicObject = {
      test: 1,
      key: "value",
    };
    expect(strip(basicObject, {})).toEqual({ ...basicObject });
  });

  it("snips matching structure from object", () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
      e: 4,
    };

    const structure = {
      b: {
        c: "r",
      },
    } as const;

    const expected = {
      a: 1,
      b: {
        c: 2,
      },
      e: 4,
    };

    expect(strip(obj, structure)).toEqual(expected);
  });
});
