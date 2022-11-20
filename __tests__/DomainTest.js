const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/Controllers/BridgeGame');
const Model = require('../src/Models/Model');
const InputView = require('../src/Views/InputView');
const BridgeMaker = require('../src/BridgeMaker');

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
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    // eslint-disable-next-line arrow-body-style
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });
});
