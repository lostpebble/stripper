import { StripperExpression } from "./StripperExpression";
import type {
  IStripperDefinition_Expression_Multi_AnyOrAll,
  IStripperDefinition_Expression_Multi_Range,
} from "../../stripper_expression.types";
import type { TStripperDefinition_Value } from "../../stripper_definition.types";

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
