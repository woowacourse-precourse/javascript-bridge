const StepResult = require('../src/model/StepResult.js');

describe('StepResult 메소드 테스트', () => {
  test('wrongStepRecord 테스트 유저가 D를 선택했을 경우', () => {
    const stepResult = new StepResult();
    stepResult.wrongStepRecord('D');
    expect(stepResult.upperBridge).toEqual('   ');
    expect(stepResult.lowerBridge).toEqual(' X ');
  });

  test('wrongStepRecord 테스 유저가 U를 선택했을 경우', () => {
    const stepResult = new StepResult();
    stepResult.wrongStepRecord('U');
    expect(stepResult.upperBridge).toEqual(' X ');
    expect(stepResult.lowerBridge).toEqual('   ');
  });

  test('correctStepRecord 테스트 유저가 D를 선택했을 경우', () => {
    const stepResult = new StepResult();
    stepResult.correctStepRecord('D');
    expect(stepResult.upperBridge).toEqual('   ');
    expect(stepResult.lowerBridge).toEqual(' O ');
  });

  test('correctStepRecord 테스 유저가 U를 선택했을 경우', () => {
    const stepResult = new StepResult();
    stepResult.correctStepRecord('U');
    expect(stepResult.upperBridge).toEqual(' O ');
    expect(stepResult.lowerBridge).toEqual('   ');
  });
});
