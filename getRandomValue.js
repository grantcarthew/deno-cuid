// @ts-nocheck
let getRandomValue;

const crypto = typeof window !== "undefined" &&
    (window.crypto || window.msCrypto) ||
  typeof self !== "undefined" &&
    self.crypto;

if (crypto) {
  const lim = Math.pow(2, 32) - 1;
  getRandomValue = function () {
    return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
  };
} else {
  getRandomValue = Math.random;
}

export { getRandomValue };
