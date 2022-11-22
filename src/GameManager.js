const { NEXT_STEP, RESTART_OR_END, RESULT_KOREAN } = require('./Constant.js');

const OutputView = require('./OutputView.js');
const InputView = require('./InputView.js');

const BridgeGame = require('./BridgeGame.js');
const bridgeGame = new BridgeGame();

class GameManager {
  gameStart() {
    OutputView.gameStart();
    
    this.generateBridge();
  }

  generateBridge() {
    InputView.readBridgeSize((bridgeSize) => {
      bridgeGame.generateBridge(bridgeSize);
      this.gamePlay();
    });
  }

  gamePlay() {
    InputView.readMoving((movingInfo) => {
      const moveTF = bridgeGame.move(movingInfo);

      OutputView.printMap(bridgeGame);

      const nextStep = bridgeGame.judgeNextStep(moveTF);
      this.moveNextStep(nextStep, RESULT_KOREAN.SUCCESS);
    });
  }

  moveNextStep(nextStep, SUCCESS_OR_FAIL) {
    if (nextStep === NEXT_STEP.ONGOING) {
      this.gamePlay();
    } else if (nextStep === NEXT_STEP.RESTART_OR_FAIL) {
      this.gameRestart();
    } else if (nextStep === NEXT_STEP.END) {
      this.gameEnd(SUCCESS_OR_FAIL);
    }
  }

  gameRestart() {
    InputView.readGameCommand((answer) => {
      if (answer === RESTART_OR_END.END) {
        this.moveNextStep(NEXT_STEP.END, RESULT_KOREAN.FAIL);
      } else {
        bridgeGame.retry();
        this.moveNextStep(NEXT_STEP.ONGOING);
      }
    })
  }

  gameEnd(SUCCESS_OR_FAIL) {
    OutputView.printResult(bridgeGame, SUCCESS_OR_FAIL);
  }
}

module.exports = GameManager;