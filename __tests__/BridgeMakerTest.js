const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('다리 생성 기능 단위 테스트', () => {

    it('사용자 입력값을 크기로 갖는 배열을 생성한다.',()=>{
        const bridge = BridgeMaker.makeBridge(3, BridgeRandomNumberGenerator.generate);
        expect(bridge.length).toBe(3);
    })
});