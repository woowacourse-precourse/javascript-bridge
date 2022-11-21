const BridgeGame = require('../src/BridgeGame');

describe('다리 건너기 게임 단위 테스트', () => {
    it('다리 앞으로 건너가기', () => {
        const bridgeGame = new BridgeGame();
        const test1 = bridgeGame.move('U', []);
        const test2 = bridgeGame.move('D', []);
        expect(test1).toEqual([1]);
        expect(test2).toEqual([0]);
    });
    it('재시작시 사용자의 입력값 초기화',()=>{
        const bridgeGame = new BridgeGame();
        bridgeGame.move('U', [0,1,1]);
        const test = bridgeGame.retry();
        expect(test).toEqual([]);
    })
});