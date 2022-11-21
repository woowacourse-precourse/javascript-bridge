const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../../src/view/InputView');

describe.only('다리 건너기 테스트', () => {
  test('다리 생성 테스트', () => {
    const bridgeSize = 5;
    const nextStep = jest.fn();
    // InputView.validateBridgeSize = jets.fn()
    Console.readLine = jest.fn((message, callback) => {
      nextStep(bridgeSize);
    });
    InputView.readBridgeSize(nextStep);

    expect(nextStep).toHaveBeenCalledWith(bridgeSize);
  });
});
