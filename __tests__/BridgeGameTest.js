const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/Model/BridgeGame');
const SYSTEM_MESSAGE = require('../src/constants/system message');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('BridgeGame 테스트', () => {
  test('게임 결과 메시지 확인', () => {
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'D']);

    const app = new App();
    app.play();

    expect(BridgeGame.showSucceedMessage()).toEqual(SYSTEM_MESSAGE.FAIL);
  });
});
