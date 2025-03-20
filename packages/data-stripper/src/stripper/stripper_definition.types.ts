import { EStripperType, EStripperValueType } from "./stripper.enums";
import { TStripperDefinition_Value_Primitive } from "./stripper_primitive_value.types";
import {
  IStripperDefinition_Expression_Multi_AnyOrAll,
  IStripperDefinition_Expression_Multi_Range,
  IStripperDefinition_Expression_Not,
} from "./stripper_expression.types";

export type TSeekOptions = {
  maxDepth: number;
};

export interface IStripperDefinition_Seek {
  type: EStripperType.seek;
  value: TStripperDefinition_Value;
  seekOptions?: TSeekOptions;
}

export interface IStripperDefinition_Value_Any {
  type: EStripperType.value;
  valueType: EStripperValueType.any;
  keyMustExist?: boolean;
}

export interface IStripperDefinition_Value_Stripper<
  S extends TStripperDefinition = TStripperDefinition,
> {
  type: EStripperType.value;
  valueType: EStripperValueType.stripper;
  stripper: S;
}

export type TStripperDefinition_Value<T extends TStripperDefinition = TStripperDefinition> =
  | IStripperDefinition_Value_Any
  | TStripperDefinition_Value_Primitive
  | IStripperDefinition_Value_Stripper<T>;

export interface IStripperDefinition_Object_Props {
  [key: string]: TStripperDefinition_Value;
}

export interface IStripperDefinition_Obj {
  type: EStripperType.obj;
  props: IStripperDefinition_Object_Props;
}

export interface IStripperDefinition_InstanceOf {
  type: EStripperType.instance_of;
  class: Function;
  matchInside?:
    | IStripperDefinition_Obj
    | IStripperDefinition_PossibleKeys
    | IStripperDefinition_Seek;
}

export interface IStripperDefinition_PossibleKeys {
  type: EStripperType.match_property_keys;
  matchKeys: (string | RegExp)[];
  value: TStripperDefinition_Value;
}

export interface IStripperDefinition_Array {
  type: EStripperType.array;
  value: TStripperDefinition_Value;
}

export type TStripperDefinition =
  | IStripperDefinition_Value_Stripper
  | TStripperDefinition_Value_Primitive
  | IStripperDefinition_Value_Any
  | IStripperDefinition_Obj
  | IStripperDefinition_Array
  | IStripperDefinition_PossibleKeys
  | IStripperDefinition_InstanceOf
  | IStripperDefinition_Seek
  | IStripperDefinition_Expression_Multi_Range
  | IStripperDefinition_Expression_Multi_AnyOrAll
  | IStripperDefinition_Expression_Not;
