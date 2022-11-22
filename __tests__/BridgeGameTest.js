const Bridge = require("../src/models/Bridge");
const BridgeGame = require("../src/models/BridgeGame");

const makeInstance = () => {
  return new BridgeGame(new Bridge(['U', 'D', 'D']));
}

describe("retry 메소드 테스트", () => {
  const bridgeGame = makeInstance();
  test("재시도 시 시도 횟수가 증가한다.", () => {
    bridgeGame.retry();
    expect(bridgeGame.getResult().attempts).toEqual(2);
  });
});

describe("isAnswer 메소드 테스트", () => {
  const bridgeGame = makeInstance();
  test("이동 방향이 정답이 아닐 때", () => {
    expect(bridgeGame.isAnswer('D')).toEqual(false);
  });

  test("이동 방향이 정답일 때", () => {
    expect(bridgeGame.isAnswer('U')).toEqual(true);
  });
});

describe("updateResult 메소드 테스트", () => {
  test("정답 1번 오답 1번 후 결과 테스트", () => {
    const bridgeGame = makeInstance();
    bridgeGame.updateResult('U');
    bridgeGame.move();
    bridgeGame.updateResult('U');
    expect(bridgeGame.getResult().map.get('U')).toEqual(['O', 'X']);
    expect(bridgeGame.getResult().map.get('D')).toEqual([' ', ' ']);
  });
});




