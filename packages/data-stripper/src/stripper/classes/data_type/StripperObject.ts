import { Stripper } from "../Stripper.ts";
import type { StripperValue } from "../value/StripperValue.ts";

export class StripperObject extends Stripper {
  constructor(
    public definition: {
      props: {
        [key: string]: StripperValue;
      };
    },
  ) {
    super();
  }

  test(value: any): boolean {
    for (const key in this.definition.props) {
      if (!this.definition.props[key].test(value[key])) {
        return false;
      }
    }
  }
}
