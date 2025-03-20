/*
const S: any = {};

const deviceStripperInsideOut = S.object({
  id: S.any(),
  name: S.any(),
}).inside(S.oneOf(S.objectProp(), S.array()));

const deviceStripperOutsideIn = S.possibleObjectKeys(
  "device",
  "selectedDevice",
  "devices",
  "availableDevices",
).withValue(
  S.valueOrArrayWithValue(
    S.object({
      id: S.any(),
      name: S.any(),
    }),
  ),
);
*/

import stringify from "json-stringify-pretty-compact";
import { S } from "../stripper/stripper";

const deviceStripper = S.possibleObjectKeys([
  "device",
  "selectedDevice",
  "devices",
  "availableDevices",
]).withValue(
  S.obj({
    id: S.any(),
    name: S.any(),
  }),
);

console.log(stringify(deviceStripper.definition));
