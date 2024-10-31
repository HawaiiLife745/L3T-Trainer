const timesArrayKey = "pllTimesArray";
const selectionArrayKey = "pllSelection";

var selCases = [];

var algsGroups = {
    "Even OLP 1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "Odd OLP 1": [10, 11, 12],
    "Even OLP 2": [13, 14, 15, 16, 17, 18, 19, 20, 21],
    "Odd OLP 2": [22, 23, 24],
    "Even OLP 3": [25, 26, 27, 28, 29, 30, 31, 32, 33],
    "Odd OLP 3": [34, 35, 36, 37, 38, 39, 40, 41, 42],
    "Even OLP 4a": [43, 44, 45, 46, 47, 48, 49, 50, 51],
    "Odd OLP 4a": [52, 53, 54, 55, 56, 57, 58, 59, 60],
    "Even OLP 4b": [61, 62, 63, 64, 65, 66, 67, 68, 69],
    "Odd OLP 4b": [70, 71, 72, 73, 74, 75, 76, 77, 78],
    "Even OLP 4c": [79, 80, 81, 82, 83, 84, 85, 86, 87],
    "Odd OLP 4c": [88, 89, 90, 91, 92, 93, 94, 95, 96],
    "Even OLP 5": [97, 98, 99, 100, 101, 102, 103, 104, 105],
    "Odd OLP 5": [106, 107, 108, 109, 110, 111, 112, 113, 114],
    "Even OLP 6a": [115, 116, 117, 118, 119, 120, 121, 122, 123],
    "Odd OLP 6a": [124, 125, 126, 127, 128, 129, 130, 131, 132],
    "Even OLP 6b": [133, 134, 135, 136, 137, 138, 139, 140, 141],
    "Odd OLP 6b": [142, 143, 144, 145, 146, 147, 148, 149, 150],
    "Even OLP 6c": [151, 152, 153, 154, 155, 156, 157, 158, 159],
    "Odd OLP 6c": [160, 161, 162, 163, 164, 165, 166, 167, 168],
    "Even OLP 7": [169, 170, 171],
    "Odd OLP 7": [172, 173, 174],
    "Even OLP 8": [175, 176, 177],
    "Odd OLP 8": [178, 179, 180]


};

