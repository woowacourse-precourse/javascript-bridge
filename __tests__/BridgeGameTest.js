const BridgeGame = require('../src/BridgeGame');

describe('다리 건너기 게임 단위 테스트', () => {
    it('다리 앞으로 건너가기', () => {
        const bridgeGame = new BridgeGame([],[],1);
        const test = bridgeGame.getUserInputArray();
        bridgeGame.move('U');
        expect(test).toEqual([1]);
        bridgeGame.move('D')
        expect(test).toEqual([1,0]);
    });
    it('재시작시 사용자의 입력값 초기화',()=>{
        const bridgeGame = new BridgeGame([],[],1);
        bridgeGame.move('U');
        bridgeGame.retry();
        const test = bridgeGame.getUserInputArray();
        expect(test).toEqual([]);
    });
    it('시도 횟수를 카운트',()=>{
        const bridgeGame = new BridgeGame([],[],1);
        bridgeGame.countTries();
        const test = bridgeGame.getTryCount();
        const correct = 2;
        expect(test).toEqual(correct);
    });
    it('게임 승리 여부 판별',()=>{
        const bridgeGame = new BridgeGame([0, 0],[0, 1, 0, 1],1);
        const test = bridgeGame.isUserWin();
        expect(test).toBeFalsy();
    });
});