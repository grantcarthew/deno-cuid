// @ts-nocheck
import { pad } from "./pad.js";

var env = typeof window === "object" ? window : self;
var globalCount = Object.keys(env).length;
var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = pad(
  (mimeTypesLength +
    navigator.userAgent.length).toString(36) +
    globalCount.toString(36),
  4,
);

export function fingerprint() {
  return clientId;
}
