import { Stripper } from "./Stripper";
import { IStripperDefinition_Seek } from "../stripper_definition.types";

export class StripperSeek extends Stripper {
  constructor(public definition: IStripperDefinition_Seek) {
    super();
  }
}
