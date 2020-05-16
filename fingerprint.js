// @ts-nocheck
import { pad } from "./pad.js";

const padding = 2;
const pid = pad(Deno.pid.toString(36), padding);
const hostname = Deno.hostname();
const length = hostname.length;
const reducer = function (prev, char) {
  return +prev + char.charCodeAt(0);
};
const cleanHostname = hostname.split("")
  .reduce(reducer, +length + 36).toString(36);
const hostId = pad(cleanHostname, padding);

export function fingerprint() {
  return pid + hostId;
}
