const { Random } = require('@woowacourse/mission-utils');
const { PHASE } = require('../src/constant/Constant');
const BridgeGame = require('../src/model/BridgeGame');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('게임 클래스 테스트', () => {
  mockRandoms([0, 1, 0]);

  const bridgeGame = new BridgeGame(3);

  test('이동할 수 없는 칸을 선택한 경우 게임 결과는 실패이고 COMMAND 단계로 이동', () => {
    const moving = 'U';
    const phase = bridgeGame.move(moving);

    expect(bridgeGame.result).toEqual('실패');
    expect(phase).toEqual(PHASE.COMMAND);
  });

  test('게임을 재시작한 경우 총 시도한 횟수가 1 증가하고 MOVE 단계로 이동', () => {
    const phase = bridgeGame.retry();

    expect(bridgeGame.tryCount).toEqual(2);
    expect(phase).toEqual(PHASE.MOVE);
  });

  test('이동할 수 있는 칸을 선택한 경우 MOVE 단계 유지', () => {
    expect(bridgeGame.move('D')).toEqual(PHASE.MOVE);
    expect(bridgeGame.move('U')).toEqual(PHASE.MOVE);
  });

  test('다리를 끝까지 건넌 경우 게임 결과는 성공이고 RESULT 단계로 이동', () => {
    const moving = 'D';
    const phase = bridgeGame.move(moving);

    expect(bridgeGame.result).toEqual('성공');
    expect(phase).toEqual(PHASE.RESULT);
  });

  test('아래, 위, 아래로 이동하여 길이 3의 다리를 끝까지 건넌 경우의 다리 건너기 결과', () => {
    const { moveMap } = bridgeGame;
    const movings = ['D', 'U', 'D'];

    movings.forEach((moving) => {
      bridgeGame.drawMap(moving);
    });
    expect(moveMap.get('U')).toEqual([' ', 'O', ' ']);
    expect(moveMap.get('D')).toEqual(['O', ' ', 'O']);
  });
});
