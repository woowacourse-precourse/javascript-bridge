const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 테스트', () => {
   
   test('유저가 선택한 방향으로 갈때 옳은지 판단', () => {
    const bridgeGame = new BridgeGame(3);
    expect(bridgeGame.moveToSelect('U', true)
    ).toEqual(['O',' '])
   });
   
});
