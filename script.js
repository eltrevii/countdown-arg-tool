const config = {
  descriptions: [
    /* 100 */ [121, 80, 45, 117, 72, 112, 70, 108, 109, 113, 77],
    /* 99 */ [95, 100, 86, 75, 95, 102, 55, 56, 112, 101, 69],
    /* 98 */ [67, 49, 54, 78, 82, 101, 66, 111, 98, 69, 52],
    /* 97 */ [112, 122, 90, 88, 76, 45, 109, 48, 105, 90, 77],
    /* 96 */ [97, 114, 72, 90, 117, 105, 108, 86, 122, 50, 77],
    /* 95 */ [99, 72, 106, 79, 68, 98, 70, 100, 103, 116, 69],
    /* 94 */ [90, 97, 75, 104, 88, 108, 74, 54, 111, 68, 48],
    /* 93 */ [107, 118, 72, 65, 65, 86, 72, 103, 114, 83, 89],
    /* 92 */ [53, 65, 90, 82, 68, 78, 68, 70, 112, 117, 48],
    /* 91 */ [73, 78, 101, 98, 84, 53, 114, 99, 98, 98, 73],
    /* 90 */ [101, 88, 56, 69, 101, 50, 84, 86, 52, 87, 65],
    /* 89 */ [100, 103, 48, 52, 57, 71, 81, 106, 104, 97, 48],
    /* 88 */ [56, 86, 104, 84, 49, 50, 51, 71, 52, 97, 119],
    /* 87 */ [106, 112, 113, 95, 112, 100, 83, 68, 80, 119, 81],
    /* 86 */ [89, 86, 50, 53, 82, 108, 114, 107, 115, 51, 107],
    /* 85 */ [56, 105, 73, 52, 80, 83, 78, 52, 77, 90, 119],
    /* 84 */ [45, 109, 122, 81, 121, 122, 108, 83, 71, 86, 119],
    /* 83 */ [54, 106, 117, 56, 115, 87, 108, 90, 110, 110, 65],
  ],
  morseCode: [
    /* 100 */ "-",
    /* 99 */ ".",
    /* 98 */ "--.",
    /* 97 */ "-.-.",
    /* 96 */ "---",
    /* 95 */ "--.",
    /* 94 */ "..-",
    /* 93 */ ".-",
    /* 92 */ "-.--",
    /* 91 */ ".-.",
    /* 90 */ "..-",
    /* 89 */ "-..",
    /* 88 */ "-.",
    /* 87 */ "-.",
    /* 86 */ "---",
    /* 85 */ "-.",
    /* 84 */ ".",
    /* 83 */ "-.",
  ],
  hexCode: [
    /* 100 */ "d3ceed",
    /* 99 */ "433c30",
    /* 98 */ "977d86",
    /* 97 */ "675c5b",
    /* 96 */ "867a7e",
    /* 95 */ "c2a9b6",
    /* 94 */ "d6d2ea",
    /* 93 */ "b8b8d8",
    /* 92 */ "a15948",
    /* 91 */ "2d2712",
    /* 90 */ "231e12",
    /* 89 */ "c1adbb",
    /* 88 */ "d0d2f1",
    /* 87 */ "362e28",
    /* 86 */ "d3b2c2",
    /* 85 */ "bfbdd4",
    /* 84 */ "553a2a",
    /* 83 */ "d0ceea",
  ],
};

let descToUrl = document.querySelector("textarea#descToUrl");
descToUrl.value =
  config.descriptions[config.descriptions.length - 1].join("\n");
