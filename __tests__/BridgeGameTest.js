const { Console } = require('@woowacourse/mission-utils');
const BridgeController = require('../src/controller/BridgeController');
const BridgeGame = require('../src/model/BridgeGame');
const OutputView = require('../src/view/OutputView');

describe('bridgeController Test', () => {
  let bridgeController;
  let bridgeGame;

  beforeEach(() => {
    bridgeController = new BridgeController();
    bridgeGame = new BridgeGame();
  });

  test('잘못된 size 입력값이 입력될때 재요청 기능이 다시 실행되는지 Test', () => {
    const spyFn = jest.spyOn(bridgeController, 'requestBridgeSize');
    bridgeController.createBridge('a');
    expect(spyFn).toHaveBeenCalledTimes(1);
  });

  describe('movemoment Test', () => {
    let traceOfCrossingBridge;
    beforeEach(() => {
      bridgeGame.updateBridge(['U', 'D', 'U']);
      traceOfCrossingBridge = bridgeGame.move();
    });

    describe('사용자가 이동한 위치의 성공, 실패 여부 Test', () => {
      test('U로 성공 Test', () => {
        bridgeGame.updateBridge(['U', 'D', 'D', 'U']);
        bridgeGame.selectMovemomentDirection('U');
        const result = bridgeGame.move();
        expect(result).toEqual([['O', ' ']]);
      });

      test('D로 성공 Test', () => {
        bridgeGame.updateBridge(['D', 'D', 'U']);
        bridgeGame.selectMovemomentDirection('D');
        const result = bridgeGame.move();
        expect(result).toEqual([[' ', 'O']]);
      });

      test('U로 실패 Test', () => {
        bridgeGame.updateBridge(['D', 'D', 'U']);
        bridgeGame.selectMovemomentDirection('U');
        const result = bridgeGame.move();
        expect(result).toEqual([['X', ' ']]);
      });

      test('D로 실패 Test', () => {
        bridgeGame.updateBridge(['U', 'D', 'U']);
        bridgeGame.selectMovemomentDirection('D');
        const result = bridgeGame.move();
        expect(result).toEqual([[' ', 'X']]);
      });
    });

    test('이동에 대한 입력값이 잘못된 값으로 입력될때 재요청 기능이 다시 실행되는지 Test', () => {
      const spyFn = jest.spyOn(bridgeController, 'requestBridgeMovemoment');
      bridgeController.controlMovemoment('u');

      expect(spyFn).toHaveBeenCalledTimes(1);
    });

    test('이동시 draw가 잘 되는지 Test', () => {
      bridgeGame.updateBridge(['D', 'D', 'U']);
      bridgeGame.selectMovemomentDirection('D');
      traceOfCrossingBridge = bridgeGame.move();
      const drawBridge = bridgeController.drawBridge(traceOfCrossingBridge);
      expect(drawBridge).toEqual({ upBridge: '[   ]', downBridge: '[ O ]' });
    });

    test('재시작 또는 종료 요청시 사용자가 선택한 값이 건널수 없는 다리인경우 재요청 기능이 작동하는지 Test', () => {
      bridgeGame.selectMovemomentDirection('r');
      bridgeGame.updateBridge(['U', 'D', 'U']);
      traceOfCrossingBridge = bridgeGame.move();
      const drawBridge = bridgeController.drawBridge(traceOfCrossingBridge);
      const spyFn = jest.spyOn(bridgeController, 'requestGameCommand');
      bridgeController.controlNextStep(drawBridge);
      expect(spyFn).toHaveBeenCalledTimes(1);
    });

    test('사용자가 지정한 size만큼 이동했다면 종료 기능이 작동하는지 Test', () => {
      bridgeGame.selectMovemomentDirection('U');
      bridgeGame.selectMovemomentDirection('D');
      bridgeGame.selectMovemomentDirection('U');
      const drawBridge = bridgeController.drawBridge(traceOfCrossingBridge);
      const spyFn = jest.spyOn(OutputView, 'printResult');
      bridgeController.controlNextStep(drawBridge);
      expect(spyFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('재시작 또는 종료 요청시 Test', () => {
    test('재요청에 대한 값으로 R 입력시 이동할 칸 요청 기능이 작동 하는지', () => {
      const spyFn = jest.spyOn(bridgeController, 'requestBridgeMovemoment');
      bridgeController.controlGameCommand('R');

      expect(spyFn).toHaveBeenCalledTimes(1);
    });

    test('재요청에 대한 값으로 Q 입력시 종료가 되는지', () => {
      const spyFn = jest.spyOn(Console, 'close');
      bridgeController.controlGameCommand('Q');

      expect(spyFn).toHaveBeenCalledTimes(1);
    });

    test('재요청시 잘못된 입력값이 입력될때 재요청 기능이 다시 실행되는지 Test', () => {
      const spyFn = jest.spyOn(bridgeController, 'requestGameCommand');
      bridgeController.controlGameCommand('q');

      expect(spyFn).toHaveBeenCalledTimes(1);
    });
  });
});
