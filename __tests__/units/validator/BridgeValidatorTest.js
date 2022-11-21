/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const { ERROR_MESSAGE } = require('../../../src/Utils/Constant');
const {
  isNumber,
  isNaturalNumber,
  isRightNumberRange,
} = require('../../../src/Utils/Validator/BridgeValidator');

describe('BridgeValidator unit test', () => {
  test('isNumber Object method', () => {
    const string = '32j';
    const trim = ' ';
    const number = 3;

    expect(() => {
      isNumber(string);
    }).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => {
      isNumber(trim);
    }).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => {
      isNumber(number);
    }).not.toThrow(ERROR_MESSAGE.ISNAN);
  });
  test('isNaturalNumber Object method', () => {
    const miusNumber = -1;
    const plusNumber = 1;

    expect(() => {
      isNaturalNumber(miusNumber);
    }).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => {
      isNaturalNumber(plusNumber);
    }).not.toThrow(ERROR_MESSAGE.ISNAN);
  });
  test('isRightNumberRange Object method', () => {
    const startNumber = 3;
    const endNumber = 20;
    const overNumber = 23;
    const underNumber = 1;

    expect(() => {
      isRightNumberRange(startNumber, endNumber, underNumber);
    }).toThrow(ERROR_MESSAGE.RANGE);
    expect(() => {
      isRightNumberRange(startNumber, endNumber, overNumber);
    }).toThrow(ERROR_MESSAGE.RANGE);
  });
});
