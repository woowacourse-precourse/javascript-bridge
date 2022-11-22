/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const { ERROR_MESSAGE } = require('../../../src/Utils/Constant');
const { isRightRetryString } = require('../../../src/Utils/Validator/GameValidator');

describe('ControllerValidator unit test', () => {
  test('isRightRetryString object method test', () => {
    const lowerCaseString = 'r';
    const exceptString = 'U';
    const rightString = 'R';

    expect(() => {
      isRightRetryString(lowerCaseString);
    }).toThrow(ERROR_MESSAGE.RETRY_INPUT);
    expect(() => {
      isRightRetryString(exceptString);
    }).toThrow(ERROR_MESSAGE.RETRY_INPUT);
    expect(() => {
      isRightRetryString(rightString);
    }).not.toThrow(ERROR_MESSAGE.RETRY_INPUT);
  });
});
