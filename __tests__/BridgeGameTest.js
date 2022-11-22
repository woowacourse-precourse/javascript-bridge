const BridgeGame = require("../src/BridgeGame");


describe('다리 게임 진행', () => {
    test('유저가 선택한 칸이 오답일때 확인', () => {
        const bridgeGame = new BridgeGame();
        bridgeGame.move(["D","U","U"], "U")
        expect(bridgeGame.userPickedUpOrDown[0]).toContain("X");
    })

    test('유저가 선택한 칸이 정답일때 확인', () => {
        const bridgeGame = new BridgeGame();
        bridgeGame.move(["U","D","U"], "U")
        expect(bridgeGame.userPickedUpOrDown[0]).toContain("O");
    })
})