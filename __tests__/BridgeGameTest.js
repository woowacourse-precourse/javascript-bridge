const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 클래스 테스트", () => {
  test("다리 한칸 이동 테스트: move() -> getLastRoundResult()", () => {
    const bridgeGame = new BridgeGame(['D', 'U', 'D']);
    bridgeGame.move('D');
    expect(bridgeGame.getLastRoundResult()).toEqual(true);
    bridgeGame.move('D');
    expect(bridgeGame.getLastRoundResult()).toEqual(false);
  });

  test("도착 여부 확인 테스트: isArrived()", () => {
    let bridgeGame = null;
    const histories = [
      ['D','D'],
      ['D','D','U'],
      ['D','D','D']
    ];
    const results = [false, false, true]
    histories.forEach((history, idx) => {
      bridgeGame = new BridgeGame(['D','D','D']);
      history.forEach(dir => bridgeGame.move(dir));
      expect(bridgeGame.isArrived()).toEqual(results[idx]);
    });
  });

  test("현재까지의 기록을 문자열로 반환 테스트: stateToString()", () => {
    let bridgeGame = null
    const histories = [
      ['D'],
      ['D','U'],
      ['D','U','U'],
      ['D','U','D']
    ];
    const results = [
      [
        '[   ]',
        '[ O ]'
      ],
      [
        '[   | O ]',
        '[ O |   ]'
      ],
      [
        '[   | O | X ]',
        '[ O |   |   ]'
      ],
      [
        '[   | O |   ]',
        '[ O |   | O ]'
      ],
    ];

    histories.forEach((history, idx) => {
      bridgeGame = new BridgeGame(['D','U','D']);
      history.forEach(dir => bridgeGame.move(dir));
      expect(bridgeGame.stateToString()).toEqual(results[idx]);
    });
  });

  test("재시도 시 초기화 및 횟수 증가 테스트: retry(), getTry()", () => {
    const bridgeGame = new BridgeGame(['D','D','D']);
    bridgeGame.move('D');
    expect(bridgeGame.getTry()).toEqual(1);
    expect(bridgeGame.getLastRoundResult()).toEqual(true);
    
    bridgeGame.retry();
    expect(bridgeGame.getLastRoundResult()).toEqual(false);
    expect(bridgeGame.getTry()).toEqual(2);
  })
});
