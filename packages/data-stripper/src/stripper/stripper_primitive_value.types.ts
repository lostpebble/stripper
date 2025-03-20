import {
  EStripperType,
  EStripperValuePrimitiveDataType,
  EStripperValueType,
} from "./stripper.enums";

/**
 * The basic value primitive types - some of which can also have extra constraints set.
 */

export interface IStripperDefinition_Value_Primitive_String {
  type: EStripperType.value;
  valueType: EStripperValueType.primitive;
  dataType: EStripperValuePrimitiveDataType.string;
}

export interface IStripperDefinition_Value_Primitive_StringNumber {
  type: EStripperType.value;
  valueType: EStripperValueType.primitive;
  dataType: EStripperValuePrimitiveDataType.string_number;
}

export interface IStripperDefinition_Value_Primitive_Number {
  type: EStripperType.value;
  valueType: EStripperValueType.primitive;
  dataType: EStripperValuePrimitiveDataType.number;
}

export interface IStripperDefinition_Value_Primitive_Boolean {
  type: EStripperType.value;
  valueType: EStripperValueType.primitive;
  dataType: EStripperValuePrimitiveDataType.boolean;
  exactValue?: boolean;
}

export interface IStripperDefinition_Value_Primitive_Null {
  type: EStripperType.value;
  valueType: EStripperValueType.primitive;
  dataType: EStripperValuePrimitiveDataType.null;
}

export interface IStripperDefinition_Value_Primitive_NullishOrUndefined {
  type: EStripperType.value;
  valueType: EStripperValueType.primitive;
  dataType: EStripperValuePrimitiveDataType.nullish | EStripperValuePrimitiveDataType.undefined;
  keyMustExist?: boolean;
}

export type TStripperDefinition_Value_Primitive =
  | IStripperDefinition_Value_Primitive_String
  | IStripperDefinition_Value_Primitive_Number
  | IStripperDefinition_Value_Primitive_StringNumber
  | IStripperDefinition_Value_Primitive_Boolean
  | IStripperDefinition_Value_Primitive_Null
  | IStripperDefinition_Value_Primitive_NullishOrUndefined;
