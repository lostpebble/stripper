export enum EStripperType {
  match_object_keys = "match_object_keys",
  obj = "obj",
  array = "array",
  tuple = "tuple",
  value = "value",
  any_of = "any_of",
}

export enum EPropType {
  any = "any",
  string = "string",
  number = "number",
  boolean = "boolean",
  undefined = "undefined",
  null = "null",
  /**
   * "undefined" or "null"
   */
  nullish = "nullish",
}

export enum EValueType {
  any = "any",
  primitive = "primitive",
  stripper = "stripper",
}

export interface IStripperDefinition_Value_Any {
  type: EStripperType.value;
  valueType: EValueType.any;
}

export interface IStripperDefinition_Value_Prop {
  type: EStripperType.value;
  valueType: EValueType.primitive;
  propType: EPropType;
}

export interface IStripperDefinition_Value_Stripper {
  type: EStripperType.value;
  valueType: EValueType.stripper;
  stripper: TStripperDefinition;
}

export type TStripperDefinition_Value =
  | IStripperDefinition_Value_Any
  | IStripperDefinition_Value_Prop
  | IStripperDefinition_Value_Stripper;

export interface IStripperDefinitionObject_Props {
  [key: string]: TStripperDefinition_Value;
}

export interface IStripperDefinition_Obj {
  type: EStripperType.obj;
  props: IStripperDefinitionObject_Props;
}

export interface IStripperDefinition_MatchObjectKeys {
  type: EStripperType.match_object_keys;
  matchKeys: string[];
  value: TStripperDefinition_Value;
}

export interface IStripperDefinition_Array {
  type: EStripperType.array;
  value: TStripperDefinition_Value;
}

export interface IStripperDefinition_AnyOfValue {
  type: EStripperType.any_of;
  options: TStripperDefinition_Value[];
}

export type TStripperDefinition =
  | TStripperDefinition_Value
  | IStripperDefinition_AnyOfValue
  | IStripperDefinition_Obj
  | IStripperDefinition_Array
  | IStripperDefinition_MatchObjectKeys;
