/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const { ERROR_MESSAGE } = require('../../../src/Utils/Constant');
const { isRightLevelString } = require('../../../src/Utils/Validator/SelectedValidator');

describe('ControllerValidator unit test', () => {
  test('isRightLevelString Object method test', () => {
    const lowerCaseString = 'u';
    const exceptString = 'R';
    const number = 3;
    const rightString = 'U';

    expect(() => {
      isRightLevelString(lowerCaseString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
    expect(() => {
      isRightLevelString(exceptString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
    expect(() => {
      isRightLevelString(number);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
    expect(() => {
      isRightLevelString(rightString);
    }).not.toThrow(ERROR_MESSAGE.LEVEL_INPUT);
  });
});
