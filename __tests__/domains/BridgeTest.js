/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const BridgeMaker = require('../../src/BridgeMaker');
const { generate } = require('../../src/BridgeRandomNumberGenerator');
const Bridge = require('../../src/Model/Bridge');

describe('Bridge 도메인 로직 테스트', () => {
  test('다리 생성 함수 테스트', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('다리 생성 테스트', () => {
    const bridge = new Bridge(4, generate);

    expect(bridge.length).toBe(4);
  });
});
