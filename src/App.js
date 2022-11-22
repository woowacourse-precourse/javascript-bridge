const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const Validate = require("./Validate");
const{ CONTROL } = require("./constants/Values");

class App {

  constructor() {
    this.brideGame = new BridgeGame();
    this.validate =  new Validate();
  }

  play() {
    OutputView.printStart();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize(this.tryBuildBridge.bind(this));
  }

  requestMoving() {
    InputView.readMoving(this.tryBuildMoving.bind(this));
  }

  requestCommand() {
    InputView.readGameCommand(this.tryBuildRetry.bind(this))
  }

  tryBuildBridge(size) {
    try {
      this.validate.validateBridgeSize(size);
      this.brideGame.ready(size);
      this.requestMoving();
    } catch(error) {
      this.retryRequestBridgeSize();
    }
  }

  tryBuildMoving(moving) {
    try {
      this.validate.validateMove(moving);
      this.brideGame.move(moving);
      OutputView.printMap(this.brideGame.getUp(),this.brideGame.getDown());
      this.decideController(this.brideGame.getScore());
    } catch(error) {
      this.retryRequestMoving();
    }
  }

  tryBuildRetry(command) {
    try{
      this.validate.validateCommand(command);
      let controlKey = this.brideGame.retry(command);
      this.decideController(controlKey);
    } catch(error) {
      this.retryRequestCommand();
    }
  }

  decideController(controlKey) {
    if(controlKey === CONTROL.PASS_STEP) this.requestMoving();
    if(controlKey === CONTROL.GAME_END) {
      let movingList = this.brideGame.getRecordSteps();
      let result = this.brideGame.getSucessValue();
      let replay = this.brideGame.getCountReplyNumber();
      OutputView.printResult(movingList, result, replay);
    }
    if(controlKey === CONTROL.GAME_OVER) this.requestCommand();
  }

  retryRequestBridgeSize() {
    OutputView.printValidateSizeError();
    this.requestBridgeSize();
  }

  retryRequestMoving() {
    OutputView.printValidateStringError();
    this.requestMoving();
  }

  retryRequestCommand() {
    OutputView.printValidateStringCommandError();
    this.requestCommand();
  }
}

module.exports = App;