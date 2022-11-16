const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { makeBridge } = require('../src/BridgeMaker');
const BridgeMaker = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const OutputView = require('../src/OutputView');

describe('다리 만들기 테스트', () => {
  test('makeBridge - 반환하는 배열 길이가 입력한 size와 같은지 검사', () => {
    // Given
    const size = 3;
    const fc = generate;

    // When
    const bridgeLength = makeBridge(size, fc).length;

    // Then
    expect(bridgeLength).toEqual(size);
  });

  test('makeBridge - 반환하는 배열 요소가 U 또는 D인지 검사', () => {
    // Given
    const size = 5;
    const fc = generate;

    // When
    const bridge = makeBridge(size, fc);
    const characterRegExp = /^[UD]$/;

    // Then
    bridge.forEach((step) => expect(characterRegExp.test(step)).toBe(true));
  });
});
