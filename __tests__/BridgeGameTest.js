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
    const testMove = ['U', 'U', 'D'];
    const correctInput = [['U'], ['U', 'U'], ['U', 'U', 'D']];

    // 실행 및 평가
    const game = new BridgeGame();

    testMove.forEach((move, index) => {
      game.move(move);
      const expectInput = game.getStatus().Input;
      const correct = correctInput[index];
      expect(expectInput).toEqual(correct);
    });
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
    const randomSize = Random.pickNumberInRange(3, 20);
    game.initializeBridge(randomSize);
    const originalBridge = game.getStatus().bridge;
    const randomCount = Random.pickNumberInRange(1, 5); // 1 ~ 5번 랜덤으로 retry를 실행하기 위해 필요한 count
    const correctRetryCount = randomCount + 1;

    // 실행
    for (let i = 0; i < randomCount; i += 1) game.retry();
    const expectBridge = game.getStatus().bridge;
    const expectCount = game.getStatus().count;

    // 평가
    expect(expectBridge).toBe(originalBridge);
    expect(expectCount).toBe(correctRetryCount);
  });
});
