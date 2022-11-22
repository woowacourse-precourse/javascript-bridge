const BridgeMapPainter = require('../src/domain/BridgeMapPainter');

describe('🎨 BridgeMapPainter 클래스 테스트', () => {
  test('⭐ selectOXpattern 메서드 : moveCommand와 유저의 위치, 게임 맵을 인자로 받아서 유저가 다음으로 진행할 수 있으면 O를 반환합니다.', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    const moveCommnad = 'U';
    const userLocation = 0;
    const gameMap = ['U', 'U', 'D'];
    const result = bridgeMapPainter.selectOXpattern(moveCommnad, userLocation, gameMap);

    expect(result).toBe('O');
  });

  test('⭐ selectOXpattern 메서드 : moveCommand와 유저의 위치, 게임 맵을 인자로 받아서 유저가 다음으로 진행할 수 없으면 X를 반환합니다.', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    const moveCommnad = 'D';
    const userLocation = 0;
    const gameMap = ['U', 'U', 'D'];
    const result = bridgeMapPainter.selectOXpattern(moveCommnad, userLocation, gameMap);

    expect(result).toBe('X');
  });

  test('⭐ getUserBridgeMap 메서드 : 현재 유저의 다리 건너기 맵 상태를 문자열로 반환합니다. (초기 빈 상태)', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    const result = '[]\n[]\n';
    expect(bridgeMapPainter.getUserBridgeMap()).toBe(result);
  });

  test('⭐ getUserBridgeMap 메서드 : 현재 유저의 다리 건너기 맵 상태를 문자열로 반환합니다. (upperBridge에 O가 하나 있을 때)', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    bridgeMapPainter.drawOX('U', 0, ['U', 'U', 'D']);
    const result = '[ O ]\n[   ]\n';
    expect(bridgeMapPainter.getUserBridgeMap()).toBe(result);
  });

  test('⭐ getUserBridgeMap 메서드 : 현재 유저의 다리 건너기 맵 상태를 문자열로 반환합니다. (lowerBridge에 X가 하나 있을 때)', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    bridgeMapPainter.drawOX('D', 0, ['U', 'U', 'D']);
    const result = '[   ]\n[ X ]\n';
    expect(bridgeMapPainter.getUserBridgeMap()).toBe(result);
  });

  test('⭐ isCorrectLocation 메서드 : upperBridge 또는 lowerBridge에 O가 포함되어 있으면 true를 반환합니다', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    bridgeMapPainter.drawOX('U', 0, ['U', 'U', 'U']);

    expect(bridgeMapPainter.isCorrectLocation()).toBeTruthy();
  });

  test('⭐ isCorrectLocation 메서드 : upperBridge 또는 lowerBridge에 X가 포함되어 있으면 false를 반환합니다', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    bridgeMapPainter.drawOX('D', 0, ['U', 'D', 'D']);

    expect(bridgeMapPainter.isCorrectLocation()).toBeFalsy();
  });

  test('⭐ drawOX 메서드 : moveCommand, userLocation, gameMap를 인자로 받아 유저의 현재 다리 상태를 그린 후 반환합니다.', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    const result = `[ O ]\n[   ]\n`;

    expect(bridgeMapPainter.drawOX('U', 0, ['U', 'D', 'D'])).toBe(result);
  });
});
