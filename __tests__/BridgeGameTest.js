const BridgeGame = require('../src/controller/BridgeGame');
const Model = require('../src/model/Model');

describe('BridgeGame 클래스 테스트 1', () => {
  test.each([
    ['U', ' O ', `[ O ]\n[   ]`],
    ['U', ' X ', `[ X ]\n[   ]`],
    ['D', ' O ', `[   ]\n[ O ]`],
    ['D', ' X ', `[   ]\n[ X ]`],
  ])('move 메서드에서 각 상황별 현재 라운드의 게임 결과 테스트', (upOrDown, crossOrNot, answer) => {
    const testModel = new Model();
    BridgeGame.move(upOrDown, crossOrNot, testModel);
    const testResult = testModel.getCurrentMap();
    expect(testResult).toBe(answer);
  });
});

describe('BridgeGame 클래스 테스트 2', () => {
  test('retry 메소드 테스트', () => {
    const testModel = new Model();
    BridgeGame.move('D', ' X ', testModel);
    BridgeGame.retry(testModel);
    expect(testModel.getUpBridgeArr()).toEqual([]);
    expect(testModel.getDownBridgeArr()).toEqual([]);
    expect(testModel.getTryCount()).toBe(2);
  });
});
