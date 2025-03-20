import { StripperValue } from "./StripperValue";
import { TStripperDefinition_Value_Primitive } from "../../stripper_primitive_value.types";

export class StripperValuePrimitive extends StripperValue {
  constructor(public definition: TStripperDefinition_Value_Primitive) {
    super();
  }
}
