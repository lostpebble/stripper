import { Stripper } from "./Stripper";
import {
  EStripperType,
  EValueType,
  IStripperDefinition_MatchObjectKeys,
} from "../stripper_definition.types";
import { StripperAnyOfValue } from "./StripperAnyOfValue";
import { StripperValue } from "./StripperValue";
import { StripperArray } from "./StripperArray";
import { StripperObject } from "./StripperObject";

export class StripperMatchObjectKeys extends Stripper {
  constructor(public definition: IStripperDefinition_MatchObjectKeys) {
    super();
  }

  withValue(value: StripperValue | StripperAnyOfValue | StripperArray | StripperObject) {
    if (value.definition.type === EStripperType.value) {
      this.definition.value = value.definition;
    } else {
      this.definition.value = {
        type: EStripperType.value,
        valueType: EValueType.stripper,
        stripper: value.definition,
      };
    }

    return this;
  }
}
