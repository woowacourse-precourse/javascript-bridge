const BridgeMap = require('../src/models/BridgeMap');
const { MovingCommand } = require('../src/models/command');

describe('다리 지도 클래스 테스트', () => {
  test('초기 지도 상태 테스트', () => {
    const bridgeMap = new BridgeMap();
    const result = bridgeMap.getMap();

    expect(result).toStrictEqual([[], []]);
  });

  test.each([
    ['U', 'U', 0, [true]],
    ['D', 'D', 1, [true]],
  ])(
    '현재 위치의 값이 입력값과 같으면 해당 다리 배열에 true 추가',
    (command, currentBridge, index, expected) => {
      const movingCommand = new MovingCommand(command);

      const bridgeMap = new BridgeMap();
      bridgeMap.add(movingCommand, currentBridge);
      const result = bridgeMap.getMap()[index];

      expect(result).toStrictEqual(expected);
    },
  );

  test.each([
    ['U', 'D', 0, [false]],
    ['D', 'U', 1, [false]],
  ])(
    '현재 위치의 값이 입력값과 다르면 해당 다리 배열에 false 추가',
    (command, currentBridge, index, expected) => {
      const movingCommand = new MovingCommand(command);

      const bridgeMap = new BridgeMap();
      bridgeMap.add(movingCommand, currentBridge);
      const result = bridgeMap.getMap()[index];

      expect(result).toStrictEqual(expected);
    },
  );

  test.each([
    ['U', 'D', 1, [null]],
    ['D', 'U', 0, [null]],
  ])('입력값과 다른 위치의 다리 배열에 null 추가', (command, currentBridge, index, expected) => {
    const movingCommand = new MovingCommand(command);

    const bridgeMap = new BridgeMap();
    bridgeMap.add(movingCommand, currentBridge);
    const result = bridgeMap.getMap()[index];

    expect(result).toStrictEqual(expected);
  });

  test('지도 초기화', () => {
    const movingCommand = new MovingCommand('U');

    const bridgeMap = new BridgeMap();
    bridgeMap.add(movingCommand, 'U');
    bridgeMap.reset();
    const result = bridgeMap.getMap();

    expect(result).toStrictEqual([[], []]);
  });
});
