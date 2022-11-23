const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 테스트', () => {
    const bridgeGame = new BridgeGame(3);

    test('유저가 선택한 방향이 맞는 방향인지 불린 리턴', () => {
        expect(bridgeGame.checkCorrect('U','D')
        ).toEqual(false);
    });
    
    test('유저가 선택한 방향으로 갈때 옳은지 판단', () => {
        expect(bridgeGame.moveToSelect('U', true)
        ).toEqual(['O',' '])
    });
    
    test('유저 선택에 따른 무브 데이터 생성', () => {
        bridgeGame.checkCorrect = jest.fn(()=> true);
        bridgeGame.moveToSelect = jest.fn(()=>['O',' '])
        expect(bridgeGame.move('U')).toEqual([true, ['O',' ']])
      });
   
});
