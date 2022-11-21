const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('../../src/views/InputView');
const MESSAGES = require('../../src/constants/Messages');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('입력 테스트', () => {
  test('기본 입력 받는 테스트', async () => {
    const query = '테스트';
    mockQuestions(['1']);
    const result = await InputView.readLine(query);
    expect(result).toBe('1');
  });
});
