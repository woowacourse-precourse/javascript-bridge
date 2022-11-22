const BridgeGameStatus = require('../src/models/BridgeGameStatus');

describe('다리 건너기 게임 상태 클래스 테스트', () => {
  const bridgeGameStatus = new BridgeGameStatus();

  test('위치의 초기값은 -1', () => {
    const result = bridgeGameStatus.getLocation();

    expect(result).toEqual(-1);
  });

  test('시도 횟수 초기값은 0', () => {
    const result = bridgeGameStatus.getTryCount();

    expect(result).toEqual(0);
  });

  test('다리 위치 증가', () => {
    bridgeGameStatus.increaseLocation();
    const result = bridgeGameStatus.getLocation();

    expect(result).toEqual(0);
  });

  test('시도 횟수 증가', () => {
    bridgeGameStatus.increaseTryCount();
    const result = bridgeGameStatus.getTryCount();

    expect(result).toEqual(1);
  });
});

describe('현재 위치 상태 테스트', () => {
  const bridgeGameStatus = new BridgeGameStatus();

  beforeAll(() => {
    bridgeGameStatus.increaseLocation();
    bridgeGameStatus.increaseLocation();
    bridgeGameStatus.increaseLocation();
  });

  test('마지막 위치와 현재 위치가 다르면 false', () => {
    const result = bridgeGameStatus.isLastLocation(4);

    expect(result).toEqual(false);
  });

  test('마지막 위치와 현재 위치가 같으면 true', () => {
    const result = bridgeGameStatus.isLastLocation(3);

    expect(result).toEqual(true);
  });

  test('마지막 위치와 현재 위치가 같고 건너지 못했다면 false', () => {
    const result = bridgeGameStatus.isWin(3, false);

    expect(result).toEqual(false);
  });

  test('마지막 위치와 현재 위치가 같고 건넜다면 true', () => {
    const result = bridgeGameStatus.isWin(3, true);

    expect(result).toEqual(true);
  });

  test.each([[true], [false]])(
    '마지막 위치와 현재 위치가 다르면 건너기 성공 유무와 상관없이 false',
    (isCrossed) => {
      const result = bridgeGameStatus.isWin(4, isCrossed);

      expect(result).toEqual(false);
    },
  );

  test('시도 횟수 초기화', () => {
    bridgeGameStatus.resetLocation();
    const result = bridgeGameStatus.getLocation();

    expect(result).toEqual(-1);
  });
});
