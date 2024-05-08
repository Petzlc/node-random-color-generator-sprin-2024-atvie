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

// this is supposed to connect the input color with the generated color so the output displays the input color. it doesn't work though.
const colorName = argv[2];
randomColor({
  //seed: `${colorName}`,
  luminosity: 'random',
  hue: `${colorName}`,
});
//const colorConvert = blue.toString(16);

//log the output into the console
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

console.log(randCol); //this is just to display the hex code of the color to see if it is the same as displayed in the box-design

console.log(typeof `${argv[2]}`); //just to find out what type of Data argv is. Maybe i can work with the string data type in order to connect the input with generating the color.
