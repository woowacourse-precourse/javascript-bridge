const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  // 기본 설정
  const game = new BridgeGame();
  const bridge = ['U', 'D', 'U'];
  game.setBridge(bridge);

  test('생성된 다리 방향과 입력한 방향의 일치 여부를 확인하는 isAccord 메서드 true 반환 검증', () => {
    // 실행
    const expectTrue = game.isAccord('U');

    // 검증
    expect(expectTrue).toEqual(true);
  });

  test('생성된 다리 방향과 입력한 방향의 일치 여부를 확인하는 isAccord 메서드 false 반환 검증', () => {
    // 실행
    const expectFalse = game.isAccord('D');

    // 검증
    expect(expectFalse).toEqual(false);
  });

  test('한 다리를 건너 다음 다리에 대해 다룰 수 있도록 하는 move 메서드 검증', () => {
    // 실행
    game.move();

    // 검증
    expect(game.isAccord('D')).toEqual(true);
  });

  test('다리의 처음으로 돌아가는 retry 메서드 검증', () => {
    // 실행
    game.retry();

    // 검증
    expect(game.isAccord('D')).toEqual(false);
  });

  test('모든 다리를 건넜는지 여부를 확인하는 isEnd 메서드 true 반환 검증', () => {
    // 설정
    game.move();
    game.move();
    game.move();

    // 실행
    const expectTrue = game.isEnd();

    // 검증
    expect(expectTrue).toEqual(true);
  });

  test('모든 다리를 건넜는지 여부를 확인하는 isEnd 메서드 false 반환 검증', () => {
    // 설정
    game.retry();
    game.move();
    game.move();

    // 실행
    const expectFalse = game.isEnd();

    // 검증
    expect(expectFalse).toEqual(false);
  });
});
