const { Console, Random } = require('@woowacourse/mission-utils');
const BridgeGamePresenter = require('../src/presenter/BridgeGamePresenter');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((_, callback) => callback(input)),
    Console.readLine
  );
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

const mockRandomsAndQuestions = (mockRandomsValue, mockQuestionsValue) => {
  mockRandoms(mockRandomsValue);
  mockQuestions(mockQuestionsValue);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const bridgeGamePresenter = new BridgeGamePresenter();

  bridgeGamePresenter.run();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

const firstCase = {
  result: [
    '최종 게임 결과',
    '[ O |   | O | O |   ]',
    '[   | O |   |   | O ]',
    '게임 성공 여부: 성공',
    '총 시도한 횟수: 1',
  ],
  upBridge: '[ O |   | O | O |   ]',
  downBridge: '[   | O |   |   | O ]',
};

const secondCase = {
  result: [
    '최종 게임 결과',
    '[ O |   |   ]',
    '[   | O | X ]',
    '게임 성공 여부: 실패',
    '총 시도한 횟수: 2',
  ],
  upBridge: '[ O |   |   ]',
  downBridge: '[   | O | X ]',
};

test('BridgeGamePresenter가 정상 동작 하는지 확인한다.(case1: 바로 성공한 경우)', () => {
  const logSpy = getLogSpy();
  mockRandomsAndQuestions([1, 0, 1, 1, 0], ['5', 'U', 'D', 'U', 'U', 'D']);
  const bridgeGamePresenter = new BridgeGamePresenter();

  bridgeGamePresenter.run();

  expectLogContains(getOutput(logSpy), firstCase.result);
  expectBridgeOrder(getOutput(logSpy), firstCase.upBridge, firstCase.downBridge);
});

test('BridgeGamePresenter가 정상 동작 하는지 확인한다.(case2: 1회 재시도 한 후 실패한 경우)', () => {
  const logSpy = getLogSpy();
  mockRandomsAndQuestions([1, 0, 1], ['3', 'U', 'U', 'R', 'U', 'D', 'D', 'Q']);
  const bridgeGamePresenter = new BridgeGamePresenter();

  bridgeGamePresenter.run();

  expectLogContains(getOutput(logSpy), secondCase.result);
  expectBridgeOrder(getOutput(logSpy), secondCase.upBridge, secondCase.downBridge);
});

test('BridgeGamePresenter가 정상적으로 예외를 처리하고 재입력을 받는지 확인한다.(case3: case2에서 중간에 잘못된 입력값을 받고 동일한 결과 획득)', () => {
  const logSpy = getLogSpy();
  mockRandomsAndQuestions([1, 0, 1], ['3', 'U', 'A', 'U', 'R', 'U', 'D', 'D', 'Q']);
  const bridgeGamePresenter = new BridgeGamePresenter();

  bridgeGamePresenter.run();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
  expectBridgeOrder(getOutput(logSpy), secondCase.upBridge, secondCase.downBridge);
});

test.each(['1', '-3', 'a', 'u', 'q', '1e1'])(
  'BridgeGamePresenter가 입력값에 대해 예외를 정상적으로 보낸다.',
  (input) => runException([input])
);
