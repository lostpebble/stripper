export interface IStripOptions {
  removeNonMatchedParts?: boolean;
}

export type TStripProperty = "r" | "o";

export type TStripperDefinition = {
  [key: string]: TStripProperty | TStripperDefinition;
};
