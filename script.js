/*

console.log([
  [
    121,
    80,
    45,
    117,
    72,
    112,
    70,
    108,
    109,
    113,
    77
  ],
  [
    95,
    100,
    86,
    75,
    95,
    102,
    55,
    56,
    112,
    101,
    69
  ],
  [
    67,
    49,
    54,
    78,
    82,
    101,
    66,
    111,
    98,
    69,
    52
  ],
  [
    112,
    122,
    90,
    88,
    76,
    45,
    109,
    48,
    105,
    90,
    77
  ],
  [
    97,
    114,
    72,
    90,
    117,
    105,
    108,
    86,
    122,
    50,
    77
  ],
  [
    99,
    72,
    106,
    79,
    68,
    98,
    70,
    100,
    103,
    116,
    69
  ],
  [
    90,
    97,
    75,
    104,
    88,
    108,
    74,
    54,
    111,
    68,
    48
  ],
  [
    107,
    118,
    72,
    65,
    65,
    86,
    72,
    103,
    114,
    83,
    89
  ],
  [
    53,
    65,
    90,
    82,
    68,
    78,
    68,
    70,
    112,
    117,
    48
  ],
  [
    73,
    78,
    101,
    98,
    84,
    53,
    114,
    99,
    98,
    98,
    73
  ],
  [
    101,
    88,
    56,
    69,
    101,
    50,
    84,
    86,
    52,
    87,
    65
  ],
  [
    100,
    103,
    48,
    52,
    57,
    71,
    81,
    106,
    104,
    97,
    48
  ],
  [
    56,
    86,
    104,
    84,
    49,
    50,
    51,
    71,
    52,
    97,
    119
  ],
  [
    106,
    112,
    113,
    95,
    112,
    100,
    83,
    68,
    80,
    119,
    81
  ],
  [
    89,
    86,
    50,
    53,
    82,
    108,
    114,
    107,
    115,
    51,
    107
  ],
  [
    56,
    105,
    73,
    52,
    80,
    83,
    78,
    52,
    77,
    90,
    119
  ],
  [
    45,
    109,
    122,
    81,
    121,
    122,
    108,
    83,
    71,
    86,
    119
  ]
].map(e => 'https://www.youtube.com/watch?v=' + e.map(f => String.fromCharCode(f)).join('')).join('\n'))

*/

let descToUrl = document.querySelector("textarea#descToUrl");
descToUrl.value = `121
80
45
117
72
112
70
108
109
113
77`;
let descToUrlOut = document.querySelector("span#descToUrlOut");
function descToUrlUpdate() {
  let split = descToUrl.value.split("\n");
  if (split.length !== 11) {
    descToUrlOut.innerText = "Invalid Input";
    return;
  }
  let link =
    "https://www.youtube.com/watch?v=" +
    split
      .map((e) => parseInt(e))
      .map((e) => String.fromCharCode(e))
      .join("");
  descToUrlOut.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
}
descToUrl.addEventListener("input", descToUrlUpdate);
descToUrlUpdate();

// https://stackoverflow.com/a/43726671/24451450
function decodeMorse(morseCode) {
  var ref = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  };

  return morseCode
    .split(" ")
    .map((a) =>
      a
        .split(" ")
        .map((b) => ref[b])
        .join(""),
    )
    .join("");
}

// https://stackoverflow.com/a/6234804
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let morseCode = document.querySelector("input#morseDecode");
let morseDecodeOut = document.querySelector("span#morseDecodeOut");
function morseCodeUpdate() {
  morseDecodeOut.innerHTML =
    "Result: <code>" + decodeMorse(morseCode.value) + "</code>";
}
morseCode.addEventListener("input", morseCodeUpdate);
