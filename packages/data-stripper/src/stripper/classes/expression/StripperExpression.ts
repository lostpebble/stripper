import { Stripper } from "../Stripper";
import type { TStripperDefinition_Expression } from "../../stripper_expression.types";

export abstract class StripperExpression extends Stripper {
  abstract definition: TStripperDefinition_Expression;
}
