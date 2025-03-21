import { hsiTo3d, hslTo3d, hsvTo3d, oklabTo3d, rgbTo3d, xyzTo3d } from "./to3d";
import { hsiColorSamples, hslColorSamples, oklabColorSamples, rgbColorSamples, xyzd50ColorSamples } from "./utils";

/**
 * @type {Record<import("culori").Mode, { name: string, mode: import("culori").Mode, to3d: (color: import("culori").Color) => { x: number, y: number, z: number } | null, samples: () => import("culori").Color[] }>}
 */
export const colorSpaces = {
  // rgb model
  a98: {
    mode: "a98",
    name: "A98",
    to3d: rgbTo3d,
    samples: null,
  },
  rgb: {
    mode: "rgb",
    name: "sRGB",
    to3d: rgbTo3d,
    samples: rgbColorSamples(),
  },
  lrgb: {
    mode: "lrgb",
    name: "lRGB",
    to3d: rgbTo3d,
    samples: null,
  },
  p3: {
    mode: "p3",
    name: "P3",
    to3d: rgbTo3d,
    samples: null,
  },
  prophoto: {
    mode: "prophoto",
    name: "ProPhoto", 
    to3d: rgbTo3d,
    samples: null,
  },
  rec2020: {
    mode: "rec2020",
    name: "Rec. 2020",
    to3d: rgbTo3d,
    samples: null,
  },
  hsv: {
    mode: "hsv",
    name: "HSV",
    to3d: hsvTo3d,
    samples: null,
  },
  hsl: {
    mode: "hsl",
    name: "HSL",
    to3d: hslTo3d,
    samples: hslColorSamples(),
  },
  hsi: {
    mode: "hsi",
    name: "HSI",
    to3d: hsiTo3d,
    samples: hsiColorSamples(),
  },
  hwb: {
    mode: "hwb",
    name: "HWB",
    to3d: () => {},
    samples: null,
  },
  lab: {
    mode: "lab",
    name: "Lab",
    to3d: () => {},
    samples: null,
  },
  lch: {
    mode: "lch",
    name: "LCH",
    to3d: () => {},
    samples: null,
  },
  lab65: {
    mode: "lab65",
    name: "Lab65",
    to3d: () => {},
    samples: null,
  },
  lch65: {
    mode: "lch65",
    name: "LCH65",
    to3d: () => {},
    samples: null,
  },
  luv: {
    mode: "luv",
    name: "Luv",
    to3d: () => {},
    samples: null,
  },
  lchuv: {
    mode: "lchuv",
    name: "LCHuv",
    to3d: () => {},
    samples: null,
  },
  dlab: {
    mode: "dlab",
    name: "DLab",
    to3d: () => {},
    samples: null,
  },
  dlch: {
    mode: "dlch",
    name: "DLCh",
    to3d: () => {},
    samples: null,
  },
  oklab: {
    mode: "oklab",
    name: "Oklab",
    to3d: oklabTo3d,
    samples: oklabColorSamples(),
  },
  oklch: {
    mode: "oklch",
    name: "Oklch",
    to3d: () => {},
    samples: null,
  },
  okhsl: {
    mode: "okhsl",
    name: "Okhsl",
    to3d: () => {},
    samples: null,
  },
  okhsv: {
    mode: "okhsv",
    name: "Okhsv",
    to3d: () => {},
    samples: null,
  },
  jab: {
    mode: "jab",
    name: "Jzazbz",
    to3d: () => {},
    samples: null,
  },
  jch: {
    mode: "jch",
    name: "JzCzhz",
    to3d: () => {},
    samples: null,
  },
  yiq: {
    mode: "yiq",
    name: "YIQ",
    to3d: () => {},
    samples: null,
  },
  xyz50: {
    mode: "xyz50",
    name: "XYZ50",
    to3d: xyzTo3d,
    samples: xyzd50ColorSamples(),
  },
  xyz65: {
    mode: "xyz65",
    name: "XYZ65",
    to3d: () => {},
    samples: null,
  },
  xyb: {
    mode: "xyb",
    name: "Xyb",
    to3d: () => {},
    samples: null,
  },
  cubehelix: {
    mode: "cubehelix",
    name: "Cubehelix",
    to3d: () => {},
    samples: null,
  },
};

