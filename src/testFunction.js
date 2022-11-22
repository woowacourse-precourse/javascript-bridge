const MissionUtils = require('@woowacourse/mission-utils');

const testFunction = {
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

  getLogSpy() {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
  },

  getOutput(logSpy) {
    return [...logSpy.mock.calls].join('');
  },

  expectLogContains(received, logs) {
    logs.forEach((log) => {
      expect(received).toEqual(expect.stringContaining(log));
    });
  },
};

module.exports = testFunction;
