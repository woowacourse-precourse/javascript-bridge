const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../../src/view/InputView');

describe('사용자 입력 테스트', () => {
  test('다리 길이 입력 테스트', () => {
    const bridgeSize = 5;
    const nextStep = jest.fn();
    // InputView.validateBridgeSize = jets.fn()
    Console.readLine = jest.fn((message, callback) => {
      nextStep(bridgeSize);
    });
    InputView.readBridgeSize(nextStep);

    expect(nextStep).toHaveBeenCalledWith(bridgeSize);
  });
  test('다리 이동 입력 테스트', () => {
    const movement = 'U';
    const nextStep = jest.fn();
    // InputView.validateBridgeSize = jets.fn()
    Console.readLine = jest.fn((message, callback) => {
      nextStep(movement);
    });
    InputView.readMoving(nextStep);

    expect(nextStep).toHaveBeenCalledWith(movement);
  });
  test('게임 재시작 및 종료 입력 테스트', () => {
    const restartOrQuit = 'Q';
    const nextStep = jest.fn();
    // InputView.validateBridgeSize = jets.fn()
    Console.readLine = jest.fn((message, callback) => {
      nextStep(restartOrQuit);
    });
    InputView.readMoving(nextStep);

    expect(nextStep).toHaveBeenCalledWith(restartOrQuit);
  });
});
