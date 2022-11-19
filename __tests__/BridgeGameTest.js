const BridgeGame = require('../src/model/BridgeGame');

describe('Bridge Game Move Test', () => {
  let bridgeGame;
  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });
  describe('사용자의 입력값이 일치할 경우', () => {
    test('사용자의 입력값이 U로 일치할 경우 Test', () => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      const result = bridgeGame.move(['U']);
      expect(result).toEqual([['O', ' ']]);
    });

    test('사용자의 입력값이 D로 일치할 경우 Test', () => {
      bridgeGame.updateBridge(['D', 'D', 'U']);
      const result = bridgeGame.move(['D']);
      expect(result).toEqual([[' ', 'O']]);
    });
  });

  describe('사용자의 입력값이 일치하지 않을 경우', () => {
    test('사용자의 입력값이 U로 일치하지 않을 경우 Test', () => {
      bridgeGame.updateBridge(['D', 'D', 'U']);
      const result = bridgeGame.move(['U']);
      expect(result).toEqual([['X', ' ']]);
    });

    test('사용자의 입력값이 D로 일치하지 않을 경우 Test', () => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      const result = bridgeGame.move(['D']);
      expect(result).toEqual([[' ', 'X']]);
    });
  });

  describe('사용자의 입력값이 처음이 아닌 경우', () => {
    test('2번째 사용자의 입력값이 일치하는 경우 Test', () => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      const result = bridgeGame.move(['U', 'D']);
      expect(result).toEqual([
        ['O', ' '],
        [' ', 'O'],
      ]);
    });

    test('2번째 사용자의 입력값이 일치하지 않는 경우 Test', () => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      const result = bridgeGame.move(['U', 'U']);
      expect(result).toEqual([
        ['O', ' '],
        ['X', ' '],
      ]);
    });
  });
});

describe('Bridge Game draw Test', () => {
  let bridgeGame;
  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });
  describe('사용자의 입력값이 일치할 경우', () => {
    test('사용자의 입력값이 U로 일치할 경우 Test', () => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      const moveBridge = bridgeGame.move(['U']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual(['O', ' ']);
    });

    test('사용자의 입력값이 D로 일치할 경우 Test', () => {
      bridgeGame.updateBridge(['D', 'D', 'U']);
      const moveBridge = bridgeGame.move(['D']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual([' ', 'O']);
    });
  });

  describe('사용자의 입력값이 일치하지 않을 경우', () => {
    test('사용자의 입력값이 U로 일치하지 않을 경우 Test', () => {
      bridgeGame.updateBridge(['D', 'D', 'U']);
      const moveBridge = bridgeGame.move(['U']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual(['X', ' ']);
    });

    test('사용자의 입력값이 D로 일치하지 않을 경우 Test', () => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      const moveBridge = bridgeGame.move(['D']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual([' ', 'X']);
    });
  });

  describe('사용자의 입력값이 처음이 아닌 경우', () => {
    test('2번째 사용자의 입력값이 일치하는 경우 Test', () => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      const moveBridge = bridgeGame.move(['U', 'D']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual(['O |  ', '  | O']);
    });

    test('2번째 사용자의 입력값이 일치하지 않는 경우 Test', () => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      const moveBridge = bridgeGame.move(['U', 'U']);
      const result = bridgeGame.draw(moveBridge);
      expect(result).toEqual(['O | X', '  |  ']);
    });
  });
});

describe('Bridge Game reTry Test', () => {
  let bridgeGame;
  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });
  test('reTry userBridge 초기화 테스트 ', () => {
    bridgeGame.addBridgeFromUser(['U', 'D']);
    bridgeGame.retry();
    const result = bridgeGame.getUserBridge();
    expect(result).toEqual([]);
  });

  test('reTry userBridge 초기화 테스트 ', () => {
    bridgeGame.addBridgeFromUser(['U', 'D']);
    bridgeGame.retry();
    const result = bridgeGame.getUserBridge();
    expect(result).toEqual([]);
  });

  test('reTry 시도 횟수 4회 일경우 테스트 ', () => {
    console.log(bridgeGame.getNumberOfAttempts());
    bridgeGame.retry();
    bridgeGame.retry();
    bridgeGame.retry();
    const result = bridgeGame.getNumberOfAttempts();
    expect(result).toEqual(4);
  });
});
