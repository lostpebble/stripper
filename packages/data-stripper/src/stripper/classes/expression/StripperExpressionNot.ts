import { StripperExpression } from "./StripperExpression";
import type { IStripperDefinition_Expression_Not } from "../../stripper_expression.types";

export class StripperExpressionNot extends StripperExpression {
  constructor(public definition: IStripperDefinition_Expression_Not) {
    super();
  }
}
