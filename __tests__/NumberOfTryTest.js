class BridgeGame {
  #numberOfTry = 1;

  retry() {
    this.#numberOfTry += 1;
  }

  getNumberOfTry() {
    return this.#numberOfTry;
  }
}

describe('시도 횟수 전달하는 기능 테스트', () => {
  const bridgeGame = new BridgeGame();
  const InputView = {
    // ...
    getNumberOfTry(numberOfTry) {
      // ...
      return numberOfTry;
    },

    increaseRetry(bridgeGame) {
      bridgeGame.retry();
    },
  };

  test('기본 횟수 1', () => {
    expect(InputView.getNumberOfTry(bridgeGame.getNumberOfTry())).toBe(1);
  });

  test('재시도 1회', () => {
    InputView.increaseRetry(bridgeGame);
    expect(InputView.getNumberOfTry(bridgeGame.getNumberOfTry())).toBe(2);
  });
  test('재시도 4회', () => {
    InputView.increaseRetry(bridgeGame);
    InputView.increaseRetry(bridgeGame);
    InputView.increaseRetry(bridgeGame);
    expect(InputView.getNumberOfTry(bridgeGame.getNumberOfTry())).toBe(5);
  });
});
