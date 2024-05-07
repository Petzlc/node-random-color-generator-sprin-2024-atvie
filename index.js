import { argv } from 'node:process';
import kuler from 'kuler';
import randomColor from 'randomcolor';

const randCol = randomColor();
const longLine = kuler('#'.repeat(31), `${randCol}`);
const shortLine =
  kuler('#'.repeat(5), `${randCol}`) +
  ' '.repeat(21) +
  kuler('#'.repeat(5), `${randCol}`);
const lineWithText =
  kuler('#'.repeat(5), `${randCol}`) +
  ' '.repeat(7) +
  kuler(`${randCol}`, `${randCol}`) +
  ' '.repeat(7) +
  kuler('#'.repeat(5), `${randCol}`);

const colorName = argv[2];
randomColor({
  //seed: `${colorName}`,
  luminosity: 'random',
  hue: `${colorName}`,
});
//const colorConvert = blue.toString(16);
console.log(
  longLine +
    '\n' +
    longLine +
    '\n' +
    longLine +
    '\n' +
    shortLine +
    '\n' +
    lineWithText +
    '\n' +
    shortLine +
    '\n' +
    longLine +
    '\n' +
    longLine +
    '\n' +
    longLine,
);
//console.log(colorConvert);
//console.log(shortLine);
//console.log(colorName);
//console.log(kuler.has(colorName));
//const randCol = randomColor();
//console.log(randCol);
console.log(typeof `${argv[2]}`);
