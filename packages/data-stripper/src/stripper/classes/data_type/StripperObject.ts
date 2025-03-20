import { Stripper } from "../Stripper";
import { IStripperDefinition_Obj } from "../../stripper_definition.types";

export class StripperObject extends Stripper {
  constructor(public definition: IStripperDefinition_Obj) {
    super();
  }
}
