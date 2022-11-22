const OutputView = require('../src/OutputView');
const {getLogSpy, getOutput, expectLogContains} = require('../src/testFunction');

describe('OutputView 클래스 테스트', () => {
  test('사용자의 다리 이동 결과를 출력한다.', () => {
    const bridgeGame = {
      getMap: () => [['O'], [' ']],
    };

    const logSpy = getLogSpy();
    OutputView.printMap(bridgeGame);
    const log = getOutput(logSpy);
    const logs = ['[ O ]', '[   ]'];
    expectLogContains(log, logs);
  });

  test('사용자의 다리 이동 결과를 출력한다.', () => {
    const bridgeGame = {
      getMap: () => [
        ['O', 'X'],
        [' ', ' '],
      ],
    };

    const logSpy = getLogSpy();
    OutputView.printMap(bridgeGame);
    const log = getOutput(logSpy);
    const logs = ['[ O | X ]', '[   |   ]'];
    expectLogContains(log, logs);
  });

  test('사용자의 다리 이동 결과를 출력한다.', () => {
    const bridgeGame = {
      getMap: () => [
        ['O', ' ', ' '],
        [' ', 'O', 'O'],
      ],
    };

    const logSpy = getLogSpy();
    OutputView.printMap(bridgeGame);
    const log = getOutput(logSpy);
    const logs = ['[ O |   |   ]', '[   | O | O ]'];
    expectLogContains(log, logs);
  });

  test('사용자의 다리 이동 결과를 출력한다.', () => {
    const bridgeGame = {
      getMap: () => [[' '], ['X']],
    };

    const logSpy = getLogSpy();
    OutputView.printMap(bridgeGame);
    const log = getOutput(logSpy);
    const logs = ['[   ]', '[ X ]'];
    expectLogContains(log, logs);
  });

  test('최종 결과를 출력한다.', () => {
    const bridgeGame = {
      getMap: () => [
        ['O', ' ', ' '],
        [' ', 'O', 'O'],
      ],
      isSuccess: () => true,
      getChallengeCount: () => 2,
    };

    const logSpy = getLogSpy();
    OutputView.printResult(bridgeGame);
    const log = getOutput(logSpy);
    const logs = [
      '최종 게임 결과',
      '[ O |   |   ]',
      '[   | O | O ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ];
    expectLogContains(log, logs);
  });
});
