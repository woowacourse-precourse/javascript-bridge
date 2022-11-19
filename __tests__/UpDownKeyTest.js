const BridgeService = require('../src/service/BridgeService');

const { MODEL_KEY } = require('../src/utils/constants');

describe('이동할 칸 입력 테스트', () => {
  test('(단위테스트(create - update)) 입력 테스트', () => {
    const inputLength = '3';
    const inputKey = 'U';

    const bridgeService = new BridgeService();

    bridgeService.start(inputLength);
    bridgeService.recordMove(inputKey);

    expect(bridgeService.getRepo(MODEL_KEY.userBridge)).toEqual(['U']);
  });
});
