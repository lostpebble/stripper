import { TStripperInput_Obj } from "./stripper_build.types";
import { EStripperType, IStripperDefinitionObject_Props } from "./stripper_definition.types";
import { StripperMatchObjectKeys } from "./classes/StripperMatchObjectKeys";
import { StripperObject } from "./classes/StripperObject";
import { StripperValueAny } from "./classes/StripperValueAny";

const obj = (input: TStripperInput_Obj): StripperObject => {
  const obj: IStripperDefinitionObject_Props = {};

  for (const key in input) {
    obj[key] = input[key].definition;
  }

  return new StripperObject({
    type: EStripperType.obj,
    props: obj,
  });
};

const any = (): StripperValueAny => {
  return new StripperValueAny();
};

const possibleObjectKeys = (keys: string[]): StripperMatchObjectKeys => {
  return new StripperMatchObjectKeys({
    matchKeys: keys,
    type: EStripperType.match_object_keys,
    value: any().definition,
  });
};

const array = () => {};

export const S = {
  possibleObjectKeys,
  obj,
  any,
};
