const { GameConfig } = require('../src/Config');
const GameLogger = require('../src/GameLogger');

describe('게임 로그 기록 테스트', () => {
  test.each([
    [
      [
        ['U', GameConfig.STATUS_PLAY],
        ['D', GameConfig.STATUS_PLAY],
        ['U', GameConfig.STATUS_PLAY],
        ['D', GameConfig.STATUS_SUCCESS],
      ],
      ['[ O |   | O |   ]', '[   | O |   | O ]', 1],
    ],
    [
      [
        ['U', GameConfig.STATUS_PLAY],
        ['D', GameConfig.STATUS_FAIL],
      ],
      ['[ O |   ]', '[   | X ]', 1],
    ],
  ])('다리 이동 결과 저장', (moveInfo, solution) => {
    const logger = new GameLogger();
    logger.logNewTrial();
    moveInfo.forEach((value) => logger.logMoveResult(...value));
    const { upLog, downLog, trials } = logger.getLog();
    expect([upLog, downLog, trials]).toEqual(solution);
  });
});
