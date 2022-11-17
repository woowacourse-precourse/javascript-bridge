const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');

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
      upperPart: 'O',
      lowerPart: ' ',
      isGameOver: false,
    });
  });

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('D');
    expect(resultMap).toEqual({
      upperPart: 'O |  ',
      lowerPart: '  | O',
      isGameOver: false,
    });
  });

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('D');
    expect(resultMap.lowerPart).toEqual('  | O | X');
    expect(resultMap).toEqual({
      upperPart: 'O |   |  ',
      lowerPart: '  | O | X',
      isGameOver: true,
    });
  });
});

describe('다리 건너기 게임 테스트', () => {
  mockRandoms(['1', '0', '1']);
  const bridgeGame = new BridgeGame(3);

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('U');
    expect(resultMap).toEqual({
      upperPart: 'O',
      lowerPart: ' ',
      isGameOver: false,
    });
  });

  test('다리 건너기 테스트', () => {
    const resultMap = bridgeGame.move('U');
    expect(resultMap).toEqual({
      upperPart: 'O | X',
      lowerPart: '  |  ',
      isGameOver: true,
    });
  });

  test('게임 재시작 테스트', () => {
    bridgeGame.retry();
    const resultMap = bridgeGame.move('U');
    expect(resultMap).toEqual({
      upperPart: 'O',
      lowerPart: ' ',
      isGameOver: false,
    });
  });
});
