const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView")
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame();
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const userBridgeCorrect = bridgeGame.userPickedUpOrDown;

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
            OutputView.printMap(userBridgeCorrect[0], userBridgeCorrect[1]);
            this.userPickedIsWrong(userBridgeCorrect);
        }
        OutputView.printResult(userBridgeCorrect[0], userBridgeCorrect[1], bridgeGame.attemptCount);
    }

    userPickedIsWrong(userBridgeCorrect){
        if(userBridgeCorrect[0].includes("X") || userBridgeCorrect[1].includes("X")){
            this.gameRunningSelect();
        }
    }

    gameRunningSelect(){
        this.#value = InputView.readGameCommand();
        this.gameFail(this.#value);
        this.gameRestart(this.#value);

    }

    gameFail(value){
        if(value == 'Q'){
          OutputView.printFailResult(userBridgeCorrect[0], userBridgeCorrect[1], bridgeGame.attemptCount);
          Console.close();
        }
    }

    gameRestart(value){
        if(value == 'R'){
          bridgeGame.retry();
          this.gameProgress();
        }
    }
}

module.exports = Controller;