let descToUrlOut = document.querySelector("span#descToUrlOut");
function descToUrlMakeLink(split) {
  return (
    "https://www.youtube.com/watch?v=" +
    split
      .map((e) => parseInt(e))
      .map((e) => String.fromCharCode(e))
      .join("")
  );
}
function descToUrlUpdate() {
  let split = descToUrl.value.split("\n");
  if (split.length !== 11) {
    descToUrlOut.innerText = "Invalid Input";
    return;
  }
  let link = descToUrlMakeLink(split);
  descToUrlOut.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
}
descToUrl.addEventListener("input", descToUrlUpdate);
descToUrlUpdate();
let descToUrlHistory = document.querySelector(
  "div#collapseDescToUrlHistoryContent",
);
config.descriptions.forEach((d, i) => {
  let link = descToUrlMakeLink(d);
  descToUrlHistory.innerHTML += `<span class="d-block ${i === config.descriptions.length - 1 ? "mb-0" : "mb-2"}">Day ${100 - i}: <a href="${link}" target="_blank">${link}</a><br></span>`;
});

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
morseCode.value = config.morseCode.join(" ");
let morseDecodeOut = document.querySelector("span#morseDecodeOut");
/*
  ChatGPT 3.5 Prompt:
  
  js function called fillLetters(fillPhrase, inputPhrase)
  where fillPhrase is a string, and inputphrase is another string.
  for each letter in fillPhrase:
  if the letter in inputPhrase that is also in fillPhrase, add a span element with the class "filled" with the letter. REMOVE THE FIRST INSTANCE OF THAT CHARACTER FROM FILLPHRASE
  if the letter in inputPhrase is NOT in fillPhrase, add a span element with the class "unfilled". then move to the next character in fillPhrase. 
  
  example:
  fillLetters('extst', 'tex')
  
  output:
  <span class="filled">e</span><span class="filled">x</span><span class="filled">t</span><span class="unfilled">s</span><span class="unfilled">t</span>
*/
function mapToCircledLetters(text) {
  const circledLetters = {
    A: "Ⓐ",
    B: "Ⓑ",
    C: "Ⓒ",
    D: "Ⓓ",
    E: "Ⓔ",
    F: "Ⓕ",
    G: "Ⓖ",
    H: "Ⓗ",
    I: "Ⓘ",
    J: "Ⓙ",
    K: "Ⓚ",
    L: "Ⓛ",
    M: "Ⓜ",
    N: "Ⓝ",
    O: "Ⓞ",
    P: "Ⓟ",
    Q: "Ⓠ",
    R: "Ⓡ",
    S: "Ⓢ",
    T: "Ⓣ",
    U: "Ⓤ",
    V: "Ⓥ",
    W: "Ⓦ",
    X: "Ⓧ",
    Y: "Ⓨ",
    Z: "Ⓩ",
  };
  return text
    .split("")
    .map((letter) => circledLetters[letter.toUpperCase()] || letter)
    .join("");
}
function mapToFilledCircleLetters(text) {
  const filledCircleLetters = {
    A: "🅐",
    B: "🅑",
    C: "🅒",
    D: "🅓",
    E: "🅔",
    F: "🅕",
    G: "🅖",
    H: "🅗",
    I: "🅘",
    J: "🅙",
    K: "🅚",
    L: "🅛",
    M: "🅜",
    N: "🅝",
    O: "🅞",
    P: "🅟",
    Q: "🅠",
    R: "🅡",
    S: "🅢",
    T: "🅣",
    U: "🅤",
    V: "🅥",
    W: "🅦",
    X: "🅧",
    Y: "🅨",
    Z: "🅩",
  };
  return text
    .split("")
    .map((letter) => filledCircleLetters[letter.toUpperCase()] || letter)
    .join("");
}
function fillLetters(fillPhrase, inputPhrase) {
  let output = "";
  for (let i = 0; i < fillPhrase.length; i++) {
    const letter = fillPhrase[i];
    const index = inputPhrase.indexOf(letter);
    if (index !== -1) {
      output += `<span class="filled">${letter}</span>`;
      inputPhrase = inputPhrase.slice(0, index) + inputPhrase.slice(index + 1);
    } else {
      output += `<span class="unfilled">${letter}</span>`;
    }
  }
  return output;
}

