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
  test('makeUserMoveMap() 유저가 입력한 movelogs에 따라 map을 만드는지 테스트', () => {
    const bridgeGame = new BridgeGame();
    const moveLogs = ['U', 'D', 'U'];
    const bridge = ['U', 'D', 'D'];
    const result = [
      ['O', ' ', 'X'],
      [' ', 'O', ' '],
    ];
    expect(bridgeGame.makeUserMoveMap(moveLogs, bridge)).toEqual(result);
  });
  test.failing('makeUserMoveMap() 에 반대되는 결과값을 비교할시에 실패하는지 테스트', () => {
    const bridgeGame = new BridgeGame();
    const moveLogs = ['U', 'D', 'U'];
    const bridge = ['U', 'D', 'D'];
    const result = [
      ['O', ' ', ' '],
      [' ', 'O', 'X'],
    ];
    expect(bridgeGame.makeUserMoveMap(moveLogs, bridge)).toEqual(result);
  });
  test('checkingUserMoveLogs()에 O X 검사한 배열을 넘길때 제대로된 map으로 변환되는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const checkedMap = [
      ['U', 'O'],
      ['D', 'O'],
      ['U', 'X'],
    ];
    const result = [
      ['O', ' ', 'X'],
      [' ', 'O', ' '],
    ];
    expect(bridgeGame.checkingUserMoveLogs(checkedMap)).toEqual(result);
  });
  test.failing(
    'checkingUserMoveLogs()에 O X 검사한 배열을 argument로 넘기고 잘못된 값이 나오면 실패 확인',
    () => {
      const bridgeGame = new BridgeGame();
      const checkedMap = [
        ['U', 'O'],
        ['D', 'O'],
        ['U', 'X'],
      ];
      const result = [
        ['O', ' ', 'O'],
        [' ', 'O', ' '],
      ];
      expect(bridgeGame.checkingUserMoveLogs(checkedMap)).toEqual(result);
    }
  );
  test('bridgeToString() 메서드가 원하는 모양의 string으로 변환되는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const moveLogs = ['U', 'D', 'U'];
    const bridge = ['U', 'D', 'D'];
    const map = bridgeGame.makeUserMoveMap(moveLogs, bridge);
    const result = ['[ O |   | X ]', '[   | O |   ]'];
    expect(bridgeGame.bridgeToString(map)).toEqual(result);
  });
  test.failing('bridgeToString() 메서드가 잘못된 모양으로 변환되어 실패하는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const moveLogs = ['U', 'D', 'U'];
    const bridge = ['U', 'D', 'D'];
    const map = bridgeGame.makeUserMoveMap(moveLogs, bridge);
    const result = ['[ O |   | X ]', '[   | X |   ]'];
    expect(bridgeGame.bridgeToString(map)).toEqual(result);
  });
});

describe('BridgeGame클래스의 retry() 기능 테스트', () => {
  test('retry()호출했을때 this.moveLogs 멤버변수가 초기화 되는지 확인', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.move('U');
    bridgeGame.retry();
    const moveLogs = bridgeGame.moveLogs;
    expect(moveLogs).toEqual([]);
  });
  test.failing('retry()를 하지않으면 moveLogs가 쌓여 초기화되지 않는지 확인 실패테스트', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.move('U');
    const moveLogs = bridgeGame.moveLogs;
    expect(moveLogs).toEqual([]);
  });
  test('retry() 실행했을때 user의 시도 횟수가 1에서 2로 증가하는지 확인', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.retry('R');
    const result = bridgeGame.tryCount;
    expect(result).toEqual(2);
  });
  test.failing('retry() 실행했을때 user의 시도 횟수가 증가하는지 실패 테스트', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.retry('R');
    const result = bridgeGame.tryCount;
    expect(result).toEqual(1);
  });
});
