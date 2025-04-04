import { formatColor } from "./utils";

/**
 *
 * @param {import("culori").Rgb} rgb
 */
export function rgbTo3d(rgb) {
  const { r, g, b } = rgb;
  return {
    x: r,
    y: g,
    z: b,
  };
}

/**
 * Convert HSV color to 3D coordinates
 *
 * Returns an object with x, y, and z properties representing the 3D coordinates of the color, ranging from 0 to 1.
 * @param {(import("culori").Hsv)} hsv
 */
export function hsvTo3d(hsv) {
  const { h, s, v } = { h: 0, s: 0, v: 0, ...hsv };
  const angle = (h * Math.PI) / 180;
  const radius = v * s;
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);

  const y = v;
  return {
    x: (x + 1) / 2,
    y: y,
    z: (1 - z) / 2,
  };
}

/**
 * Converts HSL color to a bicone
 * @param {import("culori").Hsl} hsl
 * @returns
 */
export function hslTo3d(hsl) {
  const { h, s, l } = { h: 0, s: 0, l: 0, ...hsl };
  const angle = (h / 360) * 2 * Math.PI;
  const y = l >= 0.5 ? 1 - 2 * (1 - l) : -1 + 2 * l;
  const radius = l <= 0.5 ? s * (2 * l) : s * (2 * (1 - l));
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);
  return {
    x: (x + 1) / 2,
    y: (y + 1) / 2,
    z: (1 - z) / 2,
  };
}

export function hsiTo3d(hsi) {
  const { h, s, i } = { h: 0, s: 0, i: 0, ...hsi };
  const x =
    ((i <= 0.5 ? i * 2 : (1 - i) * 2) * s * Math.cos((h * Math.PI) / 180)) / 2 +
    0.5;
  const z =
    ((i <= 0.5 ? i * 2 : (1 - i) * 2) * s * Math.sin((h * Math.PI) / 180)) / 2 +
    0.5;
  const y = i;

  return { x, y, z };
}

export function hwbTo3d(hwb) {
  const { h, w, b } = { h: 0, w: 0, b: 0, ...hwb };
  const angle = (h / 360) * 2 * Math.PI;

  const adjustedW = Math.min(w, 1 - b);
  const adjustedB = b;

  const y = 1 - adjustedB;

  const radius = adjustedW;

  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);

  return {
    x: (x + 1) / 2,
    y: y,
    z: (1 - z) / 2,
  };
}

/**
 * Converts Linear RGB color to 3D coordinates
 * @param {import("culori").Lrgb} lrgb
 */
export function lrgbTo3d(lrgb) {
  const { r, g, b } = lrgb;
  return {
    x: r,
    y: g,
    z: b,
  };
}

export function oklabTo3d(oklab) {
  const { l, a, b } = oklab;
  return {
    x: (a + 0.4) / 0.8,
    y: l,
    z: (0.4 - b) / 0.8,
  };
}

export function xyzTo3d(xyz) {
  const { x, y, z } = xyz;
  return {
    x,
    y,
    z,
  };
}

export function labTo3d(lab) {
  /** range: `-rangeRadius` to `rangeRadius` */
  const rangeRadius = 200;
  const { l, a, b } = lab;

  const normalizedY = l / 100;

  const normalizedX = (a + rangeRadius) / (rangeRadius * 2);

  const normalizedZ = (1 - b + rangeRadius) / (rangeRadius * 2);

  return { x: normalizedX, y: normalizedY, z: normalizedZ };
}

export function lchTo3d(lch) {
  const { l, c, h } = { l: 0, c: 0, h: 0, ...lch };
  const normalizedL = l / 100;

  const radius = c / 200;

  const angle = (h / 360) * 2 * Math.PI;

  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);

  return { x: (x + 1) / 2, y: normalizedL, z: (1 - z) / 2 };
}

export function luvTo3d(luv) {
  const { l, u, v } = { l: 0, u: 0, v: 0, ...luv };
  const normalizedY = l / 100;

  const normalizedX = (u + 250) / 500;

  const normalizedZ = (v + 250) / 500;

  return { x: normalizedX, y: normalizedY, z: 1 - normalizedZ };
}


export function cubehelixTo3d(cubehelix) {
  const { h, s, l } = formatColor("h","s","l",cubehelix);
  const normalizedS = s / 4.614;
  const angle = (h / 360) * 2 * Math.PI;
  const radius = normalizedS;
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);
  return {
    x: (x + 1) / 2,
    y: l,
    z: (1 - z) / 2,
  };
}