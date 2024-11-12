var scramblesMap = {
  1: [
   "solved"
  ],
  2: [
    "B R B' U' B R' B R B U B' R' B",
    "R' F D' B D F D' B' D F R",
    "L' BL D' R D BL D' R' D BL L",
    "B BL D R' D' BL D R D' BL B'",
    "D R D' R' U R B D B' R' U B D' B'",
    "D L D' L' U L R D R' L' U R D' R'"
  ],
  3: [
    "B' R B U' B' R' B' R B' U B R' B'",
    "R BR B' R B R' BR' R B' R' B R'",
    "L F B' R B R' F' R B' R' B L'",
    "R BR R' U' R' U R' BR' R' U' R BR R' BR'",
    "L R BR' R L' R' BR R' U' R' L R L'",
    "B D L D' L' B BR' R' L' R L BR B"
  ],
  4: [
    "B' R B R U' L R L' R' U B' R B",
    "BL L' R L BR' D' L D L' BR BL' R'",
    "BL U D' L D L' U' D R D' R' BL'",
    "L' BR' R' BL D R D' R BL' L R' BR",
    "BR U' D B D' B' U' D L D L' U' D BR'",
    "D B D' B' U R D' R' U L D' L' U' D'"
  ],
  5: [
    "R' L R L B L B'",
    "L' B L B R B R'",
    "R D' B D' B D B D R'",
    "L D' R D' R D R D L'",
    "BL' B' L' B' L F R' B' R F' BL",
    "BR' R' B' R' B BL L' R' L BL' BR"
  ],
  6: [
    "B' BR R F D' R D R' F' R' BR' B",
    "R' F L BL D' L D L' BL' L' F' R",
    "R BR' R L R' BR R D' L D L R",
    "L F' L B L' F L D' B D B L",
    "L R D R' L BL' L' R' L BL L' D' R L'",
    "F' BR L' D F' L D' L' D F L D' BR' F"
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
    "BR R BR' R' L R BR R' BR' R' L' R",
    "F L F' L' B L F L' F' L' B' L",
    "BL B BL' B' R B BL B' BL' B' R' B",
    "BL' L' BL L R' L' BL' L BL L R L'",
    "BR' B' BR B L' B' BR' B BR B L B'",
    "F' R' F R B' R' F' R F R B R'"
  ],
  26: [
    "BR U' L D L' U L' D' L BR' B L' B' L",
    "F U' B D B' U B' D' B F' R B' R' B",
    "L B L' B' L R' L R L U R B' R' B",
    "B R B' R' B L' B L B U L R' L' R",
    "R L R' L' R B' R B R U B L' B' L",
    "B BR L' D' L U' L D L' U BR' L' B' L"
  ],
  27: [
    "B' R B R' U' B L B' R B' R' B L'",
    "R' L R L' U' R B R' L R' L' R B'",
    "L' B L B' U' L R L' B L' B' L R'",
    "L B' R B R' B L' B' U' L' B L B'",
    "B R' L R L' R B' R' U' B' R B R'",
    "R L' B L B' L R' L' U' R' L R L'"
  ],
  28: [
    "L' U' L' D' B' D L U L U' D' B U' D",
    "B' U' B' D' R' D B U B U' D' R U' D",
    "R' U' R' D' L' D R U R U' D' L U' D",
    "B' F BR D L D L' D BR' B' L' B' L F'",
    "R' BL F D B D B' D F' R' B' R' B BL'",
    "L' BR BL D R D R' D BL' L' R' L' R BR'"
  ],
  29: [
    "R' L R B L R BR' R' L R BR R' B'",
    "L' B L R B L F' L' B L F L' R'",
    "B' R B L R B BL' B' R B BL B' L'",
    "D' B D F' D' B D F D' R B R' D",
    "D' R D BL' D' R D BL D' L R L' D",
    "D' L D BR' D' L D BR D' B L B' D"
  ],
  30: [
    "R' L D R U R' D' R U' L' U' R B' R' B",
    "L' B D L U L' D' L U' B' U' L R' L' R",
    "B' R D B U B' D' B U' R' U' B L' B' L",
    "B L' B' L' F U' B' D B U B' D' B F' L'",
    "R B' R' B' BL U' R' D R U R' D' R BL' B'",
    "L R' L' R' BR U' L' D L U L' D' L BR' R'"
  ],
  31: [
    "BL' D L' U' R B' R' B U R' L R D' BL",
    "BR' D B' U' L R' L' R U L' B L D' BR",
    "F' D R' U' B L' B' L U B' R B D' F",
    "R U R D B D' R' U' R' U D B' U' D'",
    "L U L D R D' L' U' L' U D R' U' D'",
    "B U B D L D' B' U' B' U D L' U' D'"
  ],
  32: [
    "B BR' L R' F L' R L R' F' L' R BR B'",
    "R F' B L' BL B' L B L' BL' B' L F R'",
    "L BL' R B' BR R' B R B' BR' R' B BL L'",
    "F D' L U B L' B' L U' B L' B' D F'",
    "BL D' B U R B' R' B U' R B' R' D BL'",
    "BR D' R U L R' L' R U' L R' L' D BR'"
  ],
  33: [
    "F' R D' B D' B' D' R' F R B' R' B",
    "BL' B' L' B' L R B' R' BL L R' L' R",
    "BR' R' B' R' B L R' L' BR B L' B' L",
    "F' L' R' L' R B L' B' F R B' R' B",
    "D' B L' B' D BR' D' L' D BR D' L' D",
    "D' R B' R' D F' D' B' D F D' B' D",
  ],
  34: [
    "R U D' L' U' B' U L U' D R' D' B D",
    "R B' R' B BR L' BL' L' D L D' BL BR' L",
    "L R' L' R F B' BR' B' D B D' BR F' B",
    "B L' B' L BL R' F' R' D R D' F BL' R",
    "BR R' D L' D L D R BR' U' B L' B' L",
    "F L' D B' D B D L F' U' R B' R' B"
  ],
  35: [
    "B' BL' B' BL B' L' B L BL' B BL B",
    "R' BR' R' BR R' B' R B BR' R BR R",
    "BR B R BR' R D' R' D BR R' B' BR'",
    "F R L F' L D' L' D F L' R' F'",
    "BL L B BL' B D' B' D BL B' L' BL'",
    "B U' D' B' R B R B' R B U D B'"
  ],
  36: [
    "L D BR' L' D' L' D' L D' BR L D' L'",
    "B D F' B' D' B' D' B D' F B D' B'",
    "R D BL' R' D' R' D' R D' BL R D' R'",
    "BR R F BR' R' L R' L' R' BR F' R' BR'",
    "F L BL F' L' B L' B' L' F BL' L' F'",
    "BL B BR BL' B' R B' R' B' BL BR' B' BL'"
  ],
  37: [
    "L' D BR D' BR' D' L' D BR D BR' D' L'",
    "B' D F D' F' D' B' D F D F' D' B'",
    "R' D BL D' BL' D' R' D BL D BL' D' R'",
    "BR' L' D BR' L B' L' B BR L' D' BR L'",
    "F' B' D F' B R' B' R F B' D' F B'",
    "BL' R' D BL' R L' R' L BL R' D' BL R'"
  ],
  38: [
    "L BL L BR' D' L' U L D L' U' BR BL' L'",
    "L' B L' D L D' BL' L' D L D' BL L B'",
   "B' R B' D B D' BR' B' D B D' BR B R'",
   "R' L R' D R D' F' R' D R D' F R L'",
   "B L' B' BL L' D L D' L B' L' B BL' L",
   "R B' R' BR B' D B D' B R' B' R BR' B"
  ],
  39: [
    "R B' R' B U R B F D' B D B F' R'",
    "L R' L' R U L R BL D' R D R BL' L'",
    "B L' B' L U B L BR D' L D L BR' B'",
    "R' D' BL D R' D' BL' D R' U' B L' B' L",
    "L' D' BR D L' D' BR' D L' U' R B' R' B",
    "B' D' F D B' D' F' D B' U' L R' L' R"
  ],
  40: [
    "L BR' D L BR' B' L B L' BR D' L BR",
    "R' L' BL D R' D' R D R' D' R' BL' L",
    "L' B' BR D L' D' L D L' D' L' BR' B",
    "B' R' F D B' D' B D B' D' B' F' R",
    "R' U D L' D L U' D R' D' R D R",
    "L' U D B' D B U' D L' D' L D L"
  ],
  41: [
    "B' R B U' B' R' F BR' F' R F BR B F'",
    "R' L R U' R' L' BL F' BL' L BL F R BL'",
    "L' B L U' L' B' BR BL' BR' B BR BL L BR'",
    "B' R B R' U B D F' D' B D F D' B",
    "R' L R L' U R D BL' D' R D BL D' R",
    "L' B L B' U L D BR' D' L D BR D' L"
  ],
  42: [
    "B' R B BR' R D' R' D R' B R B' BR R'",
    "R' L R F' L D' L' D L' R L R' F L'",
    "L' B L BL' B D' B' D B' L B L' BL B'",
    "R' L R' D R D' F D R' D' R F' R L'",
    "L' B L' D L D' BL D L' D' L BL' L B'",
    "B' R B' D B D' BR D B' D' B BR' B R'"
  ],
  43: [
    "L' B BL F' D B D' B' F BL' L B'",
    "B' R BR BL' D R D' R' BL BR' B R'",
    "R' L F BR' D L D' L' BR F' R L'",
    "L U R L' B L' B' L R' L U' L'",
    "B U L B' R B' R' B L' B U' B'",
    "R U B R' L R' L' R B' R U' R'"
  ],
  44: [
    "BR' F' B' U' B' D' B U B' D F B' BR",
    "F' BL' R' U' R' D' R U R' D BL R' F",
    "R' U' D' F' D' B' D F D' B U D' R",
    "L' U' D' BL' D' R' D BL D' R U D' L",
    "B' U' D' BR' D' L' D BR D' L U D' B",
    "D B F U' R U B' U' R' U F' U D'"
  ],
  45: [
    "L BL L BL' L' R' L BL L' R BL' L'",
    "B BR B BR' B' L' B BR B' L BR' B'",
    "R F R F' R' B' R F R' B F' R'",
    "R D' R D R' U R D' R' U' D R'",
    "L D' L D L' U L D' L' U' D L'",
    "B D' B D B' U B D' B' U' D B'"
  ],
  46: [
    "L' U' R' D R U' R D' R' U' L",
    "B' U' L' D L U' L D' L' U' B",
    "R B D' F D' B D F' D B R'",
    "L R D' BL D' R D BL' D R L'",
    "B L D' BR D' L D BR' D L B'",
    "BR' U D L' D L U' L D' L' D' BR"
  ],
  47: [
    "B L' B' L U' B BR' B L' B' BR B' L",
    "R B' R' B U' R F' R B' R' F R' B",
    "L R' L' R U' L BL' L R' L' BL L' R",
    "L R' F R' D R D' R F' L' R U' R'",
    "B L' BL L' D L D' L BL' B' L U' L'",
    "R B' BR B' D B D' B BR' R' B U' B'"
  ],
  48: [
    "R U' R L' R' U D R' U' R' D' R L",
    "L U' L B' L' U D L' U' L' D' L B",
    "B R D' R' U' R' U D R' B' R U' R",
    "R L D' L' U' L' U D L' R' L U' L",
    "L B D' B' U' B' U D B' L' B U' B",
    "B U' D R D R U D B' U' D R D'"
  ],
  49: [
    "D' B F' D' B' U B' D B U' F D",
    "BR D L' D' BR' R BL' B' R' B BL L",
    "F D B' D' F' L BR' R' L' R BR B",
    "BL D R' D' BL' B F' L' B' L F R",
    "R' U F' R B' R' F R' B R U' R",
    "L' U BL' L R' L' BL L' R L U' L"
  ],
  50: [
    "BR' R L R' L' R U L R' L' R U' R' BR",
    "F' L B L' B' L U B L' B' L U' L' F",
    "BL' B R B' R' B U R B' R' B U' B' BL",
    "B L' B' L B L' BL D L' D' L BL' B' L",
    "R B' R' B R B' BR D B' D' B BR' R' B",
    "L R' L' R L R' F D R' D' R F' L' R"
  ],
  51: [
    "BR' R U' R' L R L' U R' BR L R' L' R",
    "F' L U' L' B L B' U L' F B L' B' L",
    "BL' B U' B' R B R' U B' BL R B' R' B",
    "R' U' R L' R B' R' B R' L U L R L'",
    "L' U' L B' L R' L' R L' B U B L B'",
    "B' U' B R' B L' B' L B' R U R B R'"
  ],
  52: [
    "BR' F R' L' B L B' L R' L' R' F' BR",
    "F' BL L' B' R B R' B L' B' L' BL' F",
    "R' U L' D' L' D R' D R D' L' U' R",
    "L' U B' D' B' D L' D L D' B' U' L",
    "B' U R' D' R' D B' D B D' R' U' B",
    "BL' BR B L R' L' R L' B L B BR' BL"
    ],
  53: [
    "B BL' F' B BR D' B' D B BR' F B' BL B'",
    "R BR' BL' R F D' R' D R F' BL R' BR R'",
    "BL' B' BL F U R' B' R B U' F' BL' B BL",
    "BR' R' BR BL U L' R' L R U' BL' BR' R BR",
    "F' L' F BR U B' L' B L U' BR' F' L F",
    "D' BR' F L' D' L D L' D' L D F' BR D"
  ],
  54: [
    "F L' D R D L D L' R' L F'",
    "BL B' D L D B D B' L' B BL'",
    "BR R' D B D R D R' B' R BR'",
    "D' BR' L F D' L D L' F' BR L' D",
    "D' F' B BL D' B D B' BL' F B' D",
    "D' BL' R BR D' R D R' BR' BL R' D"
  ],
  55: [
    "D F BL B L B' BR B' L' B BR' BL' F' U' D'",
    "B L' B' L U' F' L' R' L BL L' R L BL' F",
    "R B' R' B U' BL' B' L' B BR B' L B BR' BL",
    "L R' L' R U' BR' R' B' R F R' B R F' BR",
    "B' L' B BR B' L B D L D' BR' D L' U' D'",
    "R' B' R F R' B R D B D' F' D B' U' D'"
  ],
  56: [
    "L' U B L F' BL F L' F' BL' F B'",
    "B' U R B BL' BR BL B' BL' BR' BL R'",
    "D B' D F' D' B' D F D' B' U' D'",
    "D R' D BL' D' R' D BL D' R' U' D'",
    "D L' D BR' D' L' D BR D' L' U' D'",
    "R F U R D R' U' R D' R' F' R'"
  ],
  57: [
    "R' F R' B' R F' R B U' B' R B R'",
    "L' BL L' R' L BL' L R U' R' L R L'",
    "B' BR B' L' B BR' B L U' L' B L B'",
    "R' D' BL D' R' D' R D R' D BL' D R'",
    "L' D' BR D' L' D' L D L' D BR' D L'",
    "B' D' F D' B' D' B D B' D F' D B'"
  ],
  58: [
    "BL' BR B R' B' R BR R' B R B' BR BL",
    "BR' F R L' R' L F L' R L R' F BR",
    "B' F R' B R F' U F R' B' R B F'",
    "R' BL L' R L BL' U BL L' R' L R BL'",
    "L' BR B' L B BR' U BR B' L' B L BR'",
    "F L' D' L' D F D' L D L' F' L' F'"
  ],
  59: [
    "L D' BR D' L D' L' D L D BR' D L",
    "B D' F D' B D' B' D B D F' D B",
    "R D' BL D' R D' R' D R D BL' D R",
    "R' L' BL BR R L' R L R BR' BL' L R",
    "L' B' BR F L B' L B L F' BR' B L",
    "B' R' F BL B R' B R B BL' F' R B"
  ],
  60: [
    "D B' R' B R U' D' R D R D' R",
    "D R' L' R L U' D' L D L D' L",
    "D L' B' L B U' D' B D B D' B",
    "B' R B R' U' B R' L R L' R B' R'",
    "R' L R L' U' R L' B L B' L R' L'",
    "L' B L B' U' L B' R B R' B L' B'"
  ],
  61: [
    "L' B L B' U D BR' L R L' R' BR D'",
    "B' R B R' U D F' B L B' L' F D'",
    "R' L R L' U D BL' R B R' B' BL D'",
    "D' BL L' R' L R BL' U D B' R B R'",
    "D' BR B' L' B L BR' U D R' L R L'",
    "D' F R' B' R B F' U D L' B L B'"
  ],
  62: [
    "BR D' L' D' L U L' D L U' D BR'",
    "B' BR' L B L B' BR B L' B' L' B",
    "R' F' B R B R' F R B' R' B' R",
    "L' BL' R L R L' BL L R' L' R' L",
    "F' U' D B D B' U B D' B' D' F",
    "BL' U' D R D R' U R D' R' D' BL"
  ],
  63: [
    "R U F D' B' D F D' B D F U' R'",
    "F U' F D' B D F D' B' D F U F'",
    "BL U' BL D' R D BL D' R' D BL U BL'",
    "BR U' BR D' L D BR D' L' D BR U BR'",
    "R' L' R L BL F BL' L' R' L R BL F' BL'",
    "L' B' L B BR BL BR' B' L' B L BR BL' BR'"
  ],
  64: [
    "L U' BR' D R' D' R BR R' D R' D' R' U L'",
    "B U' F' D L' D' L F L' D L' D' L' U B'",
    "R U' BL' D B' D' B BL B' D B' D' B' U R'",
    "B L' B' L' B L' B' U BL D' R D' R' D' BL'",
    "R B' R' B' R B' R' U BR D' L D' L' D' BR'",
    "L R' L' R' L R' L' U F D' B D' B' D' F'"
  ],
  65: [
    "B BL' D L' F' D F L' D' L' BL D' B'",
    "R BR' D B' BL' D BL B' D' B' BR D' R'",
    "L F' D R' BR' D BR R' D' R' F D' L'",
    "L R' L' R BL' D' R D R' B R' B' R BL",
    "B L' B' L BR' D' L D L' R L' R' L BR",
    "R B' R' B F' D' B D B' L B' L' B F"
  ],
  66: [
    "B R B' BL' D' R D R BL B R B R' B",
    "R L R' BR' D' L D L BR R L R L' R",
    "L B L' F' D' B D B F L B L B' L",
    "L U D L D' L' U' D R' D' L' D' R D",
    "B U D B D' B' U' D L' D' B' D' L D",
    "R U D R D' R' U' D B' D' R' D' B D"
  ],
  67: [
    "R F' R' F R' B' R F' R F B R'",
    "L BL' L' BL L' R' L BL' L BL R L'",
    "R U' F D' B D F' D B' U D' R'",
    "L U' BL D' R D BL' D R' U D' L'",
    "B U' BR D' L D BR' D L' U D' B'",
    "L' B F L F' L B' L' F L' F' L"
  ],
  68: [
    "R' B' D B U B U' D' B R B' U B'",
    "L' R' D R U R U' D' R L R' U R'",
    "B' U' B' BR' B U B U' B' BR R B R'",
    "R' U' R' F' R U R U' R' F L R L'",
    "L' U' L' BL' L U L U' L' BL B L B'",
    "F' R L R B F L' B' L F' L' R F"
  ],
  69: [
    "B' R BR D B' BL B BL' D' B BR' R'",
    "R' L F D R' BR R BR' D' R F' L'",
    "L' B BL D L' F L F' D' L BL' B'",
    "R' F' L D' BL' L BL L' D F R L'",
    "L' BL' B D' BR' B BR B' D BL L B'",
    "B' BR' R D' F' R F R' D BR B R'"
  ],
  70: [
    "BR BL' D' L' R L R' L D' L' D' BL BR'",
    "F BR' D' B' L B L' B D' B' D' BR F'",
    "BL F' D' R' B R B' R D' R' D' F BL'",
    "L U' R D R D' L D' L' D R U L'",
    "B U' L D L D' B D' B' D L U B'",
    "R U' B D B D' R D' R' D B U R'"
  ],
  71: [
    "L D BR' R' D' R L D BR D' L",
    "F' R L R' B' R' B R' L' R' F",
    "BL' L B L' R' L' R L' B' L' BL",
    "BR' B R B' L' B' L B' R' B' BR",
    "R U' L R L' B' R B R U R'",
    "L U' B L B' R' L R L U L'"
  ],
  72: [
    "B R' BR R' L R' L' R' BR' R B'",
    "R L' F L' B L' B' L' F' L R'",
    "L B' BL B' R B' R' B' BL' B L'",
    "R' D' L' D R U' B L B' L' U L",
    "L' D' B' D L U' R B R' B' U B",
    "B' D' R' D B U' L R L' R' U R"
  ],
  73: [
    "D' R' L R BR' R L' R' BR U D",
    "L R' U' R D R' U R' D' R' L'",
    "B L' U' L D L' U L' D' L' B'",
    "R B' U' B D B' U B' D' B' R'",
    "D' BR B' L' B BR' B L B' U' D",
    "D' F R' B' R F' R B R' U' D"
  ],
  74: [
    "R B' R' B U R L R L' R B' R' B R",
    "L R' L' R U L B L B' L R' L' R L",
    "L' B' BL L' D L D' BL' L B L' B L B'",
    "B' R' BR B' D B D' BR' B R B' R B R'",
    "R' L' F R' D R D' F' R L R' L R L'",
    "BR' L R L' R' L D' L' U L' D L U' BR"
  ],
  75: [
    "B' D' B R B' R' B U' R B' R' D B",
    "R' D' R L R' L' R U' L R' L' D R",
    "B BL' B R B' BL B' R' U R' L R L'",
    "R BR' R L R' BR R' L' U L' B L B'",
    "L F' L B L' F L' B' U B' R B R'",
    "B D' L' B' L U' B L' B' L B D B'"
  ],
  76: [
    "F BL F' L' R L R' F R L' R' L BL' F'",
    "BL BR BL' B' L B L' BL L B' L' B BR' BL'",
    "BR F BR' R' B R B' BR B R' B' R F' BR'",
    "D BL' D L D L' D BL' D' L D L' BL' D'",
    "D BR' D B D B' D BR' D' B D B' BR' D'",
    "D F' D R D R' D F' D' R D R' F' D'"
  ],
  77: [
    "B L' B' L BR D L D' BR D' L' D BR",
    "R B' R' B F D B D' F D' B' D F",
    "L R' L' R U' R BR' R L R' BR R' L'",
    "B L' B' L U' L F' L B L' F L' B'",
    "R B' R' B U' B BL' B R B' BL B' R'",
    "L R' L' R U R' L' BL L' R L BL' L"
  ],
  78: [
    "D L D' BR D L D' BR' D L U' D'",
    "R' D' R B' R' F R B R' F' D R",
    "L' D' L R' L' BL L R L' BL' D L",
    "B' D' B L' B' BR B L B' BR' D B",
    "D' B D' F D B D' F' D B U D",
    "D' R D' BL D R D' BL' D R U D"
  ],
  79: [
    "L R' L' R U R B' BR D B' D' B BR' B R'",
    "B L' B' L U L R' F D R' D' R F' R L'",
    "R B' R' B U B L' BL D L' D' L BL' L B'",
    "L U L' R' L R U' L' R BL D' R D R BL'",
    "B U B' L' B L U' B' L BR D' L D L BR'",
    "R U R' B' R B U' R' B F D' B D B F'"
  ],
  80: [
    "R F' R' F R' B' R F' R' B R' F R'",
    "L BL' L' BL L' R' L BL' L' R L' BL L'",
    "B BR' B' BR B' L' B BR' B' L B' BR B'",
    "B F' BL' B' L B L' BL B F R B R'",
    "R BL' BR' R' B R B' BR R BL L R L'",
    "L BR' F' L' R L R' F L BR B L B'"
  ],
  81: [
    "D BR' D' BL D R' D' BL' D R BR U' D'",
    "D F' D' BR D L' D' BR' D L F U' D'",
    "BR' U' D' L D L' U BR U' R' L' R L",
    "F' U' D' B D B' U F U' L' B' L B",
    "BL' U' D' R D R' U BL U' B' R' B R",
    "L' B F BL' B R B' BL B R' B F' L"
  ],
  82: [
    "B' F L BR B R' B' R L' BR' F' R B R'",
    "R' BL B' F R L' R' L B F' BL' L R L'",
    "L' BR R' BL L B' L' B R BL' BR' B L B'",
    "B' F L' BR B R' B' R L BR' F' R B R'",
    "R' L R L' U R B' BR' R' BR B R' U R",
    "L' B L B' U L R' F' L' F R L' U L"
  ],
  83: [
    "L R BR R' L' R B R' B' R BR' D' R D R",
    "B L F L' B' L R L' R' L F' D' L D L",
    "B L' B' L U BL' BR' B L' B' BR B' L B BL",
    "R B' R' B U BR' F' R B' R' F R' B R BR",
    "L R' L' R U F' BL' L R' L' BL L' R L F",
    "B' D B F R' B' R B' F D B D' F D' B"
  ],
  84: [
    "B F' BL' R' B D' B' D BL R L B' L' F",
    "R BL' BR' L R D' R' D BR L' B R' B' BL",
    "L BR' F' B L D' L' D F B' R L' R' BR",
    "B F' BL' R B D' B' D BL R' L B' L' F",
    "D' L U D R U' L' U D' L' D R L R",
    "D' B U D L U' B' U D' B' D L B L"
  ],
  85: [
    "BR R' D L' D L D R BR' U B L' B' L",
    "F L' D B' D B D L F' U R B' R' B",
    "F' BR BL B' L B BR' B L' B' BR BL' BR' F",
    "BL' F BR R' B R F' R B' R' F BR' F' BL",
    "BR' BL F L' R L BL' L R' L' BL F' BL' BR",
    "BR' L B' F' L' R L R' B F BR R' L' R"
  ],
  86: [
    "R' L R D' B U R' L R L' U' B' D L'",
    "L' U' R' D R' D' R' U D BR' D' L D BR D'",
    "B' U' L' D L' D' L' U D F' D' B D F D'",
    "R' U' B' D B' D' B' U D BL' D' R D BL D'",
    "BR R' BR R L R' BR' R BR' L' U' R' L R L'",
    "F L' F L B L' F' L F' B' U' L' B L B'"
  ],
  87: [
    "BL D R U D L D L' U' R' D R D' R' BL'",
    "BR D L U D B D B' U' L' D L D' L' BR'",
    "F D B U D R D R' U' B' D B D' B' F'",
    "R L U' L R L R' L U L' BL D R' D' BL'",
    "L B U' B L B L' B U B' BR D L' D' BR'",
    "B R U' R B R B' R U R' F D B' D' F'"
  ],
  88: [
    "B' R' D' R U R' D R U' B U L R' L' R",
    "R' L' D' L U L' D L U' R U B L' B' L",
    "L' B' D' B U B' D B U' L U R B' R' B",
    "B L D L' U' L D' L' U B' U' R' L R L'",
    "R B D B' U' B D' B' U R' U' L' B L B'",
    "L R D R' U' R D' R' U L' U' B' R B R'"
  ],
  89: [
    "BR' BL' L B' L' D' L D B L' BL BR",
    "D' B' BL B' F R' B R F' BL' B D",
    "D' R' BR R' BL L' R L BL' BR' R D",
    "D' L' F L' BR B' L B BR' F' L D",
    "B F D B D' B F' U' L' B L B'",
    "R BL D R D' R BL' U' B' R B R'"
  ],
  90: [
    "BL L' BR B' R' L R L' B L BR' BL'",
    "BR B' F R' L' B L B' R B F' BR'",
    "R' BL BR R' L D' L' D R BR' R BL'",
    "L' BR F L' B D' B' D L F' L BR'",
    "B' F BL B' R D' R' D B BL' B F'",
    "R' BR R' BL L D' L' D R BL' BR' R"
  ],
  91: [
    "R' U' L' R L R' BR R' L' R BR' L U R",
    "L' U' B' L B L' F L' B' L F' B U L",
    "B' U' R' B R B' BL B' R' B BL' R U B",
    "R' U' L R L' R' BR R' L R BR' L' U R",
    "L' U' B L B' L' F L' B L F' B' U L",
    "B' U' R B R' B' BL B' R B BL' R' U B"
  ],
  92: [
    "R' L R L' U L' BR' B' BR B L B' BR' B BR",
    "L' B L B' U B' F' R' F R B R' F' R F",
    "R' L F L' R L R' F R' D R D' F R L'",
    "L' B BL B' L B L' BL L' D L D' BL L B'",
    "B' R BR R' B R B' BR B' D B D' BR B R'",
    "BL' D' R D R' BL U B L' B' L B' R' B R"
  ],
  93: [
    "BR' R U L' B L B' U L' B L B' U R' BR",
    "F' L U B' R B R' U B' R B R' U L' F",
    "BL' B U R' L R L' U R' L R L' U B' BL",
    "R F' U L' B L B' U L' B L B' U F R'",
    "L BL' U B' R B R' U B' R B R' U BL L'",
    "B BR' U R' L R L' U R' L R L' U BR B'"
  ],
  94: [
    "B' BL B L' BL' L B' L' B BL B' L BL' B",
    "R' BR R B' BR' B R' B' R BR R' B BR' R",
    "L' F L R' F' R L' R' L F L' R F' L",
    "R L U R' BR R' L R BR' R L' U' L' R'",
    "L B U L' F L' B L F' L B' U' B' L'",
    "B R U B' BL B' R B BL' B R' U' R' B'"
  ],
  95: [
    "BL' D' L R' L' R D BL U' BL' R B' R' B BL",
    "BR' D B L' B' L D' BR U' BR' L R' L' R BR",
    "F' D R B' R' B D' F U' F' B L' B' L F",
    "BL' D L R' L' R D' BL U' BL' R B' R' B BL",
    "BR U' L D L' U L' D' BR' L U B L' B' L",
    "F U' B D B' U B' D' F' B U R B' R' B"
  ],
  96: [
    "F R' B' R L BR' B R' B' R L' BR B F'",
    "BR' BL L' R U L R' L' R U' L R' BL' BR",
    "F' BR B' L U B L' B' L U' B L' BR' F",
    "BL' F R' B U R B' R' B U' R B' F' BL",
    "R' B' U' B' R F R' B R F' R' U B R",
    "L' R' U' R' L BL L' R L BL' L' U R L"
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
     "R B' BR' D' L' U L D' L' U' L D' BR R' B",
     "L R' F' D' B' U B D' B' U' B D' F L' R",
     "L' B BL L R' BR R L R' BR' R L BL' L B'",
     "B' R BR B L' F L B L' F' L B BR' B R'",
     "R' L F R B' BL B R B' BL' B R F' R L'",
     "D' BL D' B' D B BL' U BL' B' R B R' BL D"
     ],
   170: [
     "F L B' D' R D B R' L F' R' F L F' R",
     "BL B R' D' L D R L' B BL' L' BL B BL' L",
     "BR B' L' B L R' B R' B' R BR' B' BR R BR' B",
     "F R' B' R B L' R L' R' L F' R' F L F' R",
     "BL L' R' L R B' L B' L' B BL' L' BL B BL'",
     "F BR D L' D' BR D L D' BR F' U L' B L B'"
     ],
   171: [
     "F' R' B D L' D' B' L R' F L F' R' F L'",
     "BL' L' R D B' D' R' B L' BL B BL' L' BL B'",
     "BR' B' L D R' D' L' R B' BR R BR' B' BR R'",
     "R' U' R' F' U F R' F' L' B L B' U' F R'",
     "L' U' L' BL' U BL L' BL' B' R B R' U' BL L'",
     "B' U' B' BR' U BR B' BR' R' L R L' U' BR B'"
     ],
   172: [
     "B L' R' BL' F L' B' L F' B R BL B' L",
     "R B' L' BR' BL B' R' B BL' R L BR R' B",
     "B L' R' BL' F L' B' L B F' R BL B' L",
     "R B' L' BR' BL B' R' B R BL' L BR R' B",
     "L R' B' F' BR R' L' R L BR' B F L' R",
     "R B' BR' L' BL B' R' B R BL' BR L R' B"
     ],
   173: [
     "D' L BL' U' B L' B' L U BL L B L B' D",
     "R BL U L D' L' U' D R' BL' U B' R B R'",
     "L BR U B D' B' U' D L' BR' U R' L R L'",
     "B F U R D' R' U' D B' F' U L' B L B'",
     "L R' L' R U BR' L R L' R' BR U' L' B L B'",
     "B L' B' L U F' B L B' L' F U' B' R B R'"
     ],
   174: [
     "BR B' U' B L' B' L U L' B L BR' R' L R L'",
     "F' L B L' BL B' L B L' BL' B' F R B' R' B",
     "BL' B R B' BR R' B R B' BR' R' BL L R' L' R",
     "BR' R L R' F L' R L R' F' L' BR B L' B' L",
     "BR' R L R' F L' R L R' F' BR L' B L' B' L",
     "F' L B L' BL B' L B L' BL' F B' R B' R' B",
     ],
   175: [
     "L' B BL' R' D L' F' D' L R B' L",
     "B L F L' B' L F' L' U L' B L B'",
     "R B BL B' R' B BL' B' U B' R B R'",
     "L R BR R' L' R BR' R' U R' L R L'",
     "R BR R' L R BR' R' L' U' R B' R' B",
     "L F L' B L F' L' B' U' L R' L' R"
     ],
   176: [
     "B BL B' R B BL' B' R' U' B' R B R'",
     "B' R' F' R B R' F R U' R' L R L'",
     "R' L' BL' L R L' BL L U' L' B L B'",
     "L' B' BR' B L B' BR B U' B' R B R'",
     "R BL D R D' BL' L' BL' L R L' BL L",
     "L BR D L D' BR' B' BR' B L B' BR B"
     ],
   177: [
     "L R BR R' L' R BR' R' U R B' R' B",
     "R B' R' B F' L' F' R F L F' R' F'",
     "L R' L' R BL' B' BL' L BL B BL' L' BL'",
     "B L' B' L BR' R' BR' B BR R BR' B' BR'",
     "B L' D R BL D' B BR L B D R' D'",
     "R B' D L BR D' R F B R D L' D'"
     ],
   178: [
     "B L' B' L U' L F L' B L F' L' B'",
     "R B' R' B U' B BL B' R B BL' B' R'",
     "L R' L' R U' R BR R' L R BR' R' L'",
     "B F' BL' L' B' L' B L' BL L' B' L F",
     "R BL' BR' B' R' B' R B' BR B' R' B BL",
     "L BR' F' R' L' R' L R' F R' L' R BR"
     ],
   179: [
     "L' B BL B BL B' L U L' BL' L B'",
     "BR' B L' B' BL B R' B' R BL' BR L",
     "F' R B' R' BR R L' R' L BR' F B",
     "BL' L R' L' F L B' L' B F' BL R",
     "B' R' F D B' D B D' B' D' B' F' R",
     "R' L' BL D R' D R D' R' D' R' BL' L"
     ],
   180: [
     "F' L' F' R F L F' R' B F' L' B' L",
     "BL' B' BL' L BL B BL' L' R BL' B' R' B",
     "BR' R' BR' B BR R BR' B' L BR' R' L' R",
     "L' R D R' D BL B D' B' D BL' D L",
     "B' L D L' D BR R D' R' D BR' D B",
     "R' B D B' D F L D' L' D F' D R"
     ]
   
};
