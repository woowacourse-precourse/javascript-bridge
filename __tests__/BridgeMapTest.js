const SETTING = require('../src/constants/gameSetting');
const BridgeMap = require('../src/Domain/BridgeMap');

describe('BridgeMap 기능 테스트', () => {
  const bridgeMap = new BridgeMap();
  test('위로 이동 성공', () => {
    bridgeMap.addMoveMark(SETTING.MOVING_UP, true);

    expect(bridgeMap.getBridgeMap()).toEqual([[SETTING.SUCCESS_MOVE], [SETTING.NOT_MOVE]]);
  });

  test('아래로 이동 실패', () => {
    bridgeMap.addMoveMark(SETTING.MOVING_DOWN, false);

    expect(bridgeMap.getBridgeMap()).toEqual([
      [SETTING.SUCCESS_MOVE, SETTING.NOT_MOVE],
      [SETTING.NOT_MOVE, SETTING.FAIL_MOVE],
    ]);
  });

  test('map 초기화', () => {
    bridgeMap.reset();

    expect(bridgeMap.getBridgeMap()).toEqual([[], []]);
  });
});

describe('예외 테스트', () => {
  test('위, 아래가 아닌 곳으로 이동했을 때', () => {
    const bridgeMap = new BridgeMap();

    expect(() => bridgeMap.addMoveMark('R', true)).toThrow('[ERROR]');
  });
});
