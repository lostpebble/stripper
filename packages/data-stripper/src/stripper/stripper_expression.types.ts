import {
  EStripperExpressionType,
  EStripperExpressionMultiMatchType,
  EStripperType,
} from "./stripper.enums";
import { TStripperDefinition_Value } from "./stripper_definition.types";

export interface IStripperDefinition_Expression_Multi_AnyOrAll<
  V extends TStripperDefinition_Value = TStripperDefinition_Value,
> {
  type: EStripperType.expression;
  expressionType: EStripperExpressionType.multi;
  multiType: EStripperExpressionMultiMatchType.all | EStripperExpressionMultiMatchType.any;
  options: V[];
}

export type TStripperMultiRange =
  | {
      min: number;
      max: number;
    }
  | {
      min: number;
    }
  | {
      max: number;
    };

export interface IStripperDefinition_Expression_Multi_Range<
  V extends TStripperDefinition_Value = TStripperDefinition_Value,
> {
  type: EStripperType.expression;
  expressionType: EStripperExpressionType.multi;
  multiType: EStripperExpressionMultiMatchType.range;
  range: TStripperMultiRange;
  options: V[];
}

export interface IStripperDefinition_Expression_Not<
  V extends TStripperDefinition_Value = TStripperDefinition_Value,
> {
  type: EStripperType.expression;
  expressionType: EStripperExpressionType.not;
  value: V;
}

export type TStripperDefinition_Expression<
  V extends TStripperDefinition_Value = TStripperDefinition_Value,
> =
  | IStripperDefinition_Expression_Multi_AnyOrAll<V>
  | IStripperDefinition_Expression_Multi_Range<V>
  | IStripperDefinition_Expression_Not<V>;
