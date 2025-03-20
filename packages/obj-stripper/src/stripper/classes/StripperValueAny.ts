import { StripperValue } from "./StripperValue";
import {
  EStripperType,
  EValueType,
  IStripperDefinition_Value_Any,
} from "../stripper_definition.types";

export class StripperValueAny extends StripperValue {
  public definition: IStripperDefinition_Value_Any = {
    type: EStripperType.value,
    valueType: EValueType.any,
  };
}
