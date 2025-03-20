import { Stripper } from "./Stripper";
import { IStripperDefinition_AnyOfValue } from "../stripper_definition.types";

export class StripperAnyOfValue extends Stripper {
  constructor(public definition: IStripperDefinition_AnyOfValue) {
    super();
  }
}
