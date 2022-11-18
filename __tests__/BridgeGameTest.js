const BridgeGame = require('../src/BridgeGame');
const BridgeState = require('../src/BridgeState');

describe('Bridge Game Move Test', () => {
  describe('사용자의 입력값이 일치할 경우', () => {
    test('사용자의 입력값이 U로 일치할 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const result = bridgeGame.move(['U']);
      expect(result).toEqual([['O', ' ']]);
    });

    test('사용자의 입력값이 D로 일치할 경우 Test', () => {
      const bridgeGame = new BridgeGame(['D', 'D', 'U']);
      const result = bridgeGame.move(['D']);
      expect(result).toEqual([[' ', 'O']]);
    });
  });

  describe('사용자의 입력값이 일치하지 않을 경우', () => {
    test('사용자의 입력값이 U로 일치하지 않을 경우 Test', () => {
      const bridgeGame = new BridgeGame(['D', 'D', 'U']);
      const result = bridgeGame.move(['U']);
      expect(result).toEqual([['X', ' ']]);
    });

    test('사용자의 입력값이 D로 일치하지 않을 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const result = bridgeGame.move(['D']);
      expect(result).toEqual([[' ', 'X']]);
    });
  });

  describe('사용자의 입력값이 처음이 아닌 경우', () => {
    test('2번째 사용자의 입력값이 일치하는 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const result = bridgeGame.move(['U', 'D']);
      expect(result).toEqual([
        ['O', ' '],
        [' ', 'O'],
      ]);
    });

    test('2번째 사용자의 입력값이 일치하지 않는 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const result = bridgeGame.move(['U', 'U']);
      expect(result).toEqual([
        ['O', ' '],
        ['X', ' '],
      ]);
    });
  });
});

describe('Bridge Game draw Test', () => {
  describe('사용자의 입력값이 일치할 경우', () => {
    test('사용자의 입력값이 U로 일치할 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const moveBridge = bridgeGame.move(['U']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual(['O', ' ']);
    });

    test('사용자의 입력값이 D로 일치할 경우 Test', () => {
      const bridgeGame = new BridgeGame(['D', 'D', 'U']);
      const moveBridge = bridgeGame.move(['D']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual([' ', 'O']);
    });
  });

  describe('사용자의 입력값이 일치하지 않을 경우', () => {
    test('사용자의 입력값이 U로 일치하지 않을 경우 Test', () => {
      const bridgeGame = new BridgeGame(['D', 'D', 'U']);
      const moveBridge = bridgeGame.move(['U']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual(['X', ' ']);
    });

    test('사용자의 입력값이 D로 일치하지 않을 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const moveBridge = bridgeGame.move(['D']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual([' ', 'X']);
    });
  });

  describe('사용자의 입력값이 처음이 아닌 경우', () => {
    test('2번째 사용자의 입력값이 일치하는 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const moveBridge = bridgeGame.move(['U', 'D']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual(['O |  ', '  | O']);
    });

    test('2번째 사용자의 입력값이 일치하지 않는 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const moveBridge = bridgeGame.move(['U', 'U']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual(['O | X', '  |  ']);
    });
  });
});

describe('Bridge Game reTry Test', () => {
  test.each([['U'], ['U', 'D'], ['U', 'D', 'D']])('', () => {
    const bridgeGame = new BridgeGame(['U', 'D', 'U']);
    const userBridge = ['U'];
    const result = bridgeGame.retry(userBridge);
    expect(result).toEqual([]);
  });

  test('시도 횟수 테스트', () => {
    BridgeState.numberOfAttempts = 1;
    const bridgeGame = new BridgeGame(['U', 'D', 'U']);
    const userBridge = ['U'];
    bridgeGame.retry(userBridge);

    const result = BridgeState.numberOfAttempts;
    expect(result).toBe(2);
  });

  test('시도 횟수 테스트', () => {
    BridgeState.numberOfAttempts = 1;
    const bridgeGame = new BridgeGame(['U', 'D', 'U']);
    const userBridge = ['U'];

    for (let i = 0; i < 5; i++) {
      bridgeGame.retry(userBridge);
    }

    const result = BridgeState.numberOfAttempts;
    expect(result).toBe(6);
  });
});
