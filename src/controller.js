const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView")
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame();
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const userBridgeCorrect = bridgeGame.userPickedUpOrDown;
const { COMMAND, BRIDGE_MAP, CONSTRAINTS_NUMBER } = require("./Constants");

class Controller{
    #number;
    #selectUpOrDown;
    #value;

    start(){
        OutputView.printStart();
        this.#number = InputView.readBridgeSize();
        this.createBridge = makeBridge(this.#number, generate);
        this.gameProgress()
    }

    gameProgress(){
        while(bridgeGame.userPickedArr.length < this.#number){
            this.#selectUpOrDown = InputView.readMoving();
            bridgeGame.move(this.createBridge, this.#selectUpOrDown);
            OutputView.printMap(userBridgeCorrect[CONSTRAINTS_NUMBER.BRIDGE_DOWN], userBridgeCorrect[CONSTRAINTS_NUMBER.BRIDGE_UP]);
            this.userPickedIsWrong(userBridgeCorrect);
        }
        OutputView.printResult(userBridgeCorrect[CONSTRAINTS_NUMBER.BRIDGE_DOWN], userBridgeCorrect[CONSTRAINTS_NUMBER.BRIDGE_UP], bridgeGame.attemptCount);
    }

    userPickedIsWrong(userBridgeCorrect){
        if(userBridgeCorrect[CONSTRAINTS_NUMBER.BRIDGE_DOWN].includes(BRIDGE_MAP.WRONG) || userBridgeCorrect[CONSTRAINTS_NUMBER.BRIDGE_UP].includes(BRIDGE_MAP.WRONG)){
            this.gameRunningSelect();
        }
    }

    gameRunningSelect(){
        this.#value = InputView.readGameCommand();
        this.gameFail(this.#value);
        this.gameRestart(this.#value);

    }

    gameFail(value){
        if(value == COMMAND.QUIT){
          OutputView.printFailResult(userBridgeCorrect[CONSTRAINTS_NUMBER.BRIDGE_DOWN], userBridgeCorrect[CONSTRAINTS_NUMBER.BRIDGE_UP], bridgeGame.attemptCount);
          Console.close();
        }
    }

    gameRestart(value){
        if(value == COMMAND.RESTART){
          bridgeGame.retry();
          this.gameProgress();
        }
    }
}

module.exports = Controller;