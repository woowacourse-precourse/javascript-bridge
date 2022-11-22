const BridgeGame = require('../src/model/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test('move 메서드 기능 테스트 : 입력 받은 칸이 건널 수 있는 칸이라면 O 표시하고, 건널 수 없는 칸이라면 X 표시한다', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.move((direction = 'U'), (CAN_MOVE = true));
    bridgeGame.move((direction = 'D'), (CAN_MOVE = false));

    expect(bridgeGame.getUpperBridge()).toEqual(['O', ' ']);
    expect(bridgeGame.getLowerBridge()).toEqual([' ', 'X']);
  });

  test('move 메서드 기능 테스트 : 입력 받은 칸이 건널 수 있는 칸이라면 O 표시하고, 건널 수 없는 칸이라면 X 표시한다', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.move((direction = 'D'), (CAN_MOVE = true));
    bridgeGame.move((direction = 'D'), (CAN_MOVE = true));
    bridgeGame.move((direction = 'D'), (CAN_MOVE = true));
    bridgeGame.move((direction = 'U'), (CAN_MOVE = false));

    expect(bridgeGame.getUpperBridge()).toEqual([' ', ' ', ' ', 'X']);
    expect(bridgeGame.getLowerBridge()).toEqual(['O', 'O', 'O', ' ']);
  });

  test('retry 메서드 기능 테스트 : 게임 재시도하는 경우 총 시도 횟수가 1 증가하고 건너간 다리의 모든 칸 삭제한다', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.move((direction = 'D'), (CAN_MOVE = true));
    bridgeGame.move((direction = 'U'), (CAN_MOVE = false));
    bridgeGame.retry();

    expect(bridgeGame.getUpperBridge()).toEqual([]);
    expect(bridgeGame.getLowerBridge()).toEqual([]);
    expect(bridgeGame.getRetryingCount()).toEqual(2);
  });

  test.each([
    ['3'],
    ['UP'],
    ['DOWN'],
    ['u'],
    ['d'],
    ['up'],
    ['down'],
    ['UU'],
    ['DD'],
    ['s'],
    [''],
    ['R'],
    ['Q'],
  ])(
    '예외 테스트 : 이동할 칸에 대한 입력값이 잘못된 경우 예외 처리한다',
    (input) => {
      expect(() => {
        const bridgeGame = new BridgeGame();
        BridgeGame.validateDirection(input);
      }).toThrow('[ERROR]');
    }
  );

  test('예외 테스트 : 이동할 칸에 대한 입력값이 빈칸인 경우 알맞은 에러 메시지 출력한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => BridgeGame.validateDirection('')).toThrow(
      '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.'
    );
  });

  test('예외 테스트 : 이동할 칸에 대한 입력값이 문자가 아닌 경우 알맞은 에러 메시지 출력한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => BridgeGame.validateDirection('30')).toThrow(
      '[ERROR] 숫자를 제외한 문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 이동할 칸에 대한 입력값이 대문자가 아닌 소문자(u 또는 d)인 경우 알맞은 에러 메시지 출력한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => BridgeGame.validateDirection('u')).toThrow(
      '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 이동할 칸에 대한 입력값이 U 또는 D가 아닌 경우 알맞은 에러 메시지 출력한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => BridgeGame.validateDirection('DOWN')).toThrow(
      '[ERROR] U (위칸) 와 D (아래칸) 중에서만 이동할 칸을 정해 입력해주세요.'
    );
  });

  test.each([
    ['20'],
    ['retry'],
    ['quit'],
    ['r'],
    ['q'],
    ['RR'],
    ['QQ'],
    ['QUIT'],
    ['RETRY'],
    ['U'],
    ['D'],
  ])(
    '예외 테스트 : 게임 재시작 여부에 대한 입력값이 잘못된 경우 예외 처리한다',
    (input) => {
      expect(() => {
        const bridgeGame = new BridgeGame();
        BridgeGame.validateCommand(input);
      }).toThrow('[ERROR]');
    }
  );

  test('예외 테스트 : 게임 재시작 여부에 대한 입력값이 빈칸인 경우 알맞은 에러 메시지 출력한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => BridgeGame.validateCommand('')).toThrow(
      '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.'
    );
  });

  test('예외 테스트 : 게임 재시작 여부에 대한 입력값이 문자가 아닌 경우 알맞은 에러 메시지 출력한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => BridgeGame.validateCommand('2')).toThrow(
      '[ERROR] 숫자를 제외한 문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 게임 재시작 여부에 대한 입력값이 대문자가 아닌 소문자(r 또는 q)인 경우 알맞은 에러 메시지 출력한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => BridgeGame.validateCommand('q')).toThrow(
      '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 게임 재시작 여부에 대한 입력값이 R 또는 Q가 아닌 경우 알맞은 에러 메시지 출력한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => BridgeGame.validateCommand('retry')).toThrow(
      '[ERROR] R (재시도) 와 Q (종료) 중에서만 입력해주세요.'
    );
  });
});
