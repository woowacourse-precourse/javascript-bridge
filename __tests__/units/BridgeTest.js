/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const Bridge = require('../../src/Model/Bridge');
const { INPUT_MESSAGE, BRIDGE_ELEMENT } = require('../../src/Utils/Constant');

describe('Bridge 유닛 테스트', () => {
  let randomNumbers;
  let mockGenerator;

  beforeEach(() => {
    randomNumbers = ['0', '0', '1', '0', '0'];
    mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
  });

  test('length getter 테스트: 생성 당시 입력한 길이와 length 길이의 일치', () => {
    const inputNumber = 5;
    const bridge = new Bridge(inputNumber, mockGenerator);

    expect(bridge.length).toBe(inputNumber);
  });
  test('getElement 메소드 테스트: 생성된 element와 getElement로 불러온 값의 일치 확인', () => {
    const bridge = new Bridge(5, mockGenerator);

    for (let i = 0; i < randomNumbers.length; i += 1) {
      expect(bridge.getElement(i)).toBe(
        randomNumbers[i] === BRIDGE_ELEMENT.UP ? INPUT_MESSAGE.UP : INPUT_MESSAGE.DOWN,
      );
    }
  });
});
