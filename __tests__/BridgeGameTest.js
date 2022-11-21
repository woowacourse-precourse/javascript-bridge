const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');

afterEach(() => {
  Console.close();
});

describe('BridgeGame 클래스의 move() 메서드 테스트', () => {
  test('this.moveLogs 멤버변수에 쌓아줄 입력값이 잘 들어가는지 확인', () => {
    const bridge = new BridgeGame();
    const userInput = 'D';
    bridge.move(userInput);
    const result = 'D';
    expect(...bridge.moveLogs).toContain(result);
  });
});

describe('BridgeGame 클래스의 유저가 움직인 다리 맵 만드는 기능 테스트', () => {
  test('userMoveMap() 메서드가 정상적으로 다리 만들기 위한 준비가 되는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const userMoveLogs = ['U', 'D', 'U'];
    const bridge = ['U', 'D', 'D'];
    const result = [
      [' O ', '   ', ' X '],
      ['   ', ' O ', '   '],
    ];
    expect(bridgeGame.userMoveMap(userMoveLogs, bridge)).toEqual(result);
  });
  test.failing('userMoveMap() 메서드가 정상적으로 다리 만들기 위한 준비가 실패인지 확인', () => {
    const bridgeGame = new BridgeGame();
    const userMoveLogs = ['U', 'D', 'U'];
    const bridge = ['U', 'D', 'D'];
    const result = [
      [' O ', '   ', ' O '],
      ['   ', ' O ', '   '],
    ];
    expect(bridgeGame.userMoveMap(userMoveLogs, bridge)).toEqual(result);
  });
  test('bridgeToString() 메서드가 원하는 모양의 string으로 변환되는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const notStringBridge = [
      [' O ', '   ', ' X '],
      ['   ', ' O ', '   '],
    ];
    const convertedBridge = ['[ O |   | X ]', '[   | O |   ]'];
    expect(bridgeGame.bridgeToString(notStringBridge)).toEqual(convertedBridge);
  });
  test.failing('bridgeToString() 메서드가 잘못된 모양으로 변환되어 실패하는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const notStringBridge = [
      [' O ', '   ', ' X '],
      ['   ', ' O ', '  '],
    ];
    const convertedBridge = ['[ O       X ]', '[     O      ]'];
    expect(bridgeGame.bridgeToString(notStringBridge)).toEqual(convertedBridge);
  });
});
describe('BridgeGame클래스의 retry() 기능 테스트', () => {
  test('retry()의 argument로 "R"을 넣었을때 true 반환 확인', () => {
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.retry('R');
    expect(result).toEqual(true);
  });
  test('retry()의 argument로 "Q"을 넣었을때 false 반환 확인', () => {
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.retry('Q');
    expect(result).toEqual(false);
  });
  test('retry()의 argument로 "R"을 넣었을때 user의 시도 횟수가 1에서 2로 증가하는지 확인', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.retry('R');
    const result = bridgeGame.tryCount;
    expect(result).toEqual(2);
  });
  test.failing(
    'retry()의 argument로 "R"을 넣었을때 user의 시도 횟수가 증가하는지 실패 테스트',
    () => {
      const bridgeGame = new BridgeGame();
      bridgeGame.retry('R');
      const result = bridgeGame.tryCount;
      expect(result).toEqual(1);
    }
  );
});
