import { StripperValue } from "./StripperValue";
import { IStripperDefinition_Value_Seek } from "../../stripper_definition.types";

export class StripperValueSeek extends StripperValue {
  constructor(public definition: IStripperDefinition_Value_Seek) {
    super();
  }
}
