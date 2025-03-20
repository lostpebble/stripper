import { Stripper } from "../Stripper";
import { TStripperDefinition_Expression } from "../../stripper_expression.types";

export abstract class StripperExpression extends Stripper {
  abstract definition: TStripperDefinition_Expression;
}
