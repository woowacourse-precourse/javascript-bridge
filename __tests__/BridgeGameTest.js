const MissionUtils = require('@woowacourse/mission-utils');
const Bridge = require('../src/Bridge');
const BridgeGame = require('../src/controller/BridgeGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

describe('다리 건너기 게임 테스트', () => {
  mockRandoms(['1', '0', '1']);
  const bridgeGame = new BridgeGame(new Bridge(3));

  test('다리 건너기 성공 테스트', () => {
    bridgeGame.move('U');
    const moveResult = bridgeGame.getMoveResult();
    const gameStatus = bridgeGame.getGameStatus();

    expect(moveResult).toEqual('[ O ]\n[   ]');
    expect(gameStatus).toEqual(0);
  });

  test('다리 건너기 성공 테스트', () => {
    bridgeGame.move('D');
    const moveResult = bridgeGame.getMoveResult();
    const gameStatus = bridgeGame.getGameStatus();

    expect(moveResult).toEqual('[ O |   ]\n[   | O ]');
    expect(gameStatus).toEqual(0);
  });

  test('다리 건너기 실패 테스트', () => {
    bridgeGame.move('D');
    const moveResult = bridgeGame.getMoveResult();
    const gameStatus = bridgeGame.getGameStatus();

    expect(moveResult).toEqual('[ O |   |   ]\n[   | O | X ]');
    expect(gameStatus).toEqual(1);
  });
});

describe('다리 건너기 게임 재시작 테스트', () => {
  mockRandoms(['1', '0', '1']);
  const bridgeGame = new BridgeGame(new Bridge(3));

  test('다리 건너기 성공 테스트', () => {
    bridgeGame.move('U');
    const moveResult = bridgeGame.getMoveResult();
    const gameStatus = bridgeGame.getGameStatus();

    expect(moveResult).toEqual('[ O ]\n[   ]');
    expect(gameStatus).toEqual(0);
  });

  test('다리 건너기 실패 테스트', () => {
    bridgeGame.move('U');
    const moveResult = bridgeGame.getMoveResult();
    const gameStatus = bridgeGame.getGameStatus();

    expect(moveResult).toEqual('[ O | X ]\n[   |   ]');
    expect(gameStatus).toEqual(1);
  });

  test('게임 재시작 테스트', () => {
    bridgeGame.retry();
    bridgeGame.move('U');
    const moveResult = bridgeGame.getMoveResult();
    const gameStatus = bridgeGame.getGameStatus();

    expect(moveResult).toEqual('[ O ]\n[   ]');
    expect(gameStatus).toEqual(0);
  });
});
