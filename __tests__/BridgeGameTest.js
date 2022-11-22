const BridgeGame = require('../src/BridgeGame');
const bridgeGame = new BridgeGame();

describe('다리 건너기 테스트', () => {
  test('사용자 입력과 다리가 맞지 않으면 X 출력', () => {
    const userMoving = 'U';
    const bridge = ['D', 'U', 'D'];
    expect(bridgeGame.move(userMoving, bridge)).toBe('X');
  });
  test('사용자 입력과 다리가 맞지 않으면 O 출력', () => {
    const userMoving = 'D';
    const bridge = ['D', 'U', 'D'];
    expect(bridgeGame.move(userMoving, bridge)).toBe('O');
  });
});
describe('재시작 테스트', () => {
  test('사용자 입력이 R이면 true 출력', () => {
    const userCommand = 'R';
    expect(bridgeGame.retry(userCommand)).toBe(true);
  });
  test('사용자 입력이 Q이면 false 출력', () => {
    const userCommand = 'Q';
    expect(bridgeGame.retry(userCommand)).toBe(false);
  });
});
