const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/controller/BridgeGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

describe('다리 건너기 게임 테스트', () => {
  mockRandoms(['1', '0', '1']);
  const bridgeGame = new BridgeGame(3);

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('U');
    expect(resultMap).toEqual({
      moveResult: '[ O ]\n[   ]',
      gameStatus: 0,
    });
  });

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('D');
    expect(resultMap).toEqual({
      moveResult: '[ O |   ]\n[   | O ]',
      gameStatus: 0,
    });
  });

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('D');
    expect(resultMap).toEqual({
      moveResult: '[ O |   |   ]\n[   | O | X ]',
      gameStatus: 1,
    });
  });
});

describe('다리 건너기 게임 테스트', () => {
  mockRandoms(['1', '0', '1']);
  const bridgeGame = new BridgeGame(3);

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('U');
    expect(resultMap).toEqual({
      moveResult: '[ O ]\n[   ]',
      gameStatus: 0,
    });
  });

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('U');
    expect(resultMap).toEqual({
      moveResult: '[ O | X ]\n[   |   ]',
      gameStatus: 1,
    });
  });

  test('게임 재시작 테스트', () => {
    bridgeGame.retry();
    const resultMap = bridgeGame.move('U');
    expect(resultMap).toEqual({
      moveResult: '[ O ]\n[   ]',
      gameStatus: 0,
    });
  });
});
