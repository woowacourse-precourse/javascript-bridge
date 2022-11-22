const BridgeMaps = require('../../src/models/map/BridgeMaps');
const { MovingCommand } = require('../../src/models/command');

describe('다리 지도 클래스 테스트', () => {
  test('초기 지도 상태 테스트', () => {
    const bridgeMaps = new BridgeMaps();
    const result = bridgeMaps.getMaps();

    expect(result).toStrictEqual([[], []]);
  });

  test.each([
    ['U', 'U', 0, [true]],
    ['U', 'D', 0, [false]],
  ])(
    '윗 칸 입력일 시 지도 인덱스 0 배열에 요소 추가',
    (command, currentBridge, index, expected) => {
      const movingCommand = new MovingCommand(command);

      const bridgeMaps = new BridgeMaps();
      bridgeMaps.add(movingCommand, currentBridge);
      const result = bridgeMaps.getMaps()[index];

      expect(result).toStrictEqual(expected);
    },
  );

  test.each([
    ['D', 'D', 1, [true]],
    ['D', 'U', 1, [false]],
  ])(
    '아래 칸 입력일 시 지도 인덱스 1 배열에 요소 추가',
    (command, currentBridge, index, expected) => {
      const movingCommand = new MovingCommand(command);

      const bridgeMaps = new BridgeMaps();
      bridgeMaps.add(movingCommand, currentBridge);
      const result = bridgeMaps.getMaps()[index];

      expect(result).toStrictEqual(expected);
    },
  );

  test.each([
    ['U', 'D', 1, [null]],
    ['D', 'U', 0, [null]],
  ])('입력값과 다른 위치의 다리 배열에 null 추가', (command, currentBridge, index, expected) => {
    const movingCommand = new MovingCommand(command);

    const bridgeMaps = new BridgeMaps();
    bridgeMaps.add(movingCommand, currentBridge);
    const result = bridgeMaps.getMaps()[index];

    expect(result).toStrictEqual(expected);
  });
});
