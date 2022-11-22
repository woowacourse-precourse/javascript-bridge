const App = require('../src/App');
const Path = require('../src/Model/Path');
const MissionUtils = require('@woowacourse/mission-utils');

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

describe('올바른 경로 테스트', () => {
  test('경로의 특정 위치값 반환 테스트', () => {
    mockRandoms([1, 0, 1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const path = Path.getPath();
    const index = 3;

    expect(path[index]).toEqual(Path.positionOf(index));
  });
});
