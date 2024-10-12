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
    "Even OLP 8": [175, 176, 178],
    "Odd OLP 8": [179, 180, 181],


};

var algsInfo = {
    "1": {
        "name": "1.E.1",
        "a": [
            "(F' R' F R U' R' F' R2 U R' U' R' F R)"
        ],
        "s": "R' U R2 U2' R U2 R2 U' R U R2 U2' R' U2 R'"
    },
    "2": {
        "name": "1.E.2",
        "a": [
            "(R' F' R U R U' R2' F R U R' F' R F)"
        ],
        "s": "R U2 R2' U2 R U2' R U' R' U2' R' U2 R2 U' R'"
    },
    "3": {
        "name": "1.E.3",
        "a": [
            "(BR' R' U L U' R' U L' U' R2 BR) ",
            "(R' U2' R U' R' F' R U R' U' R' F R U2' R)"
        ],
        "s": "R U2 R2' U2 R2' U R2 U2 R2 U2' R U' R' U R'"
    },
    "4": {
        "name": "1.E.4",
        "a": [
            "(BR' R2' U L U' R U L' U' R BR)",
            "y' (R' U2 R' F' R U R U' R' F R U R' U2 R)"
        ],
        "s": "R U' R U R' U2 R2' U2' R2' U' R2 U2' R2 U2' R'"
    },
    "5": {
        "name": "1.E.5",
        "a": [
            "(R U R' U' R' U2' R U R U' R2' U2 R)",
            "(y2) (R' U2' R2 U R' U' R' U2 R U R U' R')"
        ],
        "s": "R2 U R2' U2 R2 U2 R2' U2' R2 U R2' U R2 U2' R2'"
    },
    "6": {
        "name": "1.E.6",
        "a": [
            "(R' U' R U R U2 R' U' R' U R2 U2' R')",
            "(y2') (R U2 R2' U' R U R U2' R' U' R' U R)"
        ],
        "s": "R2 U2' R2' U R2 U R2' U2' R2 U2 R2' U2 R2 U R2'"
    },
    "7": {
        "name": "1.E.7",
        "a": [
            "(R2 U R2' U2 R U2' R U R' U' R U' R2' U2 R U R')",
            "(y2') (R U' R' U2' R2 U R' U R U' R' U2 R' U2' R2 U' R2')"
        ],
        "s": "R U' R' U2 R2 U R2' U' R2 U2 R2' U R U R U2' R2'"
    },
    "8": {
        "name": "1.E.8",
        "a": [
            "(R2' U' R2 U2' R' U2 R' U' R U R' U R2 U2' R' U' R)",
            "(y2) (R' U R U2 R2' U' R U' R' U R U2' R U2 R2' U R2)"
        ],
        "s": "R2 U R2 U2 R2 U2' R U' R2 U2 R2 U' R2' U R2 U R'"
    },
    "9": {
        "name": "1.E.9",
        "a": [
            "(R U2 R' U' R U2' R' U R U R2' U' R U' R U R2' U R)",
            "(y') (R U R' U2' R' U2' R U' R U R2' U2 R U2' R U2' R')",
            "(y2) (R U2 R' U R F U R' U' R F' R' U R U R')"
        ],
        "s": "R U2 R' U2 R' U2' R2 U' R' U R' U2 R U2 R U' R'"
    },
    "10": {
        "name": "1.O.1",
        "a": [
            "(R' U2' R U R' U2 R U' R' U' R2 U R' U R' U' R2 U' R')",
            "(y') (R' U' R U2 R U2 R' U R' U' R2 U2' R' U2 R' U2 R)"
        ],
        "s": "R' U2' R U2' R U2 R2' U R U' R U2' R' U2' R' U R"
    },
    "11": {
        "name": "1.O.2",
        "a": [
            "(R' U' R U' R U2 R2' U' R2 U' R2' U2' R U R' U2 R) ",
            "(y2) (R' U2' R U' R' U2 R2 U R2' U R2 U2' R' U R' U R)"
        ],
        "s": "R' U' R U' R U2 R2' U' R2 U' R2' U2' R U R' U2 R"
    },
    "12": {
        "name": "1.O.3",
        "a": [
            "(R U R' U R' U2' R2 U R2' U R2 U2 R' U' R U2' R') ",
            "(y2') (R U2 R' U R U2' R2' U' R2 U' R2' U2 R U' R U' R')"
        ],
        "s": "R U R' U R' U2' R2 U R2' U R2 U2 R' U' R U2' R'"
    },
    "13": {
        "name": "2.E.1",
        "a": [
            "(R2' U2 R2 U R2' U' R2 U2' R2' U' R2 U2 R2' U2' R2)",
            "(y) (R2' U2 R2 U2' R2' U R2 U2 R2' U R2 U' R2' U2' R2)"
        ],
        "s": "R2 U2 R2' U R2 U' R2' U2' R2 U' R2' U2 R2 U2' R2'"
    },
    "14": {
        "name": "2.E.2",
        "a": [
            "(R2 U2' R2' U' R2 U R2' U2 R2 U R2' U2' R2 U2 R2')",
            "(y') (R2' U2' R2 U2 R2' U' R2 U2' R2' U' R2 U R2' U2 R2)"
        ],
        "s": "R2 U2' R2' U' R2 U R2' U2 R2 U R2' U2' R2 U2 R2'"
    },
    "15": {
        "name": "2.E.3",
        "a": [
            "(R2' U2' R2 U' R2' U2' R2 U' R2' U2 R2 U R2' U2 R2)",
            "(y2) (R2' U2 R2 bR2' U R2' U' R2 U' bR2 U R2' U2' R2)"
        ],
        "s": "R2 U2' R2' U' R2 U2' R2' U R2 U2 R2' U R2 U2 R2'"
    },
    "16": {
        "name": "2.E.4",
        "a": [
            "(R2' U2 R2 U R2' U2 R2 U R2' U2' R2 U' R2' U2' R2)",
            "(y2') (R2 U2' R2' F2 U' R2 U R2' U F2' U' R2 U2 R2')"
        ],
        "s": "R2 U2 R2' U R2 U2 R2' U' R2 U2' R2' U' R2 U2' R2'"
    },
    "17": {
        "name": "2.E.5",
        "a": [
            "(R' U2' R F U' R' U' R U F' U R' U2 R)",
            "(R' U2' R U L U2' R' U' R U2 L' R' U2 R)"
        ],
        "s": "R' U2' R U2' R' U' R U R' U2' R' U2' R U' R' U2' R2"
    },
    "18": {
        "name": "2.E.6",
        "a": [
            "(R U2 R' BR' U R U R' U' BR U' R U2' R')",
            "(F' R U2 R' U F R U' R' U R' F' R U' R U2' R' F)"
        ],
        "s": "R U2 R' U2 R U R' U' R U2 R U2 R' U R U2 R2'"
    },
    "19": {
        "name": "2.E.7",
        "a": [
            "(R U' R' U2 R2 U R' U2 R U' R' U' R U' R' U' R')"
        ],
        "s": "R U R U R' U R U R' U2' R U' R2' U2' R U R'"
    },
    "20": {
        "name": "2.E.8",
        "a": [
            "(R' U R U2' R2' U' R U2' R' U R U R' U R U R)"
        ],
        "s": "R' U' R' U' R U' R' U' R U2 R' U R2 U2 R' U' R"
    },
    "21": {
        "name": "2.E.9",
        "a": [
            "(R U2 R' U' R U R' U R U2' R' U2 R U2 R')"
        ],
        "s": "R' U2' R U R' U' R U' R' U2 R U2' R' U2' R"
    },
    "22": {
        "name": "2.O.1",
        "a": [
            "(R' U2' R U R' U' R U' R' U2 R U2' R' U2' R)"
        ],
        "s": "R U2 R' U' R U R' U R U2' R' U2 R U2 R'"
    },
    "23": {
        "name": "2.O.2",
        "a": [
            "(R U R' U R' U' R F' R U R' U' R' F R2 U' R2' U R)",
            "(y2) (R' U' R' DR' R U' R' DR R U R' DR' R U R' DR R2)"
        ],
        "s": "R' U2' R U R2' U' R U' R' U R2 U' R' U R' U R U R"
    },
    "24": {
        "name": "2.O.3",
        "a": [
            "(x') (R U' R' DR R U R' DR' R U R' DR R U' R' DR')",
            "(y') (R2 U R' U' y R U R' U' R U R' U' R U R' F U' F2')",
            "(y') (BR' R' U2 R U' R' U R' U2' R U R' U R U' R U' BR)"
        ],
        "s": "R2 U2 R2 U R' U' R U' R2' U R U' R U R' U R' U2 R2'"
    },
    "25": {
        "name": "3.E.1",
        "a": [
            "(L' R U2 R' U' R U R' U' R U R' U' R U' R' L)"
        ],
        "s": "R' U2 R' U2' R2' U2 R2' U' R2 U' R' U' R2' U2 R U2' R"
    },
    "26": {
        "name": "3.E.2",
        "a": [
            "(R2 U2 R2' U R2 U2 R2')",
            "(R2' U2 R2 U R2' U2 R2)"
        ],
        "s": "R U R2' U' R2 U2' R2' U2 R U' R' U2 R2 U2 R'"
    },
    "27": {
        "name": "3.E.3",
        "a": [
            "(R2 U2' R2' U' R2 U2' R2')"
        ],
        "s": "R' U' R2 U R2' U2 R2 U2' R' U R U2' R2' U2' R"
    },
    "28": {
        "name": "3.E.4",
        "a": [
            "(R U R' U2 R' U2' R2 U' R' U R' U2 R)"
        ],
        "s": "R U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R'"
    },
    "29": {
        "name": "3.E.5",
        "a": [
            "(R' U' R U2' R U2 R2' U R U' R U2' R')"
        ],
        "s": "R U R U2 R' U R' U' R2 U2' R' U2 R' U R U R'"
    },
    "30": {
        "name": "3.E.6",
        "a": [
            "(R' U2' R U' R U R2' U2 R U2' R U' R')"
        ],
        "s": "R U R U R' U2 R' U2' R2 U' R' U R' U2 R U R'"
    },
    "31": {
        "name": "3.E.7",
        "a": [
            "(R U2 R' U R' U' R2 U2' R' U2 R' U R)"
        ],
        "s": "R U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R'"
    },
    "32": {
        "name": "3.E.8",
        "a": [
            "(R U R' U R2 U2' R2' U2' R U2 R U2 R' U2' R')"
        ],
        "s": "R U2' R2 U2' R2' U' R2 U2' R2 U2' R U2' R' U' R U2' R'"
    },
    "33": {
        "name": "3.E.9",
        "a": [
            "(R' U' R U' R2' U2 R2 U2 R' U2' R' U2' R U2 R)"
        ],
        "s": "R' U2 R2 U2 R2' U R2 U2 R' U R' U2' R U' R' U2' R"
    },
    "34": {
        "name": "3.O.1",
        "a": [
            "(R U2 R U2' R' U2' R' U2 R2 U2 R2' U' R U' R')"
        ],
        "s": "R U2' R' U' R U2' R' U R2' U2 R2' U R2 U2 R2' U2 R'"
    },
    "35": {
        "name": "3.O.2",
        "a": [
            "(R' U2' R' U2 R U2 R U2' R2' U2' R2 U R' U R)"
        ],
        "s": "R' U2' R U' R' U2' R U2' R U2' R2' U' R2 U2' R2' U2' R"
    },
    "36": {
        "name": "3.O.3",
        "a": [
            "(R' U2 R2 U2' R' U2 R' U R U2 R' U R2 U2 R2' U2' R)"
        ],
        "s": "R2' U2 R2' U2' R2 U' R U2' R' U' R U2' R2 U2 R2 U2' R2"
    },
    "37": {
        "name": "3.O.4",
        "a": [
            "(R U2' R2' U2 R U2' R U' R' U2' R U' R2' U2' R2 U2 R')"
        ],
        "s": "R U2' R2' U2 R U2' R U' R' U2' R U' R2' U2' R2 U2 R'"
    },
    "38": {
        "name": "3.O.5",
        "a": [
            "(R U' R2' U' F U F' R2 U2' R' U R U2 R' F U' F')",
            "(y') (R U2' R' U' R U2' R2' U2 L U' R U L' R' U2' R)",
            "(y) (R' U2 R L U' R' U L' U2' R2 U2 R' U R U2 R')"
        ],
        "s": "R U2' R' U2' R2' U R' U' R2' U R' U2' R2 U R U R' U' R2"
    },
    "39": {
        "name": "3.O.6",
        "a": [
            "(F U2' R' U' R F' R' U' R F U' R' U2' R U2 F')"
        ],
        "s": "R' U2 R U R' U R2' U' R' U R2' U R2' U' R' U' R U R2'"
    },
    "40": {
        "name": "3.O.7",
        "a": [
            "(R' DR' R U R' DR R U)x3",
            "(R U2 R' U2 R U' R' U' R U2 R' U R' F' R U R U' R' F)"
        ],
        "s": "R U2 R2 U2 R U' R U R U' R U R2 U2' R2' U2' R' U' R2 U' R2'"
    },
    "41": {
        "name": "3.O.8",
        "a": [
            "(R' DR' R U' R' DR R U')x3",
            "(F' R U R' U' R' F R U' R U2' R' U R U R' U2' R U2' R')"
        ],
        "s": "R2 U R2' U R U2 R2 U2 R2' U' R' U R' U' R' U R' U2' R2' U2' R'"
    },
    "42": {
        "name": "3.O.9",
        "a": [
            "(R2 U2 R2' U' R2 U' R2' y' R2' U' R2 U' R2' U2 R2)"
        ],
        "s": "R2 U2 R U2' R2' U2 R2' U2' R U2' R' U' R2 U R2 U' R' U R2'"
    },
    "43": {
        "name": "4a.E.1",
        "a": [
            "(R2' U2' R2 U R2' U R2 y R2 U R2' U R2 U2' R2')"
        ],
        "s": "R2 U' R U R2' U' R2' U R U2 R' U2 R2 U2' R2 U2 R' U2' R2'"
    },
    "44": {
        "name": "4a.E.2",
        "a": [
            "(R U2 R' U R' U' R U F' R U R' U' R' F U R2 U R')",
            "(R2' U2 R2 U R2' F2 U' R2 U R2' U F2' U R2)"
        ],
        "s": "R' U2 R' U2 R' U2 R2 U2 R2 U2' R U R2' U R U R2 U R"
    },
    "45": {
        "name": "4a.E.3",
        "a": [
            "(R2 U2' R2' U' R2 bR2' U R2' U' R2 U' bR2 U' R2')",
            "(y2') (BR' R2' U2' R2 U R2' U R2 BR R U R' U R U2' R')"
        ],
        "s": "R U2' R U2' R U2' R2' U2' R2' U2 R' U' R2 U' R' U' R2' U' R'"
    },
    "46": {
        "name": "4a.E.4",
        "a": [
            "(R U' R2' U' F' R U R U' R' F U' R' U R U' R U2' R')",
            "(R2' U' F2 U' R2 U' R2' U F2' R2 U' R2' U2' R2)"
        ],
        "s": "R' U' R2' U' R' U' R2 U' R' U2 R2' U2' R2' U2' R U2' R U2' R"
    },
    "47": {
        "name": "4a.E.5",
        "a": [
            "(R2 U bR2' U R2' U R2 U' bR2 R2' U R2 U2 R2')",
            "(y2) (R U2 R' U' R U' R' BR' R2' U' R2 U' R2' U2 R2 BR)"
        ],
        "s": "R U R2 U R U R2' U R U2' R2 U2 R2 U2 R' U2 R' U2 R'"
    },
    "48": {
        "name": "4a.E.6",
        "a": [
            "(R' U2 R2 U2 R' U2' R' U2' R U2 R U R' U2' R U' R')",
            "(y') (R2 U R2' U R2 U2' R2' U2 y' R2' U' R2 U2' R2' U2' R2)"
        ],
        "s": "R U R' U2 R U' R' U2' R' U2 R U2 R U2' R2' U2' R"
    },
    "49": {
        "name": "4a.E.7",
        "a": [
            "(R U2' R2' U2' R U2 R U2 R' U2' R' U' R U2 R' U R)",
            "(y) (R2' U' R2 U' R2' U2 R2 U2' y R2 U R2' U2 R2 U2 R2')"
        ],
        "s": "R U2' R2' U2' R U2 R U2 R' U2' R' U' R U2 R' U R"
    },
    "50": {
        "name": "4a.E.8",
        "a": [
            "(R' U' R' U2' F' R U R U' R' F R' U2 R U R)",
            "(y') (R U2' R' U' R U' R U2 R' U' R U' R2' U R U2' R')"
        ],
        "s": "R U2 R' U' R2 U R' U R U2' R' U R' U R U2 R'"
    },
    "51": {
        "name": "4a.E.9",
        "a": [
            "(R' U2 R U R' U R' U2' R U R' U R2 U' R' U2 R)"
        ],
        "s": "R' U2' R U R2' U' R U' R' U2 R U' R U' R' U2' R"
    },
    "52": {
        "name": "4a.O.1",
        "a": [
            "(R' U' R' U2' R F' R U R' U' R' F U2 R U R)",
            "(R U2 R' U' R2 U R' U R U2' R' U R' U R U2 R')"
        ],
        "s": "R U2' R' U' R U' R U2 R' U' R U' R2' U R U2' R'"
    },
    "53": {
        "name": "4a.O.2",
        "a": [
            "(R' U2' R U R2' U' R U' R' U2 R U' R U' R' U2' R)"
        ],
        "s": "R' U2 R U R' U R' U2' R U R' U R2 U' R' U2 R"
    },
    "54": {
        "name": "4a.O.3",
        "a": [
            "x' (R2 U2' R2' F' R2 U2 R2' F2 R2 U2' R2' F' R2 U2 R2')",
            "y2' (F R U2 R' U' R U' R' F' U R' U' R U2' R' U R U R' U R)"
        ],
        "s": "R U' R' U2 R U2 R' U2' R' U2' R2 U R U2' R2 U2' R2' U' R2'"
    },
    "55": {
        "name": "4a.O.4",
        "a": [
            "(R2' F2 R2 U' R2' F2' R2 U2 R2' F2 R2 U' R2' F2' R2)",
            "(y2') (R2' F2 R2 U R2' F2' R2 U2' R2' F2 R2 U R2' F2' R2)",
            "(BR' R' U2' R U R' U R BR U' R U R' U2 R U' R' U' R U' R')"
        ],
        "s": "R' U R U2' R' U2' R U2 R U2 R2' U' R' U2 R2' U2 R2 U R2"
    },
    "56": {
        "name": "4a.O.5",
        "a": [
            "(R U R' F' R U R' U' R' F R2 U' R')",
            "(y2') (R U R2' F' R U R U' R' F R U' R')"
        ],
        "s": "R U2' R U2 R' U2' R' U R U2 R U2' R' U2 R'"
    },
    "57": {
        "name": "4a.O.6",
        "a": [
            "(F U' R' F R2 U' R' U' R U R' F' R U R' F')"
        ],
        "s": "R' U2 R' U2' R U2 R U2 R' U2 R' U2' R U2 R"
    },
    "58": {
        "name": "4a.O.7",
        "a": [
            "(R' U2' R U2 R' U R U R U2 R' U' R U' R2' U' R)"
        ],
        "s": "R2 U R2' U2 R2 U2 R2' U2' R2 U R2' U2 R2 U2 R2'"
    },
    "59": {
        "name": "4a.O.8",
        "a": [
            "(R U2 R' U2' R U' R' U' R' U2' R U R' U R2 U R')",
            "(y2') (R U2 R' U R2' U' R U' R U R' U R2 U2 R' U R' U' R' U R2)"
        ],
        "s": "R2 U' R2' U R2 U2 R2' U2' R2 U R2' U2' R2 U2' R2'"
    },
    "60": {
        "name": "4a.O.9",
        "a": [
            "(R U R' U' R' U2' R U R U R2' U R2 U2 R2' U2' R)",
            "(R' U R2 U R' U R U2' R' U' R' U' R U2' R' U2 R)"
        ],
        "s": "R2 U2' R2' U2' R2 U R2' U2' R2 U2 R2' U R2 U' R2'"
    },
    "61": {
        "name": "4b.E.1",
        "a": [
            "(R U' R2' U' R U' R' U2 R U R U R' U2 R U2' R')",
            "y2 (F U F' R2' F U' F U' R2 U R2' U F2' R2)"
        ],
        "s": "R2 U2 R2' U2 R2 U R2' U2' R2 U2 R2' U2 R2 U R2'"
    },
    "62": {
        "name": "K1+",
        "a": [
            "(R2' U2 R2 U R2' U' R2 U R2' U' R2 U R2' U2 R2)"
        ],
        "s": "R2 U2' R2' U' R2 U R2' U' R2 U2' R U2' R2 U' R2' U2' R2"
    },
    "63": {
        "name": "K1-",
        "a": [
            "(R2 U2' R2' U' R2 U R2' U' R2 U R2' U' R2 U2' R2')"
        ],
        "s": "R2 U2 R2' U R2 U2 R U2 R2 U R2' U' R2 U R2' U2 R2"
    },
    "64": {
        "name": "K2+",
        "a": [
            "(R' U2 R U' R' U2 R U2' R' U' R U2' R' U R U2' R' U R)",
            "y' (R U R' U2' R U R' U2' R U' R' U2' R U2 R' U' R U2 R')"
        ],
        "s": "R U2' R2 U' R' U R2 U2' R U R2' U' R U' R2' U2' R' U2 R2"
    },
    "65": {
        "name": "K2-",
        "a": [
            "(R U2' R' U R U2' R' U2 R U R' U2 R U' R' U2 R U' R')",
            "y (R' U' R U2 R' U' R U2 R' U R U2 R' U2' R U R' U2' R)",
            "y' (R2 U2' R2' U' R2 U2' R' U R' U' R' F R2 U' R' U' R U R' F')"
        ],
        "s": "R U R' U2 R U2 R2 U' R U R U2 R' U2 R U2 R2' U R2"
    },
    "66": {
        "name": "L1",
        "a": [
            "(R' U2 R U R' U R U' R' U2 R U' R U R' U R U2' R')"
        ],
        "s": "R2 U2' R2' U' R2 U R2' U2' R2 U R2' U2' R2 U2 R2' U R2 U' R2'"
    },
    "67": {
        "name": "L2",
        "a": [
            "(R' U2' R U' R' U R U R' U R2 U R' U R U R' U' R U2' R')",
            "y2' (R U2 R' U R U' R' U' R U' R2' U' R U' R' U' R U R' U2 R)"
        ],
        "s": "R U' R2' U' R' U' R2 U2' R2 U2 R2 U2' R U2' R U R2 U R'"
    },
    "68": {
        "name": "L3+",
        "a": [
            "(F U2' F' U2' R F R' U' R F' U2' R' U' R U2' R')"
        ],
        "s": "R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U R2' U' R2 U2' R2'"
    },
    "69": {
        "name": "L3-",
        "a": [
            "(R U R' U' R' U2 R U R U R2' U R U' R U R' U' R U2' R')",
            "(y2') (R' U2 R U2 F' R' y' R U R' bR U2 R U R' U2 R)"
        ],
        "s": "R2' U R' U' R' U2' R2' U2 R U R U' R U2' R U2' R2' U' R2"
    },
    "70": {
        "name": "L4+",
        "a": [
            "(R U R U R' U R' U R U' R U2' R' U2' R' U' R U2 R')",
            "(y2) (R' U2 R U' R' U2' R' U2' R U' R U R' U R' U R U R)"
        ],
        "s": "R U2' R2 U' R' U2' R2 U R2 U R' U' R2 U2 R2' U2' R2' U' R"
    },
    "71": {
        "name": "L4-",
        "a": [
            "(R U2' R' U R U2 R U2 R' U R' U' R U' R U' R' U' R')",
            "(y2) (R' U' R' U' R U' R U' R' U R' U2 R U2 R U R' U2' R)"
        ],
        "s": "R' U2 R U' R' U2' R' U2' R U' R U R' U R' U R U R"
    },
    "72": {
        "name": "L5+",
        "a": [
            "(R' U2' R U R' U R2 U2' R' U' R U R' U2' R U' R')"
        ],
        "s": "R U R' U2 R U' R' U R U2 R2' U' R U' R' U2 R"
    },
    "73": {
        "name": "L5-",
        "a": [
            "(R U2 R' U' R U' R2' U2 R U R' U' R U2 R' U R)"
        ],
        "s": "R' U' R U2' R' U R U' R' U2' R2 U R' U R U2' R'"
    },
    "74": {
        "name": "L6+",
        "a": [
            "(R U R' U2 R U' R' U R U2 R2' U' R U' R' U2 R)"
        ],
        "s": "R' U2' R U R' U R2 U2' R' U' R U R' U2' R U' R'"
    },
    "75": {
        "name": "L6-",
        "a": [
            "(R' U' R U2' R' U R U' R' U2' R2 U R' U R U2' R')"
        ],
        "s": "R U2 R' U' R U' R2' U2 R U R' U' R U2 R' U R"
    },
    "76": {
        "name": "M",
        "a": [
            "(R' U2 R U2 R' U' F R2 U R2' U R2 U2' R2' F' R)",
            "(y2') (R U R' U2' R' U2' R U R' U R2 U' R' U2 R U' R' U R U' R')",
            "(y) (R U R' U' R U R' U2' R U R2' U' R U' R' U2 R U2 R U' R')"
        ],
        "s": "R2 U R2 U' R2 U' R2' U2 R U R U2' R U' R2'"
    },
    "77": {
        "name": "N1+",
        "a": [
            "(R U2 R' F' R U R' U' R' F R2 U2' R') ",
            "(y) (R U2 R2' F' R U R U' R' F R U2' R')",
            "(y2') (R U2 R U2' R' U' R U2' R' U2 R')"
        ],
        "s": "R U2 R U2' R' U2 R' U2 R U2' R U2 R' U2' R'"
    },
    "78": {
        "name": "N1-",
        "a": [
            "(R' U2 R' U2' R U' R' U2' R U2 R)",
            "y2 (L' R' U2' R U' R' U2' R U' L)"
        ],
        "s": "R U R2' U2 R' U2' R2' U' R2' U R' U2 R U2' R"
    },
    "79": {
        "name": "N2+",
        "a": [
            "(R L U2 L' U R' L U' R U2 L' U2 R')"
        ],
        "s": "R2' U2 R U2' R2 U2' R2' U2 R' U2' R U R2 U' R2' U' R"
    },
    "80": {
        "name": "N2-",
        "a": [
            "(R' L' U2' R U' L R' U L' U2' R U2' L)",
            "(R' U2 R U2' R2' U' R2 U' R2' U R2 U' R2' U2 R U2' R)"
        ],
        "s": "R U' R2' U' R2 U R U2' R' U2 R2' U2' R2 U2' R U2 R2'"
    },
    "81": {
        "name": "solved",
        "a": [
            "Skip"
        ],
        "s": "solved"
    },
    "82": {
        "name": "P1+",
        "a": [
            "(R' F R2 U R' U R U2' R' U R' F' R F U' F')"
        ],
        "s": "R' U2' R U' R' U2 R U2' R' U2' R2 U R' U2 R U2 R'"
    },
    "83": {
        "name": "P1-",
        "a": [
            "(R' U2' F' U2 F R2 U2' R' F R' F' R2 U2 R')",
            "y2 (F R' U' R2 U' R2' U2 R U' F' R' U' F' U F R)"
        ],
        "s": "R U2 R' U R U2' R' U2 R U2 R2' U' R U2' R' U2' R"
    },
    "84": {
        "name": "P2+",
        "a": [
            "(F U F' R' F R U' R U2 R' U' R U' R2' F' R)",
            "(F R U2 R' U' R U' R2' F' L F R F' L')"
        ],
        "s": "R U2' R' U2' R U' R2' U2 R U2 R' U2' R U R' U2 R"
    },
    "85": {
        "name": "P2-",
        "a": [
            "(BR' R' U2' R U R' U R2 x' U L' U' R' U L)",
            "y' (R U2' R2' F R F' R U2 R2' F' U2' F U2 R)"
        ],
        "s": "R' U2 R U2 R' U R2 U2' R' U2' R U2 R' U' R U2' R'"
    },
    "86": {
        "name": "P3+",
        "a": [
            "(F R U' R' U' R U R U2 R' U' R U' R2' F')"
        ],
        "s": "R' U2' R' U' R2 U2' R2' U R U' R U2 R' U2' R' U2' R2"
    },
    "87": {
        "name": "P3-",
        "a": [
            "(BR' R' U R U R' U' R' U2' R U R' U R2 BR)"
        ],
        "s": "R U2 R U R2' U2 R2 U' R' U R' U2' R U2 R U2 R2'"
    },
    "88": {
        "name": "P4+",
        "a": [
            "(F R2 U R' U R U2' R' U' R' U R U R' F')"
        ],
        "s": "R2' U2 R U2 R U2' R' U R' U' R2 U2 R2' U R U2 R"
    },
    "89": {
        "name": "P4-",
        "a": [
            "(BR' R2' U' R U' R' U2 R U R U' R' U' R BR)"
        ],
        "s": "R2 U2' R' U2' R' U2 R U' R U R2' U2' R2 U' R' U2' R'"
    },
    "90": {
        "name": "Q1A",
        "a": [
            "(R2' U2 R2 U R2' U2 R2 U' R2' U2 R2 U R2' U2 R2)",
            "(R' U R U R' U2' R y U2' R U' R' U' R U2 R')",
            "(F' R' F U F' R F U R' U2 R U' R' U' R U2 R' U R)"
        ],
        "s": "R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U2' R2'"
    },
    "91": {
        "name": "Q1-",
        "a": [
            "(R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U2' R2')",
            "(R U' R' U' R U2 R' y' U2 R' U R U R' U2' R)"
        ],
        "s": "R2 U2 R2' U R2 U2 R2' U' R2 U2 R2' U R2 U2 R2'"
    },
    "92": {
        "name": "Q2+",
        "a": [
            "(R' U2' R U' R' U2' R2 U2' R' U' R U2' R')"
        ],
        "s": "R U2 R' U R U2 R' U' R' U2' R U' R' U2' R"
    },
    "93": {
        "name": "Q2-",
        "a": [
            "(R U2 R' U R U2 R2' U2 R U R' U2 R)"
        ],
        "s": "R' U2' R U' R' U2' R U R U2 R' U R U2 R'"
    },
    "94": {
        "name": "R1+",
        "a": [
            "(R' U2 R U' R2' U2 R2 U R' U' R' U2' R U' R)"
        ],
        "s": "R2 U R2' U R2 U R2' U2 R2 U2 R2' U R2 U' R2'"
    },
    "95": {
        "name": "R1-",
        "a": [
            "(R U2' R' U R2 U2' R2' U' R U R U2 R' U R')"
        ],
        "s": "R' U' R U R2 U2' R2' U' R' U R U' R2 U2' R2'"
    },
    "96": {
        "name": "R2+",
        "a": [
            "(R' U R' U2 R U R U' R2' U2' R2 U R' U2' R)"
        ],
        "s": "R2 U R2' U' R2 U2' R2' U2' R2 U' R2' U' R2 U' R2'"
    },
    "97": {
        "name": "R2-",
        "a": [
            "(R U' R U2' R' U' R' U R2 U2 R2' U' R U2 R')"
        ],
        "s": "R U2' R' U R2 U2' R2' U' R U R U2 R' U R'"
    },
    "98": {
        "name": "R3+",
        "a": [
            "(R U R2' U R U R U' R' U' R U' R2' U' R U' R' U R)"
        ],
        "s": "R2 U2 R2' U R2 U' R2 U2' R2' U' R2 U2' R2' U2 R2'"
    },
    "99": {
        "name": "R3-",
        "a": [
            "(R' U' R2 U' R' U' R' U R U R' U R2 U R' U R U' R')"
        ],
        "s": "R2 U2' R2' U' R2 U R2 U2 R2' U R2 U2 R2' U2' R2'"
    },
    "100": {
        "name": "R4+",
        "a": [
            "(R' U' R U R' U R2 U R' U R U R' U' R' U' R2 U' R')"
        ],
        "s": "R2 U2' R2 U2 R2' U R2 U2 R2' U R2' U' R2 U2' R2'"
    },
    "101": {
        "name": "R4-",
        "a": [
            "(R U R' U' R U' R2' U' R U' R' U' R U R U R2' U R)"
        ],
        "s": "R2 U2 R2 U2' R2' U' R2 U2' R2' U' R2' U R2 U2 R2'"
    },
    "102": {
        "name": "S1+",
        "a": [
            "(R' U2' R U R' U R U R U2' R' U2' R U' R')"
        ],
        "s": "R U R' U2 R U2 R' U' R' U' R U' R' U2 R"
    },
    "103": {
        "name": "S1-",
        "a": [
            "(R' U' R U2' R' U2' R U R U R' U R U2' R')"
        ],
        "s": "R2 U' R2' U R2 U R2' U2' R2 U' R2' U2 R2 U R2'"
    },
    "104": {
        "name": "S2+",
        "a": [
            "(R2 U2' R2' U2' R2 U' R' U2 R' U' R' U2' R2 U R2' U R)"
        ],
        "s": "R2 U2' R2' U2' R2' U R' U' R2' U R2 U R U' R' U2' R2'"
    },
    "105": {
        "name": "S2-",
        "a": [
            "(R2' U2 R2 U2 R2' U R U2' R U R U2 R2' U' R2 U' R')"
        ],
        "s": "R2 U2 R2' U R' U' R U R2 U R2' U' R' U R2' U R2'"
    },
    "106": {
        "name": "S3+",
        "a": [
            "(R2 U2' R2' U' R F' R U R2' U' R' F R3 U2' R2')"
        ],
        "s": "R2 U2' R2' U2' R2 U' R' U2 R' U' R' U2' R2 U R2' U R"
    },
    "107": {
        "name": "S3-",
        "a": [
            "(R' U' R U' R2' F' R U R U' R' F U R U2' R' U2' R)",
            "y (R U R2' U R2 U2' R' U' R' U2 R' U' R2 U2' R2' U2' R2)"
        ],
        "s": "R2' U2 R2 U2 R2' U R U2' R U R U2 R2' U' R2 U' R'"
    },
    "108": {
        "name": "S4+",
        "a": [
            "(R2' U2' R2 U' R2' U2' R2 U R2' U2 R2 U R2' U2 R2)",
            "(y') (R2' U2 R2 U' bR2' U R2' U R2 U' bR2 R2' U2' R2)"
        ],
        "s": "R2 U2' R2' U' R2 U2' R2' U' R2 U2 R2' U R2 U2 R2'"
    },
    "109": {
        "name": "S4-",
        "a": [
            "(R2' U2 R2 U R2' U2 R2 U' R2' U2' R2 U' R2' U2' R2)",
            "(y) (R2 U2' R2' U F2 U' R2 U' R2' U F2' R2 U2 R2')"
        ],
        "s": "R2 U2 R2' U R2 U2 R2' U R2 U2' R2' U' R2 U2' R2'"
    },
    "110": {
        "name": "S5+",
        "a": [
            "(R' U2' R U' F U' R' U R U F' R' U2 R)",
            "(R' U2' R L U2' R' U R U2 L' U' R' U2 R)"
        ],
        "s": "R2' U2 R U R' U2 R U2 R U' R' U R U2 R' U2 R"
    },
    "111": {
        "name": "S5-",
        "a": [
            "(R U2 R' U BR' U R U' R' U' BR R U2' R')",
            "(F' R U2 R' U R' F R U' R U R' F' U' R U2' R' F)"
        ],
        "s": "R' U R U2' R2' U' R U2' R' U R U R' U R U R"
    },
    "112": {
        "name": "S6+",
        "a": [
            "(R U R U R' U R U R' U2' R U' R2' U2' R U R')"
        ],
        "s": "R U' R' U2 R2 U R' U2 R U' R' U' R U' R' U' R'"
    },
    "113": {
        "name": "S6-",
        "a": [
            "(R' U' R' U' R U' R' U' R U2 R' U R2 U2 R' U' R)",
            "(y2) (R U R2' F' R U2' R U2 R' F R U' R2' U' R U' R' U2 R)"
        ],
        "s": "R2 U2' R' U' R U2' R' U2' R' U R U' R' U2' R U2' R'"
    },
    "114": {
        "name": "T1",
        "a": [
            "(R U R' U' R' F R2 U' R' U' R U R' F')"
        ],
        "s": "R2' U R U R U2 R' U2' R' U2 R U2 R' U' R2"
    },
    "115": {
        "name": "T2+",
        "a": [
            "(R' U2' R U2 R' F R U R' U' R' F' R2)"
        ],
        "s": "R U' R U R' U' R' U R U2' R U2 R' U2 R' U' R U2 R'"
    },
    "116": {
        "name": "T2-",
        "a": [
            "(R2' F R U R U' R' F' R U2' R' U2 R)",
            "(y) (R U2 R' U2' R bR' R' U' R U R bR R2')"
        ],
        "s": "R' U R' U' R U R U' R' U2 R' U2' R U2' R U R' U2' R"
    },
    "117": {
        "name": "T3+",
        "a": [
            "(R2' U2 R2 U R2' U' R2 U R2' U2 R2)"
        ],
        "s": "R2 U R2' U2' R2 U R2' U' R2 U R2' U2' R2 U R2'"
    },
    "118": {
        "name": "T3-",
        "a": [
            "(R2 U2' R2' U' R2 U R2' U' R2 U2' R2')"
        ],
        "s": "R2 U R2' U R2 U R2' U' R2 U' R2' U2 R2 U2 R2'"
    },
    "119": {
        "name": "T4+",
        "a": [
            "(R U R' F' R U R' U' R' F R U' R' F R2 U' R' U' R U R' F')",
            "(y) (R U R' U2 R2 U2 R2' U R2 U2 R2' U' R U' R')",
            "(R U R' U R2 U2' R2' U' R2 U2' R2' U2' R U' R')"
        ],
        "s": "R U R' U R2 U2' R2' U' R2 U2' R2' U2' R U' R'"
    },
    "120": {
        "name": "T4-",
        "a": [
            "(R' U' R U2' R2' U2' R2 U' R2' U2' R2 U R' U R)",
            "(y) (R' U' R U' R2' U2 R2 U R2' U2 R2 U2 R' U R)"
        ],
        "s": "R2 U' R2' U' R2 U2 R2' U R2 U2 R2' U2 R2 U R2'"
    },
    "121": {
        "name": "U1+",
        "a": [
            "(R' U' R U' R U R2' U R U' R U' R')"
        ],
        "s": "R U R U R2' U R U' R U' R' U2 R' U' R U2' R'"
    },
    "122": {
        "name": "U1-",
        "a": [
            "(R U R' U R' U' R2 U' R' U R' U R) "
        ],
        "s": "R U2 R' U2 R' U' R U' R U R2' U R U' R U2 R'"
    },
    "123": {
        "name": "U2+",
        "a": [
            "(R U R' U2 R' U' R U' R U R2' U R U' R U2' R')",
            "(R' U2' R U' R U R2' U R U' R U' R' U2 R' U R)"
        ],
        "s": "R U2 R U R2' U R U' R U' R' U2 R' U' R U2 R'"
    },
    "124": {
        "name": "U2-",
        "a": [
            "(R U2 R' U R' U' R2 U' R' U R' U R U2' R U' R')",
            "(R' U' R U2' R U R' U R' U' R2 U' R' U R' U2 R)"
        ],
        "s": "R U R' U2 R' U' R U' R U R2' U R U' R U2' R'"
    },
    "125": {
        "name": "V1+",
        "a": [
            "(R' U2 R' dR' R U' R' dR R U R U' R' U' R)"
        ],
        "s": "R' U2' R U' R U R' U2 R U2 R' U2 R' U2' R"
    },
    "126": {
        "name": "V1-",
        "a": [
            "(R U2 R2' F R F' R U' R' F' U F R U' R')",
            "(y2) (R U2' R' U2 R' U2 R U2 R' U R U' R U2' R')"
        ],
        "s": "R U2 R' U R' U' R U2' R' U2' R U2' R U2 R'"
    },
    "127": {
        "name": "V2+",
        "a": [
            "(R' U R U R' U' R' dR' R U R' dR R U2' R)"
        ],
        "s": "R2 U2' R2' U2' R2' U R2' U R2 U2' R' U' R' U2 R'"
    },
    "128": {
        "name": "V2-",
        "a": [
            "(R U' R' F U R U' R' F' R U R' F' U' F R U R')",
            "(R U' R' U' R U R' U R' DR' R U' R' DR R2 U R')",
            "(y') (R U R' F' U' F R U R' F R' F' R2 U2' R')"
        ],
        "s": "R2' U2 R2 U2 R2 U' R2 U' R2' U2 R U R U2' R"
    },
    "129": {
        "name": "V3+",
        "a": [
            "(R U R2 U' R' U' R U R' U' R' U R2' U R U' R)",
            "y' (R' U2 R U' F R U R' U' R' F' U' R U R U' R')"
        ],
        "s": "R' U' R' U' R U' R2 U R2 U R U R U2' R U' R'"
    },
    "130": {
        "name": "V3-",
        "a": [
            "(R' U2' R U R U' R' F R' U2 R U2' F' R U R')",
            "(y) (R' U' R2' U R U R' U' R U R U' R2 U' R' U R')"
        ],
        "s": "R U R U R' U R2' U' R2' U' R' U' R' U2 R' U R"
    },
    "131": {
        "name": "V4+",
        "a": [
            "(R' U R' U' R2 U' R U R U' R' U R U R2' U' R')",
            "y' (R U R' U' R' U F R U R U' R' F' U R' U2' R)"
        ],
        "s": "R U R' U2 R' U' R' U' R2' U' R2' U R' U R U R"
    },
    "132": {
        "name": "V4-",
        "a": [
            "(R U' R' F U2 R' U2' R F' R U R' U' R' U2 R)",
            "(y2') (R U' R U R2' U R' U' R' U R U' R' U' R2 U R)"
        ],
        "s": "R' U' R U2' R U R U R2 U R2 U' R U' R' U' R'"
    },
    "133": {
        "name": "W",
        "a": [
            "(R' U2' R' U2 R U2 R U' R2' U2 R2 U2 R' U R)"
        ],
        "s": "R2 U2' R2' U' R2 U R2' U2 R2 U2 R2' U2 R2 U2' R2'"
    },
    "134": {
        "name": "X1",
        "a": [
            "(F U2 R U2' R' U R U R' U2' F' R' U' R U2' R' U2' R)"
        ],
        "s": "R U R U R2' U R U' R U' R2 U' R2 U' R2' U2 R U' R U' R'"
    },
    "135": {
        "name": "X2",
        "a": [
            "(F R U R' F U R' U' F' U R2 U2' R' F')"
        ],
        "s": "R2' U R2' U' R2' U' R U' R U R U R2 U R U2' R U' R2"
    },
    "136": {
        "name": "X3",
        "a": [
            "(R' U' R U' R' U2 R2 U R' U2 R' U2' R2 U' R' U2 R' U R)",
            "(y2') (R2 U R2' U R U2' R' U R' U2' R U R' U R2 U R U' R2')",
            "(y') (R U R2' U2 R2 U2 R2' y' R' U' R U2 R' U' R U bR)"
        ],
        "s": "R2 U2 R2' U R2 U2 R2' U2 R2 U2 R2' U2' R2 U R2' U2' R2 U2 R2'"
    },
    "137": {
        "name": "X4",
        "a": [
            "(R' U' R2 U' R' U R U' R2' U' R2 U R' U' R U R2' U2 R)"
        ],
        "s": "R' U2' R U R' U R U' R' U2' R U' R' U2 R U' R' U2 R"
    },
    "138": {
        "name": "X5+",
        "a": [
            "(R' U R U2 R' U2 R U R2' U' R U' R' U' R U2 R' U R2)",
            "(y2) (R2 U R' U2 R U' R' U' R U' R2' U R U2 R' U2 R U R')"
        ],
        "s": "R U2' R2 U2 R2' U2 R U2' R U R U R2 U' R' U2 R2' U2 R'"
    },
    "139": {
        "name": "X5-",
        "a": [
            "(R2' U' R U2' R' U R U R' U R2 U' R' U2' R U2' R' U' R)",
            "(y2') (R U' R' U2' R U2' R' U' R2 U R' U R U R' U2' R U' R2')"
        ],
        "s": "R' U2 R2' U2' R2 U2' R' U2 R' U' R' U' R2' U R U2' R2 U2' R"
    },
    "140": {
        "name": "X6+",
        "a": [
            "(R' U2 R' U' R2 U' R' U' R U R' U R' U R2 U' R' U2' R)",
            "(y2') (F R U R' U' R U' R2' U' F' U' F U2 R U' R U R' F')"
        ],
        "s": "R' U' R U2' R' U R U' R' U2' R U' R' U2 R U2 R' U R"
    },
    "141": {
        "name": "X6-",
        "a": [
            "(R U2' R U R2' U R U R' U' R U' R U' R2' U R U2 R')"
        ],
        "s": "R U R' U2 R U2 R' U' R U2' R' U' R U R' U2' R U' R'"
    },
    "142": {
        "name": "X7+",
        "a": [
            "(R2 U' R2' U' F U F' R2 U2' R2' U R2 U2 R2' F U' F')",
            "(R U R' U' F' U' F U R U R' U R U2' F R' F' R U R U' R2')"
        ],
        "s": "R U R' U R2' U2' R2 U' R2' U2 R2 U' R U' R' U2 R2' U R2"
    },
    "143": {
        "name": "X7-",
        "a": [
            "(R U R2' F' R U2' R U' R' U2' R' F R U R U R' U2' R U' R')"
        ],
        "s": "R2 U R2' U2 R' U' R U' R2 U2 R2' U' R2 U2' R2' U R' U R"
    },
    "144": {
        "name": "Y1+",
        "a": [
            "(F R U' R' U' R U R' F' R U R' U' R' F R F')"
        ],
        "s": "R2' U2' R2' U2 R' U R U2 R2 U2' R' U2' R2' U R2 U R2'"
    },
    "145": {
        "name": "Y1-",
        "a": [
            "(F R' F' R U R U' R' F R U' R' U R U R' F')"
        ],
        "s": "R2 U2 R2 U2' R U' R' U2' R2' U2 R U2 R2 U' R2' U' R2"
    },
    "146": {
        "name": "Y2+",
        "a": [
            "(R2 U2' R2' U2 R2 U' R2' U2 R2 U2' R2')",
            "(R' U2' R U R U R2' U R2 U2' R2' U2 R)",
            "(y2') (R2' U2 R2 U2' R2' U2' R2 U2' R2' U2 R2)"
        ],
        "s": "R2 U2' R2' U' R2 U2' R2' U2 R2 U2' R2' U' R2 U2' R2'"
    },
    "147": {
        "name": "Y2-",
        "a": [
            "(R2' U2 R2 U2' R2' U R2 U2' R2' U2 R2)",
            "(y2) (R' U2' R2 U2 R2' U' R2 U' R' U' R' U2 R)"
        ],
        "s": "R U2' R2 U2 R2' U2' R2 U2' R2' U2 R' U R2' U2 R2"
    },
    "148": {
        "name": "Y3+",
        "a": [
            "(y) (R2 U R2' U R2 U2' R2' U2 R2 U R2' U R2 U2' R2')",
            "(R2 U bR2' U R2' U R2 U' bR2 U2' R2')"
        ],
        "s": "R U R' U R2 U2' R2' U2' R U R U2' R' U2 R'"
    },
    "149": {
        "name": "Y3-",
        "a": [
            "(R2' U' F2 U' R2 U' R2' U F2' U2 R2)",
            "y' (R2' U' R2 U' R2' U2 R2 U2' R2' U' R2 U' R2' U2 R2)",
            "y2 (R2' F2' R U2' R U2 R' F R U R' U' R' F R2)"
        ],
        "s": "R2 U2' R2' U R2 U R2' U2 R2 U2' R2' U R2 U R2'"
    },
    "150": {
        "name": "Z1",
        "a": [
            "(R' U' F R U' R' U' R U2 R' F' R F U' F' R' U2 R)",
            "(R' U' R' U' R F R' F' U R F' U' F U2 R)"
        ],
        "s": "R U2 R' U R U R' U2' R U2' R' U2' R U2' R' U R U R'"
    },
    "151": {
        "name": "Z2",
        "a": [
            "(R' U2' R' U' R F R' F' U R F' U' F U2' R)",
            "(R' F U' F' U' R F U R' U2 R U F' R' U2' R)",
            "(R' U2' F R U' R' U' R U2 R' F' R F U' F' R' U2' R)"
        ],
        "s": "R2 U R2' U2 R2 U2 R2' U2 R2 U2 R2' U R2 U2' R2' U2 R2 U2 R2'"
    },
    "152": {
        "name": "Z3",
        "a": [
            "(R' L' U2 L U R BR F U2' BR' U' F')"
        ],
        "s": "R U' R U R U' R' U' R U R U2 R U' R U' R2' U' R2'"
    },
    "153": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "154": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "155": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "156": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "157": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "158": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "159": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "160": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "161": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "162": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "163": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "164": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "165": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "166": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "167": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "168": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "169": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "170": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "171": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "172": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "173": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "174": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "175": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "176": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "177": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "178: {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "179": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "180": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
      "181": {
        "name": "",
        "a": [
            "()"
            ],
        "s": ""
    },
}
