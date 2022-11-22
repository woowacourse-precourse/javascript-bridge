/* eslint-disable max-lines-per-function */
const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const Bridge = require('../src/model/Bridge');
const OutputView = require('../src/view/OutputView');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((_, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('브릿지 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn(),
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('재시작 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['0', '0', '1', '1', '0']);
    mockQuestions(['5', 'D', 'D', 'U', 'U', 'U', 'R', 'D', 'D', 'U', 'U', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O | O |   ]',
      '[ O | O |   |   | O ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[   |   | O | O |   ]', '[ O | O |   |   | O ]');
  });
  test('중도 종료 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['0', '0', '1', '1', '0']);
    mockQuestions(['5', 'D', 'D', 'U', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   | O | O | X ]',
      '[ O | O |   |   |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[   |   | O | O | X ]', '[ O | O |   |   |   ]');
  });
  test('브릿지의 길이 테스트', () => {
    const bridge = new Bridge(15);
    expect(bridge.getLength()).toEqual(15);
  });
  test('브릿지 출력 테스트 : 현재 탐색중인 index 3일 때', () => {
    const logSpy = getLogSpy();
    OutputView.printMap(3, {
      // eslint-disable-next-line comma-spacing
      up: [' ',' ',' ',' ',' '],
      // eslint-disable-next-line comma-spacing
      down: [' ',' ',' ',' ',' '],
    });
    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[   |   |   |   ]',
      '[   |   |   |   ]',
    ]);
  });
});
