// @ts-nocheck
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getRandomValue } from "./getRandomValue.js";
const { test } = Deno;

test("getRandomValue - Should return only positive integers", () => {
  const containsDashes = (x) => (/-/).test(x);
  const actual = Array.from({ length: 10000 }, getRandomValue)
    .filter(containsDashes)
    .length;
  assertEquals(actual, 0);
});
