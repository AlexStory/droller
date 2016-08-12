import test from 'ava';
import DiceRoller from './droller';
test('roll a d6', t => {
    const d = new DiceRoller();
    t.false(isNaN(d.roll(6,1)));
});

test('d6 is less than 7', t => {
    const d = new DiceRoller();
    t.true(d.roll(6,1) < 7);
});
