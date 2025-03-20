import { Stripper } from "../Stripper";
import { TStripperDefinition_Value } from "../../stripper_definition.types";

export abstract class StripperValue extends Stripper {
  abstract definition: TStripperDefinition_Value;
}
