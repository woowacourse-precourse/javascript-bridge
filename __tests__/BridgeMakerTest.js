const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 기능 단위 테스트', () => {
    it('사용자의 입력값 만큼 다리 길이의 사이즈를 정한다',()=>{
        const bridge = BridgeMaker.makeBridgeTest(15, 1);
        expect(bridge.length).toBe(15);
    })
    it('사용자의 입력값 만큼 다리 길이의 사이즈를 정한다',()=>{
        const bridge = BridgeMaker.makeBridgeTest(3, 1);
        expect(bridge).toEqual([1,1,1]);
    })
});