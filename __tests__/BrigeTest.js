const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeGame = require('../src/BridgeGame');
const CrossBrigeGame = require('../src/CrossBridgeGame');
const { GAME } = require('../src/utils/Constants');
const OutputView = require('../src/views/OutputView');

const mockInput = (answers) => {
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

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

describe('다리 건너기 테스트', () => {
  test.each(['g', 2, 21])(
    '다리 길이에 문자나 범위 외 숫자는 입력할 수 없다',
    (input) => {
      mockInput([input]);
      const logSpy = getLogSpy();

      const crossBrigeGame = new CrossBrigeGame();
      crossBrigeGame.gameStart();
      const log = getOutput(logSpy);

      expect(log).toContain('[ERROR]');
    }
  );

  test('다리 생성 테스트', () => {
    const randoms = [1, 0, 0];
    const mockGenerator = randoms.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn()
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test.each(['g', 2, 'u', ' '])('이동할 칸 입력 예외처리', (input) => {
    mockInput([input]);
    const logSpy = getLogSpy();

    const crossBrigeGame = new CrossBrigeGame();
    crossBrigeGame.gameStart();
    const log = getOutput(logSpy);

    expect(log).toContain('[ERROR]');
  });

  test('BridgeGame이 이동 여부를 제대로 출력하는지', () => {
    const bridge = ['U', 'U', 'D'];
    const input = 'U';
    const output = [true, [1], [0]];

    const bridgeGame = new BridgeGame();
    bridgeGame.setBridge(bridge);

    expect(bridgeGame.move(input)).toEqual(output);
  });
});
