/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const BridgeMaker = require('../../src/BridgeMaker');
const Bridge = require('../../src/Model/Bridge');
const { ERROR_MESSAGE } = require('../../src/utils/Constant');

describe('Bridge 생성 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });
  test('다리 길이 input이 숫자가 아닐 시 예외 출력', () => {
    const bridge = new Bridge();

    expect(() => bridge.setBridge('12j')).toThrow(ERROR_MESSAGE.BRIDGE_ISNAN);
  });

  test('다리 길이 3미만, 20이상 입력시 예외 출력', () => {
    const bridge = new Bridge();

    expect(() => bridge.setBridge(2)).toThrow(ERROR_MESSAGE.BRIDGE_RANGE);
  });
});
