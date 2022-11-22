class BridgeGame {
  #bridge;
  #marker = 0;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  move(nextStep) {
    if (nextStep === this.#bridge[this.#marker]) {
      this.#marker += 1;
      //   return [this.getUBlock(), this.getDBlock()];
    } else {
      //   return this.wrongStep(nextStep, this.getUBlock(), this.getDBlock());
    }
  }

  isFinish() {
    if (this.#marker === this.#bridge.length) {
      return true;
    }
    return false;
  }
}

describe('다리의 끝에 도달했는지 확인하는 기능 테스트', () => {
  const bridgeGame = new BridgeGame(['U', 'D', 'D']);
  test('아직 도달하지 않음', () => {
    bridgeGame.move('U');
    expect(bridgeGame.isFinish()).toBeFalsy();
  });
  test('아직 도달하지 않음', () => {
    bridgeGame.move('D');
    expect(bridgeGame.isFinish()).toBeFalsy();
  });
  test('도달함', () => {
    bridgeGame.move('D');
    expect(bridgeGame.isFinish()).toBeTruthy();
  });
});
