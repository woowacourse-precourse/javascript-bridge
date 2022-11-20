const SETTING = require('../src/constants/gameSetting');
const BridgeMap = require('../src/Model/BridgeMap');

describe('BridgeMap 테스트', () => {
  test('위로 세번 이동 성공', () => {
    const bridgeMap = new BridgeMap();
    bridgeMap.addMoveMark(SETTING.MOVING_UP, true);
    bridgeMap.addMoveMark(SETTING.MOVING_UP, true);
    bridgeMap.addMoveMark(SETTING.MOVING_UP, true);

    expect(bridgeMap.getBridgeMap()).toEqual([
      [SETTING.CAN_MOVE, SETTING.CAN_MOVE, SETTING.CAN_MOVE],
      [SETTING.DONT_MOVE, SETTING.DONT_MOVE, SETTING.DONT_MOVE],
    ]);
  });

  test('위로 이동 성공, 아래로 이동 실패', () => {
    const bridgeMap = new BridgeMap();
    bridgeMap.addMoveMark(SETTING.MOVING_UP, true);
    bridgeMap.addMoveMark(SETTING.MOVING_DOWN, false);

    expect(bridgeMap.getBridgeMap()).toEqual([
      [SETTING.CAN_MOVE, SETTING.DONT_MOVE],
      [SETTING.DONT_MOVE, SETTING.CANT_MOVE],
    ]);
  });

  test('map 초기화', () => {
    const bridgeMap = new BridgeMap();
    bridgeMap.addMoveMark(SETTING.MOVING_UP, true);
    bridgeMap.addMoveMark(SETTING.MOVING_DOWN, false);

    bridgeMap.reset();
    expect(bridgeMap.getBridgeMap()).toEqual([[], []]);
  });
});
