const BridgeMapPainter = require('../src/domain/BridgeMapPainter');

describe('🎨 BridgeMapPainter 클래스 테스트', () => {
  test('⭐ moveCommand와 유저의 위치, 게임 맵을 인자로 받아서 유저가 다음으로 진행할 수 있으면 O를 반환합니다.', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    const moveCommnad = 'U';
    const userLocation = 0;
    const gameMap = ['U', 'U', 'D'];
    const result = bridgeMapPainter.selectOXpattern(moveCommnad, userLocation, gameMap);

    expect(result).toBe('O');
  });

  test('⭐ moveCommand와 유저의 위치, 게임 맵을 인자로 받아서 유저가 다음으로 진행할 수 없으면 X를 반환합니다.', () => {
    const bridgeMapPainter = new BridgeMapPainter();
    const moveCommnad = 'D';
    const userLocation = 0;
    const gameMap = ['U', 'U', 'D'];
    const result = bridgeMapPainter.selectOXpattern(moveCommnad, userLocation, gameMap);

    expect(result).toBe('X');
  });
});
