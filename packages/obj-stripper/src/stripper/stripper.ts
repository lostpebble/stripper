import { DeepPartial } from "../utils/utility.types";
import { isObject } from "../utils/isObject";

const key = (key: string) => {};

const obj = () => {};

const array = () => {};

export class S {
  strip<T extends object>(obj: any): DeepPartial<T> {
    if (!isObject(obj)) {
      return obj as DeepPartial<T>;
    }

    return obj as DeepPartial<T>;
  }
}
