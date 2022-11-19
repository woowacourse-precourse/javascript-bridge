const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('다리 만들기 테스트', () => {
  test('다리 생성 시 입력한 길이만큼의 다리 배열이 생성된다.', () => {
    const testBridge = BridgeMaker.makeBridge(5,BridgeRandomNumberGenerator.generate);
    expect(testBridge.length).toEqual(5);
  });

  test('다리 생성 시 랜덤으로 생성된 배열의 요소는 U와 D로 한정된다.', () => {
    const testBridge = BridgeMaker.makeBridge(5,BridgeRandomNumberGenerator.generate);
    const uniqueTestBridgeSet = new Set(testBridge);
    expect(uniqueTestBridgeSet.size < 3).toBeTruthy();
  })
});
