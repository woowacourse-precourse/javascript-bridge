const BridgeGame = require('../src/model/BridgeGame.js');
const StepResult = require('../src/model/StepResult.js');

describe('BridgeGame 메소드 테스트', () => {
  test('isThisTurnCorrect 인자가 같을 때', () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.isThisTurnCorrect('U', 'U')).toEqual(true);
  });

  test('isThisTurnCorrect 인자가 다를 때', () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.isThisTurnCorrect('U', 'D')).toEqual(false);
  });

  test('move 메소드 테스트 다리가 3개일 때', () => {
    const bridgeGame = new BridgeGame();
    const stepResult = new StepResult();

    const bridgeAnswer = ['U', 'D', 'D'];
    const userAnswer = ['U', 'U', 'U'];

    bridgeAnswer.forEach((thisTurnAnswer, index) => {
      bridgeGame.move(thisTurnAnswer, userAnswer[index], stepResult);
    });
    expect(stepResult.upperBridge === ' O | X | X ' && stepResult.lowerBridge === '   |   |   ').toEqual(true);
  });

  test('move 메소드 테스트 다리가 5개 일때', () => {
    const bridgeGame = new BridgeGame();
    const stepResult = new StepResult();

    const bridgeAnswer = ['U', 'D', 'D', 'U', 'U'];
    const userAnswer = ['U', 'U', 'U', 'U', 'U'];

    bridgeAnswer.forEach((thisTurnAnswer, index) => {
      bridgeGame.move(thisTurnAnswer, userAnswer[index], stepResult);
    });
    expect(
      stepResult.upperBridge === ' O | X | X | O | O ' && stepResult.lowerBridge === '   |   |   |   |   ',
    ).toEqual(true);
  });
});
