const BridgeGame = require("../src/BridgeGame");

describe("게임 관리 클래스 테스트", () => {
  const bridge = ['U','D','D','U','U','U','D']
  const bridgeGame = new BridgeGame(bridge, {moved:[], attempts:1});

  test("이동한 칸을 방문 목록에 추가한다.", () => {
    const movings = ['U','D','D'];
    movings.forEach((moving)=>{
      bridgeGame.move(moving);
    })
    const moved = bridgeGame.move('U');

    expect(moved).toEqual(['U','D','D','U']);
  });

  test("이동한 결과를 판단하여 해당하는 값을 반환한다.", () => {
    const result = [];
    const movings = ['U','D'];
    movings.forEach((moving)=>{
      bridgeGame.move(moving);
      result.push(bridgeGame.status());
    });

    expect(result).toEqual([1, 0]);
  });

  test("사용자 게임 정보를 반환한다.", () => {
    const { moved, attempts } = bridgeGame.get();

    expect(moved).toEqual(['U','D','D','U','U','D']);
    expect(attempts).toEqual(1);
  });

  test("시도횟수를 추가하고, 방문 목록을 초기화한다.", () => {
    bridgeGame.retry();
    const { moved, attempts } = bridgeGame.get();

    expect(moved).toEqual([]);
    expect(attempts).toEqual(2);
  })
});