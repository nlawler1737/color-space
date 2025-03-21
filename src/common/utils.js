import { Color, SRGBColorSpace } from "three";

export function log(strings, ...values) {
  console.log(strings.join("%c"), ...values);
}

export function map(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 *
 * @param {import("culori").Color} color
 * @returns {import("three").Color}
 */
export function culoriToThreeColor(color) {
  return new Color().setRGB(color.r, color.g, color.b, SRGBColorSpace);
}

export function rgbColorSamples() {
  /** @type {import("culori").Rgb[]} */
  const colors = [];
  const steps = 16;

  for (let r = 0; r <= 1; r += 1 / steps) {
    for (let g = 0; g <= 1; g += 1 / steps) {
      for (let b = 0; b <= 1; b += 1 / steps) {
        colors.push({ r, g, b, mode: "rgb" });
      }
    }
  }

  return colors;
}

export function hsiColorSamples() {
  /** @type {import("culori").Hsi[]} */
  const colors = [];
  const steps = 20;
  for (let h = 0; h <= 360; h += 1) {
    for (let s = 0; s <= 1; s += 1 / steps) {
      for (let i = 0; i <= 1; i += 1 / steps) {
        colors.push({ h, s, i, mode: "hsi" });
      }
    }
  }

  return colors;
}

export function hslColorSamples() {
  /** @type {import("culori").Hsl[]} */
  const colors = [];
  const steps = 10;

  for (let h = 0; h <= 360; h += 360 / steps) {
    for (let s = 0; s <= 1; s += 1 / steps) {
      for (let l = 0; l <= 1; l += 1 / steps) {
        colors.push({ h, s, l, mode: "hsl" });
      }
    }
  }

  return colors;
}

export function oklabColorSamples() {
  /** @type {import("culori").Oklab[]} */
  const colors = [];
  const steps = 10;

  for (let l = 0; l <= 1; l += 1 / steps) {
    for (let a = -0.4; a <= 0.4; a += 0.4 / steps) {
      for (let b = -0.4; b <= 0.4; b += 0.4 / steps) {
        colors.push({ l, a, b, mode: "oklab" });
      }
    }
  }

  return colors;
}

export function xyzd50ColorSamples() {
  /** @type {import("culori").Xyz50[]} */
  const colors = [];
  const steps = 10;

  for (let x = 0; x <= 1; x += 1 / steps) {
    for (let y = 0; y <= 1; y += 1 / steps) {
      for (let z = 0; z <= 1; z += 1 / steps) {
        colors.push({ x, y, z, mode: "xyz50" });
      }
    }
  }

  return colors;
}
