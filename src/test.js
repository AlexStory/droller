import test from 'ava';

test('should always pass', t => {
    t.pass();
});

test('simple logic', t => {
    t.is(2, 1 + 1);
});

test('booleans', t => {
    t.true(true);
});
