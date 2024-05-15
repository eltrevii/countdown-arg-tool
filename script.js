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
    /* 82 */ [82, 109, 52, 79, 113, 80, 121, 71, 82, 100, 107],
    /* 81 */ [76, 50, 88, 119, 122, 51, 106, 117, 118, 52, 115],
    /* 80 */ [101, 100, 83, 48, 116, 57, 116, 69, 48, 53, 119],
    /* 79 */ [95, 98, 54, 100, 97, 65, 102, 99, 83, 54, 65],
    /* 78 */ [121, 97, 57, 90, 122, 86, 54, 50, 71, 65, 73],
    /* 77 */ [99, 121, 50, 90, 114, 102, 105, 114, 71, 90, 73],
    /* 76 */ [56, 48, 111, 82, 102, 67, 105, 119, 85, 109, 103],
    /* 75 */ [106, 86, 111, 85, 78, 54, 114, 97, 109, 102, 52],
    /* 74 */ [77, 57, 101, 69, 97, 51, 87, 54, 121, 104, 69],
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
    /* 82 */ "-.",
    /* 81 */ "---",
    /* 80 */ "-..",
    /* 79 */ "---",
    /* 78 */ "-.--",
    /* 77 */ ".--",
    /* 76 */ ".-",
    /* 75 */ "-..",
    /* 74 */ "--.",
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
    /* 82 */ "c2b9d2",
    /* 81 */ "5a3b32",
    /* 80 */ "7d6667",
    /* 79 */ "2f2f26",
    /* 78 */ "dbd9f2",
    /* 77 */ "c2b9d2",
    /* 76 */ "c8c3dd",
    /* 75 */ "cfcbde",
    /* 74 */ "ced4f5",
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
Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};
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
/*function fillLetters(fillPhrase, hexes, inputPhrase) {
  let output = "";
  let otherHex = [];
  let used = [];
  for (let i = 0; i < fillPhrase.length; i++) {
    const letter = fillPhrase[i];
    const index = inputPhrase.toLowerCase().indexOf(letter.toLowerCase());
    if (index !== -1) {
      console.log(letter, index);
      output += `<span class="filled">${letter}</span>`;
      used.push(index);
      otherHex.push(hexes[index]);
      inputPhrase = inputPhrase.slice(0, index) + inputPhrase.slice(index + 1);
      console.log(inputPhrase);
    } else {
      output += `<span class="unfilled">${letter}</span>`;
      if (letter !== " " && !letter.includes("\r") && !letter.includes("\n")) {
        otherHex.push("000000");
      }
    }
  }
  console.log(otherHex.join("\n"));
  console.log(used.sort((a, b) => a - b));
  config.hexCodeUnscramble = otherHex;
  return output;
}*/
function fillLetters(fillPhrase, hexes, inputPhrase) {
  let fillArray = fillPhrase
    //.replace(/ |\r|\n/g, "")
    .toLowerCase()
    .split("");
  let fillArrayCase = fillPhrase.split("");
  let inputArray = inputPhrase.toLowerCase().split("");
  let output = "";
  let otherHex = [];
  fillArray.forEach((letter, fillIndexOfChar) => {
    let inputIndexOfChar = inputArray.indexOf(letter);
    if (inputIndexOfChar > -1) {
      //console.log(letter, fillIndexOfChar, hexes[inputIndexOfChar]);
      output += `<span class="filled">${fillArrayCase[fillIndexOfChar]}</span>`;
      otherHex.push(hexes[inputIndexOfChar]);
      inputArray[inputIndexOfChar] = null;
    } else {
      output += `<span class="unfilled">${fillArrayCase[fillIndexOfChar]}</span>`;
      if (letter !== " " && !letter.includes("\r") && !letter.includes("\n")) {
        otherHex.push("000000");
      }
    }
  });
  config.hexCodeUnscramble = otherHex;
  //console.log(otherHex);
  return output;
}

function morseCodeUpdate() {
  let decode = decodeMorse(morseCode.value);
  morseDecodeOut.innerHTML =
    '<span class="d-block mt-3 mb-1">Result: <code>' +
    decode +
    '</code></span><h4>Morse Lyric Map</h4><p class="ms-2" style="overflow-wrap: anywhere;">' +
    fillLetters(
      `Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`,
      config.hexCode,
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
  if (vflip) {
    hexArray = config.hexCodeUnscramble;
  }
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
  videoHexCodesDimesion.vflip = videoHexCodesOutVFlip.checked;
  videoHexCodesOutWidthLabel.innerText = "Width: " + videoHexCodesDimesion.x;
  videoHexCodesOutHeightLabel.innerText = "Height: " + videoHexCodesDimesion.y;
  videoHexCodesUpdate();
}
let videoHexCodesOutVFlip = document.querySelector(
  "input#videoHexCodesOutVFlip",
);
videoHexCodesOutVFlip.value = videoHexCodesDimesion.vflip;
videoHexCodesOutVFlip.addEventListener(
  "input",
  videoHexCodesOutDimensionsUpdate,
);
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
