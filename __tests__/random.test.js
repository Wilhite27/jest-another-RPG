const { test, expect } = require('@jest/globals');
const checkifEqual = require('../lib/random.js');
const randomNumber = require('../lib/random')

// test('checks if 10 is equal to 10', () => {
//     expect(checkifEqual(10, 10)).toBe(true);
// });

test ('gets random number between 1 and 10', () => {
    expect(randomNumber(0)).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});