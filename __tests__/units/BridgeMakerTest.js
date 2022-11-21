/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const { makeBridge } = require('../../src/BridgeMaker');
const { generate } = require('../../src/BridgeRandomNumberGenerator');
const { isRightLevelString } = require('../../src/Utils/Validator/SelectedValidator');

describe('BridgeMaker Object Method unit test', () => {
  test('makeBridge 메소드 테스트:input size와 출력값의 길이는 같다.', () => {
    const inputNumber = 3;

    const result = makeBridge(inputNumber, generate);
    expect(result.length).toBe(inputNumber);
  });

  test('출력 값은 U또는 D로 구성되어있다. ', () => {
    const inputNumber = 3;

    const bridgeArray = makeBridge(inputNumber, generate);
    const result = Array.from(new Set(bridgeArray.map((bridgeEl) => isRightLevelString(bridgeEl))));

    expect(result).toStrictEqual([undefined]);
  });
});
