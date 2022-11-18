const BridgeLength = require('../src/service/domain/BridgeLength');
const { MODEL_KEY } = require('../src/utils/constants');

describe('다리 길이 테스트', () => {
  test('(다리 길이(오류) - 문자)', () => {
    const input = 'a';
    const bridgeLength = new BridgeLength(input);
    expect(() => bridgeLength.doAction()).toThrow('[ERROR]');
  });

  test('(다리 길이(오류) - 3미만의 숫자)', () => {
    const input = '1';
    const bridgeLength = new BridgeLength(input);
    expect(() => bridgeLength.doAction()).toThrow('[ERROR]');
  });

  test('(다리 길이(오류) - 20초과의 숫자)', () => {
    const input = '21';
    const bridgeLength = new BridgeLength(input);
    expect(() => bridgeLength.doAction()).toThrow('[ERROR]');
  });

  test('(다리 길이(오류) - 문자 + 숫자(3 ~ 20))', () => {
    const input = '20 ';
    const bridgeLength = new BridgeLength(input);
    expect(() => bridgeLength.doAction()).toThrow('[ERROR]');
  });

  test('(다리 길이(정상) - 숫자(3 ~ 20))', () => {
    const input = '3';
    const bridgeLength = new BridgeLength(input);

    bridgeLength.doAction();

    expect(bridgeLength.getModelFor(MODEL_KEY.answerBridge)).toHaveLength(
      Number(input)
    );
    expect(bridgeLength.getModelFor(MODEL_KEY.tryCount)).toEqual(1);
  });
});
