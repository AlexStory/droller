import test from 'ava';
import DiceRoller from './droller';
test('roll a d6', t => {
    const d = new DiceRoller();
    t.false(isNaN(d.roll(6,1)));
})
