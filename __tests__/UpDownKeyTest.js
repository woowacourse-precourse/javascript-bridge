const BridgeService = require('../src/service/BridgeService');
const UpDownKey = require('../src/service/domain/UpDownKey');
const BridgeLength = require('../src/service/domain/BridgeLength');
const { MODEL_KEY } = require('../src/utils/constants');

describe('이동할 칸 입력 테스트', () => {
  test('(U or D 제외 문자 입력(오류) - "a") 입력 테스트', () => {
    const input = 'a';
    const bridgeService = new BridgeService();

    expect(() => bridgeService.recordMove(input)).toThrow('[ERROR]');
  });

  test('(U or D 제외 문자 입력(오류) - "1") 입력 테스트', () => {
    const input = '1';
    const bridgeService = new BridgeService();

    expect(() => bridgeService.recordMove(input)).toThrow('[ERROR]');
  });

  test('(U or D 제외 문자 입력(오류) - "u") 입력 테스트', () => {
    const input = 'u';
    const bridgeService = new BridgeService();

    expect(() => bridgeService.recordMove(input)).toThrow('[ERROR]');
  });

  test('(단위테스트(create - update)) 입력 테스트', () => {
    const inputLength = '3';
    const inputKey = 'U';

    const bridgeService = new BridgeService();

    bridgeService.start(inputLength);
    bridgeService.recordMove(inputKey);

    expect(bridgeService.getRepo(MODEL_KEY.userBridge)).toEqual(['U']);
  });
});
