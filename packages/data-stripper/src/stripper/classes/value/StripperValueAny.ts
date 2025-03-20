import { StripperValue } from "./StripperValue";
import { IStripperDefinition_Value_Any } from "../../stripper_definition.types";
import { EStripperType, EStripperValueType } from "../../stripper.enums";

export class StripperValueAny extends StripperValue {
  public definition: IStripperDefinition_Value_Any = {
    type: EStripperType.value,
    valueType: EStripperValueType.any,
  };
}
