const Bridge = require('../../../src/model/Bridge');
const BridgeMaker = require('../../../src/BridgeMaker');
const { Random } = require('@woowacourse/mission-utils');

// const mockRandoms = (numbers) => {
//   Random.pickNumberInRange = jest.fn();
//   numbers.reduce((acc, number) => {
//     return acc.mockReturnValueOnce(number);
//   }, Random.pickNumberInRange);
// };
// const getLogSpy = () => {
//   const logSpy = jest.spyOn(BridgeMaker, 'makeBridge');
//   logSpy.mockClear();
//   return logSpy;
// };

describe('다리 생성 테스트', () => {
  test('다리 생성 테스트', () => {
    const bridge = new Bridge();
    const bridgeSize = 5;

    bridge.setBridge(bridgeSize);
    expect(bridge.condition).toHaveLength(bridgeSize);
  });
});
