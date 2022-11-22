const BridgeGame = require("../src/BridgeGame");

describe('다리 게임 재시작 테스트', () => {
    test('재시작 시 이동한 위치를 저장한 배열을 초기화 한다.', () => {
        const game = new BridgeGame();
        game.retry('R');
        expect(game.getMap()).toEqual([[],[]]);
    })
})