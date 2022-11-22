const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeGame = require('../src/BridgeGame');
const CrossBrigeGame = require('../src/CrossBridgeGame');
const { GAME } = require('../src/utils/Constant');
const OutputView = require('../src/views/OutputView');

const mockInput = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandom = (answers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  answers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
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

  test('BridgeGame이 이동 성공 여부를 제대로 출력하는지', () => {
    const bridge = ['U', 'U', 'D'];
    const input = 'U';
    const output = true;

    const bridgeGame = new BridgeGame(bridge);

    expect(bridgeGame.isMoveSuccess(input)).toEqual(output);
  });

  test('BridgeGame이 이동 여부를 제대로 출력하는지', () => {
    const bridge = ['U', 'U', 'D'];
    const input = 'U';
    const output = [[1], [0]];

    const bridgeGame = new BridgeGame(bridge);

    expect(bridgeGame.move(input)).toEqual(output);
  });

  test.each(['r', 2, ' '])('retry 여부 응답 예외처리', (input) => {
    mockInput([input]);
    const logSpy = getLogSpy();

    const crossBrigeGame = new CrossBrigeGame();
    crossBrigeGame.askRetry();
    const log = getOutput(logSpy);

    expect(log).toContain('[ERROR]');
  });

  test('다리 건너기 진행상황 출력', () => {
    const inputFailStatus = false;
    const inputSuccessStatus = true;
    const inputUpMove = [1, 1, 0];
    const inputDownMove = [1, 1, 1];

    const upSide = OutputView.makeSide(inputSuccessStatus, inputUpMove);
    const downSide = OutputView.makeSide(inputFailStatus, inputDownMove)

    expect(upSide).toEqual(['O', 'O', ' ']);
    expect(downSide).toEqual(['O', 'O', 'X']);
  });

  test('재시작 후 다시 도전 가능', () => {
    const randoms = [1, 0, 1];
    const input = ['3', 'U', 'U', 'R', 'U', 'D', 'U'];
    const logSpy = getLogSpy();

    mockRandom(randoms);
    mockInput(input);

    const crossBrigeGame = new CrossBrigeGame();
    crossBrigeGame.gameStart();
    const log = getOutput(logSpy);

    expect(log).toContain(GAME.END_RESULT);
  });

  test('재시작 없이 종료', () => {
    const randoms = [1, 0, 1];
    const input = ['3', 'D', 'Q'];
    const logSpy = getLogSpy();

    mockRandom(randoms);
    mockInput(input);

    const crossBrigeGame = new CrossBrigeGame();
    crossBrigeGame.gameStart();
    const log = getOutput(logSpy);

    expect(log).toContain(GAME.END_RESULT);
  });
});
