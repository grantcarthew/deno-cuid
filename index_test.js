import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getRandomValue } from "./getRandomValue.js";
import { cuid } from "./index.js";
const { test } = Deno;
const defaultOptions = { isInBrowser: false };
const MAX = 1200000;

function collisionTest(fn) {
  const ids = {};
  let i = 0;
  let pass = true;

  while (i < MAX) {
    const id = fn();

    if (!ids[id]) {
      ids[id] = id;
    } else {
      pass = false;
      console.log("Failed at " + i + " iterations.");
      break;
    }

    i++;
  }

  return pass;
}

test("cuid() should return a string", () => {
  assert(typeof cuid() === "string");
});

test("cuid() cuids should not collide.", () => {
  assert(collisionTest(cuid));
});

test("cuid.slug() should return a string.", () => {
  assert(typeof cuid.slug() === "string");
});

test("cuid.slug() cuid slugs should not collide.", () => {
  assert(collisionTest(cuid.slug));
});

test("cuid.isCuid() should return true for a valid cuid.", () => {
  const id = cuid()
  assert(cuid.isCuid(id))
})

test("cuid.isCuid() should return false for a null.", () => {
  assert(cuid.isCuid(null) === false)
})

test("cuid.idCuid() should return false for undefined.", () => {
  assert(cuid.isCuid(undefined) === false)
})

test("cuid.isCuid() should return false for a random string.", () => {
  assert(cuid.isCuid("abcdefghijklmnopqrstuvwxy") === false)
})

test("cuid.isCuid() should return false for numbers.", () => {
  assert(cuid.isCuid(1) === false)
  assert(cuid.isCuid(-1) === false)
  assert(cuid.isCuid(0) === false)
  assert(cuid.isCuid(Number.MAX_VALUE) === false)
})

test("cuid.isCuid() should return false for NaN.", () => {
  assert(cuid.isCuid(Number.NaN) === false)
})

test("cuid.isSlug() should return true for a valid cuid slug.", () => {
  const slug = cuid.slug()
  assert(cuid.isSlug(slug))
})

test("cuid.isSlug() should return false for null.", () => {
  assert(cuid.isSlug(null) === false)
})

test("cuid.isSlug() should return false for undefined.", () => {
  assert(cuid.isSlug(undefined) === false)
})

test("cuid.isSlug() should return false for numbers.", () => {
  assert(cuid.isSlug(1) === false)
  assert(cuid.isSlug(-1) === false)
  assert(cuid.isSlug(0) === false)
  assert(cuid.isSlug(Number.MAX_VALUE) === false)
})

test("cuid.isSlug() should return false for NaN.", () => {
  assert(cuid.isSlug(Number.NaN) === false)
})
