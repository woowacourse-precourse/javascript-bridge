/* eslint-disable max-lines-per-function */
const BridgeMaker = require('../src/BridgeMaker');
const { mockGenerator } = require('./BridgeGameTest');

describe('다리를 생성하는 BridgeMaker 객체 테스트', () => {
  test('다리의 길이를 입력 받아서 다리를 생성한다.', () => {
    const bridgeLength = 4;
    const mockNumbersGenerator = mockGenerator([0, 1, 1, 0]);
    const bridge = BridgeMaker.makeBridge(bridgeLength, mockNumbersGenerator);

    expect(bridge).toEqual(['D', 'U', 'U', 'D']);
  });
});
