const BridgeGame = require('../src/model/BridgeGame.js');
const StepResult = require('../src/model/StepResult.js');

describe('move 메소드 테스트', () => {
  test('다리가 3개일 떄', () => {
    const bridgeGame = new BridgeGame();
    const stepResult = new StepResult();

    const bridgeAnswer = ['U', 'D', 'D'];
    const userAnswer = ['U', 'U', 'U'];

    bridgeAnswer.forEach((thisTurnAnswer, index) => {
      bridgeGame.move(thisTurnAnswer, userAnswer[index], stepResult);
    });
    expect(stepResult.upperBridge === ' O | X | X ' && stepResult.lowerBridge === '   |   |   ').toBe(true);
  });

  test('다리가 5개 일때', () => {
    const bridgeGame = new BridgeGame();
    const stepResult = new StepResult();

    const bridgeAnswer = ['U', 'D', 'D', 'U', 'U'];
    const userAnswer = ['U', 'U', 'U', 'U', 'U'];

    bridgeAnswer.forEach((thisTurnAnswer, index) => {
      bridgeGame.move(thisTurnAnswer, userAnswer[index], stepResult);
    });
    expect(stepResult.upperBridge === ' O | X | X | O | O ' && stepResult.lowerBridge === '   |   |   |   |   ').toBe(
      true,
    );
  });
});
