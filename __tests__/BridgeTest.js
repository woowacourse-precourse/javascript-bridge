const Bridge = require('../src/Model/Bridge');

describe('Bridge', () => {
    it('입력된 길이만큼 다리 생성', () => {
        const bridge = new Bridge();
        const bridgeLength  = 10;
        const correct = 10;
        const test = () => bridge.make(bridgeLength);
        expect(test().length).toBe(correct);
    });
});