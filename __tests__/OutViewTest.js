const { MESSAGE } = require('../src/constants');
const {
  getLogSpy,
  getOutput,
  expectLogContains,
  expectBridgeOrder,
  runBridgeGame,
} = require('../src/utils/testUtils');

describe('게임 출력 테스트', () => {
  test.each([
    [
      ['3', 'U', 'U', 'D'],
      [
        //
        '[ O ]',
        '[   ]',
        '[ O | O ]',
        '[   |   ]',
        '[ O | O |   ]',
        '[   |   | O ]',
      ],
    ],
    [
      ['3', 'U', 'U', 'U'],
      [
        //
        '[ O ]',
        '[   ]',
        '[ O | O ]',
        '[   |   ]',
        '[ O | O | X ]',
        '[   |   |   ]',
      ],
    ],
  ])('사용자가 이동하면 맵(다리 건너기 결과)을 출력한다.', (questions, maps) => {
    const logSpy = getLogSpy();
    const randoms = [1, 1, 0];

    runBridgeGame(randoms, questions);

    const log = getOutput(logSpy);
    expectLogContains(log, [MESSAGE.GAME_START, ...maps]);
  });

});
