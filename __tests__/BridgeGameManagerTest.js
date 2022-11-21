const { describe, expect, test } = require('@jest/globals');
const BridgeGameManager = require('../src/BridgeGameManager');
const OutputView = require('../src/View/OutputView');

const bridgeGameManager = new BridgeGameManager();

// start 메서드 테스트
describe('start 메서드 테스트', () => {
  test('printStartMessage 메서드 호출 테스트', () => {
    const printStartMessageSpy = jest.spyOn(OutputView, 'printStartMessage');

    bridgeGameManager.start();

    expect(printStartMessageSpy).toHaveBeenCalledTimes(1);
  });
});

// createBridgeGame 메서드 테스트

// requestBridgeSize 메서드 테스트

// printBridgeCrossingResult 메서드 테스트

// actionAboutBridgeGame 메서드 테스트

// requestDirection 메서드 테스트

// restart 메서드 테스트

// printBridgeGameResult 메서드 테스트

// quit 메서드 테스트

// actionAboutGameCommand 메서드 테스트

// requestRestartOrQuit 메서드 테스트
