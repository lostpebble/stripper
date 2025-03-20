export enum EStripperType {
  /**
   * Seek further values deep within the data, allows for splitting
   * away from a specific match to a match deeper within that match.
   */
  seek = "seek",
  match_property_keys = "match_property_keys",
  obj = "obj",
  instance_of = "instance_of",
  array = "array",
  tuple = "tuple",
  value = "value",
  expression = "expression",
}

export enum EStripperExpressionType {
  not = "not",
  multi = "multi",
}

export enum EStripperExpressionMultiMatchType {
  all = "all",
  any = "any",
  range = "range",
}

export enum EStripperValueType {
  any = "any",
  primitive = "primitive",
  stripper = "stripper",
}

export enum EStripperValuePrimitiveDataType {
  string = "string",
  string_number = "string_number",
  number = "number",
  boolean = "boolean",
  undefined = "undefined",
  null = "null",
  /**
   * "undefined" or "null"
   */
  nullish = "nullish",
}
