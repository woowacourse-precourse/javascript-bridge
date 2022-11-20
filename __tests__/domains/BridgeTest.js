/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const BridgeMaker = require('../../src/BridgeMaker');
const { generate } = require('../../src/BridgeRandomNumberGenerator');
const Bridge = require('../../src/Model/Bridge');
const {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  BRIDGE_ELEMENT,
} = require('../../src/Utils/Constant');

describe('Bridge 생성 테스트', () => {
  test('다리 생성 함수 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('다리 생성 테스트', () => {
    const bridge = new Bridge(generate);

    bridge.setBridge(4);

    expect(bridge.length).toBe(4);
  });

  test('getElement메소드에 대한 테스트', () => {
    const randomNumbers = ['0', '0', '0', '0', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = new Bridge(mockGenerator);
    bridge.setBridge(5);

    for (let i = 0; i < randomNumbers.length; i += 1) {
      expect(bridge.getElement(i)).toBe(
        randomNumbers[i] === BRIDGE_ELEMENT.UP
          ? INPUT_MESSAGE.UP
          : INPUT_MESSAGE.DOWN,
      );
    }
  });

  test('다리 길이 input이 숫자가 아닐 시 예외 출력', () => {
    const bridge = new Bridge(generate);

    expect(() => bridge.setBridge('12j')).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => bridge.setBridge(' 12')).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => bridge.setBridge('')).toThrow(ERROR_MESSAGE.ISNAN);
  });

  test('다리 길이 3미만, 20이상 입력시 예외 출력', () => {
    const bridge = new Bridge(generate);

    expect(() => bridge.setBridge(2)).toThrow(ERROR_MESSAGE.RANGE);
    expect(() => bridge.setBridge(21)).toThrow(ERROR_MESSAGE.RANGE);
  });

  test('자연수가 아닌 경우 예외 출력', () => {
    const bridge = new Bridge(generate);

    expect(() => bridge.setBridge(3.14)).toThrow(ERROR_MESSAGE.ISNAN);
    expect(() => bridge.setBridge(19.99)).toThrow(ERROR_MESSAGE.ISNAN);
  });
});
