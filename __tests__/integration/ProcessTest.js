const {
  expectLogContains,
  mockQuestions,
  mockRandoms,
  getLogSpy,
  getOutput,
} = require('../ApplicationTest');

const App = require('../../src/App');
const { ERROR_MESSAGE, GAME_MESSAGE } = require('../../src/constants');

describe('잘못된 값 입력 테스트', () => {
  test('게임 재시작 여부 물을 때 대문자 R, Q를 제외한 값 입력', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'q', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      `[ERROR] ${ERROR_MESSAGE.replay}`,
      '[ O | X ]',
      '[   |   ]',
      `${GAME_MESSAGE.result}`,
      `${GAME_MESSAGE.is_success}${GAME_MESSAGE.fail}`,
      `${GAME_MESSAGE.try_count}1`,
    ]);
  });

  test('플레이어가 이동할 칸을 입력 시 대문자 U, D를 제외한 값 입력', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'WRONG', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      `[ERROR] ${ERROR_MESSAGE.command}`,
      `${GAME_MESSAGE.result}`,
      '[ O |   | O ]',
      '[   | O |   ]',
      `${GAME_MESSAGE.is_success}${GAME_MESSAGE.success}`,
      `${GAME_MESSAGE.try_count}1`,
    ]);
  });

  describe('유효하지 않은 다리 길이 입력', () => {
    test('다리 길이에 숫자가 아닌 값을 입력', () => {
      const logSpy = getLogSpy();
      mockRandoms([1, 0, 1]);
      mockQuestions(['WRONG', '3', 'U', 'D', 'U']);

      const app = new App();
      app.play();

      const log = getOutput(logSpy);
      expectLogContains(log, [
        `[ERROR] ${ERROR_MESSAGE.size}`,
        `${GAME_MESSAGE.result}`,
        '[ O |   | O ]',
        '[   | O |   ]',
        `${GAME_MESSAGE.is_success}${GAME_MESSAGE.success}`,
        `${GAME_MESSAGE.try_count}1`,
      ]);
    });

    test('다리 길이 범위보다 작은 값 입력', () => {
      const logSpy = getLogSpy();
      mockRandoms([1, 0, 1]);
      mockQuestions(['2', '3', 'U', 'D', 'U']);

      const app = new App();
      app.play();

      const log = getOutput(logSpy);
      expectLogContains(log, [
        `[ERROR] ${ERROR_MESSAGE.size}`,
        `${GAME_MESSAGE.result}`,
        '[ O |   | O ]',
        '[   | O |   ]',
        `${GAME_MESSAGE.is_success}${GAME_MESSAGE.success}`,
        `${GAME_MESSAGE.try_count}1`,
      ]);
    });

    test('다리 길이 범위보다 큰 값 입력', () => {
      const logSpy = getLogSpy();
      mockRandoms([1, 0, 1]);
      mockQuestions(['21', '3', 'U', 'D', 'U']);

      const app = new App();
      app.play();

      const log = getOutput(logSpy);
      expectLogContains(log, [
        `[ERROR] ${ERROR_MESSAGE.size}`,
        `${GAME_MESSAGE.result}`,
        '[ O |   | O ]',
        '[   | O |   ]',
        `${GAME_MESSAGE.is_success}${GAME_MESSAGE.success}`,
        `${GAME_MESSAGE.try_count}1`,
      ]);
    });
  });
});
