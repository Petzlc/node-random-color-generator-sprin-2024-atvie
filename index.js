import { argv } from 'node:process';
import kuler from 'kuler';
import randomColor from 'randomcolor';

const hue = argv[2];
const luminosity = argv[3];

const randCol = randomColor({
  // generates a random color if there's no input
  luminosity: luminosity, // this is supposed to connect the input color with the generated color so the output displays the input color.
  hue: hue,
});

const longLine = kuler('#'.repeat(31), randCol); // Variable for the long lines 31 '#'.

const shortLine = // Variable for the two short lines with 5 '#' and no text in between
  kuler('#'.repeat(5), randCol) +
  ' '.repeat(21) +
  kuler('#'.repeat(5), randCol);

const lineWithText = // Variable for the two short lines with 5 '#' and no text in between
  kuler('#'.repeat(5), randCol) +
  ' '.repeat(7) +
  kuler(randCol, randCol) + // This line generates the hex in the same random color
  ' '.repeat(7) +
  kuler('#'.repeat(5), randCol);

console.log(
  // log the output into the console
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
