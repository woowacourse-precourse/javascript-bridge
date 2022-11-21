/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const Selected = require('../../src/Model/Selected');
const { ERROR_MESSAGE } = require('../../src/Utils/Constant');

describe('Selected 예외 값 입력 테스트', () => {
  let selected;

  beforeEach(() => {
    selected = new Selected();
  });
  test('다른 문자 입력에 대한 예외테스트', () => {
    const exceptString = 'R';

    expect(() => {
      selected.addElement(exceptString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
  });

  test('소문자 입력에 대한 예외 테스트', () => {
    const lowerCaseString = 'u';

    expect(() => {
      selected.addElement(lowerCaseString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
  });
  test('숫자 입력에 대한 예외 테스트', () => {
    expect(() => {
      const number = 3;

      selected.addElement(number);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
  });
});