function morseCodeUpdate() {
  let decode = decodeMorse(morseCode.value);
  morseDecodeOut.innerHTML =
    "<p>Result: <code>" +
    decode +
    "</code></p><p>" +
    fillLetters(
      "never gonna give you up never gonna let you down never gonna run around and desert you",
      decode,
    ) +
    "</p>";
}
morseCodeUpdate();
morseCode.addEventListener("input", morseCodeUpdate);

/*
  ChatGPT 3.5 Prompt:
  
  js function drawPixels(hexArray, width, height) that does the following:
  clear canvas
  set canvas width and height
  for each hex value in hexArray
  add "#" to the beginning and draw that pixel at the (Math.floor(index / width) + 1, index % height)
*/
function drawCanvasPixels(canvas, ctx, hexArray, width, height, vflip) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = width;
  canvas.height = height;
  hexArray.forEach((hex, index) => {
    if (hex.length === 6) {
      hex = "#" + hex;
      const x = index % width;
      const y = Math.floor(index / width);
      ctx.fillStyle = hex;
      ctx.fillRect(x, y, 1, 1);
    } else {
      hex = "#000000";
    }
  });
}
let videoHexCodes = document.querySelector("textarea#videoHexCodes");
videoHexCodes.value = config.hexCode.join("\n");
let videoHexCodesOut = document.querySelector("canvas#videoHexCodesOut");
let videoHexCodesOutCtx = videoHexCodesOut.getContext("2d");
let videoHexCodesDimesion = {
  x: 10,
  y: 10,
  vflip: true,
};
function videoHexCodesUpdate() {
  let split = videoHexCodes.value.split("\n");
  videoHexCodes.setAttribute("rows", split.length);
  drawCanvasPixels(
    videoHexCodesOut,
    videoHexCodesOutCtx,
    split,
    videoHexCodesDimesion.x,
    videoHexCodesDimesion.y,
    videoHexCodesDimesion.vflip,
  );
}
//videoHexCodesUpdate();
videoHexCodes.addEventListener("input", videoHexCodesUpdate);
function videoHexCodesOutDimensionsUpdate() {
  videoHexCodesDimesion.x = parseInt(videoHexCodesOutWidth.value);
  videoHexCodesDimesion.y = parseInt(videoHexCodesOutHeight.value);
  //videoHexCodesDimesion.vflip = videoHexCodesOutVFlip.checked;
  videoHexCodesOutWidthLabel.innerText = "Width: " + videoHexCodesDimesion.x;
  videoHexCodesOutHeightLabel.innerText = "Height: " + videoHexCodesDimesion.y;
  videoHexCodesUpdate();
}
/*let videoHexCodesOutVFlip = document.querySelector(
  "input#videoHexCodesOutVFlip",
);
videoHexCodesOutVFlip.value = videoHexCodesDimesion.vflip;
videoHexCodesOutVFlip.addEventListener(
  "input",
  videoHexCodesOutDimensionsUpdate,
);*/
let videoHexCodesOutWidthLabel = document.querySelector(
  "#videoHexCodesOutWidthLabel",
);
let videoHexCodesOutWidth = document.querySelector("#videoHexCodesOutWidth");
videoHexCodesOutWidth.value = videoHexCodesDimesion.x;
videoHexCodesOutWidth.addEventListener(
  "input",
  videoHexCodesOutDimensionsUpdate,
);

let videoHexCodesOutHeightLabel = document.querySelector(
  "#videoHexCodesOutHeightLabel",
);
let videoHexCodesOutHeight = document.querySelector("#videoHexCodesOutHeight");
videoHexCodesOutHeight.value = videoHexCodesDimesion.y;
videoHexCodesOutHeight.addEventListener(
  "input",
  videoHexCodesOutDimensionsUpdate,
);
videoHexCodesOutDimensionsUpdate();
