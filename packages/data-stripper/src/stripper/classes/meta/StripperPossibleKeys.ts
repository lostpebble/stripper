import { Stripper } from "../Stripper";
import { IStripperDefinition_PossibleKeys } from "../../stripper_definition.types";
import { StripperValue } from "../value/StripperValue";
import { StripperArray } from "../data_type/StripperArray";
import { StripperObject } from "../data_type/StripperObject";
import { EStripperType, EStripperValueType } from "../../stripper.enums";
import { StripperExpressionMulti } from "../expression/StripperExpressionMulti";

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
        valueType: EStripperValueType.seeker,
        seek: {
          type: EStripperType.seek,
          value: value.definition,
          seekOptions: {
            minDepth: 0,
            maxDepth: 0,
          },
        },
      };
    }

    return this;
  }

  seek(value: StripperValue | StripperArray | StripperObject | StripperExpressionMulti) {}
}
