import {
  cubehelixTo3d,
  hsiTo3d,
  hslTo3d,
  hsvTo3d,
  hwbTo3d,
  labTo3d,
  lchTo3d,
  luvTo3d,
  oklabTo3d,
  rgbTo3d,
  xyzTo3d,
} from "./to3d";
import {
  coneColorSamples,
  cubeColorSamples,
  cubehelixColorSamples,
  hsiColorSamples,
  hslColorSamples,
  lab65ColorSamples,
  labColorSamples,
  lch65ColorSamples,
  lchColorSamples,
  luvColorSamples,
  oklabColorSamples,
  rgbColorSamples,
  xyzd50ColorSamples,
} from "./utils";

/**
 * @type {Record<import("culori").Mode, { name: string, mode: import("culori").Mode, spaces: { type: "cube" | "cone" | "bicone" | "cylinder", to3d: (color: import("culori").Color) => { x: number, y: number, z: number } | null }[], to3d: (color: import("culori").Color) => { x: number, y: number, z: number } | null, samples: Color[] }>}
 */
export const colorSpaces = {
  // rgb model
  a98: {
    mode: "a98",
    name: "A98",
    spaces: {
      cube: rgbTo3d,
    },
    to3d: rgbTo3d,
    samples: cubeColorSamples("r", "g", "b", "a98"),
  },
  rgb: {
    mode: "rgb",
    name: "sRGB",
    spaces: {
      cube: rgbTo3d,
    },
    to3d: rgbTo3d,
    samples: cubeColorSamples("r", "g", "b", "rgb"),
  },
  lrgb: {
    mode: "lrgb",
    name: "lRGB",
    spaces: {
      cube: rgbTo3d,
    },
    to3d: rgbTo3d,
    samples: cubeColorSamples("r", "g", "b", "lrgb"),
  },
  p3: {
    mode: "p3",
    name: "P3",
    spaces: {
      cube: rgbTo3d,
    },
    to3d: rgbTo3d,
    samples: cubeColorSamples("r", "g", "b", "p3"),
  },
  prophoto: {
    mode: "prophoto",
    name: "ProPhoto", 
    spaces: {
      cube: rgbTo3d,
    },
    to3d: rgbTo3d,
    samples: cubeColorSamples("r", "g", "b", "prophoto"),
  },
  rec2020: {
    mode: "rec2020",
    name: "Rec. 2020",
    spaces: {
      cube: rgbTo3d,
    },
    to3d: rgbTo3d,
    samples: cubeColorSamples("r", "g", "b", "rec2020"),
  },
  hsv: {
    mode: "hsv",
    name: "HSV",
    spaces: {
      cone: hsvTo3d,
    },
    to3d: hsvTo3d,
    samples: coneColorSamples("h", "s", "v", "hsv"),
  },
  hsl: {
    mode: "hsl",
    name: "HSL",
    spaces: {
      bicone: hslTo3d,
    },
    to3d: hslTo3d,
    samples: coneColorSamples("h", "s", "l", "hsl"),
  },
  hsi: {
    mode: "hsi",
    name: "HSI",
    spaces: {
      bicone: hsiTo3d,
    },
    to3d: hsiTo3d,
    samples: coneColorSamples("h", "s", "i", "hsi"),
  },
  hwb: {
    mode: "hwb",
    name: "HWB",
    spaces: {
      cone: hwbTo3d,
    },
    to3d: hwbTo3d,
    samples: coneColorSamples("h", "w", "b", "hwb"),
  },
  lab: {
    mode: "lab",
    name: "Lab",
    spaces: {
      cube: labTo3d,
    },
    to3d: labTo3d,
    samples: labColorSamples(),
  },
  lch: {
    mode: "lch",
    name: "LCH",
    spaces: {
      cylinder: lchTo3d,
    },
    to3d: lchTo3d,
    samples: lchColorSamples(),
  },
  lab65: {
    mode: "lab65",
    name: "Lab D65",
    spaces: {
      cube: labTo3d,
    },
    to3d: labTo3d,
    samples: lab65ColorSamples(),
  },
  lch65: {
    mode: "lch65",
    name: "LCH D65",
    spaces: {
      cylinder: lchTo3d,
    },
    to3d: lchTo3d,
    samples: lch65ColorSamples(),
  },
  luv: {
    mode: "luv",
    name: "Luv",
    spaces: {
      cube: luvTo3d,
    },
    to3d: luvTo3d,
    samples: luvColorSamples(),
  },
  lchuv: {
    mode: "lchuv",
    name: "LCHuv",
    spaces: {
      // cylinder: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  dlab: {
    mode: "dlab",
    name: "DLab",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  dlch: {
    mode: "dlch",
    name: "DLCh",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  oklab: {
    mode: "oklab",
    name: "Oklab",
    spaces: {
      cube: oklabTo3d,
    },
    to3d: oklabTo3d,
    samples: oklabColorSamples(),
  },
  oklch: {
    mode: "oklch",
    name: "Oklch",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  okhsl: {
    mode: "okhsl",
    name: "Okhsl",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  okhsv: {
    mode: "okhsv",
    name: "Okhsv",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  jab: {
    mode: "jab",
    name: "Jzazbz",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  jch: {
    mode: "jch",
    name: "JzCzhz",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  yiq: {
    mode: "yiq",
    name: "YIQ",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  xyz50: {
    mode: "xyz50",
    name: "XYZ50",
    spaces: {
      cube: xyzTo3d,
    },
    to3d: xyzTo3d,
    samples: xyzd50ColorSamples(),
  },
  xyz65: {
    mode: "xyz65",
    name: "XYZ65",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  xyb: {
    mode: "xyb",
    name: "Xyb",
    spaces: {
      // cube: () => ({ x: 0, y: 0, z: 0 }),
    },
    to3d: () => ({ x: 0, y: 0, z: 0 }),
    samples: null,
  },
  cubehelix: {
    mode: "cubehelix",
    name: "Cubehelix",
    spaces: {
      cylinder: cubehelixTo3d,
    },
    to3d: cubehelixTo3d,
    samples: cubehelixColorSamples(),
  },
};
