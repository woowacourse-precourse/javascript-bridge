const { describe, expect, test } = require('@jest/globals');
const { Random } = require('@woowacourse/mission-utils');
const BridgeGameManager = require('../src/BridgeGameManager');
const BridgeMaker = require('../src/BridgeMaker');
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
describe('createBridgeGame 메서드 테스트', () => {
  const makeBridgeSpy = jest.spyOn(BridgeMaker, 'makeBridge');
  bridgeGameManager.createBridgeGame(3);

  test('BridgeMaker.makeBridge 메서드 호출 테스트', () => {
    expect(makeBridgeSpy).toHaveBeenCalledTimes(1);
  });

  test('size에 맞는 길이의 다리가 생성된다.', () => {
    expect(makeBridgeSpy.mock.results[0].value).toHaveLength(3);
  });

  test('생성된 다리 배열이며 U 또는 D만 요소로 가진다.', () => {
    const expected = [expect.stringMatching(/[UD]/)];
    expect(makeBridgeSpy.mock.results[0].value).toEqual(
      expect.arrayContaining(expected)
    );
  });
});

// requestBridgeSize 메서드 테스트

// printBridgeCrossingResult 메서드 테스트

// actionAboutBridgeGame 메서드 테스트

// requestDirection 메서드 테스트

// restart 메서드 테스트

// printBridgeGameResult 메서드 테스트

// quit 메서드 테스트

// actionAboutGameCommand 메서드 테스트

// requestRestartOrQuit 메서드 테스트
