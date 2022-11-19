const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const {
  getLogSpy,
  mockRandoms,
  mockQuestions,
  getOutput,
  expectBridgeOrder,
  expectLogContains,
} = require('./ApplicationTest');

describe('다리 건너기 기능 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '1', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'U', 'D']);
  });

  test('다리 생성 유효성 검사 테스트', () => {
    mockQuestions(['s']);

    try {
      const app = new App();
      app.play();
    } catch (error) {
      expect(error).toMatch('[ERROR] 다리 길이는 숫자만 입력할 수 있습니다.');
    }
  });

  test('다리 생성 유효성 검사 테스트', () => {
    mockQuestions([21]);

    try {
      const app = new App();
      app.play();
    } catch (error) {
      expect(error).toMatch('[ERROR] 다리 길이는 3이상 20이하의 숫자입니다.');
    }
  });

  test('게임 다리 출력 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['[ O |   ]', '[   | O ]']);
    expectBridgeOrder(log, '[ O |   ]', '[   | O ]');
  });

  test('게임 다리 출력 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['[ O |   |   ]', '[   | O | X ]']);
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | X ]');
  });

  test('결과 출력 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'U', 'R', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('결과 출력 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'U', 'R', 'U', 'D', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   |   ]',
      '[   | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | X ]');
  });
});
