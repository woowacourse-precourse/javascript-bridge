const BridgeGame = require('../src/BridgeGame');
const { Random } = require('@woowacourse/mission-utils');

describe('BridgeGame 테스트', () => {
  test('[initializeBridge] 다리가 정상적으로 생성되는지 테스트', () => {
    // 조건
    const size = 3;

    // 실행
    const game = new BridgeGame();
    game.initializeBridge(size);

    // 평가
    const expectResult = game.getStatus().bridge.length;
    expect(expectResult).toBe(size);
  });

  test('[move] 움직임 입력이 정상적으로 모델에 반영되는지 테스트', () => {
    // 조건
    const testMove = 'U';
    const correctInput = ['U'];

    // 실행
    const game = new BridgeGame();
    game.move(testMove);
    const expectInput = game.getStatus().Input;

    // 평가
    expect(expectInput).toEqual(correctInput);
  });

  test('[setMoveOutput] : isPassed값과 isCleard이 정상적으로 모델에 반영되는지 테스트', () => {
    // 조건
    const testInput = [
      [true, true],
      [false, false],
    ];
    const correctResult = [
      [true, true],
      [false, false],
    ];
    // 실행 및 평가
    const game = new BridgeGame();
    testInput.forEach((input, index) => {
      const testIsPassed = input[0];
      const testIsCleared = input[1];

      game.setMoveOutput(testIsPassed, testIsCleared);
      const expectIsPassed = game.getStatus().isPassed;
      const expectIsCleared = game.getStatus().isCleared;

      const correctIsPassed = correctResult[index][0];
      const correctIsCleared = correctResult[index][1];

      expect(expectIsPassed).toBe(correctIsPassed);
      expect(expectIsCleared).toBe(correctIsCleared);
    });
  });

  test('[retry] : retry시 bridge의 데이터를 바꾸지 않고 정상적으로 시도 횟수를 증가시키는지 확인한다.', () => {
    // 조건
    const game = new BridgeGame();
    game.initializeBridge(3);
    const originalBridge = game.getStatus().bridge;
    const correctCount = 2;

    // 실행
    game.retry();
    const expectBridge = game.getStatus().bridge;
    const expectCount = game.getStatus().count;

    // 평가
    expect(expectBridge).toBe(originalBridge);
    expect(expectCount).toBe(correctCount);
  });
});
