var scramblesMap = {
  1: [
   "solved"
  ],
  2: [
    "B R B' U' B R' B R B U B' R' B",
    "R' F D' B D F D' B' D F R",
    "L' BL D' R D BL D' R' D BL L",
    "B BL D R' D' BL D R D' BL B'"
  ],
  3: [
    "B' R B U' B' R' B' R B' U B R' B'",
    "R BR B' R B R' BR' R B' R' B R'",
    "L F B' R B R' F' R B' R' B L'",
    "R BR B' R B R' BR' R B' R' B R'"
  ],
  4: [
    "B' R B R U' L R L' R' U B' R B",
    "BL L' R L BR' D' L D L' BR BL' R'",
    "BL U D' L D L' U' D R D' R' BL'",
    "L' BR' R' BL D R D' R BL' L R' BR"
  ],
  5: [
    "R B' D' R' D B' D B D' B",
    "L R' D' L' D R' D R D' R",
    "B D B L B' L B L B' D' B'",
    "R D R B R' B R B R' D' R"
  ],
  6: [
    "B' BR R F D' R D R' F' R' BR' B",
    "R' F L BL D' L D L' BL' L' F' R",
    "R BR' R L R' BR R D' L D L R",
    "L F' L B L' F L D' B D B L"
  ],
  7: [
    "R' L R' BR L' B L' B' BR' L R'",
    "L' B L' F B' R B' R' F' B L'",
    "F' L B' L' BR D L' D' L BR' F B",
    "BR' R L' R' BL D R' D' R BL' L BR"
  ],
  8: [
    "R' F L BL L D' L' D BL' L' F' R",
    "B' R' D' R' D B' BL' B R' B' BL B'",
    "L F' L B L' B' F' R B' R' B F' L'",
    "R B' R' B U' B' BR B' L' B BR' B L"
    ],
  9: [
    "D B' R' D' R' D R' B D'",
    "L D' R' D' R' D R' D L'",
    "BR' D BL' D' R' D BL D' R BR",
    "L' D' B D B' L B' L' B' L B'"
  ],
  10: [
    "R' D' R U D' L' D L U' D",
    "L D L' U' D R D' R' U' D'",
    "D' L D L' U D' B D' B' U D'",
    "R L R' L' B D B' U' B' D' B"
  ],
  11: [
    "B BL D L R L' R' D' BL' B'",
    "L R F L F' R F L' F' R L'",
    "L' BL D R D R' B' D B BL' L",
    "R' D' R U B' R' L' D R B L"
  ],
  12: [
    "B L' BL B BL' L' BL B' BL' L' B'",
    "R BR' D B D' R' B R B BR R'",
    "R' L' F' R' F L' F' R F L' R",
    "L F' L B D B D' B L' F L'"
  ],
  13: [
    "L R L B BL' D' B D B' BL B' L R'",
    "R' B' BR' D B' D' B BR B R' L R' L'",
    "R' L' R' B' BR D B' D' B BR' B R' L",
    "R F U L' B L B' R B' R' B U' F' R'"
  ],
  14: [
    "F B' U' BL B' R' B BL' B' R B U F' B",
    "BL R' U' BR R' L' R BR' R' L R U BL' R",
    "B' F U' BL B' R' B BL' B' R B U B F'",
    "R' BL U' BR R' L' R BR' R' L R U R BL'"
  ],
  15: [
    "L U F U' F' L F U F U' F L F' U F",
    "B U BL U' BL' B BL U BL U' BL B BL' U BL",
    "R U BR U' BR' R BR U BR U' BR R BR' U BR",
    "B F' BL' F' BL' F' R' F BL' F' R B' F' U' F"
  ],
  16: [
    "R BL' U' BR D' L' D BR' D L U D' R' BL",
    "L BR' U' F D' B' D F' D B U D' L' BR",
    "L R' L' R U BR B' BR' L R L' R' BR B BR'",
    "F' B U' BL D' R' D BL' D R U D' F B'"
  ],
  17: [
    "B F D B D' B F' U' BR L' B' L B BR'",
    "R BL D R D' R BL' U' F B' R' B R F'",
    "L BR D L D' L BR' U' BL R' L' R L BL'",
    "B D' R D B' U D' L R' L' R U' R' D"
  ],
  18: [
    "L' U L F U L R' L' R U' F' L' U' L",
    "BL B' F R B R' B F' L' B' R' L R BL'",
    "BR R' BL L R L' R BL' B' R' L' B L BR'",
    "F L' BR B L B' L BR' R' L' B' R B F'"
  ],
  19: [
    "L R' L' R' BL D' BL' B BL D BL' B R' B",
    "B L' B' L' BR D' BR' R BR D BR' R L' R",
    "BR F' BL D' B D B' BL' B D' B' D F BR'",
    "F BL' BR D' R D R' BR' R D' R' D BL F'"
  ],
  20: [
    "BL' BR R' BR' D' R D R' BR D' R D BR' BL",
    "BR' F L' F' D' L D L' F D' L D F' BR",
    "F' BL B' BL' D' B D B' BL D' B D BL' F",
    "L U' R' BR U' L' R' L R U BR' R U L'"
  ],
  21: [
    "BL' L' BL' D' B D B' BL D' B D L B' BL",
    "BR' B' BR' D' R D R' BR D' R D B R' BR",
    "F' R' F' D' L D L' F D' L D R L' F",
    "D' L' D R D' L U B' R B R' U' D R'"
  ],
  22: [
    "B' D' R D R' B' U' R U B' U' R'",
    "R' D' L D L' R' U' L U R' U' L'",
    "L' D' B D B' L' U' B U L' U' B'",
    "B D L' D' L B U L' U' B U L"
  ],
  23: [
    "R' L R BR' F L' R L R' F' L' BR",
    "L R' BL' L' BL' L R L' BL L BL L'",
    "B L' BR' B' BR' B L B' BR B BR B'",
    "R B' F' R' F' R B R' F R F R'"
  ],
  24: [
    "BL L' U B' R B R' U' R' L R BL'",
    "BR B' U R' L R L' U' L' B L BR'",
    "F R' U L' B L B' U' B' R B F'",
    "L' U D' B' D F' D' B D F U' L"
  ],
  25: [
    "B L' U' B L' B' U R U' L U R' L B'",
  ],
  26: [
    "B' U B' L' B U' R B R' U B L B'",
  ],
  27: [
    "B U' B R B' U L' B' L U' B' R' B",
  ],
  28: [
    "R' L R L U' B' U L' B' L' B U' B",
  ],
  29: [
    "L R' L' R' U B U' R B R B' U B'",
  ],
  30: [
    "L R' L' R U' L B' R B R' B L' B'",
  ],
  31: [
    "R' L R L' U L B' R B R' B L' B'",
  ],
  32: [
    "R' L R L' B U' R B R' B' U B'",
  ],
  33: [
    "L R' L' R B' U L' B' L B U' B",
  ],
  34: [
    "R' B L R L' B' U' B R' L' B' L R",
  ],
  35: [
    "R L B U B' R' B R U' B' L' R'",
  ],
  36: [
    "L' R' B' U' B L B' L' U B R L",
  ],
  37: [
    "R L' R' L' U R' B' R B U' R L' R'",
  ],
  38: [
    "L U' L R' L R L' B L' B' U R' L' R",
  ],
  39: [
    "L U' L R B' R' L' U R' L' R U' B",
  ],
  40: [
    "L' R L R U' L B L' B' U L' R L",
  ],
  41: [
    "R B R' U' B' R B' R' L' B' L U B'",
  ],
  42: [
    "R' U R' L R' L' R B' R B U' L R L'",
  ],
  43: [
    "L U L' R L' B L B' L R' U' L'",
  ],
  44: [
    "B L R' L' B' R U' R' B L R L' B'",
  ],
  45: [
    "L' U' L B' L' B U B' L B",
  ],
  46: [
    "R' L R L R' U B L B' L' U' R L",
  ],
  47: [
    "L R' L' R B' U B' L B L U' B U L",
  ],
  48: [
    "L R' L' R U' B' U L' U' R B R' U L",
  ],
  49: [
    "L B R' L' R U L B' L B' L B' U' B'",
  ],
  50: [
    "B' U L' B L R' B' R U' L R' L' B R",
  ],
  51: [
    "R U' L R' L' R U' L R' L' B' R B U' R'",
  ],
  52: [
    "R' U R' L R' L' R B' R B U' R",
    ],
  53: [
    "B R U B R B' R' U' R' B'",
  ],
  54: [
    "B L R L' U' L R' L' R U R' B'",
  ],
  55: [
    "B R B' U B L R' L' B' R U' R'",
  ],
  56: [
    "B' R B R' L R' L' U R' B' R B U' R",
  ],
  57: [
    "B R B U' R' B' R' B R' U R' B",
  ],
  58: [
    "R' B' R' B U' L' U L' R' L U' L",
  ],
  59: [
    "L B L' B' U' L' B' R B R L R",
  ],
  60: [
    "R' U' L' R B' R B R' L R' U R",
  ],
  61: [
    "R U R' B R B' U' B R' B'",
  ],
  62: [
    "B L R' L' B' R U R' B L R L' B'",
  ],
  63: [
    "R' L R L' B U' B R' B' R' U B' U' R'",
  ],
  64: [
    "R' B' L R L' U' R' B R' B R' B U B",
  ],
  65: [
    "L' U R' L R L' U R' L R B L' B' U L",
  ],
  66: [
    "L R' L' R' L U' B' R' B R U L' R'",
  ],
  67: [
    "B U' R B' R' L B L' U R' L R B' L'",
  ],
  68: [
    "R' L R L' U B U' R U L' B' L U' R'",
  ],
  69: [
    "R2' U R' U' R' U2' R2' U2 R U R U' R U2' R U2' R2' U' R2",
    "R2 U2 R2' U R2 U2 R2' U' R2 U2 R2' U R2 U' R2' U R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2 R2 U R2' U' R2 U R2' U2 R2",
    "R2' U2 R2 U R2' U2 R2 U' R2 U2 R2' U R2 U' R2' U R2 U2 R2'",
  ],
  70: [
    "R U2' R2 U' R' U2' R2 U R2 U R' U' R2 U2 R2' U2' R2' U' R",
    "R U2' R' U R U2 R U2 R' U R' U' R U' R U' R' U' R'",
    "R2 U R U2 R U2' R' U' R2' U2' R2' U' R' U2' R U2 R U R2",
    "R' U2' R U' R' U2' R2 U2' R' U' R2' U2' R2' U' R2 U2' R2' U2 R'",
  ],
  71: [
    "R' U2 R U' R' U2' R' U2' R U' R U R' U R' U R U R",
    "R' U2 R2' U R U2 R2' U' R2' U' R U R2' U2' R2 U2 R2 U R'",
    "R2 U' R2 U' R2 U2' R2 U2 R2 U2' R U R U R' U R2' U R2'",
    "R2' U2 R2' U2 R2' U' R2' U2 R2' U2' R2' U2 R' U' R2 U2' R2 U2' R2",
  ],
  72: [
    "R U R' U2 R U' R' U R U2 R2' U' R U' R' U2 R",
    "R2' U R U R' U' R2 U R2 U2' R2' U' R U2 R' U2' R U2' R2'",
    "R2' U R2' U R U2' R2 U2' R U2 R2 U2' R U' R' U' R2 U' R2",
    "R2' U R2' U R U' R2 U2 R U2' R2 U2 R U' R' U' R2 U' R2",
  ],
  73: [
    "R' U' R U2' R' U R U' R' U2' R2 U R' U R U2' R'",
    "R2 U' R2 U' R' U R2' U2' R' U2 R2' U2' R' U R U R2' U R2'",
    "R2 U' R2 U' R' U2 R2' U2 R' U2' R2' U2 R' U R U R2' U R2'",
    "R2 U' R' U' R U R2' U' R2' U2 R2 U R' U2' R U2 R' U2 R2",
  ],
  74: [
    "R' U2' R U R' U R2 U2' R' U' R U R' U2' R U' R'",
    "R2 U2 R2' U R2 U2 R2 U' R U2' R U2 R2' U R U' R U2' R'",
    "R2 U2 R' U2 R U2' R' U R2 U2 R2' U' R2' U R U' R' U' R2",
    "R2 U2' R2 U2 R2' U R2 U2 R2' U R2' U2 R2 U2 R2' U2 R2 U2' R2'",
  ],
  75: [
    "R U2 R' U' R U' R2' U2 R U R' U' R U2 R' U R",
    "R2 U2' R2' U2 R2 U2 R2 U2' R2' U' R2 U2' R2' U R2' U2 R2 U2' R2'",
    "R2 U2' R2' U2 R2 U2 R2 U2' R2' U' R2 U2' R2' U2' R2' U2' R2 U2 R2'",
    "R2 U2' R2' U2 R2 U2 R2' U2' R2 U' R2' U2' R2 U R2' U2 R2 U2' R2'",
  ],
  76: [
    "R2 U R2 U' R2 U' R2' U2 R U R U2' R U' R2'",
    "R U2' R U R U2 R2' U' R2 U' R2 U R2 U2' R2'",
    "R2' U2' R2 U R2 U' R2 U' R2' U2 R U R U2' R",
    "R2' U' R U2' R U R U2 R2' U' R2 U' R2 U R2",
  ],
  77: [
    "R U2 R U2' R' U2 R' U2 R U2' R U2 R' U2' R'",
    "R U2 R U2' R' U' R2' U R2' U2 R' U2' R2' U' R",
    "R U2' R U2 R' U R2' U' R2' U2' R' U2 R2' U R",
    "R U2' R U2 R' U2' R' U2' R U2 R U2' R' U2 R'",
  ],
  78: [
    "R U R2' U2 R' U2' R2' U' R2' U R' U2 R U2' R",
    "R U' R2' U2' R' U2 R2' U R2' U' R' U2' R U2 R",
    "R2 U' R2' U R2 U2' R2' U2 R2 U2 R2' U2' R2 U2' R2'",
    "R2 U' R2' U R2 U2' R2' U' R2 U2' R2' U2 R2 U R2'",
  ],
  79: [
    "R2' U2 R U2' R2 U2' R2' U2 R' U2' R U R2 U' R2' U' R",
    "R' U R2 U R2' U' R' U2 R U2' R2 U2 R2' U2 R' U2' R2",
    "R' U2' R2 U R2' U2 R U2' R U2 R' U2' R U' R2' U2 R",
    "R' U2' R2 U R' U2 R U2' R' U2 R' U2' R2 U' R2' U2 R",
  ],
  80: [
    "R U' R2' U' R2 U R U2' R' U2 R2' U2' R2 U2' R U2 R2'",
    "R2 U2' R' U2 R2' U2 R2 U2' R U2 R' U' R2' U R2 U R'",
    "R' U2 R U2 R2' U' R2 U R2' U R2 U2' R2' U2 R U2' R",
    "R' U2 R U2' R2' U' R2 U' R2' U R2 U' R2' U2 R U2' R",
    "R U2 R2' U' R2 U2' R' U2 R' U2' R U2 R' U R2 U2' R'",
  ],
  81: [
    "solved",
  ],
  82: [
    "R' U2' R U' R' U2 R U2' R' U2' R2 U R' U2 R U2 R'",
    "R U R' U R U R' U2 R' U2 R U2 R' U R U2' R U' R'",
    "R2' U2 R2' U R2 U R2' U2' R' U2' R U2' R' U' R2' U R2' U2 R'",
    "R U2' R' U2 R2' U' R U2' R2' U R U' R2 U2 R' U R2' U2 R'",
  ],
  83: [
    "R U2 R' U R U2' R' U2 R U2 R2' U' R U2' R' U2' R",
    "R' U' R U' R' U' R U2' R U2' R' U2' R U' R' U2 R' U R",
    "R' U2 R U2' R2 U R' U2 R2 U' R' U R2' U2' R U' R2 U2' R",
    "R2 U2' R2 U' R2' U' R2 U2 R U2 R' U2 R U R2 U' R2 U2' R",
  ],
  84: [
    "R U2' R' U2' R U' R2' U2 R U2 R' U2' R U R' U2 R",
    "R U R' U2 R' U' R U2' R' U2' R U2' R U' R' U' R U' R'",
    "R U2' R2 U' R U2' R2' U R' U' R2 U2 R' U R2 U2' R U2 R'",
    "R U2' R2 U' R2 U R U2 R' U2 R U2 R2 U' R2' U' R2 U2' R2",
  ],
  85: [
    "R' U2 R U2 R' U R2 U2' R' U2' R U2 R' U' R U2' R'",
    "R' U' R U2' R U R' U2 R U2 R' U2 R' U R U R' U R",
    "R' U2 R2' U R2' U' R' U2' R U2' R' U2' R2' U R2 U R2' U2 R2'",
    "R' U2 R2' U R' U2 R2 U' R U R2' U2' R U' R2' U2 R' U2' R",
  ],
  86: [
    "R' U2' R' U' R2 U2' R2' U R U' R U2 R' U2' R' U2' R2",
    "R U2' R' U2 R U R2' U' R2 U' R2' U2 R U2 R U2' R' U R",
    "R2' U2' R2 U R2' U R U2' R U R U2 R2' U' R2 U' R'",
    "R U R' U2 R U2 R' U2' R U2' R2' U2 R2 U2 R2' U R2 U' R'",
  ],
  87: [
    "R U2 R U R2' U2 R2 U' R' U R' U2' R U2 R U2 R2'",
    "R2 U2 R2' U' R2 U' R' U2 R' U' R' U2' R2 U R2' U R",
    "R' U2 R U2' R' U' R2 U R2' U R2 U2' R' U2' R' U2 R",
    "R2 U' R' U' R U' R U R2' U R U' R U' R2 U R2 U2 R2'",
  ],
  88: [
    "R2' U2 R U2 R U2' R' U R' U' R2 U2 R2' U R U2 R",
    "R U2 R' U2' R' U2' R2 U R2' U R2 U' R' U2' R U2 R'",
    "R U R2' U R2 U2' R' U' R' U2 R' U' R2 U' R2' U2 R2",
    "R U R2' U' R2 U2' R2' U2' R2 U2 R' U2 R U2' R' U2' R U' R'",
  ],
  89: [
    "R2 U2' R' U2' R' U2 R U' R U R2' U2' R2 U' R' U2' R'",
    "R' U2' R U2 R U2 R2' U' R2 U' R2' U R U2 R' U2' R",
    "R' U' R2 U' R2' U2 R U R U2' R U R2' U R2 U2' R2'",
    "R U R' U R2' U2 R U R U R' U' R' U2 R2' U' R2' U2' R",
  ],
  90: [
    "R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U2' R2'",
    "R2 U2' R2' U' R2 U2' R2' U R2' U2' R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U2' R2 U R2 U2' R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R2 U R2' U2' R2 U' R2' U2' R2",
  ],
  91: [
    "R2 U2 R2' U R2 U2 R2' U' R2 U2 R2' U R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2 R2 U R2' U2 R2",
    "R2' U2 R2 U R2' U2 R2 U' R2 U2 R2' U R2 U2 R2'",
    "R2' U2 R2 U R2' U2 R2 U' R2' U2 R2 U R2' U2 R2",
  ],
  92: [
    "R U2 R' U R U2 R' U' R' U2' R U' R' U2' R",
    "R U2' R' U' R U2' R' U2' R' U2' R U' R' U2' R",
    "R U2' R' U' R U2' R' U' R' U2 R U R' U2 R",
    "R U2' R' U' R U' R2 U2' R2' U' R' U R2' U2 R2' U' R'",
  ],
  93: [
    "R' U2' R U' R' U2' R U R U2 R' U R U2 R'",
    "R' U2 R U R' U2 R U R U2' R' U' R U2' R'",
    "R' U2 R U R' U2 R U2 R U2 R' U R U2 R'",
    "R' U2 R U R' U R2' U2 R2 U R U' R2 U2' R2 U R",
  ],
  94: [
    "R2 U R2' U R2 U R2' U2 R2 U2 R2' U R2 U' R2'",
    "R2' U R2 U R2' U R2 U2 R2' U2 R2 U R2' U' R2",
    "R' U R' U2 R U R U' R2' U2' R2 U R' U2' R",
    "R U R' U' R2' U2 R2 U R U' R' U R2' U2 R2",
  ],
  95: [
    "R' U' R U R2 U2' R2' U' R' U R U' R2 U2' R2'",
    "R U' R U2' R' U' R' U R2 U2 R2' U' R U2 R'",
    "R2 U' R2' U' R2 U' R2' U2' R2 U2' R2' U' R2 U R2'",
    "R2' U' R2 U' R2' U' R2 U2' R2' U2' R2 U' R2' U R2",
  ],
  96: [
    "R2 U R2' U' R2 U2' R2' U2' R2 U' R2' U' R2 U' R2'",
    "R2' U R2 U' R2' U2' R2 U2' R2' U' R2 U' R2' U' R2",
    "R2' U2' R2 U' R U R' U' R2' U2' R2 U R U' R'",
    "R' U2 R U' R2' U2 R2 U R' U' R' U2' R U' R",
  ],
  97: [
    "R U2' R' U R2 U2' R2' U' R U R U2 R' U R'",
    "R2 U2 R2' U R' U' R U R2 U2 R2' U' R' U R",
    "R2 U' R2' U R2 U2 R2' U2 R2 U R2' U R2 U R2'",
    "R2' U' R2 U R2' U2 R2 U2 R2' U R2 U R2' U R2",
  ],
  98: [
    "R2 U2 R2' U R2 U' R2 U2' R2' U' R2 U2' R2' U2 R2'",
    "R2 U2 R2' U R2 U' R2' U2' R2 U' R2' U2' R2 U2 R2'",
    "R2' U2 R2 U R2' U' R2 U2' R2' U' R2 U2' R2' U2 R2",
    "R2' U2 R2 U R2' U' R2' U2' R2 U' R2' U2' R2 U2 R2",
  ],
  99: [
    "R2 U2' R2' U' R2 U R2 U2 R2' U R2 U2 R2' U2' R2'",
    "R2 U2' R2' U' R2 U R2' U2 R2 U R2' U2 R2 U2' R2'",
    "R2' U2' R2 U' R2' U R2 U2 R2' U R2 U2 R2' U2' R2",
    "R2' U2' R2 U' R2' U R2' U2 R2 U R2' U2 R2 U2' R2",
  ],
  100: [
    "R2 U2' R2 U2 R2' U R2 U2 R2' U R2' U' R2 U2' R2'",
    "R2 U2' R2' U2 R2 U R2' U2 R2 U R2' U' R2 U2' R2'",
    "R2' U2' R2 U2 R2' U R2 U2 R2' U R2 U' R2' U2' R2",
    "R2' U2' R2' U2 R2 U R2' U2 R2 U R2 U' R2' U2' R2",
  ],
  101: [
    "R2 U2 R2 U2' R2' U' R2 U2' R2' U' R2' U R2 U2 R2'",
    "R2 U2 R2' U2' R2 U' R2' U2' R2 U' R2' U R2 U2 R2'",
    "R2' U2 R2 U2' R2' U' R2 U2' R2' U' R2 U R2' U2 R2",
    "R2' U2 R2' U2' R2 U' R2' U2' R2 U' R2 U R2' U2 R2",
  ],
  102: [
    "R U R' U2 R U2 R' U' R' U' R U' R' U2 R",
    "R2 U R2' U R2 U' R2' U R2 U R2' U2' R2 U' R2'",
    "R2 U R2' U2 R2 U' R2' U' R2 U R2' U' R2 U' R2'",
    "R2' U R2 U R2' U' R2 U R2' U R2 U2' R2' U' R2",
  ],
  103: [
    "R2 U' R2' U R2 U R2' U2' R2 U' R2' U2 R2 U R2'",
    "R2' U' R2 U R2' U R2 U2' R2' U' R2 U2 R2' U R2",
    "R U2 R' U' R U' R' U' R' U2 R U2 R' U R",
    "R2 U' R2' U2' R2 U R2' U R2 U' R2' U R2 U R2'",
  ],
  104: [
    "R2 U2' R2' U2' R2' U R' U' R2' U R2 U R U' R' U2' R2'",
    "R2' U2' R2 U' R U R' U' R2' U' R2 U R U' R2 U' R2",
    "R' U' R2 U' R2' U2 R U R U2' R U R2' U2 R2 U2 R2'",
    "R U2' R U R U2 R2' U' R2 U' R2 U' R2 U2' R2' U2' R2 U2 R2'",
  ],
  105: [
    "R2 U2 R2' U R' U' R U R2 U R2' U' R' U R2' U R2'",
    "R2' U2 R2 U2 R2 U' R U R2 U' R2' U' R' U R U2 R2",
    "R U R2' U R2 U2' R' U' R' U2 R' U' R2 U2' R2' U2' R2",
    "R2 U2 R2' U R2 U2 R2' U2 R' U2 R' U2' R U' R' U2' R U2 R",
  ],
  106: [
    "R2 U2' R2' U2' R2 U' R' U2 R' U' R' U2' R2 U R2' U R",
    "R2 U2 R U R' U' R2' U' R2 U R U' R2 U2 R2 U2 R2'",
    "R2' U R2' U R' U' R2' U R2 U R U' R' U R2' U2 R2",
    "R U2' R' U2' R2 U2' R' U2' R' U2 R2 U2 R2 U2' R2 U R2' U R",
  ],
  107: [
    "R2' U2 R2 U2 R2' U R U2' R U R U2 R2' U' R2 U' R'",
    "R2 U' R2 U' R U R2 U' R2' U' R' U R U' R2 U2' R2'",
    "R2' U2' R' U' R U R2 U R2' U' R' U R2' U2' R2' U2' R2",
    "R2' U2 R2 U2' R2 U' R2 U' R2' U2 R U R U2' R U R2' U' R2",
  ],
  108: [
    "R2 U2' R2' U' R2 U2' R2' U' R2 U2 R2' U R2 U2 R2'",
    "R2 U2' R2' U' R2 U2' R2' U' R2' U2 R2 U R2' U2 R2",
    "R2' U2' R2 U' R2' U2' R2 U' R2 U2 R2' U R2 U2 R2'",
    "R2' U2' R2 U' R2' U2' R2 U' R2' U2 R2 U R2' U2 R2",
  ],
  109: [
    "R2 U2 R2' U R2 U2 R2' U R2 U2' R2' U' R2 U2' R2'",
    "R2 U2 R2' U R2 U2 R2' U R2' U2' R2 U' R2' U2' R2",
    "R2' U2 R2 U R2' U2 R2 U R2 U2' R2' U' R2 U2' R2'",
    "R2' U2 R2 U R2' U2 R2 U R2' U2' R2 U' R2' U2' R2",
  ],
  110: [
    "R2' U2 R U R' U2 R U2 R U' R' U R U2 R' U2 R",
    "R2 U R2 U2 R U' R' U' R2' U' R2 U R U2 R' U2 R",
    "R2' U R' U2 R2' U' R2 U' R U' R' U R2' U2 R2 U2 R2'",
    "R U2 R2 U' R2 U2 R' U2' R2' U2 R2' U2' R U R2' U2' R'",
  ],
  111: [
    "R' U R U2' R2' U' R U2' R' U R U R' U R U R",
    "R U2' R2' U2' R' U2 R2' U2 R' U' R' U' R' U2' R U2 R",
    "R U' R2' U2 R' U2' R2' U R' U' R' U' R' U2' R U2 R",
    "R' U' R U' R2 U R2 U' R2 U' R2' U2' R2 U2' R U' R2'",
  ],
  112: [
    "R U' R' U2 R2 U R' U2 R U' R' U' R U' R' U' R'",
    "R U R' U R2' U' R2' U R2' U R2 U2 R2' U2 R' U R2",
    "R' U R2 U2' R U2 R2 U' R U R U R U2 R' U2' R'",
    "R' U2 R2 U2 R U2' R2 U2' R U R U R U2 R' U2' R'",
  ],
  113: [
    "R2 U2' R' U' R U2' R' U2' R' U R U' R' U2' R U2' R'",
    "R2 U' R U2' R2 U R2' U R' U R U' R2 U2' R2' U2' R2",
    "R2' U' R2' U2' R' U R U R2 U R2' U' R' U2' R U2' R'",
    "R' U2' R U2' R' U2' R' U2' R U' R U R2' U2 R U R",
  ],
  114: [
    "R2' U R U R U2 R' U2' R' U2 R U2 R' U' R2",
    "R2' U R U2' R' U2' R U2 R U2' R' U' R' U' R2",
    "R2 U' R' U2 R U2 R' U2' R' U2 R U R U R2'",
    "R2 U' R' U' R' U2' R U2 R U2' R' U2' R U R2'",
  ],
  115: [
    "R U' R U R' U' R' U R U2' R U2 R' U2 R' U' R U2 R'",
    "R' U2 R U2' R2' U2' R2' U2 R2 U' R2' U' R2 U R2 U' R' U R",
    "R' U R U2' R U2 R' U2 R' U2 R U2' R U2 R' U2 R U2 R'",
    "R' U R U2' R U2 R' U' R U2' R' U2 R' U2' R U' R U2 R'",
  ],
  116: [
    "R' U R' U' R U R U' R' U2 R' U2' R U2' R U R' U2' R",
    "R U R2' U' R2 U' R2' U2 R2 U2' R' U2' R U2 R' U' R U' R'",
    "R U R' U R2 U R' U' R' U2 R U2 R U2' R2' U2 R U' R'",
    "R U2 R U2' R' U' R' U' R' U' R2 U2' R2' U2' R2' U2 R' U2' R'",
  ],
  117: [
    "R2 U R2' U2' R2 U R2' U' R2 U R2' U2' R2 U R2'",
    "R2 U2' R2' U2 R' U2 R2' U R2 U2 R U2 R2 U2' R2'",
    "R2 U2' R2' U2' R2 U R2' U R2 U' R2' U' R2 U' R2'",
    "R2 U' R2' U' R2 U' R2' U R2 U R2' U2' R2 U2' R2'",
  ],
  118: [
    "R2 U R2' U R2 U R2' U' R2 U' R2' U2 R2 U2 R2'",
    "R2 U2 R2' U2 R2 U' R2' U' R2 U R2' U R2 U R2'",
    "R2 U2 R2' U2' R' U2' R2' U' R2 U2' R U2' R2 U2 R2'",
    "R2 U' R2' U2 R2 U' R2' U R2 U' R2' U2 R2 U' R2'",
  ],
  119: [
    "R U R' U R2 U2' R2' U' R2 U2' R2' U2' R U' R'",
    "R U R' U R2' U2' R2 U' R2' U2' R2 U2' R U' R'",
    "R2 U R2' U R2 U2' R2' U' R2 U2' R2' U2' R2 U' R2'",
    "R2 U R2' U R2' U2' R2 U' R2' U2' R2 U2' R2 U' R2'",
  ],
  120: [
    "R2 U' R2' U' R2 U2 R2' U R2 U2 R2' U2 R2 U R2'",
    "R2 U' R2' U' R2' U2 R2 U R2' U2 R2 U2 R2 U R2'",
    "R2' U' R2 U' R2 U2 R2' U R2 U2 R2' U2 R2' U R2",
    "R2' U' R2 U' R2' U2 R2 U R2' U2 R2 U2 R2' U R2",
  ],
  121: [
    "R U R U R2' U R U' R U' R' U2 R' U' R U2' R'",
    "R' U R U' R' U2 R' U' R U' R U R2' U R U2' R",
    "R' U2' R U2' R U R' U R' U' R2 U' R' U R' U2' R",
    "R U R' U R2' U R U2' R2 U' R' U R' U2 R' U' R2",
  ],
  122: [
    "R U2 R' U2 R' U' R U' R U R2' U R U' R U2 R'",
    "R U' R' U R U2' R U R' U R' U' R2 U' R' U2 R'",
    "R' U' R' U' R2 U' R' U R' U R U2' R U R' U2 R",
    "R2' U R U2' R U' R U R2' U2 R' U' R2 U' R U' R'",
  ],
  123: [
    "R U2 R U R2' U R U' R U' R' U2 R' U' R U2 R'",
    "R U2 R' U R' U' R2 U' R' U R' U R U2' R U' R'",
    "R' U2 R U' R' U2 R' U' R U' R U R2' U R U2 R",
    "R' U' R U2' R U R' U R' U' R2 U' R' U R' U2 R",
  ],
  124: [
    "R U R' U2 R' U' R U' R U R2' U R U' R U2' R'",
    "R U2' R' U R U2' R U R' U R' U' R2 U' R' U2' R'",
    "R' U2' R U' R U R2' U R U' R U' R' U2 R' U R",
    "R' U2' R' U' R2 U' R' U R' U R U2' R U R' U2' R",
  ],
  125: [
    "R' U2' R U' R U R' U2 R U2 R' U2 R' U2' R",
    "R U2' R U R U2 R2' U' R2 U' R2 U2 R2 U2 R2'",
    "R' U' R U2 R U R' U2 R' U2' R2 U' R' U R' U2' R",
    "R2' U R2' U2 R U2 R' U2 R U R U' R2 U2' R U R'",
  ],
  126: [
    "R U2 R' U R' U' R U2' R' U2' R U2' R U2 R'",
    "R' U2 R' U' R' U2' R2 U R2' U R2' U2' R2' U2' R2",
    "R U R' U2' R' U' R U2' R U2 R2' U R U' R U2 R'",
    "R2 U' R2 U2' R' U2' R U2' R' U' R' U R2' U2 R' U' R",
  ],
  127: [
    "R2 U2' R2' U2' R2' U R2' U R2 U2' R' U' R' U2 R'",
    "R' U2 R U2' R U2' R' U2' R U' R' U R' U2 R",
    "R' U2 R U' R U R2' U2 R U2' R U' R' U2' R' U R",
    "R U' R' U2 R2' U R' U' R' U2' R U2' R' U2' R2 U' R2",
  ],
  128: [
    "R2' U2 R2 U2 R2 U' R2 U' R2' U2 R U R U2' R",
    "R U2' R' U2 R' U2 R U2 R' U R U' R U2' R'",
    "R U2' R' U R' U' R2 U2' R' U2 R' U R U2 R U' R'",
    "R' U R U2' R2 U' R U R U2 R' U2 R U2 R2' U R2'",
  ],
  129: [
    "R' U' R' U' R U' R2 U R2 U R U R U2' R U' R'",
    "R2' U2 R2 U' R U2' R2' U2 R' U R U2 R2 U2' R2 U2' R2",
    "R2 U R U' R2 U' R2 U2 R2' U' R2 U' R U R' U' R2'",
    "R U R2' U2 R2 U2 R2' U R U2 R U2' R' U2' R U' R'",
  ],
  130: [
    "R U R U R' U R2' U' R2' U' R' U' R' U2 R' U R",
    "R' U' R2 U2' R2' U2' R2 U' R' U2' R' U2 R U2 R' U R",
    "R2' U' R' U R2' U R2' U2' R2 U R2' U R' U' R U R2",
    "R2 U2' R2' U R' U2 R2 U2' R U' R' U2' R2' U2 R2' U2 R2'",
  ],
  131: [
    "R U R' U2 R' U' R' U' R2' U' R2' U R' U R U R",
    "R U R' U2 R U2 R' U2' R' U' R2 U2' R2' U2' R2 U' R'",
    "R2 U R U' R' U R2' U R2 U2' R2' U R2' U R' U' R2'",
    "R2' U2 R2' U2 R2' U2' R' U' R U2' R2 U2 R' U R2' U2' R2",
  ],
  132: [
    "R' U' R U2' R U R U R2 U R2 U' R U' R' U' R'",
    "R2 U2' R2 U2' R2 U2 R U R' U2 R2' U2' R U' R2 U2 R2'",
    "R2' U' R' U R U' R2 U' R2' U2 R2 U' R2 U' R U R2",
    "R' U' R U2' R' U2' R U2 R U R2' U2 R2 U2 R2' U R",
  ],
  133: [
    "R2 U2' R2' U' R2 U R2' U2 R2 U2 R2' U2 R2 U2' R2'",
    "R2' U2' R2 U' R2' U R2 U2 R2' U2 R2 U2 R2' U2' R2",
    "R2 U2' R2' U2 R2 U R2' U2' R2 U' R2' U R2 U2 R2'",
    "R2' U2' R2 U2 R2' U R2 U2' R2' U' R2 U R2' U2 R2",
  ],
  134: [
    "R U R U R2' U R U' R U' R2 U' R2 U' R2' U2 R U' R U' R'",
    "R U R' U R' U2' R2 U R2' U R2' U R' U R' U' R2 U' R' U' R'",
    "R' U' R U' R U2 R2' U' R2 U' R2 U' R U' R U R2' U R U R",
    "R' U' R' U' R2 U' R' U R' U R2' U R2' U R2 U2' R' U R' U R",
  ],
  135: [
    "R2' U R2' U' R2' U' R U' R U R U R2 U R U2' R U' R2",
    "R2 U' R2 U R2 U R' U R' U' R' U' R2' U' R' U2 R' U R2'",
    "R' U2 R2 U2 R' U' R U' R2' U2' R2 U R2' U2 R2 U2 R2' U R",
    "R U2' R2' U2' R U R' U R2 U2 R2' U' R2 U2' R2' U2' R2 U' R'",
  ],
  136: [
    "R2 U2 R2' U R2 U2 R2' U2 R2 U2 R2' U2' R2 U R2' U2' R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U2 R2' U2 R2 U2' R2' U R2 U2' R2' U2 R2",
    "R2 U2 R2' U R2 U2 R2' U' R2 U2' R2' U2 R2 U' R2' U2' R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2' R2 U2 R2' U' R2 U2' R2' U2 R2",
  ],
  137: [
    "R' U2' R U R' U R U' R' U2' R U' R' U2 R U' R' U2 R",
    "R' U2' R U R' U2' R U R' U2 R U R' U' R U' R' U2 R",
    "R' U' R2 U' R' U R U' R2' U' R2 U R' U' R U R2' U2 R",
    "R U2' R2 U2' R2' U' R2 U2' R2 U R U2' R2' U' R2 U2' R2' U2' R",
  ],
  138: [
    "R U2' R2 U2 R2' U2 R U2' R U R U R2 U' R' U2 R2' U2 R'",
    "R2 U2 R' U R U2 R2' U R U2 R' U2 R U R' U2' R U2' R'",
    "R' U' R2' U' R U R2' U2' R' U2 R2' U2' R' U R' U R2 U R",
    "R' U' R2' U' R U2 R2' U2 R' U2' R2' U2 R' U R' U R2 U R",
  ],
  139: [
    "R' U2 R2' U2' R2 U2' R' U2 R' U' R' U' R2' U R U2' R2 U2' R",
    "R U R2 U R' U2' R2 U2' R U2 R2 U2' R U' R U' R2' U' R'",
    "R U R2 U R' U' R2 U2 R U2' R2 U2 R U' R U' R2' U' R'",
    "R2' U2' R U' R' U2' R2 U' R' U2' R U2' R' U' R U2 R' U2 R",
  ],
  140: [
    "R' U' R U2' R' U R U' R' U2' R U' R' U2 R U2 R' U R",
    "R' U' R U2' R' U2' R U R' U2 R U R' U' R U2 R' U R",
    "R2 U R2' U' R2 U R2' U2' R2 U' R2' U R2 U2' R2' U R2 U2' R2'",
    "R2' U R2 U' R2' U R2 U2' R2' U' R2 U R2' U2' R2 U R2' U2' R2",
  ],
  141: [
    "R U R' U2 R U2 R' U' R U2' R' U' R U R' U2' R U' R'",
    "R U R' U2 R U' R' U R U2 R' U R U2' R' U2' R U' R'",
    "R2 U2' R2' U R2 U2' R2' U R2 U R2' U' R2 U R2' U' R2 U2 R2'",
    "R2 U2' R2' U R2 U2' R2' U R2 U' R2' U2' R2 U R2' U' R2 U R2'",
  ],
  142: [
    "R U R' U R2' U2' R2 U' R2' U2 R2 U' R U' R' U2 R2' U R2",
    "R2' U' R2 U2' R U R' U R2' U2' R2 U R2' U2 R2 U' R U' R'",
    "R U2' R2' U2 R2 U R2 U' R U2' R2 U2 R2 U' R2 U R2' U R2",
    "R2' U' R2 U' R2' U R2' U2' R2' U2 R' U R2' U' R2' U2' R2 U2 R'",
  ],
  143: [
    "R2 U R2' U2 R' U' R U' R2 U2 R2' U' R2 U2' R2' U R' U R",
    "R' U' R U' R2 U2 R2' U R2 U2' R2' U R' U R U2' R2 U' R2'",
    "R' U2 R2' U R2 U R U' R2 U2 R2' U' R2 U2' R2' U R' U R",
    "R' U' R U' R2 U2 R2' U R2 U2' R2' U R' U' R2' U' R2 U2' R",
  ],
  144: [
    "R2' U2' R2' U2 R' U R U2 R2 U2' R' U2' R2' U R2 U R2'",
    "R U2 R2' U2' R' U' R U2' R2 U2 R2 U' R2 U R2' U R2",
    "R2 U2' R2' U' R2 U R2 U' R U R2 U2 R2' U' R' U R",
    "R2 U2 R U R' U2 R2' U' R2 U' R U' R2 U R2 U R2'",
  ],
  145: [
    "R2 U2 R2 U2' R U' R' U2' R2' U2 R U2 R2 U' R2' U' R2",
    "R U R U2 R' U2' R' U2 R U2 R U R2' U2' R2 U' R2'",
    "R U2' R' U2' R U2 R U2' R' U' R U R2' U2' R2 U' R2'",
    "R2' U' R2 U2' R2' U R U2 R U2 R' U2' R' U2 R U R",
  ],
  146: [
    "R2 U2' R2' U' R2 U2' R2' U2 R2 U2' R2' U' R2 U2' R2'",
    "R2 U2' R2' U' R2 U2' R2' U2 R2' U2' R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U2' R2 U2 R2 U2' R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R2 U2 R2' U2' R2 U' R2' U2' R2",
  ],
  147: [
    "R U2' R2 U2 R2' U2' R2 U2' R2' U2 R' U R2' U2 R2",
    "R' U2' R U R U R2' U' R2 U2 R2' U2' R2 U2 R'",
    "R' U2' R2' U2 R2 U2' R2' U2' R2 U2 R U R2 U2 R2'",
    "R U2 R2' U2' R2 U2 R2' U R2 U' R' U' R' U2 R",
  ],
  148: [
    "R U R' U R2 U2' R2' U2' R U R U2' R' U2 R'",
    "R2 U R2' U R2 U2' R2' U2 R2 U R2' U R2 U2' R2'",
    "R2 U R2' U' R2 U2 R2' U2' R2 U2' R2' U R2 U2' R2'",
    "R2 U2 R2' U' R2 U2 R2' U2 R2 U2' R2' U R2 U' R2'",
  ],
  149: [
    "R2 U2' R2' U R2 U R2' U2 R2 U2' R2' U R2 U R2'",
    "R2 U2' R2' U R2 U2' R2' U2' R2 U2 R2' U' R2 U R2'",
    "R2 U' R2' U R2 U2' R2' U2 R2 U2 R2' U' R2 U2 R2'",
    "R2 U' R2' U' R2 U2 R2' U2' R2 U' R2' U' R2 U2 R2'",
  ],
  150: [
    "R U2 R' U R U R' U2' R U2' R' U2' R U2' R' U R U R'",
    "R2 U2 R U R' U' R' U2' R U R U' R2' U2 R' U2 R2 U R2'",
    "R2 U2 R2' U R2 U2 R' U2 R2' U' R U R U2' R' U' R' U R",
    "R2' U2 R U R' U' R' U2' R U R U' R2' U2 R2' U2 R2' U R2",
  ],
  151: [
    "R2 U R2' U2 R2 U2 R2' U2 R2 U2 R2' U R2 U2' R2' U2 R2 U2 R2'",
    "R2 U R2' U2 R2 U2 R2' U2 R2 U2 R2' U' R2 U2 R2' U2' R2 U' R2'",
    "R2' U R2 U2 R2' U2 R2 U2 R2' U2 R2 U R2' U2' R2 U2 R2' U2 R2",
    "R2' U R2 U2 R2' U2 R2 U2 R2' U2 R2 U' R2' U2 R2 U2' R2' U' R2",
  ],
  152: [
    "R U' R U R U' R' U' R U R U2 R U' R U' R2' U' R2'",
    "R U' R U' R U2 R U R U' R' U' R U R U' R' U' R2",
    "R2 U R2 U R' U R' U2' R' U' R' U R U R' U' R' U R'",
    "R2 U2' R U2 R U R' U' R2' U' R2 U R2' U' R2' U2 R U2 R2",
  ],
   153: [
     ],
   154: [
     ],
   155: [
     ],
   156: [
     ],
   157: [
     ],
   158: [
     ],
   159: [
     ],
   160: [
     ],
   161: [
     ],
   162: [
     ],
   163: [
     ],
   164: [
     ],
   165: [
     ],
   166: [
     ],
   167: [
     ],
   168: [
     ],
   169: [
     ],
   170: [
     ],
   171: [
     ],
   172: [
     ],
   173: [
     ],
   174: [
     ],
   175: [
     ],
   176: [
     ],
   177: [
     ],
   178: [
     ],
   179: [
     ],
   180: [
     ]
   
};
