import { isObject } from "../utils/isObject";
import { DeepPartial } from "../utils/utility.types";
import { IStripOptions, TStripperDefinition } from "./strip.types";

interface IInnerStripOptions extends IStripOptions {}

interface IStripAttempt {
  matched: boolean;
  obj: any;
}

function _strip(obj: any, stripper: TStripperDefinition, options: IInnerStripOptions): IStripAttempt {
  return {
    matched: false,
    obj,
  }
}

export function strip<T extends object>(
  obj: T,
  stripper: TStripperDefinition,
  options?: IStripOptions,
): DeepPartial<T> {
  if (!isObject(obj)) {
    return obj as DeepPartial<T>;
  }

  const result = _strip(obj, stripper, {
    removeNonMatchedParts: options?.removeNonMatchedParts ?? false,
  });

  return result.obj;
}
