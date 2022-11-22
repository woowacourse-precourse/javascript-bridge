/* eslint max-lines-per-function: 0 */
const BridgeGame = require('../src/Game/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeGameController = require('../src/Game/BridgeGameController');

describe('setBridge 함수 호출 검사', () => {
  test('Bridgemaker 객체의 makeBridge 함수를 호출하여 다리를 만든다.', () => {
    const spyGet = jest.spyOn(BridgeMaker, 'makeBridge');
    const bridgeGameController = new BridgeGameController();
    bridgeGameController.setBridge(3);
    expect(spyGet).toBeCalledTimes(1);
  });
});

describe('updateStatus 함수 호출 검사', () => {
  const bridgeGame = new BridgeGame(['U', 'D', 'D']);
  const spyGet = jest.spyOn(bridgeGame, 'checkSuccess');

  test('사용자가 선택한 칸이 correct하지 않다면 checkSuccess() 함수를 호출하지 않는다.', () => {
    const correct = false;
    bridgeGame.updateStatus(correct);
    expect(spyGet).toBeCalledTimes(0);
  });

  test('사용자가 선택한 칸이 correct하다면 checkSuccess() 함수를 호출하여 게임 성공 여부를 확인한다.', () => {
    const correct = true;
    bridgeGame.updateStatus(correct);
    expect(spyGet).toBeCalledTimes(1);
  });
});

describe('isCorrect 함수 반환값 검사', () => {
  const bridgeGame = new BridgeGame(['U', 'U', 'D']);

  test('사용자가 입력한 칸이 건널 수 있는 칸이면 true를 반환한다.', () => {
    const correct = bridgeGame.isCorrect('U');
    expect(correct).toBeTruthy();
  });

  test('사용자가 입력한 칸이 건널 수 없는 칸이면 false를 반환한다.', () => {
    const correct = bridgeGame.isCorrect('D');
    expect(correct).toBeFalsy();
  });
});

describe('기능 - 게임 상태 판단 검사', () => {
  test('다리를 다 건너면 isGameOver()과 isSucessful()이 true 값을 반환한다.', () => {
    const bridgeGame = new BridgeGame(['U', 'U', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');
    expect(bridgeGame.isGameOver()).toBeTruthy();
    expect(bridgeGame.isSuccessful()).toBeTruthy();
  });

  test('다리를 건너다 실패하면 isGameOver()은 true지만 isSucessful()은 false 값을 반환한다.', () => {
    const bridgeGame = new BridgeGame(['U', 'U', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('D');
    expect(bridgeGame.isGameOver()).toBeTruthy();
    expect(bridgeGame.isSuccessful()).toBeFalsy();
  });

  test('다리를 건너다 실패하고 재시도하면 isGameOver()과 isSucessful()은 false 값을 반환한다.', () => {
    const bridgeGame = new BridgeGame(['U', 'U', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('D');
    expect(bridgeGame.isGameOver()).toBeFalsy();
    expect(bridgeGame.isSuccessful()).toBeFalsy();
  });
});
