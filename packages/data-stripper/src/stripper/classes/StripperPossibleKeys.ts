import { Stripper } from "./Stripper";
import { IStripperDefinition_PossibleKeys } from "../stripper_definition.types";
import { StripperValue } from "./value/StripperValue";
import { StripperArray } from "./StripperArray";
import { StripperObject } from "./StripperObject";
import { EStripperType, EStripperValueType } from "../stripper.enums";
import { StripperExpressionMulti } from "./expression/StripperExpressionMulti";

export class StripperPossibleKeys extends Stripper {
  constructor(public definition: IStripperDefinition_PossibleKeys) {
    super();
  }

  withValue(value: StripperValue | StripperArray | StripperObject | StripperExpressionMulti) {
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

  seek(value: StripperValue | StripperArray | StripperObject | StripperExpressionMulti) {}
}
