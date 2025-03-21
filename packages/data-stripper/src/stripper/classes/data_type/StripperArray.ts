import { Stripper } from "../Stripper.ts";
import type { IStripperDefinition_Array } from "../../stripper_definition.types.ts";

export class StripperArray extends Stripper {
  constructor(public definition: IStripperDefinition_Array) {
    super();
  }
}
