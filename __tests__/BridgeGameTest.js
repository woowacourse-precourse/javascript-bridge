const BridgeGame = require('../src/BridgeGame');
const bridgeGame = new BridgeGame();

describe('다리 건너기 테스트', () => {
  test.each([
    ['U', ['D', 'U', 'D'], 'X'],
    ['D', ['D', 'U', 'D'], 'O'],
  ])(
    '사용자가 %s로 움직이면 다리 %s 를 건넌 결과는 %s이다.',
    (userMoving, bridge, expected) => {
      expect(bridgeGame.move(userMoving, bridge)).toBe(expected);
    },
  );
});

describe('재시작 테스트', () => {
  test.each([
    ['R', true],
    ['Q', false],
  ])('사용자 입력이 %s이면 %s 출력', (command, expected) => {
    expect(bridgeGame.retry(command)).toBe(expected);
  });
});
