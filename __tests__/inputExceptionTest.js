const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('../src/InputView');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((_, callback) => { callback(input); }),
    MissionUtils.Console.readLine,
  );
};

describe('다리 길이 입력 테스트', () => {
  test.each([[['3']], [['20']], [['7']]])('정상', (input) => {
    mockQuestions(input);
    expect(InputView.readBridgeSize()).toEqual(Number(input[0]));
  });

  test.each([[['woowacourse']], [['0x13']], [['123b']]])('예외: 입력값이 숫자가 아님', (input) => {
    mockQuestions(input);
    expect(InputView.readBridgeSize).toThrow('[ERROR]');
  });

  test.each([[['-1']], [['12.345']], [['0']]])('예외: 입력값이 자연수가 아님', (input) => {
    mockQuestions(input);
    expect(InputView.readBridgeSize).toThrow('[ERROR]');
  });

  test.each([[['2']], [['21']], [['121687']]])('예외: 입력값 범위', (input) => {
    mockQuestions(input);
    expect(InputView.readBridgeSize).toThrow('[ERROR]');
  });
});

describe('이동 방향 입력 테스트', () => {
  test.each([[['U']], [['D']]])('정상', (input) => {
    mockQuestions(input);
    expect(InputView.readMoving()).toEqual(input[0]);
  });

  test.each([
    [['0x44']], [['U+0044']], [['d']], [['DDD']], [['UD']], [[' ']], [['121687']]
  ])('예외', (input) => {
    mockQuestions(input);
    expect(InputView.readMoving).toThrow('[ERROR]');
  });
});

describe('재시도 입력 테스트', () => {
  test.each([[['Q']], [['R']]])('정상', (input) => {
    mockQuestions(input);
    expect(InputView.readGameCommand()).toEqual(input[0]);
  });

  test.each([
    [['0x51']], [['U+0051']], [['d']], [['QQ']], [['R!']], [[' ']], [['121687']]
  ])('예외', (input) => {
    mockQuestions(input);
    expect(InputView.readGameCommand).toThrow('[ERROR]');
  });
});
