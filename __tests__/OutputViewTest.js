const OutputView = require('../src/OutputView');
const BridgeGame = require('../src/BridgeGame');
const InputView = require('../src/InputView');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('OutputView 테스트', () => {
  test('firstDraw 테스트', () => {
    let result = [
      [' O ', '   '],
      [' X ', '   '],
      ['   ', ' O '],
      ['   ', ' X '],
    ];
    let input = [
      ['U', true],
      ['U', false],
      ['D', true],
      ['D', false],
    ];
    result.forEach((value, index) => {
      expect(OutputView.firstDraw(input[index])).toEqual(value);
    });
  });

  test('addDraw 테스트', () => {
    let [up, down] = [' O ', '   '];
    let input = [
      ['U', true],
      ['U', false],
      ['D', true],
      ['D', false],
    ];
    let result = [
      [' O | O ', '   |   '],
      [' O | X ', '   |   '],
      [' O |   ', '   | O '],
      [' O |   ', '   | X '],
    ];
    result.forEach((value, index) => {
      expect(OutputView.addDraw(up, down, input[index])).toEqual(value);
    });
  });

  test('printMap 테스트', () => {
    let result = ['[ O ]', '[   ]', '[ O | O ]', '[   |   ]', '[ O | O | O ]', '[   |   |   ]'];
    mockRandoms([1, 1, 1]);
    mockQuestions(['3', 'U', 'U', 'U']);
    const spy = getLogSpy();
    let bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    result.forEach((value) => {
      expect(spy).toHaveBeenCalledWith(value);
    });
  });

  test('printResult 테스트', () => {
    let result = ['최종 게임 결과', '[ O | O | O ]', '[   |   |   ]', '게임 성공 여부: 성공', '총 시도한 횟수: 1'];
    mockRandoms([1, 1, 1]);
    mockQuestions(['3', 'U', 'U', 'U']);
    const spy = getLogSpy();
    let bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    result.forEach((value) => {
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(value));
    });
  });
});
