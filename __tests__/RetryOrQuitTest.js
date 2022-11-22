const App = require('../src/App');
const { RESULT } = require('../src/constants');
const { mockRandoms, mockQuestions } = require('../src/utils/testUtils');

describe('게임 종료 또는 재시도 테스트', () => {
  test.each([
    [['3', 'U', 'U', 'U'], RESULT.SUCCESS],
  ])(
    '다리를 끝까지 건너면 게임을 성공한다.',
    (questions, gameResult) => {
      const randoms = [1, 1, 1];

      mockRandoms(randoms);
      mockQuestions(questions);

      const app = new App();
      const quitSpy = jest.spyOn(app, 'quit');
      app.play();

      expect(quitSpy).toBeCalledTimes(1);
      expect(quitSpy.mock.calls[0][0]).toBe(gameResult);
    },
  );

});
