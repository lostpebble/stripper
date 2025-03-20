import { IStripperDefinition_Seek, TStripperSeekTarget } from "../stripper_definition.types";

export abstract class Stripper {
  abstract definition: TStripperSeekTarget | IStripperDefinition_Seek;
}
