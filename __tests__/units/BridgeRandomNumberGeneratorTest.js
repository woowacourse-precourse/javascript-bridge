/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const { generate } = require('../../src/BridgeRandomNumberGenerator');

describe('BridgeRandomNumberGenerator Object Method unit test', () => {
  test('출력 값의 type은 number', () => {
    const number = generate();

    expect(typeof number).toBe('number');
  });

  test('출력 값은 0 또는 1', () => {
    const number = generate();

    expect(number !== 0 && number !== 1).toBe(false);
  });
});
