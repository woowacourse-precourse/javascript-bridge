const BridgeGame = require('../src/models/BridgeGame');

const getMovingTest = (bridge, movingList, want) => {
  return () => {
    const model = new BridgeGame(bridge);
    movingList.forEach((moving) => {
      model.move(moving);
    });

    const result = model.getMoveList().pop().result;
    expect(result).toEqual(want);
  };
};

describe('BridgeGame 테스트', () => {
  test(
    'UUU 다리에서 U 로 움직이면 마지막 결과는 참이다.',
    getMovingTest(['U', 'U', 'U'], ['U'], true)
  );

  test(
    'UUU 다리에서 D 로 움직이면 마지막 결과는 거짓이다.',
    getMovingTest(['U', 'U', 'U'], ['D'], false)
  );

  test(
    'UUU 다리에서 UD 로 움직이면 마지막 결과는 거짓이다.',
    getMovingTest(['U', 'U', 'U'], ['U', 'D'], false)
  );

  test('2번 재시작하면 시도 횟수는 3번이다.', () => {
    const model = new BridgeGame(['U', 'U', 'U']);
    model.retry();
    model.retry();
    expect(model.getTryCount()).toEqual(3);
  });
});
