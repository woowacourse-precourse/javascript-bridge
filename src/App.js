const BridgeGame = require('./BridgeGame');
const Validator = require('./Utils/Validator');
const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { MOVEMENT_LOG_CODE, USER_INPUT_CODE, MESSAGES } = require('./constants');

class App {
  play() {
    OutputView.printStart();
    this.#submitBridgeSize();
  }

  #submitBridgeSize() {
    InputView.readBridgeSize((value) =>{
      try {
        const bridgeSize = Number(value);
        Validator.bridgeSizeCheck(bridgeSize);
        this.#setBridge(bridgeSize);
      } catch(err) {
        MissionUtils.Console.print(err);
        this.#submitBridgeSize();
      }}
    );
  }

  #setBridge(size) {
    this.game = new BridgeGame(size);
    this.#submitDirection();
  }

  #submitDirection() {
    InputView.readMoving((value) => {
      try {
        const direction = value.toUpperCase();
        Validator.directionCheck(direction);
        this.#moveSpace(direction);
      } catch(err) {
        MissionUtils.Console.print(err);
        this.#submitDirection();
      }
    });    
  }

  #moveSpace(direction) {    
    this.game.move(direction);
    OutputView.printMap(this.game.movementLog);
    if(this.game.isFailed()) return this.#submitRetry();
    if(this.game.isClear()) return this.#quitGame(MESSAGES.CLEARED.SUCESS);
    this.#submitDirection();
  }

  #submitRetry() {
    InputView.readGameCommand((value) => {      
      try {
        const command = value.toUpperCase();
        Validator.retryCheck(command);
        this.#runCommand(command);
      } catch(err) {
        MissionUtils.Console.print(err);
        this.#submitRetry();
      }
    });
  }

  #runCommand(command) {
    if(command === USER_INPUT_CODE.RETRY.AGREE) {
      this.game.retry();
      this.#submitDirection();
    } else if(command === USER_INPUT_CODE.RETRY.QUIT) {
      this.#quitGame(MESSAGES.CLEARED.FAILED);
    }
  }

  #quitGame(clear) {
    const log = this.game.movementLog;
    const tryCount = this.game.tryCount;
    OutputView.printResult(log, tryCount, clear);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
