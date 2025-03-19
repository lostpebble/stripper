export enum EStripperType {
  anyOf = "anyOf",
  obj = "obj",
  array = "array",
  prop = "prop",
}

export interface IStripperDefinition {
  type: EStripperType;
}
