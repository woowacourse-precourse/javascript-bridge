const BridgeGame = require('../src/BridgeGame');

describe('다리 건너기 게임 단위 테스트', () => {
    it('다리 앞으로 건너가기', () => {
        const bridgeGame = new BridgeGame();
        const test1 = bridgeGame.move('U', []);
        const test2 = bridgeGame.move('D', []);
        expect(test1).toEqual([1]);
        expect(test2).toEqual([0]);
    });
});