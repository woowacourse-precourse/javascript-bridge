const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 테스트', () => {
    
    test('다리길이 입력시 3~20 범위의 숫자를 입력하지 않으면 예외처리', () => {

        expect(() => {const bridgeGame = new BridgeGame(21);}).toThrow('[ERROR]');
    });
    
});
