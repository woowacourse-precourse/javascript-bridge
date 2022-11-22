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

  test.each([
    [
      ['3', 'U', 'D', 'D', 'R', 'U', 'D', 'U'],
      [
        //
        '[ O |   | O ]',
        '[   | O |   ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 2',
      ],
    ],
    [
      ['3', 'U', 'U', 'R', 'D', 'R', 'U', 'U', 'Q'],
      [
        //
        '[ O | X ]',
        '[   |   ]',
        '게임 성공 여부: 실패',
        '총 시도한 횟수: 3',
      ],
    ],
  ])('게임 종료 후 최종 게임 결과를 출력한다.', (questions, map) => {
    const logSpy = getLogSpy();
    const randoms = [1, 0, 1];

    runBridgeGame(randoms, questions);

    const log = getOutput(logSpy);
    expectLogContains(log, [MESSAGE.GAME_RESULT, ...map]);

    const [upSide, downSide] = map;
    expectBridgeOrder(log, upSide, downSide);
  });
});
