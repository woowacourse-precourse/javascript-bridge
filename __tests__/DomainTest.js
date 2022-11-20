const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/Controllers/BridgeGame');
const Model = require('../src/Models/Model');
const InputView = require('../src/Views/InputView');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  // eslint-disable-next-line arrow-body-style
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('1. 다리 생성하기', () => {
  test.each([[['15c']], [['길게']], [['five']]])(
    '사용자가 3과 20사이 숫자로 다리 길이를 입력했는지 확인했다.',
    (input) => {
      const model = new Model();
      const inputView = new InputView();
      const bridgeGame = new BridgeGame(model, inputView);
      mockQuestions(input);
      expect(() => bridgeGame.getBridgeSize()).toThrow('[ERROR]');
    },
  );
});
