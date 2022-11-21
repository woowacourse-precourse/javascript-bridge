const MissionUtils = require('@woowacourse/mission-utils');

const mockFunction = {
  mockQuestions(answers) {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((_, callback) => {
        callback(input);
      });
    }, MissionUtils.Console.readLine);
  },

  mockRandoms(numbers) {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
  },
};

module.exports = mockFunction;
