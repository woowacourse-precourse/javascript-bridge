const { Random } = require('@woowacourse/mission-utils');
const { makeBridge } = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

describe('BridgeMarker 테스트', () => {
  test('makeBridge메서드가 정상 동작하는지 확인한다.', () => {
    mockRandoms([1, 1, 0, 0, 1]);

    const bridge = makeBridge(5, generate);

    expect(bridge).toEqual(['U', 'U', 'D', 'D', 'U']);
  });
});