var algsInfo = {
    "1": {
        "name": "1.E.1",
        "a": [
            "Skip"
        ],
        "s": "solved"
    },
    "2": {
        "name": "1.E.2",
        "a": [
            "{L, F} R’ U R’ D’ R U’ R’ D R’"
        ],
        "s": "R U2 R2' U2 R U2' R U' R' U2' R' U2 R2 U' R'"
    },
    "3": {
        "name": "1.E.3",
        "a": [
            "{L, F} R D’ R U R’ D R U’ R"
        ],
        "s": "B' R B U' B' R' B' R B' U B R' B'"
    },
    "4": {
        "name": "1.E.4",
        "a": [
            "{L, F} U’ Rs’ U’ R’ U Rs U’ R U’"
        ],
        "s": "B' R B R U' L R L' R' U B' R B"
    },
    "5": {
        "name": "1.E.5",
        "a": [
            "{L, F} U R’ U Rs’ U’ R U Rs U"
        ],
        "s": "B L' B' L' U R' L' R L U' B L' B'"
    },
    "6": {
        "name": "1.E.6",
        "a": [
            "{B, U} U' R U R {R, F} R' D R' U R D' R"
        ],
        "s": "L R' L' R' U' B' R' B' R B' U B R' B'"
    },
    "7": {
        "name": "1.E.7",
        "a": [
            "{B,U} R U' R' U' {U, BL} R D' R U' R' D R'"
        ],
        "s": "R L R' U' R L' R L R U L B L B'"
    },
    "8": {
        "name": "1.E.8",
        "a": [
            "{U, F} L R’ L’ R’ B’ R’ B"
        ],
        "s": "B R L B R B' R' L' R' B'"
    },
    "9": {
        "name": "1.E.9",
        "a": [
            "{U, F} B’ R B R L R L’"
        ],
        "s": "B R L R B R' B' L' R' B'"
    },
    "10": {
        "name": "1.O.1",
        "a": [
            "{B, BR} Rw U R' U' Rs' U R U' R'"
        ],
        "s": "R B L' B' L R' U R L R L' R"
    },
    "11": {
        "name": "1.O.2",
        "a": [
            "{BL,F} R' U B' L R' L' R B U' R"
        ],
        "s": "R B' R B R U B R L R' L' B'"
    },
    "12": {
        "name": "1.O.3",
        "a": [
            "{BR,U} R U' L B' R B R' L' U R'"
        ],
        "s": "R' B R B' U B L R' L B' L R"
    },
    "13": {
        "name": "2.E.1",
        "a": [
            "{L, D} D' R' U' R' L R L' R B' R' B U R D",
            "{R, D} D' R' U' R B' R' B R' L R L' U R D"
        ],
        "s": "L B' R' B R' U L R' L' R U' R' B L' B'"
    },
    "14": {
        "name": "2.E.2",
        "a": [
            "{B, R} R' U R' U' R D R' U R D' U' R",
            "{U, BR} S U S U S U S"
        ],
        "s": "B R L B' U' R' U B' U' R U B' L' R' B'"
    },
    "15": {
        "name": "2.E.3",
        "a": [
            "{L, B} R' U D R' U' R D' R' U R U' R",
            "{U, BL} S' U' S' U' S' U' S'"
        ],
        "s": "B L' R B' U L' U' B' U L U' B' R' L B'"
    },
    "16": {
        "name": "2.E.4",
        "a": [
            "{R, BR} D' Rw U R' U' R BR' R' U R U' BR Rw' D",
            "{U, F} U S' U S U' S U S' U"
        ],
        "s": "R' L R L U L' U' B' U L U' B' L B'"
    },
    "17": {
        "name": "2.E.5",
        "a": [
            "{B, BL} D' Rw U R' U' R BR R' U R U' BR' Rw' D"
        ],
        "s": "L R' L' R' U' R U B U' R' U B R' B"
    },
    "18": {
        "name": "2.E.6",
        "a": [
            "{U, F} R' U' R' L R L' U R L R' L' B' R B",
            "(F' R U2 R' U F R U' R' U R' F' R U' R U2' R' F)"
        ],
        "s": "B' R' B L R L' R' U' L R' L' R U R"
    },
    "19": {
        "name": "2.E.7",
        "a": [
            "{B,U} R U' BR' U R' U' R BR' U R' U' R BR' R' U",
            "{U, BL} S' U' S' U' S' U' Uo' S"
        ],
        "s": "R B' R' B' L U' B U L' U' B' U L' B' L"
    },
    "20": {
        "name": "2.E.8",
        "a": [
            "{L, U} U' R BR R' U R U' BR R' U R U' BR U R'",
            "{U, BR} S U S U S U H"
        ],
        "s": "L' B L B R' U B' U' R U B U' R B R'"
    },
    "21": {
        "name": "2.E.9",
        "a": [
            "{U,BL} R U R B' R' B U' R B' R' B L R L' R",
            "{U,BL} R U R B' R' B U' {R, B} Rw' U' Rw U' Rw' U Rw"
        ],
        "s": "B L B' R' L' R L U R' L R L' U' L'"
    },
    "22": {
        "name": "2.O.1",
        "a": [
            "[U] {R, BL} Rw' U R U' R' Rw BR U R' U' R",
            "{U, BL} H U S' U' S'"
        ],
        "s": "L B' R B R' L' B' U L' U' B U L"
    },
    "23": {
        "name": "2.O.2",
        "a": [
            "[U] {U, BL} H U' S U S",
            "{BL, F} B R' U' (R' L R L') U B' R"
        ],
        "s": "B' U' R' B' U' B' R B R' U B R U B"
    },
    "24": {
        "name": "2.O.3",
        "a": [
            "[U'] {U, BL} S' U' S' U H'",
            "[U'] {U, F} S U H U' H",
            "[U] {BL, F} R' B U' (L R' L' R) U R B'"
        ],
        "s": "B U L B U B L' B' L U' B' L' U' B'"
    },
    "25": {
        "name": "3.E.1",
        "a": [
            "[U] {L, F} R U R' U' Rw R' U R U' Rw'"
        ],
        "s": "B L' U' B L' B' U R U' L U R' L B'"
    },
    "26": {
        "name": "3.E.2",
        "a": [
            "[U'] {U, BR} H U' S'"
        ],
        "s": "B' U B' L' B U' R B R' U B L B'"
    },
    "27": {
        "name": "3.E.3",
        "a": [
            "[U] {U, BR} S U H'"
        ],
        "s": "B U' B R B' U L' B' L U' B' R' B"
    },
    "28": {
        "name": "3.E.4",
        "a": [
            "[U] H' U S'"
        ],
        "s": "R' L R L U' B' U L' B' L' B U' B"
    },
    "29": {
        "name": "3.E.5",
        "a": [
            "[U'] {U, BR} S U' H"
        ],
        "s": "L R' L' R' U B U' R B R B' U B'"
    },
    "30": {
        "name": "3.E.6",
        "a": [
            "[U] {U, BR} H U H",
            "[U] {U, BL} S' U S'"
        ],
        "s": "L R' L' R U' L B' R B R' B L' B'"
    },
    "31": {
        "name": "3.E.7",
        "a": [
            "[U'] {U, BR} S U' S"
        ],
        "s": "R' L R L' U L B' R B R' B L' B'"
    },
    "32": {
        "name": "3.E.8",
        "a": [
            "[U'] {B,U} U' R' D R' U R D' R U' R U R'",
            "[U'] {R,BR} R' U R U' R D' R U R' D R' U'"
        ],
        "s": "R' L R L' B U' R B R' B' U B'"
    },
    "33": {
        "name": "3.E.9",
        "a": [
            "[U] {L,U} R U' R' U R' D R' U' R D' R U",
            "[U] {B,BL} U R D' R U' R' D R' U R' U' R",
            "[U'] {B, U} U' R' D R' U R D' R {U, BL} U R' U' R"
        ],
        "s": "L R' L' R B' U L' B' L B U' B"
    },
    "34": {
        "name": "3.O.1",
        "a": [
            "[U] {R, U} U' R BR' U R' U' R BR' U R' U' R BR' U R'",
            "[U] {BL,F} R L' R' U R D' R' U' D BR' R' L R"
        ],
        "s": "R' B L R L' B' U' B R' L' B' L R"
    },
    "35": {
        "name": "3.O.2",
        "a": [
            "{B,U} U R BR' R' U' R U BR R' U'",
            "[U] {L,F} U R D R' U' R D' R' U R' U' R"
        ],
        "s": "R L B U B' R' B R U' B' L' R'"
    },
    "36": {
        "name": "3.O.3",
        "a": [
            "{R,D} R U R' U Rw BR Rw' U R U' R'"
        ],
        "s": "L' R' B' U' B L B' L' U B R L"
    },
    "37": {
        "name": "3.O.4",
        "a": [
            "[U] {R,BR} R' U' Rw R' U R U' Rw' R U",
            "[U] {R,U} U R Rw' U' R U R' Rw U' R'"
        ],
        "s": "R L' R' L' U R' B' R B U' R L' R'"
    },
    "38": {
        "name": "3.O.5",
        "a": [
            "{U, BL} S U S' U S"
        ],
        "s": "L U' L R' L R L' B L' B' U R' L' R"
    },
    "39": {
        "name": "3.O.6",
        "a": [
            "{B,BL} R D R' U R D' R U' R BR' U R' U' R",
            "{B,BL} U R' U' R BR' R D R' U R D' R U' R",
            "{L,F} R' U R U' BR' U Rw' R U' R' U Rw U'"
        ],
        "s": "L U' L R B' R' L' U R' L' R U' B"
    },
    "40": {
        "name": "3.O.7",
        "a": [
            "[U'] {L,U} R U Rw' R U' R' U Rw R' U'",
            "[U'] {L,F} U' R' Rw U R' U' R Rw' U R"
        ],
        "s": "L' R L R U' L B L' B' U L' R L"
    },
    "41": {
        "name": "3.O.8",
        "a": [
            "[U'] {R,BR} R' U R U' BR R' U R' D R' U' R D' R'",
            "[U] {B,BL} U Rw' U' R U R' Rw U' BR U R' U' R"
        ],
        "s": "R B R' U' B' R B' R' L' B' L U B'"
    },
    "42": {
        "name": "3.O.9",
        "a": [
            "{U, BR} S' U' S U' S'",
            "[U] {BR,F} D' B R' B' R Rw' B' R B R' Rw D"
        ],
        "s": "R' U R' L R' L' R B' R B U' L R L'"
    },
    "43": {
        "name": "4a.E.1",
        "a": [
            "{U,BL} R U B R' L R' L' R B' R U' R'",
            "[U'] {L,U} R U' BR Rw' R U R' U' Rw BR' R' U"
        ],
        "s": "L U R L' B L' B' L R' L U' L'"
    },
    "44": {
        "name": "4a.E.2",
        "a": [
            "[U] {B,L} Rw U' Rw' R BR R' Rw U Rw' R BR'",
            "{U,F} H U' S U' S"
        ],
        "s": "B L R' L' B' R U' R' B L R L' B'"
    },
    "45": {
        "name": "4a.E.3",
        "a": [
            "[U] {R,BR} U R D R' U' R D' R'",
            "[U] {L,U} R' D' R U' R' D R U"
        ],
        "s": "R D' R D R' U R D' R' U' D R' U'"
    },
    "46": {
        "name": "4a.E.4",
        "a": [
            "{R,U} Rw' R U' R' D R' U R D' Rw",
            "{U,BR} S' U S' U S'"
        ],
        "s": "R B D' F D' B D F' D B R' U'"
    },
    "47": {
        "name": "4a.E.5",
        "a": [
            "[U] {BL,F} B R' U R' L R L' U' B' R",
            "[U'] {U,F} L R' L' R U' R Rw' U' R B' R' B U Rw R'"
        ],
        "s": "L R' L' R U' B' U L' U' R B R' U L"
    },
    "48": {
        "name": "4a.E.6",
        "a": [
            "{U,BR} S' U' S' U' H'",
            "{U,F} H U' S U' H"
        ],
        "s": "B' U L' B L R' B' R U' L R' L' B R"
    },
    "49": {
        "name": "4a.E.7",
        "a": [
            "[U'] {L,F} Rw D R' U R D' R U' Rw' R'",
            "{U,F} H U' H U' S'",
            "{U,F} S U' H' U' H'"
        ],
        "s": "L R' L' R B' U B' L B L U' B U L"
    },
    "50": {
        "name": "4a.E.8",
        "a": [
            "{U,BL} H U S U S",
            "{U,F} H U S U H'",
            "{U,F} S U H' U S'",
            "{L,F} U R D R' U' R D' R' BR U R' U' R"
        ],
        "s": "R U' L R' L' R U' L R' L' B' R B U' R'"
    },
    "51": {
        "name": "4a.E.9",
        "a": [
            "[U] {F,BR} R' B U L R' L' R U' R B'"
        ],
        "s": "L B R' L' R U L B' L B' L B' U' B'"
    },
    "52": {
        "name": "4a.O.1",
        "a": [
            "(CIF) R' U R B' R B R' L R' L' U' R"
        ],
        "s": "R' U L R L' R B' R' B R' U' R"
    },
    "53": {
        "name": "4a.O.2",
        "a": [
            "[U] {U,BR} S' U H"
        ],
        "s": "D' BR' F D' L' D L F' BR U' D"
    },
    "54": {
        "name": "4a.O.3",
        "a": [
            "[U] {R,U} U' Rs U R U' Rw' U"
        ],
        "s": "F R' B L' B' L R F' U'"
    },
    "55": {
        "name": "4a.O.4",
        "a": [
            "[U] S U S'"
        ],
        "s": "BR D' R' D BR' D' R D R' BR R BR'"
    },
    "56": {
        "name": "4a.O.5",
        "a": [
            "[U] {L,U} R' Rw' U' R' U Rw U' R' U",
            "[U] {L,BL} U R' D R U R' D' R U"
        ],
        "s": "L' D' BR D L' D' BR' D L' U'"
    },
    "57": {
        "name": "4a.O.6",
        "a": [
            "[U'] {B,U} U' R BR' U R' U' R BR U R'"
        ],
        "s": "R B' BR' R' B R B' BR R' B U"
    },
    "58": {
        "name": "4a.O.7",
        "a": [
            "[U] {R,BR} L R' U R D' R U' R' D L'"
        ],
        "s": "R BL D R D' R' BL' B' R' B U'"
    },
    "59": {
        "name": "4a.O.8",
        "a": [
            "[U'] {R,U} R U' BR' R' U R U' BR R' U"
        ],
        "s": "R' L F' R L' R' L F R L' U"
    },
    "60": {
        "name": "4a.O.9",
        "a": [
            "[U] {U,BL} H' U S"
        ],
        "s": "L B L' B' U' R D R D' R U'"
    },
    "61": {
        "name": "4b.E.1",
        "a": [
            "{U,F} R' U' R L' R B' R' B R' L U R",
            "[U] {L,U} U' R BR Rw' U R U' Rw R' BR' U R'"
        ],
        "s": "D BL D R' D' R L' R L R' BL' D'"
    },
    "62": {
        "name": "4b.E.2",
        "a": [
            "[U'] {L,U} U' R' D' R U R' D R"
        ],
        "s": "B' BR' B L' B' BR B L U"
    },
    "63": {
        "name": "4b.E.3",
        "a": [
            "{U,BL} S U H U H",
            "[U] {L,BL} U' Rw' D R U' R' D' R U R' Rw U"
        ],
        "s": "L' U D' R U' D L U D' R' D U"
    },
    "64": {
        "name": "4b.E.4",
        "a": [
            "[U] {R,U] Rw' D' R U' R' D R' U Rw R"
        ],
        "s": "BR' L' D' L U' L D L' U BR U'"
    },
    "65": {
        "name": "4b.E.5",
        "a": [
            "U'] {U,BL} BLw L' U' H' U BLw' B"
        ],
        "s": "R' L F' L D' L' D F R L' U"
    },
    "66": {
        "name": "4b.E.6",
        "a": [
            "[U] S U' H U' H"
        ],
        "s": "R' L F D R' D' F' R L' U' R U"
    },
    "67": {
        "name": "4b.E.7",
        "a": [
            "{L,F} Rw R' U R D' R U' R' D Rw'"
        ],
        "s": "BL U' R D R' U R' D' R BL'"
    },
    "68": {
        "name": "4b.E.8",
        "a": [
            "{R,U} U' R U Rw' U' R' D R' U R D' Rw"
        ],
        "s": "BR' U L' D' L U' L D BR R' L' R"
    },
    "69": {
        "name": "4b.E.9",
        "a": [
            "[U'] B' BLw U' H U L BLw'"
        ],
        "s": "R B' BR' D' R D R' BR R' B U"
    },
    "70": {
        "name": "4b.O.1",
        "a": [
            "(R U R U R' U R' U R U' R U2' R' U2' R' U' R U2 R')",
            "(y2) (R' U2 R U' R' U2' R' U2' R U' R U R' U R' U R U R)"
        ],
        "s": "R U2' R2 U' R' U2' R2 U R2 U R' U' R2 U2 R2' U2' R2' U' R"
    },
    "71": {
        "name": "4b.O.2",
        "a": [
            "(R U2' R' U R U2 R U2 R' U R' U' R U' R U' R' U' R')",
            "(y2) (R' U' R' U' R U' R U' R' U R' U2 R U2 R U R' U2' R)"
        ],
        "s": "R' U2 R U' R' U2' R' U2' R U' R U R' U R' U R U R"
    },
    "72": {
        "name": "4b.O.3",
        "a": [
            "(R' U2' R U R' U R2 U2' R' U' R U R' U2' R U' R')"
        ],
        "s": "R U R' U2 R U' R' U R U2 R2' U' R U' R' U2 R"
    },
    "73": {
        "name": "4b.O.4",
        "a": [
            "(R U2 R' U' R U' R2' U2 R U R' U' R U2 R' U R)"
        ],
        "s": "R' U' R U2' R' U R U' R' U2' R2 U R' U R U2' R'"
    },
    "74": {
        "name": "4b.O.5",
        "a": [
            "(R U R' U2 R U' R' U R U2 R2' U' R U' R' U2 R)"
        ],
        "s": "R' U2' R U R' U R2 U2' R' U' R U R' U2' R U' R'"
    },
    "75": {
        "name": "4b.O.6",
        "a": [
            "(R' U' R U2' R' U R U' R' U2' R2 U R' U R U2' R')"
        ],
        "s": "R U2 R' U' R U' R2' U2 R U R' U' R U2 R' U R"
    },
    "76": {
        "name": "4b.O.7",
        "a": [
            "(R' U2 R U2 R' U' F R2 U R2' U R2 U2' R2' F' R)",
            "(y2') (R U R' U2' R' U2' R U R' U R2 U' R' U2 R U' R' U R U' R')",
            "(y) (R U R' U' R U R' U2' R U R2' U' R U' R' U2 R U2 R U' R')"
        ],
        "s": "R2 U R2 U' R2 U' R2' U2 R U R U2' R U' R2'"
    },
    "77": {
        "name": "4b.O.8",
        "a": [
            "(R U2 R' F' R U R' U' R' F R2 U2' R') ",
            "(y) (R U2 R2' F' R U R U' R' F R U2' R')",
            "(y2') (R U2 R U2' R' U' R U2' R' U2 R')"
        ],
        "s": "R U2 R U2' R' U2 R' U2 R U2' R U2 R' U2' R'"
    },
    "78": {
        "name": "4b.O.9",
        "a": [
            "(R' U2 R' U2' R U' R' U2' R U2 R)",
            "y2 (L' R' U2' R U' R' U2' R U' L)"
        ],
        "s": "R U R2' U2 R' U2' R2' U' R2' U R' U2 R U2' R"
    },
    "79": {
        "name": "4c.E.1",
        "a": [
            "(R L U2 L' U R' L U' R U2 L' U2 R')"
        ],
        "s": "R2' U2 R U2' R2 U2' R2' U2 R' U2' R U R2 U' R2' U' R"
    },
    "80": {
        "name": "4c.E.2",
        "a": [
            "(R' L' U2' R U' L R' U L' U2' R U2' L)",
            "(R' U2 R U2' R2' U' R2 U' R2' U R2 U' R2' U2 R U2' R)"
        ],
        "s": "R U' R2' U' R2 U R U2' R' U2 R2' U2' R2 U2' R U2 R2'"
    },
    "81": {
        "name": "4c.E.3",
        "a": [
            "Skip"
        ],
        "s": "solved"
    },
    "82": {
        "name": "4c.E.4",
        "a": [
            "(R' F R2 U R' U R U2' R' U R' F' R F U' F')"
        ],
        "s": "R' U2' R U' R' U2 R U2' R' U2' R2 U R' U2 R U2 R'"
    },
    "83": {
        "name": "4c.E.5",
        "a": [
            "(R' U2' F' U2 F R2 U2' R' F R' F' R2 U2 R')",
            "y2 (F R' U' R2 U' R2' U2 R U' F' R' U' F' U F R)"
        ],
        "s": "R U2 R' U R U2' R' U2 R U2 R2' U' R U2' R' U2' R"
    },
    "84": {
        "name": "4c.E.6",
        "a": [
            "(F U F' R' F R U' R U2 R' U' R U' R2' F' R)",
            "(F R U2 R' U' R U' R2' F' L F R F' L')"
        ],
        "s": "R U2' R' U2' R U' R2' U2 R U2 R' U2' R U R' U2 R"
    },
    "85": {
        "name": "4c.E.7",
        "a": [
            "(BR' R' U2' R U R' U R2 x' U L' U' R' U L)",
            "y' (R U2' R2' F R F' R U2 R2' F' U2' F U2 R)"
        ],
        "s": "R' U2 R U2 R' U R2 U2' R' U2' R U2 R' U' R U2' R'"
    },
    "86": {
        "name": "4c.E.8",
        "a": [
            "(F R U' R' U' R U R U2 R' U' R U' R2' F')"
        ],
        "s": "R' U2' R' U' R2 U2' R2' U R U' R U2 R' U2' R' U2' R2"
    },
    "87": {
        "name": "4c.E.9",
        "a": [
            "(BR' R' U R U R' U' R' U2' R U R' U R2 BR)"
        ],
        "s": "R U2 R U R2' U2 R2 U' R' U R' U2' R U2 R U2 R2'"
    },
    "88": {
        "name": "4c.O.1",
        "a": [
            "(F R2 U R' U R U2' R' U' R' U R U R' F')"
        ],
        "s": "R2' U2 R U2 R U2' R' U R' U' R2 U2 R2' U R U2 R"
    },
    "89": {
        "name": "4c.O.2",
        "a": [
            "(BR' R2' U' R U' R' U2 R U R U' R' U' R BR)"
        ],
        "s": "R2 U2' R' U2' R' U2 R U' R U R2' U2' R2 U' R' U2' R'"
    },
    "90": {
        "name": "4c.O.3",
        "a": [
            "(R2' U2 R2 U R2' U2 R2 U' R2' U2 R2 U R2' U2 R2)",
            "(R' U R U R' U2' R y U2' R U' R' U' R U2 R')",
            "(F' R' F U F' R F U R' U2 R U' R' U' R U2 R' U R)"
        ],
        "s": "R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U2' R2'"
    },
    "91": {
        "name": "4c.O.4",
        "a": [
            "(R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U2' R2')",
            "(R U' R' U' R U2 R' y' U2 R' U R U R' U2' R)"
        ],
        "s": "R2 U2 R2' U R2 U2 R2' U' R2 U2 R2' U R2 U2 R2'"
    },
    "92": {
        "name": "4c.O.5",
        "a": [
            "(R' U2' R U' R' U2' R2 U2' R' U' R U2' R')"
        ],
        "s": "R U2 R' U R U2 R' U' R' U2' R U' R' U2' R"
    },
    "93": {
        "name": "4c.O.6",
        "a": [
            "(R U2 R' U R U2 R2' U2 R U R' U2 R)"
        ],
        "s": "R' U2' R U' R' U2' R U R U2 R' U R U2 R'"
    },
    "94": {
        "name": "4c.O.7",
        "a": [
            "(R' U2 R U' R2' U2 R2 U R' U' R' U2' R U' R)"
        ],
        "s": "R2 U R2' U R2 U R2' U2 R2 U2 R2' U R2 U' R2'"
    },
    "95": {
        "name": "4c.O.8",
        "a": [
            "(R U2' R' U R2 U2' R2' U' R U R U2 R' U R')"
        ],
        "s": "R' U' R U R2 U2' R2' U' R' U R U' R2 U2' R2'"
    },
    "96": {
        "name": "4c.O.9",
        "a": [
            "(R' U R' U2 R U R U' R2' U2' R2 U R' U2' R)"
        ],
        "s": "R2 U R2' U' R2 U2' R2' U2' R2 U' R2' U' R2 U' R2'"
    },
    "97": {
        "name": "5.E.1",
        "a": [
            "(R U' R U2' R' U' R' U R2 U2 R2' U' R U2 R')"
        ],
        "s": "R U2' R' U R2 U2' R2' U' R U R U2 R' U R'"
    },
    "98": {
        "name": "5.E.2",
        "a": [
            "(R U R2' U R U R U' R' U' R U' R2' U' R U' R' U R)"
        ],
        "s": "R2 U2 R2' U R2 U' R2 U2' R2' U' R2 U2' R2' U2 R2'"
    },
    "99": {
        "name": "5.E.3",
        "a": [
            "(R' U' R2 U' R' U' R' U R U R' U R2 U R' U R U' R')"
        ],
        "s": "R2 U2' R2' U' R2 U R2 U2 R2' U R2 U2 R2' U2' R2'"
    },
    "100": {
        "name": "5.E.4",
        "a": [
            "(R' U' R U R' U R2 U R' U R U R' U' R' U' R2 U' R')"
        ],
        "s": "R2 U2' R2 U2 R2' U R2 U2 R2' U R2' U' R2 U2' R2'"
    },
    "101": {
        "name": "5.E.5",
        "a": [
            "(R U R' U' R U' R2' U' R U' R' U' R U R U R2' U R)"
        ],
        "s": "R2 U2 R2 U2' R2' U' R2 U2' R2' U' R2' U R2 U2 R2'"
    },
    "102": {
        "name": "5.E.6",
        "a": [
            "(R' U2' R U R' U R U R U2' R' U2' R U' R')"
        ],
        "s": "R U R' U2 R U2 R' U' R' U' R U' R' U2 R"
    },
    "103": {
        "name": "5.E.7",
        "a": [
            "(R' U' R U2' R' U2' R U R U R' U R U2' R')"
        ],
        "s": "R2 U' R2' U R2 U R2' U2' R2 U' R2' U2 R2 U R2'"
    },
    "104": {
        "name": "5.E.8",
        "a": [
            "(R2 U2' R2' U2' R2 U' R' U2 R' U' R' U2' R2 U R2' U R)"
        ],
        "s": "R2 U2' R2' U2' R2' U R' U' R2' U R2 U R U' R' U2' R2'"
    },
    "105": {
        "name": "5.E.9",
        "a": [
            "(R2' U2 R2 U2 R2' U R U2' R U R U2 R2' U' R2 U' R')"
        ],
        "s": "R2 U2 R2' U R' U' R U R2 U R2' U' R' U R2' U R2'"
    },
    "106": {
        "name": "5.O.1",
        "a": [
            "(R2 U2' R2' U' R F' R U R2' U' R' F R3 U2' R2')"
        ],
        "s": "R2 U2' R2' U2' R2 U' R' U2 R' U' R' U2' R2 U R2' U R"
    },
    "107": {
        "name": "5.O.2",
        "a": [
            "(R' U' R U' R2' F' R U R U' R' F U R U2' R' U2' R)",
            "y (R U R2' U R2 U2' R' U' R' U2 R' U' R2 U2' R2' U2' R2)"
        ],
        "s": "R2' U2 R2 U2 R2' U R U2' R U R U2 R2' U' R2 U' R'"
    },
    "108": {
        "name": "5.O.3",
        "a": [
            "(R2' U2' R2 U' R2' U2' R2 U R2' U2 R2 U R2' U2 R2)",
            "(y') (R2' U2 R2 U' bR2' U R2' U R2 U' bR2 R2' U2' R2)"
        ],
        "s": "R2 U2' R2' U' R2 U2' R2' U' R2 U2 R2' U R2 U2 R2'"
    },
    "109": {
        "name": "5.O.4",
        "a": [
            "(R2' U2 R2 U R2' U2 R2 U' R2' U2' R2 U' R2' U2' R2)",
            "(y) (R2 U2' R2' U F2 U' R2 U' R2' U F2' R2 U2 R2')"
        ],
        "s": "R2 U2 R2' U R2 U2 R2' U R2 U2' R2' U' R2 U2' R2'"
    },
    "110": {
        "name": "5.O.5",
        "a": [
            "(R' U2' R U' F U' R' U R U F' R' U2 R)",
            "(R' U2' R L U2' R' U R U2 L' U' R' U2 R)"
        ],
        "s": "R2' U2 R U R' U2 R U2 R U' R' U R U2 R' U2 R"
    },
    "111": {
        "name": "5.O.6",
        "a": [
            "(R U2 R' U BR' U R U' R' U' BR R U2' R')",
            "(F' R U2 R' U R' F R U' R U R' F' U' R U2' R' F)"
        ],
        "s": "R' U R U2' R2' U' R U2' R' U R U R' U R U R"
    },
    "112": {
        "name": "5.O.7",
        "a": [
            "(R U R U R' U R U R' U2' R U' R2' U2' R U R')"
        ],
        "s": "R U' R' U2 R2 U R' U2 R U' R' U' R U' R' U' R'"
    },
    "113": {
        "name": "5.O.8",
        "a": [
            "(R' U' R' U' R U' R' U' R U2 R' U R2 U2 R' U' R)",
            "(y2) (R U R2' F' R U2' R U2 R' F R U' R2' U' R U' R' U2 R)"
        ],
        "s": "R2 U2' R' U' R U2' R' U2' R' U R U' R' U2' R U2' R'"
    },
    "114": {
        "name": "5.O.9",
        "a": [
            "(R U R' U' R' F R2 U' R' U' R U R' F')"
        ],
        "s": "R2' U R U R U2 R' U2' R' U2 R U2 R' U' R2"
    },
    "115": {
        "name": "6a.E.1",
        "a": [
            "(R' U2' R U2 R' F R U R' U' R' F' R2)"
        ],
        "s": "R U' R U R' U' R' U R U2' R U2 R' U2 R' U' R U2 R'"
    },
    "116": {
        "name": "6a.E.2",
        "a": [
            "(R2' F R U R U' R' F' R U2' R' U2 R)",
            "(y) (R U2 R' U2' R bR' R' U' R U R bR R2')"
        ],
        "s": "R' U R' U' R U R U' R' U2 R' U2' R U2' R U R' U2' R"
    },
    "117": {
        "name": "6a.E.3",
        "a": [
            "(R2' U2 R2 U R2' U' R2 U R2' U2 R2)"
        ],
        "s": "R2 U R2' U2' R2 U R2' U' R2 U R2' U2' R2 U R2'"
    },
    "118": {
        "name": "6a.E.4",
        "a": [
            "(R2 U2' R2' U' R2 U R2' U' R2 U2' R2')"
        ],
        "s": "R2 U R2' U R2 U R2' U' R2 U' R2' U2 R2 U2 R2'"
    },
    "119": {
        "name": "6a.E.5",
        "a": [
            "(R U R' F' R U R' U' R' F R U' R' F R2 U' R' U' R U R' F')",
            "(y) (R U R' U2 R2 U2 R2' U R2 U2 R2' U' R U' R')",
            "(R U R' U R2 U2' R2' U' R2 U2' R2' U2' R U' R')"
        ],
        "s": "R U R' U R2 U2' R2' U' R2 U2' R2' U2' R U' R'"
    },
    "120": {
        "name": "6a.E.6",
        "a": [
            "(R' U' R U2' R2' U2' R2 U' R2' U2' R2 U R' U R)",
            "(y) (R' U' R U' R2' U2 R2 U R2' U2 R2 U2 R' U R)"
        ],
        "s": "R2 U' R2' U' R2 U2 R2' U R2 U2 R2' U2 R2 U R2'"
    },
    "121": {
        "name": "6a.E.7",
        "a": [
            "(R' U' R U' R U R2' U R U' R U' R')"
        ],
        "s": "R U R U R2' U R U' R U' R' U2 R' U' R U2' R'"
    },
    "122": {
        "name": "6a.E.8",
        "a": [
            "(R U R' U R' U' R2 U' R' U R' U R) "
        ],
        "s": "R U2 R' U2 R' U' R U' R U R2' U R U' R U2 R'"
    },
    "123": {
        "name": "6a.E.9",
        "a": [
            "(R U R' U2 R' U' R U' R U R2' U R U' R U2' R')",
            "(R' U2' R U' R U R2' U R U' R U' R' U2 R' U R)"
        ],
        "s": "R U2 R U R2' U R U' R U' R' U2 R' U' R U2 R'"
    },
    "124": {
        "name": "6a.O.1",
        "a": [
            "(R U2 R' U R' U' R2 U' R' U R' U R U2' R U' R')",
            "(R' U' R U2' R U R' U R' U' R2 U' R' U R' U2 R)"
        ],
        "s": "R U R' U2 R' U' R U' R U R2' U R U' R U2' R'"
    },
    "125": {
        "name": "6a.O.2",
        "a": [
            "(R' U2 R' dR' R U' R' dR R U R U' R' U' R)"
        ],
        "s": "R' U2' R U' R U R' U2 R U2 R' U2 R' U2' R"
    },
    "126": {
        "name": "6a.O.3",
        "a": [
            "(R U2 R2' F R F' R U' R' F' U F R U' R')",
            "(y2) (R U2' R' U2 R' U2 R U2 R' U R U' R U2' R')"
        ],
        "s": "R U2 R' U R' U' R U2' R' U2' R U2' R U2 R'"
    },
    "127": {
        "name": "6a.O.4",
        "a": [
            "(R' U R U R' U' R' dR' R U R' dR R U2' R)"
        ],
        "s": "R2 U2' R2' U2' R2' U R2' U R2 U2' R' U' R' U2 R'"
    },
    "128": {
        "name": "6a.O.5",
        "a": [
            "(R U' R' F U R U' R' F' R U R' F' U' F R U R')",
            "(R U' R' U' R U R' U R' DR' R U' R' DR R2 U R')",
            "(y') (R U R' F' U' F R U R' F R' F' R2 U2' R')"
        ],
        "s": "R2' U2 R2 U2 R2 U' R2 U' R2' U2 R U R U2' R"
    },
    "129": {
        "name": "6a.O.6",
        "a": [
            "(R U R2 U' R' U' R U R' U' R' U R2' U R U' R)",
            "y' (R' U2 R U' F R U R' U' R' F' U' R U R U' R')"
        ],
        "s": "R' U' R' U' R U' R2 U R2 U R U R U2' R U' R'"
    },
    "130": {
        "name": "6a.O.7",
        "a": [
            "(R' U2' R U R U' R' F R' U2 R U2' F' R U R')",
            "(y) (R' U' R2' U R U R' U' R U R U' R2 U' R' U R')"
        ],
        "s": "R U R U R' U R2' U' R2' U' R' U' R' U2 R' U R"
    },
    "131": {
        "name": "6a.O.8",
        "a": [
            "(R' U R' U' R2 U' R U R U' R' U R U R2' U' R')",
            "y' (R U R' U' R' U F R U R U' R' F' U R' U2' R)"
        ],
        "s": "R U R' U2 R' U' R' U' R2' U' R2' U R' U R U R"
    },
    "132": {
        "name": "6a.O.9",
        "a": [
            "(R U' R' F U2 R' U2' R F' R U R' U' R' U2 R)",
            "(y2') (R U' R U R2' U R' U' R' U R U' R' U' R2 U R)"
        ],
        "s": "R' U' R U2' R U R U R2 U R2 U' R U' R' U' R'"
    },
    "133": {
        "name": "6b.E.1",
        "a": [
            "(R' U2' R' U2 R U2 R U' R2' U2 R2 U2 R' U R)"
        ],
        "s": "R2 U2' R2' U' R2 U R2' U2 R2 U2 R2' U2 R2 U2' R2'"
    },
    "134": {
        "name": "6b.E.2",
        "a": [
            "(F U2 R U2' R' U R U R' U2' F' R' U' R U2' R' U2' R)"
        ],
        "s": "R U R U R2' U R U' R U' R2 U' R2 U' R2' U2 R U' R U' R'"
    },
    "135": {
        "name": "6b.E.3",
        "a": [
            "(F R U R' F U R' U' F' U R2 U2' R' F')"
        ],
        "s": "R2' U R2' U' R2' U' R U' R U R U R2 U R U2' R U' R2"
    },
    "136": {
        "name": "6b.E.4",
        "a": [
            "(R' U' R U' R' U2 R2 U R' U2 R' U2' R2 U' R' U2 R' U R)",
            "(y2') (R2 U R2' U R U2' R' U R' U2' R U R' U R2 U R U' R2')",
            "(y') (R U R2' U2 R2 U2 R2' y' R' U' R U2 R' U' R U bR)"
        ],
        "s": "R2 U2 R2' U R2 U2 R2' U2 R2 U2 R2' U2' R2 U R2' U2' R2 U2 R2'"
    },
    "137": {
        "name": "6b.E.5",
        "a": [
            "(R' U' R2 U' R' U R U' R2' U' R2 U R' U' R U R2' U2 R)"
        ],
        "s": "R' U2' R U R' U R U' R' U2' R U' R' U2 R U' R' U2 R"
    },
    "138": {
        "name": "6b.E.6",
        "a": [
            "(R' U R U2 R' U2 R U R2' U' R U' R' U' R U2 R' U R2)",
            "(y2) (R2 U R' U2 R U' R' U' R U' R2' U R U2 R' U2 R U R')"
        ],
        "s": "R U2' R2 U2 R2' U2 R U2' R U R U R2 U' R' U2 R2' U2 R'"
    },
    "139": {
        "name": "6b.E.7",
        "a": [
            "(R2' U' R U2' R' U R U R' U R2 U' R' U2' R U2' R' U' R)",
            "(y2') (R U' R' U2' R U2' R' U' R2 U R' U R U R' U2' R U' R2')"
        ],
        "s": "R' U2 R2' U2' R2 U2' R' U2 R' U' R' U' R2' U R U2' R2 U2' R"
    },
    "140": {
        "name": "6b.E.8",
        "a": [
            "(R' U2 R' U' R2 U' R' U' R U R' U R' U R2 U' R' U2' R)",
            "(y2') (F R U R' U' R U' R2' U' F' U' F U2 R U' R U R' F')"
        ],
        "s": "R' U' R U2' R' U R U' R' U2' R U' R' U2 R U2 R' U R"
    },
    "141": {
        "name": "6b.E.9",
        "a": [
            "(R U2' R U R2' U R U R' U' R U' R U' R2' U R U2 R')"
        ],
        "s": "R U R' U2 R U2 R' U' R U2' R' U' R U R' U2' R U' R'"
    },
    "142": {
        "name": "6b.O.1",
        "a": [
            "(R2 U' R2' U' F U F' R2 U2' R2' U R2 U2 R2' F U' F')",
            "(R U R' U' F' U' F U R U R' U R U2' F R' F' R U R U' R2')"
        ],
        "s": "R U R' U R2' U2' R2 U' R2' U2 R2 U' R U' R' U2 R2' U R2"
    },
    "143": {
        "name": "6b.O.2",
        "a": [
            "(R U R2' F' R U2' R U' R' U2' R' F R U R U R' U2' R U' R')"
        ],
        "s": "R2 U R2' U2 R' U' R U' R2 U2 R2' U' R2 U2' R2' U R' U R"
    },
    "144": {
        "name": "6b.O.3",
        "a": [
            "(F R U' R' U' R U R' F' R U R' U' R' F R F')"
        ],
        "s": "R2' U2' R2' U2 R' U R U2 R2 U2' R' U2' R2' U R2 U R2'"
    },
    "145": {
        "name": "6b.O.4",
        "a": [
            "(F R' F' R U R U' R' F R U' R' U R U R' F')"
        ],
        "s": "R2 U2 R2 U2' R U' R' U2' R2' U2 R U2 R2 U' R2' U' R2"
    },
    "146": {
        "name": "6b.O.5",
        "a": [
            "(R2 U2' R2' U2 R2 U' R2' U2 R2 U2' R2')",
            "(R' U2' R U R U R2' U R2 U2' R2' U2 R)",
            "(y2') (R2' U2 R2 U2' R2' U2' R2 U2' R2' U2 R2)"
        ],
        "s": "R2 U2' R2' U' R2 U2' R2' U2 R2 U2' R2' U' R2 U2' R2'"
    },
    "147": {
        "name": "6b.O.6",
        "a": [
            "(R2' U2 R2 U2' R2' U R2 U2' R2' U2 R2)",
            "(y2) (R' U2' R2 U2 R2' U' R2 U' R' U' R' U2 R)"
        ],
        "s": "R U2' R2 U2 R2' U2' R2 U2' R2' U2 R' U R2' U2 R2"
    },
    "148": {
        "name": "6b.O.7",
        "a": [
            "(y) (R2 U R2' U R2 U2' R2' U2 R2 U R2' U R2 U2' R2')",
            "(R2 U bR2' U R2' U R2 U' bR2 U2' R2')"
        ],
        "s": "R U R' U R2 U2' R2' U2' R U R U2' R' U2 R'"
    },
    "149": {
        "name": "6b.O.8",
        "a": [
            "(R2' U' F2 U' R2 U' R2' U F2' U2 R2)",
            "y' (R2' U' R2 U' R2' U2 R2 U2' R2' U' R2 U' R2' U2 R2)",
            "y2 (R2' F2' R U2' R U2 R' F R U R' U' R' F R2)"
        ],
        "s": "R2 U2' R2' U R2 U R2' U2 R2 U2' R2' U R2 U R2'"
    },
    "150": {
        "name": "6b.O.9",
        "a": [
            "(R' U' F R U' R' U' R U2 R' F' R F U' F' R' U2 R)",
            "(R' U' R' U' R F R' F' U R F' U' F U2 R)"
        ],
        "s": "R U2 R' U R U R' U2' R U2' R' U2' R U2' R' U R U R'"
    },
    "151": {
        "name": "6c.E.1",
        "a": [
            "(R' U2' R' U' R F R' F' U R F' U' F U2' R)",
            "(R' F U' F' U' R F U R' U2 R U F' R' U2' R)",
            "(R' U2' F R U' R' U' R U2 R' F' R F U' F' R' U2' R)"
        ],
        "s": "R2 U R2' U2 R2 U2 R2' U2 R2 U2 R2' U R2 U2' R2' U2 R2 U2 R2'"
    },
    "152": {
        "name": "6c.E.2",
        "a": [
            "(R' L' U2 L U R BR F U2' BR' U' F')"
        ],
        "s": "R U' R U R U' R' U' R U R U2 R U' R U' R2' U' R2'"
    },
    "153": {
        "name": "6c.E.3",
        "a": [
            "()"
            ],
        "s": ""
    },
      "154": {
        "name": "6c.E.4",
        "a": [
            "()"
            ],
        "s": ""
    },
      "155": {
        "name": "6c.E.5",
        "a": [
            "()"
            ],
        "s": ""
    },
      "156": {
        "name": "6c.E.6",
        "a": [
            "()"
            ],
        "s": ""
    },
      "157": {
        "name": "6c.E.7",
        "a": [
            "()"
            ],
        "s": ""
    },
      "158": {
        "name": "6c.E.8",
        "a": [
            "()"
            ],
        "s": ""
    },
      "159": {
        "name": "6c.E.9",
        "a": [
            "()"
            ],
        "s": ""
    },
      "160": {
        "name": "6c.O.1",
        "a": [
            "()"
            ],
        "s": ""
    },
      "161": {
        "name": "6c.O.2",
        "a": [
            "()"
            ],
        "s": ""
    },
      "162": {
        "name": "6c.O.3",
        "a": [
            "()"
            ],
        "s": ""
    },
      "163": {
        "name": "6c.O.4",
        "a": [
            "()"
            ],
        "s": ""
    },
      "164": {
        "name": "6c.O.5",
        "a": [
            "()"
            ],
        "s": ""
    },
      "165": {
        "name": "6c.O.6",
        "a": [
            "()"
            ],
        "s": ""
    },
      "166": {
        "name": "6c.O.7",
        "a": [
            "()"
            ],
        "s": ""
    },
      "167": {
        "name": "6c.O.8",
        "a": [
            "()"
            ],
        "s": ""
    },
      "168": {
        "name": "6c.O.9",
        "a": [
            "()"
            ],
        "s": ""
    },
      "169": {
        "name": "7.E.1",
        "a": [
            "()"
            ],
        "s": ""
    },
      "170": {
        "name": "7.E.2",
        "a": [
            "()"
            ],
        "s": ""
    },
      "171": {
        "name": "7.E.3",
        "a": [
            "()"
            ],
        "s": ""
    },
      "172": {
        "name": "7.O.1",
        "a": [
            "()"
            ],
        "s": ""
    },
      "173": {
        "name": "7.O.2",
        "a": [
            "()"
            ],
        "s": ""
    },
      "174": {
        "name": "7.O.3",
        "a": [
            "()"
            ],
        "s": ""
    },
      "175": {
        "name": "8.E.1",
        "a": [
            "()"
            ],
        "s": ""
    },
      "176": {
        "name": "8.E.2",
        "a": [
            "()"
            ],
        "s": ""
    },
      "177": {
        "name": "8.E.3",
        "a": [
            "()"
            ],
        "s": ""
    },
      "178": {
        "name": "8.O.1",
        "a": [
            "()"
            ],
        "s": ""
    },
      "179": {
        "name": "8.O.2",
        "a": [
            "()"
            ],
        "s": ""
    },
      "180": {
        "name": "8.O.3",
        "a": [
            "()"
            ],
        "s": ""
    }
}
