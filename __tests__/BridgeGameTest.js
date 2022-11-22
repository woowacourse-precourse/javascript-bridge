const BridgeGame = require('../src/BridgeGame');
const Model = require('../src/Model');

describe('BridgeGame 클래스 테스트 1', () => {
  test('move 메소드 - U 입력하고 맞췄을 경우', () => {
    const testModel = new Model();
    BridgeGame.move('U', ' O ', testModel);
    const testResult = testModel.getCurrentMap();
    expect(testResult).toBe(`[ O ]\n[   ]`);
  });
});

describe('BridgeGame 클래스 테스트 2', () => {
  test('move 메소드 - U 입력하고 틀렸을 경우', () => {
    const testModel = new Model();
    BridgeGame.move('U', ' X ', testModel);
    const testResult = testModel.getCurrentMap();
    expect(testResult).toBe(`[ X ]\n[   ]`);
  });
});

describe('BridgeGame 클래스 테스트 3', () => {
  test('move 메소드 - D 입력하고 맞췄을 경우', () => {
    const testModel = new Model();
    BridgeGame.move('D', ' O ', testModel);
    const testResult = testModel.getCurrentMap();
    expect(testResult).toBe(`[   ]\n[ O ]`);
  });
});

describe('BridgeGame 클래스 테스트 4', () => {
  test('move 메소드 - D 입력하고 틀렸을 경우', () => {
    const testModel = new Model();
    BridgeGame.move('D', ' X ', testModel);
    const testResult = testModel.getCurrentMap();
    expect(testResult).toBe(`[   ]\n[ X ]`);
  });
});

describe('BridgeGame 클래스 테스트 4', () => {
  test('retry 메소드', () => {
    const testModel = new Model();
    BridgeGame.move('D', ' X ', testModel);
    BridgeGame.retry(testModel);
    expect(testModel.getUpBridgeArr()).toEqual([]);
    expect(testModel.getDownBridgeArr()).toEqual([]);
    expect(testModel.getTryCount()).toBe(2);
  });
});
