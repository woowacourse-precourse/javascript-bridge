const {
  expectLogContains,
  mockQuestions,
  mockRandoms,
  getLogSpy,
  getOutput,
} = require('../ApplicationTest');

const App = require('../../src/App');
const { ERROR_MESSAGE, GAME_MESSAGE } = require('../../src/constants');

describe('게임이 잘 진행되는지 테스트', () => {
  test('기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'R', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    const tryCount = 2;

    expectLogContains(log, [
      '[ O | X ]',
      '[   |   ]',
      '[ O |   | O ]',
      '[   | O |   ]',
      `${GAME_MESSAGE.result}`,
      `${GAME_MESSAGE.is_success}${GAME_MESSAGE.success}`,
      `${GAME_MESSAGE.try_count}${tryCount}`,
    ]);
  });

  test('기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'q', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    const tryCount = 1;

    expectLogContains(log, [
      '[ O | X ]',
      '[   |   ]',
      `${GAME_MESSAGE.result}`,
      `${GAME_MESSAGE.is_success}${GAME_MESSAGE.fail}`,
      `${GAME_MESSAGE.try_count}${tryCount}`,
    ]);
  });
});
