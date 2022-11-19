const { Random } = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/model/BridgeGame');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

describe('BridgeGame 테스트', () => {
  test('다리를 건너는 move 메서드가 userBridge의 정보를 올바르게 저장하는지 확인한다.', () => {
    // 준비(arrange)
    mockRandoms(['1', '0', '1']);
    const bridgeGame = new BridgeGame(3);

    // 실행(act)
    bridgeGame.move('U');
    bridgeGame.move('U');

    // 검증(assert)
    expect(bridgeGame.userBridge).toEqual({
      command: ['U', 'U'],
      up: ['O', 'X'],
      down: [' ', ' '],
    });
  });

  test('사용자가 현재까지 입력한 다리 정보가 정답인 다리와 같은지 비교하는 isRightSpace 메서드가 정삭 동작하는지 확인한다.', () => {
    // 준비(arrange)
    mockRandoms(['1', '0', '1', '0']);
    const bridgeGame = new BridgeGame(4);
    bridgeGame.userBridge.command = ['U', 'D'];

    // 실행(act)
    const value = bridgeGame.isRightSpace();

    // 검증(assert)
    expect(value).toEqual(true);
  });

  test('사용자의 다리 정보와 정답인 다리와 동일한지 확인하는 isEnd 메서드가 정상 동작하는지 확인한다.', () => {
    // 준비(arrange)
    mockRandoms(['1', '0', '1', '0']);
    const bridgeGame = new BridgeGame(4);
    bridgeGame.userBridge.command = ['U', 'D', 'U', 'D'];

    // 실행(act)
    const value = bridgeGame.isEnd();

    // 검증(assert)
    expect(value).toEqual(true);
  });

  test('사용자의 다리 정보를 바탕으로 다리 형식을 만드는 makeBridgeFormat 메서드가 정상 동작하는지 확인한다.', () => {
    // 준비(arrange)
    mockRandoms(['1', '0', '1']);
    const bridgeGame = new BridgeGame(3);
    bridgeGame.userBridge.up = ['O', ' ', ' '];
    bridgeGame.userBridge.down = [' ', 'O', 'X'];

    // 실행(act)
    const value = bridgeGame.makeBridgeFormat();

    // 검증(assert)
    expect(value).toEqual({ upBridge: '[ O |   |   ]', downBridge: '[   | O | X ]' });
  });

  test('사용자가 게임을 다시 시도할 때 사용하는 retry 메서드가 정상 동작하는지 확인한다.', () => {
    // 준비(arrange)
    const bridgeGame = new BridgeGame();

    // 실행(act)
    const value = bridgeGame.retry('R');

    // 검증(assert)
    expect(value).toEqual(true);
  });
});
