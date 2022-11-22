const BridgeGame = require('../src/BridgeGame');

describe("다리 건너기 게임 로직 테스트", () => {
    test("move 실행 시 값 변경", () => {
        const bridgeGame = new BridgeGame(["U","D","D"])
        bridgeGame.move("U")
        expect(bridgeGame.count).toBe(1)
    });
    
});



