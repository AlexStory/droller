import DiceRoller from './src/droller';

const d = new DiceRoller();
console.log(d.roll(20,1));

let dice = d.getDice(6);


console.log(dice.roll(2));

console.log(dice.roll(3));

console.log(dice.roll());
console.log(dice.roll());
console.log(dice.roll());
console.log(dice.roll());
console.log(dice.roll());
