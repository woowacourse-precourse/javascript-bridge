const BridgeGame = require('../src/Model/BridgeGame');

describe('다리 건너기 게임 단위 테스트', () => {
    it('다리 앞으로 건너가기', () => {
        const bridgeGame = new BridgeGame();
        const test = bridgeGame.getRoundInfo();
        bridgeGame.move('U');
        expect(test).toEqual(['U']);
        bridgeGame.move('D');
        expect(test).toEqual(['U','D']);
    });
    it('재시작시 사용자의 입력값 초기화',()=>{
        const bridgeGame = new BridgeGame();
        bridgeGame.move('U');
        bridgeGame.retry('R');
        const test = bridgeGame.getRoundInfo();
        expect(test).toEqual([]);
    });
    it('시도 횟수를 카운트',()=>{
        const bridgeGame = new BridgeGame();
        bridgeGame.retry('R');
        const test = bridgeGame.getTryCount();
        const correct = 2;
        expect(test).toEqual(correct);
    });
});