/* eslint max-lines-per-function: 0 */
const BridgeGameController = require('../src/BridgeGameController');

describe('checkRetry 함수 호출 검사', () => {
  test('입력이 R이면 재시도할 때 호출되는 함수 askMove()를 호출한다.', () => {
    const bridgeGameController = new BridgeGameController();
    const spyGetRetry = jest.spyOn(bridgeGameController, 'askMove');
    const spyGetFinish = jest.spyOn(bridgeGameController, 'finishGame');

    bridgeGameController.checkRetry('R');
    expect(spyGetRetry).toBeCalledTimes(1);
    expect(spyGetFinish).toBeCalledTimes(0);
  });

  test('입력이 Q이면 게임을 종료하는 함수 finishGame()를 호출한다.', () => {
    const bridgeGameController = new BridgeGameController();
    const spyGetRetry = jest.spyOn(bridgeGameController, 'askMove');
    const spyGetFinish = jest.spyOn(bridgeGameController, 'finishGame');

    bridgeGameController.checkRetry('Q');
    expect(spyGetRetry).toBeCalledTimes(0);
    expect(spyGetFinish).toBeCalledTimes(1);
  });
});
