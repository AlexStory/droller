import test from 'ava';
import DiceRoller from './droller';

const d = new DiceRoller();

test('roll a d6', t => {
    t.false(isNaN(d.roll(6,1)));
});

test('d6 is less than 7', t => {
    t.true(d.roll(6,1) < 7);
});

test('droller needs numbers', t => {
    t.throws(() => d.roll('a', 'b') );
});

test('getDice can roll', t => {
    const d6 = new d.getDice(6);
    t.false(isNaN(d6.roll()));
});

test('getDice rolls multiples', t => {
    const d6 = new d.getDice(6);
    t.false(isNaN(d6.roll(2)));
    t.true(d6.roll(2) >= 2);
    t.true(d6.roll(2) <= 12);
});
