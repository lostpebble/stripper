import { StripperExpression } from "./StripperExpression";
import {
  IStripperDefinition_Expression_Multi_AnyOrAll,
  IStripperDefinition_Expression_Multi_Range,
} from "../../stripper_expression.types";
import { TStripperDefinition_Value } from "../../stripper_definition.types";

export class StripperExpressionMulti<
  V extends TStripperDefinition_Value = TStripperDefinition_Value,
> extends StripperExpression {
  constructor(
    public definition:
      | IStripperDefinition_Expression_Multi_AnyOrAll<V>
      | IStripperDefinition_Expression_Multi_Range<V>,
  ) {
    super();
  }
}
