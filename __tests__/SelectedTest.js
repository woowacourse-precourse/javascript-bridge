/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const Selected = require('../src/Model/Selected');
const { ERROR_MESSAGE } = require('../src/Utils/Constant');
const Validator = require('../src/Utils/Validator');

describe('Selected Model 테스트', () => {
  test('값의 입력에 따른 level 값 확인', () => {
    const selected = new Selected(Validator);
    const inputArray = ['U', 'D', 'D'];

    inputArray.forEach((input) => selected.addElement(input));

    expect(selected.level).toBe(inputArray.length);
  });

  test('reset 메소드 테스트', () => {
    const selected = new Selected(Validator);
    const inputArray = ['U', 'D', 'D'];

    inputArray.forEach((input) => selected.addElement(input));
    selected.reset();

    expect(selected.level).toBe(0);
  });

  test('getElement 메소드 테스트', () => {
    const selected = new Selected(Validator);
    const inputArray = ['U', 'D', 'D'];

    inputArray.forEach((input) => selected.addElement(input));

    inputArray.forEach((_, index) => {
      expect(selected.getElement(index)).toBe(inputArray[index]);
    });
  });

  test('예외 입력값에 대한 throw Error 테스트', () => {
    const selected = new Selected(Validator);

    const exceptString = 'R';
    const lowerCaseString = 'u';
    const number = 3;

    expect(() => {
      selected.addElement(exceptString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
    expect(() => {
      selected.addElement(lowerCaseString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
    expect(() => {
      selected.addElement(number);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
  });
});
