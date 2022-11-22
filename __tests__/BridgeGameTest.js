const BridgeGame = require('../src/BridgeGame');

const bridge = ['U', 'D', 'U'];
const bridgeGameInit = new BridgeGame(bridge);

const makeBridgeTest = (input, logs, bridgeGame) => {
  input.reduce((acc, input, bridgeIndex) => {
    acc = bridgeGame.move(input, bridgeIndex);
    expect(acc).toEqual(logs[bridgeIndex]);
  }, 0);
};

describe('다리 건너기 게임 테스트', () => {
  test('(move) 현재까지 건넌 다리 만들기 - 정답일 경우', () => {
    const input = ['U', 'D', 'U'];
    const logs = [
      [['O'], [' ']],
      [
        ['O', ' '],
        [' ', 'O'],
      ],
      [
        ['O', ' ', 'O'],
        [' ', 'O', ' '],
      ],
    ];

    const bridgeGame = new BridgeGame(bridge);
    makeBridgeTest(input, logs, bridgeGame);
  });

  test('(move) 현재까지 건넌 다리 만들기 - 오답일 경우', () => {
    const input = ['U', 'U'];
    const logs = [
      [['O'], [' ']],
      [
        ['O', 'X'],
        [' ', ' '],
      ],
    ];

    const bridgeGame = new BridgeGame(bridge);
    makeBridgeTest(input, logs, bridgeGame);
  });

  test('(retry) 현재까지 건넌 다리 초기화 기능 테스트', () => {
    const input = ['U', 'D'];
    const log = [[], []];

    const bridgeGame = new BridgeGame(bridge);
    input.reduce((acc, input, bridgeIndex) => {
      bridgeGame.move(input, bridgeIndex);
    }, 0);
    expect(bridgeGame.retry()).toEqual(log);
  });

  test('(canMove) 건널 수 있는지 판단하는 기능 테스트 - 건널 수 있을 때', () => {
    const moveInput = 'U';
    const bridgeIndex = 0;

    expect(bridgeGameInit.canMove(moveInput, bridgeIndex)).toBeTruthy();
  });

  test('(canMove) 건널 수 있는지 판단하는 기능 테스트 - 건널 수 없을 때', () => {
    const moveInput = 'D';
    const bridgeIndex = 0;

    expect(bridgeGameInit.canMove(moveInput, bridgeIndex)).toBeFalsy();
  });
});
