import { StripperValue } from "./StripperValue";
import type { IStripperDefinition_Value_Any } from "../../stripper_definition.types";
import { EStripperType, EStripperValueType } from "../../stripper.enums";

export class StripperValueAny extends StripperValue {
  public definition: IStripperDefinition_Value_Any = {
    type: EStripperType.value,
    valueType: EStripperValueType.any,
  };

  protected test() {
    return true;
  }

  strip(value: any): any {
    return value;
  }
}
