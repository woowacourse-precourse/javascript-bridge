const {
  expectLogContains,
  mockQuestions,
  mockRandoms,
  getLogSpy,
  getOutput,
} = require('../ApplicationTest');
const App = require('../../src/App');
const { SENTENCE, ERROR } = require('../../src/constants/Constants');

describe('과정 테스트', () => {
  test('잘못된 값 입력시 다시 입력을 받는지 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'r', 'R', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ O | X ]',
      '[   |   ]',
      `${ERROR.restart}`,
      `${SENTENCE.start}`,
      '총 시도한 횟수: 2',
    ]);
  });
});
