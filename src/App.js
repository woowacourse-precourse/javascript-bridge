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
      let upStep = this.brideGame.getup();
      let downStep = this.brideGame.getdown();
      OutputView.printMap(upStep,downStep);
      let firstDesideKey = this.brideGame.getscore();
      this.decideControl(firstDesideKey);
    } catch(error) {
      this.retryRequestMoving();
    }
  }

  tryBuildRetry(command) {
    try{
      let controlKey = this.brideGame.retry(command);
      this.decideControl(controlKey);
    } catch(error) {
      this.retryRequestCommand();
    }
  }

  decideControl(controlKey) {
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

const app = new App();
app.play();

module.exports = App;