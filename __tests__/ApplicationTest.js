/* eslint-disable no-use-before-define */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-undef */
const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeSize = require('../src/model/BridgeSize');
const Moving = require('../src/model/Moving');
const GameCommand = require('../src/model/GameCommand');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((_, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

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

describe('다리 건너기 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => acc.mockReturnValueOnce(number), jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['최종 게임 결과', '[ O |   | O ]', '[   | O |   ]', '게임 성공 여부: 성공', '총 시도한 횟수: 1']);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('예외 테스트', () => {
    runException(['a']);
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 3미만 숫자', () => {
    runException(['1']);
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 20초과 숫자', () => {
    runException(['21']);
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 음수 숫자', () => {
    runException(['-21']);
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 숫자와 특수 문자', () => {
    runException(['20$']);
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 3미만 숫자', () => {
    const logSpy = getLogSpy();
    const bridgeSize = new BridgeSize('1');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 20초과 숫자', () => {
    const logSpy = getLogSpy();
    const bridgeSize = new BridgeSize('21');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 음수 숫자', () => {
    const logSpy = getLogSpy();
    const bridgeSize = new BridgeSize('-21');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 숫자와 특수 문자', () => {
    const logSpy = getLogSpy();
    const bridgeSize = new BridgeSize('20$');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('다리 길이 예외 테스트 (BridgeSize) - 자연수가 아닌 수', () => {
    const logSpy = getLogSpy();
    const bridgeSize = new BridgeSize('20.1');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('이동 명령어 예외 테스트 (Moving) - U와 D 이외 문자', () => {
    const logSpy = getLogSpy();
    const moving = new Moving('A');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('이동 명령어 예외 테스트 (Moving) - 미입력', () => {
    const logSpy = getLogSpy();
    const moving = new Moving('');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('이동 명령어 예외 테스트 (Moving) - 공백', () => {
    const logSpy = getLogSpy();
    const moving = new Moving(' ');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('재시작 및 종료 명령어 예외 테스트 (GameCommand) - R와 Q 이외 문자', () => {
    const logSpy = getLogSpy();
    const gameCommand = new GameCommand('A');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('재시작 및 종료 명령어 예외 테스트 (GameCommand) - 미입력', () => {
    const logSpy = getLogSpy();
    const gameCommand = new GameCommand('');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });

  test('재시작 및 종료 명령어 예외 테스트 (GameCommand) - 공백', () => {
    const logSpy = getLogSpy();
    const gameCommand = new GameCommand(' ');
    const log = getOutput(logSpy);
    expect(log).toEqual(expect.stringContaining('[ERROR]'));
  });
});
