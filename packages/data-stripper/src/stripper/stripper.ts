import { TStripperInput_Obj } from "./stripper_build.types";
import { IStripperDefinition_Object_Props } from "./stripper_definition.types";
import { StripperPossibleKeys } from "./classes/meta/StripperPossibleKeys";
import { StripperObject } from "./classes/data_type/StripperObject";
import { StripperValueAny } from "./classes/value/StripperValueAny";
import { StripperArray } from "./classes/data_type/StripperArray";
import { StripperValue } from "./classes/value/StripperValue";
import { EStripperType } from "./stripper.enums";

const obj = (input: TStripperInput_Obj): StripperObject => {
  const obj: IStripperDefinition_Object_Props = {};

  for (const key in input) {
    obj[key] = input[key].definition;
  }

  return new StripperObject({
    type: EStripperType.obj,
    props: obj,
  });
};

const any = (): StripperValueAny => {
  return new StripperValueAny({
    type: EStripperType.value,
  });
};

const possibleKeys = (keys: (string | RegExp)[]): StripperPossibleKeys => {
  return new StripperPossibleKeys({
    matchKeys: keys,
    type: EStripperType.match_property_keys,
    value: any().definition,
  });
};

const array = (value: StripperValue = any()): StripperArray => {
  return new StripperArray({
    type: EStripperType.array,
    value: value.definition,
  });
};

export const S = {
  possibleKeys,
  obj,
  array,
  any,
};
