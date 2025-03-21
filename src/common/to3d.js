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
  const { h, s, v } = {h:0,s:0,v:0,...hsv};
  const radius = v * s;
  const x = (radius / 2) * Math.cos((h * Math.PI) / 180) + 0.5;
  const z = (radius / 2) * Math.sin((h * Math.PI) / 180) + 0.5;
  const y = v * (s - 1) + 1
  return {
    x,
    y,
    z,
  };
}

export function hslTo3d(hsl) {
  const { h, s, l } = {h:0,s:0,l:0,...hsl};
  const radius = l * s;
  const x = (radius / 2) * Math.cos((h * Math.PI) / 180) + 0.5;
  const z = (radius / 2) * Math.sin((h * Math.PI) / 180) + 0.5;
  const y = l * (s - 1) + 1;
  return {
    x,
    y,
    z,
  };
}

export function hsiTo3d(hsi) {
  const { h, s, i } = {h:0,s:0,i:0,...hsi};
  const x =
    ((i <= 0.5 ? i * 2 : (1 - i) * 2) * s * Math.cos((h * Math.PI) / 180)) / 2 +
    0.5;
  const z =
    ((i <= 0.5 ? i * 2 : (1 - i) * 2) * s * Math.sin((h * Math.PI) / 180)) / 2 +
    0.5;
  const y = i;

  return { x, y, z };
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
    x: a+0.5,
    y: l,
    z: 0.5-b,
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