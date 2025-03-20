import { TStripperDefinition_Value } from "../../stripper_definition.types";
import { StripperSeekTarget } from "../StripperSeekTarget";

export abstract class StripperValue extends StripperSeekTarget {
  abstract definition: TStripperDefinition_Value;
}
