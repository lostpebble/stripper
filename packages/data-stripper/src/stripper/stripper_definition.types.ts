import { EStripperType, EStripperValueType } from "./stripper.enums";
import { TStripperDefinition_Value_Primitive } from "./stripper_primitive_value.types";
import {
  IStripperDefinition_Expression_Multi_AnyOrAll,
  IStripperDefinition_Expression_Multi_Range,
  IStripperDefinition_Expression_Not,
} from "./stripper_expression.types";

/**
 * CORE SEEK TYPE
 *
 * This is the core type that is used to seek out data in a structure. Can be set to seek at
 * a specific depth, or to seek at any depth.
 */

export type TSeekOptions =
  | {
      maxDepth: number;
    }
  | {
      minDepth: number;
    }
  | {
      minDepth: number;
      maxDepth: number;
    };

export interface IStripperDefinition_Seek<T extends TStripperSeekTarget = TStripperSeekTarget> {
  type: EStripperType.seek;
  value: T;
  seekOptions?: TSeekOptions;
}

/**
 * VALUE TARGETS
 */

export interface IStripperDefinition_Value_Any {
  type: EStripperType.value;
  valueType: EStripperValueType.any;
  keyMustExist?: boolean;
}

export interface IStripperDefinition_Value_Seek<
  T extends TStripperSeekTarget = TStripperSeekTarget,
> {
  type: EStripperType.value;
  valueType: EStripperValueType.seeker;
  seek: IStripperDefinition_Seek<T>;
}

/*export interface IStripperDefinition_Value_Stripper<
  S extends TStripperDefinition = TStripperDefinition,
> {
  type: EStripperType.value;
  valueType: EStripperValueType.stripper;
  stripper: S;
}*/

export type TStripperDefinition_Value<T extends TStripperSeekTarget = TStripperSeekTarget> =
  | IStripperDefinition_Value_Any
  | TStripperDefinition_Value_Primitive
  | IStripperDefinition_Value_Seek<T>;

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
  matchInside?: IStripperDefinition_Seek;
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

export type TStripperSeekTarget =
  | IStripperDefinition_Value_Any
  | TStripperDefinition_Value_Primitive
  | IStripperDefinition_Obj
  | IStripperDefinition_Array
  | IStripperDefinition_PossibleKeys
  | IStripperDefinition_InstanceOf
  | IStripperDefinition_Expression_Multi_Range
  | IStripperDefinition_Expression_Multi_AnyOrAll
  | IStripperDefinition_Expression_Not;
