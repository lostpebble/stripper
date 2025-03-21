import { Stripper } from "./Stripper";
import type { IStripperDefinition_PossibleKeys } from "../stripper_definition.types";
import { StripperValue } from "./value/StripperValue";
import { StripperArray } from "./data_type/StripperArray.ts";
import { StripperObject } from "./data_type/StripperObject.ts";
import { EStripperType, EStripperValueType } from "../stripper.enums";
import { StripperExpression } from "./expression/StripperExpression";

export class StripperPossibleKeys extends Stripper {
  constructor(public definition: IStripperDefinition_PossibleKeys) {
    super();
  }

  withValue(value: StripperValue | StripperArray | StripperObject | StripperExpression) {
    if (value.definition.type === EStripperType.value) {
      this.definition.value = value.definition;
    } else {
      this.definition.value = {
        type: EStripperType.value,
        valueType: EStripperValueType.stripper,
        stripper: value.definition,
      };
    }

    return this;
  }
}
