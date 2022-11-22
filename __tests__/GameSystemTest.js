const App = require('../src/App');
const { expectLogContains, getLogSpy, getOutput, mockRandoms, mockQuestions } = require('./ApplicationTest');

describe('재시작 개수 테스트', () => {
  test('2번 재시작하면 시도 횟수는 2번이라고 나온다.', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'D', 'R', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ]);
  });
});

describe('실패한 게임 결과 출력 테스트', () => {
  test('게임을 이기지 못했을 경우 마지막으로 선택한 위치는 X로 표시된다.', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1', '0']);
    mockQuestions(['4', 'U', 'D', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   |   ]',
      '[   | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
  });
});