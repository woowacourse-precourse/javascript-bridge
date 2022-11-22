const BridgeGame = require('../src/BridgeGame.js');

describe("BridgeGame 클래스 테스트", () => {
  test("isCorrect 메소드 boolean 타입 테스트", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.makeBridge(5);
    bridgeGame.move("U");
    const isCorrect = bridgeGame.getIsCorrect();

    expect([true, false]).toContain(isCorrect);
  });

  test("move 메소드 U 입력 시 O or X 심볼 추가 확인 테스트", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.makeBridge(5);
    bridgeGame.move("U");
    const [upBridge, downBridge] = bridgeGame.getCurrentBridge();

    expect(1).toEqual(upBridge.length);
  });

  test("move 메소드 D 입력 시 O or X 심볼 추가 확인 테스트", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.makeBridge(5);
    bridgeGame.move("U");
    const [upBridge, downBridge] = bridgeGame.getCurrentBridge();

    expect(1).toEqual(downBridge.length);
  });

  test("retry 메소드 currentBridge 초기화 확인 테스트 ", () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.makeBridge(5);
    bridgeGame.move("U");
    bridgeGame.retry();
    const [upBridge, downBridge] = bridgeGame.getCurrentBridge();
    
    expect([]).toEqual(upBridge);
    expect([]).toEqual(downBridge);
  });
})