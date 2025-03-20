import { Stripper } from "../Stripper";
import { IStripperDefinition_Array } from "../../stripper_definition.types";

export class StripperArray extends Stripper {
  constructor(public definition: IStripperDefinition_Array) {
    super();
  }
}
