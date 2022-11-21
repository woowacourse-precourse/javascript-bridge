const { isPlayerPassed, isPlayerCleared } = require('../src/Utils/CheckPlayerStatus');

describe('CheckPlayerStatus 테스트', () => {
  test('[isPlayerPassed] : 입력된 move값과 bridge의 값이 일치하면 true를 반환한다', () => {
    // 조건
    const testMove = 'U';
    const testStage = 'U';

    // 실행
    const isPassed = isPlayerPassed(testMove, testStage);

    // 평가
    expect(isPassed).toBe(true);
  });

  test('[isPlayerPassed] : 입력된 move값과 bridge의 값이 일치하지 않으면 false를 반환한다', () => {
    // 조건
    const testMove = 'U';
    const testStage = 'D';

    // 실행
    const isPassed = isPlayerPassed(testMove, testStage);

    // 평가
    expect(isPassed).toBe(false);
  });

  test('[isPlayerCleared] : 현재 스테이지가 bridge의 size와 같고 다리 건너기에 성공했다면 true를 반환한다', () => {
    // 조건
    const testPlayerStage = 2;
    const testBridgeSize = 2;
    const testIsPassed = true;

    // 실행
    const isCleared = isPlayerCleared(testPlayerStage, testBridgeSize, testIsPassed);

    // 평가
    expect(isCleared).toBe(true);
  });

  // 조건
  test('[isPlayerCleared] : 현재 스테이지가 bridge의 size와 같지 않거나 다리 건너기에 성공하지 못했다면 false를 반환한다', () => {
    // 조건
    const testPlayerStage = 3;
    const testBridgeSize = 4;
    const testIsPassed = false;

    // 실행
    const isCleared = isPlayerCleared(testPlayerStage, testBridgeSize, testIsPassed);

    // 평가
    expect(isCleared).toBe(false);
  });
});
