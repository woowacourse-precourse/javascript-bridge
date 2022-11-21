/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const { generate } = require('../../src/BridgeRandomNumberGenerator');
const Bridge = require('../../src/Model/Bridge');
const { ERROR_MESSAGE } = require('../../src/Utils/Constant');

describe('Bridge 예외 테스트', () => {
  test('다리 길이 input이 숫자가 아닐 시 예외 출력', () => {
    expect(() => new Bridge('12j', generate)).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => new Bridge(' 12', generate)).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => new Bridge('', generate)).toThrow(ERROR_MESSAGE.ISNAN);
  });

  test('다리 길이 3미만, 20이상 입력시 예외 출력', () => {
    expect(() => new Bridge(2, generate)).toThrow(ERROR_MESSAGE.RANGE);
    expect(() => new Bridge(21, generate)).toThrow(ERROR_MESSAGE.RANGE);
  });

  test('자연수가 아닌 경우 예외 출력', () => {
    expect(() => new Bridge(3.14, generate)).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => new Bridge(19.99, generate)).toThrow(ERROR_MESSAGE.ISNAN);
  });
});
