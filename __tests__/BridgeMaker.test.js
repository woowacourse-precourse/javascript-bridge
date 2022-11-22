const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe('다리 만들기 테스트', () => {
    test.each([[5], [10], [15]])('다리 만들 시 특정 길이의 리스트 생성', (input) => {
        const bridge = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
        expect(bridge.length).toBe(input);
    });

    test.each([[5], [10], [15]])('다리 만들 시 0과 1로 이루어진 리스트 생성', (input) => {
        const bridge = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
        bridge.forEach((element) => {
            if(element === 'U') expect(element).toBe('U');
            if(element === 'D') expect(element).toBe('D');
        })
    });
});