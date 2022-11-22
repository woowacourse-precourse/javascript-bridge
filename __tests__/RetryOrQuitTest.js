const App = require('../src/App');
const { RESULT } = require('../src/constants');
const { mockRandoms, mockQuestions } = require('../src/utils/testUtils');

describe('게임 종료 또는 재시도 테스트', () => {
  const randoms = [1, 1, 1];

  test.each([
    [['3', 'U', 'U', 'U'], RESULT.SUCCESS],
    [['3', 'U', 'D', 'Q'], RESULT.FAIL],
  ])(
    '다리를 끝까지 건너거나 실패시 명령어 Q를 입력하면 게임이 종료된다.',
    (questions, gameResult) => {
      mockRandoms(randoms);
      mockQuestions(questions);

      const app = new App();
      const quitSpy = jest.spyOn(app, 'quit');
      app.play();

      expect(quitSpy).toBeCalledTimes(1);
      expect(quitSpy.mock.calls[0][0]).toBe(gameResult);
    },
  );

  test.each([
    [['3', 'U', 'D', 'R'], 2],
    [['3', 'U', 'D', 'R', 'D', 'R'], 3],
  ])('다리 건너기 실패시 명령어 R을 입력하면 게임을 재시도한다.', (questions, attemptsNum) => {
    mockRandoms(randoms);
    mockQuestions(questions);

    const app = new App();
    const retrySpy = jest.spyOn(app.bridgeGame, 'retry');
    app.play();

    expect(retrySpy).toBeCalledTimes(attemptsNum - 1);
    expect(app.bridgeGame.getAttemptsNum()).toBe(attemptsNum);
  });
});
