import { Stripper } from "./Stripper";
import { TStripperSeekTarget } from "../stripper_definition.types";

export abstract class StripperSeekTarget extends Stripper {
  constructor(public definition: TStripperSeekTarget) {
    super();
  }
}
