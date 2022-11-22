const BridgeGame = require('../src/model/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test.each([
    ['U', true, ['O']],
    ['U', false, ['X']],
    ['D', true, [' ']],
    ['D', false, [' ']],
  ])(
    'move 메서드 기능 테스트 : 입력 받은 칸이 건널 수 있는 칸이라면 O 표시하고, 건널 수 없는 칸이라면 X 표시한다',
    (direction, CAN_MOVE, expected) => {
      const bridgeGame = new BridgeGame();
      bridgeGame.move(direction, CAN_MOVE);

      expect(bridgeGame.getUpperBridge()).toEqual(expected);
    }
  );

  test.each([
    ['U', true, [' ']],
    ['U', false, [' ']],
    ['D', true, ['O']],
    ['D', false, ['X']],
  ])(
    'move 메서드 기능 테스트 : 입력 받은 칸이 건널 수 있는 칸이라면 O 표시하고, 건널 수 없는 칸이라면 X 표시한다',
    (direction, CAN_MOVE, expected) => {
      const bridgeGame = new BridgeGame();
      bridgeGame.move(direction, CAN_MOVE);

      expect(bridgeGame.getLowerBridge()).toEqual(expected);
    }
  );

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
    ['', '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.'],
    ['3', '[ERROR] 숫자를 제외한 문자를 입력해주세요.'],
    ['20', '[ERROR] 숫자를 제외한 문자를 입력해주세요.'],
    ['u', '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'],
    ['d', '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'],
    [
      'R',
      '[ERROR] U (위칸) 와 D (아래칸) 중에서만 이동할 칸을 정해 입력해주세요.',
    ],
    [
      'Q',
      '[ERROR] U (위칸) 와 D (아래칸) 중에서만 이동할 칸을 정해 입력해주세요.',
    ],
    [
      'UP',
      '[ERROR] U (위칸) 와 D (아래칸) 중에서만 이동할 칸을 정해 입력해주세요.',
    ],
    [
      'DOWN',
      '[ERROR] U (위칸) 와 D (아래칸) 중에서만 이동할 칸을 정해 입력해주세요.',
    ],
  ])(
    '예외 테스트 : 이동할 칸에 대한 입력값이 잘못된 경우 알맞은 에러 메시지를 출력한다',
    (input, expected) => {
      expect(() => {
        BridgeGame.validateDirection(input);
      }).toThrow(expected);
    }
  );

  test.each([
    ['', '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.'],
    ['2', '[ERROR] 숫자를 제외한 문자를 입력해주세요.'],
    ['21', '[ERROR] 숫자를 제외한 문자를 입력해주세요.'],
    ['r', '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'],
    ['q', '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'],
    ['QUIT', '[ERROR] R (재시도) 와 Q (종료) 중에서만 입력해주세요.'],
    ['retry', '[ERROR] R (재시도) 와 Q (종료) 중에서만 입력해주세요.'],
    ['U', '[ERROR] R (재시도) 와 Q (종료) 중에서만 입력해주세요.'],
    ['D', '[ERROR] R (재시도) 와 Q (종료) 중에서만 입력해주세요.'],
  ])(
    '예외 테스트 : 게임 재시작 여부에 대한 입력값이 잘못된 경우 알맞은 에러 메시지를 출력한다',
    (input, expected) => {
      expect(() => {
        BridgeGame.validateCommand(input);
      }).toThrow(expected);
    }
  );
});
